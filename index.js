const dummyProperties = [
  {
    id: "cluster-oakwood",
    title: "Cluster Oakwood - Tipe 36",
    price: 350000000,
    formattedPrice: "Rp 350.000.000",
    bed: 2,
    bath: 1,
    sqft: 72,
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pine-residence",
    title: "Pine Residence - Tipe 45",
    price: 580000000,
    formattedPrice: "Rp 580.000.000",
    bed: 3,
    bath: 2,
    sqft: 90,
    img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "maple-mansion",
    title: "Maple Mansion - Tipe 60 (2 Lantai)",
    price: 890000000,
    formattedPrice: "Rp 890.000.000",
    bed: 4,
    bath: 3,
    sqft: 120,
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
  },
];

const dummyNews = [
  {
    id: "tips-kpr-2026",
    title: "Panduan Lolos KPR dengan Mudah di Tahun 2026",
    snippet:
      "Simak strategi mengatur keuangan dan BI Checking agar pengajuan rumah idaman disetujui bank dalam waktu cepat.",
    date: "15 Juni 2026",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "tren-desain-minimalis",
    title: "Mengenal Desain Rumah Kontemporer Scandinavian",
    snippet:
      "Mengapa tipe bangunan minimalis dengan sirkulasi udara silang menjadi primadona generasi millenial saat ini.",
    date: "10 Juni 2026",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "investasi-properti-barat",
    title: "Analisis Kenaikan Harga Properti di Kawasan Barat",
    snippet:
      "Data infrastruktur baru yang memicu capital gain tanah perumahan melonjak tajam hingga dua digit.",
    date: "02 Juni 2026",
    img: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=500&q=80",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("property-grid");

  // Function Render Grid Rumah
  function renderProperties(properties) {
    grid.innerHTML = "";
    if (properties.length === 0) {
      grid.innerHTML = `<div class="col-span-full text-center py-12 text-slate-400"><p>Unit rumah yang Anda cari tidak ditemukan.</p></div>`;
      return;
    }
    properties.forEach((p) => {
      grid.innerHTML += `
                <div onclick="window.location.href='detail.html?id=${p.id}'" class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 cursor-pointer group flex flex-col">
                    <div class="overflow-hidden aspect-[4/3]"><img src="${p.img}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"></div>
                    <div class="p-6 flex flex-col flex-grow justify-between">
                        <div>
                            <h3 class="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition mb-1">${p.title}</h3>
                            <p class="text-xl font-extrabold text-emerald-600 mb-4">${p.formattedPrice}</p>
                        </div>
                        <div class="flex items-center justify-between border-t border-slate-100 pt-4 text-slate-500 text-sm">
                            <span><i class="fa-solid fa-bed mr-1.5"></i>${p.bed} KT</span>
                            <span><i class="fa-solid fa-bath mr-1.5"></i>${p.bath} KM</span>
                            <span><i class="fa-solid fa-ruler-combined mr-1.5"></i>${p.sqft} m²</span>
                        </div>
                    </div>
                </div>
            `;
    });
  }
  renderProperties(dummyProperties);

  // Filter Logic
  document.getElementById("btn-filter").addEventListener("click", () => {
    const maxPrice = document.getElementById("filter-price").value;
    const beds = document.getElementById("filter-beds").value;

    const filtered = dummyProperties.filter((p) => {
      const matchPrice = maxPrice === "all" || p.price <= parseInt(maxPrice);
      const matchBeds = beds === "all" || p.bed === parseInt(beds);
      return matchPrice && matchBeds;
    });
    renderProperties(filtered);
  });

  // Render News Carousel Track
  const newsTrack = document.getElementById("news-track");
  dummyNews.forEach((n) => {
    newsTrack.innerHTML += `
            <div onclick="window.location.href='berita.html?id=${n.id}'" class="min-w-[280px] sm:min-w-[350px] bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md cursor-pointer group snap-start flex flex-col justify-between">
                <div>
                    <div class="overflow-hidden h-48"><img src="${n.img}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500"></div>
                    <div class="p-5 space-y-2">
                        <span class="text-xs text-slate-400 font-medium block">${n.date}</span>
                        <h4 class="font-bold text-slate-900 group-hover:text-emerald-600 transition line-clamp-2">${n.title}</h4>
                        <p class="text-xs text-slate-500 line-clamp-3 leading-relaxed">${n.snippet}</p>
                    </div>
                </div>
                <div class="p-5 pt-0 text-xs font-semibold text-emerald-600">Baca Selengkapnya <i class="fa-solid fa-arrow-right ml-1"></i></div>
            </div>
        `;
  });

  // Carousel Controls Actions
  document
    .getElementById("slide-next")
    .addEventListener("click", () => (newsTrack.scrollLeft += 340));
  document
    .getElementById("slide-prev")
    .addEventListener("click", () => (newsTrack.scrollLeft -= 340));

  // FAQ Accordion Toggle
  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector("i");
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove("rotate-180");
      } else {
        document
          .querySelectorAll(".faq-content")
          .forEach((c) => (c.style.maxHeight = null));
        document
          .querySelectorAll(".faq-toggle i")
          .forEach((i) => i.classList.remove("rotate-180"));
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("rotate-180");
      }
    });
  });

  // Back to top button
  const toTopBtn = document.getElementById("to-top-btn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      toTopBtn.classList.remove("opacity-0", "translate-y-10");
    } else {
      toTopBtn.classList.add("opacity-0", "translate-y-10");
    }
  });
  toTopBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
});
