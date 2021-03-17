const Lecture = require("../models/lecture");

exports.getLectures = async (req, res) => {
  try {
    const lectures = await Lecture.find();
    res.status(200).json({
      message: "success",
      data: lectures,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.getLecture = async (req, res) => {
  try {
    const lecture = await Lecture.findById(req.params.id);
    res.status(200).json({
      message: "success",
      data: lecture,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.createLecture = async (req, res) => {
  try {
    const newLecture = new Lecture({
      title: req.body.title,
      videoUrl: req.body.videoUrl,
      date: new Date().toISOString().split("T")[0],
      userId: req.user._id,
    });
    await newLecture.save();
    res.status(201).json({
      message: "success",
      data: newLecture,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.updateLecture = async (req, res) => {
  try {
    const updatedLecture = await Lecture.findById(req.params.id);
    updatedLecture.title = req.body.title;
    updatedLecture.videoUrl = req.body.videoUrl;
    await updatedLecture.save();
    res.status(200).json({
      message: "success",
      data: updatedLecture,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.deleteLecture = async (req, res) => {
  try {
    await Lecture.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};
