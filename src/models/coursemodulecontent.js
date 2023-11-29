'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class CourseModuleContent extends Model {
	static associate(models) {
		this.belongsTo(models.CourseModule, {
			foreignKey: 'module_id',
		});
	}
}
CourseModuleContent.init(
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		moduleId: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: 'CourseModules',
				key: 'id',
			},
			onDelete: 'CASCADE',
			field: 'module_id',
		},
		contentType: {
			type: DataTypes.ENUM('video', 'text'),
			defaultValue: 'text',
			field: 'content_type',
		},
		contentDescription: {
			type: DataTypes.STRING,
			field: 'content_description',
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		contentSequence: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'content_sequence',
		},
		updatedAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			field: 'updated_at',
		},
	},
	{
		sequelize,
		modelName: 'CourseModuleContent',
		tableName: 'course_module_contents',
		timestamps: false,
	},
);

module.exports = CourseModuleContent;
