const { asyncWrapper } = require('../middlewares');
const { getExamHistoriesByUserId } = require('../services/exam-service');

const getExamHistoryByUserId = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;

	const examHistories = await getExamHistoriesByUserId(userId);
	
	res.json({ success: true, data: {examHistories} });
});

module.exports = { getExamHistoryByUserId };
