/* eslint-disable no-console */
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const User = require("./models/user");
const noticeRoute = require("./routes/notice");
const articleRoute = require("./routes/article");
const lectureRoute = require("./routes/lecture");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 5000;

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(async (req, res, next) => {
  try {
    const user = await User.findById("6048aded4053059572d41802");
    req.user = user;
    next();
  } catch (err) {
    console.error(err);
  }
});

app.use("/api/notices/", noticeRoute);
app.use("/api/articles/", articleRoute);
app.use("/api/lectures/", lectureRoute);

mongoose
  .connect(
    `mongodb+srv://${process.env.RW_USERNAME}:${process.env.RW_PASSWORD}@cluster0.r1ie0.mongodb.net/map-academy?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch((err) => console.error(`💥 ${err}`));
