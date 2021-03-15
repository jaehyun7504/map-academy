const express = require("express");
const lectureController = require("../controllers/lecture");

const router = express.Router();

router.get("/", lectureController.getLectures);
router.get("/:id/", lectureController.getLecture);
router.post("/", lectureController.createLecture);
router.patch("/:id/", lectureController.updateLecture);
router.delete("/:id/", lectureController.deleteLecture);

module.exports = router;
