'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class CourseModule extends Model {
	static associate(models) {
		this.belongsTo(models.Course, {
			foreignKey: 'courseId',
			targetKey: 'id',
		});
		this.hasMany(models.CourseModuleContent, {
			foreignKey: 'module_id',
		});
	}
}
CourseModule.init(
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
				model: 'Course',
				key: 'id',
			},
			field: 'course_id',
		},
		moduleName: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'module_name',
		},
		moduleSequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'module_sequence',
		},
		updatedAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			field: 'updated_at',
		},
	},
	{
		sequelize,
		modelName: 'CourseModule',
		tableName: 'course_modules',
		timestamps: false,
	},
);

module.exports = CourseModule;
