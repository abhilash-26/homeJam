const courseSchema = require("../models/classModel");

//To get all the courses and the corosponding instructors

const viewAllCourse = async (req, res) => {
  try {
    let courses = [];

    const { userId } = req.body;
    const result = await courseSchema
      .find({
        studentsEnrolled: userId,
      })
      .populate(instructorId);
    console.log(result);

    courses = result.map((item) => {
      return {
        course: item.title,
        instructor: item.instructorName,
      };
    });
    res.send({
      status: 0,
      msg: "The courses along with the corrosponding instructors are ",
      data: courses,
    });
  } catch (error) {
    res.send({
      status: 1,
      msg: error,
      data: null,
    });
  }
};

const createCourse = async (req, res) => {
  try {
    const { title, instructorId, courseDuration, courseCharge } = req.body;
    console.log(title);
    if (
      (instructorId && courseCharge && courseDuration && title) ==
      ("" && undefined)
    ) {
      res.send({
        status: 1,
        msg: "Required fields can't be empty",
      });
    } else {
      const createdClass = await courseSchema.create({
        title,
        instructorId,
        courseDuration,
        courseCharge,
      });
      res.send({
        status: 0,
        msg: "course created successfully",
        data: createdClass,
      });
    }
  } catch (error) {
    res.send({
      status: 1,
      msg: error.message,
      data: null,
    });
  }
};

const removeCourse = async (req, res) => {
  try {
    const { toBeDeleatedId } = req.body;
    const removedCourse = await courseSchema.findByIdAndDelete(toBeDeleatedId);
    if (!removedCourse) {
      res.send({
        status: 0,
        msg: "No course found with the given courseId",
      });
    } else {
      res.send({
        status: 0,
        msg: "course is deleated sucessfully",
        data: removedCourse,
      });
    }
  } catch (error) {
    res.send({
      status: 1,
      msg: error,
    });
  }
};

module.exports = { viewAllCourse, createCourse, removeCourse };
