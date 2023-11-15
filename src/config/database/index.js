const { Sequelize } = require('sequelize');
const config = require('..');
const configDB = require('./config');

let sequelize;

const ENV = config.app.env;

if (ENV === 'production') {
	sequelize = new Sequelize({
		username: configDB.production.username,
		password: configDB.production.password,
		database: configDB.production.database,
		host: configDB.production.host,
		dialect: configDB.production.dialect,
	});
} else {
	sequelize = new Sequelize({
		username: configDB.development.username,
		password: configDB.development.password,
		database: configDB.development.database,
		host: configDB.development.host,
		dialect: configDB.development.dialect,
	});
}

module.exports = sequelize;
