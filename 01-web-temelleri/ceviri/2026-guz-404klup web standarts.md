# Web standartları

Bu modül, web'in genel hatlarıyla nasıl çalıştığının temellerini kapsar — iletişim için kullanılan model, sürece dahil olan çekirdek teknolojiler, bu teknolojilerin nasıl yaratıldığı ve bir web tarayıcısının web sitelerini işleyip (render) bir kullanıcıya nasıl sunduğu dahil olmak üzere.

## Ön koşullar

Bu modül ağırlıklı olarak teoriktir ve web teknolojilerine dair belirli bir pratik bilgiye sahip olduğunuzu varsaymaz. Ancak, ana web teknolojilerinin temel olarak ne amaçla kullanıldığını anlarsanız, bu modülü daha iyi anlayacak ve ondan daha fazla verim alacaksınız. Eğer henüz yapmadıysanız, öncelikle **İlk web siteniz** (*Your first website*) modülünü bitirmenizi öneririz.

## Öğreticiler

### Web nasıl çalışır?

Bu makale, bir web sayfasına gitmek için bir web tarayıcısı kullandığınızda neler olduğuna dair genel (*high-level*) bir açıklama sunar; ilgili kodun bilgisayarınıza ulaştırılması ve tarayıcının bunları bakabileceğiniz bir forma dönüştürmek üzere bir araya getirmesi için perde arkasında dönen sihri açıklar.

### Web standartları modeli

Bu makale, web ve web standartları hakkında faydalı bir arka plan sağlar — nasıl ortaya çıktıkları, web standardı teknolojilerinin neler olduğu ve birlikte nasıl çalıştıkları.

### Tarayıcılar web sitelerini nasıl yükler?

Bu makalede, bir web sitesinin işlenme (*rendering*) sürecini baştan sona konuşuyoruz — bir tarayıcı bir web sitesini oluşturan dosyaları ve kaynakları (*assets*) aldığında, kullanıcının etkileşime gireceği tamamlanmış deneyimi yaratmak için bunlar nasıl bir araya getirilir?

# Web nasıl çalışır?

[Genel bakış: Web standartları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards) | [Sonraki](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model)

*Web nasıl çalışır?*, bir web tarayıcısı kullanarak bir web sayfasına gittiğinizde neler olduğuna dair genel bir açıklama sunar; ilgili kodun bilgisayarınıza ulaştırılması ve tarayıcının bunları bakabileceğiniz bir forma dönüştürmek üzere bir araya getirmesi için perde arkasında dönen sihri açıklar.

Bu teori, kısa vadede web kodu yazmak için şart değildir, ancak çok geçmeden arka planda neler olup bittiğini anlamanın faydasını gerçekten görmeye başlayacaksınız.

> **Not:** Bu makale, web tarayıcılarının kodu web sayfalarına gerçekte nasıl işlediğini (*render* ettiğini) kapsamaz. Bu konu [Tarayıcılar web sitelerini nasıl yükler?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) bölümünde ele alınmıştır.

| | |
| --- | --- |
| **Ön koşullar:** | Bilgisayarınızın işletim sistemine, web tarayıcılarına ve web teknolojilerine temel aşinalık. |
| **Öğrenme çıktıları:** | İstemciler ve sunucular ile bunların web'deki rolleri. Genel hatlarıyla DNS ve nasıl çalıştığı. TCP/IP, HTTP ve paketlerin amacı. Temel düzeyde HTTP sözdizimi. Yaygın HTTP yanıt kodları (örn. 200, 301, 403, 404 ve 500). Bir URL'nin temel bileşenleri (protokol, alan adı, alt alan adı, yol). |

## Bu makalede

