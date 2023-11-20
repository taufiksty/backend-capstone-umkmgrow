'use strict';

const EXAMS = require('../data/exams');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('exams', EXAMS, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('exams', null);
	},
};
