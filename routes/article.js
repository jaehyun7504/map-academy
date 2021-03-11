const express = require("express");

const articleController = require("../controllers/article");

const router = express.Router();

router.get("/", articleController.getArticles);
router.get("/:id/", articleController.getArticle);
router.post("/", articleController.createArticle);
router.patch("/:id/", articleController.updateArticle);
router.delete("/:id/", articleController.deleteArticle);

module.exports = router;
