'use strict';
const { nanoid } = require('nanoid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'course_module_contents',
			[
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-aABf496Mol38PA-R',
					content_type: 'video',
					content_description: 'Definisi dan konsep dasar pemasaran digital',
					content:
						'https://www.youtube.com/embed/k8m53nExhHc?si=wLIHIu8TKw7bQNBh',
					content_sequence: 1,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-aABf496Mol38PA-R',
					content_type: 'text',
					content_description: 'Pentingnya pemasaran digital untuk UMKM',
					content:
						'<h1>Pentingnya Pemasaran Digital untuk UMKM</h1><br><p>Saat ini, pemasaran digital telah menjadi kunci sukses bagi Usaha Mikro, Kecil, dan Menengah (UMKM). Dengan adanya teknologi dan penetrasi internet yang semakin luas, UMKM perlu memahami betapa pentingnya beradaptasi dengan tren pemasaran digital. Berikut adalah beberapa alasan mengapa pemasaran digital sangat vital bagi pertumbuhan UMKM:</p><br><h2>1. Mencapai Pasar yang Lebih Luas</h2><br><p>Pemasaran digital memungkinkan UMKM mencapai audiens yang lebih luas, tidak terbatas oleh geografi. Melalui media sosial, website, dan kampanye online, UMKM dapat menjangkau pelanggan potensial di berbagai daerah atau bahkan negara.</p><br><h2>2. Efektif dan Hemat Biaya</h2><br><p>Dibandingkan dengan metode pemasaran tradisional, pemasaran digital cenderung lebih hemat biaya. UMKM dapat memanfaatkan platform online untuk mengiklankan produk atau layanan mereka dengan anggaran yang lebih terjangkau.</p><br><h2>3. Interaksi Langsung dengan Pelanggan</h2><br><p>Media sosial dan platform online memberikan kesempatan kepada UMKM untuk berinteraksi langsung dengan pelanggan. Tanggapan cepat terhadap pertanyaan atau umpan balik pelanggan dapat meningkatkan kepuasan pelanggan dan membangun hubungan jangka panjang.</p><br><h2>4. Analisis Data untuk Pengambilan Keputusan</h2><p>Pemasaran digital menyediakan data dan analisis yang dapat membantu UMKM memahami perilaku pelanggan. Dengan informasi ini, mereka dapat mengoptimalkan strategi pemasaran mereka, mengidentifikasi tren pasar, dan mengambil keputusan yang lebih baik.</p><br><h2>5. Membangun Citra Merek</h2><br><p>Praktik pemasaran digital yang kreatif dapat membantu UMKM membangun citra merek yang kuat. Melalui konten visual menarik, kampanye kreatif, dan kehadiran online yang konsisten, UMKM dapat memperkuat brand mereka di mata konsumen.</p><br><p>Dengan semua keuntungan ini, tidak mengherankan jika pemasaran digital menjadi kunci sukses bagi pertumbuhan UMKM di era digital ini. Mari aktif berinovasi dan mengintegrasikan strategi pemasaran digital dalam bisnis kita!</p>',
					content_sequence: 2,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-72dGroMuxcX3qwJ9',
					content_type: 'video',
					content_description:
						'Strategi pemasaran melalui platform media sosial (Facebook, Instagram, Twitter, dll.)',
					content:
						'https://www.youtube.com/embed/0PIU3IXZyZo?si=ghGl3eLnYGupFrcS',
					content_sequence: 1,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-72dGroMuxcX3qwJ9',
					content_type: 'text',
					content_description: 'Pentingnya pemasaran digital untuk UMKM',
					content:
						'<h1>Langkah Membangun Kehadiran Online dan Interaksi Pelanggan</h1><br><ol><li><strong>Situs Web:</strong>Pastikan situs web responsif dan menarik.</li><li><strong>Media Sosial:</strong>Aktif di platform sesuai target audiens, responsif terhadap pertanyaan pelanggan.</li><li><strong>Email Marketing:</strong>Kumpulkan alamat email, kirim newsletter berkala.</li><li><strong>Blogging dan Konten:</strong>Tulis blog relevan dengan SEO.</li><li><strong>Forum dan Komunitas:</strong>Bergabung dan interaksi di forum atau grup industri.</li><li><strong>Live Chat dan Dukungan Online:</strong>Sediakan layanan live chat dan tanggapi pertanyaan pelanggan.</li><li><strong>Program Loyalti dan Diskon:</strong>Bangun program loyalitas dan tawarkan diskon eksklusif.</li><li><strong>Webinar dan Acara Online:</strong>Selenggarakan webinar dan acara online untuk interaksi langsung.</li><li><strong>Analisis dan Umpan Balik:</strong>Gunakan alat analisis, minta umpan balik pelanggan.</li><li><strong>Mobile App:</strong>Pertimbangkan aplikasi mobile jika relevan.</li></ol>',
					content_sequence: 2,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-3LXwjKR4GMyM1TqP',
					content_type: 'video',
					content_description:
						'Pengenalan SEO dan cara meningkatkan peringkat pencarian',
					content:
						'https://www.youtube.com/embed/KftVVCi8IiQ?si=JF_PKrT1HXVCREef',
					content_sequence: 1,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-3LXwjKR4GMyM1TqP',
					content_type: 'text',
					content_description:
						'Pengoptimalan halaman web dan konten untuk mesin pencari',
					content:
						'<h1>SEO: Pengoptimalan Halaman Web dan Konten</h1><br><p>Pengoptimalan halaman web dan konten sangat penting untuk meningkatkan peringkat situs web Anda di mesin pencari.</p><br><h2>1. Keyword Research</h2><br><p>Identifikasi kata kunci relevan untuk bisnis Anda dan gunakan secara strategis dalam konten Anda.</p><br><h2>2. Konten Berkualitas</h2><br><p>Buat konten informatif, relevan, dan berkualitas tinggi untuk menarik perhatian pengunjung dan mesin pencari.</p><br><h2>3. Struktur URL yang Ramah SEO</h2><br><p>Gunakan URL yang mudah dibaca dan mengandung kata kunci terkait.</p><br><h2>4. Optimalisasi Tag Meta</h2><br><p>Sertakan tag meta title dan description yang menarik dan mengandung kata kunci penting.</p><br><h2>5. Penggunaan Heading (H1, H2, H3, dll.)</h2><br><p>Gunakan heading secara hierarkis untuk membagi konten dan memberikan struktur yang jelas.</p><br><h2>6. Optimalisasi Gambar</h2><br><p>Berikan deskripsi pada alt text gambar dan compress ukuran gambar untuk mempercepat waktu muat halaman.</p><br><h2>7. Responsif dan Cepat</h2><br><p>Pastikan situs web responsif untuk perangkat berbagai ukuran dan optimalkan kecepatan muat halaman.</p><br><h2>8. Backlink Berkualitas</h2><br><p>Bangun backlink dari sumber-sumber berkualitas untuk meningkatkan otoritas situs Anda.</p><br><h2>9. Analisis dan Pemantauan</h2><br><p>Gunakan alat analisis web untuk memantau kinerja situs dan lakukan penyesuaian sesuai kebutuhan.</p>',
					content_sequence: 2,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-nreE4avQ0KtzPxfj',
					content_type: 'video',
					content_description:
						'Jenis-jenis iklan online (Google Ads, Facebook Ads, dll.)',
					content:
						'https://www.youtube.com/embed/A2Qymk_tXXw?si=FLKlb1y-laisI6Hm',
					content_sequence: 1,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-nreE4avQ0KtzPxfj',
					content_type: 'text',
					content_description:
						'Pengelolaan anggaran iklan dan analisis kinerja kampanye',
					content:
						'<h1>Pengelolaan Anggaran Iklan dan Analisis Kinerja Kampanye</h1><br><p>Panduan ini membahas langkah-langkah pengelolaan anggaran iklan dan analisis kinerja kampanye untuk memaksimalkan efektivitas pemasaran digital Anda.</p><br><h2>1. Tentukan Tujuan Kampanye</h2><br><p>Rumuskan tujuan yang jelas dan spesifik untuk kampanye Anda sebelum menentukan anggaran.</p><br><h2>2. Tetapkan Anggaran</h2><br><p>Tentukan anggaran yang sesuai dengan tujuan Anda dan alokasikan dengan bijak antara platform iklan yang berbeda.</p><br><h2>3. Pilih Platform Iklan yang Tepat</h2><br><p>Pilih platform iklan yang sesuai dengan audiens target Anda dan tujuan kampanye.</p><br><h2>4. Monitor dan Optimalkan Secara Berkala</h2><br><p>Pantau kinerja kampanye secara berkala dan lakukan optimasi berdasarkan data yang diperoleh.</p><br><h2>5. Gunakan Kode Pelacakan</h2><br><p>Integrasikan kode pelacakan untuk melacak konversi dan perilaku pengguna setelah mengklik iklan.</p><br><h2>6. Analisis Data Kinerja</h2><br><p>Analisis metrik seperti klik-through rate (CTR), cost per click (CPC), dan return on ad spend (ROAS).</p><br><h2>7. A/B Testing</h2><br><p>Lakukan uji A/B pada elemen iklan untuk mengidentifikasi elemen yang paling efektif.</p><br><h2>8. Rapatkan Kolaborasi Tim</h2><br><p>Jalin komunikasi yang erat antara tim pemasaran, pengelola anggaran, dan analis data.</p><br><h2>9. Evaluasi Hasil dan Buat Perbaikan</h2><br><p>Berdasarkan analisis, evaluasi hasil kampanye, dan buat perbaikan untuk kampanye berikutnya.</p><br>',
					content_sequence: 2,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-iYixYW8ft0a36RmH',
					content_type: 'video',
					content_description:
						'Penggunaan alat analisis web untuk memahami perilaku pengguna',
					content:
						'https://www.youtube.com/embed/9CL2DPYS5h8?si=BUKqxP2bDOnlMbzO',
					content_sequence: 1,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-iYixYW8ft0a36RmH',
					content_type: 'text',
					content_description:
						'Evaluasi hasil pemasaran digital dan penyesuaian strategi',
					content:
						'<h1>Evaluasi Hasil Pemasaran Digital dan Penyesuaian Strategi</h1><p>Panduan ini memberikan langkah-langkah untuk mengevaluasi hasil pemasaran digital dan melakukan penyesuaian strategi agar kampanye menjadi lebih efektif.</p><h2 lang="en">1. Analisis Data Kinerja</h2><p>Periksa metrik kinerja seperti klik-through rate (CTR), conversion rate, dan return on investment (ROI).</p><h2 lang="en">2. Evaluasi Tujuan Kampanye</h2><p>Bandingkan hasil yang dicapai dengan tujuan awal kampanye dan tentukan sejauh mana target terpenuhi.</p><h2 lang="en">3. Uji A/B dan Variasi Kreatif</h2><p>Lakukan uji A/B pada iklan dan variasi kreatif untuk mengidentifikasi elemen yang paling efektif.</p><h2 lang="en">4. Pelacakan Perilaku Pengguna</h2><p>Pelajari perilaku pengguna setelah mengklik iklan menggunakan kode pelacakan.</p><h2 lang="en">5. Feedback Pelanggan</h2><p>Perhatikan umpan balik pelanggan dan tanggapan dari interaksi media sosial untuk mendapatkan wawasan tambahan.</p><h2 lang="en">6. Evaluasi Biaya dan ROI</h2><p>Perhitungkan biaya kampanye dan bandingkan dengan tingkat pengembalian investasi (ROI) yang dicapai.</p><h2 lang="en">7. Revisi Strategi dan Pesan</h2><p>Jika diperlukan, revisi strategi dan pesan berdasarkan temuan dari evaluasi kinerja.</p><h2 lang="en">8. Pelatihan dan Pengembangan Tim</h2><p>Sediakan pelatihan dan pengembangan untuk meningkatkan keterampilan tim pemasaran.</p>',
					content_sequence: 2,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-xJ4_sJI9MPT1IuxV',
					content_type: 'video',
					content_description:
						'Kasus sukses UMKM yang menggunakan pemasaran digital dengan efektif',
					content:
						'https://www.youtube.com/embed/r9aFSa21ZFk?si=9DAxhHvl5D26ii7n',
					content_sequence: 1,
				},
				{
					id: `content-${nanoid(16)}`,
					module_id: 'module-iYixYW8ft0a36RmH',
					content_type: 'text',
					content_description:
						'Evaluasi hasil pemasaran digital dan penyesuaian strategi',
					content:
						'<h1>Praktik Terbaik Pemasaran Digital</h1><br><p>Panduan ini menyajikan praktik terbaik untuk membantu Anda mengoptimalkan upaya pemasaran digital dan meningkatkan efektivitas kampanye Anda.</p><br><h2 lang="en">1. Tujuan yang Jelas</h2><br><p>Tentukan tujuan kampanye yang spesifik, terukur, dan sesuai dengan visi bisnis Anda.</p><br><h2 lang="en">2. Pahami Target Audiens</h2><br><p>Buat persona pelanggan dan pahami karakteristik target audiens Anda dengan baik.</p><br><h2 lang="en">3. Penelitian Kata Kunci</h2><br><p>Lakukan penelitian kata kunci untuk menentukan kata kunci yang relevan untuk konten dan iklan.</p><br><h2 lang="en">4. Pilih Platform yang Tepat</h2><br><p>Pilih platform pemasaran digital yang sesuai dengan karakteristik audiens target Anda.</p><br><h2 lang="en">5. Konten Berkualitas</h2><br><p>Buat konten yang informatif, relevan, dan menarik bagi target audiens Anda.</p><br><h2 lang="en">6. Optimalisasi Situs Web</h2><br><p>Pastikan situs web responsif, mudah dinavigasi, dan dioptimalkan untuk SEO.</p><br><h2 lang="en">7. Uji A/B secara Teratur</h2><br><p>Lakukan uji A/B pada elemen kampanye untuk mengidentifikasi elemen yang paling efektif.</p><br><h2 lang="en">8. Analisis Data Kinerja</h2><br><p>Gunakan alat analisis web untuk memantau kinerja kampanye dan identifikasi area perbaikan.</p><br><h2 lang="en">9. Integrasi Kode Pelacakan</h2><br><p>Pasang kode pelacakan untuk melacak konversi dan perilaku pengguna setelah mengklik iklan.</p><br><h2 lang="en">10. Interaksi di Media Sosial</h2><br><p>Berpartisipasi aktif di platform media sosial yang relevan dengan audiens Anda.</p><br><h2 lang="en">11. Pengelolaan Anggaran</h2><br><p>Tetapkan anggaran dengan bijak dan alokasikan secara efisien di antara berbagai saluran pemasaran.</p><br><h2 lang="en">12. Fleksibilitas dan Penyesuaian</h2><br><p>Bersikap fleksibel, selalu siap melakukan penyesuaian strategi berdasarkan hasil evaluasi.</p><br><h2 lang="en">13. Pemahaman Hukum dan Etika</h2><br><p>Pahami dan patuhi hukum serta etika pemasaran digital untuk melindungi reputasi bisnis Anda.</p><br>',
					content_sequence: 2,
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('course_module_contents', null);
	},
};
