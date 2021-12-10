const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  instructorId: {
    type: mongoose.Types.ObjectId,
    ref: "userSchema",
    required: true,
  },
  courseCharge: Number,
  courseDuration: String,
  studentsEnrolled: [{ type: mongoose.Types.ObjectId, ref: "userSchema" }],
});
module.exports = mongoose.model("courseSchema", schema, "courseSchema");
