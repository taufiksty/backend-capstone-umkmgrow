const express = require('express');
const { getCoursesHandler } = require('../controllers/courses-controller');

const router = express.Router();

router.route('/').get(getCoursesHandler);

module.exports = router;
