'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {
	static associate(models) {
		User.hasOne(models.Authentication, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE',
		});
	}
}
User.init(
	{
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.STRING,
		},
		fullname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: true,
			unique: true,
		},
		gender: {
			type: DataTypes.ENUM('male', 'female'),
			allowNull: true,
		},
		address: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		company_name: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		business_fields: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		skills_want: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		role: {
			type: DataTypes.ENUM('student', 'instructor', 'admin'),
			defaultValue: 'student',
		},
		image_profile: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			field: 'created_at',
		},
		updatedAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			field: 'updated_at',
		},
	},
	{
		sequelize,
		modelName: 'User',
		tableName: 'users',
	},
);

module.exports = User;
