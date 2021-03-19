const express = require("express");
const isAuth = require("../middlewares/isAuth");
const authController = require("../controllers/auth");

const router = express.Router();

router.post("/signup", isAuth, authController.postSignup);

router.post("/login", isAuth, authController.postLogin);

router.post("/reset", isAuth, authController.postReset);

router.post("/new-password", authController.postNewPassword);

module.exports = router;
