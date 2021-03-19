const express = require("express");
const isAuth = require("../middlewares/isAuth");
const noticeController = require("../controllers/notice");

const router = express.Router();

router.get("/", noticeController.getNotices);
router.get("/:id/", noticeController.getNotice);
router.post("/", isAuth, noticeController.createNotice);
router.patch("/:id/", isAuth, noticeController.updateNotice);
router.delete("/:id/", isAuth, noticeController.deleteNotice);

module.exports = router;
