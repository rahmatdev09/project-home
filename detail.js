// Database Spesifikasi Rumah Detil
const propertyDatabase = {
  "cluster-oakwood": {
    title: "Cluster Oakwood - Tipe 36",
    price: 350000000,
    formattedPrice: "Rp 350.000.000",
    bed: 2,
    bath: 1,
    sqft: 72,
    buildingSize: 36,
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      Pondasi: "Batu Kali & Beton Bertulang",
      Dinding: "Bata Merah, Plester, Aci, Cat Jotun",
      Lantai: "Granit Tile 60x60 cm",
      Atap: "Baja Ringan & Genteng Beton",
      Sanitair: "Toto (Kloset Duduk)",
      Listrik: "1300 Watt",
      Air: "Sumur Bor + Pompa Otomatis",
    },
    features: [
      "One Gate System",
      "CCTV Kompleks 24 Jam",
      "Taman Bermain Anak",
      "Dekat Masjid",
    ],
  },
  "pine-residence": {
    title: "Pine Residence - Tipe 45",
    price: 580000000,
    formattedPrice: "Rp 580.000.000",
    bed: 3,
    bath: 2,
    sqft: 90,
    buildingSize: 45,
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      Pondasi: "Beton Bertulang & Tiang Pancang",
      Dinding: "Bata Merah Double Dinding, Finishing Cat",
      Lantai: "Granit Eksklusif 60x60 cm",
      Atap: "Baja Ringan & Genteng Keramik Glazur",
      Sanitair: "Grohe & Toto",
      Listrik: "2200 Watt",
      Air: "PDAM Bersih",
    },
    features: [
      "Clubhouse Akses",
      "Kolam Renang Cluster",
      "Smart Door Lock",
      "Securitas 24 Jam",
    ],
  },
  "maple-mansion": {
    title: "Maple Mansion - Tipe 60 (2 Lantai)",
    price: 890000000,
    formattedPrice: "Rp 890.000.000",
    bed: 4,
    bath: 3,
    sqft: 120,
    buildingSize: 60,
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
    ],
    specs: {
      Pondasi: "Paku Bumi & Sloof Beton Gantung",
      Dinding: "Bata Ringan Hebel Double, Cat Weather-shield",
      Lantai: "Homogeneous Tile 80x80 cm",
      Atap: "Rangka Baja Ringan & Genteng Flat Minimalis",
      Sanitair: "Premium Toto Full Set",
      Listrik: "3500 Watt Underground",
      Air: "PDAM + Ground Tank",
    },
    features: [
      "Underground Utilities",
      "Samping Gym & Clubhouse",
      "Row Jalan 10 Meter",
      "Jogging Track Akses",
    ],
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const propertyId = params.get("id") || "cluster-oakwood"; // default jika parameter kosong
  const data = propertyDatabase[propertyId];

  const contentArea = document.getElementById("detail-content");

  if (!data) {
    contentArea.innerHTML = `<div class="text-center py-20 text-slate-500"><p>Unit properti tidak ditemukan.</p></div>`;
    return;
  }

  // Render Struktur Layout Grid Detail Properti
  contentArea.className = "grid lg:grid-cols-3 gap-8 items-start";
  contentArea.innerHTML = `
        <div class="lg:col-span-2 space-y-8">
            
            <div class="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <div class="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-100">
                    <img id="main-preview" src="${data.images[0]}" class="w-full h-full object-cover transition-all duration-300">
                </div>
                <div class="grid grid-cols-3 gap-3" id="thumb-container">
                    ${data.images
                      .map(
                        (img, i) => `
                        <div class="aspect-[4/3] rounded-xl overflow-hidden cursor-pointer border-2 ${i === 0 ? "border-emerald-600" : "border-transparent"} hover:border-emerald-600 transition thumb-item" data-src="${img}">
                            <img src="${img}" class="w-full h-full object-cover">
                        </div>
                    `,
                      )
                      .join("")}
                </div>
            </div>

            <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                <div class="flex flex-wrap justify-between items-center gap-4">
                    <div>
                        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900">${data.title}</h1>
                        <p class="text-2xl font-black text-emerald-600 mt-1">${data.formattedPrice}</p>
                    </div>
                    <span class="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase"><i class="fa-solid fa-bolt mr-1"></i> Unit Ready Stock</span>
                </div>
                
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-slate-600 text-sm font-medium">
                    <div class="bg-slate-50 p-3 rounded-xl flex items-center gap-3"><i class="fa-solid fa-bed text-emerald-600 text-lg"></i> <span>${data.bed} Kamar Tidur</span></div>
                    <div class="bg-slate-50 p-3 rounded-xl flex items-center gap-3"><i class="fa-solid fa-bath text-emerald-600 text-lg"></i> <span>${data.bath} Kamar Mandi</span></div>
                    <div class="bg-slate-50 p-3 rounded-xl flex items-center gap-3"><i class="fa-solid fa-ruler-combined text-emerald-600 text-lg"></i> <span>Tanah ${data.sqft} m²</span></div>
                    <div class="bg-slate-50 p-3 rounded-xl flex items-center gap-3"><i class="fa-solid fa-house text-emerald-600 text-lg"></i> <span>Bangunan ${data.buildingSize} m²</span></div>
                </div>
            </div>

            <div class="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
                <div class="flex border-b border-slate-100 bg-slate-50/50">
                    <button id="tab-spec-btn" class="flex-1 py-4 text-center font-bold text-sm border-b-2 border-emerald-600 text-emerald-600 outline-none transition">Spesifikasi Bangunan</button>
                    <button id="tab-feat-btn" class="flex-1 py-4 text-center font-bold text-sm border-b-2 border-transparent text-slate-500 hover:text-slate-900 outline-none transition">Fasilitas Cluster</button>
                </div>
                <div class="p-6 sm:p-8">
                    <div id="tab-spec-content" class="block">
                        <table class="w-full text-sm text-left border-collapse">
                            <tbody>
                                ${Object.entries(data.specs)
                                  .map(
                                    ([key, val]) => `
                                    <tr class="border-b border-slate-100 last:border-0">
                                        <td class="py-3 font-semibold text-slate-500 w-1/3">${key}</td>
                                        <td class="py-3 text-slate-800">${val}</td>
                                    </tr>
                                `,
                                  )
                                  .join("")}
                            </tbody>
                        </table>
                    </div>
                    <div id="tab-feat-content" class="hidden">
                        <div class="grid sm:grid-cols-2 gap-4">
                            ${data.features
                              .map(
                                (f) => `
                                <div class="flex items-center gap-3 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                                    <i class="fa-solid fa-circle-check text-emerald-600 text-lg"></i><span>${f}</span>
                                </div>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                <h3 class="text-lg font-bold text-slate-900"><i class="fa-solid fa-calculator text-emerald-600 mr-2"></i> Simulasi Angsuran KPR Konvensional</h3>
                <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-500 uppercase mb-2">Uang Muka (DP 10%)</label>
                        <input type="text" id="kpr-dp" class="w-full px-4 py-3 bg-slate-50 border rounded-xl font-semibold outline-none text-sm text-slate-400" value="Rp ${(data.price * 0.1).toLocaleString("id-ID")}" disabled>
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-500 uppercase mb-2">Suku Bunga Per Tahun (Asumsi)</label>
                        <input type="text" class="w-full px-4 py-3 bg-slate-50 border rounded-xl font-semibold outline-none text-sm text-slate-400" value="6.5% Fixed" disabled>
                    </div>
                </div>
                <div class="bg-emerald-50/50 p-4 sm:p-6 rounded-2xl border border-emerald-100/50 grid grid-cols-3 gap-2 text-center">
                    <div class="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                        <p class="text-xs text-slate-500 font-medium">10 Tahun</p>
                        <p class="text-sm sm:text-base font-extrabold text-slate-900 mt-1" id="kpr-10y">Rp 0</p>
                    </div>
                    <div class="p-2 bg-white rounded-xl shadow-sm border border-slate-100">
                        <p class="text-xs text-slate-500 font-medium">15 Tahun</p>
                        <p class="text-sm sm:text-base font-extrabold text-slate-900 mt-1" id="kpr-15y">Rp 0</p>
                    </div>
                    <div class="p-2 bg-white rounded-xl shadow-sm border border-emerald-500 bg-emerald-50/20">
                        <p class="text-xs text-emerald-700 font-bold">20 Tahun</p>
                        <p class="text-sm sm:text-base font-black text-emerald-600 mt-1" id="kpr-20y">Rp 0</p>
                    </div>
                </div>
                <p class="text-[11px] text-slate-400 leading-relaxed">*Perhitungan di atas merupakan estimasi kasar menggunakan skema anuitas efektif. Nilai riil di bank dapat sedikit berbeda tergantung kebijakan promo provisi dan asuransi jiwa.</p>
            </div>

        </div>

        <div class="lg:col-span-1 lg:sticky lg:top-28">
            <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-xl space-y-5">
                <div class="space-y-1">
                    <h4 class="text-lg font-bold text-slate-900">Tertarik Survey Lokasi?</h4>
                    <p class="text-xs text-slate-500">Isi form di bawah untuk membuat janji kunjungan rumah contoh bersama Agen Resmi kami.</p>
                </div>
                <form id="whatsapp-survey-form" class="space-y-4">
                    <div>
                        <label class="block text-xs font-bold text-slate-600 mb-1.5">Nama Lengkap</label>
                        <input type="text" id="survey-name" required placeholder="Masukkan nama Anda" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:border-emerald-500 transition">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-600 mb-1.5">Hari / Tanggal Kunjungan</label>
                        <input type="date" id="survey-date" required class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:border-emerald-500 transition">
                    </div>
                    <div>
                        <label class="block text-xs font-bold text-slate-600 mb-1.5">Jam Kunjungan</label>
                        <select id="survey-time" class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:border-emerald-500 transition">
                            <option value="09:00 WIB">09:00 WIB</option>
                            <option value="11:00 WIB">11:00 WIB</option>
                            <option value="14:00 WIB">14:00 WIB</option>
                            <option value="16:00 WIB">16:00 WIB</option>
                        </select>
                    </div>
                    <button type="submit" class="w-full bg-emerald-600 text-white font-bold py-3.5 rounded-xl hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-2 text-sm">
                        <i class="fa-brands fa-whatsapp text-lg"></i> Kirim Jadwal via WhatsApp
                    </button>
                </form>
            </div>
        </div>
    `;

  // --- LOGIKA AKSI 1: GANTI FOTO PREVIEW GALERI ---
  const mainPreview = document.getElementById("main-preview");
  const thumbs = document.querySelectorAll(".thumb-item");
  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach((t) => t.classList.remove("border-emerald-600"));
      thumb.classList.add("border-emerald-600");
      mainPreview.src = thumb.getAttribute("data-src");
    });
  });

  // --- LOGIKA AKSI 2: SWITCHING TABS ---
  const tabSpecBtn = document.getElementById("tab-spec-btn");
  const tabFeatBtn = document.getElementById("tab-feat-btn");
  const tabSpecContent = document.getElementById("tab-spec-content");
  const tabFeatContent = document.getElementById("tab-feat-content");

  tabSpecBtn.addEventListener("click", () => {
    tabSpecBtn.className =
      "flex-1 py-4 text-center font-bold text-sm border-b-2 border-emerald-600 text-emerald-600 outline-none transition";
    tabFeatBtn.className =
      "flex-1 py-4 text-center font-bold text-sm border-b-2 border-transparent text-slate-500 hover:text-slate-900 outline-none transition";
    tabSpecContent.className = "block";
    tabFeatContent.className = "hidden";
  });

  tabFeatBtn.addEventListener("click", () => {
    tabFeatBtn.className =
      "flex-1 py-4 text-center font-bold text-sm border-b-2 border-emerald-600 text-emerald-600 outline-none transition";
    tabSpecBtn.className =
      "flex-1 py-4 text-center font-bold text-sm border-b-2 border-transparent text-slate-500 hover:text-slate-900 outline-none transition";
    tabFeatContent.className = "block";
    tabSpecContent.className = "hidden";
  });

  // --- LOGIKA AKSI 3: HITUNG KALKULATOR ANGSURAN KPR ---
  function hitungKPR(hargaProperti) {
    const dp = hargaProperti * 0.1;
    const pokokUtang = hargaProperti - dp;
    const bungaPerTahun = 0.065; // Asumsi bunga 6.5%
    const bungaPerBulan = bungaPerTahun / 12;

    const hitungCicilan = (tahun) => {
      const totalBulan = tahun * 12;
      // Rumus rumus Anuitas Efektif: P * (i * (1+i)^n) / (((1+i)^n) - 1)
      const rumus =
        (pokokUtang *
          (bungaPerBulan * Math.pow(1 + bungaPerBulan, totalBulan))) /
        (Math.pow(1 + bungaPerBulan, totalBulan) - 1);
      return Math.round(rumus);
    };

    document.getElementById("kpr-10y").innerText =
      "Rp " + hitungCicilan(10).toLocaleString("id-ID") + "/bln";
    document.getElementById("kpr-15y").innerText =
      "Rp " + hitungCicilan(15).toLocaleString("id-ID") + "/bln";
    document.getElementById("kpr-20y").innerText =
      "Rp " + hitungCicilan(20).toLocaleString("id-ID") + "/bln";
  }
  hitungKPR(data.price);

  // --- LOGIKA AKSI 4: FORM WHATSAPP GATEWAY DIRECT ---
  document
    .getElementById("whatsapp-survey-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const nama = document.getElementById("survey-name").value;
      const tanggal = document.getElementById("survey-date").value;
      const jam = document.getElementById("survey-time").value;

      const nomorWA = "6281234567890"; // Ganti dengan nomor WhatsApp marketing riil Anda

      // Template String Teks Whatsapp Rapi
      const textMessage = encodeURIComponent(
        `Halo GriyaAsri, saya ingin mengajukan jadwal survey lokasi:\n\n` +
          `• *Nama Lengkap:* ${nama}\n` +
          `• *Unit Rumah:* ${data.title}\n` +
          `• *Hari / Tanggal:* ${tanggal}\n` +
          `• *Jam Kunjungan:* ${jam}\n\n` +
          `Mohon konfirmasi ketersediaan tempat contohnya ya. Terima kasih!`,
      );

      window.open(`https://wa.me/${nomorWA}?text=${textMessage}`, "_blank");
    });
});
