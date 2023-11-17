'use strict';
const { nanoid } = require('nanoid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'course_modules',
			[
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-rUbJU5kzAdyK9CM7',
					module_name: 'Pendahuluan Pemasaran Digital',
					module_sequence: 1,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-rUbJU5kzAdyK9CM7',
					module_name: 'Media Sosial dan Pemasaran',
					module_sequence: 2,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-rUbJU5kzAdyK9CM7',
					module_name: 'SEO (Search Engine Optimization) untuk UMKM',
					module_sequence: 3,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-rUbJU5kzAdyK9CM7',
					module_name: 'Iklan Online untuk UMKM',
					module_sequence: 4,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-rUbJU5kzAdyK9CM7',
					module_name: 'Analisis dan Pengukuran Kinerja',
					module_sequence: 5,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-rUbJU5kzAdyK9CM7',
					module_name: 'Studi Kasus dan Best Practices',
					module_sequence: 6,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-Mzyu0FwLrSeGSMcJ',
					module_name: 'Pengenalan E-commerce',
					module_sequence: 1,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-Mzyu0FwLrSeGSMcJ',
					module_name: 'Memilih Platform E-commerce yang Tepat',
					module_sequence: 2,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-Mzyu0FwLrSeGSMcJ',
					module_name: 'Manajemen Inventaris Online',
					module_sequence: 3,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-Mzyu0FwLrSeGSMcJ',
					module_name: 'Strategi Harga dan Penawaran Khusus',
					module_sequence: 4,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-Mzyu0FwLrSeGSMcJ',
					module_name: 'Optimasi Konversi dan Pengalaman Pelanggan',
					module_sequence: 5,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-Mzyu0FwLrSeGSMcJ',
					module_name: 'Pemasaran untuk Toko Online',
					module_sequence: 6,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-Mzyu0FwLrSeGSMcJ',
					module_name: 'Analisis Kinerja E-commerce',
					module_sequence: 7,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-oVIaqcJfQUPDi75-',
					module_name: 'Pendahuluan Branding untuk UMKM',
					module_sequence: 1,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-oVIaqcJfQUPDi75-',
					module_name: 'Strategi Pembentukan Identitas Merek',
					module_sequence: 2,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-oVIaqcJfQUPDi75-',
					module_name: 'Segmentasi Pasar dan Penempatan Merek',
					module_sequence: 3,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-oVIaqcJfQUPDi75-',
					module_name: 'Komunikasi Merek yang Efektif',
					module_sequence: 4,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-oVIaqcJfQUPDi75-',
					module_name: 'Manajemen Reputasi Merek',
					module_sequence: 5,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-oVIaqcJfQUPDi75-',
					module_name: 'Pemahaman Pasar dan Persaingan',
					module_sequence: 6,
				},
				{
					id: `module-${nanoid(16)}`,
					course_id: 'course-oVIaqcJfQUPDi75-',
					module_name: 'Studi Kasus: Merek Sukses dan Kegagalan',
					module_sequence: 7,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('course_modules', null);
	},
};
