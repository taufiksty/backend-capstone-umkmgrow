'use strict';

const CONTENTS = require('../data/contents');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('course_module_contents', CONTENTS, {});
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('course_module_contents', null);
	},
};
