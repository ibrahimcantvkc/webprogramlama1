> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında eğitim amaçlı derlenmiştir. Orijinal dokümantasyon kaynakları kendi lisanslarına tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Soru-Cevap (QA) ve Kod Denetimi — İleri Düzey Vize, Mülakat ve Jüri Soruları

**Ders:** Web Programlama I  
**Modül:** 07-extension-modules-2 (Extension Modules — 2. Grup)  
**Konu:** Web Forms, Constraint Validation API, HTTP İletişimi ve Client-Side Toolchain (Node/npm, Vite, Bundlers)  
**Takım:** Ş.B. Mimari  
**Ekip:** Musa Korkut (Çeviri), Mert Özsoy (Uygulama & Kod), Yaren Soysal (Sunum), Turan Tosun (Soru-Cevap) 

> **Nasıl çalışıyoruz?** Bu sorular; çevirimizi baştan sona okumayan, sunumumuzu dinlemeyen ve stüdyo uygulamamızı derinlemesine incelemeyen kişilerin genel-geçer tahminlerle **asla doğru yanıtlayamayacağı**, MDN standartları ve modern derleme ekosistemine dayalı **kasıtlı tuzaklı ve derin mimari senaryolardan** oluşur. Göreviniz, kodu zihninizde çalıştırıp (*mental execution*) tarayıcının ve derleme araçlarının perde arkasında ne yaptığını açıklamaktır.  
> **Zorluk:** ⭐⭐⭐⭐⭐ İleri Düzey (Senior / Mülakat Seviyesi)

---

## Sorular ve Çözümleri

### Soru 1 — Dosya Yükleme Sabotajı: `enctype` Eksikliği ve `fetch`'te `Content-Type` Tuzağı ⭐⭐⭐⭐⭐
*Kapsam: MDN Çevirisi (Form Verilerinin Gönderilmesi) & Sunum (HTTP Request Mimarisi)*

Bir yazılımcı sunucuya kullanıcı avatarı yüklemek için aşağıdaki HTML formunu hazırlar:

```html
<form id="uploadForm" action="/api/avatar" method="POST">
  <input type="text" name="kullanici" value="mert_ozsoy">
  <input type="file" name="profil_foto">
  <button type="submit">Fotoğrafı Yükle</button>
</form>
```

Kullanıcı bir PNG dosyası seçip formu gönderdiğinde, sunucu tarafında `req.body.kullanici` başarıyla okunurken dosya hiçbir şekilde sunucuya ulaşmaz (`req.files` boş/tanımsız gelir).

Geliştirici sorunu çözmek için JavaScript ile `fetch` kullanmaya karar verir ve kodu şu şekilde günceller:

```javascript
const form = document.getElementById("uploadForm");
const formData = new FormData(form);

fetch("/api/avatar", {
  method: "POST",
  headers: {
    "Content-Type": "multipart/form-data" // <-- Geliştirici buraya ekledi!
  },
  body: formData
});
```

Ancak bu kez sunucu `400 Bad Request: Malformed multipart body (missing boundary)` hatası fırlatır ve istek tamamen çöker.

**Soru:**
1. HTML formunda dosyanın ikili (binary) içeriğinin sunucuya gitmemesinin sebebi nedir? Tarayıcının varsayılan davranışı nasıldır?
2. `fetch` isteğine elle `"Content-Type": "multipart/form-data"` başlığı eklendiğinde istek neden çöker? Tarayıcının perde arkasında üretmesi gereken hayati parametre nedir ve bu hata nasıl çözülür?

* **Cevap:**
  1. `<form>` etiketinde `enctype="multipart/form-data"` özniteliği açıkça belirtilmemiştir. Formların varsayılan kodlama türü `application/x-www-form-urlencoded`'dır. Bu format ikili dosya verilerini paketleyemez; yalnızca dosyanın adını düz metin dize olarak gövdeye ekler. Bu nedenle dosyanın kendisi sunucuya asla iletilmez.
  2. Bir `fetch` isteğinde gövde (`body`) olarak `FormData` nesnesi verildiğinde, tarayıcı arka planda otomatik olarak her isteğe özel rastgele bir sınır dizesi (*boundary*) üretir (Örn: `boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW`). Sunucu çok parçalı gövdedeki alanları ve dosyaları bu `boundary` belirteçlerini okuyarak ayrıştırır. Eğer geliştirici `headers` içinde `"Content-Type": "multipart/form-data"` başlığını elle yazarsa, tarayıcının ekleyeceği `boundary` parametresini ezmiş olur. Sunucu sınırı bulamadığı için paketi açamaz ve hata fırlatır.
