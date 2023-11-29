'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Certification extends Model {
	static associate(models) {
		this.belongsTo(models.User, {
			foreignKey: 'user_id',
		});
		this.belongsTo(models.Course, {
			foreignKey: 'course_id',
		});
	}
}
Certification.init(
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
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id',
			},
			onDelete: 'CASCADE',
			field: 'user_id',
		},
		certificateReceiptDate: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW,
			allowNull: true,
			field: 'certificate_receipt_date',
		},
		score: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		imageCertificate: {
			type: DataTypes.TEXT,
			field: 'image_certificate',
		},
	},
	{
		sequelize,
		modelName: 'Certification',
		tableName: 'certifications',
		timestamps: false,
	},
);

module.exports = Certification;
