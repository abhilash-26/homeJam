const express = require("express");
const router = express.Router();

router.use("/user", require("./userRoute"));

router.use("/course", require("./courseRoute"));

module.exports = router;
