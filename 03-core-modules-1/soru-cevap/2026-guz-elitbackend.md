# MDN Standartlarında Temel HTML Soruları ve Cevapları

Bu belge, MDN Web Docs standartlarına uygun olarak hazırlanmış, modern HTML prensiplerini, erişilebilirliği (a11y), performansı ve güvenliği hedefleyen soruları içermektedir.

---

## Soru 1: Semantik HTML
**Soru:** Sayfa iskeleti oluştururken her yerde `<div>` kullanmak yerine `<article>`, `<section>`, `<aside>` veya `<nav>` gibi anlamsal (semantic) etiketler kullanmanın SEO ve Erişilebilirlik (Accessibility) açısından sağladığı temel faydalar nelerdir?

**Cevap:**
*   **Erişilebilirlik (Accessibility):** Ekran okuyucular (screen readers) ve yardımcı teknolojiler, semantik etiketleri tanıyarak görme engelli kullanıcılara sayfanın yapısı hakkında bilgi verir. Bir kullanıcı klavye kısayollarıyla doğrudan `<nav>` (menü) alanına atlayabilir veya `<main>` içeriğine odaklanabilir. Anlamsız bir kutu olan `<div>` bu bağlamı sağlayamaz.
*   **SEO:** Arama motoru botları (crawler'lar), içeriğin hiyerarşisini ve önemini semantik etiketler sayesinde anlar. Örneğin, `<article>` içindeki bir metnin, `<aside>` (yan sütun) içindeki bir metinden daha önemli ve kendi başına anlamlı bir içerik olduğu algılanarak indeksleme buna göre yapılır.

---

## Soru 2: Form Elemanları
**Soru:** Bir HTML formundaki `<input>` etiketinde kullanılan `readonly` ve `disabled` nitelikleri (attributes) görsel ve işlevsel olarak birbirine benzer görünse de, form sunucuya gönderildiğinde (submit) verinin iletilmesi açısından aralarındaki kritik fark nedir?

**Cevap:**
*   **`readonly`:** Kullanıcı form elemanının içeriğini değiştiremez ancak metni seçebilir, kopyalayabilir ve elemana odaklanabilir (focus). Form sunucuya gönderildiğinde (submit), `readonly` olan input'un değeri **sunucuya iletilir**.
*   **`disabled`:** Kullanıcı elemanla hiçbir şekilde etkileşime giremez; eleman genellikle soluk (gri) görünür, odaklanılamaz ve seçilemez. Form sunucuya gönderildiğinde, `disabled` olan elemanın değeri **sunucuya kesinlikle iletilmez**.

---

## Soru 3: Sayfa Yükleme Performansı
**Soru:** Bir HTML belgesinin `<head>` kısmında dışarıdan bir JavaScript dosyası çağırırken (`<script src="...">`), dosyaya `async` veya `defer` niteliği eklemek tarayıcının HTML'i ayrıştırma (parsing) sürecini nasıl değiştirir? İkisi arasındaki temel fark nedir?

**Cevap:**
Normal bir `<script>` etiketi, dosyanın indirilmesi ve çalıştırılması süresince HTML ayrıştırma (parsing) işlemini tamamen durdurur (render-blocking).
*   **`async`:** Script arka planda indirilirken HTML ayrıştırması kesintiye uğramadan devam eder. Ancak script'in indirilmesi bittiği an HTML ayrıştırması durdurulur ve script çalıştırılır. Dosyaların çalışma sırası garanti edilmez (küçük olan önce inip çalışabilir). DOM'a bağımlı olmayan analiz araçları (örn. Google Analytics) için idealdir.
*   **`defer`:** Script arka planda indirilirken HTML ayrıştırması devam eder. Script'in çalıştırılması ise HTML ayrıştırması **tamamen bittikten sonra** gerçekleşir. Dosyalar HTML'de yazılış sırasına göre çalışır. DOM manipülasyonu yapan standart scriptler için en güvenilir yöntemdir.

---

## Soru 4: Güvenlik
**Soru:** Harici bir siteye bağlantı verirken linkin yeni sekmede açılması için `target="_blank"` kullandığımızda, güvenlik ve performans risklerini önlemek için MDN'in de önerdiği hangi `rel` niteliği değerlerini (ve neden) eklemeliyiz?

**Cevap:**
`target="_blank"` kullanıldığında açılan yeni sekme, `window.opener` objesi üzerinden orijinal sayfanıza (sizin sitenize) erişim sağlayabilir. Kötü niyetli bir site, bu erişimi kullanarak orijinal sekmenizi sahte bir giriş ekranına yönlendirebilir ("tabnabbing" saldırısı).
Bunu engellemek için **`rel="noopener"`** (veya eski tarayıcı destekleri için `rel="noopener noreferrer"`) kullanılır. Bu nitelik, yeni açılan sekmenin orijinal sekmeyle olan bağını koparır. Modern tarayıcılar artık `target="_blank"` için `noopener` davranışını varsayılan yapsa da, MDN geriye dönük uyumluluk ve güvenlik için bu niteliğin açıkça yazılmasını en iyi pratik (best practice) olarak kabul eder.

---

## Soru 5: Responsive (Duyarlı) Medya
**Soru:** Kullanıcının ekran boyutuna ve piksel yoğunluğuna göre tarayıcının en uygun görseli seçmesini sağlamak için `<img>` etiketinde hangi nitelik (attribute) kullanılır ve bu yapının `<picture>` elementi kullanarak görsel değiştirmekten temel farkı nedir?

**Cevap:**
*   **`srcset` ve `sizes` (`<img>` içinde):** Aynı görselin farklı çözünürlükteki versiyonlarını sunar. Karar mercii **tarayıcıdır**. Tarayıcı; cihazın ekran yoğunluğuna (pixel density), genişliğine ve anlık internet hızına bakarak listelenen görsellerden hangisini indireceğine kendisi karar verir.
*   **`<picture>` ve `<source>`:** "Sanatsal yönlendirme" (Art Direction) veya yeni nesil format desteği (örn. WebP vs JPEG) için kullanılır. Karar mercii **geliştiricidir**. Tarayıcıya inisiyatif bırakılmaz; yazılan medya sorgularına göre (örn. ekran 600px'den küçükse resmin dikey kesilmiş versiyonunu yükle) belirli bir görselin yüklenmesi zorunlu kılınır.