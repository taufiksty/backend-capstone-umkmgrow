const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');

const { InvariantError } = require('../errors');
const { findByEmail, addUser } = require('../repositories/mysql/users');
const { convertToLocalDatetime } = require('../utils/moment-timezone');

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

module.exports = { signUp };
