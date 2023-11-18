'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('course_module_contents', {
			id: {
				type: Sequelize.STRING,
				allowNull: false,
				primaryKey: true,
			},
			module_id: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: 'course_modules',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			content_type: {
				type: Sequelize.ENUM('video', 'text'),
				defaultValue: 'text',
			},
			content_description: {
				type: Sequelize.STRING,
			},
			content: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			content_sequence: {
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
		await queryInterface.dropTable('course_module_contents');
	},
};
