'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('courses', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING,
			},
			course_name: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			course_description: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			course_about: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			terms: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			for_who: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			materials: {
				type: Sequelize.TEXT,
				allowNull: false,
			},
			certification: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
			},
			estimate_finish: {
				type: Sequelize.INTEGER,
				allowNull: false,
				defaultValue: 864000,
			},
			instructor_id: {
				type: Sequelize.STRING,
				allowNull: false,
				references: {
					model: 'users',
					key: 'id',
				},
				onDelete: 'CASCADE',
			},
			category_path: {
				type: Sequelize.STRING,
				allowNull: false,
				defaultValue: '["grow your business"]',
			},
			image_course: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			price: {
				type: Sequelize.FLOAT,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
			updated_at: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('courses');
	},
};
