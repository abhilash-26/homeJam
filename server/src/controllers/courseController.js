const courseSchema = require("../models/classModel");
const userSchema = require("../models/userModel");

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

const editCourse = async (req, res) => {
  try {
    const { courseId, title, courseDuration, courseCharge } = req.body;
    await courseSchema.findByIdAndUpdate(courseId, {
      $set: {
        title: title,
        courseDuration: courseDuration,
        courseCharge: courseCharge,
      },
    });
    res.send({
      status: 0,
      msg: "Course updated sucessfully",
    });
  } catch (error) {
    res.send({
      status: 1,
      msg: error,
    });
  }
};

const addStudentToCourse = async (req, res) => {
  try {
    const { courseId, studentId } = req.body;
    const student = await userSchema.findById(studentId);
    if (student == "") {
      res.send("No student with the given user id found");
    } else {
      const result = await courseSchema.findById(courseId);
      const students = result.studentsEnrolled;
      if (students.includes(studentId)) {
        res.send("student already registered");
      } else {
        students.push(studentId);
        await courseSchema.findByIdAndUpdate(courseId, {
          $set: {
            studentsEnrolled: students,
          },
        });
        res.send("Student added succesfully");
      }
    }
  } catch (error) {
    res.send(error.message);
  }
};

const removeStudentFromCourse = async (req, res) => {
  try {
    const { courseId, studentId } = req.body;
    const result = await courseSchema.findById(courseId);
    const students = result.studentsEnrolled;
    if (students.includes(studentId)) {
      const updated = students.filter((item) => item != studentId);
      await courseSchema.findByIdAndUpdate(courseId, {
        $set: {
          studentsEnrolled: updated,
        },
      });
      res.send({
        status: 0,
        msg: "Students updated sucessfully",
      });
    } else {
      res.send({
        status: 1,
        msg: "student not found in the course",
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

module.exports = {
  createCourse,
  removeCourse,
  editCourse,
  addStudentToCourse,
  removeStudentFromCourse,
};
