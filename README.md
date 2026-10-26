# 🚀 Web Programlama I — Sistem Mimarları Operasyon Merkezi

**SCÜ Şarkışla UBYO | Bilişim Sistemleri ve Teknolojileri Bölümü**

Bu depo, Web Programlama I dersinin resmi **"Çevik (Agile) Operasyon Merkezi"**dir. Dönem boyunca tüm çeviriler, sunumlar, uygulama kodları ve soru-cevap dokümanları bu depo üzerinden, açık kaynak (open-source) sektör standartlarına uygun olarak yönetilecektir.

📌 **Kısa Özet:** Fork'la → Kendi kopyanda çalış → PR aç → Denetimden geç → Merge. Detaylar aşağıda.

---

## 📂 Depo Yapısı (Resmi Dokümantasyon Uyumlu)

```
web-programlama1/
│
├── README.md                        ← bu dosya
│
├── 01-getting-started-1/            ← Getting Started (Takım 1)
│   ├── ceviri/
│   │   └── 2026-guz-404klup.md
│   ├── sunum/
│   │   └── 2026-guz-404klup.pdf
│   ├── uygulama/
│   │   └── v1-2026-guz-404klup/
│   │       ├── index.html
│   │       ├── styles/style.css
│   │       ├── scripts/main.js
│   │       └── README.md
│   └── soru-cevap/
│       └── 2026-guz-404klup.md
```

---

## 📝 Dosya İsimlendirme Kuralları

**Çeviri, Sunum, Soru-Cevap için:**
```
YIL-DONEM-TAKIMADI.uzanti
```
Örnekler: `2026-guz-kodbucuk.md`, `2027-guz-yenitakim.pdf`

**Uygulama için:**
```
vVERSIYON-YIL-DONEM-TAKIMADI/
```
Örnekler: `v1-2026-kodbucuk/`, `v2-2027-yenitakim/`

---

## 🔄 İş Akışı

### Adım 1: Fork
Sağ üst köşedeki **Fork** butonuna tıklayın.

### Adım 2: Kendi Kopyanızda Çalışın
```
git clone https://github.com/KULLANICI_ADINIZ/webprogramlama1.git
```

### Adım 3: Pull Request Gönderin
- **Contribute** → **Open Pull Request**
- Hedef: `mesutpolatgil/webprogramlama1 → main`
- PR Başlığı: `Hafta XX - [Takım Adı] Teslimi`

### Adım 4: Denetim (Code Review)
QA takımı 48 saat içinde inceler. 3 tur düzeltmeden sonra hâlâ eksikse PR reddedilir.

---

## 💬 Commit Mesajı Formatı

```
hafta-XX: TakımAdı kısa-açıklama
```

✅ Doğru: `hafta-01: 404klup ceviri eklendi`  
❌ Yanlış: `update`, `değişiklik`, `final`, `son hali`

---

## ✅ PR Öncesi Kontrol Listesi

- [ ] Doğru konu klasöründe miyim? (`01-web-temelleri/` gibi)
- [ ] Doğru içerik türünde miyim? (`ceviri/`, `sunum/`, `uygulama/`, `soru-cevap/`)
- [ ] Dosya ismi doğru formatta mı? (`2026-guz-404klup.md`)
- [ ] Uygulama klasöründe `README.md` var mı?
- [ ] Çeviri dosyasının başında yasal uyarı var mı?
- [ ] Commit mesajı standart formatta mı?
- [ ] PR başlığı formatı doğru mu?
- [ ] Başka takımın dosyasına dokunmadım, değil mi?

---

## 📜 Yasal Uyarı ve Telif

Tüm çeviri dosyalarının en üstünde şu ibare yer almak **zorundadır**:

> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

---

Tüm takımlara mühendislik simülasyonunda başarılar dilerim. Kodunuz bug'sız, render'ınız pürüzsüz olsun! 🎯
