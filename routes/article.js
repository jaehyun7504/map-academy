const express = require("express");
const isAuth = require("../middlewares/isAuth");
const articleController = require("../controllers/article");

const router = express.Router();

router.get("/", articleController.getArticles);
router.get("/:id/", articleController.getArticle);
router.post("/", isAuth, articleController.createArticle);
router.patch("/:id/", isAuth, articleController.updateArticle);
router.delete("/:id/", isAuth, articleController.deleteArticle);

module.exports = router;
