> **Yasal Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı hazırlanmıştır. Orijinal dokümantasyon kaynakları (MDN Web Docs vb.) kendi orijinal lisanslarına (CC BY-SA) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Hava Durumu ve Analiz Portalı

**Proje:** Web Programlama I – Extension Modules (Modül 06), Uygulama Çalışması  
**Takım:** Koza  
**Versiyon:** v1-2026-koza

---

## Takım Bilgileri

| Üye | GitHub | Rol |
|---|---|---|
| Aleyna Sümbül | [@AleynaSl](https://github.com/AleynaSl) | Çeviri |
| Sümeyra Karaca | [@sumeyra-karaca](https://github.com/sumeyra-karaca) | Sunum & Soru-Cevap |
| Sudenaz Atasayar | [@SudenazAtasayar](https://github.com/SudenazAtasayar) | Uygulama |

---

## Uygulamanın Amacı

Bu uygulama, MDN Web Docs **Extension Modules** kapsamında öğrenilen:

- **İstemci Tarafı Web API'leri (Client-side APIs)** — `Fetch API`, `Canvas API`, `Web Storage API`
- **Asenkron JavaScript** — `async/await`, `Promise`
- **Nesne Yönelimli JavaScript** — ES6 `class`, kapsülleme, kalıtım

kavramlarının gerçek bir projede kullanımını göstermek amacıyla geliştirilmiştir.

Uygulama; **[Open-Meteo](https://open-meteo.com/)** ücretsiz açık kaynak hava durumu API'sini kullanarak herhangi bir şehirin anlık hava durumunu ve 7 saatlik sıcaklık tahminini gösterir. Favori şehirler **localStorage** ile kalıcı olarak saklanır. Sıcaklık trendi **Canvas API** ile dinamik olarak çizilir.

---

## Özellikler

- 🔍 Şehir adına göre anlık hava durumu sorgulama
- 🌡️ Sıcaklık, rüzgar hızı, rüzgar yönü ve gözlem zamanı gösterimi
- 📈 7 saatlik sıcaklık trend grafiği (Canvas API ile)
- ⭐ Favori şehirler listesi (localStorage ile kalıcı)
- ⌨️ Enter tuşuyla arama desteği
- 📱 Responsive (duyarlı) tasarım

---

## Klasör Yapısı

```
v1-2026-koza/
├── index.html     # Uygulamanın HTML iskelet yapısı
├── style.css      # Tüm görsel stiller ve responsive düzen
├── app.js         # Tüm uygulama mantığı (OOP sınıf yapısı)
└── README.md      # Bu dosya
```

### Dosyaların Görevi

| Dosya | Açıklama |
|---|---|
| `index.html` | Arama kutusu, sonuç kartı, canvas elementi ve favoriler bölümünden oluşan tek sayfalı HTML yapısı. |
| `style.css` | CSS custom properties ile tanımlanmış renk sistemi, kart tabanlı layout, yükleme animasyonu ve responsive breakpoint'ler. |
| `app.js` | Üç ES6 sınıfından oluşur: `WeatherData` (veri modeli), `WeatherService` (API iletişim katmanı), `AppUI` (DOM & kullanıcı arayüzü). Canvas tabanlı grafik çizimi `AppUI.drawChart()` metoduyla yapılır. |

---

## JavaScript Sınıf Mimarisi

```
WeatherData          — Hava durumu veri modeli (OOP veri kapsülleme)
  └── getConditionText()
  └── getWindDirectionText()
  └── getFormattedTime()
  └── getNextHours(count)

WeatherService       — API iletişim katmanı (static metodlar, async/await)
  └── static fetchJson(url)
  └── static getCoordinates(city)
  └── static getWeather(city)

AppUI                — DOM yönetimi ve kullanıcı arayüzü
  └── bindEvents()
  └── handleSearch()
  └── drawChart()       ← Canvas API kullanımı
  └── loadFavorites()   ← localStorage.getItem()
  └── saveFavorites()   ← localStorage.setItem()
  └── renderFavorites()
```

---

## Kullanılan API'ler ve MDN Konuları

| API / Kavram | MDN Konusu | Kullanım Yeri |
|---|---|---|
| `fetch()` | Client-side APIs – Fetch | `WeatherService.fetchJson()` |
| `async / await` | Asynchronous JavaScript | `WeatherService.getWeather()` |
| `localStorage` | Client-side Storage | `AppUI.loadFavorites()`, `AppUI.saveFavorites()` |
| Canvas 2D Context | Drawing Graphics | `AppUI.drawChart()` |
| ES6 `class` | Classes in JavaScript | `WeatherData`, `WeatherService`, `AppUI` |
| `addEventListener` | Intro to Web APIs | `AppUI.bindEvents()` |

---

## Nasıl Çalıştırılır

Uygulama, tarayıcıda doğrudan `index.html` açılarak çalıştırılabilir.

> **Not:** `fetch()` API'si `file://` protokolünde bazı tarayıcılarda CORS kısıtlamasına takılabilir. Bu durumda basit bir yerel sunucu kullanın:

```bash
# Python 3 ile:
python3 -m http.server 8000
# Ardından tarayıcıda: http://localhost:8000
```

---

## Veri Kaynağı

Hava durumu verileri **Open-Meteo** açık kaynak API'sinden alınmaktadır:
- Coğrafi koordinat sorgulama: `https://geocoding-api.open-meteo.com/v1/search`
- Hava durumu tahmini: `https://api.open-meteo.com/v1/forecast`

API ücretsizdir, kayıt gerektirmez ve ticari amaçlı kullanımda [Open-Meteo lisansı](https://open-meteo.com/en/terms) geçerlidir.