* **Düzeltme:**
  HTML için: `<form ... enctype="multipart/form-data">` eklenmelidir.  
  JavaScript `fetch` için: `headers` objesinden `Content-Type` tamamen silinmelidir; tarayıcı `FormData` verildiğinde `boundary` ile birlikte başlığı kendisi eksiksiz oluşturur:
  ```javascript
  fetch("/api/avatar", {
    method: "POST",
    body: formData // headers içinde Content-Type ASLA elle tanımlanmaz!
  });
  ```
* **Akılda Kalacak Cümle:** *"FormData kullanırken Content-Type başlığına dokunma; boundary tarayıcının imzasıdır, ezersen paket açılmaz."*

---

### Soru 2 — `package-lock.json` İllüzyonu ve Semantic Versioning Sürüm Krizi ⭐⭐⭐⭐⭐
*Kapsam: MDN Çevirisi (Understanding Client-Side Tools) & Sunum (Node/npm Ekosistemi)*

Bir ekip `package.json` dosyasında form doğrulama kütüphanesini şu şekilde tanımlar:

```json
{
  "dependencies": {
    "super-validator": "^2.4.1"
  }
}
```

Geliştirici A kendi bilgisayarında projeyi kurup test eder ve her şey kusursuz çalışır. Bir hafta sonra Geliştirici B depodan projeyi klonlar, temiz bir başlangıç yapmak amacıyla `package-lock.json` dosyasını silip `npm install` çalıştırır. Ancak uygulama derlenirken kritik bir fonksiyon hatasıyla çöker. Yapılan incelemede, paket yazarının dün `2.5.0` sürümünü yayınladığı ve bu sürümde bir metodun imzasını değiştirdiği görülür.

**Soru:**
1. `^` (caret) ve `~` (tilde) sembollerinin tam farkı nedir? `^2.4.1` tanımı `2.5.0` sürümünün indirilmesine neden izin vermiştir? Paket `3.0.0` olsaydı iner miydi?
2. Profesyonel CI/CD derleme hatlarında ve ekip çalışmalarında bu tür sürüm uyuşmazlığı facialarını matematiksel olarak imkânsız kılmak için `npm install` yerine HANGİ standart npm komutu çalıştırılmalıdır ve neden?

* **Cevap:**
  1. SemVer (Semantic Versioning - `MAJOR.MINOR.PATCH`) standardında:
     - `^` (caret / şapka): **Major sürüm hariç** (ilk hane sabit kalmak şartıyla) en son Minor ve Patch güncellemelerine (`>= 2.4.1 < 3.0.0`) otomatik izin verir. Bu sebeple `2.5.0` sürümü kurallara uygundur ve otomatik çekilmiştir. Ancak `3.0.0` (kırıcı değişiklik / breaking change) çekilmezdi.
     - `~` (tilde / yaklaşık): Yalnızca **Patch** güncellemelerine (`>= 2.4.1 < 2.5.0`) izin verir; `2.5.0` sürümünün inmesini engellerdi.
  2. Ekiplerde ve CI/CD ortamlarında `npm install` ASLA çalıştırılmamalıdır; yerine **`npm ci`** (*Clean Install*) komutu çalıştırılmalıdır.
     - `npm ci`, `package.json`'daki esnek aralıkları (`^`, `~`) **tamamen yok sayar**.
     - Yalnızca `package-lock.json` içinde kilitlenmiş kesin sürümleri bayt bayt indirir.
     - `node_modules` klasörünü baştan silip sıfırdan kurar.
     - Eğer `package.json` ile `package-lock.json` arasında uyuşmazlık varsa hata fırlatarak çalışmayı durdurur.
* **Düzeltme:**
  Sürümleri kilitlemek için `package-lock.json` asla silinmemeli veya `.gitignore`'a eklenmemeli, sunucularda ve yeni kurulumlarda şu komut çalıştırılmalıdır:
  ```bash
  npm ci
  ```
* **Akılda Kalacak Cümle:** *"Geliştirme yaparken `npm install`, canlıya ve pipeline'a giderken `npm ci`."*

---

### Soru 3 — `required` Yokken `pattern` ve `minlength` İllüzyonu ⭐⭐⭐⭐⭐
*Kapsam: Canlı Uygulamamız (DevOps Studio ValidityState HUD) & MDN Constraint Validation API*

Geliştirici, stüdyo uygulamamızdaki sunucu kodu giriş alanını şu şekilde kodlar:

```html
<form id="serverForm">
  <input type="text" id="srvCode" name="srvCode" 
         pattern="^SRV-[0-9]{4}$" 
         minlength="8" 
         maxlength="8">
  <button type="submit" id="btnSubmit">Deploy Et</button>
</form>

<script>
  const srv = document.getElementById("srvCode");
  console.log("patternMismatch:", srv.validity.patternMismatch);
  console.log("tooShort:", srv.validity.tooShort);
  console.log("valid:", srv.validity.valid);
</script>
```

