'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('enrollments', {
			id: {
				type: Sequelize.STRING,
				allowNull: false,
				primaryKey: true,
			},
			course_id: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: 'courses',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			user_id: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			enroll_date: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			status: {
				type: Sequelize.ENUM('onpayment', 'onlearning', 'completed'),
				defaultValue: 'onpayment',
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('enrollments');
	},
};
