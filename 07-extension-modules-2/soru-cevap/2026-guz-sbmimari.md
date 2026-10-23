> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında eğitim amaçlı derlenmiştir. Orijinal dokümantasyon kaynakları kendi lisanslarına tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Soru-Cevap (QA) ve Kod Denetimi — Vize ve Mülakat Soruları

**Ders:** Web Programlama I  
**Modül:** 07-extension-modules-2 (Extension Modules — 2. Grup)  
**Konu:** Web Forms, FormData ve Constraint Validation API  
**Takım:** Ş.B. Mimari  
**Ekip:** Yaren Soysal, Turan Tosun, Musa Korkut, Mert Özsoy  

> **Nasıl çalışıyoruz?** Her soruda **kasıtlı hatalı ya da tuzaklı bir kod** yer alır. Göreviniz, vizedeki gibi kodu kafanızda çalıştırıp (*mental execution*) ne olacağını ve **nedenini** bulmaktır.  
> **Zorluk:** ⭐ Kolay · ⭐⭐ Orta · ⭐⭐⭐ Zor

---

## Sorular ve Çözümleri

### Soru 1 — Hiç Çalışmayan Submit ⭐⭐⭐

```html
<form id="f">
  <input id="ad" name="ad" required>
  <button type="submit">Gönder</button>
</form>

<script>
  document.getElementById("f").addEventListener("submit", () => {
    console.log("gitti");
  });
</script>
```

**Soru:** Kutu boş bırakılıp butona basıldığında konsola `"gitti"` yazılır mı? Bunun yerine hangi olay tetiklenir?

* **Cevap:** Yazılmaz. Formda `novalidate` özniteliği olmadığı için tarayıcı yerleşik doğrulamaya takılır ve `submit` olayı hiç tetiklenmez. Bunun yerine geçersiz form elemanı üzerinde `invalid` olayı tetiklenir ve tarayıcı varsayılan hata balonunu gösterir.
* **Kanıt / Canlı Gösterim:** Kutuyu boş bırakıp butona basıldığında konsola `"gitti"` yazılmaz. Giriş alanına `ad.addEventListener("invalid", () => console.log("invalid"))` eklendiğinde konsola `"invalid"` yazıldığı görülür.
* **İpuçları:** `novalidate` olan formlarda `submit` her zaman tetiklenir. Doğrulama kontrolünün JavaScript tarafında `form.checkValidity()` ile yapılması gerekir.
* **Düzeltme:**
  ```html
  <form id="f" novalidate>...</form>
  <script>
    document.getElementById("f").addEventListener("submit", (e) => {
      if (!e.target.checkValidity()) {
        e.preventDefault();
      }
    });
  </script>
  ```
* **Akılda Kalacak Cümle:** *"Doğrulama takılırsa submit hiç doğmaz."*

---

### Soru 2 — Geç Kalan `preventDefault` ⭐⭐⭐

```javascript
form.addEventListener("submit", async (e) => {
  await fetch("/api/kontrol");
  e.preventDefault();
});
```

**Soru:** Kullanıcı formu gönderdiğinde sayfa yenilenir mi? Neden?

* **Cevap:** Evet, sayfa yenilenir. Olay dinleyicisi ilk `await` ifadesinde senkron yürütmeyi durdurup mikro görev kuyruğuna geçer; tarayıcının ana iş parçacığı varsayılan form gönderimini (sayfa yenilemeyi) anında tetikler. `e.preventDefault()` sonradan çalıştığında artık etkisiz kalır.
* **Kanıt / Canlı Gösterim:** Butona basınca sayfa anında yenilenir ve `/api/kontrol` yanıtı ekranda işlenemez. `e.preventDefault()` satırı `await` çağrısının üstüne taşındığında sayfa yenilenmez.
* **İpuçları:** `e.preventDefault()` her zaman asenkron dinleyicinin **en başında**, herhangi bir `await`'ten önce senkron olarak çağrılmalıdır.
* **Düzeltme:**
  ```javascript
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    await fetch("/api/kontrol");
  });
  ```
* **Akılda Kalacak Cümle:** *"Frene `await`'ten önce bas; sonra basarsan araba çoktan gitmiştir."*

---

### Soru 3 — `FormData`'nın JSON Hali ⭐⭐⭐

```javascript
console.log(JSON.stringify(new FormData(form)));
```

**Soru:** Form tamamen doluyken konsola ne basılır? Neden?

