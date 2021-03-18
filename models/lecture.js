const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lectureSchema = new Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model("Lecture", lectureSchema);
