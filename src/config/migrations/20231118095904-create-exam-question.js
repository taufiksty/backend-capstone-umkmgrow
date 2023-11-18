'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('exam_questions', {
			id: {
				type: Sequelize.STRING,
				allowNull: false,
				primaryKey: true,
			},
			exam_id: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: 'exams',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			question: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			answers: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			correct_answer: {
				type: Sequelize.ENUM('a', 'b', 'c', 'd'),
				allowNull: false,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('exam_questions');
	},
};
