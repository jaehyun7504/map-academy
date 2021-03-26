const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { nanoid } = require("nanoid");
const multer = require("multer");
const compression = require("compression");
const helmet = require("helmet");
const noticeRoute = require("./routes/notice");
const articleRoute = require("./routes/article");
const lectureRoute = require("./routes/lecture");
const authRoutes = require("./routes/auth");
const authController = require("./controllers/auth");

if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config({ path: path.join(__dirname, "config.env") });
}

const PORT = process.env.PORT || 8080;
const RW_USERNAME = process.env.RW_USERNAME;
const RW_PASSWORD = process.env.RW_PASSWORD;
const DEFAULT_DB = process.env.DEFAULT_DB;
const MONGODB_URI = `
  mongodb+srv://${RW_USERNAME}:${RW_PASSWORD}@cluster0.r1ie0.mongodb.net/${DEFAULT_DB}?retryWrites=true&w=majority
`;

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "images"),
  filename: (req, file, cb) => cb(null, `${nanoid(12)}-${file.originalname}`),
});
const fileFilter = (req, file, cb) => {
  file.mimetype === "image/jpeg" || file.mimetype === "image/png"
    ? cb(null, true)
    : cb(null, false);
};

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ storage, fileFilter }).single("image"));
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://mapacademy.co.kr");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/reset/:token", authController.getNewPassword);
app.get("/complete", authController.getComplete);
app.use("/api/notices/", noticeRoute);
app.use("/api/articles/", articleRoute);
app.use("/api/lectures/", lectureRoute);
app.use("/api/", authRoutes);
app.use((req, res, next) =>
  res.status(404).json({
    message: "error",
    error: "잘못된 요청입니다.",
  })
);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: "error",
    error: err.message,
    data: err.data,
  });
});

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT))
  .catch((err) => console.error(err));
