// =============================================
// Web Programlama I — 01 Web Temelleri Demo
// Takım: 404klup | 2026 Güz
// Konu: DOM Manipülasyonu + Hata Yönetimi (Soft Skills)
// =============================================

// --- DOM Elemanlarını Yakalama ---
const getirBtn = document.getElementById('getirBtn');
const temizleBtn = document.getElementById('temizleBtn');
const sahne = document.getElementById('sahne');

// --- Ekip Veritabanı ---
// Dosya uzantıları doğru ve onerror koruması mevcut
const ekipListesi = [
    {
        isim: "Mustafa",
        rol: "BST Öğrencisi",
        foto: "images/mustafa.png"
    },
    {
        isim: "Semih",
        rol: "BST Öğrencisi",
        foto: "images/semih.png"
    },
    {
        isim: "Efe",
        rol: "BST Öğrencisi",
        foto: "images/efe.jpeg"
    },
    {
        isim: "Yusuf",
        rol: "BST Öğrencisi",
        foto: "images/yusuf.jpeg"
    }
];

// Sıra takibi: hangi profil sırada?
let sira = 0;

// --- Profil Kartı Oluşturma Fonksiyonu ---
function profilKartiOlustur(kisi) {
    const kart = document.createElement('div');
    kart.className = 'profil-karti';
    kart.setAttribute('role', 'listitem');

    // onerror → Soft Skill: Hata Toleransı (Graceful Degradation)
    // Resim bulunamazsa sistem çökmez; UI Avatars API'sinden otomatik avatar üretilir.
    kart.innerHTML = `
        <img
            src="${kisi.foto}"
            alt="${kisi.isim} fotoğrafı"
            onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(kisi.isim)}&background=00a8ff&color=fff&size=128';"
        >
        <h3>${kisi.isim}</h3>
        <p class="rol">${kisi.rol}</p>
    `;

    return kart;
}

// --- "Sıradaki Profili Getir" Butonu ---
getirBtn.addEventListener('click', () => {
    const secilenKisi = ekipListesi[sira];

    // Kartı oluştur ve listenin BAŞINA ekle (prepend)
    const yeniKart = profilKartiOlustur(secilenKisi);
    sahne.prepend(yeniKart);

    // Sırayı bir ilerlet; liste bittiyse başa sar (döngüsel)
    sira = (sira + 1) % ekipListesi.length;
});

// --- "Temizle" Butonu ---
temizleBtn.addEventListener('click', () => {
    // Tüm kartları kaldır ve sırayı sıfırla
    sahne.innerHTML = '';
    sira = 0;
});