- [İstemciler ve sunucular](#i̇stemciler-ve-sunucular)
- [Araç kutusunun diğer parçaları](#araç-kutusunun-diğer-parçaları)
- [Peki tam olarak ne oluyor?](#peki-tam-olarak-ne-oluyor)
- [DNS açıklandı](#dns-açıklandı)
- [Paketler açıklandı](#paketler-açıklandı)
- [HTTP temelleri](#http-temelleri)
- [Bir URL'nin bileşenleri](#bir-urlnin-bileşenleri)
- [Ayrıca bakın](#ayrıca-bakın)
- [Kaynak](#kaynak)

## İstemciler ve sunucular

İnternete bağlı bilgisayarlara **istemciler** ve **sunucular** denir. Nasıl etkileşime girdiklerine dair basitleştirilmiş bir diyagram şuna benzeyebilir:

![Biri istemciyi, diğeri sunucuyu temsil eden iki daire. İstemciden sunucuya "request" (istek) etiketli, sunucudan istemciye "responses" (yanıtlar) etiketli birer ok gidiyor](images/simple-client-server.png)

- İstemciler, tipik web kullanıcısının internete bağlı cihazlarıdır (örneğin, Wi-Fi'nize bağlı bilgisayarınız veya mobil ağınıza bağlı telefonunuz) ve bu cihazlarda bulunan web erişim yazılımlarıdır (genellikle Firefox veya Chrome gibi bir web tarayıcısı).
- Sunucular, web sayfalarını, siteleri veya uygulamaları depolayan bilgisayarlardır. Bir istemci bir web sayfasına erişmek istediğinde, web sayfası kodunun bir kopyası sunucudan istemci makinesine indirilir, burada tarayıcı tarafından işlenir (*render*) ve kullanıcıya gösterilir.

Scrimba'nın (*MDN öğrenme ortağı*) istemciler ve sunucular hakkında test ve tartışma içeren gömülü içeriği için [orijinal sayfaya](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works#clients_and_servers) bakabilirsiniz.

## Araç kutusunun diğer parçaları

Yukarıda tanımladığımız istemci ve sunucu hikayenin tamamını anlatmaz. Sürece dahil olan birçok başka parça vardır ve bunları aşağıda açıklayacağız.

Şimdilik internetin bir yol olduğunu hayal edelim. Yolun bir ucunda eviniz gibi olan istemci var. Yolun diğer ucunda ise bir şeyler satın almak istediğiniz bir dükkan gibi olan sunucu var.

![Yaya geçidinden karşıya geçen bir kişinin siyah-beyaz fotoğrafı](images/road.jpg)

Verilerin gidip gelebilmesi için şunlara ihtiyacımız var:

- **İnternet bağlantınız:** İnternet üzerinden veri göndermenizi ve almanızı sağlar. Temelde eviniz ile dükkan arasındaki sokak gibidir.

- **TCP/IP:** **İletişim Kontrol Protokolü** (Transmission Control Protocol) ve **İnternet Protokolü** (Internet Protocol) (TCP/IP), verilerin internet üzerinden nasıl seyahat etmesi gerektiğini tanımlayan iletişim protokolleridir. Bu, sipariş vermenizi, dükkana gitmenizi ve ürünlerinizi almanızı sağlayan taşıma mekanizmaları gibidir. Örneğimizde bu, bir araba veya bisiklet (veya yolda başka nasıl seyahat ediyorsanız o) gibidir.

- **DNS:** **Alan Adı Sistemi** (Domain Name System), web siteleri için bir adres defteri gibidir. Tarayıcınıza bir web adresi yazdığınızda, tarayıcı web sitesini alabilmesi için web sitesinin IP adresini — sunucunun bulunduğu gerçek adresi — bulmak üzere DNS'e bakar (daha fazla bilgi için aşağıdaki [DNS açıklandı](#dns-açıklandı) bölümüne bakın). Tarayıcının, HTTP mesajlarını doğru yere gönderebilmesi için web sitesinin hangi sunucuda yaşadığını bulması gerekir (aşağıya bakın). Bu, ziyaret etmeden önce dükkanın adresine bakmak gibidir.

- **HTTP:** **Hiper Metin Transfer Protokolü** (Hypertext Transfer Protocol), istemcilerin ve sunucuların birbirleriyle konuşması için bir dil tanımlayan bir uygulama [protokolüdür](https://developer.mozilla.org/en-US/docs/Glossary/Protocol). Bu, ürünlerinizi sipariş etmek için kullandığınız dil gibidir. Aşağıdaki [HTTP temelleri](#http-temelleri) bölümüne bakın.

- **Dosyalar:** Bir web sitesi, dükkandan aldığınız farklı ürünler gibi olan birçok farklı dosyadan oluşur. Bu dosyalar iki ana türe ayrılır:

  - **Kod:** Web siteleri temel olarak HTML, CSS ve JavaScript'ten — tarayıcının yorumladığı ve kullanıcıya göstermek üzere bir web sayfası olarak bir araya getirdiği, web sitelerinin yazıldığı farklı programlama dillerinden — oluşturulur.
  - **Kaynaklar (Assets):** Bu, bir web sitesinde görünen ve tarayıcının yorumladığı kodlar olmayan — resimler, müzik, video, Word belgeleri ve PDF'ler gibi — diğer tüm öğeler için ortak bir terimdir.

  > **Not:** Tarayıcının bu dosyaları bir web sayfası olarak nasıl bir araya getirdiğini kursun ilerleyen kısımlarında, [Tarayıcılar web sitelerini nasıl yükler?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites) bölümünde öğrenebilirsiniz.

## Peki tam olarak ne oluyor?

Tarayıcınızın adres çubuğuna bir web adresi (ki bu teknik olarak bir [URL](#bir-urlnin-bileşenleri)'nin parçasıdır) yazdığınızda, aşağıdaki adımlar gerçekleşir:

1. Tarayıcı DNS sunucusuna gider ve web sitesinin yaşadığı sunucunun gerçek adresini bulur.
2. Tarayıcı sunucuya bir HTTP istek mesajı gönderir ve ondan web sitesinin bir kopyasını istemciye göndermesini ister. Bu mesaj ve istemci ile sunucu arasında gönderilen diğer tüm veriler, TCP/IP kullanılarak internet bağlantınız üzerinden gönderilir.
3. Eğer sunucu istemcinin isteğini onaylarsa, sunucu istemciye bir "200 OK" mesajı gönderir, bu "Elbette o web sitesine bakabilirsin! İşte burada" anlamına gelir ve ardından web sitesinin dosyalarını [paketler](#paketler-açıklandı) adı verilen bir dizi küçük parça halinde tarayıcıya göndermeye başlar.
4. Tarayıcı küçük parçaları bir araya getirerek eksiksiz bir web sayfası oluşturur ve size gösterir.

## DNS açıklandı

Gerçek web adresleri ([URL'ler](#bir-urlnin-bileşenleri)), favori web sitelerinizi bulmak için adres çubuğunuza yazdığınız o güzel, akılda kalıcı dizeler değildir. Bunlar şuna benzeyen özel sayılardır: `192.0.2.172`.

Buna [IP adresi](https://developer.mozilla.org/en-US/docs/Glossary/IP_Address) denir ve web üzerinde benzersiz bir konumu temsil eder. Ancak hatırlaması pek kolay değildir, öyle değil mi? İşte Alan Adı Sistemi bu yüzden icat edildi. Bu sistem, tarayıcınıza yazdığınız bir web adresini (örneğin `mozilla.org`), web sitesinin gerçek (IP) adresiyle eşleştiren özel sunucular kullanır. Büyük web siteleri genellikle dünya çapındaki farklı kullanıcılar için verimli bir şekilde yüklenmeleri amacıyla birden fazla sunucuda kullanıma sunulur. Sonuç olarak, IP adresi bulunduğunuz yere göre değişebilir.

Bir web sitesinin IP adreslerini bulmak için bir DNS arama aracı kullanabilirsiniz. Örneğin, [NsLookup.io DNS arama aracına](https://www.nslookup.io/website-to-ip-lookup/) gidin, `developer.mozilla.org` yazın ve düğmeye basın.

## Paketler açıklandı

Daha önce, verilerin istemci ve sunucu arasında aktarıldığı formatı tanımlamak için "paketler" terimini kullanmıştık. Burada ne demek istiyoruz?

Veriler web üzerinden gönderildiğinde, paket adı verilen birden fazla küçük parça halinde gönderilir. Her paket şunları içerir:

- Sunucu ve istemci IP adresi, paket numarası, iletimdeki toplam paket sayısı ve iletimde kullanılan protokollerin ayrıntıları gibi bilgileri içeren bir **başlık (header)**.
- Pakette gönderilen asıl veriyi içeren bir **yük (payload)**.

Verilerin küçük paketler halinde gönderilmesinin birden fazla nedeni vardır, ancak en önemlileri şunlardır:

- Bazen düşerler veya bozulurlar ve bu olduğunda, istemcinin tüm bir dosya yerine eksik paketleri istemesi daha hızlı ve kolaydır.
- Paketler farklı yollardan yönlendirilebilir, bu da iletimi mümkün olduğunca verimli hale getirir ve özellikle birçok kullanıcı aynı kaynağı aynı anda talep ettiğinde ağı yavaşlatma olasılığını azaltır. Paketler sırasız gelebilir, ancak istemci paket başlıklarındaki bilgileri kullanarak bunların doğru sırada birleştirildiğinden emin olabilir.

## HTTP temelleri

HTTP, istekte bulunmak gibi eylemleri gerçekleştirmek için basit bir fiil dili kullanır (bkz. [HTTP istek metotları](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)). HTTP [`GET`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET) metodu, normalde yukarıda açıklanan türdeki HTTP isteklerini yapmak için kullanılan metottur. Örneğin, MDN ana sayfası için bir istek şuna benzeyebilir:

```http
GET /en-US/ HTTP/2

Host: developer.mozilla.org
```

Sunucu tarafından gönderilen yanıt ise aşağı yukarı şuna benzeyebilir:

```http
HTTP/2 200

date: Tue, 11 Feb 2025 11:13:30 GMT
expires: Tue, 11 Feb 2025 11:40:01 GMT
server: Google frontend
last-modified: Tue, 11 Feb 2025 00:49:32 GMT
ETag: "65f26b7f6463e2347f4e5a7a2adcee54"
content-length: 45227
content-type: text/html

<!doctype html> ... (talep edilen web sayfası HTML'inin 45227 baytı)
```

Tam yanıt bundan daha karmaşıktır, ancak kısalık sağlamak için çoğunu atladık. Ana bölümler şunlardır:

- `HTTP/2 200`: Sunucunun yanıtı göndermek için kullandığı HTTP sürümü (bu durumda HTTP/2), ardından isteğin başarılı olup olmadığını belirten bir [durum kodu](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status). `200` başarıyı gösterir.

- `date`, `expires` vb.: Yanıt hakkında ek bilgi içeren [HTTP başlıkları](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers) (isteklerin de başlıkları olabileceğini unutmayın); ekstra bilgi sağlar ve/veya davranışını değiştirir.

- `<!doctype html>` vb.: Yanıt gövdesi; bu durumda MDN ana sayfasının HTML belgesini içerir.

> **Not:** Merak ediyorsanız HTTP hakkında çok daha fazla ayrıntı için MDN [HTTP referansına](https://developer.mozilla.org/en-US/docs/Web/HTTP) bakın. [HTTP'ye genel bir bakış](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview), başlamak için iyi bir yerdir.

### Diğer durum kodları

Yukarıda, HTTP isteğinin başarılı olduğunu gösteren `200` [durum koduyla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status) karşılaştık. Belirli anlamları ve kullanımları olan birçok HTTP durum kodu vardır, ancak yaygın olarak sadece birkaçını görürsünüz:

- `301`: Talep edilen kaynak kalıcı olarak, yanıtta sağlanan yeni bir konuma taşınmıştır. Bu, içerik taşındığında yönlendirme için kullanılır.

- `400`: Sunucu isteği işleyemiyor. Bu genellikle istek sunucunun anladığı bir formatta olmadığında veya içinde hatalar olduğunda gerçekleşir.

- `403`: Sunucu, istemcinin talep edilen kaynağa erişmesine izin vermez. Bu genellikle sunucu istemcinin kim olduğunu bildiğinde, ancak istenen sayfaya erişme izni olmadığında gerçekleşir.

- `404`: Sunucu talep edilen kaynağı bulamıyor. Bu durum genellikle URL yanlışsa veya içerik bir yönlendirme konulmadan silinmişse döndürülür.

- `503`: Sunucuyla ilgili bir sorun nedeniyle istek gerçekleştirilemiyor. Bu, sunucular bakım için çevrimdışı olduğunda yaygındır ve geçici olması beklenir.

## Bir URL'nin bileşenleri

Teknik olarak, tarayıcı adres çubuğuna yazdığınız web adresleri, **Tekdüze Kaynak Bulucuların** (Uniform Resource Locators — **URL**'ler) bir parçasını oluşturur. URL'ler, internetteki benzersiz kaynakların konumlarını tanımlar.

URL, bir web adresi artı bir protokoldür: örneğin, tarayıcınızda yeni bir sekme açarsanız, adres çubuğuna `developer.mozilla.org` yazar ve `Enter`/`Return` tuşuna basarsanız, aşağıdaki gibi bir URL'ye yönlendirilirsiniz:

```
https://developer.mozilla.org/en-US/
```

URL'nin ana bölümleri şunlardır:

- `https`: İsteği göndermek için kullanılan **protokol**. Bu durumda, aktarım sırasında kötü niyetli kişilerin verilerinizi okumasını engelleyen, HTTP'nin güvenli bir sürümü olan [HTTPS](https://developer.mozilla.org/en-US/docs/Glossary/HTTPS)'yi kullanıyoruz. Modern web'de hemen hemen her sunucu HTTPS kullanır, bu nedenle bunu açıkça dahil etmezseniz, tarayıcı kullandığınızın bu olduğunu varsayar ve sizin için ekler.

- `developer.mozilla.org`: Bağlandığınız sunucunun üst düzey konumunu temsil eden URL'nin [**alan adı**](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name). Bu durumda, yazdığınız web adresi alan adına eşittir, ancak bu her zaman böyle değildir — daha karmaşık bir web adresi yazmayı seçebilirsiniz. `developer` kısmının Mozilla'nın `mozilla.org` alan adının bir **alt alan adı** (farklı içerik alanı) olduğuna dikkat edin. Mozilla'nın sitesinde farklı içerikler barındıran başka alt alan adları da vardır; örneğin [support.mozilla.org](https://support.mozilla.org/) ve [bugzilla.mozilla.org](https://bugzilla.mozilla.org/).

- `/en-US/`: Sunucuda erişmekte olduğunuz kaynağın **yolu**. MDN, tüm ABD İngilizcesi içeriğini `en-US` adlı bir klasörde tutar ki bu URL'nin işaret ettiği yer de burasıdır.

Tarayıcınızı varsayılan olarak İngilizce içeriği tercih edecek şekilde ayarladıysanız, `developer.mozilla.org` yazdığınızda yönlendirileceğiniz URL budur. Tarayıcınızı MDN'nin desteklediği farklı bir dili (örneğin Fransızca) tercih edecek şekilde ayarladıysanız, bunun yerine `https://developer.mozilla.org/fr/` gibi farklı bir URL'ye yönlendirilirsiniz. Bu, varsayılan olarak her web sitesi için mevcut değildir; MDN geliştiricileri, insanların tercih ettikleri dile kolayca erişmelerini sağlamak için MDN'yi bu şekilde kurmuşlardır.

> **Not:** URL'lerde görünebilecek çok daha fazla bileşen vardır. Daha fazla ayrıntı için [URL nedir?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL) bölümüne bakın.

## Ayrıca bakın

- [İnternet nasıl çalışır?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work)

## Kaynak

Sokak fotoğrafı: Kevin Digga'nın [Street composing](https://www.pinterest.com/pin/400538960580676851/) çalışması ([Kevin Digga](https://www.pinterest.com/kevindigga/)).

[Genel bakış: Web standartları](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards) | [Sonraki](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model)

---

*Bu, [MDN "How the web works"](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works) sayfasının Türkçe çevirisidir. İçeriğin bölümleri © 1998–2026 mozilla.org katkıda bulunanlarına aittir ve [Creative Commons lisansı](https://developer.mozilla.org/docs/MDN/Writing_guidelines/Attrib_copyright_license) altında sunulmaktadır.*


# Web standartları modeli

Bu makale, web ve web standartları hakkında faydalı bir arka plan sağlar — nasıl ortaya çıktıkları, web standardı teknolojilerinin neler olduğu ve birlikte nasıl çalıştıkları.

**Ön koşullar:** Bilgisayarınızın işletim sistemine, web tarayıcılarına ve web teknolojilerine temel aşinalık.
**Öğrenme çıktıları:**

* Web standartları ve üzerine inşa edildikleri temel ilkeler.

* Standart kurullarının (örneğin W3C, WHATWG, TC39 ve Khronos Group) nasıl işlediği; standart oluşturma süreci.

* Ana web standardı teknolojileri ve bunların birlikte nasıl çalıştığı.

* Sunucu taraflı (*server-side* / dinamik) ile istemci taraflı (*client-side* / statik) dosyaların karşılaştırması.

* Web için en iyi uygulamalar (*best practices*).

## Web'in kısa tarihi

1960'ların sonlarında ABD ordusu ARPANET adında bir iletişim ağı geliştirdi. Bu ağ, paket anahtarlama (*packet switching*) üzerinden çalıştığı ve TCP/IP protokol paketinin ilk uygulamasını barındırdığı için internetin öncüsü sayılabilir. Bu iki teknoloji, internetin üzerine inşa edildiği altyapının temelini oluşturur.

1980'de Tim Berners-Lee (genellikle TimBL olarak anılır), farklı düğümler (nodes) arasında bağlantılar (*links*) konseptini içeren ENQUIRE adlı bir not defteri programı yazdı. Tanıdık geldi mi?

1989'a hızla ilerlersek, TimBL *Information Management: A Proposal* ve CERN'de *HyperText* isimli belgeleri yazdı; bu iki yayın birlikte web'in nasıl çalışacağının arka planını sağladı. TimBL'in patronlarını küresel bir hiper metin sistemi yaratmaya devam etmesi için ikna etmeye yetecek kadar ilgi gördüler.

1990-91 yıllarına gelindiğinde TimBL, World Wide Web'in (genel olarak web olarak anılır) ilk sürümünü çalıştırmak için gereken her şeyi yaratmıştı — HTTP, HTML, *WorldWideWeb* adlı ilk web tarayıcısı, bir web sunucusu ve bakılabilecek birkaç web sayfası.

**Not:** İnsanlar bazen "web" ve "internet" kelimelerini birbirinin yerine kullanır, ancak bunlar farklı şeylerdir. İnternet, bilgilerin dünyanın dört bir yanındaki farklı sunucular ve istemciler arasında taşınmasını sağlayan altyapıdır; web ise internet üzerine inşa edilmiş bir sistemdir. Web, internet üzerinden aktarılan bilgi türlerini (içerik ve kod) ve bu aktarımı yönetecek iletişim protokollerini tanımlar.

1994 yılında TimBL, web teknolojilerinin yaratılması üzerinde birlikte çalışmak üzere birçok farklı şirketin temsilcisini bir araya getiren bir organizasyon olan World Wide Web Consortium'u (W3C) kurdu. W3C, HTML ve HTTP gibi mevcut web teknolojilerini standartlaştırmak ve geliştirmek, CSS ve JavaScript gibi yeni teknolojiler yaratmak üzerinde çalıştı. Özellikle CSS ve JavaScript, web'e stil ve etkileşim kazandırarak onu bugün bildiğimiz web'e daha çok benzetmek için hayati önem taşıyordu.

Sonraki birkaç yıl içinde çok sayıda tarayıcının piyasaya sürülmesi, binlerce web sunucusunun kurulması ve milyonlarca web sayfasının oluşturulmasıyla web patlama yaptı. Web teknolojilerinin farklı yönlerini standartlaştırmaya yardımcı olmak için başka standart organizasyonları da ortaya çıktı.

**Not:** Web tarihi hakkında daha ayrıntılı bir açıklama okumak isterseniz, favori arama motorunuzda "history of the web" ("web'in tarihi") araması yapmayı deneyin ve neler bulabileceğinize bakın.

## Web standartları

Web standartları, web siteleri oluşturmak için kullandığımız teknolojilerdir. Bu standartlar, teknolojinin tam olarak nasıl çalışması gerektiğini detaylandıran *spesifikasyonlar* adı verilen uzun teknik belgeler olarak var olurlar. Bu belgeler, tanımladıkları teknolojilerin nasıl kullanılacağını öğrenmek için pek kullanışlı değildir (işte bu yüzden MDN Web Docs gibi sitelerimiz var). Bunun yerine, yazılım mühendisleri tarafından bu teknolojileri (genellikle web tarayıcılarında) uygulamak (*implement*) için kullanılmak üzere tasarlanmışlardır.

### Standart kurumları ve süreçleri

Web standartları, farklı teknoloji şirketlerinden insan gruplarını bir araya gelmeye ve teknolojilerin tüm kullanım senaryolarını (*use cases*) karşılayacak en iyi şekilde nasıl çalışması gerektiği konusunda anlaşmaya davet eden kurumlar olan *standart kurulları (standards bodies)* tarafından oluşturulur.

W3C en çok bilinen web standartları kuruludur, ancak başkaları da vardır. Örneğin:

* **WHATWG**, HTML'nin (tüm HTML elementleri, bunlarla ilişkili API'ler ve diğer çevresel teknolojiler) tam olarak nasıl uygulanması gerektiğini açıklayan *HTML Yaşayan Standardını (HTML Living Standard)* sürdürür.

* **TC39** ve **ECMA**, modern JavaScript'in temelini oluşturan ECMAScript standardını belirler ve yayınlar.

* **Khronos**, WebGL gibi 3D grafik teknolojilerini yayınlar.

Standartların oluşturulduğu tüm süreçler derin ve karmaşık bir hal alabilir. Ancak, kendi web teknolojisi özelliklerinizi yaratmak istemiyorsanız bunların çoğunu anlamanıza gerek yoktur. Yeni teknolojiler etrafındaki tartışmalara katkıda bulunmak ve geri bildirim sağlamak istiyorsanız, bu genellikle ilgili posta listesine veya diğer tartışma mekanizmalarına katılmaktan ibarettir. Standart tartışmaları kamuya açık olarak yürütülür, bu nedenle "Açık" (Open) standartlar terimi kullanılır.

Şimdilik, standart süreçlerinin nasıl çalıştığına dair genel (*high-level*) bir anlayış sunacağız:

1. Birisi, geliştiricilerin hayatını kolaylaştıracak yeni bir web standardı özelliğine ihtiyaç duyulduğunu fark eder. Örneğin, web kullanıcı arayüzlerinde yaygın olarak kullanılan ancak uygulanması acı verici olan ortak bir kalıp olabilir. Özel bir CSS özelliği bunu çok daha kolay hale getirebilir. Bu kişi herhangi biri olabilir — bireysel bir geliştirici veya büyük bir teknoloji şirketi için çalışan bir mühendis.

2. Bu kişi bu özelliği diğer geliştiriciler, tarayıcı mühendisleri vb. ile tartışır ve özelliğin uygulanmasına yönelik bir ilgi yaratmaya başlar. Genellikle özelliğe neden ihtiyaç duyulduğunu ve nasıl çalışacağını açıklayan bir *açıklayıcı (explainer)* belge ve özelliğin eylem halindeyken nasıl görüneceğini gösteren bir kod demosu yazarlar.

3. Özelliğe yeterince ilgi duyulursa, ilgili standart kurulu çalışma grubu (working group) içinde resmi olarak tartışılır. Örneğin, CSS özellikleri genellikle CSS Çalışma Grubu (WG) tarafından tartışılır. Yeni bir web teknolojisi kabul edilmeden önce, web için iyi olduğundan emin olmak üzere titizlikle değerlendirilmelidir — örneğin, herhangi bir güvenlik sorunu yaratmaz, erişilebilirdir ve diğer web teknolojileriyle uyumludur ve patentlere dayanmaz.

4. Özelliği kanıtlamak için birkaç şey gerçekleşir. Bu noktaların hepsi 3. Madde ile aynı zamanlarda veya hatta daha önce gerçekleşebilir (tarayıcı satıcıları bazen tescilli/standart dışı özellikler uygular ve daha sonra bunları standartlaştırmaya çalışır):

   * Bir veya daha fazla tarayıcı satıcısı (*browser vendor*), yeni özelliğin deneysel bir sürümünü uygulayacaktır; bu genellikle varsayılan olarak devre dışıdır, ancak test etmek ve geri bildirim sağlamak isteyen kişiler tarafından etkinleştirilebilir.

   * Bir çalışma grubu üyesi ayrıca bunu bir teknoloji spesifikasyonuna ekleyecek ve böylece tarayıcı satıcılarının bunu tutarlı bir şekilde uygulayabilmesini sağlayacaktır. Ayrıca teklifle ilgili ne gibi sorunları olduğunu ve bunu uygulama olasılıklarının ne olduğunu görmek için diğer tarayıcı satıcılarından geri bildirim arayacaklardır. Bunlara *Standart konumları (Standards positions)* denir.

   * Sürece dahil olan bireyler ayrıca özelliğin açıklandığı gibi çalıştığını göstermek için kapsamlı bir test paketi yazacaklardır.

5. Sonunda her şey yolunda giderse, özellik tüm tarayıcılarda uygulanacak ve web siteleri oluşturulurken kullanılmaya başlanabilecektir.

**Not:** Özelliği öneren, bir tarayıcıda uygulayan, spesifikasyonu oluşturan, testleri yazan ve üzerinde geri bildirim toplayan kişilerin aynı kişi/kişiler olması tamamen mümkündür.

## Web standartlarının temel ilkeleri

Web'i dahil olmak için benzersiz ve heyecan verici bir sektör haline getiren temel web ilkeleri şunlardır:

1. Katkıda bulunmaya ve kullanmaya açık (Open) olması; bu nedenle tek bir özel kuruluş tarafından kontrol edilmemesi veya patent engeli olmaması.

2. Erişilebilir (Accessible) ve birlikte çalışabilir (interoperable) olması.

3. Web'i bozmamaları (They don't break the web).

Bunların her birine biraz daha ayrıntılı bakalım.

### "Açık" standartlar

Web standartlarının TimBL ve W3C'nin başından beri üzerinde anlaştığı en önemli yönlerinden biri, web'in (ve web teknolojilerinin) açık olması gerektiğidir. Bu, hem katkıda bulunmakta hem de kullanmakta özgür oldukları ve patentler/lisanslarla engellenmedikleri anlamına gelir. Bu önemlidir — eğer bir web teknolojisi çalışmak için patentli/lisanslı teknolojilere dayanıyorsa, patent/sahip daha sonra uygulayıcı tarayıcı satıcılarından potansiyel olarak büyük miktarlarda para talep edebilir ve bu maliyetler daha sonra tarayıcı kullanıcılarına yansıtılabilir.

Buna ek olarak, web teknolojileri açıkça, birçok farklı şirketin işbirliğiyle yaratıldığı için hiçbir şirketin onları kontrol edemeyeceği anlamına gelir, ki bu gerçekten iyi bir şeydir. Tek bir şirketin aniden tüm web'i bir ödeme duvarının arkasına koymaya karar vermesini veya herkesin web siteleri yapmaya devam etmek için satın alması gereken yeni bir HTML sürümü yayınlamasını veya daha kötüsü, artık ilgilenmediklerine karar verip sadece kapatmasını istemezdiniz.

Açık standartlar, web'in ücretsiz olarak bulunabilen bir kamu kaynağı olarak kalmasını sağlar; burada herkes ücretsiz olarak bir web sitesi oluşturmak için kod yazabilir ve herkes standart oluşturma sürecine katkıda bulunabilir.

### Erişilebilir ve birlikte çalışabilir

Web ve web tarayıcıları temel olarak web içeriğinin engelli insanlar için erişilebilir (accessible) olması amacıyla tasarlanmıştır. Başlangıçta koşullar ne olursa olsun insanların bilgiye erişmesini sağlayan harika bir dengeleyici olarak öngörülmüştür. Bu şu anlama gelir, örneğin:

* Fare veya işaretleme aygıtı kullanamayan kişiler, web'de gezinmek için klavyeyi kullanabilir.

* Görme engelli kişiler içeriği büyütebilir veya içeriği onlara okumak ve kontrolleri mantıklı bir şekilde tanımlamak için *ekran okuyucu (screen reader)* adı verilen bir program kullanabilir.

Buna ek olarak, web teknolojilerinin birlikte çalışabilir (interoperable) olması amaçlanmıştır. Web teknolojileri yayınlanan standartlara göre uygulandığı için, tarayıcılar belirli bir girdi (örneğin HTML, CSS veya JS kodu) için aynı işlenmiş (*rendered*) çıktıyı sağlamalıdır — başka bir deyişle, bir web sitesi birden fazla tarayıcıda tutarlı bir şekilde çalışmalıdır.

### Web'i bozmayın

Açık web standartları etrafında duyacağınız bir diğer ifade de "web'i bozmayın"dır (*don't break the web*). Bunun arkasındaki fikir, herhangi bir yeni web teknolojisinin kendisinden öncekilerle geriye dönük uyumlu (backwards compatible) olması gerektiğidir, böylece mevcut web siteleri eskiden olduğu gibi çalışmaya devam edecektir.

Web tarayıcısı satıcıları, kullanıcılarının bir web sitesinin bozuk olduğunu düşünmelerine ve bunun sonucunda başka bir tarayıcı denemelerine neden olacak şekilde işlemede (*rendering*) veya işlevsellikte bir farklılığa neden olmadan yeni web teknolojilerini uygulayabilmelidir.

# Tarayıcılar web sitelerini nasıl yükler?

Önceki makalede, web sitelerinin üzerine inşa edildiği teknolojilere genel bir bakış atmıştık. Bu makalede, bu teknolojilerin nasıl işlendiği (render edildiği) sürecini adım adım inceliyoruz — bir tarayıcı, bir web sayfasını oluşturan kod dosyalarını ve diğer kaynakları (assets) aldığında (*Web nasıl çalışır?* bölümünde ele alındığı gibi), kullanıcının etkileşime girdiği o bitmiş deneyimi yaratmak için bunlar nasıl bir araya getirilir?

**Ön koşullar:** Bilgisayarınızın işletim sistemine, web tarayıcılarına ve web teknolojilerine temel aşinalık.
**Öğrenme çıktıları:**

* Bir HTTP yanıtında döndürülen farklı kaynak (asset) türleri.

* Kullanıcıya gösterilen bir web sayfasını işlemek (*render*) için farklı dosyaların tarayıcı tarafından nasıl bir araya getirildiği.

* Tarayıcının neden bazen düşmanca bir programlama ortamı, ancak aynı zamanda harika bir programlama ortamı olarak görüldüğü.

## HTTP yanıtlarında hangi dosyalar döndürülür?

Geçen makalede incelediğimiz web teknolojilerine genel bakışı özetlemek gerekirse, HTTP yanıtları (bir web sayfası isteklerine verilen) genellikle aşağıdaki dosya türlerinden bazılarını içerir:

* Web sayfası içeriğini ve yapısını belirten **HTML dosyaları**.

* Stil ve düzenleme bilgisini belirten **CSS dosyaları**.

* Web sayfasının etkileşimli bölümlerinin davranışını belirten **JavaScript dosyaları**.

* Web sayfalarına gömülü olan veya tarayıcı tarafından görüntülenen resimler, videolar, ses dosyaları, PDF'ler ve SVG'ler gibi **medya kaynakları (assets)**.

* Tarayıcının yerel olarak işleyemediği ve bu nedenle işlemek (*render*) üzere cihazdaki ilgili bir uygulamaya devrettiği Word veya Pages belgeleri, PowerPoint slayt desteleri ve Open Office dosyaları gibi **diğer dosya türleri**.

## Web sayfası işleme (rendering)

Kullanıcı yeni bir web sayfasına gittiğinde (bir bağlantıya tıklayarak veya tarayıcı adres çubuğuna bir web adresi girerek), birkaç HTTP isteği gönderilir ve HTTP yanıtlarında birkaç dosya geri gönderilir. Bu yanıtlarda alınan dosyalar tarayıcı tarafından işlenir ve kullanıcının etkileşime girebileceği bir web sayfası halinde bir araya getirilir. Parçaların bir web sayfasına dönüştürülmek üzere birleştirildiği bu sürece *işleme (rendering)* denir.

Aşağıdaki bölümler, bir tarayıcının bir web sayfasını nasıl işlediğine dair genel (*high-level*) bir açıklama sunar. Bunun basitleştirilmiş bir açıklama olduğunu ve farklı tarayıcıların süreci farklı şekillerde ele alacağını unutmayın. Ancak bu, yine de işlerin nasıl yürüdüğüne dair size bir fikir verecektir.

### HTML'in işlenmesi

Başlangıç olarak, web sayfası içeriğini barındıran ve yapısını tanımlayan HTML dosyası tarayıcı tarafından alınır ve ayrıştırılır (*parsed*). Tarayıcı bunu **DOM ağacı** (Belge Nesne Modeli - *Document Object Model*) adı verilen ağaç benzeri bir yapıya dönüştürür. DOM, bilgisayarın belleğindeki HTML belge yapısını temsil eder. Örnek olarak şu temel HTML parçacığını ele alalım:

```
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>

```

HTML'deki her element, öznitelik (*attribute*) ve metin parçası ağaç yapısında bir DOM düğümü (*node*) haline gelir. Düğümler, diğer DOM düğümleriyle olan ilişkileri ile tanımlanır. Bazı elementler alt düğümlerin (*child nodes*) ebeveynidir (*parents*) ve alt düğümlerin kardeşleri (*siblings*) vardır. Tarayıcı bu HTML'i ayrıştıracak ve ondan aşağıdaki DOM ağacını oluşturacaktır:

```
P
├─ "Let's use:"
├─ SPAN
|  └─ "HTML"
├─ SPAN
|  └─ "CSS"
└─ SPAN
   └─ "JavaScript"

```

Bu DOM ağacında, `<p>` elementimize karşılık gelen düğüm bir ebeveyndir. Çocukları arasında bir metin düğümü ve `<span>` elementlerimize karşılık gelen üç düğüm bulunur. SPAN düğümleri de çocukları olarak metin düğümleri olan ebeveynlerdir. Tarayıcı bu DOM ağacını işlediğinde (*render*), şöyle görünecektir:

Let's use: HTML CSS JavaScript

Belirli HTML elementleri ayrıştırıldığında, daha fazla HTTP isteği tetikleyecektir:

* Harici CSS stil şablonlarına (*stylesheets*) başvuran `<link>` elementleri.

* Harici JavaScript dosyalarına başvuran `<script>` elementleri.

* Web sayfasına gömmek istediğiniz medya dosyalarına başvuran `<img>`, `<video>` ve `<audio>` gibi elementler.

### CSS'in ayrıştırılması ve sayfanın işlenmesi

Sırada CSS'in ele alınması vardır.

Tarayıcı, sayfada bulunan (ya HTML dosyasına dahil edilmiş ya da harici stil şablonlarından getirilmiş) CSS'i ayrıştırır ve farklı CSS stil kurallarını, uygulanacakları HTML elementlerine (DOM'da düğüm - *node* - adı verilen ögeler olarak temsil edilirler) göre farklı "kovalara" ayırır. Tarayıcı daha sonra gerektiği şekilde farklı elementlere stiller ekler (bu ara adıma işleme ağacı - *render tree* denir). İşleme ağacı, kurallar uygulandıktan sonra görünmesi gereken yapıda düzenlenir. Buna sayfaya gömülecek olan tüm resimler ve diğer medya dosyaları da dahildir. Sayfanın görsel görünümü ekranda gösterilir (bu aşamaya boyama/çizme - *painting* denir).

Aşağıdaki diyagram, şu ana kadar konuştuğumuz sürecin bir görselleştirmesini sunar:

![İşleme (rendering) sürecine genel bakış](images/rendering.svg)

Örneğimize dönecek olursak, diyelim ki HTML dosyasında aşağıdaki CSS bulundu:

```
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>

```

```
span {
  border: 1px solid black;
  background-color: lime;
}

```

CSS'te bulunan tek kuralın bir `span` seçicisi vardır, bu nedenle tarayıcı CSS'i çok hızlı bir şekilde ayırabilir! Bu kuralı DOM ağacındaki üç SPAN düğümünün her birine uygular, onlara siyah bir kenarlık ve misket limonu yeşili bir arka plan verir, ardından nihai görsel temsili ekrana çizer (*paint*).

Güncellenmiş çıktı şu şekildedir:

Let's use: **HTML** **CSS** **JavaScript** *(Yeşil arka planlı ve siyah kenarlıklı)*

### JavaScript'in işlenmesi

CSS ele alındıktan sonra, sayfada bulunan herhangi bir JavaScript (ister HTML dosyasına dahil edilmiş ister harici betik dosyalarından getirilmiş olsun) ayrıştırılır (*parsed*), yorumlanır (*interpreted*), derlenir (*compiled*) ve çalıştırılır (*executed*). Bu, nihai sayfa işlemesi tamamlanmadan önce bir noktada gerçekleşir — sonuçta, örneğin DOM'a düğümler ekleyerek veya mevcut olanları değiştirerek bazı JavaScript'ler işlemeyi (*rendering*) etkileyebilir.

Örneğimize dönecek olursak, diyelim ki HTML dosyasında aşağıdaki JavaScript bulundu:

```
<p>
  Let's use:
  <span>HTML</span>
  <span>CSS</span>
  <span>JavaScript</span>
</p>

```

```
span {
  border: 1px solid black;
  background-color: lime;
}

```

```
const spans = document.querySelectorAll("span");

spans.forEach((span) => {
  const reversedText = span.textContent.split("").reverse().join("");
  span.textContent = reversedText;
});

```

Bu JavaScript'in tam olarak nasıl çalıştığını anlamanıza gerek yok, ancak genel hatlarıyla (*high-level*), DOM'daki her SPAN düğümünü bulur ve alt metin düğümlerindeki karakterlerin sırasını tersine çevirir.

### Başka hangi işleme (rendering) adımları vardır?

Sayfa işleme sırasında birkaç başka şey daha olur, ancak hepsini burada tartışmayacağız. Bahsetmeye değer bir diğer önemli ek olay, yardımcı teknolojilerin (örneğin ekran okuyucuların) bağlanabilmesi için DOM'a dayalı bir erişilebilirlik ağacının (*accessibility tree*) oluşturulmasıdır; bu, işlenen içeriği göremeyen kişilerin onunla etkileşime girmesini sağlar.

Bunun hakkında daha fazlasını daha sonra Erişilebilirlik modülümüzde öğreneceksiniz.

## Tarayıcı: düşmanca ve harika bir programlama ortamı

Önyüz (*Front-end*) web geliştirme bazen sinir bozucu olabilir ve bazı insanlar tarayıcıyı düşmanca bir programlama ortamı olarak görür. Bunun nedeni, diğer programlama ortamlarından farklı olarak, kodunuzun üzerinde çalışacağı ortam hakkında garanti vermenin çok daha zor olmasıdır. Kullanıcılarınızın sahip olacağı işletim sistemi, tarayıcı, dil, konum, ağ bağlantısı, CPU, GPU, bellek, pil ömrü vb. farklı kombinasyonların tümünü önceden bilemezsiniz, bu nedenle hepsi için mükemmel bir kullanıcı deneyimi garanti edemezsiniz.

Modern tarayıcılar web standartlarını oldukça tutarlı bir şekilde uygulama eğilimindedir, ancak yine de aşılması gereken çok fazla belirsizlik vardır. Bir web geliştiricisi olarak, savunmacı bir şekilde programlayarak ve kullandığınız özelliklerde muhafazakar davranarak bu belirsizliği kucaklamanız gerekecektir. Bu, önceki makalede özetlenen en iyi uygulamalara (*best practices*) bağlı kalmaya dayanır.

İyi tarafından bakarsak, web aynı zamanda birçok nedenden dolayı harika bir programlama ortamıdır.

Başlangıç olarak, evrensel erişim düşünülerek tasarlanmıştır. Web'in temel durumu erişilebilir ve bağlantılandırılabilirdir (*linkable*). Bu temellerin bazılarını diğer ortamlarda başarmak daha zordur. Uygulama dağıtımı web üzerinden basit ve güçlüdür. Kullanıcılarınızı karmaşık bir kurulum sürecinden geçirmenize gerek yoktur: sadece onları bir web adresine yönlendirirsiniz ve işlem tamamlanır. Uygulama güncellemeleri genellikle basittir. Çoğu durumda, ziyaretçiler tarayıcı sekmelerini yeniden yüklediklerinde uygulamanın yeni sürümlerini görebilirler. Ziyaretçilerin yazılım güncellemelerini düzenli olarak indirip kurmasını sağlama konusunda endişelenmenize gerek yoktur. Web topluluğu canlı ve yardımseverdir. Daha sonra *Araştırma ve öğrenme* makalemizde tartışacağımız gibi, yardım istemek için gidebileceğiniz pek çok yer ve öğrenmek için kullanabileceğiniz harika kaynaklar vardır.