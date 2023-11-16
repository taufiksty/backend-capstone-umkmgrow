'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class User extends Model {
	static associate(models) {
		this.hasOne(models.Authentication, {
			foreignKey: 'user_id',
			onDelete: 'CASCADE',
		});
		this.hasMany(models.Course, {
			foreignKey: 'instructor_id',
			onDelete: 'CASCADE',
		});
		this.hasMany(models.Enrollment, {
			foreignKey: 'user_id',
			as: 'course',
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
		companyName: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'company_name',
		},
		businessFields: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'business_fields',
		},
		skillsWant: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'skills_want',
		},
		role: {
			type: DataTypes.ENUM('student', 'instructor', 'admin'),
			defaultValue: 'student',
		},
		imageProfile: {
			type: DataTypes.STRING,
			allowNull: true,
			field: 'image_profile',
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
