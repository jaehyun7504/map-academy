// const crypto = require('crypto');

const bcrypt = require("bcryptjs");
// const nodemailer = require('nodemailer');

const User = require("../models/user");

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

exports.postLogin = (req, res, next) => {};

exports.postNewPassword = (req, res, next) => {};
