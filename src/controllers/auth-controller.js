const { asyncWrapper } = require('../middlewares');
const { signIn, signUp, signOut } = require('../services/auth-service');

const AuthenticationValidator = require('../validators/authentication');
const UserValidator = require('../validators/user');

const deleteSignoutAuthenticationHandler = asyncWrapper(async (req, res) => {
	const userId = req.auth.id;
	const accessToken = req.header('Authorization').split(' ')[1];

	await signOut(userId, accessToken);

	res.json({
		success: true,
		message: "You're sign-out successfully.",
	});
});

const postSigninAuthenticationHandler = asyncWrapper(async (req, res) => {
	const payload = req.body;

	AuthenticationValidator.validateAuthenticationPayload(payload);
	const { accessToken, refreshToken, user } = await signIn(payload);

	res.status(201).json({
		success: true,
		message: 'Sign-in success',
		data: { accessToken, refreshToken, expiresIn: 3600, user },
	});
});

const postSignupAuthenticationHandler = asyncWrapper(async (req, res) => {
	const payload = req.body;

	UserValidator.validateUserPayload(payload);
	const newUser = await signUp(payload);

	res.status(201).json({
		success: true,
		data: { newUser },
	});
});

module.exports = {
	deleteSignoutAuthenticationHandler,
	postSigninAuthenticationHandler,
	postSignupAuthenticationHandler,
};
