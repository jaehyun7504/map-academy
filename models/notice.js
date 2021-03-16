const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noticeSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  date: { type: Date, required: true },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Notice", noticeSchema);
