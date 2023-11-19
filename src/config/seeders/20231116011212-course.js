'use strict';

const COURSES = require('../data/courses');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('courses', COURSES, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('courses', null);
	},
};
