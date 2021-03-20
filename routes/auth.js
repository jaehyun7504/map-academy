const express = require("express");
const { body } = require("express-validator");
const authController = require("../controllers/auth");

const router = express.Router();

router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("유효하지 않은 이메일입니다.")
      .normalizeEmail(),
    body("password")
      .trim()
      .not()
      .isEmpty()
      .withMessage("비밀번호가 입력되지 않았습니다."),
  ],
  authController.postSignup
);

router.post(
  "/login",
  [
    body("email")
      .isEmail()
      .withMessage("유효하지 않은 이메일입니다.")
      .normalizeEmail(),
    body("password")
      .trim()
      .not()
      .isEmpty()
      .withMessage("비밀번호가 입력되지 않았습니다."),
  ],
  authController.postLogin
);

router.post(
  "/reset",
  body("email")
    .isEmail()
    .withMessage("유효하지 않은 이메일입니다.")
    .normalizeEmail(),
  authController.postReset
);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
