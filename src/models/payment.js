'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Payment extends Model {
	static associate(models) {
		Payment.belongsTo(models.Enrollment, {
			foreignKey: 'enroll_id',
			as: 'enrollment',
		});
	}
}
Payment.init(
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		enrollId: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'enroll_id',
		},
		amount: {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: 0,
		},
		paymentDate: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			field: 'payment_date',
		},
	},
	{
		sequelize,
		modelName: 'Payment',
		tableName: 'payments',
		timestamps: false,
	},
);

module.exports = Payment;
