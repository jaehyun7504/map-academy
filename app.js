/* eslint-disable no-console */
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const multer = require("multer");
const { nanoid } = require("nanoid");
const dotenv = require("dotenv");
const User = require("./models/user");
const noticeRoute = require("./routes/notice");
const articleRoute = require("./routes/article");
const lectureRoute = require("./routes/lecture");
const authRoutes = require("./routes/auth");
const authController = require("./controllers/auth");

dotenv.config({ path: path.join(__dirname, "config.env") });

const PORT = process.env.PORT || 5000;
const MONGODB_URI = `
  mongodb+srv://${process.env.RW_USERNAME}:${process.env.RW_PASSWORD}@cluster0.r1ie0.mongodb.net/map-academy?retryWrites=true&w=majority
`;

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "images"),
  filename: (req, file, cb) => cb(null, `${nanoid(12)}-${file.originalname}`),
});
const fileFilter = (req, file, cb) => {
  file.mimetype === "image/jpeg" || file.mimetype === "image/png"
    ? cb(null, true)
    : cb(null, false);
};

app.set("view engine", "ejs");
app.set("views", "views");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(
  multer({
    storage: fileStorage,
    fileFilter: fileFilter,
  }).single("image")
);
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/reset/:token", authController.getNewPassword);
app.get("/complete", authController.getComplete);
app.use("/api/notices/", noticeRoute);
app.use("/api/articles/", articleRoute);
app.use("/api/lectures/", lectureRoute);
app.use("/api/", authRoutes);
app.use((req, res, next) => {
  res.status(404).json({
    message: "error",
    error: "잘못된 요청입니다.",
  });
});

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((err) => console.error(`💥 ${err}`));
