const express = require("express");
const router = express.Router();
const { authInstructor } = require("../utils/authHandler");
const { authStudent } = require("../utils/authHandler");

router.use("/user", require("./userRoute"));

router.use("/course", authInstructor, require("./courseRoute"));

router.use("/student", authStudent, require("./studentRoute"));

module.exports = router;
