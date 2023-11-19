'use strict';

const QUESTIONS = require('../data/questions');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('exam_questions', QUESTIONS, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('exam_questions', null);
	},
};
