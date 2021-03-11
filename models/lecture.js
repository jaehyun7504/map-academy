const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lectureSchema = new Schema({
  title: { type: String, required: true },
  videoUrl: { type: String, required: true },
  date: { type: Date, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Lecture", lectureSchema);
