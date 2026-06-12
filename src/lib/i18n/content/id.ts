import type { BlogPost, BlogPostSlug, Calculator, CalculatorSlug, Category, CategorySlug } from "@/types/content";

type CategoryTranslation = Pick<Category, "name" | "description" | "seoTitle" | "seoDescription">;
type CalculatorTranslation = Pick<Calculator, "name" | "description" | "seoTitle" | "seoDescription">;
type BlogPostTranslation = Pick<BlogPost, "title" | "excerpt" | "seoTitle" | "seoDescription" | "sections">;

export const indonesianContentTranslations = {
  categories: {
    finance: {
      name: "Keuangan",
      description: "Rencanakan pinjaman, hipotek, investasi, pajak, gaji, dan keputusan keuangan jangka panjang.",
      seoTitle: "Kalkulator Keuangan - Alat Uang dan Investasi Gratis",
      seoDescription: "Gunakan kalkulator keuangan gratis untuk pinjaman, hipotek, bunga majemuk, ROI, gaji, pajak, dan pensiun.",
    },
    health: {
      name: "Kesehatan",
      description: "Perkirakan metrik kesehatan harian seperti BMI, BMR, kalori, lemak tubuh, dan hidrasi.",
      seoTitle: "Kalkulator Kesehatan - BMI, BMR, Kalori, dan Lainnya",
      seoDescription: "Hitung BMI, BMR, kebutuhan kalori harian, lemak tubuh, dan asupan air dengan alat kesehatan gratis.",
    },
    "date-time": {
      name: "Tanggal dan Waktu",
      description: "Hitung usia, durasi, minggu, dan selisih tanggal dengan cepat dan akurat.",
      seoTitle: "Kalkulator Tanggal dan Waktu - Usia, Durasi, dan Minggu",
      seoDescription: "Temukan usia, jumlah hari antar tanggal, durasi waktu, dan nomor minggu dengan kalkulator gratis.",
    },
    math: {
      name: "Matematika",
      description: "Selesaikan perhitungan umum untuk persentase, pecahan, GPA, dan rata-rata.",
      seoTitle: "Kalkulator Matematika - Persentase, Pecahan, GPA, dan Rata-rata",
      seoDescription: "Gunakan kalkulator matematika gratis untuk persentase, pecahan, GPA, rata-rata, dan cek aritmetika harian.",
    },
    conversion: {
      name: "Konversi",
      description: "Konversi satuan umum untuk berat, panjang, jarak, dan suhu.",
      seoTitle: "Kalkulator Konversi Satuan - Berat, Panjang, Jarak, dan Suhu",
      seoDescription: "Konversi kg ke lbs, cm ke inci, mil ke km, dan Celsius ke Fahrenheit dengan alat gratis.",
    },
    business: {
      name: "Bisnis",
      description: "Hitung laba, pendapatan, titik impas, CAC, dan LTV untuk perencanaan bisnis.",
      seoTitle: "Kalkulator Bisnis - Laba, Pendapatan, CAC, dan LTV",
      seoDescription: "Perkirakan laba, pendapatan, titik impas, biaya akuisisi pelanggan, dan nilai umur pelanggan.",
    },
    ai: {
      name: "AI",
      description: "Perkirakan biaya token model, pengeluaran API, harga AI, dan anggaran pelatihan GPU.",
      seoTitle: "Kalkulator Biaya AI - Token, API, LLM, dan GPU",
      seoDescription: "Perkirakan biaya OpenAI, penggunaan token Claude, biaya LLM, biaya pelatihan GPU, dan harga produk AI.",
    },
  } satisfies Record<CategorySlug, CategoryTranslation>,
  calculators: {
    "loan-calculator": {
      name: "Kalkulator Pinjaman",
      description: "Perkirakan cicilan bulanan, total bunga, dan biaya pelunasan pinjaman.",
      seoTitle: "Kalkulator Pinjaman - Hitung Cicilan dan Bunga",
      seoDescription: "Hitung estimasi cicilan pinjaman bulanan, total bunga, dan total biaya pinjaman dengan mudah.",
    },
    "mortgage-calculator": {
      name: "Kalkulator Hipotek",
      description: "Hitung pembayaran rumah dengan pokok, bunga, pajak, dan asuransi.",
      seoTitle: "Kalkulator Hipotek - Estimasi Pembayaran Rumah",
      seoDescription: "Perkirakan pembayaran hipotek bulanan, pokok, bunga, pajak, dan asuransi rumah.",
    },
    "car-loan-calculator": {
      name: "Kalkulator Kredit Mobil",
      description: "Perkirakan cicilan kredit mobil, total bunga, dan biaya pelunasan sebelum membeli mobil.",
      seoTitle: "Kalkulator Kredit Mobil - Cicilan dan Total Bunga",
      seoDescription: "Hitung cicilan kredit mobil bulanan, bunga total, dan biaya pembiayaan kendaraan.",
    },
    "interest-calculator": {
      name: "Kalkulator Bunga",
      description: "Hitung bunga sederhana, bunga majemuk, dan total pertumbuhan dari waktu ke waktu.",
      seoTitle: "Kalkulator Bunga - Bunga Sederhana dan Majemuk",
      seoDescription: "Hitung bunga sederhana, bunga majemuk, saldo akhir, dan pertumbuhan uang dari waktu ke waktu.",
    },
    "compound-interest-calculator": {
      name: "Kalkulator Bunga Majemuk",
      description: "Proyeksikan pertumbuhan tabungan dari pokok, kontribusi, suku bunga, dan waktu.",
      seoTitle: "Kalkulator Bunga Majemuk - Proyeksi Pertumbuhan Tabungan",
      seoDescription: "Hitung pertumbuhan investasi atau tabungan dengan pokok, kontribusi rutin, tingkat bunga, dan periode.",
    },
    "investment-calculator": {
      name: "Kalkulator Investasi",
      description: "Prakira nilai investasi memakai kontribusi, tingkat imbal hasil, dan horizon investasi.",
      seoTitle: "Kalkulator Investasi - Proyeksi Nilai Masa Depan",
      seoDescription: "Perkirakan nilai investasi masa depan dengan modal awal, kontribusi, return, dan jangka waktu.",
    },
    "roi-calculator": {
      name: "Kalkulator ROI",
      description: "Ukur return on investment sebagai persentase dari biaya awal.",
      seoTitle: "Kalkulator ROI - Hitung Return on Investment",
      seoDescription: "Hitung ROI dari biaya dan keuntungan untuk membandingkan kinerja investasi atau kampanye.",
    },
    "retirement-calculator": {
      name: "Kalkulator Pensiun",
      description: "Perkirakan kebutuhan tabungan pensiun dan nilai portofolio yang diproyeksikan.",
      seoTitle: "Kalkulator Pensiun - Estimasi Kebutuhan Tabungan",
      seoDescription: "Rencanakan tabungan pensiun, target dana, kekurangan tabungan, dan nilai portofolio masa depan.",
    },
    "salary-calculator": {
      name: "Kalkulator Gaji",
      description: "Konversi gaji, upah per jam, dan periode pembayaran untuk perencanaan pendapatan.",
      seoTitle: "Kalkulator Gaji - Konversi Gaji dan Upah Per Jam",
      seoDescription: "Ubah gaji tahunan, bulanan, mingguan, atau per jam untuk memahami pendapatan Anda.",
    },
    "tax-calculator": {
      name: "Kalkulator Pajak",
      description: "Perkirakan kewajiban pajak penghasilan, tarif pajak efektif, dan pendapatan setelah pajak.",
      seoTitle: "Kalkulator Pajak - Estimasi Pajak dan Pendapatan Bersih",
      seoDescription: "Hitung estimasi pajak penghasilan, tarif efektif, dan pendapatan setelah pajak untuk perencanaan.",
    },
    "bmi-calculator": {
      name: "Kalkulator BMI",
      description: "Hitung indeks massa tubuh dari tinggi dan berat badan.",
      seoTitle: "Kalkulator BMI - Hitung Indeks Massa Tubuh",
      seoDescription: "Hitung BMI dari tinggi dan berat badan, lalu lihat kategori dan kisaran BMI sehat.",
    },
    "bmr-calculator": {
      name: "Kalkulator BMR",
      description: "Perkirakan basal metabolic rate dari usia, tinggi, berat, dan jenis kelamin.",
      seoTitle: "Kalkulator BMR - Estimasi Metabolisme Basal",
      seoDescription: "Hitung BMR untuk memperkirakan kebutuhan energi dasar tubuh berdasarkan data tubuh.",
    },
    "calories-calculator": {
      name: "Kalkulator Kalori",
      description: "Perkirakan kebutuhan kalori harian untuk mempertahankan, menurunkan, atau menaikkan berat.",
      seoTitle: "Kalkulator Kalori - Estimasi Kebutuhan Harian",
      seoDescription: "Hitung kebutuhan kalori harian berdasarkan BMR, aktivitas, dan tujuan berat badan.",
    },
    "body-fat-calculator": {
      name: "Kalkulator Lemak Tubuh",
      description: "Perkirakan persentase lemak tubuh memakai ukuran tubuh umum.",
      seoTitle: "Kalkulator Lemak Tubuh - Estimasi Komposisi Tubuh",
      seoDescription: "Perkirakan persentase lemak tubuh dari ukuran tubuh untuk memahami komposisi tubuh.",
    },
    "water-intake-calculator": {
      name: "Kalkulator Asupan Air",
      description: "Perkirakan kebutuhan air harian berdasarkan berat badan dan aktivitas.",
      seoTitle: "Kalkulator Asupan Air - Estimasi Hidrasi Harian",
      seoDescription: "Hitung perkiraan kebutuhan air harian berdasarkan berat badan, aktivitas, dan target hidrasi.",
    },
    "age-calculator": {
      name: "Kalkulator Usia",
      description: "Hitung usia tepat dalam tahun, bulan, dan hari.",
      seoTitle: "Kalkulator Usia - Hitung Tahun, Bulan, dan Hari",
      seoDescription: "Hitung usia akurat dari tanggal lahir sampai tanggal pilihan dalam tahun, bulan, dan hari.",
    },
    "days-between-dates": {
      name: "Hari Antara Tanggal",
      description: "Hitung jumlah hari antara dua tanggal kalender.",
      seoTitle: "Kalkulator Hari Antara Tanggal - Hitung Selisih Hari",
      seoDescription: "Temukan jumlah hari antara tanggal mulai dan tanggal akhir dengan kalkulator tanggal gratis.",
    },
    "time-duration-calculator": {
      name: "Kalkulator Durasi Waktu",
      description: "Hitung waktu berlalu antara dua waktu atau timestamp.",
      seoTitle: "Kalkulator Durasi Waktu - Hitung Selisih Waktu",
      seoDescription: "Hitung durasi antara dua waktu, jam, atau timestamp untuk perencanaan yang akurat.",
    },
    "week-calculator": {
      name: "Kalkulator Minggu",
      description: "Temukan nomor minggu, rentang tanggal, dan offset minggu.",
      seoTitle: "Kalkulator Minggu - Nomor Minggu dan Rentang Tanggal",
      seoDescription: "Cari nomor minggu, tanggal awal dan akhir minggu, serta pergeseran minggu dari tanggal pilihan.",
    },
    "percentage-calculator": {
      name: "Kalkulator Persentase",
      description: "Selesaikan kenaikan, penurunan, dan perbandingan bagian terhadap keseluruhan.",
      seoTitle: "Kalkulator Persentase - Hitung Persen Dengan Cepat",
      seoDescription: "Hitung persentase, kenaikan persen, penurunan persen, dan bagian dari total.",
    },
    "fraction-calculator": {
      name: "Kalkulator Pecahan",
      description: "Tambah, kurang, kali, bagi, dan sederhanakan pecahan.",
      seoTitle: "Kalkulator Pecahan - Operasi dan Penyederhanaan",
      seoDescription: "Hitung penjumlahan, pengurangan, perkalian, pembagian, dan penyederhanaan pecahan.",
    },
    "gpa-calculator": {
      name: "Kalkulator GPA",
      description: "Hitung grade point average dari mata kuliah, kredit, dan nilai.",
      seoTitle: "Kalkulator GPA - Hitung Rata-rata Nilai",
      seoDescription: "Hitung GPA dari nilai dan kredit untuk melacak performa akademik semester atau kumulatif.",
    },
    "average-calculator": {
      name: "Kalkulator Rata-rata",
      description: "Temukan rata-rata aritmetika dari daftar angka.",
      seoTitle: "Kalkulator Rata-rata - Hitung Mean Angka",
      seoDescription: "Hitung rata-rata dari sekumpulan nilai dengan cepat dan sederhana.",
    },
    "kg-to-lbs": {
      name: "KG ke LBS",
      description: "Konversi kilogram ke pon secara instan.",
      seoTitle: "Kalkulator KG ke LBS - Konversi Kilogram ke Pon",
      seoDescription: "Konversi berat dari kilogram ke pounds atau lbs dengan alat konversi gratis.",
    },
    "cm-to-inches": {
      name: "CM ke Inci",
      description: "Konversi sentimeter ke inci untuk ukuran dan dimensi.",
      seoTitle: "Kalkulator CM ke Inci - Konversi Sentimeter",
      seoDescription: "Ubah sentimeter menjadi inci untuk tinggi, panjang, ukuran, dan dimensi harian.",
    },
    "miles-to-km": {
      name: "Mil ke KM",
      description: "Konversi mil ke kilometer untuk perencanaan jarak.",
      seoTitle: "Kalkulator Mil ke KM - Konversi Jarak",
      seoDescription: "Konversi mil menjadi kilometer dengan cepat untuk perjalanan, lari, dan perencanaan jarak.",
    },
    "celsius-to-fahrenheit": {
      name: "Celsius ke Fahrenheit",
      description: "Konversi suhu Celsius ke Fahrenheit.",
      seoTitle: "Kalkulator Celsius ke Fahrenheit - Konversi Suhu",
      seoDescription: "Ubah suhu Celsius menjadi Fahrenheit dengan kalkulator konversi suhu gratis.",
    },
    "profit-calculator": {
      name: "Kalkulator Laba",
      description: "Hitung laba dari pendapatan dan biaya.",
      seoTitle: "Kalkulator Laba - Hitung Pendapatan Dikurangi Biaya",
      seoDescription: "Hitung laba bisnis dari pendapatan, biaya, margin, dan skenario operasional.",
    },
    "revenue-calculator": {
      name: "Kalkulator Pendapatan",
      description: "Perkirakan pendapatan dari harga, jumlah, dan volume penjualan.",
      seoTitle: "Kalkulator Pendapatan - Estimasi Penjualan",
      seoDescription: "Hitung pendapatan dari harga per unit, kuantitas, dan volume penjualan.",
    },
    "break-even-calculator": {
      name: "Kalkulator Titik Impas",
      description: "Temukan volume penjualan yang dibutuhkan untuk menutup biaya tetap dan variabel.",
      seoTitle: "Kalkulator Titik Impas - Unit dan Pendapatan",
      seoDescription: "Hitung titik impas berdasarkan biaya tetap, biaya variabel, dan harga jual.",
    },
    "cac-calculator": {
      name: "Kalkulator CAC",
      description: "Hitung biaya akuisisi pelanggan dari belanja penjualan dan pemasaran.",
      seoTitle: "Kalkulator CAC - Biaya Akuisisi Pelanggan",
      seoDescription: "Hitung CAC dari total biaya penjualan dan pemasaran dibagi pelanggan baru.",
    },
    "ltv-calculator": {
      name: "Kalkulator LTV",
      description: "Perkirakan customer lifetime value dari pendapatan, margin, dan retensi.",
      seoTitle: "Kalkulator LTV - Nilai Umur Pelanggan",
      seoDescription: "Perkirakan LTV pelanggan dari pendapatan rata-rata, margin kotor, dan masa pelanggan.",
    },
    "openai-cost-calculator": {
      name: "Kalkulator Biaya OpenAI",
      description: "Perkirakan biaya API OpenAI dari token, harga model, dan volume penggunaan.",
      seoTitle: "Kalkulator Biaya OpenAI - Estimasi Biaya Token API",
      seoDescription: "Hitung estimasi biaya OpenAI API dari token input, token output, model, dan volume permintaan.",
    },
    "claude-token-calculator": {
      name: "Kalkulator Token Claude",
      description: "Perkirakan penggunaan token dan biaya Claude untuk prompt dan respons.",
      seoTitle: "Kalkulator Token Claude - Estimasi Biaya Prompt dan Respons",
      seoDescription: "Hitung penggunaan token Claude, biaya input, biaya output, dan perkiraan biaya API.",
    },
    "llm-cost-calculator": {
      name: "Kalkulator Biaya LLM",
      description: "Bandingkan biaya large language model di berbagai harga token dan beban kerja.",
      seoTitle: "Kalkulator Biaya LLM - Bandingkan Harga Model",
      seoDescription: "Bandingkan biaya LLM berdasarkan token input, token output, tarif model, dan skenario penggunaan.",
    },
    "gpu-training-cost-calculator": {
      name: "Kalkulator Biaya Pelatihan GPU",
      description: "Perkirakan biaya pelatihan GPU dari harga perangkat, runtime, dan utilisasi.",
      seoTitle: "Kalkulator Biaya Pelatihan GPU - Estimasi Runtime",
      seoDescription: "Hitung biaya pelatihan model dari tarif GPU per jam, durasi pelatihan, jumlah GPU, dan utilisasi.",
    },
    "ai-pricing-calculator": {
      name: "Kalkulator Harga AI",
      description: "Rencanakan harga produk AI dari biaya penggunaan, margin, dan volume pelanggan.",
      seoTitle: "Kalkulator Harga AI - Ubah Biaya Menjadi Harga Produk",
      seoDescription: "Rancang harga produk AI dari biaya unit, target margin, paket langganan, dan volume pelanggan.",
    },
  } satisfies Record<CalculatorSlug, CalculatorTranslation>,
  blogPosts: {
    "how-to-calculate-roi": {
      title: "Cara Menghitung ROI",
      excerpt: "Pelajari rumus ROI, contoh sederhana, dan cara memakai kalkulator ROI untuk membandingkan biaya, keuntungan, dan skenario investasi.",
      seoTitle: "Cara Menghitung ROI - Rumus dan Contoh",
      seoDescription: "Pelajari cara menghitung return on investment dengan rumus ROI, contoh angka, dan catatan penggunaan yang tepat.",
      sections: [
        {
          heading: "Apa Arti ROI",
          body: [
            "Return on investment membandingkan keuntungan dari investasi dengan biaya awal. Hasilnya biasanya ditampilkan sebagai persentase agar dua investasi dengan nilai uang berbeda lebih mudah dibandingkan.",
            "ROI populer karena sederhana. Bisnis dapat memakainya untuk kampanye pemasaran, pemilik properti untuk perbaikan aset, dan investor individu untuk membandingkan peluang.",
          ],
        },
        {
          heading: "Rumus ROI",
          body: [
            "Rumus dasar adalah ROI = (gain - cost) / cost x 100. Jika hasilnya positif, investasi memberi hasil lebih besar daripada biayanya. Jika negatif, investasi kehilangan nilai dibanding pengeluaran awal.",
            "Perhitungan ROI yang baik memakai input yang konsisten. Sertakan biaya langsung, keluarkan biaya yang tidak terkait, dan bandingkan periode waktu dengan hati-hati.",
          ],
        },
        {
          heading: "Contoh",
          body: [
            "Jika Anda mengeluarkan $2,000 untuk kampanye dan memperoleh keuntungan bersih $2,800, ROI adalah (2,800 - 2,000) / 2,000 x 100, atau 40%. Gunakan kalkulator ROI untuk menguji keuntungan, biaya, dan skenario berbeda.",
          ],
        },
      ],
    },
    "what-is-compound-interest": {
      title: "Apa Itu Bunga Majemuk",
      excerpt: "Pahami bunga majemuk, rumus umum, dan mengapa waktu, tingkat bunga, serta frekuensi penggabungan memengaruhi pertumbuhan saldo.",
      seoTitle: "Apa Itu Bunga Majemuk - Rumus dan Penjelasan",
      seoDescription: "Pelajari definisi bunga majemuk, rumus A = P(1 + r/n)^(nt), dan contoh dampaknya pada tabungan, investasi, dan utang.",
      sections: [
        {
          heading: "Definisi Bunga Majemuk",
          body: [
            "Bunga majemuk berarti bunga yang diperoleh ditambahkan kembali ke saldo, sehingga bunga berikutnya dihitung atas pokok awal dan bunga sebelumnya.",
            "Ini berbeda dari bunga sederhana, yang menghitung bunga hanya atas pokok awal.",
          ],
        },
        {
          heading: "Rumus Bunga Majemuk",
          body: [
            "Rumus umum adalah A = P(1 + r/n)^(nt). P adalah pokok, r adalah tingkat bunga tahunan, n adalah periode penggabungan per tahun, dan t adalah waktu dalam tahun.",
            "Penggabungan yang lebih sering dapat meningkatkan saldo akhir, tetapi waktu dan tingkat bunga biasanya memberi dampak terbesar.",
          ],
        },
        {
          heading: "Mengapa Penting",
          body: [
            "Bunga majemuk penting untuk tabungan, investasi, dan utang. Ia dapat membantu investasi tumbuh, tetapi juga dapat membuat saldo yang belum dibayar makin mahal seiring waktu.",
          ],
        },
      ],
    },
    "mortgage-vs-loan": {
      title: "Hipotek vs Pinjaman",
      excerpt: "Bandingkan hipotek dan pinjaman umum, termasuk jaminan, jangka waktu, biaya, dan kalkulator yang cocok untuk tiap kebutuhan.",
      seoTitle: "Hipotek vs Pinjaman - Perbedaan Utama",
      seoDescription: "Pahami perbedaan hipotek dan pinjaman, cara membandingkan pembayaran, serta kapan memakai kalkulator hipotek, pinjaman, atau kredit mobil.",
      sections: [
        {
          heading: "Perbedaan Singkat",
          body: [
            "Hipotek adalah jenis pinjaman khusus untuk membeli real estat. Properti biasanya menjadi jaminan. Pinjaman adalah istilah lebih luas yang dapat mencakup pinjaman pribadi, kredit mobil, pinjaman mahasiswa, pinjaman bisnis, dan hipotek.",
          ],
        },
        {
          heading: "Perbedaan Pembayaran dan Jangka Waktu",
          body: [
            "Hipotek sering memiliki masa pembayaran panjang seperti 15 atau 30 tahun. Pinjaman lain dapat memakai jangka waktu lebih pendek, biaya berbeda, dan aturan persetujuan berbeda.",
            "Karena jangka waktu dan suku bunga bervariasi, perbandingan cicilan bulanan sebaiknya memakai kalkulator, bukan hanya membandingkan jumlah pinjaman.",
          ],
        },
        {
          heading: "Kalkulator Mana yang Dipakai",
          body: [
            "Gunakan kalkulator hipotek untuk pinjaman rumah dengan biaya terkait properti. Gunakan kalkulator pinjaman untuk pinjaman cicilan umum, dan kalkulator kredit mobil untuk pembiayaan kendaraan.",
          ],
        },
      ],
    },
    "what-is-bmi": {
      title: "Apa Itu BMI",
      excerpt: "Pelajari arti BMI, rumus BMI metrik dan imperial, kategori umum, serta batasannya sebagai alat skrining kesehatan.",
      seoTitle: "Apa Itu BMI - Rumus, Kategori, dan Batasan",
      seoDescription: "Pahami body mass index, cara menghitung BMI dari tinggi dan berat, serta mengapa BMI bukan diagnosis medis.",
      sections: [
        {
          heading: "Apa yang Diukur BMI",
          body: [
            "Body Mass Index adalah perhitungan tinggi terhadap berat badan. BMI tidak mengukur lemak tubuh secara langsung, tetapi dapat berguna sebagai alat skrining sederhana untuk orang dewasa.",
          ],
        },
        {
          heading: "Rumus BMI",
          body: [
            "Rumus BMI metrik adalah berat dalam kilogram dibagi tinggi dalam meter kuadrat. Versi imperial mengalikan berat dalam pound dengan 703, lalu membaginya dengan tinggi dalam inci kuadrat.",
          ],
        },
        {
          heading: "Batasan BMI",
          body: [
            "BMI tidak boleh digunakan sebagai diagnosis. Massa otot, usia, kehamilan, dan konteks kesehatan individu dapat mengubah cara skor BMI ditafsirkan.",
          ],
        },
      ],
    },
    "bmi-chart-guide": {
      title: "Panduan Tabel BMI",
      excerpt: "Gunakan tabel BMI untuk memahami kategori umum, kisaran BMI sehat, dan kapan hasil perlu dilihat bersama konteks kesehatan lain.",
      seoTitle: "Panduan Tabel BMI - Kategori dan Kisaran Sehat",
      seoDescription: "Pelajari kategori BMI dewasa, kisaran BMI sehat, cara membaca tabel BMI, dan batasan penggunaannya.",
      sections: [
        {
          heading: "Kategori BMI",
          body: [
            "Kategori BMI dewasa yang umum adalah kurang berat badan di bawah 18.5, kisaran sehat 18.5 sampai 24.9, kelebihan berat 25.0 sampai 29.9, dan obesitas 30.0 atau lebih.",
          ],
        },
        {
          heading: "Kisaran BMI Sehat",
          body: [
            "Kisaran BMI sehat sering ditulis 18.5 sampai 24.9 untuk orang dewasa. Kisaran ini adalah referensi skrining tingkat populasi, bukan diagnosis medis pribadi.",
          ],
        },
        {
          heading: "Cara Memakai Tabel BMI",
          body: [
            "Cari baris tinggi badan, cocokkan dengan kolom berat badan, lalu bandingkan hasil dengan kategori BMI. Kalkulator lebih cepat jika Anda membutuhkan angka yang tepat.",
          ],
        },
      ],
    },
    "openai-api-pricing-explained": {
      title: "Penjelasan Harga API OpenAI",
      excerpt: "Pahami cara harga API OpenAI berbasis token, mengapa token input dan output berbeda, dan cara memperkirakan biaya sebelum rilis.",
      seoTitle: "Harga API OpenAI Dijelaskan - Token dan Biaya",
      seoDescription: "Pelajari cara kerja harga API OpenAI, peran token input dan output, serta cara membuat estimasi biaya penggunaan.",
      sections: [
        {
          heading: "Cara Kerja Harga API",
          body: [
            "Harga API OpenAI biasanya didasarkan pada token yang diproses. Token input dan token output dapat memiliki harga berbeda, jadi estimasi biaya harus mencakup ukuran prompt dan respons.",
          ],
        },
        {
          heading: "Mengapa Token Penting",
          body: [
            "Token adalah potongan teks. Prompt panjang, output panjang, konteks berulang, dan volume permintaan tinggi semuanya dapat menaikkan total tagihan.",
          ],
        },
        {
          heading: "Cara Memperkirakan Biaya",
          body: [
            "Gunakan kalkulator biaya AI untuk mengalikan volume token dengan tarif model. Bandingkan skenario dengan prompt lebih pendek, batas output lebih rendah, atau model berbeda sebelum menjalankan beban kerja.",
            "Harga model OpenAI dapat berubah, jadi verifikasi tarif terbaru di halaman harga resmi sebelum menulis, menerbitkan, atau memperbarui contoh biaya.",
          ],
        },
      ],
    },
    "how-mortgage-interest-works": {
      title: "Cara Kerja Bunga Hipotek",
      excerpt: "Pelajari bagaimana bunga hipotek, amortisasi, pokok, pajak, dan asuransi memengaruhi pembayaran rumah bulanan.",
      seoTitle: "Cara Kerja Bunga Hipotek - Amortisasi dan Pembayaran",
      seoDescription: "Pahami dasar bunga hipotek, amortisasi, dan cara memakai kalkulator hipotek untuk memperkirakan pembayaran bulanan.",
      sections: [
        {
          heading: "Dasar Bunga Hipotek",
          body: [
            "Bunga hipotek adalah biaya meminjam uang untuk membeli rumah. Sebagian besar hipotek tetap diamortisasi, artinya setiap pembayaran mencakup bunga dan pokok.",
          ],
        },
        {
          heading: "Amortisasi",
          body: [
            "Pembayaran awal biasanya berisi porsi bunga lebih besar karena saldo pinjaman masih tinggi. Pembayaran berikutnya menggeser lebih banyak uang ke pokok.",
          ],
        },
        {
          heading: "Penggunaan Kalkulator",
          body: [
            "Kalkulator hipotek membantu memperkirakan pokok dan bunga. Tambahkan pajak, asuransi, dan biaya lain agar lebih dekat dengan pembayaran rumah bulanan yang nyata.",
          ],
        },
      ],
    },
    "claude-token-costs-explained": {
      title: "Penjelasan Biaya Token Claude",
      excerpt: "Pelajari cara memperkirakan biaya Claude dari token input, token output, konteks, batas respons, dan volume permintaan.",
      seoTitle: "Biaya Token Claude Dijelaskan - Input, Output, dan Model",
      seoDescription: "Pahami biaya token Claude, perbedaan harga input dan output, serta cara mengontrol biaya sebelum produksi.",
      sections: [
        {
          heading: "Dasar Biaya Token",
          body: [
            "Biaya token Claude didasarkan pada teks yang diproses model. Token input dan output dapat dihargai berbeda, dan jendela konteks besar dapat meningkatkan biaya jika sering diulang.",
          ],
        },
        {
          heading: "Kontrol Biaya",
          body: [
            "Prompt lebih pendek, batas output lebih ketat, konteks yang dapat digunakan ulang, dan pemilihan model semuanya dapat mengubah profil biaya total.",
          ],
        },
        {
          heading: "Estimasi Sebelum Rilis",
          body: [
            "Gunakan kalkulator biaya LLM untuk memodelkan volume permintaan, ukuran prompt, ukuran completion, dan tarif model sebelum produk mencapai penggunaan produksi.",
            "Harga model Claude dapat berubah, jadi verifikasi tarif terbaru di halaman harga resmi penyedia sebelum menulis, menerbitkan, atau memperbarui contoh biaya.",
          ],
        },
      ],
    },
    "loan-payment-calculator-estimate-monthly-payments": {
      title: "Kalkulator Pembayaran Pinjaman: Estimasi Cicilan Bulanan",
      excerpt: "Perkirakan cicilan pinjaman bulanan dari jumlah pinjaman, suku bunga, dan jangka waktu, lalu pahami mengapa hasil dapat berbeda dari penawaran resmi.",
      seoTitle: "Kalkulator Pembayaran Pinjaman - Estimasi Cicilan Bulanan",
      seoDescription: "Pelajari cara memperkirakan cicilan pinjaman bulanan, total bunga, dan batasan kalkulator sebelum membandingkan pinjaman.",
      sections: [
        {
          heading: "Apa Saja Isi Cicilan Bulanan",
          body: [
            "Cicilan bulanan biasanya didasarkan pada tiga input utama: jumlah yang dipinjam, suku bunga, dan jangka waktu pembayaran. Untuk pinjaman cicilan, pembayaran dirancang agar Anda membayar bunga dan pokok seiring waktu.",
            "Pembayaran awal sering memiliki porsi bunga lebih besar, sedangkan pembayaran berikutnya lebih banyak menuju pokok. Dua pinjaman dengan saldo sama tetap dapat memiliki cicilan berbeda ketika suku bunga atau jangka waktu berubah.",
          ],
        },
        {
          heading: "Cara Memperkirakan Pembayaran",
          body: [
            "Kalkulator pembayaran pinjaman memakai rumus amortisasi untuk memperkirakan cicilan bulanan tetap. Masukkan jumlah pinjaman, suku bunga tahunan, dan jumlah bulan, lalu bandingkan hasil antar skenario.",
            "Estimasi ini berguna untuk anggaran, tetapi mungkin tidak sama persis dengan pengungkapan akhir pemberi pinjaman. Biaya, pajak, asuransi, dan promo dapat menaikkan biaya bulanan nyata.",
          ],
        },
        {
          heading: "Kapan Estimasi Bisa Berbeda",
          body: [
            "Hasil kalkulator hanya seakurat asumsi di baliknya. Suku bunga variabel, pembayaran ekstra, denda terlambat, dan perubahan refinance dapat memengaruhi jadwal pembayaran aktual.",
            "Untuk hipotek, kredit mobil, dan pinjaman pribadi, bandingkan estimasi dengan perjanjian pinjaman resmi. Kalkulator adalah alat perencanaan, bukan nasihat keuangan atau hukum.",
          ],
        },
      ],
    },
    "how-to-calculate-compound-interest-formula-and-examples": {
      title: "Cara Menghitung Bunga Majemuk: Rumus dan Contoh",
      excerpt: "Pelajari rumus bunga majemuk, arti tiap variabel, dan contoh praktis untuk tabungan, investasi, serta biaya utang.",
      seoTitle: "Cara Menghitung Bunga Majemuk - Rumus dan Contoh",
      seoDescription: "Gunakan rumus A = P(1 + r/n)^(nt) untuk memahami bunga majemuk, kontribusi, dan batasan proyeksi jangka panjang.",
      sections: [
        {
          heading: "Apa Arti Bunga Majemuk",
          body: [
            "Bunga majemuk berarti Anda memperoleh bunga atas jumlah awal dan bunga yang sudah ditambahkan pada periode sebelumnya. Seiring waktu, ini dapat menghasilkan pertumbuhan lebih cepat daripada bunga sederhana, yang hanya dihitung atas pokok awal.",
            "Efeknya makin kuat ketika uang dibiarkan berinvestasi lebih lama atau ketika bunga ditambahkan lebih sering, misalnya bulanan bukan tahunan.",
          ],
        },
        {
          heading: "Rumus Standar",
          body: [
            "Rumus bunga majemuk umum adalah A = P(1 + r/n)^(nt). P adalah pokok, r adalah suku bunga tahunan, n adalah jumlah periode penggabungan per tahun, dan t adalah waktu dalam tahun. Hasil A mewakili saldo akhir.",
            "Jika Anda juga melakukan kontribusi rutin, rumus dasar saja mungkin belum cukup. Kalkulator dapat menggabungkan pertumbuhan majemuk dengan setoran berkala untuk estimasi yang lebih berguna.",
          ],
        },
        {
          heading: "Contoh dan Batasan Penting",
          body: [
            "Suku bunga lebih tinggi atau periode lebih panjang dapat menciptakan perbedaan besar pada nilai akhir, bahkan ketika jumlah awal sama. Perubahan kecil pada asumsi dapat berdampak material pada proyeksi jangka panjang.",
            "Kalkulator bunga majemuk membantu untuk edukasi dan perencanaan, tetapi tidak menjamin hasil investasi. Return aktual, pajak, inflasi, dan biaya akun dapat mengurangi pertumbuhan nyata.",
          ],
        },
      ],
    },
    "break-even-calculator-units-revenue-and-fixed-costs": { title: "Kalkulator Titik Impas: Unit, Pendapatan, dan Biaya Tetap", excerpt: "Hitung unit atau pendapatan yang dibutuhkan agar bisnis menutup biaya tetap dan variabel sebelum menghasilkan laba.", seoTitle: "Kalkulator Titik Impas - Unit, Pendapatan, dan Biaya", seoDescription: "Pelajari cara menghitung titik impas dari harga jual, biaya variabel, dan biaya tetap untuk perencanaan bisnis.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung unit atau pendapatan yang dibutuhkan agar bisnis menutup biaya tetap dan variabel sebelum menghasilkan laba.",
            "Bagian ini melengkapi panduan Kalkulator Titik Impas: Unit, Pendapatan, dan Biaya Tetap agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung titik impas dari harga jual, biaya variabel, dan biaya tetap untuk perencanaan bisnis.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-api-cost-calculator-estimate-monthly-token-spend": { title: "Kalkulator Biaya API AI: Estimasi Belanja Token Bulanan", excerpt: "Perkirakan biaya API AI bulanan dari token input, token output, model, volume permintaan, dan skenario penggunaan.", seoTitle: "Kalkulator Biaya API AI - Estimasi Token Bulanan", seoDescription: "Hitung perkiraan biaya API AI bulanan berdasarkan token, tarif model, dan volume permintaan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan biaya API AI bulanan dari token input, token output, model, volume permintaan, dan skenario penggunaan.",
            "Bagian ini melengkapi panduan Kalkulator Biaya API AI: Estimasi Belanja Token Bulanan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung perkiraan biaya API AI bulanan berdasarkan token, tarif model, dan volume permintaan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "token-cost-calculator-input-vs-output-tokens-explained": { title: "Kalkulator Biaya Token: Token Input vs Output", excerpt: "Pahami perbedaan token input dan output serta bagaimana keduanya memengaruhi biaya model AI.", seoTitle: "Kalkulator Biaya Token - Input vs Output", seoDescription: "Pelajari cara menghitung biaya token input dan output untuk memperkirakan tagihan LLM.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Pahami perbedaan token input dan output serta bagaimana keduanya memengaruhi biaya model AI.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Token: Token Input vs Output agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung biaya token input dan output untuk memperkirakan tagihan LLM.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "llm-cost-calculator-compare-models-by-usage-scenario": { title: "Kalkulator Biaya LLM: Bandingkan Model Berdasarkan Skenario", excerpt: "Bandingkan biaya model bahasa besar dari tarif token, ukuran prompt, output, dan volume kerja.", seoTitle: "Kalkulator Biaya LLM - Bandingkan Model dan Skenario", seoDescription: "Gunakan skenario penggunaan untuk membandingkan biaya LLM lintas model dan tarif token.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Bandingkan biaya model bahasa besar dari tarif token, ukuran prompt, output, dan volume kerja.",
            "Bagian ini melengkapi panduan Kalkulator Biaya LLM: Bandingkan Model Berdasarkan Skenario agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Gunakan skenario penggunaan untuk membandingkan biaya LLM lintas model dan tarif token.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "bmr-calculator-estimate-your-basal-metabolic-rate": { title: "Kalkulator BMR: Estimasi Basal Metabolic Rate", excerpt: "Perkirakan BMR dari data tubuh dan pahami cara angka ini dipakai sebagai dasar kebutuhan kalori.", seoTitle: "Kalkulator BMR - Estimasi Metabolisme Basal", seoDescription: "Pelajari cara kalkulator BMR memperkirakan kebutuhan energi dasar tubuh dan batasannya.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan BMR dari data tubuh dan pahami cara angka ini dipakai sebagai dasar kebutuhan kalori.",
            "Bagian ini melengkapi panduan Kalkulator BMR: Estimasi Basal Metabolic Rate agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara kalkulator BMR memperkirakan kebutuhan energi dasar tubuh dan batasannya.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "calorie-calculator-estimate-daily-calorie-needs": { title: "Kalkulator Kalori: Estimasi Kebutuhan Kalori Harian", excerpt: "Perkirakan kalori harian untuk mempertahankan, menurunkan, atau menaikkan berat berdasarkan BMR dan aktivitas.", seoTitle: "Kalkulator Kalori - Estimasi Kebutuhan Harian", seoDescription: "Hitung kebutuhan kalori harian dari ukuran tubuh, aktivitas, dan tujuan berat badan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan kalori harian untuk mempertahankan, menurunkan, atau menaikkan berat berdasarkan BMR dan aktivitas.",
            "Bagian ini melengkapi panduan Kalkulator Kalori: Estimasi Kebutuhan Kalori Harian agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung kebutuhan kalori harian dari ukuran tubuh, aktivitas, dan tujuan berat badan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "bmi-vs-body-fat-percentage-which-number-is-more-useful": { title: "BMI vs Persentase Lemak Tubuh: Mana yang Lebih Berguna?", excerpt: "Bandingkan BMI dan persentase lemak tubuh, termasuk kelebihan, batasan, dan kapan masing-masing lebih tepat dipakai.", seoTitle: "BMI vs Persentase Lemak Tubuh - Perbandingan", seoDescription: "Pahami perbedaan BMI dan persentase lemak tubuh serta cara menafsirkan keduanya dengan konteks.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Bandingkan BMI dan persentase lemak tubuh, termasuk kelebihan, batasan, dan kapan masing-masing lebih tepat dipakai.",
            "Bagian ini melengkapi panduan BMI vs Persentase Lemak Tubuh: Mana yang Lebih Berguna? agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pahami perbedaan BMI dan persentase lemak tubuh serta cara menafsirkan keduanya dengan konteks.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "conversion-rate-calculator-measure-website-performance": { title: "Kalkulator Conversion Rate: Ukur Performa Website Tanpa Tebakan", excerpt: "Hitung conversion rate dari pengunjung dan konversi untuk mengevaluasi performa halaman, funnel, atau kampanye.", seoTitle: "Kalkulator Conversion Rate - Ukur Performa Website", seoDescription: "Pelajari cara menghitung conversion rate dan membaca perubahan konversi website secara praktis.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung conversion rate dari pengunjung dan konversi untuk mengevaluasi performa halaman, funnel, atau kampanye.",
            "Bagian ini melengkapi panduan Kalkulator Conversion Rate: Ukur Performa Website Tanpa Tebakan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung conversion rate dan membaca perubahan konversi website secara praktis.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "roas-calculator-estimate-return-on-ad-spend": { title: "Kalkulator ROAS: Estimasi Return on Ad Spend Sebelum Scale", excerpt: "Hitung ROAS dari pendapatan iklan dan belanja iklan untuk menilai efisiensi kampanye sebelum menaikkan anggaran.", seoTitle: "Kalkulator ROAS - Estimasi Return on Ad Spend", seoDescription: "Pelajari cara menghitung ROAS, membaca hasil, dan membandingkan kampanye iklan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung ROAS dari pendapatan iklan dan belanja iklan untuk menilai efisiensi kampanye sebelum menaikkan anggaran.",
            "Bagian ini melengkapi panduan Kalkulator ROAS: Estimasi Return on Ad Spend Sebelum Scale agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung ROAS, membaca hasil, dan membandingkan kampanye iklan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "cac-calculator-how-to-calculate-customer-acquisition-cost": { title: "Kalkulator CAC: Cara Menghitung Biaya Akuisisi Pelanggan", excerpt: "Hitung CAC dari belanja pemasaran dan penjualan dibagi pelanggan baru, lalu pahami batasan metrik ini.", seoTitle: "Kalkulator CAC - Cara Menghitung Akuisisi Pelanggan", seoDescription: "Pelajari cara menghitung customer acquisition cost dan memakai CAC untuk perencanaan pertumbuhan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung CAC dari belanja pemasaran dan penjualan dibagi pelanggan baru, lalu pahami batasan metrik ini.",
            "Bagian ini melengkapi panduan Kalkulator CAC: Cara Menghitung Biaya Akuisisi Pelanggan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung customer acquisition cost dan memakai CAC untuk perencanaan pertumbuhan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "mortgage-payment-calculator-principal-interest-and-term": { title: "Kalkulator Pembayaran Hipotek: Pokok, Bunga, dan Jangka Waktu", excerpt: "Perkirakan pembayaran hipotek dari pokok, bunga, dan jangka waktu sebelum menambahkan pajak atau asuransi.", seoTitle: "Kalkulator Pembayaran Hipotek - Pokok dan Bunga", seoDescription: "Pelajari cara cicilan hipotek dihitung dari jumlah pinjaman, suku bunga, dan masa pembayaran.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan pembayaran hipotek dari pokok, bunga, dan jangka waktu sebelum menambahkan pajak atau asuransi.",
            "Bagian ini melengkapi panduan Kalkulator Pembayaran Hipotek: Pokok, Bunga, dan Jangka Waktu agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara cicilan hipotek dihitung dari jumlah pinjaman, suku bunga, dan masa pembayaran.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "apr-vs-interest-rate-what-borrowers-should-compare": { title: "APR vs Suku Bunga: Apa yang Perlu Dibandingkan Peminjam", excerpt: "Pahami perbedaan APR dan suku bunga agar perbandingan biaya pinjaman lebih akurat.", seoTitle: "APR vs Suku Bunga - Yang Perlu Dibandingkan", seoDescription: "Bandingkan APR, suku bunga, biaya, dan pembayaran untuk memahami total biaya pinjaman.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Pahami perbedaan APR dan suku bunga agar perbandingan biaya pinjaman lebih akurat.",
            "Bagian ini melengkapi panduan APR vs Suku Bunga: Apa yang Perlu Dibandingkan Peminjam agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Bandingkan APR, suku bunga, biaya, dan pembayaran untuk memahami total biaya pinjaman.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "simple-interest-calculator-formula-examples-and-use-cases": { title: "Kalkulator Bunga Sederhana: Rumus, Contoh, dan Penggunaan", excerpt: "Pelajari rumus bunga sederhana, contoh perhitungan, dan kapan metode ini cocok untuk estimasi cepat.", seoTitle: "Kalkulator Bunga Sederhana - Rumus dan Contoh", seoDescription: "Hitung bunga sederhana dari pokok, suku bunga, dan waktu dengan contoh penggunaan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Pelajari rumus bunga sederhana, contoh perhitungan, dan kapan metode ini cocok untuk estimasi cepat.",
            "Bagian ini melengkapi panduan Kalkulator Bunga Sederhana: Rumus, Contoh, dan Penggunaan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung bunga sederhana dari pokok, suku bunga, dan waktu dengan contoh penggunaan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "openai-cost-calculator-estimate-chat-and-api-usage": { title: "Kalkulator Biaya OpenAI: Estimasi Chat dan Penggunaan API", excerpt: "Perkirakan biaya OpenAI dari token, model, permintaan, dan pola penggunaan chat atau API.", seoTitle: "Kalkulator Biaya OpenAI - Chat dan API", seoDescription: "Hitung biaya OpenAI untuk chat dan API berdasarkan token input, token output, dan volume.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan biaya OpenAI dari token, model, permintaan, dan pola penggunaan chat atau API.",
            "Bagian ini melengkapi panduan Kalkulator Biaya OpenAI: Estimasi Chat dan Penggunaan API agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya OpenAI untuk chat dan API berdasarkan token input, token output, dan volume.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "claude-cost-calculator-estimate-token-based-api-spend": { title: "Kalkulator Biaya Claude: Estimasi Belanja API Berbasis Token", excerpt: "Perkirakan biaya Claude dari prompt, completion, konteks, model, dan volume permintaan.", seoTitle: "Kalkulator Biaya Claude - Estimasi Token API", seoDescription: "Hitung biaya Claude berdasarkan token input, token output, tarif model, dan skenario penggunaan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan biaya Claude dari prompt, completion, konteks, model, dan volume permintaan.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Claude: Estimasi Belanja API Berbasis Token agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya Claude berdasarkan token input, token output, tarif model, dan skenario penggunaan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-pricing-calculator-turn-usage-cost-into-subscription-tiers": { title: "Kalkulator Harga AI: Ubah Biaya Penggunaan Menjadi Paket Langganan", excerpt: "Rancang paket harga AI dari biaya unit, margin, volume pelanggan, dan batas penggunaan.", seoTitle: "Kalkulator Harga AI - Biaya ke Paket Langganan", seoDescription: "Pelajari cara mengubah biaya AI menjadi tier harga berlangganan dengan margin yang jelas.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Rancang paket harga AI dari biaya unit, margin, volume pelanggan, dan batas penggunaan.",
            "Bagian ini melengkapi panduan Kalkulator Harga AI: Ubah Biaya Penggunaan Menjadi Paket Langganan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara mengubah biaya AI menjadi tier harga berlangganan dengan margin yang jelas.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "tdee-calculator-estimate-daily-energy-expenditure": { title: "Kalkulator TDEE: Estimasi Pengeluaran Energi Harian", excerpt: "Perkirakan TDEE dari BMR dan tingkat aktivitas untuk memahami kebutuhan kalori harian.", seoTitle: "Kalkulator TDEE - Estimasi Energi Harian", seoDescription: "Hitung total daily energy expenditure dari metabolisme dasar dan aktivitas harian.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan TDEE dari BMR dan tingkat aktivitas untuk memahami kebutuhan kalori harian.",
            "Bagian ini melengkapi panduan Kalkulator TDEE: Estimasi Pengeluaran Energi Harian agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung total daily energy expenditure dari metabolisme dasar dan aktivitas harian.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "body-fat-calculator-estimate-body-composition": { title: "Kalkulator Lemak Tubuh: Estimasi Komposisi Tubuh", excerpt: "Perkirakan persentase lemak tubuh dari ukuran tubuh dan pahami batasan hasil berbasis pengukuran.", seoTitle: "Kalkulator Lemak Tubuh - Estimasi Komposisi", seoDescription: "Pelajari cara kalkulator lemak tubuh memperkirakan komposisi tubuh dan kapan hasil perlu konteks.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan persentase lemak tubuh dari ukuran tubuh dan pahami batasan hasil berbasis pengukuran.",
            "Bagian ini melengkapi panduan Kalkulator Lemak Tubuh: Estimasi Komposisi Tubuh agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara kalkulator lemak tubuh memperkirakan komposisi tubuh dan kapan hasil perlu konteks.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "water-intake-calculator-estimate-daily-hydration-needs": { title: "Kalkulator Asupan Air: Estimasi Kebutuhan Hidrasi Harian", excerpt: "Perkirakan kebutuhan air harian berdasarkan berat, aktivitas, dan kondisi umum untuk perencanaan hidrasi.", seoTitle: "Kalkulator Asupan Air - Kebutuhan Hidrasi Harian", seoDescription: "Hitung estimasi air minum harian dari berat badan, aktivitas, dan target hidrasi.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan kebutuhan air harian berdasarkan berat, aktivitas, dan kondisi umum untuk perencanaan hidrasi.",
            "Bagian ini melengkapi panduan Kalkulator Asupan Air: Estimasi Kebutuhan Hidrasi Harian agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung estimasi air minum harian dari berat badan, aktivitas, dan target hidrasi.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ltv-to-cac-ratio-calculator-understand-growth-efficiency": { title: "Kalkulator Rasio LTV ke CAC: Pahami Efisiensi Pertumbuhan", excerpt: "Bandingkan lifetime value dan biaya akuisisi pelanggan untuk membaca efisiensi pertumbuhan bisnis.", seoTitle: "Kalkulator Rasio LTV ke CAC - Efisiensi Pertumbuhan", seoDescription: "Hitung rasio LTV:CAC dan pahami implikasinya untuk pemasaran, penjualan, dan margin.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Bandingkan lifetime value dan biaya akuisisi pelanggan untuk membaca efisiensi pertumbuhan bisnis.",
            "Bagian ini melengkapi panduan Kalkulator Rasio LTV ke CAC: Pahami Efisiensi Pertumbuhan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung rasio LTV:CAC dan pahami implikasinya untuk pemasaran, penjualan, dan margin.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "funnel-conversion-calculator-find-drop-off-between-steps": { title: "Kalkulator Konversi Funnel: Temukan Drop-off Antar Langkah", excerpt: "Ukur konversi tiap tahap funnel untuk menemukan titik kehilangan pengguna atau prospek.", seoTitle: "Kalkulator Konversi Funnel - Temukan Drop-off", seoDescription: "Hitung tingkat konversi antar langkah funnel dan identifikasi hambatan pertumbuhan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Ukur konversi tiap tahap funnel untuk menemukan titik kehilangan pengguna atau prospek.",
            "Bagian ini melengkapi panduan Kalkulator Konversi Funnel: Temukan Drop-off Antar Langkah agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung tingkat konversi antar langkah funnel dan identifikasi hambatan pertumbuhan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "landing-page-lift-calculator-estimate-extra-conversions-needed": { title: "Kalkulator Lift Landing Page: Estimasi Konversi Tambahan", excerpt: "Perkirakan peningkatan konversi yang dibutuhkan agar perubahan landing page berdampak pada target.", seoTitle: "Kalkulator Lift Landing Page - Estimasi Konversi Tambahan", seoDescription: "Hitung konversi tambahan dari perubahan conversion rate, traffic, dan target kampanye.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan peningkatan konversi yang dibutuhkan agar perubahan landing page berdampak pada target.",
            "Bagian ini melengkapi panduan Kalkulator Lift Landing Page: Estimasi Konversi Tambahan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung konversi tambahan dari perubahan conversion rate, traffic, dan target kampanye.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "freelancer-hourly-rate-calculator-price-your-work-sustainably": { title: "Kalkulator Tarif Per Jam Freelancer: Harga Kerja yang Berkelanjutan", excerpt: "Hitung tarif per jam yang mencakup pendapatan target, biaya, pajak, jam non-billable, dan cuti.", seoTitle: "Kalkulator Tarif Freelancer - Harga Per Jam Berkelanjutan", seoDescription: "Pelajari cara menetapkan tarif freelancer berdasarkan pendapatan target, biaya, pajak, dan jam kerja.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung tarif per jam yang mencakup pendapatan target, biaya, pajak, jam non-billable, dan cuti.",
            "Bagian ini melengkapi panduan Kalkulator Tarif Per Jam Freelancer: Harga Kerja yang Berkelanjutan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menetapkan tarif freelancer berdasarkan pendapatan target, biaya, pajak, dan jam kerja.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "business-runway-calculator-how-long-can-your-cash-last": { title: "Kalkulator Runway Bisnis: Berapa Lama Kas Bertahan?", excerpt: "Perkirakan berapa bulan kas dapat mendanai operasi berdasarkan saldo, burn rate, dan perubahan pendapatan.", seoTitle: "Kalkulator Runway Bisnis - Berapa Lama Kas Bertahan", seoDescription: "Hitung runway bisnis dari saldo kas, pengeluaran bulanan, pendapatan, dan skenario burn.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan berapa bulan kas dapat mendanai operasi berdasarkan saldo, burn rate, dan perubahan pendapatan.",
            "Bagian ini melengkapi panduan Kalkulator Runway Bisnis: Berapa Lama Kas Bertahan? agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung runway bisnis dari saldo kas, pengeluaran bulanan, pendapatan, dan skenario burn.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "burn-rate-calculator-monthly-spend-and-cash-planning": { title: "Kalkulator Burn Rate: Pengeluaran Bulanan dan Perencanaan Kas", excerpt: "Hitung burn rate kotor dan bersih untuk memahami kecepatan bisnis memakai kas.", seoTitle: "Kalkulator Burn Rate - Pengeluaran Bulanan dan Kas", seoDescription: "Pelajari cara menghitung burn rate, net burn, dan implikasinya terhadap runway bisnis.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung burn rate kotor dan bersih untuk memahami kecepatan bisnis memakai kas.",
            "Bagian ini melengkapi panduan Kalkulator Burn Rate: Pengeluaran Bulanan dan Perencanaan Kas agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung burn rate, net burn, dan implikasinya terhadap runway bisnis.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "rag-cost-calculator-estimate-embedding-storage-and-query-costs": { title: "Kalkulator Biaya RAG: Estimasi Embedding, Penyimpanan, dan Query", excerpt: "Perkirakan biaya RAG dari embedding dokumen, penyimpanan vektor, query, dan panggilan model.", seoTitle: "Kalkulator Biaya RAG - Embedding, Storage, dan Query", seoDescription: "Hitung biaya retrieval augmented generation dari indexing, penyimpanan, pencarian, dan token LLM.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan biaya RAG dari embedding dokumen, penyimpanan vektor, query, dan panggilan model.",
            "Bagian ini melengkapi panduan Kalkulator Biaya RAG: Estimasi Embedding, Penyimpanan, dan Query agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya retrieval augmented generation dari indexing, penyimpanan, pencarian, dan token LLM.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "embedding-cost-calculator-price-document-indexing-workflows": { title: "Kalkulator Biaya Embedding: Harga Workflow Indexing Dokumen", excerpt: "Estimasi biaya membuat embedding dokumen dari jumlah kata, token, chunk, model, dan refresh index.", seoTitle: "Kalkulator Biaya Embedding - Indexing Dokumen", seoDescription: "Hitung biaya embedding untuk workflow indexing dokumen, chunking, refresh, dan penyimpanan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Estimasi biaya membuat embedding dokumen dari jumlah kata, token, chunk, model, dan refresh index.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Embedding: Harga Workflow Indexing Dokumen agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya embedding untuk workflow indexing dokumen, chunking, refresh, dan penyimpanan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-image-generation-cost-calculator-estimate-creative-volume": { title: "Kalkulator Biaya Gambar AI: Estimasi Volume Kreatif", excerpt: "Perkirakan biaya generasi gambar AI dari jumlah gambar, ukuran, kualitas, revisi, dan volume kampanye.", seoTitle: "Kalkulator Biaya Gambar AI - Estimasi Volume Kreatif", seoDescription: "Hitung biaya produksi gambar AI berdasarkan volume output, kualitas, revisi, dan harga model.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan biaya generasi gambar AI dari jumlah gambar, ukuran, kualitas, revisi, dan volume kampanye.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Gambar AI: Estimasi Volume Kreatif agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya produksi gambar AI berdasarkan volume output, kualitas, revisi, dan harga model.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "macro-calculator-estimate-protein-carbs-and-fat-targets": { title: "Kalkulator Makro: Estimasi Target Protein, Karbohidrat, dan Lemak", excerpt: "Perkirakan pembagian makronutrien berdasarkan kalori, tujuan tubuh, dan preferensi nutrisi.", seoTitle: "Kalkulator Makro - Protein, Karbohidrat, dan Lemak", seoDescription: "Hitung target makro harian dari kalori, protein, karbohidrat, dan lemak untuk perencanaan makan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan pembagian makronutrien berdasarkan kalori, tujuan tubuh, dan preferensi nutrisi.",
            "Bagian ini melengkapi panduan Kalkulator Makro: Estimasi Target Protein, Karbohidrat, dan Lemak agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung target makro harian dari kalori, protein, karbohidrat, dan lemak untuk perencanaan makan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "protein-calculator-estimate-daily-protein-needs": { title: "Kalkulator Protein: Estimasi Kebutuhan Protein Harian", excerpt: "Perkirakan kebutuhan protein harian berdasarkan berat badan, aktivitas, dan tujuan kebugaran.", seoTitle: "Kalkulator Protein - Kebutuhan Harian", seoDescription: "Hitung target protein harian untuk pemeliharaan, latihan, atau perubahan komposisi tubuh.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan kebutuhan protein harian berdasarkan berat badan, aktivitas, dan tujuan kebugaran.",
            "Bagian ini melengkapi panduan Kalkulator Protein: Estimasi Kebutuhan Protein Harian agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung target protein harian untuk pemeliharaan, latihan, atau perubahan komposisi tubuh.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ideal-weight-calculator-compare-common-formulas": { title: "Kalkulator Berat Ideal: Bandingkan Rumus Umum", excerpt: "Bandingkan beberapa rumus berat ideal dan pahami mengapa hasilnya hanya panduan kasar.", seoTitle: "Kalkulator Berat Ideal - Bandingkan Rumus", seoDescription: "Pelajari rumus berat ideal umum, perbedaan hasil, dan batasan penggunaannya.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Bandingkan beberapa rumus berat ideal dan pahami mengapa hasilnya hanya panduan kasar.",
            "Bagian ini melengkapi panduan Kalkulator Berat Ideal: Bandingkan Rumus Umum agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari rumus berat ideal umum, perbedaan hasil, dan batasan penggunaannya.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "cpa-calculator-estimate-cost-per-acquisition": { title: "Kalkulator CPA: Estimasi Cost Per Acquisition", excerpt: "Hitung biaya per akuisisi dari belanja kampanye dan jumlah pelanggan atau konversi yang diperoleh.", seoTitle: "Kalkulator CPA - Estimasi Cost Per Acquisition", seoDescription: "Pelajari cara menghitung CPA dan memakai metrik ini untuk evaluasi kampanye.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung biaya per akuisisi dari belanja kampanye dan jumlah pelanggan atau konversi yang diperoleh.",
            "Bagian ini melengkapi panduan Kalkulator CPA: Estimasi Cost Per Acquisition agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung CPA dan memakai metrik ini untuk evaluasi kampanye.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "cpl-calculator-estimate-cost-per-lead": { title: "Kalkulator CPL: Estimasi Cost Per Lead", excerpt: "Hitung biaya per lead dari belanja pemasaran dan jumlah lead untuk membandingkan channel.", seoTitle: "Kalkulator CPL - Estimasi Cost Per Lead", seoDescription: "Hitung CPL dan pahami cara membandingkan efisiensi channel pemasaran.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung biaya per lead dari belanja pemasaran dan jumlah lead untuk membandingkan channel.",
            "Bagian ini melengkapi panduan Kalkulator CPL: Estimasi Cost Per Lead agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung CPL dan pahami cara membandingkan efisiensi channel pemasaran.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "lead-value-calculator-estimate-revenue-per-lead": { title: "Kalkulator Nilai Lead: Estimasi Pendapatan per Lead", excerpt: "Perkirakan nilai rata-rata lead dari conversion rate, pendapatan, margin, dan kualitas pipeline.", seoTitle: "Kalkulator Nilai Lead - Estimasi Pendapatan per Lead", seoDescription: "Hitung nilai lead untuk membantu keputusan anggaran pemasaran dan prioritas penjualan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan nilai rata-rata lead dari conversion rate, pendapatan, margin, dan kualitas pipeline.",
            "Bagian ini melengkapi panduan Kalkulator Nilai Lead: Estimasi Pendapatan per Lead agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung nilai lead untuk membantu keputusan anggaran pemasaran dan prioritas penjualan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "tax-reserve-calculator-for-freelancers-and-small-businesses": { title: "Kalkulator Cadangan Pajak untuk Freelancer dan Usaha Kecil", excerpt: "Perkirakan cadangan pajak dari pendapatan, biaya, dan persentase konservatif agar kas operasional lebih aman.", seoTitle: "Kalkulator Cadangan Pajak - Freelancer dan Usaha Kecil", seoDescription: "Pelajari cara menyisihkan cadangan pajak untuk pendapatan freelancer dan usaha kecil.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan cadangan pajak dari pendapatan, biaya, dan persentase konservatif agar kas operasional lebih aman.",
            "Bagian ini melengkapi panduan Kalkulator Cadangan Pajak untuk Freelancer dan Usaha Kecil agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menyisihkan cadangan pajak untuk pendapatan freelancer dan usaha kecil.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "invoice-late-fee-calculator-estimate-fair-payment-penalties": { title: "Kalkulator Denda Keterlambatan Invoice: Estimasi Penalti yang Wajar", excerpt: "Hitung denda keterlambatan invoice yang masuk akal dan pahami batas kontrak, keadilan, serta aturan hukum.", seoTitle: "Kalkulator Denda Invoice - Estimasi Penalti Pembayaran", seoDescription: "Perkirakan denda invoice terlambat memakai biaya tetap, persentase, atau tarif bulanan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung denda keterlambatan invoice yang masuk akal dan pahami batas kontrak, keadilan, serta aturan hukum.",
            "Bagian ini melengkapi panduan Kalkulator Denda Keterlambatan Invoice: Estimasi Penalti yang Wajar agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Perkirakan denda invoice terlambat memakai biaya tetap, persentase, atau tarif bulanan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "subscription-burn-calculator-audit-recurring-saas-costs": { title: "Kalkulator Subscription Burn: Audit Biaya SaaS Berulang", excerpt: "Estimasi burn langganan berulang dan temukan biaya SaaS yang duplikat, tidak terpakai, atau kurang relevan.", seoTitle: "Kalkulator Subscription Burn - Audit Biaya SaaS", seoDescription: "Hitung burn SaaS bulanan dan tahunan untuk meningkatkan visibilitas biaya berulang.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Estimasi burn langganan berulang dan temukan biaya SaaS yang duplikat, tidak terpakai, atau kurang relevan.",
            "Bagian ini melengkapi panduan Kalkulator Subscription Burn: Audit Biaya SaaS Berulang agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung burn SaaS bulanan dan tahunan untuk meningkatkan visibilitas biaya berulang.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-translation-cost-calculator-estimate-multilingual-content-spend": { title: "Kalkulator Biaya Terjemahan AI: Estimasi Belanja Konten Multibahasa", excerpt: "Perkirakan biaya terjemahan AI dari kata sumber, bahasa target, token, waktu review, dan harga penyedia.", seoTitle: "Kalkulator Biaya Terjemahan AI - Konten Multibahasa", seoDescription: "Hitung biaya terjemahan AI memakai token, jumlah bahasa, review manusia, dan tarif model.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan biaya terjemahan AI dari kata sumber, bahasa target, token, waktu review, dan harga penyedia.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Terjemahan AI: Estimasi Belanja Konten Multibahasa agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya terjemahan AI memakai token, jumlah bahasa, review manusia, dan tarif model.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-agent-cost-calculator-tool-calls-tokens-and-runtime": { title: "Kalkulator Biaya AI Agent: Tool Call, Token, dan Runtime", excerpt: "Estimasi biaya AI agent dengan menggabungkan token prompt, output, tool call, retry, runtime, dan infrastruktur.", seoTitle: "Kalkulator Biaya AI Agent - Tool Call, Token, Runtime", seoDescription: "Pelajari cara menghitung biaya AI agent dari token, tool call, retry, runtime, dan infrastruktur.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Estimasi biaya AI agent dengan menggabungkan token prompt, output, tool call, retry, runtime, dan infrastruktur.",
            "Bagian ini melengkapi panduan Kalkulator Biaya AI Agent: Tool Call, Token, dan Runtime agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung biaya AI agent dari token, tool call, retry, runtime, dan infrastruktur.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "cost-per-1000-ai-outputs-how-to-calculate-unit-cost": { title: "Biaya per 1.000 Output AI: Cara Menghitung Biaya Unit", excerpt: "Hitung ekonomi unit AI dengan mengukur biaya per 1.000 output dari token, retry, review, dan infrastruktur.", seoTitle: "Biaya per 1.000 Output AI - Hitung Biaya Unit", seoDescription: "Hitung biaya per 1.000 output AI untuk pricing produk, margin, dan perbandingan model.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung ekonomi unit AI dengan mengukur biaya per 1.000 output dari token, retry, review, dan infrastruktur.",
            "Bagian ini melengkapi panduan Biaya per 1.000 Output AI: Cara Menghitung Biaya Unit agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya per 1.000 output AI untuk pricing produk, margin, dan perbandingan model.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "body-mass-index-formula-metric-and-imperial-examples": { title: "Rumus Body Mass Index: Contoh Metrik dan Imperial", excerpt: "Pelajari cara BMI dihitung dalam satuan metrik dan imperial, dengan contoh sederhana dan batasan praktis.", seoTitle: "Rumus BMI - Contoh Metrik dan Imperial", seoDescription: "Pahami rumus BMI, cara menghitung dengan satuan metrik atau imperial, dan mengapa BMI adalah estimasi.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Pelajari cara BMI dihitung dalam satuan metrik dan imperial, dengan contoh sederhana dan batasan praktis.",
            "Bagian ini melengkapi panduan Rumus Body Mass Index: Contoh Metrik dan Imperial agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pahami rumus BMI, cara menghitung dengan satuan metrik atau imperial, dan mengapa BMI adalah estimasi.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "maintenance-calories-calculator-estimate-energy-balance": { title: "Kalkulator Kalori Maintenance: Estimasi Keseimbangan Energi", excerpt: "Maintenance calories memperkirakan energi yang dibutuhkan tubuh untuk menjaga berat stabil berdasarkan ukuran dan aktivitas.", seoTitle: "Kalkulator Kalori Maintenance - Estimasi Energi", seoDescription: "Pelajari arti maintenance calories dan cara menyesuaikan estimasi dengan tren nyata.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Maintenance calories memperkirakan energi yang dibutuhkan tubuh untuk menjaga berat stabil berdasarkan ukuran dan aktivitas.",
            "Bagian ini melengkapi panduan Kalkulator Kalori Maintenance: Estimasi Keseimbangan Energi agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari arti maintenance calories dan cara menyesuaikan estimasi dengan tren nyata.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "metric-vs-imperial-health-calculators-convert-inputs-correctly": { title: "Metrik vs Imperial di Kalkulator Kesehatan: Konversi Input dengan Benar", excerpt: "Hasil kalkulator kesehatan bergantung pada satuan yang akurat. Pelajari cara menghindari kesalahan konversi umum.", seoTitle: "Konversi Metrik vs Imperial untuk Kalkulator Kesehatan", seoDescription: "Hindari kesalahan satuan pada tinggi, berat, jarak, dan energi saat memakai kalkulator kesehatan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hasil kalkulator kesehatan bergantung pada satuan yang akurat. Pelajari cara menghindari kesalahan konversi umum.",
            "Bagian ini melengkapi panduan Metrik vs Imperial di Kalkulator Kesehatan: Konversi Input dengan Benar agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hindari kesalahan satuan pada tinggi, berat, jarak, dan energi saat memakai kalkulator kesehatan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "pipeline-coverage-calculator-estimate-sales-pipeline-needed": { title: "Kalkulator Pipeline Coverage: Estimasi Pipeline Penjualan yang Dibutuhkan", excerpt: "Gunakan pipeline coverage untuk menilai apakah pipeline penjualan saat ini cukup mendukung target pendapatan.", seoTitle: "Kalkulator Pipeline Coverage - Estimasi Pipeline Penjualan", seoDescription: "Hitung pipeline coverage dari target pendapatan, win rate, dan nilai peluang penjualan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Gunakan pipeline coverage untuk menilai apakah pipeline penjualan saat ini cukup mendukung target pendapatan.",
            "Bagian ini melengkapi panduan Kalkulator Pipeline Coverage: Estimasi Pipeline Penjualan yang Dibutuhkan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung pipeline coverage dari target pendapatan, win rate, dan nilai peluang penjualan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "churn-impact-calculator-model-revenue-lost-to-cancellations": { title: "Kalkulator Dampak Churn: Model Pendapatan Hilang dari Pembatalan", excerpt: "Perkirakan pendapatan yang hilang akibat churn dan bagaimana retensi memengaruhi pertumbuhan.", seoTitle: "Kalkulator Dampak Churn - Pendapatan Hilang", seoDescription: "Hitung dampak churn pada pendapatan, pelanggan, dan skenario pertumbuhan bisnis.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan pendapatan yang hilang akibat churn dan bagaimana retensi memengaruhi pertumbuhan.",
            "Bagian ini melengkapi panduan Kalkulator Dampak Churn: Model Pendapatan Hilang dari Pembatalan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung dampak churn pada pendapatan, pelanggan, dan skenario pertumbuhan bisnis.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "conversion-rate-vs-click-through-rate-what-each-metric-shows": { title: "Conversion Rate vs Click-Through Rate: Apa yang Ditunjukkan Tiap Metrik", excerpt: "Bandingkan conversion rate dan CTR agar evaluasi kampanye tidak mencampur klik dengan hasil akhir.", seoTitle: "Conversion Rate vs CTR - Perbedaan Metrik", seoDescription: "Pahami perbedaan conversion rate dan click-through rate serta kapan masing-masing dipakai.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Bandingkan conversion rate dan CTR agar evaluasi kampanye tidak mencampur klik dengan hasil akhir.",
            "Bagian ini melengkapi panduan Conversion Rate vs Click-Through Rate: Apa yang Ditunjukkan Tiap Metrik agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pahami perbedaan conversion rate dan click-through rate serta kapan masing-masing dipakai.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "customer-ltv-calculator-estimate-lifetime-value": { title: "Kalkulator Customer LTV: Estimasi Lifetime Value", excerpt: "Perkirakan LTV pelanggan dari pendapatan, margin, frekuensi pembelian, dan retensi.", seoTitle: "Kalkulator Customer LTV - Estimasi Lifetime Value", seoDescription: "Hitung customer lifetime value untuk memahami nilai pelanggan dan batas biaya akuisisi.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan LTV pelanggan dari pendapatan, margin, frekuensi pembelian, dan retensi.",
            "Bagian ini melengkapi panduan Kalkulator Customer LTV: Estimasi Lifetime Value agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung customer lifetime value untuk memahami nilai pelanggan dan batas biaya akuisisi.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "cac-payback-calculator-how-long-until-acquisition-pays-back": { title: "Kalkulator CAC Payback: Berapa Lama Sampai Akuisisi Balik Modal?", excerpt: "Hitung waktu yang dibutuhkan margin pelanggan untuk menutup biaya akuisisi.", seoTitle: "Kalkulator CAC Payback - Waktu Balik Modal Akuisisi", seoDescription: "Pelajari cara menghitung CAC payback period dari CAC, margin, dan pendapatan pelanggan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung waktu yang dibutuhkan margin pelanggan untuk menutup biaya akuisisi.",
            "Bagian ini melengkapi panduan Kalkulator CAC Payback: Berapa Lama Sampai Akuisisi Balik Modal? agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung CAC payback period dari CAC, margin, dan pendapatan pelanggan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "cash-conversion-cycle-calculator-inventory-receivables-payables": { title: "Kalkulator Cash Conversion Cycle: Persediaan, Piutang, dan Utang", excerpt: "Ukur berapa lama kas terikat dalam operasi melalui persediaan, piutang, dan utang dagang.", seoTitle: "Kalkulator Cash Conversion Cycle - Inventory dan Piutang", seoDescription: "Hitung cash conversion cycle dari DIO, DSO, dan DPO untuk membaca efisiensi kas.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Ukur berapa lama kas terikat dalam operasi melalui persediaan, piutang, dan utang dagang.",
            "Bagian ini melengkapi panduan Kalkulator Cash Conversion Cycle: Persediaan, Piutang, dan Utang agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung cash conversion cycle dari DIO, DSO, dan DPO untuk membaca efisiensi kas.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-customer-support-cost-calculator-tickets-tokens-and-savings": { title: "Kalkulator Biaya Support Pelanggan AI: Tiket, Token, dan Penghematan", excerpt: "Estimasi biaya support AI dari tiket, token, eskalasi, waktu agen, dan potensi penghematan.", seoTitle: "Kalkulator Biaya Support AI - Tiket dan Token", seoDescription: "Hitung biaya dan penghematan dukungan pelanggan AI berdasarkan volume tiket dan penggunaan model.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Estimasi biaya support AI dari tiket, token, eskalasi, waktu agen, dan potensi penghematan.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Support Pelanggan AI: Tiket, Token, dan Penghematan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya dan penghematan dukungan pelanggan AI berdasarkan volume tiket dan penggunaan model.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-sales-email-cost-calculator-estimate-outreach-generation-costs": { title: "Kalkulator Biaya Email Penjualan AI: Estimasi Biaya Outreach", excerpt: "Perkirakan biaya membuat email penjualan dengan AI dari token, personalisasi, review, dan volume pengiriman.", seoTitle: "Kalkulator Biaya Email Penjualan AI - Outreach", seoDescription: "Hitung biaya generasi email sales AI berdasarkan token, model, review, dan volume kampanye.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan biaya membuat email penjualan dengan AI dari token, personalisasi, review, dan volume pengiriman.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Email Penjualan AI: Estimasi Biaya Outreach agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya generasi email sales AI berdasarkan token, model, review, dan volume kampanye.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-meeting-notes-cost-calculator-transcription-and-summary-spend": { title: "Kalkulator Biaya Catatan Rapat AI: Transkripsi dan Ringkasan", excerpt: "Estimasi biaya catatan rapat AI dari durasi audio, transkripsi, ringkasan, token, dan review.", seoTitle: "Kalkulator Biaya Catatan Rapat AI - Transkripsi dan Ringkasan", seoDescription: "Hitung biaya workflow catatan rapat AI dari audio, token, model, dan volume rapat.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Estimasi biaya catatan rapat AI dari durasi audio, transkripsi, ringkasan, token, dan review.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Catatan Rapat AI: Transkripsi dan Ringkasan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya workflow catatan rapat AI dari audio, token, model, dan volume rapat.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "mifflin-st-jeor-vs-harris-benedict-bmr-formulas-compared": { title: "Mifflin-St Jeor vs Harris-Benedict: Perbandingan Rumus BMR", excerpt: "Bandingkan dua rumus BMR populer dan pahami mengapa hasil estimasi kebutuhan energi dapat berbeda.", seoTitle: "Mifflin-St Jeor vs Harris-Benedict - Rumus BMR", seoDescription: "Pelajari perbedaan rumus BMR Mifflin-St Jeor dan Harris-Benedict serta batasannya.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Bandingkan dua rumus BMR populer dan pahami mengapa hasil estimasi kebutuhan energi dapat berbeda.",
            "Bagian ini melengkapi panduan Mifflin-St Jeor vs Harris-Benedict: Perbandingan Rumus BMR agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari perbedaan rumus BMR Mifflin-St Jeor dan Harris-Benedict serta batasannya.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "activity-level-calculator-choose-the-right-tdee-multiplier": { title: "Kalkulator Tingkat Aktivitas: Pilih Pengali TDEE yang Tepat", excerpt: "Pahami kategori aktivitas dan cara memilih pengali TDEE yang masuk akal untuk estimasi kalori.", seoTitle: "Kalkulator Tingkat Aktivitas - Pengali TDEE", seoDescription: "Pilih pengali aktivitas untuk menghitung TDEE dari BMR dan rutinitas harian.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Pahami kategori aktivitas dan cara memilih pengali TDEE yang masuk akal untuk estimasi kalori.",
            "Bagian ini melengkapi panduan Kalkulator Tingkat Aktivitas: Pilih Pengali TDEE yang Tepat agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pilih pengali aktivitas untuk menghitung TDEE dari BMR dan rutinitas harian.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "pace-calculator-running-speed-distance-and-time": { title: "Kalkulator Pace: Kecepatan Lari, Jarak, dan Waktu", excerpt: "Hitung pace lari dari jarak dan waktu, atau estimasi waktu target dari pace yang diinginkan.", seoTitle: "Kalkulator Pace - Kecepatan, Jarak, dan Waktu", seoDescription: "Gunakan kalkulator pace untuk lari, latihan, dan perencanaan target jarak.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung pace lari dari jarak dan waktu, atau estimasi waktu target dari pace yang diinginkan.",
            "Bagian ini melengkapi panduan Kalkulator Pace: Kecepatan Lari, Jarak, dan Waktu agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Gunakan kalkulator pace untuk lari, latihan, dan perencanaan target jarak.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "cpc-to-cpa-calculator-connect-click-cost-to-acquisition-cost": { title: "Kalkulator CPC ke CPA: Hubungkan Biaya Klik ke Biaya Akuisisi", excerpt: "Ubah CPC dan conversion rate menjadi CPA agar biaya iklan lebih mudah dievaluasi.", seoTitle: "Kalkulator CPC ke CPA - Biaya Klik ke Akuisisi", seoDescription: "Hitung CPA dari CPC dan conversion rate untuk memahami efisiensi kampanye berbayar.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Ubah CPC dan conversion rate menjadi CPA agar biaya iklan lebih mudah dievaluasi.",
            "Bagian ini melengkapi panduan Kalkulator CPC ke CPA: Hubungkan Biaya Klik ke Biaya Akuisisi agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung CPA dari CPC dan conversion rate untuk memahami efisiensi kampanye berbayar.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "email-conversion-rate-calculator-campaign-metrics-explained": { title: "Kalkulator Conversion Rate Email: Penjelasan Metrik Kampanye", excerpt: "Hitung conversion rate email dari penerima, klik, dan aksi akhir untuk mengevaluasi kampanye.", seoTitle: "Kalkulator Conversion Rate Email - Metrik Kampanye", seoDescription: "Pelajari cara menghitung konversi email dan membedakannya dari open rate atau CTR.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung conversion rate email dari penerima, klik, dan aksi akhir untuk mengevaluasi kampanye.",
            "Bagian ini melengkapi panduan Kalkulator Conversion Rate Email: Penjelasan Metrik Kampanye agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung konversi email dan membedakannya dari open rate atau CTR.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "form-completion-rate-calculator-find-signup-friction": { title: "Kalkulator Completion Rate Form: Temukan Hambatan Signup", excerpt: "Ukur berapa banyak pengguna menyelesaikan form dan temukan titik gesekan pada proses pendaftaran.", seoTitle: "Kalkulator Completion Rate Form - Hambatan Signup", seoDescription: "Hitung tingkat penyelesaian form untuk menemukan drop-off dan meningkatkan konversi signup.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Ukur berapa banyak pengguna menyelesaikan form dan temukan titik gesekan pada proses pendaftaran.",
            "Bagian ini melengkapi panduan Kalkulator Completion Rate Form: Temukan Hambatan Signup agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung tingkat penyelesaian form untuk menemukan drop-off dan meningkatkan konversi signup.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "debt-to-income-ratio-calculator-borrowing-capacity-guide": { title: "Kalkulator Debt-to-Income Ratio: Panduan Kapasitas Pinjaman", excerpt: "Hitung rasio utang terhadap pendapatan untuk memahami kapasitas meminjam dan tekanan pembayaran bulanan.", seoTitle: "Kalkulator Debt-to-Income Ratio - Kapasitas Pinjaman", seoDescription: "Pelajari cara menghitung DTI dan mengapa pemberi pinjaman memperhatikannya.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung rasio utang terhadap pendapatan untuk memahami kapasitas meminjam dan tekanan pembayaran bulanan.",
            "Bagian ini melengkapi panduan Kalkulator Debt-to-Income Ratio: Panduan Kapasitas Pinjaman agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung DTI dan mengapa pemberi pinjaman memperhatikannya.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "savings-goal-calculator-how-much-to-save-each-month": { title: "Kalkulator Target Tabungan: Berapa yang Harus Ditabung Tiap Bulan", excerpt: "Hitung tabungan bulanan yang dibutuhkan untuk mencapai target dana pada tanggal tertentu.", seoTitle: "Kalkulator Target Tabungan - Tabungan Bulanan", seoDescription: "Rencanakan target tabungan dari jumlah tujuan, saldo awal, waktu, dan kontribusi bulanan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung tabungan bulanan yang dibutuhkan untuk mencapai target dana pada tanggal tertentu.",
            "Bagian ini melengkapi panduan Kalkulator Target Tabungan: Berapa yang Harus Ditabung Tiap Bulan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Rencanakan target tabungan dari jumlah tujuan, saldo awal, waktu, dan kontribusi bulanan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "retirement-withdrawal-calculator-safe-spending-estimates": { title: "Kalkulator Penarikan Pensiun: Estimasi Pengeluaran Aman", excerpt: "Perkirakan penarikan pensiun dari saldo, horizon waktu, return, inflasi, dan tingkat pengeluaran.", seoTitle: "Kalkulator Penarikan Pensiun - Estimasi Pengeluaran Aman", seoDescription: "Pelajari cara memperkirakan penarikan pensiun dan risiko asumsi jangka panjang.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan penarikan pensiun dari saldo, horizon waktu, return, inflasi, dan tingkat pengeluaran.",
            "Bagian ini melengkapi panduan Kalkulator Penarikan Pensiun: Estimasi Pengeluaran Aman agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara memperkirakan penarikan pensiun dan risiko asumsi jangka panjang.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "profit-margin-calculator-gross-vs-net-margin-explained": { title: "Kalkulator Margin Laba: Margin Kotor vs Bersih", excerpt: "Hitung dan bandingkan margin kotor serta margin bersih untuk memahami profitabilitas bisnis.", seoTitle: "Kalkulator Margin Laba - Gross vs Net Margin", seoDescription: "Pelajari perbedaan margin kotor dan bersih serta cara menghitungnya dari pendapatan dan biaya.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung dan bandingkan margin kotor serta margin bersih untuk memahami profitabilitas bisnis.",
            "Bagian ini melengkapi panduan Kalkulator Margin Laba: Margin Kotor vs Bersih agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari perbedaan margin kotor dan bersih serta cara menghitungnya dari pendapatan dan biaya.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-batch-processing-cost-calculator-reduce-unit-cost-with-queues": { title: "Kalkulator Biaya Batch AI: Kurangi Biaya Unit dengan Antrean", excerpt: "Estimasi bagaimana batch processing, antrean, dan diskon dapat menurunkan biaya per output AI.", seoTitle: "Kalkulator Biaya Batch AI - Kurangi Biaya Unit", seoDescription: "Hitung biaya batch AI dan bandingkan dengan pemrosesan real-time untuk optimasi biaya.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Estimasi bagaimana batch processing, antrean, dan diskon dapat menurunkan biaya per output AI.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Batch AI: Kurangi Biaya Unit dengan Antrean agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya batch AI dan bandingkan dengan pemrosesan real-time untuk optimasi biaya.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "cached-token-pricing-calculator-when-prompt-caching-changes-cost": { title: "Kalkulator Harga Token Cached: Saat Prompt Caching Mengubah Biaya", excerpt: "Perkirakan dampak prompt caching pada biaya token ketika konteks yang sama dipakai berulang.", seoTitle: "Kalkulator Harga Token Cached - Prompt Caching", seoDescription: "Hitung kapan cached token dapat mengurangi biaya LLM untuk prompt dan konteks berulang.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan dampak prompt caching pada biaya token ketika konteks yang sama dipakai berulang.",
            "Bagian ini melengkapi panduan Kalkulator Harga Token Cached: Saat Prompt Caching Mengubah Biaya agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung kapan cached token dapat mengurangi biaya LLM untuk prompt dan konteks berulang.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "multimodal-ai-cost-calculator-text-image-and-audio-usage": { title: "Kalkulator Biaya AI Multimodal: Teks, Gambar, dan Audio", excerpt: "Gabungkan biaya teks, gambar, audio, dan output untuk memperkirakan beban kerja AI multimodal.", seoTitle: "Kalkulator Biaya AI Multimodal - Teks, Gambar, Audio", seoDescription: "Hitung biaya AI multimodal dari token teks, gambar, audio, durasi, dan tarif model.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Gabungkan biaya teks, gambar, audio, dan output untuk memperkirakan beban kerja AI multimodal.",
            "Bagian ini melengkapi panduan Kalkulator Biaya AI Multimodal: Teks, Gambar, dan Audio agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya AI multimodal dari token teks, gambar, audio, durasi, dan tarif model.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-app-margin-calculator-turn-model-costs-into-gross-margin": { title: "Kalkulator Margin Aplikasi AI: Ubah Biaya Model Menjadi Margin Kotor", excerpt: "Hitung margin kotor produk AI dari pendapatan, biaya model, infrastruktur, dan support.", seoTitle: "Kalkulator Margin Aplikasi AI - Biaya Model ke Margin", seoDescription: "Pelajari cara menghitung margin aplikasi AI dari biaya penggunaan dan harga pelanggan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung margin kotor produk AI dari pendapatan, biaya model, infrastruktur, dan support.",
            "Bagian ini melengkapi panduan Kalkulator Margin Aplikasi AI: Ubah Biaya Model Menjadi Margin Kotor agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung margin aplikasi AI dari biaya penggunaan dan harga pelanggan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "calorie-deficit-calculator-estimate-weight-change-carefully": { title: "Kalkulator Defisit Kalori: Estimasi Perubahan Berat dengan Hati-hati", excerpt: "Perkirakan defisit kalori dan perubahan berat dengan memahami variasi metabolisme serta batasan model.", seoTitle: "Kalkulator Defisit Kalori - Estimasi Perubahan Berat", seoDescription: "Hitung defisit kalori untuk perencanaan berat badan sambil memahami caveat kesehatan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan defisit kalori dan perubahan berat dengan memahami variasi metabolisme serta batasan model.",
            "Bagian ini melengkapi panduan Kalkulator Defisit Kalori: Estimasi Perubahan Berat dengan Hati-hati agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung defisit kalori untuk perencanaan berat badan sambil memahami caveat kesehatan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "hydration-calculator-water-needs-by-weight-and-activity": { title: "Kalkulator Hidrasi: Kebutuhan Air Berdasarkan Berat dan Aktivitas", excerpt: "Perkirakan kebutuhan air dari berat badan, aktivitas, dan kondisi latihan untuk perencanaan hidrasi.", seoTitle: "Kalkulator Hidrasi - Air Berdasarkan Berat dan Aktivitas", seoDescription: "Hitung kebutuhan air harian dengan mempertimbangkan berat badan dan aktivitas.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan kebutuhan air dari berat badan, aktivitas, dan kondisi latihan untuk perencanaan hidrasi.",
            "Bagian ini melengkapi panduan Kalkulator Hidrasi: Kebutuhan Air Berdasarkan Berat dan Aktivitas agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung kebutuhan air harian dengan mempertimbangkan berat badan dan aktivitas.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "body-fat-percentage-chart-men-women-and-limitations": { title: "Tabel Persentase Lemak Tubuh: Pria, Wanita, dan Batasan", excerpt: "Pahami kategori persentase lemak tubuh, perbedaan pria dan wanita, serta keterbatasan estimasi.", seoTitle: "Tabel Persentase Lemak Tubuh - Pria, Wanita, Batasan", seoDescription: "Pelajari cara membaca persentase lemak tubuh dan mengapa metode pengukuran memengaruhi hasil.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Pahami kategori persentase lemak tubuh, perbedaan pria dan wanita, serta keterbatasan estimasi.",
            "Bagian ini melengkapi panduan Tabel Persentase Lemak Tubuh: Pria, Wanita, dan Batasan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara membaca persentase lemak tubuh dan mengapa metode pengukuran memengaruhi hasil.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "calories-burned-walking-calculator-distance-pace-and-weight": { title: "Kalkulator Kalori Terbakar Saat Berjalan: Jarak, Pace, dan Berat", excerpt: "Estimasi kalori terbakar dari berjalan berdasarkan jarak, pace, berat badan, dan durasi.", seoTitle: "Kalkulator Kalori Berjalan - Jarak, Pace, Berat", seoDescription: "Hitung kalori terbakar saat berjalan untuk perencanaan aktivitas dan energi.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Estimasi kalori terbakar dari berjalan berdasarkan jarak, pace, berat badan, dan durasi.",
            "Bagian ini melengkapi panduan Kalkulator Kalori Terbakar Saat Berjalan: Jarak, Pace, dan Berat agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung kalori terbakar saat berjalan untuk perencanaan aktivitas dan energi.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "checkout-conversion-rate-calculator-measure-purchase-drop-off": { title: "Kalkulator Conversion Rate Checkout: Ukur Drop-off Pembelian", excerpt: "Ukur konversi checkout untuk menemukan kehilangan pembeli dari cart sampai pembayaran selesai.", seoTitle: "Kalkulator Conversion Rate Checkout - Drop-off Pembelian", seoDescription: "Hitung tingkat konversi checkout dan identifikasi hambatan pembelian.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Ukur konversi checkout untuk menemukan kehilangan pembeli dari cart sampai pembayaran selesai.",
            "Bagian ini melengkapi panduan Kalkulator Conversion Rate Checkout: Ukur Drop-off Pembelian agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung tingkat konversi checkout dan identifikasi hambatan pembelian.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "trial-to-paid-conversion-calculator-saas-funnel-guide": { title: "Kalkulator Trial-to-Paid Conversion: Panduan Funnel SaaS", excerpt: "Hitung konversi trial ke pelanggan berbayar untuk membaca efektivitas onboarding dan monetisasi SaaS.", seoTitle: "Kalkulator Trial-to-Paid Conversion - Funnel SaaS", seoDescription: "Pelajari cara menghitung konversi trial ke paid dan dampaknya pada pertumbuhan SaaS.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung konversi trial ke pelanggan berbayar untuk membaca efektivitas onboarding dan monetisasi SaaS.",
            "Bagian ini melengkapi panduan Kalkulator Trial-to-Paid Conversion: Panduan Funnel SaaS agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung konversi trial ke paid dan dampaknya pada pertumbuhan SaaS.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "activation-rate-calculator-measure-first-value-moments": { title: "Kalkulator Activation Rate: Ukur Momen Nilai Pertama", excerpt: "Ukur berapa banyak pengguna mencapai tindakan aktivasi yang menunjukkan nilai awal produk.", seoTitle: "Kalkulator Activation Rate - Momen Nilai Pertama", seoDescription: "Hitung activation rate untuk mengevaluasi onboarding dan adopsi awal produk.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Ukur berapa banyak pengguna mencapai tindakan aktivasi yang menunjukkan nilai awal produk.",
            "Bagian ini melengkapi panduan Kalkulator Activation Rate: Ukur Momen Nilai Pertama agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung activation rate untuk mengevaluasi onboarding dan adopsi awal produk.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "referral-conversion-rate-calculator-track-word-of-mouth-growth": { title: "Kalkulator Referral Conversion Rate: Lacak Pertumbuhan Word-of-Mouth", excerpt: "Hitung konversi referral dari undangan, klik, signup, dan pelanggan untuk mengevaluasi program rujukan.", seoTitle: "Kalkulator Referral Conversion Rate - Pertumbuhan Rujukan", seoDescription: "Ukur conversion rate referral dan dampaknya pada pertumbuhan organik.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung konversi referral dari undangan, klik, signup, dan pelanggan untuk mengevaluasi program rujukan.",
            "Bagian ini melengkapi panduan Kalkulator Referral Conversion Rate: Lacak Pertumbuhan Word-of-Mouth agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Ukur conversion rate referral dan dampaknya pada pertumbuhan organik.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "annual-percentage-yield-calculator-apy-vs-apr-explained": { title: "APY vs APR Dijelaskan", excerpt: "Pahami perbedaan APY dan APR, terutama saat bunga majemuk membuat hasil tahunan berbeda.", seoTitle: "Kalkulator APY - APY vs APR Dijelaskan", seoDescription: "Pelajari perbedaan annual percentage yield dan APR serta cara membandingkan tingkat bunga.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Pahami perbedaan APY dan APR, terutama saat bunga majemuk membuat hasil tahunan berbeda.",
            "Bagian ini melengkapi panduan APY vs APR Dijelaskan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari perbedaan annual percentage yield dan APR serta cara membandingkan tingkat bunga.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "loan-amortization-calculator-principal-interest-schedule": { title: "Amortisasi Pinjaman Dijelaskan", excerpt: "Pelajari bagaimana jadwal amortisasi membagi pembayaran pinjaman antara bunga dan pokok dari waktu ke waktu.", seoTitle: "Kalkulator Amortisasi Pinjaman - Pokok dan Bunga", seoDescription: "Pahami jadwal amortisasi, pembayaran pokok, bunga, dan sisa saldo pinjaman.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Pelajari bagaimana jadwal amortisasi membagi pembayaran pinjaman antara bunga dan pokok dari waktu ke waktu.",
            "Bagian ini melengkapi panduan Amortisasi Pinjaman Dijelaskan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pahami jadwal amortisasi, pembayaran pokok, bunga, dan sisa saldo pinjaman.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "car-loan-interest-calculator-estimate-total-cost": { title: "Bunga Kredit Mobil dan Total Biaya", excerpt: "Perkirakan total biaya kredit mobil dari jumlah pembiayaan, suku bunga, jangka waktu, dan uang muka.", seoTitle: "Kalkulator Bunga Kredit Mobil - Estimasi Total Biaya", seoDescription: "Hitung bunga dan total biaya kredit mobil untuk membandingkan penawaran pembiayaan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan total biaya kredit mobil dari jumlah pembiayaan, suku bunga, jangka waktu, dan uang muka.",
            "Bagian ini melengkapi panduan Bunga Kredit Mobil dan Total Biaya agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung bunga dan total biaya kredit mobil untuk membandingkan penawaran pembiayaan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "salary-to-hourly-calculator-convert-pay-rates": { title: "Konversi Gaji ke Upah Per Jam", excerpt: "Ubah gaji tahunan, bulanan, atau mingguan menjadi tarif per jam berdasarkan jam kerja.", seoTitle: "Kalkulator Gaji ke Per Jam - Konversi Tarif Bayar", seoDescription: "Konversi gaji menjadi upah per jam dan bandingkan periode pembayaran.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Ubah gaji tahunan, bulanan, atau mingguan menjadi tarif per jam berdasarkan jam kerja.",
            "Bagian ini melengkapi panduan Konversi Gaji ke Upah Per Jam agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Konversi gaji menjadi upah per jam dan bandingkan periode pembayaran.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "investment-return-calculator-annualized-vs-total-return": { title: "Kalkulator Return Investasi: Annualized vs Total Return", excerpt: "Bandingkan total return dan annualized return agar performa investasi dengan durasi berbeda dapat dibandingkan.", seoTitle: "Kalkulator Return Investasi - Annualized vs Total", seoDescription: "Pelajari perbedaan total return dan return tahunan untuk evaluasi investasi.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Bandingkan total return dan annualized return agar performa investasi dengan durasi berbeda dapat dibandingkan.",
            "Bagian ini melengkapi panduan Kalkulator Return Investasi: Annualized vs Total Return agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari perbedaan total return dan return tahunan untuk evaluasi investasi.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "tax-rate-calculator-effective-vs-marginal-tax-rate": { title: "Kalkulator Tarif Pajak: Efektif vs Marginal", excerpt: "Pahami perbedaan tarif pajak efektif dan marginal saat memperkirakan pajak penghasilan.", seoTitle: "Kalkulator Tarif Pajak - Efektif vs Marginal", seoDescription: "Hitung dan bandingkan tarif pajak efektif serta marginal untuk perencanaan pendapatan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Pahami perbedaan tarif pajak efektif dan marginal saat memperkirakan pajak penghasilan.",
            "Bagian ini melengkapi panduan Kalkulator Tarif Pajak: Efektif vs Marginal agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung dan bandingkan tarif pajak efektif serta marginal untuk perencanaan pendapatan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "revenue-growth-rate-calculator-monthly-and-annual-examples": { title: "Kalkulator Tingkat Pertumbuhan Pendapatan: Contoh Bulanan dan Tahunan", excerpt: "Hitung pertumbuhan pendapatan dari periode ke periode untuk membaca momentum bisnis.", seoTitle: "Kalkulator Pertumbuhan Pendapatan - Bulanan dan Tahunan", seoDescription: "Pelajari cara menghitung revenue growth rate dengan contoh bulanan dan tahunan.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung pertumbuhan pendapatan dari periode ke periode untuk membaca momentum bisnis.",
            "Bagian ini melengkapi panduan Kalkulator Tingkat Pertumbuhan Pendapatan: Contoh Bulanan dan Tahunan agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung revenue growth rate dengan contoh bulanan dan tahunan.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "break-even-analysis-calculator-fixed-variable-costs-guide": { title: "Kalkulator Analisis Titik Impas: Panduan Biaya Tetap dan Variabel", excerpt: "Gunakan analisis titik impas untuk memahami hubungan harga, biaya, volume, dan laba.", seoTitle: "Kalkulator Analisis Titik Impas - Biaya Tetap dan Variabel", seoDescription: "Hitung titik impas dan pahami peran biaya tetap, biaya variabel, serta margin kontribusi.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Gunakan analisis titik impas untuk memahami hubungan harga, biaya, volume, dan laba.",
            "Bagian ini melengkapi panduan Kalkulator Analisis Titik Impas: Panduan Biaya Tetap dan Variabel agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung titik impas dan pahami peran biaya tetap, biaya variabel, serta margin kontribusi.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "fine-tuning-cost-calculator-training-files-epochs-and-tokens": { title: "Kalkulator Biaya Fine-Tuning: File Training, Epoch, dan Token", excerpt: "Perkirakan biaya fine-tuning dari ukuran dataset, token, epoch, pelatihan, dan evaluasi.", seoTitle: "Kalkulator Biaya Fine-Tuning - Dataset, Epoch, Token", seoDescription: "Hitung biaya fine-tuning model dari file training, jumlah epoch, token, dan tarif model.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan biaya fine-tuning dari ukuran dataset, token, epoch, pelatihan, dan evaluasi.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Fine-Tuning: File Training, Epoch, dan Token agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya fine-tuning model dari file training, jumlah epoch, token, dan tarif model.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "ai-evaluation-cost-calculator-test-sets-judges-and-runs": { title: "Kalkulator Biaya Evaluasi AI: Test Set, Judge, dan Run", excerpt: "Estimasi biaya evaluasi AI dari jumlah test case, model judge, run berulang, dan analisis hasil.", seoTitle: "Kalkulator Biaya Evaluasi AI - Test Set dan Judge", seoDescription: "Hitung biaya evaluasi LLM dari test set, model penilai, jumlah run, dan token.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Estimasi biaya evaluasi AI dari jumlah test case, model judge, run berulang, dan analisis hasil.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Evaluasi AI: Test Set, Judge, dan Run agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya evaluasi LLM dari test set, model penilai, jumlah run, dan token.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "llm-routing-cost-calculator-balance-quality-latency-and-price": { title: "Kalkulator Biaya Routing LLM: Seimbangkan Kualitas, Latensi, dan Harga", excerpt: "Modelkan routing antar LLM untuk menyeimbangkan biaya, kualitas respons, dan waktu jawab.", seoTitle: "Kalkulator Biaya Routing LLM - Kualitas, Latensi, Harga", seoDescription: "Hitung biaya strategi routing LLM berdasarkan model, volume, fallback, dan target kualitas.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Modelkan routing antar LLM untuk menyeimbangkan biaya, kualitas respons, dan waktu jawab.",
            "Bagian ini melengkapi panduan Kalkulator Biaya Routing LLM: Seimbangkan Kualitas, Latensi, dan Harga agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung biaya strategi routing LLM berdasarkan model, volume, fallback, dan target kualitas.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "gpu-vs-api-cost-calculator-when-hosting-might-matter": { title: "Kalkulator Biaya GPU vs API: Kapan Hosting Mungkin Penting", excerpt: "Bandingkan biaya memakai API model dengan menjalankan GPU sendiri berdasarkan volume dan utilisasi.", seoTitle: "Kalkulator GPU vs API - Kapan Hosting Penting", seoDescription: "Pelajari kapan biaya GPU self-hosted dapat dibandingkan dengan API model berbayar.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Bandingkan biaya memakai API model dengan menjalankan GPU sendiri berdasarkan volume dan utilisasi.",
            "Bagian ini melengkapi panduan Kalkulator Biaya GPU vs API: Kapan Hosting Mungkin Penting agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari kapan biaya GPU self-hosted dapat dibandingkan dengan API model berbayar.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "healthy-weight-range-calculator-bmi-and-context": { title: "Kalkulator Kisaran Berat Sehat: BMI dan Konteks", excerpt: "Perkirakan kisaran berat sehat berbasis BMI dan pahami mengapa konteks individu tetap penting.", seoTitle: "Kalkulator Kisaran Berat Sehat - BMI dan Konteks", seoDescription: "Hitung kisaran berat berbasis BMI sambil memahami batasan kesehatan dan komposisi tubuh.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Perkirakan kisaran berat sehat berbasis BMI dan pahami mengapa konteks individu tetap penting.",
            "Bagian ini melengkapi panduan Kalkulator Kisaran Berat Sehat: BMI dan Konteks agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Hitung kisaran berat berbasis BMI sambil memahami batasan kesehatan dan komposisi tubuh.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "daily-calorie-needs-for-women-and-men-calculator-guide": { title: "Kebutuhan Kalori Harian untuk Wanita dan Pria: Panduan Kalkulator", excerpt: "Pahami bagaimana ukuran tubuh, usia, jenis kelamin, dan aktivitas memengaruhi estimasi kebutuhan kalori.", seoTitle: "Kebutuhan Kalori Harian Wanita dan Pria - Panduan", seoDescription: "Pelajari cara kalkulator memperkirakan kebutuhan kalori harian untuk wanita dan pria.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Pahami bagaimana ukuran tubuh, usia, jenis kelamin, dan aktivitas memengaruhi estimasi kebutuhan kalori.",
            "Bagian ini melengkapi panduan Kebutuhan Kalori Harian untuk Wanita dan Pria: Panduan Kalkulator agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara kalkulator memperkirakan kebutuhan kalori harian untuk wanita dan pria.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "water-intake-for-exercise-calculator-hydration-planning": { title: "Kalkulator Asupan Air untuk Olahraga: Perencanaan Hidrasi", excerpt: "Rencanakan kebutuhan cairan untuk olahraga berdasarkan durasi, intensitas, berat badan, dan keringat.", seoTitle: "Kalkulator Asupan Air Olahraga - Perencanaan Hidrasi", seoDescription: "Perkirakan kebutuhan air untuk latihan dan pahami faktor yang memengaruhi hidrasi.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Rencanakan kebutuhan cairan untuk olahraga berdasarkan durasi, intensitas, berat badan, dan keringat.",
            "Bagian ini melengkapi panduan Kalkulator Asupan Air untuk Olahraga: Perencanaan Hidrasi agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Perkirakan kebutuhan air untuk latihan dan pahami faktor yang memengaruhi hidrasi.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
    "weight-loss-percentage-calculator-track-change-safely": { title: "Kalkulator Persentase Penurunan Berat: Lacak Perubahan dengan Aman", excerpt: "Hitung persentase penurunan berat dan gunakan hasil sebagai sinyal tren, bukan diagnosis kesehatan.", seoTitle: "Kalkulator Persentase Penurunan Berat - Lacak Aman", seoDescription: "Pelajari cara menghitung persentase penurunan berat badan dan menafsirkan perubahan dengan hati-hati.",
      sections: [
        {
          heading: "Ikhtisar",
          body: [
            "Hitung persentase penurunan berat dan gunakan hasil sebagai sinyal tren, bukan diagnosis kesehatan.",
            "Bagian ini melengkapi panduan Kalkulator Persentase Penurunan Berat: Lacak Perubahan dengan Aman agar pembaca dapat memahami input, rumus, dan konteks hasil kalkulator secara praktis.",
          ],
        },
        {
          heading: "Cara Membaca Hasil",
          body: [
            "Pelajari cara menghitung persentase penurunan berat badan dan menafsirkan perubahan dengan hati-hati.",
            "Pastikan input memakai satuan, periode, dan definisi metrik yang konsisten. Perubahan kecil pada asumsi dapat mengubah hasil, terutama untuk biaya, rasio, bunga, token, kalori, atau konversi.",
          ],
        },
        {
          heading: "Caveat Penting",
          body: [
            "Kalkulator membantu perencanaan dan edukasi, tetapi tidak menggantikan nasihat profesional, penawaran resmi, diagnosis medis, atau keputusan bisnis final.",
            "Untuk penggunaan produksi, anggaran besar, pinjaman, pajak, kesehatan, atau harga AI yang sering berubah, verifikasi angka dengan sumber resmi dan data operasional terbaru.",
          ],
        },
      ], },
  } satisfies Record<BlogPostSlug, BlogPostTranslation>,
} as const;
