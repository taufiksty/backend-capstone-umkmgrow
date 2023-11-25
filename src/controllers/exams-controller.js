const { asyncWrapper } = require('../middlewares');
const { getExamHistoriesByUserId } = require('../services/exam-service');

const getExamHistoryByUserId = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;

	const histories = await getExamHistoriesByUserId(userId);
	console.log(histories);
	res.json({ success: true, data: {} });
});

module.exports = { getExamHistoryByUserId };
