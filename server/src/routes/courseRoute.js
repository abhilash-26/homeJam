const express = require("express");
const router = express.Router();

const {
  createCourse,
  removeCourse,
  addStudentToCourse,
  removeStudentFromCourse,
  editCourse,
} = require("../controllers/courseController");

router.post("/create-course", createCourse);

router.post("/remove-course", removeCourse);

router.post("/edit-course", editCourse);

router.post("/add-student", addStudentToCourse);

router.post("/remove-student", removeStudentFromCourse);

module.exports = router;
