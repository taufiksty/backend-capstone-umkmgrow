const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');

const { AuthenticationError, InvariantError } = require('../errors');

const { findByEmail, addUser } = require('../repositories/mysql/users');
const {
	addToken,
	destroyToken,
} = require('../repositories/mysql/authentications');
const { convertToLocalDatetime } = require('../utils/moment-timezone');
const { TokenBlacklist, TokenManager } = require('../utils/token');

const signIn = async ({ email, password }) => {
	const checkEmailIsExist = await findByEmail(email);
	if (!checkEmailIsExist) {
		throw new AuthenticationError(
			"Username doesn't exist. Please remember your email or sign-up.",
		);
	}

	const { id, password: hashedPassword } = checkEmailIsExist;

	const matchPassword = await bcrypt.compare(password, hashedPassword);
	if (!matchPassword) {
		throw new AuthenticationError('Sign-in failed. Your password is wrong.');
	}

	const accessToken = TokenManager.generateAccessToken({ id });
	const refreshToken = TokenManager.generateRefreshToken({ id });

	const authenticationId = `auth-${nanoid(16)}`;

	await addToken({
		id: authenticationId,
		token: refreshToken,
		userId: id,
	});

	const user = checkEmailIsExist;

	return {
		accessToken,
		refreshToken,
		user: convertToLocalDatetime(user),
	};
};

const signOut = async (userId, token) => {
	TokenBlacklist.add(token);

	return await destroyToken(userId);
};

const signUp = async ({ fullname, email, password }) => {
	const checkEmailIsExist = await findByEmail(email);
	if (checkEmailIsExist) {
		throw new InvariantError(
			'Sign-up failed, email was exist. Please try another email.',
		);
	}

	const id = `user-${nanoid(16)}`;
	const hashedPassword = await bcrypt.hash(password, 10);

	const addedUser = await addUser({
		id,
		fullname,
		email,
		password: hashedPassword,
	});

	return convertToLocalDatetime(addedUser);
};

module.exports = { signIn, signUp, signOut };
