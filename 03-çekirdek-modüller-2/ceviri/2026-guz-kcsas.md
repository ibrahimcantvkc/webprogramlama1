> **Uyarı:** Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# MDN Web Docs Resmi Dokümantasyon Çevirisi: CSS (Basamaklı Stil Şablonları) Rehberi

* **Orijinal Dokümantasyon Kaynakları:**
  * *MDN - CSS: Cascading Style Sheets (https://developer.mozilla.org/en-US/docs/Web/CSS)*
  * *MDN - CSS First Steps (https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)*
  * *MDN - CSS Building Blocks (https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks)*
  * *MDN - CSS Layout (https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)*
* **Çeviri Ekibi:** KCŞ A.Ş. (Core Modules - 2. Grup | Merve Derya Kaya, Aleyna Cemal, Mustafa Şahin)

---

## Bölüm 1: CSS Nedir ve Nasıl Çalışır? (What is CSS & How CSS Works)

### 1.1. CSS'in Tanımı ve Amacı
CSS (Cascading Style Sheets - Basamaklı Stil Şablonları), HTML veya XML (SVG, MathML veya XHTML gibi XML lehçeleri dahil) ile yazılmış bir belgenin kullanıcıya nasıl sunulacağını tanımlamak için kullanılan bildirimsel (declarative) bir stil şablonu dilidir. CSS, açık web'in (Open Web) temel dillerinden biridir ve W3C (World Wide Web Consortium) spesifikasyonlarına göre tarayıcılar arasında standartlaştırılmıştır.

HTML bir web sayfasının anlamsal yapısını (başlıklar, paragraflar, veri tabloları, gömülü medya nesneleri) tanımlamak için kullanılırken; CSS bu elemanların ekranda, kağıt üzerinde, sesli okuyucularda veya diğer medya türlerinde nasıl görüneceğini belirler. İçerik (HTML) ile sunumun (CSS) birbirinden ayrılması (Separation of Concerns), modern web mimarisinin en temel prensibidir. Bu ayrım sayesinde aynı HTML belgesi, tek bir satır HTML koduna dokunulmadan farklı cihazlar ve ekran boyutları için tamamen farklı görsel düzenlerde sunulabilir.

### 1.2. Tarayıcı CSS'i Nasıl İşler? (DOM ve Render Tree Süreci)
Bir tarayıcı (browser) bir web sayfasını görüntülerken, belgenin içeriğini (HTML) ve stil bilgilerini (CSS) birleştirmek zorundadır. Tarayıcı bu işlemi aşağıdaki çok aşamalı ardışık düzen (pipeline) üzerinden gerçekleştirir:

1. **HTML'in Ayrıştırılması (Parsing HTML):** Tarayıcı sunucudan gelen ham HTML baytlarını okur ve bunları karakterlere, ardından belirteçlere (tokens) ve son olarak düğümlere (nodes) dönüştürür.
2. **DOM (Document Object Model) Ağacının Oluşturulması:** Tarayıcı, HTML içindeki her bir etiketi (element), özniteliği (attribute) ve metin parçasını bellekte ağaç yapısında bir veri modeline dönüştürür. DOM, belgenin tarayıcı belleğindeki canlı temsilidir ve CSS kurallarının hedeflediği ana yapıdır.
3. **CSS'in Yüklenmesi ve CSSOM Oluşturulması:** Tarayıcı HTML'i ayrıştırırken `<link>` etiketleriyle bağlanmış harici `.css` dosyalarını, `<style>` bloklarını veya satır içi (inline) stilleri tespit eder. CSS kuralları da ayrıştırılarak **CSSOM (CSS Object Model)** adı verilen ikinci bir ağaç yapısına dönüştürülür.
4. **Oluşturma Ağacı (Render Tree):** Tarayıcı, DOM ağacı ile CSSOM ağacını birleştirerek **Render Tree** (Oluşturma Ağacı) yapısını kurar. Bu ağaçta yalnızca ekranda görünür olacak düğümler yer alır (örneğin `display: none;` verilen elemanlar veya `<head>` etiketi Render Tree'ye dahil edilmez).
5. **Yerleşim (Layout / Reflow):** Tarayıcı, Render Tree içindeki her bir görünür düğümün ekran üzerindeki tam koordinatlarını (x, y) ve boyutlarını (genişlik, yükseklik) hesaplar.
6. **Boyama (Painting / Rasterization):** Son aşamada tarayıcı, hesaplanan kutuları gerçek piksellere dönüştürerek metinleri, renkleri, kenarlıkları, gölgeleri ve görselleri kullanıcının ekranına çizer.

```text
[HTML Belgesi] ---> HTML Ayrıştırıcı ---> [DOM Ağacı]      \
                                                            +---> [Render Tree] ---> [Layout] ---> [Painting (Ekran)]
[CSS Dosyası]  ---> CSS Ayrıştırıcı  ---> [CSSOM Ağacı]    /
```

### 1.3. Karşılaşılan Bilinmeyen CSS Kuralları Nasıl Ele Alınır?
Tarayıcılar yeni bir CSS özelliğini veya hatalı yazılmış bir değeri gördüklerinde programı çökertmezler. CSS spesifikasyonuna göre bir tarayıcı, anlamadığı veya desteklemediği bir özellik ya da değerle karşılaştığında o bildirimi **yok sayar (ignore)** ve bir sonraki CSS bildirimine geçer. Bu davranış, eski tarayıcıların yeni CSS özellikleriyle yazılmış modern siteleri bozulmadan açabilmesini (graceful degradation / progressive enhancement) sağlar.

```css
.kutu {
    width: 300px;
    width: calc(100% - 50px); /* Eski bir tarayıcı calc() desteklemiyorsa bu satırı atlar ve 300px değerini kullanır */
    hatali-ozellik: 10px;     /* Tarayıcı bu satırı tamamen yok sayar, diğer kurallar çalışmaya devam eder */
    background-color: #2563eb;
}
```

---

## Bölüm 2: CSS Sözdizimi, Seçiciler ve Belgeye Bağlama (Syntax & Selectors)

### 2.1. CSS Kural Kümesi (Ruleset) Yapısı
Bir CSS stil sayfası, birbiri ardına sıralanmış kural kümelerinden (rulesets) ve `@` kurallarından (at-rules) oluşur. Bir kural kümesinin tüm yapısına **kural (rule)** adı verilir ve şu bileşenleri içerir:

* **Seçici (Selector):** Kural kümesinin en başında yer alır. Belgede stil uygulanacak HTML elemanını veya eleman grubunu hedefler.
* **Bildirim Bloğu (Declaration Block):** Süslü parantezler (`{ ... }`) arasında kalan bölümdür. Bir veya daha fazla bildirim içerir.
* **Bildirim (Declaration):** `özellik: değer;` çiftinden oluşan tek bir kural satırıdır. Her bildirim mutlaka noktalı virgül (`;`) ile sonlandırılmalıdır.
* **Özellik (Property):** İnsan tarafından okunabilir bir tanımlayıcıdır (örneğin `font-size`, `background-color`, `margin`) ve seçilen elemanın hangi görsel özelliğinin değiştirileceğini belirtir.
* **Değer (Property Value):** İki nokta üst üste (`:`) işaretinden sonra gelir. Özelliğin tarayıcı tarafından nasıl işleneceğini belirten geçerli bir birim veya anahtar kelimedir.

### 2.2. CSS'in HTML'e Uygulanma Yöntemleri
MDN dokümantasyonuna göre CSS bir HTML belgesine üç farklı yöntemle entegre edilebilir:

1. **Harici Stil Şablonları (External Stylesheets):** En yaygın ve en profesyonel yöntemdir. Tüm CSS kuralları `.css` uzantılı ayrı bir dosyada toplanır ve HTML belgesinin `<head>` bloğu içerisinden `<link>` elemanı ile çağrılır. Birden fazla HTML sayfası aynı `.css` dosyasını referans alabilir; bu da kod tekrarını önler ve önbellekleme (caching) sayesinde performansı artırır.
   ```html
   <!DOCTYPE html>
   <html lang="tr">
   <head>
       <meta charset="UTF-8">
       <title>MDN CSS Dokümantasyonu</title>
       <link rel="stylesheet" href="styles.css">
   </head>
   <body>
       <h1>Merhaba CSS</h1>
   </body>
   </html>
   ```
2. **Dahili Stil Şablonları (Internal Stylesheets):** Harici bir dosya oluşturmak yerine, CSS kurallarının doğrudan HTML belgesinin `<head>` etiketi içerisindeki `<style>` bloğuna yazılmasıdır. Yalnızca tek bir sayfaya özgü stiller tanımlanacağında veya içerik yönetim sistemlerinde harici dosya erişimi olmadığında kullanılır.
3. **Satır İçi Stiller (Inline Styles):** Doğrudan tek bir HTML elemanının `style=""` özniteliği içerisine yazılan CSS bildirimleridir. Seçici içermez, yalnızca bildirim barındırır. Bakımı son derece zor olduğu ve içerik ile sunumu birbirine karıştırdığı için MDN tarafından zorunlu haller dışında kullanılması önerilmez.

### 2.3. Seçici Kategorileri (Selector Categories)
CSS'te elemanları hedeflemek için kullanılan seçiciler işlevlerine göre gruplandırılır:

* **Tür, Sınıf ve Kimlik Seçicileri (Type, Class, and ID Selectors):**
  * Tür seçicileri doğrudan HTML etiket adını hedefler (`h1`, `p`, `article`).
  * Sınıf seçicileri nokta (`.`) ile başlar ve `class` özniteliğine sahip tüm elemanları hedefler (`.card`, `.btn-primary`). Bir HTML elemanına boşluk bırakılarak birden fazla sınıf atanabilir.
  * Kimlik seçicileri diyez (`#`) ile başlar ve `id` özniteliğine sahip tekil elemanı hedefler (`#main-navigation`). Bir belgede aynı `id` değeri yalnızca bir kez kullanılabilir.
* **Öznitelik Seçicileri (Attribute Selectors):** Bir elemanı sahip olduğu HTML özniteliğine veya bu özniteliğin değerine göre seçer.
  ```css
  a[target="_blank"] {
      color: #d97706; /* Yeni sekmede açılan tüm bağlantıları hedefler */
  }
  input[type="email"] {
      border: 2px solid #2563eb; /* Yalnızca e-posta tipindeki input alanlarını seçer */
  }
  ```
* **Birleştiriciler (Combinators):** Elemanlar arasındaki hiyerarşik ilişkiyi kullanarak seçim yapar:
  * **Torun Seçici (Descendant Combinator - Boşluk ` `):** `article p` seçicisi, `<article>` elemanının içinde (kaç katman derinde olursa olsun) bulunan tüm `<p>` elemanlarını seçer.
  * **Çocuk Seçici (Child Combinator - `>`):** `ul > li` seçicisi, yalnızca `<ul>` elemanının doğrudan birinci derece alt elemanları (çocukları) olan `<li>` etiketlerini seçer.
  * **Bitişik Kardeş Seçici (Next-sibling Combinator - `+`):** `h1 + p` seçicisi, aynı ebeveyne sahip olan ve `<h1>` etiketinden hemen sonra gelen ilk `<p>` etiketini seçer.
  * **Genel Kardeş Seçici (Subsequent-sibling Combinator - `~`):** `h1 ~ p` seçicisi, `<h1>` etiketinden sonra gelen tüm kardeş `<p>` etiketlerini seçer.

---

## Bölüm 3: Basamaklama, Özgüllük ve Kalıtım (Cascade, Specificity, and Inheritance)

CSS'in adındaki **"Cascading" (Basamaklama)** kelimesi, bir HTML elemanına birden fazla CSS kuralı aynı anda etki ettiğinde ve bu kurallar birbiriyle çakıştığında tarayıcının hangi kuralı uygulayacağına nasıl karar verdiğini açıklayan algoritmadır.

### 3.1. Basamaklama Sırası (Cascade Order)
İki kural aynı elemanın aynı özelliğini değiştirmeye çalıştığında tarayıcı şu üç faktörü sırasıyla değerlendirir:
1. **Önem Derecesi (Importance):** `!important` bayrağı taşıyan bildirimler normal bildirimleri ezer.
2. **Özgüllük (Specificity):** Seçicinin ne kadar spesifik (özel) olduğu matematiksel bir ağırlıkla hesaplanır. Daha spesifik olan seçici kazanır.
3. **Kaynak Sırası (Source Order):** Eğer iki seçicinin önem derecesi ve özgüllük puanı birebir aynıysa, CSS dosyasında **en son (en altta)** yazılan kural geçerli olur.

### 3.2. Özgüllük Hesaplaması (Specificity Weighting)
Tarayıcı her seçiciye dört basamaklı bir ağırlık puanı (`İnline - ID - Class - Element`) verir:
* **Binler Basamağı (`1-0-0-0`):** HTML içindeki satır içi (`style=""`) stiller.
* **Yüzler Basamağı (`0-1-0-0`):** Seçici içindeki her bir `#id` seçicisi.
* **Onlar Basamağı (`0-0-1-0`):** Seçici içindeki her bir `.class`, `[attribute]` ve `:pseudo-class` (`:hover`, `:focus` vb.) seçicisi.
* **Birler Basamağı (`0-0-0-1`):** Seçici içindeki her bir HTML etiket adı (`div`, `p`, `h1`) ve `::pseudo-element` (`::before`, `::after`) seçicisi.
* Evrensel seçici (`*`) ve birleştiriciler (`>`, `+`, `~`) özgüllük puanına etki etmez (`0-0-0-0`).

```css
/* Özgüllük Puanı: 0-1-0-0 (1 adet ID) */
#ana-baslik {
    color: blue;
}

/* Özgüllük Puanı: 0-0-1-1 (1 adet etiket + 1 adet class) */
h1.baslik-stili {
    color: red;
}
/* Sonuç: 0-1-0-0 > 0-0-1-1 olduğu için başlık rengi Mavi (blue) olur. */
```

### 3.3. Kalıtım (Inheritance)
CSS'te bazı özellikler ebeveyn (parent) elemandan alt (child) elemanlara otomatik olarak miras kalır, bazıları ise kalmaz:
* **Miras Kalan Özellikler (Inherited Properties):** Metin ve tipografi ile ilgili özellikler (`color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`, `visibility`) alt elemanlara otomatik aktarılır. Örneğin `body { color: #333; font-family: sans-serif; }` yazıldığında sayfadaki tüm paragraf ve başlıklar bu yazı tipini ve rengi miras alır.
* **Miras Kalmayan Özellikler (Non-inherited Properties):** Kutu modeli ve yerleşim özellikleri (`width`, `height`, `margin`, `padding`, `border`, `background`, `display`, `position`) alt elemanlara miras **kalmaz**. (Eğer `border` miras kalsaydı, çerçeve verilen bir kutunun içindeki her kelime ve paragrafın etrafına da ayrı ayrı çerçeve çizilirdi.)
* Kalıtımı manuel olarak kontrol etmek için `inherit` (ebeveynden miras al), `initial` (tarayıcı varsayılanına dön) ve `unset` (doğal davranışına sıfırla) anahtar kelimeleri kullanılır.

---

## Bölüm 4: Kutu Modeli (The Box Model)

CSS'te her şey etrafında bir kutu varmış gibi işlenir. Kutu Modelini tam olarak anlamak, CSS ile karmaşık sayfa düzenleri kurmanın anahtarıdır.

### 4.1. Blok ve Satır İçi Kutular (Block and Inline Boxes)
CSS'te kutular dış görüntüleme davranışlarına (`display`) göre temel olarak ikiye ayrılır:

**Blok Kutular (`display: block` - örn: `<div>`, `<p>`, `<h1>`, `<section>`):**
* Bulundukları satırı tamamen kaplarlar ve kendilerinden sonra gelen elemanı bir alt satıra iterler.
* `width` ve `height` özellikleri tam olarak uygulanır.
* `padding`, `margin` ve `border` değerleri çevresindeki diğer elemanları hem yatayda hem dikeyde uzağa iter.
* Bir genişlik belirtilmezse, ebeveyn kapsayıcının `%100` genişliğini doldururlar.

**Satır İçi Kutular (`display: inline` - örn: `<span>`, `<a>`, `<strong>`, `<em>`):**
* Yeni bir satıra geçmezler; metin akışı içinde yan yana dizilirler.
* `width` ve `height` özellikleri **uygulanamaz** (yok sayılır).
* Dikey yönlü (`margin-top`, `margin-bottom`, `padding-top`, `padding-bottom`) boşluklar görsel olarak oluşsa da üstteki ve alttaki diğer satırları uzağa **itmez**; yalnızca yatay (`left`, `right`) boşluklar yanındaki elemanları iter.
* Hem yan yana dizilmek hem de `width`, `height` ve dikey boşluk özelliklerini kullanabilmek için **`display: inline-block`** değeri kullanılır.

### 4.2. Kutu Modelinin Katmanları ve `box-sizing` Mimarisi
Bir kutunun anatomisi içten dışa doğru dört katmandan oluşur:
1. **Content Box (İçerik Kutusu):** İçeriğin görüntülendiği alandır; `width` ve `height` ile boyutlandırılır.
2. **Padding Box (İç Boşluk Kutusu):** İçeriğin etrafını saran şeffaf boşluktur. Elemanın arka plan rengi (`background-color`) padding alanının da altına yayılır.
3. **Border Box (Kenarlık Kutusu):** İçeriği ve padding'i saran çerçevedir. `border-width`, `border-style` ve `border-color` ile biçimlendirilir.
4. **Margin Box (Dış Boşluk Kutusu):** En dış katmandır. Bu kutu ile diğer elementler arasında şeffaf bir boşluk bırakır. Arka plan rengi margin alanına yayılmaz.

**Standart Kutu Modeli (`content-box`) vs Alternatif Kutu Modeli (`border-box`):**
Varsayılan standart kutu modelinde (`box-sizing: content-box`), bir elemana verdiğiniz `width` değeri yalnızca **içerik (content)** genişliğini belirler. Toplam kaplanan genişliği bulmak için üzerine `padding` ve `border` değerleri eklenir:

```css
/* Standart Kutu Modeli (content-box) */
.standart-kutu {
    width: 350px;
    padding: 25px;
    border: 5px solid black;
    /* Ekranda kapladığı gerçek genişlik: 350 + (25*2) + (5*2) = 410px */
}
```

Bu durum responsive tasarımlarda hesaplamaları zorlaştırdığı için modern projelerde **Alternatif Kutu Modeli (`box-sizing: border-box`)** kullanılır. Bu modelde tanımlanan `width` değerinin içine `padding` ve `border` dahildir:

```css
/* Evrensel Border-Box Sıfırlaması */
*, *::before, *::after {
    box-sizing: border-box;
}

.modern-kutu {
    width: 350px;
    padding: 25px;
    border: 5px solid black;
    /* Ekranda kapladığı gerçek genişlik tam olarak 350px'tir (İçerik alanı otomatik 290px'e daralır) */
}
```

### 4.3. Dış Boşluk Çökmesi (Margin Collapsing)
MDN'de vurgulanan önemli bir davranış **Margin Collapsing** (Dış Boşluk Çökmesi) kuralıdır: Alt alta duran iki blok elemanın dikey dış boşlukları (`margin-bottom` ve `margin-top`) birbirine değdiğinde, bu iki değer toplanmaz; yalnızca **büyük olan** dış boşluk değeri uygulanır. Örneğin üstteki kutunun `margin-bottom: 50px` ve alttaki kutunun `margin-top: 30px` değeri varsa, iki kutu arasındaki mesafe `80px` değil, `50px` olur.

---

## Bölüm 5: Değerler, Birimler ve Renk Sistemleri (Values, Units, and Colors)

### 5.1. Mutlak ve Göreceli Uzunluk Birimleri
CSS'te boyutlandırma yaparken kullanılan birimler iki ana gruba ayrılır:

* **Mutlak Birimler (Absolute Length Units):** Başka hiçbir şeye bağlı olmayan, sabit fiziksel ölçü birimleridir. Ekranlarda en yaygın kullanılan mutlak birim **`px` (Piksel)** birimidir.
* **Göreceli Birimler (Relative Length Units):** Boyutunu başka bir elemanın yazı boyutuna veya tarayıcı penceresinin (viewport) genişliğine/yüksekliğine göre dinamik hesaplayan birimlerdir. Responsive tasarım için kritik öneme sahiptirler:
  * **`em`:** Elemanın kendi (veya ebeveyninin) `font-size` değerine göre ölçeklenir.
  * **`rem` (Root EM):** Doğrudan kök elemanın (`<html>`) `font-size` değerine göre ölçeklenir (tarayıcı varsayılanında `1rem = 16px`). İç içe geçmiş elemanlarda çarpan etkisi yaratmadığı için `em` birimine göre çok daha güvenli ve tutarlıdır.
  * **`%` (Yüzde):** Ebeveyn kapsayıcının ilgili boyutuna (örneğin genişliğine) oranla hesaplanır.
  * **`vw` ve `vh` (Viewport Width / Viewport Height):** Tarayıcı ekranının görünür genişliğinin (`1vw` = ekran genişliğinin %1'i) ve yüksekliğinin (`1vh` = ekran yüksekliğinin %1'i) yüzdebirini ifade eder.

### 5.2. Modern Renk Tanımlama Sistemleri ve CSS Değişkenleri
CSS'te renkler farklı renk uzayları kullanılarak tanımlanabilir:
* **Onaltılık (Hexadecimal) Gösterim:** `#RRGGBB` formatındadır (`#7c5cff`, `#24d6a3`).
* **RGB ve RGBA:** Kırmızı, Yeşil, Mavi kanalları (`0-255`) ve Alfa (saydamlık `0.0 - 1.0`) kanalından oluşur (`rgba(124, 92, 255, 0.8)`).
* **HSL ve HSLA:** Renk Özü (Hue `0-360°`), Doygunluk (Saturation `%`) ve Parlaklık (Lightness `%`) değerleriyle insan gözünün algısına en yakın renk paletlerini üretmeyi sağlar (`hsl(252, 100%, 68%)`).

**Özel Özellikler / CSS Değişkenleri (Custom Properties):**
Büyük ölçekli stil şablonlarında aynı renk veya boşluk değerlerini yüzlerce kez kopyalamak yerine, `--` önekiyle tanımlanan CSS değişkenleri kullanılır. Genellikle `:root` sözde sınıfında (yani `<html>` kök düzeyinde) tanımlanırlar ve `var()` fonksiyonu ile çağrılırlar.

```css
:root {
    --primary-color: #7c5cff;
    --bg-surface: #0b1020;
    --text-main: #f8fafc;
    --spacing-md: 1.5rem;
}

.card {
    background-color: var(--bg-surface);
    color: var(--text-main);
    padding: var(--spacing-md);
    border-left: 4px solid var(--primary-color, #3b82f6); /* İkinci parametre yedek (fallback) değerdir */
}
```

---

## Bölüm 6: Sözde Sınıflar ve Sözde Ögeler (Pseudo-classes & Pseudo-elements)

### 6.1. Sözde Sınıflar (Pseudo-classes - `:`)
Bir sözde sınıf, mevcut HTML elemanlarını belirli bir **durumdayken (state)** veya DOM ağacındaki **yapısal konumlarına** göre seçen anahtar kelimelerdir. Tek iki nokta üst üste (`:`) ile yazılırlar:

* **Kullanıcı Eylemi Sözde Sınıfları (User-action Pseudo-classes):**
  * `:hover` — Kullanıcı işaretçi cihazıyla (fare imleci) elemanın üzerine geldiğinde devreye girer.
  * `:focus` — Eleman klavye (`Tab` tuşu) veya tıklama yoluyla odak aldığında devreye girer (erişilebilirlik için kritik önem taşır).
  * `:active` — Eleman kullanıcı tarafından etkinleştirildiği (fare tuşuna basılı tutulduğu) anda uygulanır.
* **Yapısal Sözde Sınıflar (Structural Pseudo-classes):**
  * `:first-child` ve `:last-child` — Ebeveyn içerisindeki ilk veya son çocuk elemanı seçer.
  * `:nth-child(even)` / `:nth-child(odd)` — Tablo satırları veya listelerde çift/tek sıradaki elemanları seçerek şeritli görünüm (zebra striping) oluşturmayı sağlar.
  * `:not(seçici)` — Belirtilen seçiciyle eşleşmeyen elemanları hedefler (Olumsuzlama sözde sınıfı).

### 6.2. Sözde Ögeler (Pseudo-elements - `::`)
Sözde ögeler, HTML belgesinde gerçek bir etiket olarak bulunmayan ancak CSS üzerinden sanal bir elemanmış gibi oluşturulan veya biçimlendirilen alt parçalardır. Modern CSS3 standartlarında sözde sınıflardan ayırt edilebilmeleri için **çift iki nokta üst üste (`::`)** ile yazılırlar:

* `::before` ve `::after` — `content` özelliği ile birlikte kullanılarak bir elemanın içeriğinin hemen önüne veya arkasına dekoratif metinler, simgeler veya geometrik şekiller ekler.
* `::first-letter` ve `::first-line` — Bir paragrafın yalnızca ilk harfini (gazete/dergi tarzı büyük baş harf - drop cap) veya ekranda görünen ilk satırını biçimlendirir.
* `::selection` — Kullanıcının fare ile seçtiği (vurguladığı) metin alanının arka plan ve yazı rengini değiştirir.

```css
.uyari-kutusu::before {
    content: "⚠️ Dikkat: ";
    font-weight: 700;
    color: #eab308;
}

p::selection {
    background-color: #7c5cff;
    color: #ffffff;
}
```

---

## Bölüm 7: CSS Yerleşim Sistemleri (CSS Layout): Flexbox, Grid ve Konumlandırma

### 7.1. Normal Akış (Normal Flow) ve `position` Özelliği
Hiçbir yerleşim kuralı uygulanmadığında tarayıcı HTML elemanlarını **Normal Akış (Normal Flow)** içinde dizer: blok elemanlar yukarıdan aşağıya, satır içi elemanlar soldan sağa sıralanır. Bir elemanı normal akıştan çıkarmak için `position` özelliği kullanılır:
* `position: relative` — Elemanı normal akıştaki yerinden koparmadan `top`, `right`, `bottom`, `left` değerleriyle kendi konumuna göre kaydırır ve `absolute` alt elemanlar için referans noktası oluşturur.
* `position: absolute` — Elemanı normal belge akışından tamamen çıkarır ve `static` olmayan en yakın ata (ebeveyn) elemanına göre konumlandırır.
* `position: fixed` ve `position: sticky` — Elemanı tarayıcı penceresine (viewport) sabitler veya kaydırma (scroll) sırasında belirli bir eşiğe gelindiğinde ekrana yapıştırır (sabit üst menüler için kullanılır).

### 7.2. Esnek Kutu Yerleşimi (Flexible Box Layout - Flexbox)
Flexbox, elemanları **tek bir boyutta** (yatay bir satır olarak veya dikey bir sütun olarak) dizmek, aralarındaki boşlukları dağıtmak ve hizalamak için tasarlanmış bir yerleşim modülüdür. Kapsayıcıya `display: flex;` verildiğinde iki eksen oluşur: **Ana Eksen (Main Axis)** ve **Çapraz Eksen (Cross Axis)**.

* `flex-direction`: Ana eksenin yönünü belirler (`row`, `row-reverse`, `column`, `column-reverse`).
* `flex-wrap`: Elemanlar tek satıra sığmadığında alt satıra taşmasını sağlar (`nowrap`, `wrap`).
* `justify-content`: Elemanları **ana eksen** boyunca hizalar (`flex-start`, `center`, `space-between`, `space-around`, `space-evenly`).
* `align-items`: Elemanları **çapraz eksen** boyunca hizalar (`stretch`, `center`, `flex-start`, `flex-end`).
* `flex`: Esnek öğelerin (flex items) büyüme (`flex-grow`), küçülme (`flex-shrink`) ve başlangıç boyutunu (`flex-basis`) tek satırda tanımlar.

```css
.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
}
```

### 7.3. CSS Izgara Yerleşimi (CSS Grid Layout)
CSS Grid, web sayfaları için geliştirilmiş **iki boyutlu** (hem satırları hem sütunları aynı anda yönetebilen) bir ızgara sistemidir. Kapsayıcıya `display: grid;` uygulanarak satır ve sütun hatları (grid tracks) tanımlanır:

* **`fr` (Fraction) Birimi:** Izgara kapsayıcısındaki kullanılabilir boş alanın bir kesrini (payını) temsil eder.
* **`repeat()` ve `minmax()` Fonksiyonları:** Medya sorgusu yazmaya gerek kalmadan kendi kendine duyarlı (responsive) ızgaralar oluşturmayı sağlar.
* **`grid-template-areas`:** Sayfa iskeletini görsel olarak isimlendirerek kurgulama olanağı sunar.

```css
/* Medya sorgusu gerektirmeyen tam otomatik Responsive Kart Izgarası */
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}

/* Sayfa İskeleti (Şehir Planlaması / Holy Grail Layout) */
.page-layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-areas:
        "header  header"
        "main    sidebar"
        "footer  footer";
    gap: 20px;
}
```

---

## Bölüm 8: Duyarlı Web Tasarımı (Responsive Design) ve Medya Sorguları

Duyarlı Web Tasarımı (Responsive Web Design - RWD), bir web sayfasının farklı ekran boyutlarına, çözünürlüklere ve cihaz yönelimlerine (dikey/yatay) otomatik uyum sağlaması yaklaşımıdır. Üç temel teknik üzerine kuruludur:
1. **Esnek Izgaralar (Fluid Grids):** Sabit piksel (`px`) genişlikler yerine yüzdelik (`%`), `fr` veya `minmax()` kullanılması.
2. **Esnek Medya (Flexible Images):** Görsellerin kapsayıcılarından taşmaması için `img { max-width: 100%; height: auto; }` kuralının tanımlanması.
3. **Medya Sorguları (Media Queries - `@media`):** Yalnızca belirli ekran koşulları sağlandığında devreye giren CSS bloklarıdır.

**Viewport Meta Etiketi Zorunluluğu:**
Mobil tarayıcıların sayfayı sanal bir masaüstü ekranı (genellikle `980px`) gibi küçülterek çizmesini engellemek için HTML `<head>` bölümüne şu etiket mutlaka eklenmelidir:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Medya Sorgusu Sözdizimi:**
```css
/* Temel (Mobil Öncelikli / Mobile-First) Kurallar */
.container {
    padding: 16px;
    font-size: 1rem;
}

/* Tablet ve Üzeri Ekranlar (Kırılım Noktası / Breakpoint: 768px) */
@media screen and (min-width: 768px) {
    .container {
        padding: 32px;
        font-size: 1.125rem;
    }
}

/* Kullanıcının İşletim Sistemi Koyu Tema Tercihini Yakalama */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #0b1020;
        color: #ffffff;
    }
}
```

---

## Bölüm 9: Görsel Efektler, Geçişler ve Animasyonlar (Effects, Transitions & Animations)

### 9.1. Gradients, Clip-path ve Filter Fonksiyonları
* **CSS Gradients:** `<image>` veri tipindedir ve `background-image` özelliğiyle kullanılır. `linear-gradient()` doğrusal bir eksende, `radial-gradient()` ise merkezden dışa doğru dairesel renk geçişleri üretir.
* **`clip-path`:** Bir elemanın yalnızca belirli bir geometrik bölge (`circle()`, `ellipse()`, `polygon()`) içinde kalan kısmının görünmesini sağlar; dışta kalan alanları kırpar.
* **`filter`:** Bir eleman ekrana çizilmeden önce üzerine bulanıklık (`blur(8px)`), kontrast (`contrast(150%)`), gri tonlama (`grayscale(100%)`) veya gölge (`drop-shadow()`) gibi grafik efektleri uygular.

### 9.2. CSS Geçişleri (`transition`) ve Anahtar Kare Animasyonları (`@keyframes`)
* **`transition` (Geçişler):** Bir özelliğin (örneğin `:hover` durumunda arka plan renginin veya `transform` boyutunun) A noktasından B noktasına aniden değil, belirlenen süre (`transition-duration`) ve hız eğrisi (`transition-timing-function`) boyunca yumuşakça değişmesini sağlar.
* **`@keyframes` ve `animation`:** Kullanıcı etkileşimi gerekmeksizin çok adımlı (`0%`, `50%`, `100%`) ve döngüsel (`infinite`) hareket senaryoları oluşturur.

```css
/* Yumuşak Hover Geçişi */
.interactive-btn {
    background-color: #7c5cff;
    transform: translateY(0);
    transition: background-color 0.3s ease, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.interactive-btn:hover {
    background-color: #5b3fd9;
    transform: translateY(-4px);
}

/* @keyframes ile Sürekli Nabız (Pulse) Animasyonu */
@keyframes pulse-effect {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.15);
        opacity: 0.7;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

.pulse-badge {
    animation: pulse-effect 2s infinite ease-in-out;
}
```

---

## Bölüm 10: CSS Mimarisi, Metodolojiler (BEM) ve Ön İşlemciler (Preprocessors)

Büyük ölçekli kurumsal projelerde stil şablonlarının büyümesiyle ortaya çıkan seçici çakışmalarını, özgüllük savaşlarını (specificity wars) ve bakım zorluklarını çözmek için yazılım mühendisliği prensipleri uygulanır:

1. **BEM (Block, Element, Modifier) Metodolojisi:**
   Yalnızca tekil sınıf seçicileri kullanarak özgüllüğü düz (flat) tutmayı hedefler.
   * **Block (`.nav`):** Bağımsız olarak yeniden kullanılabilen bileşen.
   * **Element (`.nav__item`):** Bloğa bağlı olan ve blok dışında tek başına anlam taşımayan alt parça (`__` ile ayrılır).
   * **Modifier (`.nav__item--active`):** Bir bloğun veya elementin görünümünü, durumunu veya davranışını değiştiren varyasyon (`--` ile ayrılır).

2. **CSS Ön İşlemcileri (Sass / SCSS):**
   Standart CSS'te bulunmayan veya daha gelişmiş yapısal organizasyon gerektiren projelerde derleme aşaması (build step) sunar. Parçalı dosyalar (`_variables.scss`, `_mixins.scss`), iç içe seçici yazımı (nesting), `@mixin` / `@include` ile yeniden kullanılabilir kod blokları ve döngüler (`@for`, `@each`) kullanılarak yazılan `.scss` dosyaları, üretim ortamı için standart `.css` çıktısına derlenir.

3. **Modern CSS Çatıları (Utility-First vs Component-Based Frameworks):**
   * **Bileşen Tabanlı Çatılar (Bootstrap):** Önceden tasarlanmış hazır UI bileşenleri sunar.
   * **Yardımcı Sınıf Tabanlı Çatılar (Tailwind CSS):** Tasarım sistemini atomik yardımcı sınıflara (`flex`, `items-center`, `p-6`, `rounded-xl`) bölerek doğrudan HTML işaretlemesi üzerinden hızlı ve tutarlı arayüz geliştirmeyi sağlar.
