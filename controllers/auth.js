const crypto = require("crypto");

const bcrypt = require("bcryptjs");
const sgMail = require('@sendgrid/mail');

const User = require("../models/user");

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
  res.status(200).json({
    message: "success",
    data: user,
  });
};

exports.postLogin = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.postReset = async(req, res, next) => {
  crypto.randomBytes(32, (err, buf) => {
    if (err) throw err;
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
      subject: '[맵학원] 비밀번호 복구 요청',
      html: `<p>비밀번호를 복구하려면 <a href="http://www.mapacademy.com/api/reset/${token}">여기</a>를 클릭하세요.</p>`,
    };
    sgMail.send(msg);
    return res.status(204).end()
  });
};

exports.getNewPassword = (req, res, next) => {};

exports.postNewPassword = (req, res, next) => {};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    return res.status(204).end()
  });
};
