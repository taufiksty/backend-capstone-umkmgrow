const express = require('express');
const { auth } = require('../middlewares');
const { getExamHistoryByUserId } = require('../controllers/exams-controller');

const router = express.Router();

router.use(auth);

router.route('/histories').get(getExamHistoryByUserId);

module.exports = router;
