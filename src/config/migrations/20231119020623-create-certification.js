'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('certifications', {
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
			certificate_receipt_date: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
				allowNull: true,
			},
			score: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			image_certificate: {
				type: Sequelize.TEXT,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('certifications');
	},
};
