const Notice = require("../models/notice");

exports.getNotices = async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json({
      message: "success",
      data: notices,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.getNotice = async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    res.status(200).json({
      message: "success",
      data: notice,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.createNotice = async (req, res) => {
  try {
    const newNotice = new Notice({
      title: req.body.title,
      body: req.body.body,
      imageUrls: req.body.imageUrls,
      date: new Date(),
      userId: req.user._id,
    });
    await newNotice.save();
    res.status(201).json({
      message: "success",
      data: newNotice,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const updatedNotice = await Notice.findById(req.params.id);
    updatedNotice.title = req.body.title;
    updatedNotice.body = req.body.body;
    updatedNotice.imageUrls = req.body.imageUrls;
    await updatedNotice.save();
    res.status(200).json({
      message: "success",
      data: updatedNotice,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};
