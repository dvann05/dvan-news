const newsData = [
  {
    id: 1,
    title: "Perkembangan Teknologi Mengubah Cara Kita Menjalani Kehidupan",
    category: "Teknologi",
    author: "Dvan News",
    date: "14 Agustus 2026",
    time: "10 menit lalu",
    views: 125000,
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=85",
    excerpt:
      "Simak informasi terbaru mengenai perkembangan teknologi dan berbagai perubahan yang sedang terjadi di masyarakat.",
    content: `
      <p>
        Perkembangan teknologi terus membawa perubahan besar
        dalam kehidupan manusia. Berbagai inovasi baru hadir
        hampir setiap hari dan memberikan cara baru dalam
        bekerja, belajar, berkomunikasi, dan mendapatkan informasi.
      </p>

      <p>
        Transformasi digital juga membuat masyarakat semakin
        mudah mendapatkan akses terhadap berbagai layanan.
        Namun, perkembangan tersebut juga menghadirkan tantangan
        baru yang perlu diperhatikan.
      </p>

      <p>
        Dengan perkembangan yang semakin cepat, kemampuan untuk
        beradaptasi menjadi salah satu hal penting dalam menghadapi
        perubahan teknologi di masa depan.
      </p>
    `
  },

  {
    id: 2,
    title: "Tren Bisnis Digital yang Semakin Berkembang",
    category: "Bisnis",
    author: "Dvan News",
    date: "14 Agustus 2026",
    time: "25 menit lalu",
    views: 98000,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "Perubahan teknologi membuka peluang baru bagi dunia usaha.",
    content: `
      <p>
        Bisnis digital terus berkembang seiring meningkatnya
        penggunaan internet dan perangkat pintar.
      </p>

      <p>
        Pelaku usaha kini memiliki banyak pilihan untuk
        memasarkan produk, membangun komunitas, dan menjangkau
        pelanggan dari berbagai wilayah.
      </p>
    `
  },

  {
    id: 3,
    title: "Inovasi Baru Membawa Perubahan Besar",
    category: "Teknologi",
    author: "Dvan News",
    date: "14 Agustus 2026",
    time: "1 jam lalu",
    views: 87000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "Berbagai inovasi terbaru terus bermunculan dan mengubah kehidupan sehari-hari.",
    content: `
      <p>
        Inovasi teknologi semakin cepat berkembang.
        Perusahaan dan pengembang terus menghadirkan
        berbagai solusi baru.
      </p>

      <p>
        Kehadiran teknologi baru memberikan peluang sekaligus
        tantangan bagi masyarakat.
      </p>
    `
  },

  {
    id: 4,
    title: "Informasi Nasional Terbaru Hari Ini",
    category: "Nasional",
    author: "Dvan News",
    date: "14 Agustus 2026",
    time: "35 menit lalu",
    views: 76000,
    image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "Berita dan informasi nasional terbaru yang dirangkum secara singkat.",
    content: `
      <p>
        Berbagai informasi nasional menjadi perhatian masyarakat.
        Berikut rangkuman perkembangan terbaru yang sedang menjadi
        pembahasan.
      </p>
    `
  },

  {
    id: 5,
    title: "Teknologi Modern Terus Berkembang Pesat",
    category: "Teknologi",
    author: "Dvan News",
    date: "14 Agustus 2026",
    time: "1 jam lalu",
    views: 71000,
    image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "Berbagai teknologi baru menghadirkan peluang sekaligus tantangan.",
    content: `
      <p>
        Perkembangan teknologi modern semakin cepat.
        Berbagai perangkat dan layanan digital terus mengalami
        pembaruan.
      </p>
    `
  },

  {
    id: 6,
    title: "Peluang Baru di Era Ekonomi Digital",
    category: "Bisnis",
    author: "Dvan News",
    date: "14 Agustus 2026",
    time: "2 jam lalu",
    views: 65000,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "Perubahan digital membuka berbagai peluang baru bagi pelaku usaha.",
    content: `
      <p>
        Ekonomi digital membuka banyak peluang bagi pelaku usaha.
        Mulai dari bisnis kecil hingga perusahaan besar dapat
        memanfaatkan teknologi untuk meningkatkan jangkauan.
      </p>
    `
  },

  {
    id: 7,
    title: "Perkembangan Politik Menjadi Sorotan",
    category: "Politik",
    author: "Dvan News",
    date: "14 Agustus 2026",
    time: "3 jam lalu",
    views: 58000,
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "Simak perkembangan politik terbaru dan berbagai isu yang sedang dibahas.",
    content: `
      <p>
        Perkembangan politik selalu menjadi perhatian masyarakat.
        Berbagai isu terbaru terus mendapatkan perhatian publik.
      </p>
    `
  },

  {
    id: 8,
    title: "Masa Depan Teknologi Semakin Menarik",
    category: "Teknologi",
    author: "Dvan News",
    date: "14 Agustus 2026",
    time: "4 jam lalu",
    views: 52000,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "Perkembangan teknologi menghadirkan berbagai inovasi baru.",
    content: `
      <p>
        Masa depan teknologi diprediksi akan semakin menarik.
        Berbagai bidang kehidupan akan terus mengalami transformasi.
      </p>
    `
  },

  {
    id: 9,
    title: "Tren Lifestyle yang Banyak Diminati",
    category: "Lifestyle",
    author: "Dvan News",
    date: "14 Agustus 2026",
    time: "5 jam lalu",
    views: 47000,
    image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "Berbagai tren gaya hidup modern semakin populer di masyarakat.",
    content: `
      <p>
        Perubahan gaya hidup terus berkembang mengikuti
        perkembangan zaman dan teknologi.
      </p>
    `
  }
];

window.newsData = newsData;
