'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class ExamHistories extends Model {
	static associate(models) {
		this.belongsTo(models.Exam, {
			foreignKey: 'exam_id',
		});
	}
}
ExamHistories.init(
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		examId: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'exam_id',
		},
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'user_id',
		},
		answerHistory: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'answer_history',
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			field: 'created_at',
		},
	},
	{
		sequelize,
		modelName: 'ExamHistories',
		tableName: 'exam_histories',
		timestamps: false,
	},
);

module.exports = ExamHistories;
