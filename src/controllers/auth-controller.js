const { asyncWrapper } = require('../middlewares');
const {
	signIn,
	signUp,
	signOut,
	verifyRefreshToken,
} = require('../services/auth-service');
const { getEnroll } = require('../services/enroll-service');

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
	const enrollments = await getEnroll({ userId: user.id });

	res.status(201).json({
		success: true,
		message: 'Sign-in success',
		data: {
			accessToken,
			refreshToken,
			expiresIn: new Date(new Date().getTime() + 60 * 60 * 1000),
			user: { ...user, enrollments },
		},
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

const putRefreshTokenHandler = asyncWrapper(async (req, res) => {
	const { refreshToken: token } = req.body;

	const { accessToken, refreshToken } = await verifyRefreshToken(token);

	res.json({
		success: true,
		message: 'Token is refreshed',
		data: {
			accessToken,
			refreshToken,
			expiresIn: new Date(new Date().getTime() + 60 * 60 * 1000),
		},
	});
});

module.exports = {
	deleteSignoutAuthenticationHandler,
	postSigninAuthenticationHandler,
	postSignupAuthenticationHandler,
	putRefreshTokenHandler,
};
