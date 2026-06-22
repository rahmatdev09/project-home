const articlesDatabase = {
  "tips-kpr-2026": {
    title: "Panduan Lolos KPR dengan Mudah di Tahun 2026",
    date: "15 Juni 2026",
    author: "Tim Finansial GriyaAsri",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
    content: `
            <p>Membeli rumah melalui skema Kredit Pemilikan Rumah (KPR) masih menjadi opsi andalan mayoritas masyarakat Indonesia di tahun 2026. Namun, ketatnya seleksi perbankan seringkali menjadi ganjalan utama.</p>
            <p>Langkah pertama yang wajib Anda perhatikan adalah membersihkan <strong>BI Checking / SLIK OJK</strong>. Pastikan tidak ada tunggakan paylater, kartu kredit, ataupun cicilan kendaraan motor yang berstatus macet.</p>
            <p>Selanjutnya, siapkan rasio utang yang sehat. Idealnya, total cicilan bulanan Anda tidak boleh melebihi 30% hingga 35% dari total pendapatan bersih bulanan rumah tangga Anda.</p>
        `,
  },
  "tren-desain-minimalis": {
    title: "Mengenal Desain Rumah Kontemporer Scandinavian",
    date: "10 Juni 2026",
    author: "Arsitek Utama GriyaAsri",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    content: `
            <p>Gaya arsitektur Scandinavian kontemporer kian digandrungi karena mengedepankan fungsionalitas yang selaras dengan estetika minimalis yang elegan.</p>
            <p>Ciri khas utama bangunan ini terletak pada pemanfaatan pencahayaan alami melalui jendela kaca besar, dominasi warna bumi (earth tone), dan optimalisasi sirkulasi udara silang demi mereduksi penggunaan AC.</p>
            <p>Dengan menerapkan konsep tata ruang terbuka (open plan), rumah dengan luas tanah terbatas pun akan terasa jauh lebih lapang dan fleksibel untuk kebutuhan keluarga.</p>
        `,
  },
  "investasi-properti-barat": {
    title: "Analisis Kenaikan Harga Properti di Kawasan Barat",
    date: "02 Juni 2026",
    author: "Research & Data GriyaAsri",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
    content: `
            <p>Kawasan satelit bagian barat mengalami lompatan nilai investasi properti yang sangat signifikan sepanjang kuartal pertama tahun 2026.</p>
            <p>Faktor utamanya didorong oleh masifnya perpanjangan jalur infrastruktur tol lingkar luar dan pembangunan fasilitas stasiun transportasi massal terintegrasi baru.</p>
            <p>Bagi investor mikro, membeli unit properti tipe retail pada masa peluncuran perdana (early bird price) menjanjikan jaminan capital gain rata-rata berkisar antara 10% hingga 14% per tahun.</p>
        `,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id");
  const article = articlesDatabase[articleId];

  const view = document.getElementById("article-view");
  if (!article) {
    view.innerHTML = `<div class="text-center py-12 text-slate-400"><p>Artikel tidak ditemukan.</p></div>`;
    return;
  }

  view.innerHTML = `
        <span class="text-xs font-bold text-emerald-600 uppercase tracking-wider block">${article.date} &bull; Oleh ${article.author}</span>
        <h1 class="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">${article.title}</h1>
        <div class="rounded-2xl overflow-hidden shadow-sm aspect-[16/9] my-6">
            <img src="${article.img}" class="w-full h-full object-cover">
        </div>
        <div class="prose prose-slate max-w-none text-slate-600 space-y-4 text-sm sm:text-base leading-relaxed">
            ${article.content}
        </div>
    `;
});
