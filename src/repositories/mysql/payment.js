const Payment = require('../../models/payment');

const createPayment = async (payload) => {
	return await Payment.create(payload);
};

module.exports = { createPayment };