Kullanıcı giriş kutusunu **hiçbir şey yazmadan tamamen boş bırakır** ve "Deploy Et" butonuna tıklar.

**Soru:**
1. Konsolda yazdırılan `patternMismatch`, `tooShort` ve `valid` boolean değerleri sırasıyla ne olur?
2. Tarayıcı formun gönderilmesini engeller mi, yoksa form başarıyla sunucuya gönderilir mi? Neden?

* **Cevap:**
  1. Konsol çıktıları:
     - `patternMismatch:` **`false`**
     - `tooShort:` **`false`**
     - `valid:` **`true`**
  2. Form tarayıcı tarafından engellenmez; **doğrudan ve başarıyla gönderilir!**
  * **Neden? (Kritik MDN Kuralı):**
    HTML5 Constraint Validation spesifikasyonuna göre `pattern`, `minlength`, `maxlength`, `min`, `max` ve `step` kısıtlamaları **yalnızca alan boş değilse** işletilir. Eğer alanda `required` özniteliği tanımlanmamışsa, boş bir girdi her zaman geçerli kabul edilir. Çeviriyi dikkatle okumayan veya uygulamamızdaki ValidityState HUD panelinde boş alanı test etmeyen biri, "Regex uymuyor ve 8 karakterden kısa, kesinlikle hata verir" diyerek yanılır.
* **Düzeltme:**
  Boş bırakılmasını da engellemek için `required` özniteliği mutlaka eklenmelidir:
  ```html
  <input type="text" id="srvCode" name="srvCode" 
         pattern="^SRV-[0-9]{4}$" 
         minlength="8" 
         maxlength="8" 
         required>
  ```
* **Akılda Kalacak Cümle:** *"Kilit (`pattern/minlength`) tek başına kapıyı tutmaz; anahtar `required` özniteliğidir."*

---

### Soru 4 — Çoklu Onay Kutuları ve `Object.fromEntries` Veri Buharlaşması ⭐⭐⭐⭐⭐
*Kapsam: Canlı Uygulamamız (Console Payload Inspector) & Web Forms FormData Mimarisi*

Uygulamamızdaki sistem mimarisinde aktif edilecek mikro servisleri seçmek için aynı ada (`name`) sahip çoklu onay kutuları kullanılmıştır:

```html
<form id="techForm">
  <input type="checkbox" name="services" value="Auth-API" checked>
  <input type="checkbox" name="services" value="Payment-Gateway" checked>
  <input type="checkbox" name="services" value="Logger-Service" checked>
  <button type="submit">Konfigüre Et</button>
</form>

<script>
  const form = document.getElementById("techForm");
  const formData = new FormData(form);
  const jsonPayload = Object.fromEntries(formData);
  console.log(jsonPayload);
</script>
```

Üç onay kutusu da işaretli durumdayken JavaScript kodu çalıştırılır.

**Soru:**
1. `console.log(jsonPayload)` konsola tam olarak ne basar?
2. `Auth-API` ve `Payment-Gateway` değerlerine ne olmuştur? Bu veri kaybını önleyerek `services` alanını bir dizi (`["Auth-API", "Payment-Gateway", "Logger-Service"]`) halinde eksiksiz yakalamak için `FormData` nesnesinin hangi metodu kullanılmalıdır?

* **Cevap:**
  1. Konsola yalnızca son seçilen değer basılır:
     ```json
     { "services": "Logger-Service" }
     ```
  2. `Auth-API` ve `Payment-Gateway` sessizce **ezilmiş (overwrite) ve kaybolmuştur**.  
     *Neden?* `Object.fromEntries()` yinelenebilir anahtar-değer çiftlerini standart bir JavaScript nesnesine dönüştürür. Standart JS nesnelerinde her anahtar tekildir (unique). Aynı `services` anahtarı ardışık olarak geldiğinde nesne önceki değerin üzerine yazar.
* **Düzeltme:**
  Aynı ada sahip çoklu alanları (checkbox, `<select multiple>`, dosya listeleri) kayıpsız almak için `formData.getAll()` yöntemi kullanılmalıdır:
  ```javascript
  const formData = new FormData(form);
  const jsonPayload = {
    services: formData.getAll("services") // Tüm işaretli değerleri dizi olarak döner!
  };
  console.log(jsonPayload);
  // Çıktı: { services: ["Auth-API", "Payment-Gateway", "Logger-Service"] }
  ```
* **Akılda Kalacak Cümle:** *"fromEntries son geleni tutar, öncekileri yutar; çoklu seçimde ilacın `formData.getAll()`'dır."*

---

