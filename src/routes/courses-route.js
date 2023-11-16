const express = require('express');
const {
	getCoursesHandler,
	getCourseByIdHandler,
} = require('../controllers/courses-controller');

const router = express.Router();

router.route('/').get(getCoursesHandler);
router.route('/:id').get(getCourseByIdHandler);

module.exports = router;
