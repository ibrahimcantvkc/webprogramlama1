> **Yasal Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı hazırlanmıştır. Orijinal dokümantasyon kaynakları (MDN Web Docs vb.) kendi orijinal lisanslarına (CC BY-SA) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Soru-Cevap: Extension Modules – Gelişmiş JavaScript Nesneleri, İstemci Tarafı API'leri ve Asenkron JavaScript

**Takım:** Koza  
**Ders:** Web Programlama I  
**Modül:** 06 – Extension Modules (1. Takım)  
**Sorumlu:** Sümeyra Karaca (@sumeyra-karaca)

---

## Bölüm 1: Sorular

**Soru 1 – Modül: Gelişmiş JavaScript Nesneleri (Prototip Zinciri)**

Aşağıdaki kodu inceleyin:

```js
function Araba(marka) {
  this.marka = marka;
}
Araba.prototype.calis = function () {
  return this.marka + " çalışıyor!";
};
const bmw = new Araba("BMW");
console.log(bmw.calis());
```

`bmw.calis()` çağrısı nasıl çalışır? JavaScript motoru `calis` metodunu nerede bulur? Prototip zinciri açısından açıklayın.

---

**Soru 2 – Modül: Gelişmiş JavaScript Nesneleri (Class & Encapsulation)**

```js
class BankaHesabi {
  #bakiye;
  constructor(baslangic) {
    this.#bakiye = baslangic;
  }
  para_yatir(miktar) {
    if (miktar > 0) this.#bakiye += miktar;
  }
  bakiye_sorgula() {
    return this.#bakiye;
  }
}
const hesap = new BankaHesabi(1000);
hesap.para_yatir(500);
console.log(hesap.bakiye_sorgula()); // ?
console.log(hesap.#bakiye);          // ?
```

`hesap.bakiye_sorgula()` ve `hesap.#bakiye` satırlarının sonuçlarını tahmin edin ve nedenini kapsülleme (encapsulation) kavramıyla açıklayın.

---

**Soru 3 – Modül: İstemci Tarafı Web API'leri (Client-side Storage)**

Bir e-ticaret sitesi yapıyorsunuz. Kullanıcının alışveriş sepetine eklediği ürünlerin, tarayıcı sekmesi kapatılıp yeniden açılsa bile kaybolmamasını istiyorsunuz. Hangi Web Storage API'sini tercih edersiniz (`localStorage` mi, `sessionStorage` mi) ve neden? İki API arasındaki temel farkı da belirtin.

---

**Soru 4 – Modül: İstemci Tarafı Web API'leri (Fetch & Asenkron)**

```js
async function hava_getir(sehir) {
  const url = `https://api.example.com/weather?city=${sehir}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("HTTP " + response.status);
  return await response.json();
}
```

Bu fonksiyon bir hava durumu API'sinden veri çekiyor. `await fetch(url)` satırı çalışırken ana sayfa (kullanıcı arayüzü) neden donmaz? JavaScript'in asenkron çalışma modelini ve Event Loop'u kullanarak açıklayın.

---

**Soru 5 – Modül: Asenkron JavaScript (Promise durumları)**

Bir `Promise` nesnesinin 3 temel durumu (state) nedir? Aşağıdaki kod parçasını kullanarak her durumun ne zaman oluştuğunu açıklayın:

```js
const islem = new Promise((resolve, reject) => {
  const basari = true;
  if (basari) {
    resolve("İşlem başarılı!");
  } else {
    reject("İşlem başarısız!");
  }
});
```

---

## Bölüm 2: Cevaplar

**Cevap 1:**

`bmw.calis()` çağrısı yapıldığında JavaScript motoru önce `bmw` nesnesinin kendi özelliklerine bakar. Nesnenin yalnızca `marka` özelliği vardır, `calis` yoktur. Motor ardından **prototip zincirine** tırmanır: `bmw.__proto__` → `Araba.prototype`. `calis` metodu burada tanımlıdır, bu yüzden çalıştırılır ve `"BMW çalışıyor!"` döner. Zincirin sonuna (`Object.prototype → null`) ulaşılsaydı `TypeError` fırlatılırdı.

---

**Cevap 2:**

- `hesap.bakiye_sorgula()` → `1500` döner. Sınıfın public metodu olan `bakiye_sorgula()` özel alana (`#bakiye`) nesnenin kendi içinden erişerek değeri döndürebilir.  
- `hesap.#bakiye` → `SyntaxError` fırlatır. `#bakiye` bir **özel alan** (private field) olduğundan sınıfın dışından erişilemez. Bu, **kapsülleme** prensibinin JavaScript'teki somut uygulamasıdır: nesnenin iç durumu dışarıya kapatılır; yalnızca tanımlanmış public metodlar aracılığıyla erişilir.

---

**Cevap 3:**

**`localStorage`** tercih edilmelidir.  

| Özellik | `localStorage` | `sessionStorage` |
|---|---|---|
| Veri kalıcılığı | Tarayıcı kapatılsa bile kalır | Sekme/oturum kapanınca silinir |
| Kapsam | Aynı origin'deki tüm sekmeler | Yalnızca açık sekme |

Alışveriş sepeti verilerinin sekme kapatıldıktan sonra da saklanması gerektiği için `localStorage` seçilmelidir. `sessionStorage`'da saklanan veriler sekme kapatıldığında kaybolur, bu da sepet için kabul edilemezdir.

---

**Cevap 4:**

JavaScript tek iş parçacıklı (single-threaded) çalışır; ancak **Event Loop** sayesinde uzun süren işleri bloklamadan yönetir.  

`await fetch(url)` satırına gelindiğinde:  
1. HTTP isteği tarayıcının ağ katmanına devredilir (asenkron).  
2. `async` fonksiyon askıya alınır (suspend) ama **ana iş parçacığı serbest kalır**.  
3. Kullanıcı arayüzü (kaydırma, tıklama vb.) kesintisiz çalışmaya devam eder.  
4. Ağdan yanıt geldiğinde Event Loop bu olayı callback kuyruğundan alır ve fonksiyon kaldığı yerden devam eder.

Bu yüzden hava durumu verisi yüklenirken sayfa donmaz.

---

**Cevap 5:**

Bir `Promise` 3 durumda olabilir:

| Durum | Açıklama | Örnekteki karşılığı |
|---|---|---|
| **Pending** (Beklemede) | İşlem henüz tamamlanmadı | `new Promise(...)` çalıştırıldığı an |
| **Fulfilled** (Başarıyla tamamlandı) | `resolve()` çağrıldı | `basari = true` ise |
| **Rejected** (Reddedildi / Başarısız) | `reject()` çağrıldı | `basari = false` ise |

Örnekte `basari = true` olduğu için Promise `Fulfilled` durumuna geçer ve değer olarak `"İşlem başarılı!"` döner. `basari = false` olsaydı `Rejected` durumuna geçerdi.
