# DevOps & Web Forms Studio v2.4 — (2026 Güz)

**Ders:** Web Programlama I  
**Modül:** 07-extension-modules-2  
**Takım:** Ş.B. Mimari (Extension Modules — 2. Grup)  
**Yazar / Geliştirici:** Mert Özsoy (Rol 1: Canlı Uygulama & Kod)  
**Konular:** Web Forms (HTML Formları, Constraint Validation, FormData) & Understanding Client-Side Tools (npm, Vite, ESLint, Vitest, CI/CD Pipeline)

---

## 📌 Proje ve Mimari Vizyon
Bu proje, standart bir form ödevinin ötesine geçerek **"Sistem Mimarları DevOps & Form Tooling Platformu"** olarak tasarlanmıştır. MDN Web Docs dökümantasyonundaki iki büyük modül (Web Forms ve Client-Side Tools) tek bir çatı altında interaktif olarak birleştirilmiştir.

### 🌟 Öne Çıkan Özellikler

#### 1. Web Forms Stüdyosu (Sol Panel)
- **HTML5 Yerel Giriş Denetimleri:** `text`, `email`, `tel`, `range`, `file` ve `select` kontrolleri.
- **Canlı Constraint Validation API HUD (Debugger):** Kullanıcı yazı yazarken tarayıcının yerleşik `validity` nesnesini (`valid`, `valueMissing`, `typeMismatch`, `patternMismatch`, `tooShort`) anlık olarak ekrana basan canlı denetim paneli.
- **Regex Doğrulama:** `^SRV-[0-9]{4}$` sunucu kodu regex kuralı.
- **Gelişmiş CSS UI Sözde Sınıfları:** `:valid`, `:invalid`, `:focus` efektleri, sallantı animasyonu (`shake`) ve modern dark mode glassmorphism.
- **Sürükle-Bırak Dosya Yükleyici (Drag & Drop):** 2MB dosya boyutu sınırı, MIME tipi ve boyut hesabı.
- **Ses Efektleri & Toast Bildirimleri:** Web Audio API ile çalışan fütüristik ses bildirimleri (kapatılıp açılabilir).

#### 2. Client-Side Toolchain & Ağ İnceleyici (Sağ Panel)
- **Canlı FormData & Headers Monitörü:** Form gönderilmeden önce bile toplanan verileri anlık JSON formatında çözen ve `multipart/form-data` başlıklarını (`boundary`) simüle eden ağ konsolu.
- **Gerçek HTTP POST İsteği:** Form gönderildiğinde arka planda `fetch()` ile gerçek REST API uç noktasına (`jsonplaceholder.typicode.com/posts`) asenkron istek gönderilip `201 Created` yanıtı ve yanıt süresi (`ms`) yakalanır.
- **Modül 2 Sanal Terminali:**
  - `npm run lint`: ESLint Flat Config kural tarama simülasyonu.
  - `npm run test`: Vitest birim test koşumu simülasyonu.
  - `npm run build`: Vite bundle üretimi ve dist gzip istatistikleri.
  - `git push (CI/CD)`: GitHub Actions Pages dağıtım hattı simülasyonu.
- **Mimari & MDN Notları:** Ders kapsamında çıkarılan 15 kritik MDN uyarısını içeren bilgi kartları.

---

## 🚀 Çalıştırma

### Arayüzü Başlatma:
Doğrudan tarayıcınızda açmak için `index.html` dosyasına çift tıklayabilir veya VS Code `Live Server` eklentisiyle başlatabilirsiniz:
```bash
# Tarayıcıda açmak için:
start index.html
```

### CLI / Terminal Demosu:
Paket yönetimini ve `chalk` bağımlılığını konsolda test etmek için:
```bash
npm install
node npm-demo.js
```