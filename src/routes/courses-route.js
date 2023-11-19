const express = require('express');
const {
	getCoursesHandler,
	getCourseByIdHandler,
	getCourseModulesHandler,
	getCourseExamsHandler,
	postCourseExamSubmitHandler,
} = require('../controllers/courses-controller');
const { auth } = require('../middlewares');

const router = express.Router();

router.route('/').get(getCoursesHandler);
router.route('/:id').get(getCourseByIdHandler);
router.route('/:id/modules').get(auth, getCourseModulesHandler);
router.route('/:id/exams').get(auth, getCourseExamsHandler);
router.route('/:id/exams/submit').post(auth, postCourseExamSubmitHandler);

module.exports = router;