* **Cevap:** `{}` (boş nesne) basılır. `FormData` nesnesinin alanları kendi sayılabilir (enumerable) özellikleri değildir; verileri dahili yuvalarında tutar ve yineleyici (iterator) protokolü üzerinden verir. `JSON.stringify` yalnızca nesnenin kendi sayılabilir özelliklerini serileştirdiği için boş nesne üretir.
* **Kanıt / Canlı Gösterim:** Konsolda `JSON.stringify(new FormData(form))` çalıştırıldığında `{}` döner. Aynı anda `[...new FormData(form)]` çalıştırıldığında tüm anahtar-değer çiftleri görünür.
* **İpuçları:** `FormData`'yı JSON'a dönüştürmek için önce `Object.fromEntries()` ile standart bir JavaScript nesnesine aktarmak gerekir. (Dosya alanları ikili veri olduğundan bu yöntemde de dosya adını alabilmek için özel işlem gerekir).
* **Düzeltme:**
  ```javascript
  const payloadObj = Object.fromEntries(new FormData(form));
  console.log(JSON.stringify(payloadObj, null, 2));
  ```
* **Akılda Kalacak Cümle:** *"FormData bir bavuldur; JSON.stringify içini değil, yalnızca dışını görür."*

---

### Soru 4 — Hangi Anahtarlar Gider? ⭐⭐⭐

```html
<form id="f">
  <input name="a" value="1">
  <input name="b" value="2" disabled>
  <input name="c" value="3" readonly>
  <input value="4">
  <input name="d" type="checkbox" value="5">
</form>
```

**Soru:** Checkbox işaretlenmemiştir. `new FormData(document.getElementById("f"))` hangi anahtarları içerir?

* **Cevap:** Yalnızca `a` ve `c` anahtarlarını içerir.
  * `b`: `disabled` olduğu için form gönderimine katılmaz.
  * 4. input: `name` özniteliği olmadığı için veri seti oluşturamaz.
  * `d`: İşaretlenmemiş (`unchecked`) onay kutuları form verilerine dahil edilmez.
  * `c`: `readonly` alanlar düzenlenemez ancak form verileriyle birlikte **sunucuya iletilir**.
* **Kanıt / Canlı Gösterim:** Konsolda `[...new FormData(document.getElementById("f")).keys()]` çalıştırıldığında `["a", "c"]` çıktısı alınır.
* **İpuçları:** Formla veri göndermek için `name` şarttır ve eleman `disabled` olmamalıdır. Kullanıcının değiştiremediği ama sunucuya gitmesi gereken değerler için `disabled` yerine `readonly` kullanılmalıdır.
* **Akılda Kalacak Cümle:** *"İsmi yoksa, kapalıysa (`disabled`) ya da işaretsizse sunucu seni duymaz."*

---

### Soru 5 — Hiç Temizlenmeyen Hata ⭐⭐⭐

```javascript
input.addEventListener("input", () => {
  if (input.value.length < 3) input.setCustomValidity("Çok kısa");
});
```

**Soru:** Kullanıcı önce `ab`, sonra alanı `abcd` olacak şekilde düzeltiyor. Form gönderilebilir mi? Neden?

* **Cevap:** Gönderilemez. `setCustomValidity("Mesaj")` ile atanan özel hata mesajı, açıkça `setCustomValidity("")` (boş dize) yapılarak temizlenene kadar eleman üzerinde kalır. Kullanıcı değeri `abcd` yaparak uzunluk koşulunu sağlasa bile `input.validity.customError` değeri `true` kalmaya devam eder ve form geçersiz sayılır.
* **Kanıt / Canlı Gösterim:** `ab` yazıp ardından `abcd` yazarak form gönderilmeye çalışıldığında tarayıcı hâlâ "Çok kısa" hata baloncuğunu gösterir. Konsolda `input.validity.customError` kontrol edildiğinde `true` döner.
* **İpuçları:** `setCustomValidity()` yalnızca hata ekler; koşul düzeldiğinde hatayı kendiliğinden silmez. Doğrulama başarılı olduğunda mutlaka boş dizeyle sıfırlanmalıdır.
* **Düzeltme:**
  ```javascript
  input.addEventListener("input", () => {
    input.setCustomValidity(input.value.length < 3 ? "Çok kısa" : "");
  });
  ```
* **Akılda Kalacak Cümle:** *"setCustomValidity yapışkandır; koşul sağlandığında temizlemeyi unutma."*

---

## Hızlı Başvuru Tablosu

| # | Soru Başlığı | Konu / Alan | Zorluk | Kilit Kavram |
|:---:|:---|:---|:---:|:---|
| **1** | Hiç Çalışmayan Submit | Olay Yönetimi / Constraint API | ⭐⭐⭐ | `invalid` olayı, `submit` tetiklenmez |
| **2** | Geç Kalan `preventDefault` | Asenkron JS / Olay Döngüsü | ⭐⭐⭐ | `await` öncesi senkron `preventDefault()` |
| **3** | `FormData`'nın JSON Hali | FormData API & Serialization | ⭐⭐⭐ | `JSON.stringify` boş nesne, `Object.fromEntries` |
| **4** | Hangi Anahtarlar Gider? | Form Submitting Standartları | ⭐⭐⭐ | `disabled`, `name` eksikliği, işaretsiz checkbox |
| **5** | Hiç Temizlenmeyen Hata | Constraint Validation API | ⭐⭐⭐ | `setCustomValidity("")` ile hata sıfırlama |
