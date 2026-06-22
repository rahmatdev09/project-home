import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// KONFIGURASI FIREBASE (Ganti dengan config milik Anda)
const firebaseConfig = {
    apiKey: "AIzaSyYourActualApiKeyHere...",
    authDomain: "your-project-id.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project-id.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abcdef123456"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Data dummy lokal sebagai cadangan jika Firebase belum dikonfigurasi/kosong
const dummyProperties = [
    { id: "1", title: "Cluster Oakwood - Tipe 36", category: "Subsidi", price: "Rp 350.000.000", bed: 2, bath: 1, sqft: 72, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" },
    { id: "2", title: "Pine Residence - Tipe 45", category: "Komersil", price: "Rp 580.000.000", bed: 3, bath: 2, sqft: 90, img: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=600&q=80" },
    { id: "3", title: "Maple Mansion - Tipe 60 (2 Lantai)", category: "Komersil", price: "Rp 890.000.000", bed: 4, bath: 3, sqft: 120, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80" }
];

// INTERAKSI UI & RESPONSIVE NAVBAR
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// LOAD DAN TAMPILKAN PROPERTI
async function fetchProperties() {
    const container = document.getElementById('property-container');
    let propertiesList = [];

    try {
        // Mencoba fetch dari Firestore (Collection: "properties")
        const querySnapshot = await getDocs(collection(db, "properties"));
        querySnapshot.forEach((doc) => {
            propertiesList.push({ id: doc.id, ...doc.data() });
        });

        // Jika di Firebase masih kosong, gunakan data dummy biar web tidak kosong
        if (propertiesList.length === 0) {
            propertiesList = dummyProperties;
        }
    } catch (error) {
        console.warn("Firebase Firestore error, menggunakan data lokal offline:", error);
        propertiesList = dummyProperties;
    }

    renderProperties(propertiesList);
    setupFilters(propertiesList);
}

function renderProperties(data) {
    const container = document.getElementById('property-container');
    container.innerHTML = '';

    data.forEach(item => {
        container.innerHTML += `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group flex flex-col h-full">
                <div class="relative overflow-hidden aspect-[4/3]">
                    <span class="absolute top-4 left-4 z-10 bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full">${item.category}</span>
                    <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                </div>
                <div class="p-6 flex flex-col flex-grow justify-between">
                    <div>
                        <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition">${item.title}</h3>
                        <p class="text-2xl font-extrabold text-emerald-600 mb-4">${item.price}</p>
                    </div>
                    <div class="flex items-center justify-between border-t border-slate-100 pt-4 text-slate-500 text-sm">
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-bed text-slate-400"></i> ${item.bed} KT</span>
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-bath text-slate-400"></i> ${item.bath} KM</span>
                        <span class="flex items-center gap-1.5"><i class="fa-solid fa-ruler-combined text-slate-400"></i> ${item.sqft} m²</span>
                    </div>
                </div>
            </div>
        `;
    });
}

// LOGIKA FILTERING DATA
function setupFilters(fullData) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => b.classList.remove('active', 'bg-emerald-600', 'text-white'));
            buttons.forEach(b => b.classList.add('bg-white', 'text-slate-600'));
            
            e.target.classList.add('active', 'bg-emerald-600', 'text-white');
            
            const filterValue = e.target.getAttribute('data-filter');
            if (filterValue === 'all') {
                renderProperties(fullData);
            } else {
                const filtered = fullData.filter(item => item.category === filterValue);
                renderProperties(filtered);
            }
        });
    });
}

// KIRIM FORM PROSPEK KE FIREBASE
const leadForm = document.getElementById('lead-form');
leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('lead-name').value;
    const phone = document.getElementById('lead-phone').value;
    const type = document.getElementById('lead-type').value;

    try {
        // Kirim data lead ke Firestore collection "leads"
        await addDoc(collection(db, "leads"), {
            nama: name,
            whatsapp: phone,
            tipeDiminati: type,
            waktuSubmit: new Date().toISOString()
        });

        alert(`Terima kasih ${name}! Data Anda berhasil dikirim. Tim sales kami akan segera menghubungi Anda.`);
        leadForm.reset();
    } catch (error) {
        console.error("Gagal mengirim data:", error);
        alert("Terjadi kendala sistem. Silakan hubungi nomor WhatsApp tercantum.");
    }
});

// Jalankan pengambilan data saat halaman siap
document.addEventListener('DOMContentLoaded', fetchProperties);