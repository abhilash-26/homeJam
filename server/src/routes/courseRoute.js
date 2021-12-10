const express = require("express");
const router = express.Router();

const {
  createCourse,
  removeCourse,
} = require("../controllers/courseController");

router.post("/create-course", createCourse);

router.post("/remove-course", removeCourse);

module.exports = router;
