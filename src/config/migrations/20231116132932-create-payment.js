'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('payments', {
			id: {
				type: Sequelize.STRING,
				allowNull: false,
				primaryKey: true,
			},
			enroll_id: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: 'enrollments',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			amount: {
				type: Sequelize.FLOAT,
				allowNull: false,
				defaultValue: 0,
			},
			payment_date: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('payments');
	},
};
