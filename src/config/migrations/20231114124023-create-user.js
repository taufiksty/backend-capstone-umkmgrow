'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				allowNull: false,
				primaryKey: true,
				type: Sequelize.STRING,
			},
			fullname: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			phone: {
				type: Sequelize.STRING,
				allowNull: true,
				unique: true,
			},
			gender: {
				type: Sequelize.ENUM('male', 'female'),
				allowNull: true,
			},
			address: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			company_name: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			business_fields: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			skills_want: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			role: {
				type: Sequelize.ENUM('student', 'instructor', 'admin'),
				defaultValue: 'student',
			},
			image_profile: {
				type: Sequelize.STRING,
				allowNull: true,
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
		await queryInterface.dropTable('users');
	},
};
