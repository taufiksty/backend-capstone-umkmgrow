const jwt = require('jsonwebtoken');
const config = require('../../config');

const { AuthenticationError } = require('../../errors');

const TokenBlacklist = new Set();

const TokenManager = {
	generateAccessToken: (payload) => {
		return jwt.sign(payload, config.jwt.accessToken, { expiresIn: 3600 });
	},
	generateRefreshToken: (payload) => {
		return jwt.sign(payload, config.jwt.refreshToken);
	},
	verifyAccessToken: (accessToken) => {
		try {
			const decodedToken = jwt.verify(accessToken, config.jwt.accessToken);
			return decodedToken;
		} catch (error) {
			throw new AuthenticationError('Sorry, token is not valid.');
		}
	},
	verifyRefreshToken: (refreshToken) => {
		try {
			const decodedToken = jwt.verify(refreshToken, config.jwt.refreshToken);
			return decodedToken;
		} catch (error) {
			throw new AuthenticationError('Sorry, refresh token is not valid.');
		}
	},
};

module.exports = { TokenBlacklist, TokenManager };
