'use strict';
const { nanoid } = require('nanoid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		try {
			await queryInterface.bulkInsert(
				'exams',
				[
					{
						id: `exam-${nanoid(16)}`,
						course_id: 'course-rUbJU5kzAdyK9CM7',
					},
					{
						id: `exam-${nanoid(16)}`,
						course_id: 'course-oVIaqcJfQUPDi75-',
					},
					{
						id: `exam-${nanoid(16)}`,
						course_id: 'course-Mzyu0FwLrSeGSMcJ',
					},
				],
				{},
			);
		} catch (error) {
			console.log('error when inserting');
		}
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('exams', null);
	},
};
