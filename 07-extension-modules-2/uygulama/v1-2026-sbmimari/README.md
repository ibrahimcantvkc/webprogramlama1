# Web Forms & Client-Side Tools Demo — v1 (2026 Güz)

**Takım:** Ş.B. Mimari (Extension Modules — 2. Grup)  
**Modül:** 07-extension-modules-2  
**Konular:** Web Forms (HTML Formları) & Understanding Client-Side Tools (npm & Paket Yönetimi)

---

## 📌 Proje Hakkında
Bu proje, MDN Web Docs "Web Forms" ve "Understanding Client-Side Tools" modülleri kapsamında hazırlanan çalışan bir web form ve istemci tarafı araçları demonstrasyonudur.

Proje iki ana bileşenden oluşmaktadır:
1. **Web Forms Arayüzü (`index.html`, `style.css`, `form-demo.js`):**
   - HTML5 modern giriş türleri (`email`, `tel`, `number`, `range`, `date`, `color`).
   - Gelişmiş form stillendirme ve UI sözde sınıfları (`:valid`, `:invalid`, `:required`).
   - İstemci tarafı doğrulama (Constraint Validation API).
   - Özelleştirilmiş form bileşenleri ve erişilebilirlik (ARIA) desteği.
2. **Client-Side Araçları (`package.json`, `npm-demo.js`):**
   - npm paket yöneticisi kullanımı ve modern bağımlılık yönetimi.
   - İstemci tarafı araç zinciri (toolchain) mantığının gösterimi.

---

## 🚀 Kurulum ve Çalıştırma

### 1. Bağımlılıkların Yüklenmesi
Terminalde bu klasör dizinindeyken (`uygulama/v1-2026-sbmimari`):
```bash
npm install