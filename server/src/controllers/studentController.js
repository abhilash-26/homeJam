const courseSchema = require("../models/classModel");

const viewAllCourse = async (req, res) => {
  try {
    let courses = [];

    const { userId } = req.query;
    const result = await courseSchema
      .find({
        studentsEnrolled: userId,
      })
      .populate("instructorId");

    console.log(result);
    if (result == "") {
      res.send({
        msg: "No enrolled course found",
      });
    } else {
      courses = result.map((item) => {
        return {
          course: item.title,
          instructor: item.instructorId.name,
        };
      });
      res.send({
        status: 0,
        msg: "The courses along with the corrosponding instructors are ",
        data: courses,
      });
    }
  } catch (error) {
    res.send({
      status: 1,
      msg: error,
      data: null,
    });
  }
};

module.exports = { viewAllCourse };
