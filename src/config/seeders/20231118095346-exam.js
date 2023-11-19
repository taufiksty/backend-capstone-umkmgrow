'use strict';

const EXAMS = require('../data/exams');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		try {
			await queryInterface.bulkInsert('exams', EXAMS, {});
		} catch (error) {
			console.log('error when inserting');
		}
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('exams', null);
	},
};
