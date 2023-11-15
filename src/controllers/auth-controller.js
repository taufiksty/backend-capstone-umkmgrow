const { asyncWrapper } = require('../middlewares');
const { signUp } = require('../services/auth-service');
const UserValidator = require('../validators/user');

const postSignupAuthenticationHandler = asyncWrapper(async (req, res) => {
	const payload = req.body;

	UserValidator.validateUserPayload(payload);
	const newUser = await signUp(payload);

	res.status(201).json({
		success: true,
		data: { newUser },
	});
});

module.exports = { postSignupAuthenticationHandler };
