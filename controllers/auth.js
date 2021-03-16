const path = require("path");
const crypto = require("crypto");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");
const User = require("../models/user");

dotenv.config({ path: path.join(__dirname, "..", "config.env") });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.postSignup = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 12);
  const user = new User({
    email: email,
    password: hashedPassword,
  });
  await user.save();
  return res.status(200).json({
    message: "success",
    data: user,
  });
};

exports.postLogin = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(404).json({
      message: "error",
      error: "입력하신 이메일로 가입한 이용자가 존재하지 않습니다.",
    });
  }
  const doMatch = await bcrypt.compare(password, user.password);
  if (!doMatch) {
    return res.status(404).json({
      message: "error",
      error: "비밀번호가 유효하지 않습니다.",
    });
  }
  req.session.user = user;
  req.session.isLoggedIn = true;
  req.session.save((err) => {
    return res.status(200).json({
      message: "success",
      data: user,
    });
  });
};

exports.postReset = async (req, res, next) => {
  crypto.randomBytes(32, async (err, buf) => {
    const token = buf.toString("hex");
    const email = req.body.email;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        message: "error",
        error: "입력하신 이메일로 가입한 이용자가 존재하지 않습니다.",
      });
    }
    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 300000;
    await user.save();
    const msg = {
      to: req.body.email,
      from: process.env.SENDGRID_SENDER_EMAIL,
      subject: "[맵학원] 비밀번호 복구 요청",
      html: `<p>비밀번호를 복구하려면 <a href="http://127.0.0.1:5000/reset/${token}">여기</a>를 클릭하세요.</p>`,
    };
    sgMail.send(msg);
    return res.status(204).end();
  });
};

exports.getNewPassword = async (req, res, next) => {
  const token = req.params.token;
  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiration: {
      $gt: Date.now(),
    },
  });
  if (!user) {
    return res.status(404).render("expired", {
      heading: "요청이 만료되었습니다.",
      action: "다시 시도하세요.",
    });
  }
  return res.status(200).render("new-password", {
    userId: user._id.toString(),
    passwordToken: token,
  });
};

exports.postNewPassword = async (req, res, next) => {
  const newPassword = req.body.password;
  const userId = req.body.userId;
  const passwordToken = req.body.passwordToken;
  const user = await User.findOne({
    resetToken: passwordToken,
    resetTokenExpiration: {
      $gt: Date.now(),
    },
    _id: userId,
  });
  if (!user) {
    return res.status(404).render("expired", {
      heading: "요청이 만료되었습니다.",
      action: "다시 시도하세요.",
    });
  }
  const hashedPassword = await bcrypt.hash(newPassword, 12);
  user.password = hashedPassword;
  user.resetToken = undefined;
  user.resetTokenExpiration = undefined;
  await user.save();
  return res.redirect("/complete");
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    return res.status(204).end();
  });
};

exports.getComplete = (req, res, next) => {
  return res.status(200).render("complete", {
    heading: "비밀번호가 변경되었습니다.",
    action: "로그인하세요.",
  });
};
