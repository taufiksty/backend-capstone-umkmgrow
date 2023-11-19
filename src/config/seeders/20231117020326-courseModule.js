'use strict';

const MODULES = require('../data/modules');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('course_modules', MODULES, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('course_modules', null);
	},
};
