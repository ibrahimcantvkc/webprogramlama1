> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

---

# Uygulama: 01 - Web Temelleri

**Konu:** 01 - Web Temelleri (MDN Web Standards + Soft Skills)  
**Takım:** 404klup — 1. Grup  
**Dönem:** 2026 Güz  

## Takım ve Roller

| GitHub | İsim | Rol |
|--------|------|-----|
| @kullanici1 | Mustafa | Çeviri + Mimari Slayt |
| @kullanici2 | Semih | Sınıf İçi Sunum (Teori) |
| @kullanici3 | Efe | Uygulama (Canlı Kod) |
| @kullanici4 | Yusuf | Soru-Cevap (QA) |

## Ne Yaptık?

Sunumumuzda işlenen **Web Standartları** ve **Sosyal Beceriler** konularını interaktif bir demo ile pekiştirdik:

- **DOM Manipülasyonu:** `createElement`, `prepend` ile dinamik kart ekleme.
- **Event Listener:** Buton tıklama (`addEventListener`).
- **Hata Yönetimi (Soft Skill):** `onerror` ile kırık resim koruması — resim bulunamazsa UI Avatars API'sinden otomatik avatar üretilir.
- **CSS Glassmorphism:** `backdrop-filter: blur()` ile cam efekti.
- **CSS Animasyonu:** `@keyframes yavascaGel` ile kart giriş animasyonu.
- **Döngüsel Sıra:** `sira % ekipListesi.length` ile liste bittiğinde başa sarma.

## Klasör Yapısı

```
v1-2026-guz-404klup/
├── README.md           ← bu dosya
├── index.html          ← ana sayfa
├── styles/
│   └── style.css       ← dark mode glassmorphism tema
├── scripts/
│   └── main.js         ← DOM manipülasyonu + hata yönetimi
└── images/             ← ekip fotoğrafları (mustafa.png, semih.png, efe.jpeg, yusuf.jpeg)
```

## 🚀 Canlı Demo

**👉 [https://mustafaicen86-star.github.io/ekip-profil](https://mustafaicen86-star.github.io/ekip-profil)**

Butona tıkla → ekip kartları sırayla gelir.

## Nasıl Çalıştırılır?

### Yöntem 1: Canlı Link (Tavsiye Edilen)
Yukarıdaki **Canlı Demo** linkine tıkla, tarayıcıda direkt açılır.

### Yöntem 2: VS Code Live Server
`index.html` dosyasına sağ tıkla → **Open with Live Server**

### Yöntem 3: Python HTTP Sunucusu
```bash
cd v1-2026-guz-404klup
python -m http.server 8000
```
Tarayıcıda `http://localhost:8000` adresini açın.

## Öğrenme Çıktıları

Bu demo şu MDN konularını uygulamalı göstermektedir:

1. **Web Nasıl Çalışır?** → HTTP isteği simülasyonu (Avatar API çağrısı)
2. **DOM Manipülasyonu** → Dinamik HTML oluşturma
3. **Hata Toleransı** → `onerror` graceful degradation
4. **CSS Standartları** → `backdrop-filter`, `@keyframes`, `flex`
5. **Erişilebilirlik** → `alt` öznitelikleri, `aria-label`, `role` öznitelikleri

## İlgili Dosyalar

- **Çeviri (Web Standartları + Soft Skills):** `ceviri/2026-guz-404klup.md`
- **Sunum:** `sunum/2026-guz-404klup.pdf`
- **Soru-Cevap (5 soru + cevaplar):** `soru-cevap/2026-guz-404klup.md`
