/* eslint-disable no-console */
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const csrf = require("csurf");
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
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});
const csrfProtection = csrf();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
// app.use(csrfProtection);
app.use(async (req, res, next) => {
  try {
    if (!req.session.user) return next();
    const user = await User.findById(req.session.user._id);
    if (!user) return next();
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
  }
});
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  // res.locals.csrfToken = req.csrfToken();
  next();
});

app.get("/reset/:token", authController.getNewPassword);
app.get("/complete", authController.getComplete);
app.use("/api/notices/", noticeRoute);
app.use("/api/articles/", articleRoute);
app.use("/api/lectures/", lectureRoute);
app.use("/api/", authRoutes);

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Listening on port ${PORT}`)))
  .catch((err) => console.error(`💥 ${err}`));
