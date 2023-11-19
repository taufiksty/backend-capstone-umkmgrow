'use strict';
const { nanoid } = require('nanoid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'exam_questions',
			[
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-mKsYHzbQOkkmZ9uV',
					question: 'Apa yang dimaksud dengan pemasaran digital',
					answers:
						'{"a":"Pemasaran tradisional","b":"Pemasaran melalui media cetak","c":"Pemasaran melalui internet dan media digital","d":"Pemasaran lisan"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-mKsYHzbQOkkmZ9uV',
					question:
						'Platform media sosial mana yang umumnya digunakan untuk strategi pemasaran digital UMKM',
					answers:
						'{"a":"LinkedIn","b":"Snapchat","c":"Pinterest","d":"Semua jawaban benar"}',
					correct_answer: 'd',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-mKsYHzbQOkkmZ9uV',
					question:
						'Apa keuntungan utama dari pengoptimalan SEO (Search Engine Optimization) untuk UMKM',
					answers:
						'{"a":"Meningkatkan interaksi di media sosial","b":"Meningkatkan peringkat pencarian di mesin telusur","c":"Menjual produk secara langsung","d":"Menarik pelanggan secara lokal"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-mKsYHzbQOkkmZ9uV',
					question: 'Apa manfaat analisis kinerja dalam pemasaran digital',
					answers:
						'{"a":"Mengukur efektivitas kampanye","b":"Membuat produk baru","c":"Meningkatkan harga produk","d":"Menyusun rencana bisnis"}',
					correct_answer: 'a',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-mKsYHzbQOkkmZ9uV',
					question:
						'Apa peran iklan online dalam strategi pemasaran digital UMKM',
					answers:
						'{"a":"Hanya menarik perhatian tanpa meningkatkan penjualan","b":"Meningkatkan visibilitas online dan menargetkan audiens yang tepat","c":"Hanya diperlukan untuk perusahaan besar","d":"Tidak memiliki peran dalam pemasaran digital"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-mKsYHzbQOkkmZ9uV',
					question:
						'Mengapa penting bagi UMKM untuk memiliki strategi pemasaran melalui media sosial',
					answers:
						'{"a":"Hanya untuk mengikuti tren","b":"Karena semua pesaing melakukannya","c":"Untuk membangun dan berinteraksi dengan komunitas pelanggan","d":"Hanya untuk mendapatkan jumlah like yang banyak"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-mKsYHzbQOkkmZ9uV',
					question:
						'Apa yang dimaksud dengan konsep "conversion" dalam konteks pemasaran digital',
					answers:
						'{"a":"Mengubah produk menjadi produk yang lebih baik","b":"Mengubah pengunjung menjadi pelanggan atau melakukan tindakan yang diinginkan","c":"Mengubah strategi pemasaran menjadi strategi lain","d":"Mengubah tujuan bisnis"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-mKsYHzbQOkkmZ9uV',
					question:
						'Bagaimana UMKM dapat menggunakan analisis data untuk meningkatkan kinerja pemasaran digital mereka',
					answers:
						'{"a":"Mengabaikan data karena tidak relevan","b":"Melakukan perubahan tanpa menganalisis data","c":"Menggunakan data untuk memahami perilaku pengguna dan membuat penyesuaian strategi","d":"Menolak data yang tidak sesuai dengan ekspektasi"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-mKsYHzbQOkkmZ9uV',
					question:
						'Mengapa penting bagi UMKM memiliki keberadaan online melalui situs web',
					answers:
						'{"a":"Hanya untuk menunjukkan bahwa mereka memiliki situs web","b":"Agar pelanggan dapat melihat informasi produk secara lengkap","c":"Tidak penting, cukup memiliki toko fisik","d":"Hanya untuk perusahaan besar"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-mKsYHzbQOkkmZ9uV',
					question:
						'Apa yang dimaksud dengan iklan retargeting dalam pemasaran digital',
					answers:
						'{"a":"Iklan yang hanya menargetkan pelanggan baru","b":"Iklan yang menargetkan kembali pelanggan yang pernah mengunjungi situs web","c":"Iklan yang tidak efektif","d":"Iklan yang hanya menargetkan pelanggan setia"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-bX0EtyzsoJ_mz7j3',
					question:
						'Apa manfaat utama penggunaan platform e-commerce bagi UMKM',
					answers:
						'{"a":"Menjual produk tanpa batasan","b":"Hanya untuk perusahaan besar","c":"Tidak ada manfaat, hanya membuang-buang waktu","d":"Hanya berguna untuk bisnis internasional"}',
					correct_answer: 'a',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-bX0EtyzsoJ_mz7j3',
					question:
						'Bagaimana UMKM dapat meningkatkan konversi di toko online mereka',
					answers:
						'{"a":"Menetapkan harga tinggi untuk meningkatkan keuntungan","b":"Memiliki situs web yang lambat","c":"Menawarkan pengalaman pelanggan yang menyenangkan dan mudah","d":"Tidak perlu memperhatikan konversi"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-bX0EtyzsoJ_mz7j3',
					question:
						'Apa peran strategi harga dalam e-commerce untuk pertumbuhan bisnis UMKM',
					answers:
						'{"a":"Menetapkan harga sebaiknya di atas harga pesaing","b":"Tidak memperhatikan harga karena produk UMKM unik","c":"Menetapkan harga bersaing untuk menarik pelanggan","d":"Hanya fokus pada promosi, bukan harga"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-bX0EtyzsoJ_mz7j3',
					question:
						'Apa keuntungan dari manajemen inventaris online untuk UMKM',
					answers:
						'{"a":"Menjual produk tanpa perlu mengelola inventaris","b":"Menghindari kebutuhan untuk mencatat stok","c":"Meningkatkan efisiensi dan menghindari kehabisan stok","d":"Hanya memperhitungkan inventaris setelah penjualan"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-bX0EtyzsoJ_mz7j3',
					question:
						'Mengapa penting bagi UMKM untuk memahami dan menggunakan analisis kinerja e-commerce',
					answers:
						'{"a":"Hanya berguna untuk perusahaan besar","b":"Tidak perlu, asalkan penjualan meningkat","c":"Untuk menilai kinerja dan membuat penyesuaian strategi","d":"Cukup melihat pendapatan total"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-bX0EtyzsoJ_mz7j3',
					question:
						'Apa manfaat strategi penawaran khusus dan diskon dalam e-commerce untuk UMKM',
					answers:
						'{"a":"Hanya untuk menarik pelanggan murah","b":"Menarik pelanggan dan meningkatkan penjualan","c":"Hanya dapat dilakukan oleh perusahaan besar","d":"Tidak ada manfaat, hanya mengurangi keuntungan"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-bX0EtyzsoJ_mz7j3',
					question:
						'Bagaimana UMKM dapat membangun kehadiran merek yang kuat dalam e-commerce',
					answers:
						'{"a":"Tidak perlu membangun merek di e-commerce","b":"Hanya melalui iklan televisi","c":"Melalui identitas merek yang konsisten dan pengalaman pelanggan yang baik","d":"Cukup dengan logo yang menarik"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-bX0EtyzsoJ_mz7j3',
					question:
						'Apa peran pemasaran digital dalam strategi e-commerce UMKM',
					answers:
						'{"a":"Tidak relevan untuk e-commerce","b":"Hanya untuk perusahaan besar","c":"Meningkatkan visibilitas online dan menjangkau pelanggan target","d":"Tidak perlu, karena e-commerce sudah mencakup semua pasar"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-bX0EtyzsoJ_mz7j3',
					question:
						'Bagaimana UMKM dapat menggunakan iklan retargeting dalam e-commerce',
					answers:
						'{"a":"Hanya untuk menargetkan pelanggan baru","b":"Hanya untuk toko online besar","c":"Menargetkan kembali pelanggan yang telah mengunjungi situs web","d":"Tidak perlu, karena hanya membuang-buang anggaran iklan"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-bX0EtyzsoJ_mz7j3',
					question:
						'Apa keuntungan dari analisis pasar dan persaingan dalam pengembangan strategi merek e-commerce',
					answers:
						'{"a":"Tidak diperlukan, karena bisnis UMKM berbeda","b":"Menentukan strategi merek berdasarkan tren","c":"Memahami pasar dan persaingan untuk menyesuaikan strategi merek","d":"Hanya untuk perusahaan besar"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-zHpTYIbsAkIJKN2_',
					question: 'Apa yang dimaksud dengan identitas merek',
					answers:
						'{"a":"Nama produk","b":"Kumpulan warna yang menarik","c":"Elemen visual dan verbal yang menciptakan kesan merek","d":"Logo perusahaan"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-zHpTYIbsAkIJKN2_',
					question:
						'Mengapa strategi penempatan pasar penting dalam pengembangan merek UMKM',
					answers:
						'{"a":"Tidak penting, karena semua merek serupa","b":"Menentukan bagaimana merek bersaing di pasar","c":"Hanya untuk perusahaan besar","d":"Untuk mendapatkan lebih banyak like di media sosial"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-zHpTYIbsAkIJKN2_',
					question:
						'Apa peran segmentasi pasar dalam pembentukan strategi merek',
					answers:
						'{"a":"Menciptakan produk yang sesuai dengan selera semua pelanggan","b":"Menyesuaikan merek agar sesuai dengan semua segmen pasar","c":"Memahami kebutuhan dan preferensi kelompok pelanggan tertentu","d":"Hanya untuk produk internasional"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-zHpTYIbsAkIJKN2_',
					question: 'Mengapa konsistensi dalam komunikasi merek penting',
					answers:
						'{"a":"Hanya untuk menarik perhatian sementara","b":"Menjaga citra merek yang kuat dan mudah diingat","c":"Tidak perlu konsisten, asalkan ada promosi","d":"Hanya untuk merek besar"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-zHpTYIbsAkIJKN2_',
					question:
						'Apa yang dimaksud dengan positioning statement dalam konteks strategi merek',
					answers:
						'{"a":"Pernyataan tentang harga produk","b":"Pernyataan yang menjelaskan letak merek di pasar","c":"Pernyataan tentang jumlah karyawan perusahaan","d":"Pernyataan tentang keuntungan produk"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-zHpTYIbsAkIJKN2_',
					question:
						'Bagaimana branding dapat membantu UMKM membedakan diri dari pesaing',
					answers:
						'{"a":"Hanya dengan menetapkan logo yang berbeda","b":"Dengan menciptakan identitas merek yang unik","c":"Tidak perlu membedakan diri, karena produk UMKM sudah spesial","d":"Hanya melalui harga yang lebih rendah"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-zHpTYIbsAkIJKN2_',
					question: 'Apa yang dimaksud dengan manajemen reputasi merek',
					answers:
						'{"a":"Menjaga harga produk agar tetap tinggi","b":"Meningkatkan citra produk melalui iklan televisi","c":"Pemantauan dan pengelolaan persepsi pelanggan terhadap merek","d":"Menjaga hubungan dengan pemasok"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-zHpTYIbsAkIJKN2_',
					question:
						'Mengapa perlu memahami pasar dan persaingan untuk membangun merek yang sukses',
					answers:
						'{"a":"Agar bisa mengikuti apa yang dilakukan pesaing","b":"Mengetahui tren terkini dalam pemasaran","c":"Memahami kebutuhan pelanggan dan bagaimana merek bersaing","d":"Tidak perlu, karena produk UMKM sudah bagus"}',
					correct_answer: 'c',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-zHpTYIbsAkIJKN2_',
					question: 'Apa keuntungan dari pemasaran merek yang terintegrasi',
					answers:
						'{"a":"Mengurangi biaya pemasaran","b":"Meningkatkan pengaruh merek dengan menyelaraskan semua saluran komunikasi","c":"Hanya berguna untuk perusahaan besar","d":"Menargetkan satu saluran promosi saja"}',
					correct_answer: 'b',
				},
				{
					id: `question-${nanoid(16)}`,
					exam_id: 'exam-zHpTYIbsAkIJKN2_',
					question:
						'Apa manfaat dari studi kasus merek sukses dan kegagalan bagi UMKM',
					answers:
						'{"a":"Hanya untuk mengetahui kesalahan perusahaan lain","b":"Menghindari risiko dan memahami praktik terbaik","c":"Tidak perlu, karena setiap merek berbeda","d":"Meniru strategi merek besar"}',
					correct_answer: 'b',
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('exam_questions', null);
	},
};
