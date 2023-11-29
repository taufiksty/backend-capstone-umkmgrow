'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Exam extends Model {
	static associate(models) {
		Exam.belongsTo(models.Course, {
			foreignKey: 'course_id',
		});
	}
}
Exam.init(
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		courseId: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: 'courses',
				key: 'id',
			},
			onDelete: 'CASCADE',
			field: 'course_id',
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
		modelName: 'Exam',
		tableName: 'exams',
	},
);

module.exports = Exam;
