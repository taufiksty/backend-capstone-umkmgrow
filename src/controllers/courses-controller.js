const { asyncWrapper } = require("../middlewares");
const {
  getCertificationById,
} = require("../repositories/mysql/certifications");
const {
  getCourseCertificationByCourseAndUser,
} = require("../services/certification-service");
const { getContentsByModuleId } = require("../services/content-service");
const {
  getCourses,
  getCoursesByFilter,
  getCourse,
} = require("../services/course-service");
const {
  getExamQuestionsByCourseId,
  submitExam,
  getExamHistoryByExamId,
} = require("../services/exam-service");
const { getCourseModulesByCourseId } = require("../services/module-service");
const path = require("path");

const getCourseByIdHandler = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const course = await getCourse(id);

  res.json({
    success: true,
    data: { course },
  });
});

const getCourseCertificationHandler = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const userId = req.auth.id;

  const certification = await getCourseCertificationByCourseAndUser(userId, id);

  const pdfLink = `/api/courses/getCertificate/${certification.id}`;

  res.json({
    success: true,
    data: { certification: { ...certification, pdfLink } },
  });
});

const getCertificationLink = asyncWrapper(async (req, res) => {
  const { certificationId } = req.params;
  const certificationLink = await getCertificationById(certificationId).then(
    (result) => result.dataValues.imageCertificate
  );
  const certificationArray = certificationLink.split("/");
  const certificationFileName =
    certificationArray[certificationArray.length - 1];

  const pdfPath = path.join(
    __dirname,
    "..",
    "..",
    "public",
    "images",
    "certification",
    certificationFileName
  );

  console.log(pdfPath);

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "inline; filename=certification.pdf");
  res.sendFile(pdfPath);
});

const getCourseExamHistoryHandler = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const userId = req.auth.id;

  const { examId, questions } = await getExamQuestionsByCourseId(id);
  const histories = await getExamHistoryByExamId(id, userId);

  res.json({
    success: true,
    data: {
      course: {
        id,
        exams: {
          id: examId,
          questions: questions.map((q, i) => ({
            ...q,
            yourAnswer: histories[i + 1],
          })),
        },
      },
    },
  });
});

const getCourseExamsHandler = asyncWrapper(async (req, res) => {
  const { id } = req.params;

  const { examId, questions } = await getExamQuestionsByCourseId(id);

  res.json({
    success: true,
    data: { course: { id, exams: { id: examId, questions } } },
  });
});

const getCourseModulesHandler = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const { content } = req.query;
  let modules = await getCourseModulesByCourseId(id);

  if (content) {
    modules = await Promise.all(
      modules.map(async (module) => {
        const retrieveContents = await getContentsByModuleId(module.id);
        module.contents = retrieveContents;

        return module;
      })
    );
  }

  res.json({
    success: true,
    data: { courseId: id, modules },
  });
});

const getCoursesHandler = asyncWrapper(async (req, res) => {
  const isQueryHasValue = Object.keys(req.query).length;

  let courses;

  if (isQueryHasValue) {
    courses = await getCoursesByFilter(req.query);
  } else {
    courses = await getCourses();
  }

  res.json({
    success: true,
    data: { courses },
  });
});

const postCourseExamSubmitHandler = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const userId = req.auth.id;
  const { score, answers } = req.body;

  let certification = await submitExam(userId, id, score, answers);

  res.status(201).json({
    success: true,
    data: { courseId: id, certification },
  });
});

module.exports = {
  getCourseByIdHandler,
  getCourseCertificationHandler,
  getCertificationLink,
  getCourseExamHistoryHandler,
  getCourseExamsHandler,
  getCourseModulesHandler,
  getCoursesHandler,
  postCourseExamSubmitHandler,
};
