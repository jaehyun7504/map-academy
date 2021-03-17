const Article = require("../models/article");
const deleteFile = require("../utils/deleteFile");

const ARTICLES_PER_PAGE = 10;

exports.getArticles = async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const numberOfArticles = await Article.countDocuments();
    const articles = await Article.find()
      .skip((page - 1) * ARTICLES_PER_PAGE)
      .limit(ARTICLES_PER_PAGE)
      .sort({ date: "desc" })
      .select("title date");
    res.status(200).json({
      message: "success",
      data: {
        articles,
        page: page,
        hasNext: numberOfArticles > ARTICLES_PER_PAGE * page,
        hasPrev: page > 1,
      },
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
    const newArticle = new Article({
      title: req.body.title,
      body: req.body.body,
      imageUrl: req.file.path || undefined,
      date: new Date().toISOString().split("T")[0],
      // userId: req.user._id,
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
    if (req.file) {
      deleteFile(updatedArticle.imageUrl);
      updatedArticle.imageUrl = req.file.path;
    }
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
    const deletedArticle = await Article.findById(req.params.id);
    deleteFile(deletedArticle.imageUrl);
    await Article.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    res.status(400).json({
      message: "error",
      error: err,
    });
  }
};
