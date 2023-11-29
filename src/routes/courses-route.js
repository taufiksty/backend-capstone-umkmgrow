const express = require("express");
const {
  getCoursesHandler,
  getCourseByIdHandler,
  getCourseModulesHandler,
  getCourseExamsHandler,
  postCourseExamSubmitHandler,
  getCourseExamHistoryHandler,
  getCourseCertificationHandler,
  getCertificationLink,
} = require("../controllers/courses-controller");
const { auth } = require("../middlewares");

const router = express.Router();

router.route("/").get(getCoursesHandler);
router.route("/:id").get(getCourseByIdHandler);
router.route("/:id/modules").get(auth, getCourseModulesHandler);
router.route("/:id/exams").get(auth, getCourseExamsHandler);
router.route("/:id/certification").get(auth, getCourseCertificationHandler);
router.route("/:id/exams/submit").post(auth, postCourseExamSubmitHandler);
router.route("/:id/exams/history").get(auth, getCourseExamHistoryHandler);
router.route("/getCertificate/:certificationId").get(getCertificationLink);

module.exports = router;
