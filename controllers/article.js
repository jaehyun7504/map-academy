const Article = require("../models/article");

exports.getCreateArticle = (req, res) => {
  res.render("getCreateArticle");
};

exports.getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json({
      message: "success",
      data: articles,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.getArticle = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id);
    res.status(200).json({
      message: "success",
      data: article,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.createArticle = async (req, res) => {
  try {
    console.log(req.user);
    const newArticle = new Article({
      title: req.body.title,
      body: req.body.body,
      imageUrls: req.file.path || undefined,
      date: new Date(),
      userId: req.user._id,
    });
    await newArticle.save();
    res.status(201).json({
      message: "success",
      data: newArticle,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.updateArticle = async (req, res) => {
  try {
    const updatedArticle = await Article.findById(req.params.id);
    updatedArticle.title = req.body.title;
    updatedArticle.body = req.body.body;
    updatedArticle.imageUrls = req.body.imageUrls;
    await updatedArticle.save();
    res.status(200).json({
      message: "success",
      data: updatedArticle,
    });
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};

exports.deleteArticle = async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err.message,
    });
  }
};
