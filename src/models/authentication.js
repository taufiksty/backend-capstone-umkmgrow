'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Authentication extends Model {
	static associate(models) {
		Authentication.belongsTo(models.User, {
			foreignKey: 'user_id',
			as: 'user',
		});
	}
}
Authentication.init(
	{
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
		token: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		userId: {
			type: DataTypes.STRING,
			allowNull: false,
			field: 'user_id',
		},
	},
	{
		sequelize,
		modelName: 'Authentication',
		tableName: 'authentications',
		timestamps: false,
	},
);

module.exports = Authentication;
