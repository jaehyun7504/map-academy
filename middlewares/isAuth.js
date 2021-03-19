const path = require("path");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config({ path: path.join(__dirname, "..", "config.env") });

const isAuth = (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) {
      const error = new Error("인증이 실패하였습니다.");
      error.statusCode = 401;
      return next(error);
    }
    const token = authHeader.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      const error = new Error("인증이 실패하였습니다.");
      error.statusCode = 401;
      return next(error);
    }
    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

module.exports = isAuth;