### Soru 5 — Client-Side Build Toolchain: CommonJS vs ESM ve Tree-Shaking Bariyeri ⭐⭐⭐⭐⭐
*Kapsam: Sunumumuz (Derleme Araçları & Bundler Mimarisi) & MDN Çevirisi (Client-side Tooling)*

Bir web uygulamasında form doğrulama yardımcı fonksiyonlarını çağırmak için iki farklı modül sözdizimi karşılaştırılmaktadır:

```javascript
// Senaryo A (CommonJS):
const { validateIPv4 } = require("./network-tools.js");
validateIPv4("10.0.0.1");

// Senaryo B (ES Modules):
import { validateIPv4 } from "./network-tools.js";
validateIPv4("10.0.0.1");
```

`network-tools.js` dosyası 350 KB boyutundadır ve içinde sistem doğrulaması yapan 100 farklı ağır fonksiyon bulunmaktadır. Proje Vite / Rollup derleyicisi ile `npm run build` komutu çalıştırılarak yayına hazırlanır (`dist/bundle.js`).

**Soru:**
1. Nihai üretim paketinde (`dist/bundle.js`) Senaryo A ve Senaryo B arasında dosya boyutu açısından nasıl bir devasa fark oluşur? Bu modern optimizasyon mekanizmasının adı nedir?
2. Neden Senaryo A'da bu optimizasyon yapılamazken Senaryo B'de bundler kullanılmayan 99 fonksiyonu paketten tamamen atabilir? (Çalışma zamanı vs Derleme zamanı farkı nedir?)

* **Cevap:**
  1. Senaryo B'de üretim paketi yalnızca birkaç yüz bayt olurken, Senaryo A'da 350 KB'lık dosyanın tamamı pakete gömülür. Bu optimizasyon tekniğinin adı **Tree-Shaking** (Ölü kod ayıklama / Dead Code Elimination)'dir.
  2. *Neden?*
     - **CommonJS (`require`):** Dinamiktir (*dynamic import*). Kodun çalışma zamanında (`runtime`), hatta bir `if` koşulu ya da döngü içinde (`if (debug) require(...)`) çağrılabilir. Derleyici (Vite/Rollup/Webpack) derleme anında o fonksiyonun kesin olarak kullanılıp kullanılmayacağını garanti edemez; bu nedenle güvenli tarafta kalmak için tüm dosyayı pakete dahil etmek zorundadır.
     - **ES Modules (`import / export`):** Statiktir (*static module structure*). `import` ifadeleri yalnızca dosyanın en üst seviyesinde yer alabilir ve koşula bağlanamaz. Derleyici, kod hiç çalışmadan önce Soyut Sözdizim Ağacı (AST - *Abstract Syntax Tree*) analizi yaparak hangi fonksiyonların çağrıldığını, hangilerinin ise hiç kullanılmadığını kesin olarak belirler ve kullanılmayan fonksiyonları ağaçtan silkeler (*shakes the tree*).
* **Düzeltme:**
  Modern web derleme araçlarında ağaç budama (tree-shaking) performansından tam faydalanmak için daima ES Modules (`import/export`) standartları kullanılmalı ve `package.json` dosyasına `"sideEffects": false` direktifi eklenmelidir.
* **Akılda Kalacak Cümle:** *"CommonJS derleyiciyi kör eder; ağacı sallayıp gereksiz yaprakları dökmek istiyorsan ESM şarttır."*

---

## Hızlı Değerlendirme ve Konu Matrisi

| # | Soru Başlığı | Test Edilen Alan | Kaynak Odak Noktası | Tuzak Mekanizması |
|:---:|:---|:---|:---|:---|
| **1** | Dosya Yükleme Sabotajı | `enctype` & HTTP Request | Çeviri (Form Gönderimi) & Sunum | `fetch`'te `Content-Type` yazarak `boundary`'yi ezmek |
| **2** | `package-lock.json` İllüzyonu | Node/npm, SemVer, CI/CD | Çeviri (Client-side Tools) & Sunum | `^` sembolünün kaza yaptırması, `npm ci` bilmemek |
| **3** | `required` Yokken `pattern` | Constraint Validation API | Canlı Uygulama (HUD) & MDN | `required` yoksa boş alanda regex denetlenmez (`valid: true`) |
| **4** | Çoklu Checkbox Buharlaşması | `FormData` & Veri Serileştirme | Canlı Uygulama (Payload Inspector) | `Object.fromEntries` aynı adlı anahtarları ezer; çözüm: `getAll()` |
| **5** | Tree-Shaking Bariyeri | Bundlers (Vite/Rollup) & Toolchain | Sunum (Client-side Tools) & Mimari | CommonJS dinamik olduğu için tree-shaking yapılamaz; ESM statiktir |
