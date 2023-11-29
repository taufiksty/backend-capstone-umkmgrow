'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('course_modules', {
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
			module_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			module_sequence: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			updated_at: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('course_modules');
	},
};
