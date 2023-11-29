'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Enrollment extends Model {
	static associate(models) {
		this.belongsToMany(models.Course, {
			foreignKey: 'course_id',
			as: 'course',
		});
		this.belongsToMany(models.User, {
			foreignKey: 'user_id',
			as: 'user',
		});
		this.hasMany(models.Payment, {
			foreignKey: 'enroll_id',
			as: 'payment',
		});
	}
}
Enrollment.init(
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		courseId: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'course_id',
		},
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'user_id',
			references: {
				model: 'users',
				key: 'id',
			},
			onDelete: 'CASCADE',
		},
		enrollDate: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			field: 'enroll_date',
		},
		status: {
			type: DataTypes.ENUM('onpayment', 'onlearning', 'completed'),
			defaultValue: 'onpayment',
		},
	},
	{
		sequelize,
		modelName: 'Enrollment',
		tableName: 'enrollments',
		timestamps: false,
	},
);

module.exports = Enrollment;
