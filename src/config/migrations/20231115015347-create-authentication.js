'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('authentications', {
			id: {
				type: Sequelize.STRING,
				allowNull: false,
				primaryKey: true,
			},
			token: {
				type: Sequelize.STRING,
				allowNull: false,
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
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('authentications');
	},
};
