'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class ExamQuestion extends Model {
	static associate(models) {
		this.belongsTo(models.Exam, {
			foreignKey: 'exam_id',
		});
	}
}
ExamQuestion.init(
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		examId: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: 'exams',
				key: 'id',
			},
			onDelete: 'CASCADE',
			field: 'exam_id',
		},
		question: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		answers: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		correctAnswer: {
			type: DataTypes.ENUM('a', 'b', 'c', 'd'),
			allowNull: false,
			field: 'correct_answer',
		},
	},
	{
		sequelize,
		modelName: 'ExamQuestion',
		tableName: 'exam_questions',
		timestamps: false,
	},
);

module.exports = ExamQuestion;
