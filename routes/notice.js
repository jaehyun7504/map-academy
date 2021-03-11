const express = require("express");

const noticeController = require("../controllers/notice");

const router = express.Router();

router.get("/", noticeController.getNotices);
router.get("/:id/", noticeController.getNotice);
router.post("/", noticeController.createNotice);
router.patch("/:id/", noticeController.updateNotice);
router.delete("/:id/", noticeController.deleteNotice);

module.exports = router;
