'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Course extends Model {
	static associate(models) {
		this.belongsTo(models.User, {
			foreignKey: 'instructor_id',
			as: 'instructor',
		});
		this.belongsToMany(models.Enrollment, {
			foreignKey: 'course_id',
			as: 'course',
		});
		console.log('module associated with course');
		this.hasMany(models.CourseModule, {
			foreignKey: 'courseId',
			sourceKey: 'id',
		});
	}
}
Course.init(
	{
		id: {
			allowNull: false,
			primaryKey: true,
			type: DataTypes.STRING,
		},
		courseName: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			field: 'course_name',
		},
		courseDescription: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'course_description',
		},
		courseAbout: {
			type: DataTypes.TEXT,
			allowNull: false,
			field: 'course_about',
		},
		terms: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		forWho: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'for_who',
		},
		materials: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		certification: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		estimateFinish: {
			type: DataTypes.INTEGER,
			allowNull: false,
			field: 'estimate_finish',
		},
		instructorId: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'instructor_id',
		},
		categoryPath: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'category_path',
		},
		imageCourse: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'image_course',
		},
		price: {
			type: DataTypes.FLOAT,
			allowNull: false,
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
		modelName: 'Course',
		tableName: 'courses',
	},
);

module.exports = Course;
