const express = require("express");
const isAuth = require("../middlewares/isAuth");
const lectureController = require("../controllers/lecture");

const router = express.Router();

router.get("/", lectureController.getLectures);
router.get("/:id/", lectureController.getLecture);
router.post("/", isAuth, lectureController.createLecture);
router.patch("/:id/", isAuth, lectureController.updateLecture);
router.delete("/:id/", isAuth, lectureController.deleteLecture);

module.exports = router;
