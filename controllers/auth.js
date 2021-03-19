const path = require("path");
const crypto = require("crypto");
const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");
const sgMail = require("@sendgrid/mail");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

dotenv.config({ path: path.join(__dirname, "..", "config.env") });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.postSignup = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (user) {
      const error = new Error("이미 가입한 이메일입니다.");
      error.statusCode = 422;
      return next(error);
    }
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
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

exports.postLogin = async (req, res, next) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error(
        "입력하신 이메일로 가입한 계정이 존재하지 않습니다."
      );
      error.statusCode = 404;
      return next(error);
    }
    const password = req.body.password;
    const doMatch = await bcrypt.compare(password, user.password);
    if (!doMatch) {
      const error = new Error("올바르지 않은 비밀번호입니다.");
      error.statusCode = 422;
      return next(error);
    }
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
      },
      process.env.JWT_SECRET
    );
    res.status(200).json({
      message: "success",
      data: { user, token },
    });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

exports.postReset = async (req, res, next) => {
  try {
    crypto.randomBytes(32, async (err, buf) => {
      const resetToken = buf.toString("hex");
      const email = req.body.email;
      const user = await User.findOne({ email });
      if (!user) {
        const error = new Error(
          "입력하신 이메일로 가입한 계정이 존재하지 않습니다."
        );
        error.statusCode = 404;
        return next(error);
      }
      user.resetToken = resetToken;
      user.resetTokenExpiration = Date.now() + 300000;
      await user.save();
      const msg = {
        to: req.body.email,
        from: process.env.SENDGRID_SENDER_EMAIL,
        subject: "[맵학원] 비밀번호 복구 요청",
        html: `<p>비밀번호를 복구하려면 <a href="http://127.0.0.1:5000/reset/${resetToken}">여기</a>를 클릭하세요.</p>`,
      };
      sgMail.send(msg);
      res.status(204).end();
    });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

exports.getNewPassword = async (req, res, next) => {
  try {
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
    res.status(200).render("new-password", {
      userId: user._id.toString(),
      passwordToken: token,
    });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

exports.postNewPassword = async (req, res, next) => {
  try {
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
    res.redirect("/complete");
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

exports.getComplete = (req, res, next) => {
  res.status(200).render("complete", {
    heading: "비밀번호가 변경되었습니다.",
    action: "로그인하세요.",
  });
};
