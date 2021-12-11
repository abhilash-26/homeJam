const express = require("express");
const router = express.Router();

const { viewAllCourse } = require("../controllers/studentController");

router.post("/view-all-course", viewAllCourse);

module.exports = router;
