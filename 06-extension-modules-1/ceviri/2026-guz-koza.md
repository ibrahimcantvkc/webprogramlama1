> **Yasal Uyarı:** Bu belge, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiştir. Orijinal içerik Mozilla Contributors tarafından hazırlanmış olup Creative Commons Attribution-ShareAlike (CC BY-SA) lisansı altında yayımlanmaktadır. Orijinal kaynak: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions — Commit SHA: e7808c08820d6e167bf5013b4f94ef3ff90ad147. Kod örneklerinde yalnızca yorum satırları çevrilmiş; kod, değişken adları ve API isimleri orijinal haliyle bırakılmıştır. Bu çevirinin hiçbir ticari amacı yoktur.

# Extension Modules – Türkçe Çeviri

**Modül:** Extension Modules — Learn web development › Extensions  
**Orijinal:** https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions  
**Takım:** Koza | **Çeviren:** Aleyna Sümbül (@AleynaSl)  
**Kaynak commit:** `e7808c08820d6e167bf5013b4f94ef3ff90ad147`  
**Kapsam:** Advanced JavaScript Objects · Client-side APIs · Async JavaScript

## İçindekiler

1. [Gelişmiş JavaScript Nesnelerine Genel Bakış (Modül Dizini)](#makale-1)
2. [Nesne Prototipleri](#makale-2)
3. [Nesne Yönelimli Programlama](#makale-3)
4. [JavaScript'te Sınıflar](#makale-4)
5. [Becerilerinizi Test Edin: Nesne Yönelimli JavaScript](#makale-5)
6. [Nesne Oluşturma Pratiği](#makale-6)
7. [Zıplayan Toplar Demosuna Özellik Ekleme](#makale-7)
8. [İstemci Tarafı Web API'lerine Genel Bakış (Modül Dizini)](#makale-8)
9. [Web API'lerine Giriş](#makale-9)
10. [Video ve Ses API'leri](#makale-10)
11. [Grafik Çizme](#makale-11)
12. [İstemci Tarafı Depolama](#makale-12)
13. [Üçüncü Taraf API'leri](#makale-13)
14. [Eşzamansız JavaScript'e Genel Bakış (Modül Dizini)](#makale-14)
15. [Eşzamansız JavaScript'e Giriş](#makale-15)
16. [Sözler (Promise) Nasıl Kullanılır](#makale-16)
17. [Söz Tabanlı Bir API Uygulama](#makale-17)
18. [Çalışanlara (Worker) Giriş](#makale-18)
19. [Animasyonları Sıralama – Meydan Okuma](#makale-19)


---

SCÜ Şarkışla UBYO | Bilişim Sistemleri ve Teknolojileri Bölümü

Bu depo, Web Programlama I dersinin resmi **"Çevik (Agile) Operasyon Merkezi"**dir. Dönem boyunca tüm çeviriler, sunumlar, uygulama kodları ve soru-cevap dokümanları bu depo üzerinden, açık kaynak (open-source) sektör standartlarına uygun olarak yönetilecektir. 

Gelişmiş JavaScript nesneleri
Bu belge, MDN Web Docs'taki "Advanced JavaScript objects" modülünün (Learn web development › Extension modules) Türkçe çevirisidir. Orijinal: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects — Metin MDN katkıcılarına aittir ve Creative Commons (CC BY-SA) lisansı altında yayımlanmıştır; bu çeviri de aynı lisans koşullarına tabidir. Kod örneklerinde yalnızca yorum satırları çevrilmiş; kod, değişken adları ve konsol çıktı metinleri orijinal haliyle bırakılmıştır.
İçindekiler
1. Modüle genel bakış

---

<a id="makale-2"></a>

📄 **Bu bölüm şu MDN makalesinin çevirisidir:**  
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes

## 2. Nesne Prototipleri

2. Nesne prototipleri
3. Nesne yönelimli programlama
4. JavaScript'te sınıflar
5. Becerilerinizi test edin: Nesne yönelimli JavaScript
6. Nesne oluşturma pratiği
7. Zorluk: Zıplayan toplar demosuna özellik ekleme
8. Becerilerinizi test edin: Gelişmiş JavaScript nesneleri (dizin sayfası)
1. Modüle genel bakış
JavaScript'te, dizi gibi çekirdek JavaScript özelliklerinden JavaScript üzerine inşa edilmiş tarayıcı API'lerine kadar çoğu şey bir nesnedir. İlgili işlevleri ve değişkenleri verimli paketler halinde kapsüllemek ve kullanışlı veri kapları olarak görev yapmak üzere kendi nesnelerinizi de oluşturabilirsiniz.
JavaScript nesnelerinin nasıl çalıştığına dair daha derin bir bilgi; web geliştirmede kendinize güveniniz arttıkça, daha karmaşık uygulamalar yazmaya başladıkça ve kendi kütüphanelerinizi oluşturdukça işinize yarar. Bu modül, JavaScript nesne teorisini ve nesne yönelimli programlama pratiğini sunarak size yardımcı olacaktır.
Ön koşullar
Bu modüle başlamadan önce JavaScript'in temellerini, özellikle de JavaScript nesne temellerini öğrenmiş olmalısınız. HTML ve CSS'e bir miktar aşina olmak da faydalı olacaktır.
Not: Dosya oluşturamadığınız bir bilgisayar, tablet veya başka bir cihazda çalışıyorsanız, kodu CodePen veya JSFiddle gibi bir çevrimiçi düzenleyicide çalıştırmayı deneyebilirsiniz.
Eğitimler ve zorluklar
• Nesne prototipleri: Prototipler, JavaScript nesnelerinin birbirinden özellik devralmasını sağlayan mekanizmadır ve klasik nesne yönelimli programlama dillerindeki kalıtım mekanizmalarından farklı çalışır. Bu makalede prototip zincirlerinin nasıl çalıştığını inceliyoruz.
• Nesne yönelimli programlama: Bu makalede "klasik" nesne yönelimli programlamanın bazı temel ilkelerini anlatıyor ve bunların JavaScript'teki prototip modelinden nasıl farklı olduğuna bakıyoruz.
• JavaScript'te sınıflar: JavaScript, "klasik" nesne yönelimli programlar yazmak isteyenler için bazı özellikler sunar. Bu makalede bu özellikleri anlatıyoruz.
• Nesne oluşturma pratiği: Önceki makalelerde temel JavaScript nesne teorisini ve sözdizimi ayrıntılarını ele alarak size sağlam bir temel sunduk. Bu makalede pratik bir alıştırmaya dalıyor, özel JavaScript nesneleri oluşturma pratiğinizi artırıyor ve eğlenceli, renkli bir sonuç elde ediyoruz: renkli zıplayan toplar.
• Zıplayan toplar demosuna özellik ekleme (Zorluk): Bu zorlukta, önceki makaledeki zıplayan toplar demosunu başlangıç noktası olarak kullanıp ona yeni ve ilginç özellikler eklemeniz bekleniyor.
Becerilerinizi test edin
Öğretici makaleler arasına, ilerlemeden önce en önemli bilgileri akılda tutup tutmadığınızı kontrol etmenizi sağlayacak "Becerilerinizi test edin" makaleleri yerleştirilmiştir. Hepsine birlikte göz atmak isterseniz bunları "Becerilerinizi test edin: Gelişmiş JavaScript nesneleri" sayfasında listelenmiş halde bulabilirsiniz.
Ayrıca bakın
• Learn JavaScript: Web geliştirici adayları için mükemmel bir kaynak. JavaScript'i etkileşimli bir ortamda, kısa dersler ve otomatik değerlendirmeyle yönlendirilen etkileşimli testlerle öğrenin. İlk 40 ders ücretsizdir; kursun tamamı küçük bir tek seferlik ödemeyle edinilebilir.
2. Nesne prototipleri
Prototipler, JavaScript nesnelerinin birbirinden özellik devralmasını sağlayan mekanizmadır. Bu makalede prototipin ne olduğunu, prototip zincirlerinin nasıl çalıştığını ve bir nesnenin prototipinin nasıl ayarlanabileceğini açıklıyoruz.
• Ön koşullar: JavaScript temellerine (özellikle Nesne temellerine) aşinalık.
• Öğrenme çıktıları: JavaScript prototip zinciri; özellik gölgeleme kavramı; prototip ayarlama; prototip ve kalıtım kavramları.
Prototip zinciri
Tarayıcının konsolunda bir nesne sabiti (object literal) oluşturmayı deneyin:
const myObject = {
  city: "Madrid",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet(); // Greetings from Madrid
Bu, city adlı bir veri özelliğine ve greet() adlı bir metoda sahip bir nesnedir. Konsola nesnenin adını ve ardından bir nokta yazarsanız (örneğin myObject.), konsol bu nesne için kullanılabilen tüm özelliklerin bir listesini açar. city ve greet'in yanı sıra çok sayıda başka özellik de olduğunu göreceksiniz!
__defineGetter__
__defineSetter__
__lookupGetter__
__lookupSetter__
__proto__
city
constructor
greet
hasOwnProperty
isPrototypeOf
propertyIsEnumerable
toLocaleString
toString
valueOf
Bunlardan birine erişmeyi deneyin:
myObject.toString(); // "[object Object]"
Çalışıyor (toString()'in ne yaptığı pek belli olmasa da).
Bu fazladan özellikler nedir ve nereden geliyor?
JavaScript'teki her nesnenin, prototip (prototype) adı verilen yerleşik bir özelliği vardır. Prototipin kendisi de bir nesnedir; dolayısıyla prototipin de kendi prototipi vardır ve bu, prototip zinciri (prototype chain) denen yapıyı oluşturur. Zincir, kendi prototipi null olan bir prototipe ulaşıldığında sona erer.
Not: Bir nesnenin prototipini gösteren özelliğin adı prototype değildir. Adı standart değildir, ancak uygulamada tüm tarayıcılar __proto__ adını kullanır. Bir nesnenin prototipine erişmenin standart yolu Object.getPrototypeOf() metodudur.
Bir nesnenin bir özelliğine erişmeye çalıştığınızda: özellik nesnenin kendisinde bulunamazsa prototipte aranır. Özellik hâlâ bulunamazsa prototipin prototipinde aranır ve bu, ya özellik bulunana ya da zincirin sonuna ulaşılana kadar sürer; zincirin sonuna ulaşılırsa undefined döndürülür.
Yani myObject.toString() çağırdığımızda tarayıcı şunları yapar:
• toString'i myObject içinde arar
• orada bulamayınca myObject'in prototip nesnesinde toString arar
• orada bulur ve çağırır.
myObject'in prototipi nedir? Öğrenmek için Object.getPrototypeOf() fonksiyonunu kullanabiliriz:
Object.getPrototypeOf(myObject); // Object { }
Bu, Object.prototype adlı bir nesnedir ve tüm nesnelerin varsayılan olarak sahip olduğu en temel prototiptir. Object.prototype'ın prototipi null'dır, yani prototip zincirinin sonundadır:
[Şekil: myObject için prototip zinciri — myObject → Object.prototype → null]
Bir nesnenin prototipi her zaman Object.prototype değildir. Şunu deneyin:
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null
Bu kod bir Date nesnesi oluşturur, ardından prototip zincirinde yukarı doğru yürüyerek prototipleri günlüğe yazar. myDate'in prototipinin bir Date.prototype nesnesi olduğunu, onun prototipinin ise Object.prototype olduğunu gösterir.
[Şekil: myDate için prototip zinciri — myDate → Date.prototype → Object.prototype → null]
Aslında myDate2.getTime() gibi tanıdık metotları çağırdığınızda, Date.prototype üzerinde tanımlı bir metodu çağırıyorsunuz.
Özellikleri gölgeleme
Bir nesnede, nesnenin prototipinde zaten tanımlı olan aynı adlı bir özellik tanımlarsanız ne olur? Bakalım:
const myDate = new Date(1995, 11, 17);

console.log(myDate.getTime()); // 819129600000

myDate.getTime = function () {
  console.log("something else!");
};

myDate.getTime(); // 'something else!'
Protip zincirinin açıklaması göz önüne alındığında bu öngörülebilir olmalıdır. getTime() çağırdığımızda tarayıcı önce myDate içinde bu adda bir özellik arar ve yalnızca myDate onu tanımlamıyorsa prototipe bakar. Dolayısıyla getTime()'ı myDate'e eklediğimizde, myDate içindeki sürüm çağrılır.
Buna özelliğin "gölgelenmesi" (shadowing) denir.
Prototip ayarlama
JavaScript'te bir nesnenin prototipini ayarlamanın çeşitli yolları vardır; burada ikisini anlatacağız: Object.create() ve yapıcılar (constructors).
Object.create kullanma
Object.create() metodu yeni bir nesne oluşturur ve bu yeni nesnenin prototipi olarak kullanılacak nesneyi belirtmenize olanak tanır.
İşte bir örnek:
const personPrototype = {
  greet() {
    console.log("hello!");
  },
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
Burada greet() metoduna sahip bir personPrototype nesnesi oluşturuyoruz. Ardından Object.create() ile prototipi personPrototype olan yeni bir nesne oluşturuyoruz. Artık yeni nesne üzerinde greet() çağırabiliriz ve uygulamasını prototip sağlar.
Yapıcı (constructor) kullanma
JavaScript'te tüm fonksiyonların prototype adlı bir özelliği vardır. Bir fonksiyonu yapıcı olarak çağırdığınızda, bu özellik yeni oluşturulan nesnenin prototipi olarak ayarlanır (geleneksel olarak __proto__ adlı özellikte).
Bu nedenle bir yapıcının prototype'ını ayarlarsak, o yapıcıyla oluşturulan tüm nesnelerin bu prototipe sahip olmasını sağlayabiliriz:
const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, personPrototype);
// veya
// Person.prototype.greet = personPrototype.greet;
Burada şunları oluşturuyoruz:
• greet() metoduna sahip bir personPrototype nesnesi
• oluşturulacak kişinin adını başlatan bir Person() yapıcı fonksiyonu.
Ardından personPrototype içinde tanımlı metotları, Object.assign kullanarak Person fonksiyonunun prototype özelliğine yerleştiriyoruz.
Bu koddan sonra, Person() kullanılarak oluşturulan nesneler prototip olarak Person.prototype'ı alır; o da otomatik olarak greet metodunu içerir.
const reuben = new Person("Reuben");
reuben.greet(); // hello, my name is Reuben!
Bu aynı zamanda, myDate'in prototipine neden Date.prototype dendiğini de açıklar: bu, Date yapıcısının prototype özelliğidir.
Kendi özellikleri (own properties)
Yukarıdaki Person yapıcısıyla oluşturduğumuz nesnelerin iki özelliği vardır:
• yapıcıda ayarlandığı için doğrudan Person nesnelerinde görünen bir name özelliği
• prototipte ayarlanmış bir greet() metodu.
Metotların prototipte, veri özelliklerinin ise yapıcıda tanımlandığı bu kalıpla sıkça karşılaşılır. Bunun nedeni, metotların genellikle oluşturduğumuz her nesne için aynı olması, buna karşılık veri özellikleri için çoğunlukla her nesnenin kendi değerine sahip olmasını istememizdir (tıpkı burada her kişinin farklı bir ada sahip olması gibi).
Burada name gibi doğrudan nesnenin içinde tanımlanan özelliklere kendi özellikleri (own properties) denir ve bir özelliğin kendi özelliği olup olmadığını statik Object.hasOwn() metoduyla kontrol edebilirsiniz:
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false
Not: Burada statik olmayan Object.hasOwnProperty() metodunu da kullanabilirsiniz, ancak mümkünse Object.hasOwn() kullanmanızı öneririz.
Prototipler ve kalıtım
Prototipler, JavaScript'in güçlü ve çok esnek bir özelliğidir; kodun yeniden kullanılmasını ve nesnelerin birleştirilmesini mümkün kılar.
Özellikle kalıtımın (inheritance) bir türünü desteklerler. Kalıtım, nesne yönelimli programlama dillerinin, programcıların bir sistemdeki bazı nesnelerin diğer nesnelerin daha uzmanlaşmış sürümleri olduğu fikrini ifade etmesini sağlayan bir özelliğidir.
Örneğin bir okulu modelliyorsak profesörlerimiz ve öğrencilerimiz olabilir: ikisi de insandır, dolayısıyla bazı ortak özellikleri vardır (örneğin ikisinin de adı vardır), ancak her biri ek özellikler ekleyebilir (örneğin profesörlerin verdiği bir ders vardır) ya da aynı özelliği farklı biçimlerde uygulayabilir. Bir OOP sisteminde, hem profesörlerin hem de öğrencilerin insandan kalıtım aldığını (inherit from) söyleyebiliriz.
JavaScript'te Professor ve Student nesnelerinin prototipi Person olabiliyorsa, farklı olması gereken özellikleri ekleyip yeniden tanımlarken ortak özellikleri devralabildiklerini görebilirsiniz.
Bir sonraki makalede kalıtımı, nesne yönelimli programlama dillerinin diğer ana özellikleriyle birlikte ele alacak ve JavaScript'in bunları nasıl desteklediğini göreceğiz.
Özet
Bu makale; prototip nesne zincirlerinin nesnelerin birbirinden özellik devralmasına nasıl olanak tanıdığını, prototype özelliğini ve bunun yapıcılara metot eklemek için nasıl kullanılabileceğini ve ilgili diğer konuları kapsadı.
Bir sonraki makalede nesne yönelimli programlamanın altında yatan kavramlara bakacağız.
3. Nesne yönelimli programlama

---

<a id="makale-3"></a>

📄 **Bu bölüm şu MDN makalesinin çevirisidir:**  
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming

## 3. Nesne Yönelimli Programlama

Nesne yönelimli programlama (OOP), Java ve C++ dahil birçok programlama dilinin temelini oluşturan bir programlama paradigmasıdır. Bu makalede OOP'nin temel kavramlarına genel bir bakış sunacağız. Üç ana kavramı anlatacağız: sınıflar ve örnekler, kalıtım ve kapsülleme. Şimdilik bu kavramları JavaScript'e özel olarak değinmeden anlatacağız; bu nedenle tüm örnekler sözde kodla (pseudocode) verilmiştir.
Not: Kesin olmak gerekirse, burada anlatılan özellikler, sınıf tabanlı veya "klasik" OOP adı verilen belirli bir OOP tarzına aittir. İnsanlar OOP'den söz ettiklerinde genellikle kastettikleri tür budur.
Bunun ardından JavaScript'te yapıcıların (constructors) ve prototip zincirinin bu OOP kavramlarıyla nasıl ilişkili olduğuna ve nasıl farklılaştığına bakacağız. Sonraki makalede, nesne yönelimli programları uygulamayı kolaylaştıran bazı ek JavaScript özelliklerine göz atacağız.
• Ön koşullar: JavaScript temellerine (özellikle Nesne temellerine) ve bu modüldeki önceki derslerde ele alınan nesne yönelimli JavaScript kavramlarına aşinalık.
• Öğrenme çıktıları: Nesne yönelimli programlama (OOP) kavramları: sınıflar, örnekler, kalıtım ve kapsülleme. Bu OOP kavramlarının JavaScript'e nasıl uygulandığı ve JavaScript ile Java veya C++ gibi bir dil arasındaki farklar.
Nesne yönelimli programlama, bir sistemi, her biri sistemin belirli bir yönünü temsil eden nesnelerden oluşan bir koleksiyon olarak modellemekle ilgilidir. Nesneler hem fonksiyonları (veya metotları) hem de veriyi içerir. Bir nesne, onu kullanmak isteyen diğer koda genel (public) bir arayüz sunar ancak kendi özel (private), iç durumunu (state) saklı tutar; sistemin diğer parçalarının nesnenin içinde neler olup bittiğiyle ilgilenmesi gerekmez.
Sınıflar ve örnekler
Bir problemi OOP'de nesneler cinsinden modellediğimizde, sistemimizde olmasını istediğimiz nesne türlerini temsil eden soyut tanımlar oluştururuz. Örneğin bir okulu modelliyorsak, profesörleri temsil eden nesneler isteyebiliriz. Her profesörün bazı ortak özellikleri vardır: hepsinin bir adı ve verdikleri bir ders vardır. Ayrıca her profesör belirli şeyleri yapabilir: örneğin hepsi bir ödevi notlandırabilir ve yıl başında öğrencilerine kendilerini tanıtabilir.
Dolayısıyla Professor, sistemimizde bir sınıf (class) olabilir. Sınıfın tanımı, her profesörün sahip olduğu veriyi ve metotları listeler.
Sözde kodla bir Professor sınıfı şöyle yazılabilir:
class Professor
    properties
        name
        teaches
    methods
        grade(paper)
        introduceSelf()
Bu, şunlara sahip bir Professor sınıfı tanımlar:
• iki veri özelliği: name ve teaches
• iki metot: bir ödevi notlandırmak için grade() ve kendini tanıtmak için introduceSelf().
Bir sınıf tek başına hiçbir şey yapmaz: o türden somut nesneler oluşturmak için bir tür şablondur. Oluşturduğumuz her somut profesöre Professor sınıfının bir örneği (instance) denir. Örnek oluşturma işlemi, yapıcı (constructor) adı verilen özel bir fonksiyon tarafından gerçekleştirilir. Yeni örnekte başlatmak istediğimiz her iç durum için yapıcıya değerler geçiririz.
Genellikle yapıcı, sınıf tanımının bir parçası olarak yazılır ve genellikle sınıfın kendisiyle aynı ada sahiptir:
class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()
Bu yapıcı iki parametre alır; böylece yeni bir somut profesör oluşturduğumuzda name ve teaches özelliklerini başlatabiliriz.
Artık bir yapıcımız olduğuna göre birkaç profesör oluşturabiliriz. Programlama dilleri bir yapıcının çağrıldığını belirtmek için sıklıkla new anahtar sözcüğünü kullanır.
walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'
Bu, her ikisi de Professor sınıfının örneği olan iki nesne oluşturur.
Kalıtım
Okulumuzda öğrencileri de temsil etmek istediğimizi varsayalım. Profesörlerin aksine öğrenciler ödev notlandıramaz, belirli bir ders vermez ve belirli bir sınıf düzeyine (yıla) aittir.
Ancak öğrencilerin de bir adı vardır ve kendilerini tanıtmak isteyebilirler; bu yüzden bir öğrenci sınıfının tanımını şöyle yazabiliriz:
class Student
    properties
        name
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
Öğrencilerin ve profesörlerin bazı özellikleri paylaştığını, daha doğrusu bir düzeyde aynı türden şeyler olduklarını ifade edebilmek faydalı olurdu. Kalıtım (inheritance) bunu yapmamıza olanak tanır.
Önce öğrencilerin ve profesörlerin ikisinin de insan olduğunu, insanların da adları olduğunu ve kendilerini tanıtmak istediklerini gözlemleyerek başlıyoruz. Bunu, insanların tüm ortak özelliklerini tanımladığımız yeni bir Person sınıfı tanımlayarak modelleyebiliriz. Ardından Professor ve Student ikisi de Person'dan türeyebilir (derive) ve kendi ek özelliklerini ekleyebilir:
class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
Bu durumda Person'ın, hem Professor hem de Student'ın üst sınıfı (superclass) veya ebeveyn sınıfı (parent class) olduğunu söyleriz. Tersine, Professor ve Student, Person'ın alt sınıfları (subclasses) veya çocuk sınıflarıdır (child classes).
introduceSelf() metodunun üç sınıfta da tanımlandığını fark etmiş olabilirsiniz. Bunun nedeni, tüm insanlar kendilerini tanıtmak istese de bunu yapış biçimlerinin farklı olmasıdır:
walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'
Öğrenci veya profesör olmayan insanlar için introduceSelf()'in varsayılan bir uygulamasına sahip olabiliriz:
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'
Bir metodun farklı sınıflarda aynı ada ancak farklı bir uygulamaya sahip olması özelliğine çok biçimlilik (polymorphism) denir. Bir alt sınıftaki metot, üst sınıfın uygulamasının yerini aldığında, alt sınıfın üst sınıftaki sürümü geçersiz kıldığını (override) söyleriz.
Kapsülleme
Nesneler, onları kullanmak isteyen diğer koda bir arayüz sunar ancak kendi iç durumlarını korurlar. Nesnenin iç durumu özel (private) tutulur; yani yalnızca nesnenin kendi metotları tarafından erişilebilir, diğer nesneler tarafından erişilemez. Bir nesnenin iç durumunu özel tutmaya ve genel olarak genel arayüzü ile özel iç durumu arasında net bir ayrım yapmaya kapsülleme (encapsulation) denir.
Bu faydalı bir özelliktir çünkü programcının, bir nesnenin iç uygulamasını, onu kullanan tüm kodu bulup güncellemek zorunda kalmadan değiştirebilmesini sağlar: bu nesne ile sistemin geri kalanı arasında bir tür güvenlik duvarı oluşturur.
Örneğin öğrencilerin okçuluk çalışmasına yalnızca ikinci sınıfta veya daha üstte olmaları halinde izin verildiğini varsayalım. Bunu, yalnızca öğrencinin year özelliğini dışarıya açarak uygulayabiliriz ve diğer kod, öğrencinin derse girip giremeyeceğine karar vermek için buna bakabilir:
if (student.year > 1) {
  // öğrenciyi derse al
}
Sorun şu ki, öğrencilerin okçuluk çalışmasına izin verme ölçütünü değiştirmeye karar verirsek (örneğin ebeveynin veya vasinin de izin vermesini zorunlu kılarak), sistemimizde bu testi yapan her yeri güncellememiz gerekir. Bu mantığı tek bir yerde uygulayan, Student nesnelerinde bir canStudyArchery() metodu olması daha iyi olurdu:
class Student : extends Person
    properties
       year
    constructor
       Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }
if (student.canStudyArchery()) {
  // öğrenciyi derse al
}
Böylece okçuluk çalışmasıyla ilgili kuralları değiştirmek istersek yalnızca Student sınıfını güncellememiz yeterli olur ve onu kullanan tüm kod çalışmaya devam eder.
Birçok OOP dilinde, bazı özellikleri private olarak işaretleyerek diğer kodun bir nesnenin iç durumuna erişmesini engelleyebiliriz. Nesnenin dışındaki kod bunlara erişmeye çalışırsa bu bir hata üretir:
class Student : extends Person
    properties
       private year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // error: 'year' is a private property of Student
Erişimi bu şekilde zorunlu kılmayan dillerde programcılar, bir özelliğin özel kabul edilmesi gerektiğini belirtmek için, adın alt çizgiyle başlaması gibi adlandırma kurallarını kullanır.
OOP ve JavaScript
Bu makalede Java ve C++ gibi dillerde uygulanan sınıf tabanlı nesne yönelimli programlamanın bazı temel özelliklerini anlattık.
Önceki iki makalede JavaScript'in birkaç çekirdek özelliğine baktık: yapıcılar ve prototipler. Bu özelliklerin yukarıda anlatılan OOP kavramlarının bazılarıyla elbette bir ilişkisi vardır.
• JavaScript'teki yapıcılar, bir sınıf tanımına benzer bir şey sunar; bir nesnenin "şeklini", içerdiği metotlar dahil, tek bir yerde tanımlamamıza olanak tanır. Ancak burada prototipler de kullanılabilir. Örneğin bir metot, yapıcının prototype özelliği üzerinde tanımlanırsa, o yapıcıyla oluşturulan tüm nesneler bu metodu prototipleri aracılığıyla alır ve metodu yapıcıda tanımlamamız gerekmez.
• Prototip zinciri, kalıtımı uygulamanın doğal bir yolu gibi görünür. Örneğin prototipi Person olan bir Student nesnemiz olabilirse, bu nesne name'i devralabilir ve introduceSelf()'i geçersiz kılabilir.
Ancak bu özellikler ile yukarıda anlatılan "klasik" OOP kavramları arasındaki farkları anlamakta fayda var. Burada birkaçını vurgulayacağız.
Birincisi, sınıf tabanlı OOP'de sınıflar ve nesneler iki ayrı yapıdır ve nesneler her zaman sınıfların örnekleri olarak oluşturulur. Ayrıca bir sınıfı tanımlamak için kullanılan özellik (sınıf sözdiziminin kendisi) ile bir nesneyi örneklemek için kullanılan özellik (bir yapıcı) arasında bir ayrım vardır. JavaScript'te ise ayrı bir sınıf tanımı olmadan, bir fonksiyon veya nesne sabiti kullanarak nesneler oluşturabiliriz ve sıklıkla da böyle yaparız. Bu, nesnelerle çalışmayı klasik OOP'dekinden çok daha hafif hâle getirebilir.
İkincisi, bir prototip zinciri bir kalıtım hiyerarşisine benzese ve bazı yönlerden onun gibi davransa da, diğer yönlerden farklıdır. Bir alt sınıf örneklendiğinde, alt sınıfta tanımlanan özelliklerle hiyerarşide daha yukarıda tanımlanan özellikleri birleştiren tek bir nesne oluşturulur. Prototiplemede ise hiyerarşinin her düzeyi ayrı bir nesneyle temsil edilir ve bunlar __proto__ özelliği aracılığıyla birbirine bağlanır. Prototip zincirinin davranışı kalıtımdan çok delegasyona (yetki devrine) benzer. Delegasyon, bir nesnenin kendisinden bir görevi yerine getirmesi istendiğinde bunu ya kendisinin yapabildiği ya da başka bir nesneden (delegesinden) kendi adına yapmasını isteyebildiği bir programlama desenidir. Birçok açıdan delegasyon, nesneleri birleştirmek için kalıtımdan daha esnek bir yoldur (örneğin delegeyi çalışma zamanında değiştirmek veya tamamen başka biriyle değiştirmek mümkündür).
Bununla birlikte, JavaScript'te yapıcılar ve prototipler sınıf tabanlı OOP desenlerini uygulamak için kullanılabilir. Ancak kalıtım gibi özellikleri doğrudan bunlarla uygulamak zordur; bu nedenle JavaScript, prototip modelinin üzerine eklenmiş ve sınıf tabanlı OOP kavramlarına daha doğrudan karşılık gelen ek özellikler sunar. Bu ek özellikler bir sonraki makalenin konusudur.
Özet
Bu makale, sınıf tabanlı nesne yönelimli programlamanın temel özelliklerini anlattı ve JavaScript yapıcılarının ve prototiplerinin bu kavramlarla nasıl karşılaştırıldığına kısaca baktı.
Bir sonraki makalede, JavaScript'in sınıf tabanlı nesne yönelimli programlamayı desteklemek için sunduğu özelliklere bakacağız.
4. JavaScript'te sınıflar
Son makalede nesne yönelimli programlamanın (OOP) bazı temel kavramlarını tanıttık ve OOP ilkelerini kullanarak bir okuldaki profesörleri ve öğrencileri modellediğimiz bir örneği tartıştık.
Ayrıca böyle bir modeli uygulamak için prototiplerin ve yapıcıların kullanılabileceğinden ve JavaScript'in klasik OOP kavramlarına daha yakından karşılık gelen özellikler de sunduğundan söz ettik.
Bu makalede bu özellikleri ele alacağız. Burada anlatılan özelliklerin nesneleri birleştirmenin yeni bir yolu olmadığını akılda tutmakta fayda var: arka planda hâlâ prototipleri kullanırlar. Bunlar yalnızca bir prototip zincirini kurmayı kolaylaştıran bir yoldur.
• Ön koşullar: JavaScript temellerine (özellikle Nesne temellerine) ve bu modüldeki önceki derslerde ele alınan nesne yönelimli JavaScript kavramlarına aşinalık.
• Öğrenme çıktıları: JavaScript'te sınıf oluşturma; JavaScript'te yapıcı oluşturma; JavaScript'te kalıtım ve kapsülleme.
Sınıflar ve yapıcılar
Bir sınıfı class anahtar sözcüğüyle bildirebilirsiniz. İşte önceki makaledeki Person için bir sınıf bildirimi:
class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}
Bu, Person adlı bir sınıf bildirir ve şunlara sahiptir:
• bir name özelliği.
• yeni nesnenin name özelliğini başlatmak için kullanılan bir name parametresi alan bir yapıcı
• this kullanarak nesnenin özelliklerine başvurabilen bir introduceSelf() metodu.
name; bildirimi isteğe bağlıdır: onu çıkarabilirsiniz; yapıcıdaki this.name = name; satırı, özelliği başlatmadan önce name özelliğini oluşturacaktır. Yine de özellikleri sınıf bildiriminde açıkça listelemek, kodunuzu okuyan kişilerin hangi özelliklerin bu sınıfın parçası olduğunu görmesini kolaylaştırabilir.
Özelliği bildirirken name = ''; gibi bir satırla varsayılan bir değerle de başlatabilirsiniz.
Yapıcı, constructor anahtar sözcüğüyle tanımlanır. Tıpkı bir sınıf tanımının dışındaki bir yapıcı gibi şunları yapar:
• yeni bir nesne oluşturur
• this'i yeni nesneye bağlar; böylece yapıcı kodunuzda this'e başvurabilirsiniz
• yapıcıdaki kodu çalıştırır
• yeni nesneyi döndürür.
Yukarıdaki sınıf bildirimi kodu verildiğinde, yeni bir Person örneğini şöyle oluşturup kullanabilirsiniz:
const giles = new Person("Giles");

giles.introduceSelf(); // Hi! I'm Giles
Yapıcıyı sınıfın adıyla çağırdığımıza dikkat edin; bu örnekte Person.
Yapıcıları atlamak
Özel bir başlatma yapmanız gerekmiyorsa yapıcıyı atlayabilirsiniz; sizin için varsayılan bir yapıcı üretilecektir:
class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
}

const spot = new Animal();

spot.sleep(); // 'zzzzzzz'
Kalıtım
Yukarıdaki Person sınıfımızdan yola çıkarak Professor alt sınıfını tanımlayalım.
class Professor extends Person {
  teaches;

  constructor(name, teaches) {
    super(name);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(
      `My name is ${this.name}, and I will be your ${this.teaches} professor.`,
    );
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 - 1) + 1);
    console.log(grade);
  }
}
Bu sınıfın başka bir sınıftan kalıtım aldığını söylemek için extends anahtar sözcüğünü kullanıyoruz.
Professor sınıfı yeni bir teaches özelliği ekliyor; biz de onu bildiriyoruz.
Yeni bir Professor oluşturulduğunda teaches'i ayarlamak istediğimiz için, argüman olarak name ve teaches alan bir yapıcı tanımlıyoruz. Bu yapıcının yaptığı ilk şey, name parametresini yukarıya ileterek super() ile üst sınıf yapıcısını çağırmaktır. Üst sınıf yapıcısı name'in ayarlanmasıyla ilgilenir. Bundan sonra Professor yapıcısı teaches özelliğini ayarlar.
Not: Bir alt sınıfın yapacağı kendi başlatma işlemleri varsa, önce super() ile üst sınıf yapıcısını çağırmak zorundadır; üst sınıf yapıcısının beklediği tüm parametreleri de yukarı iletmelidir.
Ayrıca üst sınıftaki introduceSelf() metodunu geçersiz kıldık ve bir ödevi notlandırmak için yeni bir grade() metodu ekledik (profesörümüz pek iyi değil ve ödevlere rastgele notlar veriyor).
Bu bildirimle artık profesörler oluşturup kullanabiliriz:
const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Walsh, and I will be your Psychology professor'

walsh.grade("my paper"); // rastgele bir not
Kapsülleme
Son olarak, JavaScript'te kapsüllemenin nasıl uygulanacağına bakalım. Son makalede, Student'ın year özelliğini özel yapmak istediğimizi tartışmıştık; böylece Student sınıfını kullanan hiçbir kodu bozmadan okçuluk dersleriyle ilgili kuralları değiştirebilirdik.
İşte tam olarak bunu yapan bir Student sınıfı bildirimi:
class Student extends Person {
  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }
}
Bu sınıf bildiriminde #year bir özel alandır (private field). Bir Student nesnesi oluşturabiliriz ve nesne #year'ı kendi içinde kullanabilir; ancak nesnenin dışındaki kod #year'a erişmeye çalışırsa tarayıcı hata verir:
const summers = new Student("Summers", 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
summers.canStudyArchery(); // true

summers.#year; // SyntaxError
Not: Chrome konsolunda çalıştırılan kod, sınıfın dışından özel öğelere erişebilir. Bu, JavaScript sözdizimi kısıtlamasının yalnızca DevTools'a özgü bir gevşetilmesidir.
Özel alanlar sınıf bildiriminde bildirilmelidir ve adları # ile başlar.
Özel metotlar
Özel alanların yanı sıra özel metotlarınız da olabilir. Özel alanlar gibi, özel metotların adları da # ile başlar ve yalnızca nesnenin kendi metotları tarafından çağrılabilirler:
class Example {
  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log("You called me?");
  }
}

const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError
Özet
Bu makalede JavaScript'te nesne yönelimli programlar yazmak için mevcut olan ana araçları ele aldık. Her şeyi kapsamadık, ancak bu, başlamanız için yeterli olmalı. Daha fazlasını öğrenmek için Sınıflar makalemiz iyi bir başlangıç noktasıdır.
Sırada, Nesne yönelimli JavaScript konusunda şimdiye kadar sunduğumuz bilgileri ne kadar iyi anladığınızı ve akılda tuttuğunuzu kontrol etmek için kullanabileceğiniz bazı testler sunacağız.
5. Becerilerinizi test edin: Nesne yönelimli JavaScript
Bu beceri testinin amacı, JavaScript'te sınıflar makalemizi anlayıp anlamadığınızı değerlendirmenize yardımcı olmaktır.
Not: Yardım almak için "Becerilerinizi test edin" kullanım kılavuzumuzu okuyun. Ayrıca iletişim kanallarımızdan birini kullanarak bize ulaşabilirsiniz.
OOJS 1
Bu görevde size bir Shape sınıfı tanımının başlangıcını veriyoruz. Üç özelliği vardır: name, sides ve sideLength. Bu sınıf yalnızca tüm kenarları aynı uzunlukta olan şekilleri modeller; örneğin bir kare veya bir eşkenar üçgen gibi.
Görevi tamamlamak için:
1. Bu sınıfa bir yapıcı ekleyin. Yapıcı, name, sides ve sideLength özellikleri için argümanlar alır ve bunları başlatır.
2. Sınıfa, çevresini (şeklin dış kenarının uzunluğu) hesaplayan ve sonucu konsola yazdıran yeni bir calcPerimeter() metodu ekleyin.
3. Shape sınıfının square adlı yeni bir örneğini oluşturun. name değeri square, sides değeri 4 ve sideLength değeri 5 olsun.
4. Hesaplama sonucunu tarayıcının konsoluna beklendiği gibi yazdırıp yazdırmadığını görmek için örnek üzerinde calcPerimeter() metodunuzu çağırın.
5. name değeri triangle, sides değeri 3 ve sideLength değeri 3 olan, triangle adlı yeni bir Shape örneği oluşturun.
6. Düzgün çalıştığını kontrol etmek için triangle.calcPerimeter() çağırın.
Başlangıç kodu:
class Shape {
  name;
  sides;
  sideLength;
}
Çözüm
Bitmiş JS kodunuz şuna benzer olabilir:
class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `The ${this.name}'s perimeter length is ${this.sides * this.sideLength}.`,
    );
  }
}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();
OOJS 2
Şimdi işin içine biraz kalıtım katma zamanı.
Görevi tamamlamak için:
1. Shape'ten kalıtım alan bir Square sınıfı oluşturun.
2. Square'e alanını hesaplayan bir calcArea() metodu ekleyin.
3. Square yapıcısını, Square nesne örneklerinin name özelliği otomatik olarak square ve sides özelliği otomatik olarak 4 olacak şekilde ayarlayın. Dolayısıyla yapıcıyı çağırırken yalnızca sideLength özelliğini vermeniz yeterli olmalıdır.
4. Uygun özellik değerleriyle square adlı bir Square sınıfı örneği oluşturun ve düzgün çalıştığını göstermek için calcPerimeter() ve calcArea() metotlarını çağırın.
Başlangıç kodu:
class Shape {
  name;
  sides;
  sideLength;

  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(
      `The ${this.name}'s perimeter length is ${this.sides * this.sideLength}.`,
    );
  }
}

// Yukarıdaki kodu düzenlemeyin!

// Kodunuzu buraya ekleyin
Çözüm
Bitmiş JS kodunuz şuna benzer olabilir:
// ...
// Yukarıdaki kodu düzenlemeyin!

class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }

  calcArea() {
    console.log(
      `The ${this.name}'s area is ${this.sideLength * this.sideLength} squared.`,
    );
  }
}

const square = new Square(4);

square.calcPerimeter();
square.calcArea();
6. Nesne oluşturma pratiği
Önceki makalelerde temel JavaScript nesne teorisini ve sözdizimi ayrıntılarını ele alarak size sağlam bir temel sunduk. Bu makalede pratik bir alıştırmaya dalıyor, özel JavaScript nesneleri oluşturma pratiğinizi artırıyor ve eğlenceli, renkli bir sonuç elde ediyoruz.
• Ön koşullar: JavaScript temellerine (özellikle Nesne temellerine) ve bu modüldeki önceki derslerde ele alınan nesne yönelimli JavaScript kavramlarına aşinalık.
• Öğrenme çıktıları: Nesneleri ve nesne yönelimli teknikleri gerçek dünya bağlamında kullanma pratiği.
Hadi birkaç top zıplatalım
Bu makalede, JavaScript'te nesnelerin ne kadar faydalı olabileceğini göstermek için klasik bir "zıplayan toplar" demosu yazacağız. Küçük toplarımız ekranda zıplayacak ve birbirlerine değdiklerinde renk değiştirecek. Bitmiş örnek kabaca şöyle görünecek:
[Ekran görüntüsü: "Bouncing balls" başlıklı bir web sayfası. Siyah bir ekranda, arkalarında hareketi gösteren uzun izler bulunan, çeşitli pastel renklerde ve boyutlarda 23 top görünüyor.]
Bu örnek, topları ekrana çizmek için Canvas API'sini ve tüm ekranı canlandırmak için requestAnimationFrame API'sini kullanacak. Bu API'lere dair önceden bir bilgiye sahip olmanız gerekmiyor; makaleyi bitirdiğinizde bunları daha fazla keşfetmekle ilgileneceğinizi umuyoruz. Yol boyunca bazı şık nesneleri kullanacak ve topları duvarlardan zıplatmak ile birbirlerine çarpıp çarpmadıklarını kontrol etmek (diğer adıyla çarpışma algılama) gibi birkaç güzel teknik göstereceğiz.
Başlarken
Başlamak için index.html, style.css ve main.js dosyalarımızın yerel kopyalarını oluşturun. Bunlar sırasıyla şunları içerir:
1. Bir <h1> öğesi, topları çizeceğimiz bir <canvas> öğesi ve CSS ile JavaScript'imizi HTML'imize uygulayan öğeler içeren çok basit bir HTML belgesi.
2. Ağırlıklı olarak <h1>'i biçimlendirmeye ve konumlandırmaya, ayrıca sayfanın kenarındaki kaydırma çubuklarından ve boşluklardan kurtulmaya (böylece düzgün ve temiz görünmesine) yarayan çok basit stiller.
3. <canvas> öğesini kurmaya ve kullanacağımız genel bir fonksiyon sağlamaya yarayan bir miktar JavaScript.
Betiğin ilk kısmı şöyle görünür:
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
Bu betik <canvas> öğesine bir başvuru alır, ardından üzerinde getContext() metodunu çağırarak çizmeye başlayabileceğimiz bir bağlam (context) elde eder. Ortaya çıkan sabit (ctx), canvas'ın çizim alanını doğrudan temsil eden ve üzerine 2B şekiller çizmemize olanak tanıyan nesnedir.
Sonra width ve height adlı sabitleri ayarlıyoruz ve canvas öğesinin genişliğini ve yüksekliğini (canvas.width ve canvas.height özellikleriyle temsil edilir) tarayıcı görüntü alanının (viewport; web sayfasının göründüğü alan; Window.innerWidth ve Window.innerHeight özelliklerinden alınabilir) genişliğine ve yüksekliğine eşitliyoruz.
Değişkenleri daha hızlı ayarlamak için birden fazla atamayı zincirlediğimize dikkat edin — bu tamamen sorunsuzdur.
Sonra iki yardımcı fonksiyonumuz var:
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)} ${random(0, 255)} ${random(0, 255)})`;
}
random() fonksiyonu argüman olarak iki sayı alır ve ikisi arasındaki aralıkta rastgele bir sayı döndürür. randomRGB() fonksiyonu ise bir rgb dizgesi olarak temsil edilen rastgele bir renk üretir.
Programımızda bir topu modellemek
Programımızda ekranda zıplayan çok sayıda top olacak. Bu toplar aynı şekilde davranacağı için onları bir nesneyle temsil etmek mantıklıdır. Kodumuzun altına aşağıdaki sınıf tanımını ekleyerek başlayalım.
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }
}
Şimdilik bu sınıf yalnızca, her topun programımızda çalışabilmesi için gereken özellikleri başlatabildiğimiz bir yapıcı içeriyor:
• x ve y koordinatları — topun ekranda başladığı yatay ve dikey koordinatlar. Bunlar 0 (sol üst köşe) ile tarayıcı görüntü alanının genişliği ve yüksekliği (sağ alt köşe) arasında değişebilir.
• yatay ve dikey hız (velX ve velY) — her topa bir yatay ve bir dikey hız verilir; gerçekte bu değerler, topları canlandırırken her karede topları bu kadar hareket ettirmek için düzenli olarak x/y koordinat değerlerine eklenir.
• color — her topa bir renk verilir.
• size — her topa bir boyut verilir; bu, pikselcinsinden yarıçapıdır.
Bu özellikleri halleder, peki ya metotlar? Toplarımızın programımızda gerçekten bir şey yapmasını istiyoruz.
Topu çizmek
Önce Ball sınıfına aşağıdaki draw() metodunu ekleyin:
class Ball {
  // …
  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}
Bu fonksiyonu kullanarak, daha önce tanımladığımız 2B canvas bağlamının (ctx) bir dizi üyesini çağırarak topa kendisini ekrana çizmesini söyleyebiliriz. Bağlam kâğıt gibidir ve şimdi kalemimize onun üzerine bir şey çizmesi için komut vermek istiyoruz:
• Önce kâğıda bir şekil çizmek istediğimizi belirtmek için beginPath() kullanıyoruz.
• Sonra şeklin hangi renkte olmasını istediğimizi tanımlamak için fillStyle kullanıyoruz — bunu topumuzun color özelliğine ayarlıyoruz.
• Ardından kâğıda bir yay şekli çizmek için arc() metodunu kullanıyoruz. Parametreleri şunlardır:
    ◦ Yayın merkezinin x ve y konumu — topun x ve y özelliklerini belirtiyoruz.
    ◦ Yayın yarıçapı — bu durumda topun size özelliği.
    ◦ Son iki parametre, yayın çizildiği, çember etrafındaki başlangıç ve bitiş derecesini belirtir. Burada 0 derece ve 2 * PI belirtiyoruz; bu, radyan cinsinden 360 dereceye eşdeğerdir (can sıkıcı biçimde bunu radyan cinsinden belirtmeniz gerekir). Bu bize tam bir daire verir. Yalnızca 1 * PI belirtseydiniz yarım daire (180 derece) elde ederdiniz.
• Son olarak, temelde "beginPath() ile başladığımız yolu çizmeyi bitir ve kapladığı alanı daha önce fillStyle'da belirttiğimiz renkle doldur" anlamına gelen fill() metodunu kullanıyoruz.
Nesnenizi şimdiden test etmeye başlayabilirsiniz.
1. Şimdiye kadarki kodu kaydedin ve HTML dosyasını bir tarayıcıda yükleyin.
2. Tarayıcının JavaScript konsolunu açın, ardından konsol açıldığında geriye kalan daha küçük görünür görüntü alanına canvas boyutunun değişmesi için sayfayı yenileyin.
3. Yeni bir top örneği oluşturmak için şunu yazın:
   const testBall = new Ball(50, 100, 4, 4, "blue", 10);
4. Üyelerini çağırmayı deneyin:
   testBall.x;
   testBall.size;
   testBall.color;
   testBall.draw();
5. Son satırı girdiğinizde topun canvas üzerinde bir yere kendisini çizdiğini görmelisiniz.
Topun verisini güncellemek
Topu bulunduğu konuma çizebiliyoruz, ancak topu gerçekten hareket ettirmek için bir tür güncelleme fonksiyonuna ihtiyacımız var. Ball sınıf tanımının içine aşağıdaki kodu ekleyin:
class Ball {
  // …
  update() {
    if (this.x + this.size >= width) {
      this.velX = -this.velX;
    }

    if (this.x - this.size <= 0) {
      this.velX = -this.velX;
    }

    if (this.y + this.size >= height) {
      this.velY = -this.velY;
    }

    if (this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    this.x += this.velX;
    this.y += this.velY;
  }
}
Fonksiyonun ilk dört kısmı topun canvas'ın kenarına ulaşıp ulaşmadığını kontrol eder. Ulaştıysa topun ters yönde gitmesi için ilgili hızın işaretini ters çeviririz. Örneğin top yukarı doğru gidiyorduysa (negatif velY), dikey hız, top bunun yerine aşağı doğru gitmeye başlayacak şekilde değiştirilir (pozitif velY).
Dört durumda şunları kontrol ediyoruz:
• x koordinatı canvas'ın genişliğinden büyükse (top sağ kenardan çıkıyor).
• x koordinatı 0'dan küçükse (top sol kenardan çıkıyor).
• y koordinatı canvas'ın yüksekliğinden büyükse (top alt kenardan çıkıyor).
• y koordinatı 0'dan küçükse (top üst kenardan çıkıyor).
Her durumda hesaba topun size değerini de katıyoruz; çünkü x/y koordinatları topun merkezindedir ancak topun kenarının çevreden sekmesini istiyoruz — topun geri sekmeye başlamadan önce yarısının ekrandan çıkmasını istemiyoruz.
Son iki satır velX değerini x koordinatına, velY değerini y koordinatına ekler — bu metot her çağrıldığında top fiilen hareket ettirilmiş olur.
Şimdilik bu yeterli; hadi biraz animasyona geçelim!
Topu canlandırmak
Şimdi işi eğlenceli hâle getirelim. Artık canvas'a top eklemeye ve onları canlandırmaya başlayacağız.
Önce tüm toplarımızı saklayacağımız bir yer oluşturmamız ve sonra onu doldurmamız gerekiyor. Aşağıdaki kod bu işi görecek — şimdi kodunuzun en altına ekleyin:
const balls = [];

while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    // top konumu, çizim hatalarını önlemek için her zaman
    // canvas kenarından en az bir top genişliği uzakta çizilir
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRGB(),
    size,
  );

  balls.push(ball);
}
while döngüsü, random() ve randomRGB() fonksiyonlarımızla üretilen rastgele değerleri kullanarak Ball()'ımızın yeni bir örneğini oluşturur, sonra bunu push() ile balls dizimizin sonuna ekler; ancak bunu yalnızca dizideki top sayısı 25'ten az olduğu sürece yapar. Yani dizide 25 top olduğunda artık top eklenmez. Dizide daha fazla veya daha az top olması için balls.length < 25 içindeki sayıyı değiştirmeyi deneyebilirsiniz. Bilgisayarınızın/tarayıcınızın ne kadar işlem gücüne sahip olduğuna bağlı olarak, birkaç bin top belirtmek animasyonu epey yavaşlatabilir!
Sonra kodunuzun en altına şunu ekleyin:
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
  }

  requestAnimationFrame(loop);
}
Bir şeyleri canlandıran tüm programlar genellikle bir animasyon döngüsü içerir; bu döngü programdaki bilgiyi günceller ve ortaya çıkan görünümü animasyonun her karesinde çizer. Bu, çoğu oyunun ve benzeri programların temelidir. loop() fonksiyonumuz şunları yapar:
• Canvas dolgu rengini yarı saydam siyaha ayarlar, ardından fillRect() kullanarak bu renkte bir dikdörtgeni canvas'ın tüm genişliği ve yüksekliği boyunca çizer (dört parametre; başlangıç koordinatını ve çizilen dikdörtgenin genişliğini ve yüksekliğini verir). Bu, bir sonraki kare çizilmeden önce önceki karenin çizimini örtmeye yarar. Bunu yapmazsanız, hareket eden toplar yerine canvas'ta kıvrılan uzun yılanlar görürsünüz! Dolgu rengi, önceki birkaç karenin hafifçe görünmesine izin vermek ve toplar hareket ederken arkalarında küçük izler bırakmak için yarı saydam rgb(0 0 0 / 25%) olarak ayarlanmıştır. 0.25'i 1 yaparsanız bunları artık hiç görmezsiniz. Etkisini görmek için bu sayıyı değiştirmeyi deneyin.
• balls dizisindeki tüm toplar üzerinde döner ve her topun draw() ve update() fonksiyonunu çalıştırarak her birini ekrana çizer, sonra bir sonraki kareye yetişecek şekilde konum ve hızda gerekli güncellemeleri yapar.
• Fonksiyonu requestAnimationFrame() metoduyla yeniden çalıştırır — bu metot tekrar tekrar çalıştırılıp aynı fonksiyon adı verildiğinde, akıcı bir animasyon oluşturmak için o fonksiyonu saniyede belirli sayıda çalıştırır. Bu genellikle özyinelemeli olarak yapılır — yani fonksiyon her çalıştığında kendi kendini çağırır ve böylece tekrar tekrar çalışır.
Son olarak, kodunuzun en altına şu satırı ekleyin — animasyonu başlatmak için fonksiyonu bir kez çağırmamız gerekiyor.
loop();
Temeller bu kadar — kaydedip yenileyerek zıplayan toplarınızı test edin!
Çarpışma algılama eklemek
Şimdi biraz eğlence için programımıza çarpışma algılama ekleyelim; böylece toplarımız başka bir topa çarptıklarını bilsin.
Önce Ball sınıfınıza aşağıdaki metot tanımını ekleyin.
class Ball {
  // …
  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}
Bu metot biraz karmaşık; bu yüzden tam olarak nasıl çalıştığını şimdilik anlamadıysanız endişelenmeyin. Aşağıda bir açıklama var:
• Her top için, mevcut topla çarpışıp çarpışmadığını görmek amacıyla diğer her topu kontrol etmemiz gerekir. Bunu yapmak için balls[] dizisindeki tüm toplar üzerinde dönmek üzere başka bir for...of döngüsü başlatırız.
• for döngüsünün hemen içinde, üzerinde dönülen mevcut topun, şu anda kontrol ettiğimiz topla aynı top olup olmadığını denetlemek için bir if deyimi kullanırız. Bir topun kendisiyle çarpışıp çarpışmadığını kontrol etmek istemeyiz! Bunu yapmak için mevcut topun (yani collisionDetect metodu çağrılan topun) döngüdeki topla (yani collisionDetect metodundaki for döngüsünün mevcut yinelemesinde başvurulan topla) aynı olup olmadığını kontrol ederiz. Sonra kontrolü ! ile tersine çeviririz; böylece if deyiminin içindeki kod yalnızca ikisi aynı olmadığında çalışır.
• Daha sonra iki dairenin çarpışmasını kontrol etmek için yaygın bir algoritma kullanırız. Temelde iki dairenin alanlarından herhangi birinin çakışıp çakışmadığını kontrol ediyoruz. Bu, 2B çarpışma algılama sayfasında daha ayrıntılı açıklanmıştır.
• Bir çarpışma algılanırsa iç if deyiminin içindeki kod çalışır. Bu durumda yalnızca her iki dairenin color özelliğini yeni bir rastgele renge ayarlıyoruz. Topların birbirinden gerçekçi biçimde sekmesini sağlamak gibi çok daha karmaşık bir şey yapabilirdik, ancak bunu uygulamak çok daha karmaşık olurdu. Bu tür fizik simülasyonları için geliştiriciler genellikle PhysicsJS, matter.js, Phaser gibi oyun veya fizik kütüphanelerini kullanır.
Bu metodu animasyonun her karesinde de çağırmanız gerekir. loop() fonksiyonunuzu, ball.update()'ten sonra ball.collisionDetect() çağıracak şekilde güncelleyin:
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}
Demoyu tekrar kaydedip yenileyin; toplarınızın çarpıştıklarında renk değiştirdiğini göreceksiniz!
Not: Bu örneği çalıştırmakta sorun yaşarsanız, JavaScript kodunuzu bitmiş sürümümüzle karşılaştırmayı deneyin (ayrıca canlı çalışırken de görebilirsiniz).
Özet
Modül boyunca öğrendiğiniz çeşitli nesne ve nesne yönelimli tekniklerden yararlanarak kendi gerçek dünya rastgele zıplayan toplar örneğinizi yazarken eğlendiğinizi umuyoruz! Bu, nesneleri kullanma konusunda size faydalı bir pratik ve iyi bir gerçek dünya bağlamı kazandırmış olmalı.
Nesne dersleri bu kadar — şimdi geriye kalan, becerilerinizi modül zorluğunda test etmek.
Ayrıca bakın
• Canvas eğitimi — yeni başlayanlar için 2B canvas eğitimi.
• requestAnimationFrame()
• 2B çarpışma algılama
• 3B çarpışma algılama
• Saf JavaScript ile 2B breakout oyunu — 2B oyunun nasıl yapılacağını gösteren harika bir başlangıç eğitimi.
• Phaser ile 2B breakout oyunu — bir JavaScript oyun kütüphanesi kullanarak 2B oyun oluşturmanın temellerini açıklar.
7. Zorluk: Zıplayan toplar demosuna özellik ekleme
Bu zorlukta, önceki makaledeki zıplayan toplar demosunu başlangıç noktası olarak kullanıp ona yeni ve ilgi çekici özellikler eklemeniz bekleniyor.
Başlangıç noktası
Bu zorluğa başlamak için son makalemizdeki index-finished.html, style.css ve main-finished.js dosyalarının yerel bir kopyasını bilgisayarınızda yeni bir dizine oluşturun.
Alternatif olarak CodePen veya JSFiddle gibi bir çevrimiçi düzenleyici kullanabilirsiniz. Kullandığınız çevrimiçi düzenleyicinin ayrı bir JavaScript paneli yoksa, JavaScript'i HTML sayfasının içindeki bir <script> öğesine satır içi olarak koyabilirsiniz.
Not: Takılırsanız iletişim kanallarımızdan birinden bize ulaşabilirsiniz.
İpuçları ve öneriler
Başlamadan önce birkaç işaret:
• Bu zorluk oldukça zordur. Kodlamaya başlamadan önce tüm yönergeleri okuyun ve her adımı yavaş ve dikkatli atın.
• Her aşamayı çalıştırdıktan sonra demonun ayrı bir kopyasını kaydetmek iyi bir fikir olabilir; böylece daha sonra başınız derde girerse ona başvurabilirsiniz.
Proje özeti
Zıplayan top demomuz eğlenceli, ancak şimdi ona, yakaladığında topları yiyecek, kullanıcı tarafından kontrol edilen bir kötü daire (evil circle) ekleyerek biraz daha etkileşimli hâle getirmek istiyoruz. Ayrıca topların ve kötü dairenin kalıtım alabileceği genel bir Shape() nesnesi oluşturarak nesne oluşturma becerilerinizi test etmek istiyoruz. Son olarak, yakalanacak kalan top sayısını izlemek için bir skor sayacı eklemek istiyoruz.
Aşağıdaki ekran görüntüsü, bitmiş programın nasıl görünmesi gerektiği konusunda size fikir verir:
[Ekran görüntüsü: Zıplayan toplar demo sayfası. Renkli toplara ek olarak beyaz çerçeveli bir daire görünüyor ve başlığın altında "Ball count: 23" yazısı yer alıyor.]
Daha iyi bir fikir edinmek için bitmiş örneğe göz atın (kaynak koda göz atmak yok!).
Tamamlanacak adımlar
Aşağıdaki bölümler yapmanız gerekenleri anlatır.
Bir Shape sınıfı oluşturma
Öncelikle yeni bir Shape sınıfı oluşturun. Bunun yalnızca bir yapıcısı vardır. Shape yapıcısı, x, y, velX ve velY özelliklerini, Ball() yapıcısının başlangıçta tanımladığı gibi tanımlamalı; ancak color ve size özelliklerini tanımlamamalıdır.
Ball sınıfı, extends kullanılarak Shape'ten türetilmelidir. Ball yapıcısı şunları yapmalıdır:
• öncekiyle aynı argümanları almalı: x, y, velX, velY, size ve color
• x, y, velX ve velY argümanlarını ileterek super() ile Shape yapıcısını çağırmalı
• kendi color ve size özelliklerini kendisine verilen parametrelerden başlatmalı.
Not: Shape sınıfını mevcut Ball sınıfının üstünde oluşturduğunuzdan emin olun; aksi halde "Uncaught ReferenceError: Cannot access 'Shape' before initialization" gibi bir hata alırsınız.
Ball yapıcısı, topların programda var olup olmadığını (kötü daire tarafından yenmemiş olduklarını) izlemek için kullanılan exists adlı yeni bir özellik tanımlamalıdır. Bu, yapıcıda true olarak başlatılan bir boolean (true/false) olmalıdır.
Ball sınıfının collisionDetect() metodunun küçük bir güncellemeye ihtiyacı vardır. Bir top, yalnızca exists özelliği true ise çarpışma algılama için dikkate alınmalıdır. Bu nedenle mevcut collisionDetect() kodunu aşağıdaki kodla değiştirin:
class Ball {
  // …
  collisionDetect() {
    for (const ball of balls) {
      if (!(this === ball) && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
  // …
}
Yukarıda tartışıldığı gibi tek ekleme, if koşulunda ball.exists kullanarak topun var olup olmadığını kontrol etmektir.
Topun draw() ve update() metot tanımları tam olarak eskisi gibi kalabilmelidir.
Bu noktada kodu yeniden yüklemeyi deneyin — yeniden tasarladığımız nesnelerle birlikte öncekiyle tamamen aynı çalışmalıdır.
EvilCircle'ı tanımlama
Şimdi kötü adamla tanışma zamanı — EvilCircle()! Oyunumuzda yalnızca bir kötü daire olacak, ancak size biraz pratik kazandırmak için onu yine de Shape()'ten kalıtım alan bir yapıcıyla tanımlayacağız. İleride uygulamaya başka bir oyuncu tarafından kontrol edilebilen bir daire daha eklemek veya birkaç bilgisayar kontrollü kötü daire koymak isteyebilirsiniz. Tek bir kötü daireyle dünyayı ele geçirmeniz pek olası değil, ama bu zorluk için yeterli olacaktır.
EvilCircle sınıfı için bir tanım oluşturun. extends kullanarak Shape'ten kalıtım almalıdır.
EvilCircle yapıcısı
EvilCircle yapıcısı şunları yapmalıdır:
• yalnızca x, y argümanlarını almalı
• x, y argümanlarını, velX ve velY için 20 olarak sabit kodlanmış değerlerle birlikte Shape üst sınıfına iletmeli. Bunu super(x, y, 20, 20); gibi bir kodla yapmalısınız
• color'ı white, size'ı 10 olarak ayarlamalı.
Son olarak yapıcı, kullanıcının kötü daireyi ekranda hareket ettirmesini sağlayan kodu kurmalıdır:
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "a":
      this.x -= this.velX;
      break;
    case "d":
      this.x += this.velX;
      break;
    case "w":
      this.y -= this.velY;
      break;
    case "s":
      this.y += this.velY;
      break;
  }
});
Bu, window nesnesine bir keydown olay dinleyicisi ekler; böylece bir tuşa basıldığında hangi tuşa basıldığını görmek için olay nesnesinin key özelliğine bakılır. Belirtilen dört tuştan biriyse kötü daire sola/sağa/yukarı/aşağı hareket eder.
EvilCircle için metotları tanımlama
EvilCircle sınıfının aşağıda anlatılan üç metodu olmalıdır.
draw()
Bu metot, Ball'un draw() metoduyla aynı amaca sahiptir: nesne örneğini canvas üzerine çizer. EvilCircle'ın draw() metodu çok benzer şekilde çalışacaktır; bu yüzden Ball'un draw() metodunu kopyalayarak başlayabilirsiniz. Ardından şu değişiklikleri yapmalısınız:
• Kötü dairenin içinin dolu olmasını değil, yalnızca bir dış çizgisinin (kontur, stroke) olmasını istiyoruz. Bunu fillStyle ve fill()'i sırasıyla strokeStyle ve stroke() olarak güncelleyerek başarabilirsiniz.
• Ayrıca kötü daireyi biraz daha kolay görebilmeniz için konturu biraz daha kalın yapmak istiyoruz. Bu, beginPath() çağrısından sonra bir yerde lineWidth için bir değer ayarlayarak yapılabilir (3 iş görür).
checkBounds()
Bu metot, Ball'un update() metodunun ilk kısmıyla aynı şeyi yapacaktır — kötü dairenin ekranın kenarından dışarı çıkmak üzere olup olmadığına bakar ve bunu yapmasını engeller. Yine çoğunlukla Ball'un update() metodunu kopyalayabilirsiniz, ancak yapmanız gereken birkaç değişiklik var:
• Son iki satırı kaldırın — kötü dairenin konumunu her karede otomatik olarak güncellemek istemiyoruz; çünkü onu aşağıda göreceğiniz gibi başka bir yolla hareket ettireceğiz.
• if () deyimlerinin içinde, testler true dönerse velX/velY'yi güncellemek istemiyoruz; bunun yerine kötü daire ekrana biraz geri sekecek şekilde x/y değerini değiştirmek istiyoruz. Kötü dairenin size özelliğini (uygun şekilde) eklemek veya çıkarmak mantıklı olacaktır.
collisionDetect()
Bu metot, Ball metodunun collisionDetect() metoduna çok benzer şekilde davranacaktır; bu yüzden onun bir kopyasını bu yeni metodun temeli olarak kullanabilirsiniz. Ancak birkaç fark var:
• Dış if deyiminde, yinelemedeki mevcut topun kontrol yapan topla aynı olup olmadığını artık denetlemenize gerek yok — çünkü artık bir top değil, kötü dairedir! Bunun yerine, kontrol edilen topun var olup olmadığını test etmeniz gerekir (bunu hangi özellikle yapabilirsiniz?). Eğer yoksa, zaten kötü daire tarafından yenmiştir; dolayısıyla tekrar kontrol etmeye gerek yoktur.
• İç if deyiminde, bir çarpışma algılandığında nesnelerin renk değiştirmesini artık istemiyorsunuz — bunun yerine kötü daireyle çarpışan tüm topları artık var olmayacak şekilde ayarlamak istiyorsunuz (yine, bunu nasıl yapardınız?).
Kötü daireyi programa dahil etme
Kötü daireyi tanımladığımıza göre şimdi onu sahnemizde gerçekten görünür kılmamız gerekiyor. Bunun için loop() fonksiyonunda bazı değişiklikler yapmalısınız.
• Öncelikle yeni bir kötü daire nesnesi örneği oluşturun (gerekli parametreleri belirterek). Bunu döngünün her yinelemesinde değil, yalnızca bir kez yapmanız gerekir.
• Her top üzerinde dönüp her biri için draw(), update() ve collisionDetect() fonksiyonlarını çağırdığınız noktada, bu fonksiyonların yalnızca mevcut top varsa çağrılmasını sağlayın.
• Kötü daire örneğinin draw(), checkBounds() ve collisionDetect() metotlarını döngünün her yinelemesinde çağırın.
Skor sayacını uygulama
Skor sayacını uygulamak için şu adımları izleyin:
1. HTML dosyanızda, <h1> öğesinin hemen altına "Ball count: " metnini içeren bir <p> öğesi ekleyin.
2. CSS dosyanızın en altına şu kuralı ekleyin:
   p {
     position: absolute;
     margin: 0;
     top: 35px;
     right: 5px;
     color: #aaaaaa;
   }
3. JavaScript'inizde şu güncellemeleri yapın:
    ◦ Paragrafa bir başvuru tutan bir değişken oluşturun.
    ◦ Ekrandaki top sayısının sayısını bir şekilde tutun.
    ◦ Sahneye her top eklendiğinde sayacı artırın ve güncellenen top sayısını gösterin.
    ◦ Kötü daire her top yediğinde (topun var olmamasına neden olduğunda) sayacı azaltın ve güncellenen top sayısını gösterin.
8. Becerilerinizi test edin: Gelişmiş JavaScript nesneleri (dizin sayfası)
Bu sayfa, Gelişmiş JavaScript nesneleri konusundaki anlayışınızı değerlendirmenize yardımcı olacak testleri listeler.
Gelişmiş JavaScript nesneleri becerilerinizi konuya göre test edin
• Becerilerinizi test edin: Nesne yönelimli JavaScript (bu belgenin 5. bölümünde yer alır)
Ayrıca bakın
• Gelişmiş JavaScript nesneleri (bu belgenin 1. bölümü)

İstemci tarafı web API’leri (Client-side web APIs)

Uygulama Programlama Arayüzleri (Application Programming Interfaces, API’ler), tarayıcının ve sitenin üzerinde çalıştığı işletim sisteminin farklı yönlerini yönetmek ya da diğer web sitelerinden veya hizmetlerden gelen verileri işlemek için kullanılan programlama özellikleridir. Bu modül, daha önce herhangi bir ayrıntıda ele almadığımız en yaygın Web API sınıflarından bazılarının ortak yönlerini kapsar ve tarayıcı API kullanımını daha derinlemesine öğrenmek isteyenlere faydalı bir temel sağlar.
Bu makalede
Ön koşullar
Eğitimler
Ön koşullar
Bu modüle başlamadan önce JavaScript’in temellerini, özellikle de JavaScript nesne temellerini ve DOM betikleme (DOM scripting) ile ağ istekleri (Network requests) gibi temel API kapsamını gerçekten öğrenmiş olmanız gerekir.
HTML ve CSS konusunda biraz bilgi sahibi olmak da faydalı olacaktır.
Not: Dosya oluşturamadığınız bir bilgisayar, tablet veya başka bir cihazda çalışıyorsanız, kodu CodePen veya JSFiddle gibi çevrimiçi bir düzenleyicide çalıştırmayı deneyebilirsiniz.
Eğitimler
Web API’lerine giriş
 Öncelikle API’lere üst düzey bir bakışla başlayacağız — nedir, nasıl çalışır, kodunuzda nasıl kullanılır ve nasıl yapılandırılmıştır? Ayrıca farklı ana API sınıflarının neler olduğuna ve ne tür kullanım alanlarına sahip olduklarına da göz atacağız.
Video ve ses API’leri
 HTML, belgelere zengin medya gömmek için öğelerle birlikte gelir — <video> ve <audio> — bu öğelerin de oynatmayı denetlemek, belirli bir konuma atlamak vb. için kendi API’leri vardır. Bu makale, özel oynatma denetimleri oluşturmak gibi yaygın görevlerin nasıl yapılacağını gösterir.
Grafik çizme
 Tarayıcı, Ölçeklenebilir Vektör Grafikleri (Scalable Vector Graphics, SVG) dilinden HTML <canvas> öğeleri üzerine çizim yapmaya yarayan API’lere kadar (bkz. Canvas API ve WebGL) çok güçlü grafik programlama araçları içerir. Bu makale, Canvas API’sine bir giriş sunar ve daha fazla öğrenmenizi sağlayacak ek kaynaklar verir.
İstemci tarafı depolama
 Modern web tarayıcıları, web sitelerine ilişkin verileri depolamanıza ve gerektiğinde geri almanıza olanak tanıyan, böylece verileri uzun süre kalıcı tutmanızı, siteleri çevrimdışı kaydetmenizi ve daha fazlasını yapmanızı sağlayan birçok farklı teknoloji sunar. Bu makale, bunların nasıl çalıştığının en temel noktalarını açıklar.
Üçüncü taraf API’leri
 Şimdiye kadar ele aldığımız API’ler tarayıcıya yerleşiktir, ancak tüm API’ler öyle değildir. Google Maps, Facebook, PayPal gibi birçok büyük web sitesi ve hizmet, geliştiricilerin verilerinden veya hizmetlerinden yararlanmasına olanak tanıyan API’ler sunar (ör. sitenizde özel Google Haritalar göstermek ya da kullanıcılarınızın oturum açması için Facebook ile girişi kullanmak). Bu makale, tarayıcı API’leri ile üçüncü taraf API’leri arasındaki farka bakar ve ikincisinin tipik kullanım örneklerini gösterir.
Genel bakış: Uzantı modülleri
Sonraki
Not: Önceki çevirideki gibi yalnızca makale içeriğini çevirdim; sayfa üstündeki menüleri ve soldaki gezinme kenar çubuğunu dışarıda bıraktım.

Öğren
Uzantı modülleri
İstemci tarafı (client-side) web API’leri
Giriş
Web API’lerine giriş
Genel bakış: İstemci tarafı web API’leri
Sonraki
Öncelikle API’lere üst düzey bir bakışla başlayacağız — nedir, nasıl çalışırlar, kodunuzda nasıl kullanılırlar ve nasıl yapılandırılmışlardır? Ayrıca farklı ana API sınıflarının neler olduğuna ve ne tür kullanım alanlarına sahip olduklarına da göz atacağız.
Ön koşullar:
HTML, CSS ve JavaScript konusunda aşinalık; özellikle JavaScript nesne temelleri ve DOM betikleme (DOM scripting) ile ağ istekleri (Network requests) gibi temel API kapsamı.
Öğrenme çıktıları:
Web API’lerinin ne olduğu ve bunlarla neler yapabileceğiniz.
API’lerin nasıl kullanıldığı.

Bu makalede
API’ler nedir?
API’ler neler yapabilir?
API’ler nasıl çalışır?
Özet
API’ler nedir?
Uygulama Programlama Arayüzleri (Application Programming Interfaces, API’ler), geliştiricilerin karmaşık işlevselliği daha kolay oluşturabilmesi için programlama dillerinde sunulan yapılardır. Daha karmaşık kodu sizden soyutlar ve onun yerine kullanımı daha kolay bir sözdizimi sağlarlar.
Gerçek hayattan bir örnek olarak evinizdeki, dairenizdeki veya diğer konutlarınızdaki elektrik beslemesini düşünün. Evinizde bir cihaz kullanmak istiyorsanız, onu bir prize takarsınız ve çalışır. Onu doğrudan elektrik beslemesine bağlamaya çalışmazsınız — bunu yapmak gerçekten verimsiz olurdu ve elektrikçi değilseniz denemesi zor ve tehlikeli olurdu.
*[Görsel: MDN orijinal makalesindeki ilgili ekran görüntüsüne bakınız.]*
Görsel kaynağı: Aşırı yüklenmiş priz, The Clear Communication People tarafından, Flickr’da.
Aynı şekilde, örneğin bazı 3D grafikleri programlamak istiyorsanız, bilgisayarın GPU’sunu veya diğer grafik işlevlerini doğrudan kontrol eden düşük seviyeli kod (örneğin C veya C++) yazmaya çalışmak yerine, JavaScript veya Python gibi daha yüksek seviyeli bir dilde yazılmış bir API kullanarak yapmak çok daha kolaydır.
Not: Daha fazla açıklama için API sözlük maddesine da bakın.
İstemci tarafı JavaScript’te API’ler
Özellikle istemci tarafı JavaScript’in kullanımına sunulmuş birçok API vardır — bunlar JavaScript dilinin kendisinin parçası değildir; çekirdek JavaScript dilinin üzerine inşa edilmişlerdir ve JavaScript kodunuzda kullanmanız için size ek süper güçler sağlarlar. Genellikle iki kategoriye ayrılırlar:
Tarayıcı API’leri web tarayıcınıza yerleşiktir ve tarayıcıdan ve çevresindeki bilgisayar ortamından veri sunabilir ve bu verilerle yararlı karmaşık işler yapabilir. Örneğin, Web Audio API, tarayıcıda sesi işlemek için JavaScript yapıları sağlar — bir ses parçasını alıp ses seviyesini değiştirmek, ona efektler uygulamak vb. Arka planda tarayıcı, gerçek ses işlemeyi yapmak için aslında daha karmaşık düşük seviyeli kod (ör. C++ veya Rust) kullanır. Ancak yine, bu karmaşıklık API tarafından sizden soyutlanır.
Üçüncü taraf API’leri varsayılan olarak tarayıcıya yerleşik değildir ve kodlarını ve bilgilerini genellikle Web’de bir yerden almanız gerekir. Örneğin, Google Maps API, web sitenizde ofisinize giden etkileşimli bir harita göstermek gibi şeyler yapmanıza olanak tanır. Google Maps hizmetini sorgulamak ve belirli bilgileri döndürmek için kullanabileceğiniz özel bir yapı kümesi sağlar.
*[Görsel: MDN orijinal makalesindeki ilgili ekran görüntüsüne bakınız.]*
JavaScript, API’ler ve diğer JavaScript araçları arasındaki ilişki
Yukarıda istemci tarafı JavaScript API’lerinin ne olduğundan ve JavaScript diliyle nasıl ilişkili olduklarından bahsettik. Daha açık hale getirmek için bunu özetleyelim ve diğer JavaScript araçlarının nereye oturduğunu da belirtelim:
JavaScript — Web sayfalarında/uygulamalarında işlevsellik uygulamanıza olanak tanıyan, tarayıcılara yerleşik yüksek seviyeli bir betik dili. JavaScript’in Node gibi diğer programlama ortamlarında da kullanılabildiğini unutmayın.
Tarayıcı API’leri — tarayıcıya yerleşik, JavaScript dilinin üzerinde yer alan ve işlevselliği daha kolay uygulamanıza olanak tanıyan yapılar.
Üçüncü taraf API’leri — üçüncü taraf platformlara (ör. Disqus, Facebook) yerleşik, bu platformların bazı işlevlerini kendi web sayfalarınızda kullanmanıza olanak tanıyan yapılar (örneğin, Disqus yorumlarınızı bir web sayfasında göstermek).
JavaScript kütüphaneleri (libraries) — Genellikle, yaygın işlevselliğin yazılmasını hızlandırmak veya mümkün kılmak için web sayfanıza ekleyebileceğiniz özel fonksiyonlar içeren bir veya daha fazla JavaScript dosyası. Örnekler arasında jQuery, Mootools ve React bulunur.
JavaScript çerçeveleri (frameworks) — Kütüphanelerden bir sonraki adım olan JavaScript çerçeveleri (ör. Angular ve Ember), yüklediğiniz ve ardından sıfırdan eksiksiz bir web uygulaması yazmak için kullandığınız HTML, CSS, JavaScript ve diğer teknolojilerden oluşan paketler olma eğilimindedir. Kütüphane ile çerçeve arasındaki temel fark “Kontrolün Tersine Çevrilmesi”dir (Inversion of Control). Bir kütüphaneden bir yöntem (method) çağrılırken kontrol geliştiricidedir. Bir çerçevede ise kontrol tersine çevrilir: çerçeve, geliştiricinin kodunu çağırır.
API’ler neler yapabilir?
Modern tarayıcılarda, kodunuzda çok çeşitli şeyler yapmanıza olanak tanıyan çok sayıda API bulunur. Bunu MDN API dizin sayfasına göz atarak görebilirsiniz.
Yaygın tarayıcı API’leri
Özellikle, kullanacağınız (ve bu modülde daha ayrıntılı ele alacağımız) en yaygın tarayıcı API kategorileri şunlardır:
Tarayıcıya yüklenen belgeleri değiştirmeye yönelik API’ler. En bariz örnek, HTML ve CSS’i değiştirmenize olanak tanıyan — HTML oluşturma, kaldırma ve değiştirme, sayfanıza dinamik olarak yeni stiller uygulama vb. — DOM (Belge Nesne Modeli, Document Object Model) API’si’dir. Örneğin bir sayfada bir açılır pencere belirdiğini ya da yeni içerik görüntülendiğini her gördüğünüzde, bu DOM’un iş başında olmasıdır. Bu tür API’ler hakkında daha fazla bilgiyi DOM betikleme girişi bölümünde bulabilirsiniz.
Sunucudan veri alarak bir web sayfasının küçük bölümlerini kendi başlarına güncelleyen API’ler çok yaygın olarak kullanılır. Görünüşte küçük olan bu ayrıntı, sitelerin performansı ve davranışı üzerinde büyük bir etki yaratmıştır — yalnızca bir borsa listesini veya mevcut yeni haberlerin listesini güncellemeniz gerekiyorsa, bunu tüm sayfayı sunucudan yeniden yüklemek zorunda kalmadan anında yapmak, siteyi veya uygulamayı çok daha duyarlı ve “çevik” hissettirebilir. Bunun için kullanılan ana API Fetch API’dir, ancak eski kod hâlâ XMLHttpRequest API’sini kullanıyor olabilir. Bu tekniği tanımlayan AJAX terimiyle de karşılaşabilirsiniz. Bu tür API’ler hakkında daha fazla bilgiyi JavaScript ile ağ istekleri yapma bölümünde bulabilirsiniz.
Grafik çizmeye ve değiştirmeye yönelik API’ler tarayıcılarda yaygın olarak desteklenir — en popüler olanları, 2D ve 3D sahneler oluşturmak için bir HTML <canvas> öğesinde bulunan piksel verilerini programatik olarak güncellemenize olanak tanıyan Canvas ve WebGL’dir. Örneğin, dikdörtgen veya daire gibi şekiller çizebilir, canvas’a bir görüntü aktarabilir ve Canvas API’sini kullanarak ona sepya veya gri tonlama gibi bir filtre uygulayabilir ya da WebGL ile aydınlatma ve dokularla karmaşık bir 3D sahne oluşturabilirsiniz. Bu tür API’ler, çizgi film ve oyun gibi sürekli güncellenen sahneler oluşturmak için sıklıkla animasyon döngüleri oluşturmaya yarayan API’lerle (ör. window.requestAnimationFrame()) ve diğerleriyle birleştirilir.
Ses ve Video API’leri, HTMLMediaElement, Web Audio API ve WebRTC gibi, çoklu ortamla gerçekten ilginç şeyler yapmanıza olanak tanır; örneğin ses ve video oynatmak için özel kullanıcı arayüzü denetimleri oluşturmak, videolarınızla birlikte açıklamalı altyazı ve altyazı gibi metin parçalarını görüntülemek, web kamerasından video alıp bir canvas aracılığıyla işlemek (yukarıya bakın) veya bir web konferansında başka birinin bilgisayarında görüntülemek ya da ses parçalarına efektler eklemek (kazanç, bozulma, panoramalama vb.).
Aygıt API’leri, aygıt donanımıyla etkileşim kurmanıza olanak tanır: örneğin Geolocation API ile kullanıcının konumunu bulmak için aygıtın GPS’ine erişmek.
İstemci tarafı depolama API’leri, verileri istemci tarafında depolamanıza olanak tanır; böylece sayfa yüklemeleri arasında durumunu kaydeden ve hatta aygıt çevrimdışıyken bile çalışabilen bir uygulama oluşturabilirsiniz. Birkaç seçenek mevcuttur; örneğin Web Storage API ile basit ad/değer depolama ve IndexedDB API ile daha karmaşık veritabanı depolama.
Yaygın üçüncü taraf API’leri
Üçüncü taraf API’leri çok çeşitlidir; er ya da geç kullanma ihtimalinizin yüksek olduğu daha popüler olanlardan bazıları şunlardır:
Harita API’leri: Mapquest ve Google Maps API gibi, web sayfalarınızda haritalarla her türlü şeyi yapmanıza olanak tanıyanlar.
Facebook API paketi, uygulamanızın yararına Facebook ekosisteminin çeşitli bölümlerini kullanmanızı sağlar; örneğin Facebook girişiyle uygulama girişi sağlamak, uygulama içi ödemeleri kabul etmek, hedefli reklam kampanyaları başlatmak vb.
Telegram API’leri, botlar için destek sağlamanın yanı sıra Telegram kanallarındaki içeriği web sitenize gömmenize olanak tanır.
YouTube API, YouTube videolarını sitenize gömmenize, YouTube’da arama yapmanıza, oynatma listeleri oluşturmanıza ve daha fazlasına olanak tanır.
Pinterest API, Pinterest panolarını ve pinlerini yönetmek ve web sitenize dahil etmek için araçlar sağlar.
Twilio API, uygulamanıza sesli ve görüntülü arama işlevselliği eklemek, uygulamalarınızdan SMS/MMS göndermek ve daha fazlası için bir çerçeve sağlar.
Disqus API, sitenize entegre edilebilen bir yorum platformu sağlar.
Mastodon API, Mastodon sosyal ağının özelliklerini programatik olarak yönetmenizi sağlar.
IFTTT API, birden fazla API’yi tek bir platform üzerinden entegre etmeyi sağlar.
API’ler nasıl çalışır?
Farklı JavaScript API’leri biraz farklı şekillerde çalışır, ancak genel olarak ortak özelliklere ve çalışma biçimlerine dair benzer temalara sahiptirler.
Nesnelere dayanırlar
Kodunuz API’lerle, API’nin kullandığı verilerin (nesne özelliklerinde, properties) ve API’nin sunduğu işlevselliğin (nesne yöntemlerinde) kapsayıcıları olarak hizmet eden bir veya daha fazla JavaScript nesnesi aracılığıyla etkileşim kurar.
Not: Nesnelerin nasıl çalıştığına henüz aşina değilseniz, devam etmeden önce geri dönüp JavaScript nesneleri modülümüzü çalışmalısınız.
Web Audio API örneğine geri dönelim — bu, bir dizi nesneden oluşan oldukça karmaşık bir API’dir. En bariz olanlar şunlardır:
AudioContext, tarayıcı içinde çalan sesi işlemek için kullanılabilen bir ses grafiğini (audio graph) temsil eder ve bu sesi işlemek için kullanılabilen bir dizi yönteme ve özelliğe sahiptir.
MediaElementAudioSourceNode, ses bağlamı içinde çalmak ve işlemek istediğiniz sesi içeren bir <audio> öğesini temsil eder.
AudioDestinationNode, sesin hedefini, yani sesi gerçekte çıkaracak bilgisayarınızdaki aygıtı temsil eder — genellikle hoparlörleriniz veya kulaklığınız.
Peki bu nesneler nasıl etkileşir? Basit web ses örneğimize (canlı halini de görün) bakarsanız, önce şu HTML’yi göreceksiniz:
```html
<audio src="outfoxing.mp3"></audio>

<button class="paused">Play</button>
<br />
<input type="range" min="0" max="1" step="0.01" value="1" class="volume" />
Öncelikle, sayfaya bir MP3 gömdüğümüz bir <audio> öğesi ekliyoruz. Varsayılan tarayıcı denetimlerinden hiçbirini eklemiyoruz. Ardından müziği oynatıp durdurmak için kullanacağımız bir <button> ve müzik çalarken parçanın ses seviyesini ayarlamak için kullanacağımız range türünde bir <input> öğesi ekliyoruz.
Şimdi bu örneğin JavaScript’ine bakalım.
Parçamızı işlemek için içinde çalışacağımız bir AudioContext örneği (instance) oluşturarak başlıyoruz:
```
```js
const audioCtx = new AudioContext();
Sonra <audio>, <button> ve <input> öğelerimize referans tutan sabitler oluşturuyoruz ve sesimizin kaynağını temsil eden bir MediaElementAudioSourceNode oluşturmak için AudioContext.createMediaElementSource() yöntemini kullanıyoruz — <audio> öğesi buradan çalınacak:
```js
const audioElement = document.querySelector("audio");
const playBtn = document.querySelector("button");
const volumeSlider = document.querySelector(".volume");

const audioSource = audioCtx.createMediaElementSource(audioElement);
Sonra, düğmeye basıldığında oynatma ve duraklatma arasında geçiş yapmaya ve şarkı bittiğinde ekranı başa döndürmeye yarayan birkaç olay işleyici (event handler) ekliyoruz:
```
```js
// sesi oynat/duraklat
playBtn.addEventListener("click", () => {
  // bağlamın askıya alınmış durumda olup olmadığını kontrol et (otomatik oynatma ilkesi)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // parça durdurulmuşsa oynat
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // parça oynuyorsa durdur
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// parça biterse
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});
Not: Bazılarınız, parçayı oynatmak ve duraklatmak için kullanılan play() ve pause() yöntemlerinin Web Audio API’nin parçası olmadığını fark edebilir; bunlar, farklı ama yakından ilişkili olan HTMLMediaElement API’sinin parçasıdır.
Sonra, AudioContext.createGain() yöntemini kullanarak içinden geçen sesin ses seviyesini ayarlamak için kullanılabilen bir GainNode nesnesi oluşturuyoruz ve kaydırıcı değeri her değiştiğinde ses grafiğinin kazancını (gain; ses seviyesini) değiştiren başka bir olay işleyici oluşturuyoruz:
```js
// ses seviyesi
const gainNode = audioCtx.createGain();

volumeSlider.addEventListener("input", () => {
  gainNode.gain.value = volumeSlider.value;
});
Bunun çalışması için yapılacak son şey, ses grafiğindeki farklı düğümleri (nodes) birbirine bağlamaktır; bu, her düğüm türünde bulunan AudioNode.connect() yöntemiyle yapılır:
```
```js
audioSource.connect(gainNode).connect(audioCtx.destination);
Ses kaynakta başlar, ardından ses seviyesinin ayarlanabilmesi için kazanç düğümüne bağlanır. Kazanç düğümü daha sonra sesin bilgisayarınızda çalınabilmesi için hedef düğüme bağlanır (AudioContext.destination özelliği, bilgisayarınızın donanımında bulunan varsayılan AudioDestinationNode’u, ör. hoparlörlerinizi, temsil eder).
Tanınabilir giriş noktaları vardır
Bir API kullanırken, API’nin giriş noktasının nerede olduğunu bildiğinizden emin olmalısınız. Web Audio API’de bu oldukça basittir — herhangi bir ses işlemesi yapmak için kullanılması gereken AudioContext nesnesidir.
Belge Nesne Modeli (DOM) API’sinin de basit bir giriş noktası vardır — özellikleri genellikle Document nesnesinin ya da herhangi bir şekilde etkilemek istediğiniz bir HTML öğesi örneğinin üzerinde bulunur, örneğin:
```js
const em = document.createElement("em"); // yeni bir em öğesi oluştur
const para = document.querySelector("p"); // mevcut bir p öğesine referans al
em.textContent = "Hello there!"; // em'e biraz metin içeriği ver
para.appendChild(em); // em'i para'nın içine göm
Canvas API de üzerinde işlem yapmak için kullanılacak bir bağlam (context) nesnesi almaya dayanır, ancak bu durumda bu bir ses bağlamı değil, grafik bağlamıdır. Bağlam nesnesi, üzerine çizim yapmak istediğiniz <canvas> öğesine bir referans alınarak ve ardından onun HTMLCanvasElement.getContext() yöntemi çağrılarak oluşturulur:
```
```js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
Canvas üzerinde yapmak istediğimiz her şey, daha sonra bağlam nesnesinin (CanvasRenderingContext2D örneğidir) özellikleri ve yöntemleri çağrılarak gerçekleştirilir, örneğin:
```js
Ball.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};
Not: Bu kodu zıplayan toplar demomuzda iş başında görebilirsiniz (canlı çalışırken de görün).
Durum değişikliklerini ele almak için sıklıkla olayları kullanırlar
Olayları (events) kursun daha önceki bölümlerinde Olaylara giriş makalemizde ele almıştık; bu makale istemci tarafı web olaylarının ne olduğuna ve kodunuzda nasıl kullanıldığına ayrıntılı olarak bakar. İstemci tarafı web API olaylarının nasıl çalıştığına henüz aşina değilseniz, devam etmeden önce bu makaleyi okumalısınız.
Bazı web API’leri hiç olay içermez, ancak çoğu en az birkaç tane içerir. Olaylar tetiklendiğinde fonksiyonlar çalıştırmamızı sağlayan işleyici özellikleri genellikle başvuru materyalimizde ayrı “Olay işleyicileri” bölümlerinde listelenir.
Yukarıdaki Web Audio API örneğimizde zaten birkaç olay işleyicinin kullanıldığını gördük:
```
```js
// sesi oynat/duraklat
playBtn.addEventListener("click", () => {
  // bağlamın askıya alınmış durumda olup olmadığını kontrol et (otomatik oynatma ilkesi)
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  // parça durdurulmuşsa oynat
  if (playBtn.getAttribute("class") === "paused") {
    audioElement.play();
    playBtn.setAttribute("class", "playing");
    playBtn.textContent = "Pause";
    // parça oynuyorsa durdur
  } else if (playBtn.getAttribute("class") === "playing") {
    audioElement.pause();
    playBtn.setAttribute("class", "paused");
    playBtn.textContent = "Play";
  }
});

// parça biterse
audioElement.addEventListener("ended", () => {
  playBtn.setAttribute("class", "paused");
  playBtn.textContent = "Play";
});
Uygun olduğunda ek güvenlik mekanizmalarına sahiptirler
WebAPI özellikleri, JavaScript ve diğer web teknolojileriyle aynı güvenlik değerlendirmelerine tabidir (örneğin aynı köken ilkesi (same-origin policy)), ancak bazen ek güvenlik mekanizmaları da bulunur. Örneğin, daha modern WebAPI’lerden bazıları, potansiyel olarak hassas veriler ilettikleri için yalnızca HTTPS üzerinden sunulan sayfalarda çalışır (örnekler arasında Service Workers ve Push bulunur).
Ayrıca, bazı WebAPI’ler, koddaki çağrılar yapıldığında etkinleştirilmeleri için kullanıcıdan izin ister. Örneğin, Notifications API bir açılır iletişim kutusu aracılığıyla izin ister:
*[Görsel: MDN orijinal makalesindeki ilgili ekran görüntüsüne bakınız.]*
Web Audio ve HTMLMediaElement API’leri, otomatik oynatma ilkesi adı verilen bir güvenlik mekanizmasına tabidir — bu temelde, bir sayfa yüklendiğinde sesi otomatik olarak oynatamayacağınız anlamına gelir — kullanıcılarınızın bir düğme gibi bir denetim aracılığıyla sesin oynatılmasını başlatmasına izin vermeniz gerekir. Bu yapılır çünkü otomatik oynatılan ses genellikle gerçekten can sıkıcıdır ve kullanıcılarımızı buna gerçekten maruz bırakmamalıyız.
Not: Tarayıcının ne kadar katı olduğuna bağlı olarak, bu tür güvenlik mekanizmaları örneğin yerel olarak çalışmasını bile engelleyebilir; yani yerel örnek dosyayı bir web sunucusundan çalıştırmak yerine tarayıcınıza yüklerseniz. Yazım sırasında, Web Audio API örneğimiz Google Chrome’da yerel olarak çalışmıyordu — çalışması için onu GitHub’a yüklememiz gerekti.
Özet
Bu noktada, API’lerin ne olduğu, nasıl çalıştıkları ve JavaScript kodunuzda bunlarla neler yapabileceğiniz konusunda iyi bir fikriniz olmalı. Muhtemelen belirli API’lerle gerçekten eğlenceli şeyler yapmaya başlamak için heyecanlısınız, o halde başlayalım! Sırada, video ve ses API’lerine bakacağız.
Genel bakış: İstemci tarafı web API’leri
Sonraki
Grafik çizme
Önceki
Genel bakış: İstemci tarafı web API’leri
Sonraki
Tarayıcı, Ölçeklenebilir Vektör Grafikleri (Scalable Vector Graphics, SVG) dilinden HTML <canvas> öğeleri üzerine çizim yapmaya yarayan API’lere kadar (bkz. Canvas API ve WebGL) çok güçlü grafik programlama araçları içerir. Bu makale, canvas’a bir giriş sunar ve daha fazla öğrenmenizi sağlayacak ek kaynaklar verir.
Ön koşullar:
HTML, CSS ve JavaScript konusunda aşinalık; özellikle JavaScript nesne temelleri ve DOM betikleme ile ağ istekleri gibi temel API kapsamı.
Öğrenme çıktıları:
Bu derste ele alınan API’lerin olanak tanıdığı kavramlar ve kullanım durumları.
<canvas> ve ilişkili API’lerin temel sözdizimi ve kullanımı.
Animasyon döngüleri (animation loops) kurmak için zamanlayıcıları ve requestAnimationFrame()’i kullanma.

Bu makalede
Web’de grafikler
Bir <canvas> ile başlarken
2D canvas temelleri
Döngüler ve animasyonlar
WebGL
Özet
Ayrıca bakın
Örnekler
Web’de grafikler
Web başlangıçta yalnızca metindi, bu da çok sıkıcıydı; bu yüzden görüntüler tanıtıldı — önce <img> öğesi, daha sonra background-image gibi CSS özellikleri ve SVG aracılığıyla.
Ancak bu hâlâ yeterli değildi. SVG vektör görüntülerini — işaretleme (markup) ile temsil edildikleri için — canlandırmak (ve başka şekillerde değiştirmek) için CSS ve JavaScript kullanabilseniz de, bitmap görüntüler için aynısını yapmanın hâlâ bir yolu yoktu ve mevcut araçlar oldukça sınırlıydı. Web’in hâlâ animasyonları, oyunları, 3D sahneleri ve genellikle C++ veya Java gibi daha düşük seviyeli dillerle karşılanan diğer gereksinimleri etkili biçimde oluşturmanın bir yolu yoktu.
Durum, tarayıcılar 2004'te <canvas> öğesini ve ilişkili Canvas API’sini desteklemeye başladığında iyileşmeye başladı. Aşağıda göreceğiniz gibi canvas, 2D animasyonlar, oyunlar, veri görselleştirmeleri ve diğer uygulama türlerini oluşturmak için, özellikle web platformunun sağladığı diğer bazı API’lerle birleştirildiğinde, bazı yararlı araçlar sağlar; ancak erişilebilir hale getirmek zor ya da imkânsız olabilir.
Aşağıdaki örnek, ilk olarak JavaScript nesnelerine giriş modülümüzde karşılaştığımız, canvas tabanlı basit bir 2D zıplayan toplar animasyonunu göstermektedir:
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
2006–2007 civarında Mozilla, deneysel bir 3D canvas uygulaması üzerinde çalışmaya başladı. Bu, tarayıcı üreticileri arasında ilgi gören ve 2009–2010 civarında standartlaştırılan WebGL haline geldi. WebGL, web tarayıcınızın içinde gerçek 3D grafikler oluşturmanıza olanak tanır.
Ham WebGL kodu çok karmaşık olduğu için bu makale ağırlıklı olarak 2D canvas’a odaklanacak. Bununla birlikte, daha kolay bir 3D sahne oluşturmak için bir WebGL kütüphanesinin nasıl kullanılacağını göstereceğiz ve ham WebGL’i kapsayan bir öğreticiyi başka bir yerde bulabilirsiniz — bkz. WebGL ile başlarken.
Bir <canvas> ile başlarken
Bir web sayfasında 2D veya 3D bir sahne oluşturmak istiyorsanız, bir HTML <canvas> öğesiyle başlamanız gerekir. Bu öğe, sayfada görüntünün çizileceği alanı tanımlamak için kullanılır. Bu, öğeyi sayfaya eklemek kadar basittir:
```html
<canvas width="320" height="240"></canvas>
Bu, sayfada 320'ye 240 piksel boyutunda bir canvas oluşturacaktır.
<canvas> etiketlerinin içine bir miktar yedek içerik (fallback content) koymalısınız. Bu, canvas’ı desteklemeyen tarayıcıların kullanıcılarına veya ekran okuyucu kullanıcılarına canvas içeriğini açıklamalıdır.
```
```html
<canvas width="320" height="240">
  <p>Description of the canvas for those unable to view it.</p>
</canvas>
Yedek içerik, canvas içeriğine yararlı bir alternatif içerik sağlamalıdır. Örneğin, sürekli güncellenen bir hisse senedi fiyat grafiği oluşturuyorsanız, yedek içerik, fiyatların ne olduğunu metin olarak belirten alt metniyle en son hisse senedi grafiğinin statik bir görüntüsü veya tek tek hisse senedi sayfalarına bağlantıların bir listesi olabilir.
Not: Canvas içeriği ekran okuyucular tarafından erişilebilir değildir. Açıklayıcı metni doğrudan canvas öğesinin kendisinde aria-label özniteliğinin değeri olarak ekleyin veya açılış ve kapanış <canvas> etiketleri arasına yerleştirilmiş yedek içerik ekleyin. Canvas içeriği DOM’un parçası değildir, ancak iç içe yerleştirilmiş yedek içerik öyledir.
Canvas’ımızı oluşturma ve boyutlandırma
Gelecekteki deneyleri oluşturmak için kendi canvas şablonumuzu oluşturarak başlayalım.
Öncelikle yerel sabit sürücünüzde canvas-template adında bir dizin oluşturun.
Dizinde index.html adında yeni bir dosya oluşturun ve aşağıdaki içeriği içine kaydedin:
```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Canvas</title>
    <script src="script.js" defer></script>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <canvas class="myCanvas">
      <p>Add suitable fallback here.</p>
    </canvas>
  </body>
</html>
Dizinin içinde style.css adında yeni bir dosya oluşturun ve aşağıdaki CSS kuralını içine kaydedin:
```
```css
body {
  margin: 0;
  overflow: hidden;
}
Dizinin içinde script.js adında yeni bir dosya oluşturun. Bu dosyayı şimdilik boş bırakın.
Şimdi script.js dosyasını açın ve aşağıdaki JavaScript satırlarını ekleyin:
```js
const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);
Burada canvas'a bir referansı `canvas` sabitinde sakladık. İkinci satırda hem yeni bir `width` sabitini hem de canvas'ın `width` özelliğini [`Window.innerWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth)'e (bize görünüm alanı (viewport) genişliğini verir) eşitledik. Üçüncü satırda hem yeni bir `height` sabitini hem de canvas'ın `height` özelliğini [`Window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)'e (bize görünüm alanı yüksekliğini verir) eşitledik. Artık tarayıcı penceresinin tüm genişliğini ve yüksekliğini dolduran bir canvas'ımız var!

Ayrıca atamaları birden fazla eşittir işaretiyle zincirlediğimizi göreceksiniz — bu JavaScript'te izin verilen bir şeydir ve birden fazla değişkeni aynı değere eşitlemek istiyorsanız iyi bir tekniktir. Canvas genişliğini ve yüksekliğini width/height değişkenlerinde kolayca erişilebilir kılmak istedik, çünkü bunlar daha sonra kullanılabilecek yararlı değerlerdir (örneğin, canvas genişliğinin tam ortasına bir şey çizmek istiyorsanız).
Not: Canvas boyutunu genellikle yukarıda açıklandığı gibi HTML öznitelikleri veya DOM özellikleri kullanarak ayarlamalısınız. CSS kullanabilirsiniz, ancak sorun, boyutlandırmanın canvas işlendikten sonra yapılması ve diğer görüntüler gibi canvas’ın da pikselleşebilmesi/bozulabilmesidir.
Canvas bağlamını alma ve son kurulum
Canvas şablonumuzu tamamlanmış sayabilmemiz için yapmamız gereken son bir şey var. Canvas üzerine çizim yapmak için, çizim alanına bağlam (context) adı verilen özel bir referans almamız gerekir. Bu, temel kullanımda almak istediğiniz bağlam türünü temsil eden tek bir dizeyi parametre olarak alan HTMLCanvasElement.getContext() yöntemiyle yapılır.
Bu durumda 2d bir canvas istiyoruz, bu yüzden script.js dosyasında diğerlerinin altına aşağıdaki JavaScript satırını ekleyin:
```
```js
const ctx = canvas.getContext("2d");
Not: Seçebileceğiniz diğer bağlam değerleri arasında WebGL için webgl, WebGPU için webgpu vb. bulunur, ancak bu makalede bunlara ihtiyacımız olmayacak.
İşte bu kadar — canvas’ımız artık hazır ve üzerine çizim yapmaya hazır! ctx değişkeni artık bir CanvasRenderingContext2D nesnesi içeriyor ve canvas üzerindeki tüm çizim işlemleri bu nesneyi değiştirmeyi içerecek.
Devam etmeden önce son bir şey yapalım. Canvas API’sinin ilk tadını almanız için canvas arka planını siyaha boyayacağız. JavaScript’inizin en altına aşağıdaki satırları ekleyin:
```js
ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);
Burada canvas’ın fillStyle özelliğini kullanarak bir dolgu rengi ayarlıyoruz (bu özellik, tıpkı CSS özellikleri gibi renk değerlerini alır), ardından fillRect yöntemiyle canvas’ın tüm alanını kaplayan bir dikdörtgen çiziyoruz (ilk iki parametre dikdörtgenin sol üst köşesinin koordinatlarıdır; son ikisi dikdörtgenin çizilmesini istediğiniz genişlik ve yüksekliktir — o width ve height değişkenlerinin yararlı olacağını söylemiştik)!
Tamam, şablonumuz hazır ve devam etme zamanı.
2D canvas temelleri
Yukarıda söylediğimiz gibi, tüm çizim işlemleri bir CanvasRenderingContext2D nesnesi (bizim durumumuzda ctx) değiştirilerek yapılır. Birçok işlemin, bir şeyin tam olarak nereye çizileceğini belirlemek için koordinatlar verilmesi gerekir — canvas’ın sol üst köşesi (0, 0) noktasıdır, yatay (x) eksen soldan sağa, dikey (y) eksen ise yukarıdan aşağıya doğru uzanır.
*[Görsel: MDN orijinal makalesindeki ilgili ekran görüntüsüne bakınız.]*
Şekil çizme genellikle dikdörtgen şekil ilkeli (primitive) kullanılarak ya da belirli bir yol boyunca bir çizgi izlenip ardından şeklin doldurulmasıyla yapılır. Aşağıda her ikisinin nasıl yapılacağını göstereceğiz.
Basit dikdörtgenler
Bazı basit dikdörtgenlerle başlayalım.
Öncelikle, yeni kodladığınız canvas şablonu dizininin bir kopyasını oluşturun.
JavaScript dosyanızın en altına aşağıdaki satırları ekleyin:
```
```js
ctx.fillStyle = "red";
ctx.fillRect(50, 50, 100, 150);
HTML'inizi tarayıcıda yüklerseniz, canvas'ınızda kırmızı bir dikdörtgenin belirdiğini görmelisiniz. Sol üst köşesi canvas kenarının üstünden ve solundan 50 piksel uzaktadır (ilk iki parametreyle tanımlandığı gibi) ve 100 piksel genişliğinde ve 150 piksel yüksekliğindedir (üçüncü ve dördüncü parametrelerle tanımlandığı gibi).
3. Karışıma bir dikdörtgen daha ekleyelim — bu sefer yeşil bir tane. JavaScript’inizin en altına şunu ekleyin:
```js
ctx.fillStyle = "green";
ctx.fillRect(75, 75, 100, 100);
Kaydedip yenileyin, yeni dikdörtgeninizi göreceksiniz. Bu önemli bir noktayı gündeme getiriyor: dikdörtgen, çizgi vb. çizmek gibi grafik işlemleri meydana geldikleri sırayla gerçekleştirilir. Bunu, her kat boyanın üst üste geldiği ve hatta altındakini gizleyebildiği bir duvarı boyamak gibi düşünün. Bunu değiştirmek için yapabileceğiniz hiçbir şey yoktur, bu yüzden grafikleri çizme sıranızı dikkatle düşünmelisiniz.
4. Yarı saydam bir renk belirterek, örneğin rgb() kullanarak, yarı saydam grafikler çizebileceğinizi unutmayın. “Alfa kanalı” rengin sahip olduğu saydamlık miktarını tanımlar. Değeri ne kadar yüksekse, arkasındaki şeyi o kadar çok gizler. Kodunuza aşağıdakini ekleyin:
```
```js
ctx.fillStyle = "rgb(255 0 255 / 75%)";
ctx.fillRect(25, 100, 175, 50);
Şimdi kendi başınıza biraz daha dikdörtgen çizmeyi deneyin; iyi eğlenceler!
Konturlar ve çizgi kalınlıkları
Şimdiye kadar dolu dikdörtgenler çizmeye baktık, ancak yalnızca dış çizgiden oluşan dikdörtgenler de çizebilirsiniz (grafik tasarımda kontur (stroke) olarak adlandırılır). Konturunuz için istediğiniz rengi ayarlamak üzere strokeStyle özelliğini kullanırsınız; kontur dikdörtgeni çizmek ise strokeRect ile yapılır.
Önceki örneğe aşağıdakini ekleyin, yine önceki JavaScript satırlarının altına:
```js
ctx.strokeStyle = "white";
ctx.strokeRect(25, 25, 175, 200);
Konturların varsayılan kalınlığı 1 pikseldir; bunu değiştirmek için lineWidth özelliğinin değerini ayarlayabilirsiniz (konturun kaç piksel kalınlıkta olduğunu temsil eden bir sayı alır). Aşağıdaki satırı önceki iki satırın arasına ekleyin:
```
```js
ctx.lineWidth = 5;
Şimdi beyaz dış çizginizin çok daha kalın hale geldiğini görmelisiniz! Şimdilik bu kadar. Bu noktada örneğiniz şöyle görünmelidir:
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Örneği MDN Playground’da açmak ve kaynak kodunu düzenlemek için Play düğmesine basabilirsiniz.
Yol çizme
Bir dikdörtgenden daha karmaşık bir şey çizmek istiyorsanız, bir yol (path) çizmeniz gerekir. Temelde bu, çizmek istediğiniz şekli izlemek için kalemin canvas’ınızda tam olarak hangi yol boyunca hareket etmesi gerektiğini belirten kod yazmayı içerir. Canvas; düz çizgiler, daireler, Bézier eğrileri ve daha fazlasını çizmek için fonksiyonlar içerir.
Bölüme, yeni örneği çizeceğiniz canvas şablonunuzun yeni bir kopyasını oluşturarak başlayın.
Aşağıdaki tüm bölümlerde bazı ortak yöntemleri ve özellikleri kullanacağız:
beginPath() — kalemin canvas üzerinde o anda bulunduğu noktada bir yol çizmeye başla. Yeni bir canvas’ta kalem (0, 0)’da başlar.
moveTo() — çizgiyi kaydetmeden veya izlemeden kalemi canvas üzerinde farklı bir noktaya taşı; kalem yeni konuma “zıplar”.
fill() — şimdiye kadar izlediğin yolu doldurarak dolu bir şekil çiz.
stroke() — şimdiye kadar çizdiğin yol boyunca bir kontur çizerek dış çizgi şekli çiz.
lineWidth ve fillStyle/strokeStyle gibi özellikleri dikdörtgenlerin yanı sıra yollarla da kullanabilirsiniz.
Tipik, basit bir yol çizme işlemi şuna benzer:
```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
// yolunuzu çizin
ctx.fill();
Çizgi çizme
Canvas üzerine bir eşkenar üçgen çizelim.
Öncelikle, kodunuzun en altına aşağıdaki yardımcı fonksiyonu ekleyin. Bu fonksiyon derece değerlerini radyana dönüştürür; bu yararlıdır çünkü JavaScript’te bir açı değeri vermeniz gerektiğinde bu neredeyse her zaman radyan cinsindendir, ancak insanlar genellikle derece cinsinden düşünür.
```
```js
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}
Sonra, önceki eklemenizin altına aşağıdakini ekleyerek yolunuzu başlatın; burada üçgenimiz için bir renk ayarlıyoruz, bir yol çizmeye başlıyoruz ve ardından hiçbir şey çizmeden kalemi (50, 50) noktasına taşıyoruz. Üçgenimizi çizmeye buradan başlayacağız.
```js
ctx.fillStyle = "red";
ctx.beginPath();
ctx.moveTo(50, 50);
Şimdi betiğinizin en altına aşağıdaki satırları ekleyin:
```
```js
ctx.lineTo(150, 50);
const triHeight = 50 * Math.tan(degToRad(60));
ctx.lineTo(100, 50 + triHeight);
ctx.lineTo(50, 50);
ctx.fill();
Bunu sırayla gözden geçirelim:

Önce (150, 50) noktasına bir çizgi çiziyoruz — yolumuz artık x ekseni boyunca 100 piksel sağa gidiyor.

İkinci olarak, biraz basit trigonometri kullanarak eşkenar üçgenimizin yüksekliğini hesaplıyoruz. Temelde üçgeni aşağıya bakacak şekilde çiziyoruz. Eşkenar üçgendeki açılar her zaman 60 derecedir; yüksekliği hesaplamak için üçgeni ortadan ikiye bölebiliriz; bu da her biri 90 derece, 60 derece ve 30 derecelik açılara sahip iki dik üçgen oluşturur. Kenarlar açısından:
En uzun kenara hipotenüs (hypotenuse) denir
60 derecelik açının yanındaki kenara komşu kenar (adjacent) denir — az önce çizdiğimiz çizginin yarısı olduğu için bunun 50 piksel olduğunu biliyoruz.
60 derecelik açının karşısındaki kenara karşı kenar (opposite) denir; bu, hesaplamak istediğimiz üçgenin yüksekliğidir. Show Image Temel trigonometrik formüllerden biri, komşu kenarın uzunluğunun açının tanjantıyla çarpımının karşı kenara eşit olduğunu belirtir; dolayısıyla 50 * Math.tan(degToRad(60)) ifadesine ulaşırız. Math.tan() giriş değerini radyan olarak beklediği için 60 dereceyi radyana dönüştürmek üzere degToRad() fonksiyonumuzu kullanıyoruz.
Yükseklik hesaplandıktan sonra (100, 50 + triHeight) noktasına bir çizgi daha çiziyoruz. X koordinatı basit; daha önce belirlediğimiz önceki iki X değerinin tam ortasında olmalı. Y değeri ise 50 artı üçgen yüksekliği olmalı, çünkü üçgenin tepesinin canvas’ın üstünden 50 piksel uzakta olduğunu biliyoruz.
Sonraki satır, üçgenin başlangıç noktasına geri bir çizgi çizer.
Son olarak, yolu bitirmek ve şekli doldurmak için ctx.fill() çalıştırıyoruz.
Daire çizme
Şimdi canvas’ta bir dairenin nasıl çizileceğine bakalım. Bu, belirli bir noktada bir dairenin tamamını veya bir kısmını çizen arc() yöntemiyle gerçekleştirilir.
Canvas’ımıza bir yay ekleyelim — kodunuzun en altına aşağıdakini ekleyin:
```js
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(150, 106, 50, degToRad(0), degToRad(360), false);
ctx.fill();
`arc()` altı parametre alır. İlk ikisi yayın merkezinin konumunu belirtir (sırasıyla X ve Y). Üçüncüsü dairenin yarıçapıdır, dördüncü ve beşincisi dairenin çizileceği başlangıç ve bitiş açılarıdır (yani 0 ve 360 derece belirtmek bize tam bir daire verir) ve altıncı parametre dairenin saat yönünün tersine mi yoksa saat yönünde mi çizileceğini tanımlar (`false` saat yönüdür).

  **Not:** 0 derece yatay olarak sağdır.
2. Başka bir yay eklemeyi deneyelim:
```
```js
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(200, 106, 50, degToRad(-45), degToRad(45), true);
ctx.lineTo(200, 106);
ctx.fill();
Buradaki örüntü çok benzer, ancak iki farkla:
arc()’ın son parametresini true olarak ayarladık; bu, yayın saat yönünün tersine çizildiği anlamına gelir; yani yay -45 derecede başlayıp 45 derecede bitecek şekilde belirtilmiş olsa da, yayı bu kısmın içine değil, 270 derecelik kısım etrafına çiziyoruz. true’yu false olarak değiştirip kodu yeniden çalıştırırsanız, dairenin yalnızca 90 derecelik dilimi çizilir.
fill()’i çağırmadan önce dairenin merkezine bir çizgi çiziyoruz. Bu, oldukça hoş bir Pac-Man tarzı kesik elde etmemizi sağlar. Bu satırı kaldırıp (deneyin!) kodu yeniden çalıştırırsanız, yayın başlangıç ve bitiş noktası arasında dairenin yalnızca bir kenarı kesilmiş olarak elde edersiniz. Bu, canvas’ın bir başka önemli noktasını gösterir — eksik bir yolu (yani kapalı olmayan bir yolu) doldurmaya çalışırsanız, tarayıcı başlangıç ve bitiş noktası arasına düz bir çizgi çeker ve ardından onu doldurur.
Şimdilik bu kadar; son örneğiniz şöyle görünmelidir:
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Örneği MDN Playground’da açmak ve kaynak kodunu düzenlemek için Play düğmesine basabilirsiniz.
Not: Bézier eğrileri gibi gelişmiş yol çizme özellikleri hakkında daha fazla bilgi edinmek için Canvas ile şekil çizme öğreticimize göz atın.
Metin
Canvas’ta metin çizmeye yönelik özellikler de vardır. Bunları kısaca inceleyelim. Yeni örneği çizeceğiniz canvas şablonunuzun bir kopyasını daha oluşturarak başlayın.
Metin iki yöntemle çizilir:
fillText() — dolu metin çizer.
strokeText() — dış çizgili (kontur) metin çizer.
Bunların her ikisi de temel kullanımda üç özellik alır: çizilecek metin dizesi ile metni çizmeye başlayacağınız noktanın X ve Y koordinatları. Bu, metin kutusunun (tam anlamıyla çizdiğiniz metni çevreleyen kutu) sol alt köşesi olarak çıkar; diğer çizim işlemleri genellikle sol üst köşeden başladığı için bu kafanızı karıştırabilir — bunu aklınızda bulundurun.
Metin işlemeyi kontrol etmeye yardımcı olan, yazı tipi ailesini, boyutunu vb. belirtmenize olanak tanıyan font gibi bir dizi özellik de vardır. Değer olarak CSS font özelliğiyle aynı sözdizimini alır.
Canvas içeriği ekran okuyucular tarafından erişilebilir değildir. Canvas’a boyanan metin DOM’da bulunmaz, ancak erişilebilir olması için kullanıma sunulmalıdır. Bu örnekte metni aria-label değeri olarak ekliyoruz.
JavaScript’inizin en altına aşağıdaki bloğu eklemeyi deneyin:
```js
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.font = "36px arial";
ctx.strokeText("Canvas text", 50, 50);

ctx.fillStyle = "red";
ctx.font = "48px georgia";
ctx.fillText("Canvas text", 50, 150);

canvas.setAttribute("aria-label", "Canvas text");
Burada biri dış çizgili, diğeri dolu olmak üzere iki satır metin çiziyoruz. Örnek şöyle görünmelidir:
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Örneği MDN Playground’da açmak ve kaynak kodunu düzenlemek için Play düğmesine basın. Biraz oynayın ve neler çıkarabileceğinize bakın! Canvas metni için mevcut seçenekler hakkında daha fazla bilgiyi Metin çizme bölümünde bulabilirsiniz.
Canvas’a görüntü çizme
Harici görüntüleri canvas’ınıza işlemek mümkündür. Bunlar basit görüntüler, videolardan kareler veya diğer canvas’ların içeriği olabilir. Şimdilik yalnızca canvas’ımızda bazı basit görüntüleri kullanma durumuna bakacağız.
Daha önce olduğu gibi, yeni örneği çizeceğiniz canvas şablonunuzun bir kopyasını daha oluşturun. Görüntüler canvas’a drawImage() yöntemiyle çizilir. En basit sürümü üç parametre alır — işlemek istediğiniz görüntüye bir referans ve görüntünün sol üst köşesinin X ve Y koordinatları.
Canvas’ımıza gömmek için bir görüntü kaynağı alarak başlayalım. JavaScript’inizin en altına aşağıdaki satırları ekleyin:
```
```js
const image = new Image();
image.src =
  "https://mdn.github.io/shared-assets/images/examples/fx-nightly-512.png";
Burada [`Image()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image) yapıcısını (constructor) kullanarak yeni bir [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement) nesnesi oluşturuyoruz. Döndürülen nesne, mevcut bir [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img) öğesine referans aldığınızda döndürülenle aynı türdendir. Ardından onun [`src`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img#src) özniteliğini Firefox logo görüntümüze eşitliyoruz. Bu noktada tarayıcı görüntüyü yüklemeye başlar.
3. Şimdi görüntüyü drawImage() kullanarak gömmeyi deneyebiliriz, ancak önce görüntü dosyasının yüklendiğinden emin olmamız gerekir, aksi takdirde kod başarısız olur. Bunu, yalnızca görüntü yüklenmeyi bitirdiğinde tetiklenecek olan load olayını (event) kullanarak başarabiliriz. Aşağıdaki bloğu önceki bloğun altına ekleyin:
```js
image.addEventListener("load", () => ctx.drawImage(image, 20, 20));
Örneğinizi şimdi tarayıcıda yüklerseniz, görüntünün canvas'a gömüldüğünü, ancak oldukça büyük olduğunu görmelisiniz.
4. Ama daha fazlası var! Peki ya görüntünün yalnızca bir kısmını göstermek veya yeniden boyutlandırmak istersek? Her ikisini de drawImage()’in daha karmaşık sürümüyle yapabiliriz. ctx.drawImage() satırınızı şu şekilde güncelleyin:
```
```js
ctx.drawImage(image, 0, 0, 512, 512, 50, 40, 185, 185);
İlk parametre, daha önce olduğu gibi görüntü referansıdır.
ve 3. parametreler, yüklenen görüntüden kesmek istediğiniz alanın sol üst köşesinin koordinatlarını, görüntünün kendi sol üst köşesine göre tanımlar. İlk parametrenin solundaki veya ikincinin üstündeki hiçbir şey çizilmez.
ve 5. parametreler, yüklediğimiz orijinal görüntüden kesmek istediğimiz alanın genişliğini ve yüksekliğini tanımlar.
ve 7. parametreler, görüntünün kesilen kısmının sol üst köşesini, canvas’ın sol üst köşesine göre çizmek istediğiniz koordinatları tanımlar.
ve 9. parametreler, görüntünün kesilen alanını çizeceğiniz genişliği ve yüksekliği tanımlar. Bu durumda orijinal dilimle aynı boyutları belirttik, ancak farklı değerler belirterek yeniden boyutlandırabilirsiniz.
Görüntü anlamlı şekilde güncellendiğinde, açıklama da güncellenmelidir.
```js
canvas.setAttribute("aria-label", "Firefox Logo");
Son örnek şöyle görünmelidir:
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Örneği MDN Playground’da açmak ve kaynak kodunu düzenlemek için Play düğmesine basın.
Döngüler ve animasyonlar
Şimdiye kadar 2D canvas’ın çok temel bazı kullanımlarını ele aldık, ancak onu bir şekilde güncellemediğiniz veya canlandırmadığınız sürece canvas’ın tüm gücünü gerçekten deneyimleyemezsiniz. Sonuçta canvas, betiklenebilir görüntüler sağlar! Hiçbir şeyi değiştirmeyecekseniz, bunun yerine statik görüntüler kullanıp tüm bu zahmetten kurtulabilirsiniz.
Döngü oluşturma
Canvas’ta döngülerle oynamak oldukça eğlencelidir — canvas komutlarını, diğer JavaScript kodları gibi bir for (veya başka türde bir) döngünün içinde çalıştırabilirsiniz.
Bir örnek oluşturalım.
Canvas şablonunuzun yeni bir kopyasını daha oluşturun.
JavaScript’inizin en altına aşağıdaki satırı ekleyin. Bu, canvas’ın başlangıç noktasını (origin) taşıyan yeni bir yöntem olan translate()’i içerir:
```
```js
ctx.translate(width / 2, height / 2);
Bu, koordinat başlangıç noktasının (0, 0) sol üst köşede olmak yerine canvas'ın ortasına taşınmasına neden olur. Bu, tasarımımızın canvas'ın merkezine göre çizilmesini istediğimiz bu gibi birçok durumda çok yararlıdır.
3. Şimdi JavaScript’in en altına aşağıdaki kodu ekleyin:
```js
function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

    function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

    let length = 250;
let moveOffset = 20;
Burada, yukarıdaki üçgen örneğinde gördüğümüz aynı `degToRad()` fonksiyonunu, verilen alt ve üst sınırlar arasında rastgele bir sayı döndüren bir `rand()` fonksiyonunu ve `length` ile `moveOffset` değişkenlerini (bunlar hakkında daha sonra daha fazla bilgi edineceğiz) uyguluyoruz.
4. Buradaki fikir, for döngüsünün içinde canvas üzerine bir şey çizmemiz ve ilginç bir şey oluşturabilmemiz için her seferinde onu yinelemektir. Aşağıdaki kodu for döngünüzün içine ekleyin:
```
```js
for (let i = 0; i < length; i++) {
  ctx.fillStyle = `rgb(${255 - length} 0 ${255 - length} / 90%)`;
  ctx.beginPath();
  ctx.moveTo(moveOffset, moveOffset);
  ctx.lineTo(moveOffset + length, moveOffset);
  const triHeight = (length / 2) * Math.tan(degToRad(60));
  ctx.lineTo(moveOffset + length / 2, moveOffset + triHeight);
  ctx.lineTo(moveOffset, moveOffset);
  ctx.fill();

    length--;
  moveOffset += 0.7;
  ctx.rotate(degToRad(5));
}
Yani her yinelemede şunları yapıyoruz:
fillStyle’ı, length değerine bağlı olarak her seferinde değişen, hafif saydam bir mor tonu olarak ayarlıyoruz. Daha sonra göreceğiniz gibi uzunluk, döngü her çalıştığında küçülür; dolayısıyla buradaki etki, çizilen her ardışık üçgenle birlikte rengin daha parlak hale gelmesidir.
Yolu başlatıyoruz.
Kalemi (moveOffset, moveOffset) koordinatına taşıyoruz. Bu değişken, her yeni üçgen çizdiğimizde ne kadar kaydırmak istediğimizi tanımlar.
(moveOffset+length, moveOffset) koordinatına bir çizgi çiziyoruz. Bu, X eksenine paralel length uzunluğunda bir çizgi çizer.
Üçgenin yüksekliğini daha önce olduğu gibi hesaplıyoruz.
Üçgenin aşağıya bakan köşesine bir çizgi çiziyoruz, ardından üçgenin başlangıcına geri bir çizgi çiziyoruz.
Üçgeni doldurmak için fill() çağırıyoruz.
Üçgen dizisini tanımlayan değişkenleri, bir sonrakini çizmeye hazır olabilmek için güncelliyoruz. length değerini 1 azaltıyoruz, böylece üçgenler her seferinde küçülüyor; moveOffset’i küçük bir miktar artırıyoruz, böylece her ardışık üçgen biraz daha uzağa çiziliyor ve tüm canvas’ı döndürmemize olanak tanıyan başka bir yeni fonksiyon olan rotate()’i kullanıyoruz! Bir sonraki üçgeni çizmeden önce onu 5 derece döndürüyoruz.
İşte bu kadar! Son örnek şöyle görünmelidir:
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Örneği MDN Playground’da açmak ve kaynak kodunu düzenlemek için Play düğmesine basın. Sizi örnekle oynamaya ve onu kendinize ait kılmaya teşvik etmek isteriz! Örneğin:
Üçgenler yerine dikdörtgenler veya yaylar çizin, hatta görüntüler gömün.
length ve moveOffset değerleriyle oynayın.
Yukarıda eklediğimiz ama kullanmadığımız rand() fonksiyonunu kullanarak bazı rastgele sayılar ekleyin.
Animasyonlar
Yukarıda oluşturduğumuz döngü örneği eğlenceliydi, ancak ciddi canvas uygulamaları (oyunlar ve gerçek zamanlı görselleştirmeler gibi) için gerçekte sürekli devam eden bir döngüye ihtiyacınız vardır. Canvas’ınızı bir film gibi düşünürseniz, hareketin insan gözüne düzgün ve akıcı görünmesi için, ideal olarak saniyede 60 kare yenileme hızıyla, ekranın her karede güncellenmiş görünümü göstermek üzere güncellenmesini istersiniz.
Fonksiyonları saniyede birkaç kez tekrar tekrar çalıştırmanıza olanak tanıyan birkaç JavaScript fonksiyonu vardır; buradaki amaçlarımız için en iyisi window.requestAnimationFrame()’dir. Bir parametre alır — her kare için çalıştırmak istediğiniz fonksiyonun adı. Tarayıcı ekranı güncellemeye hazır olduğunda, fonksiyonunuz çağrılır. Bu fonksiyon animasyonunuzun yeni güncellemesini çizerse ve ardından fonksiyonun bitmesinden hemen önce requestAnimationFrame()’i tekrar çağırırsa, animasyon döngüsü çalışmaya devam eder. Döngü, requestAnimationFrame() çağırmayı bıraktığınızda veya requestAnimationFrame() çağırdıktan sonra ancak kare çağrılmadan önce window.cancelAnimationFrame() çağırdığınızda sona erer.
Not: Animasyonu kullanmayı bitirdiğinizde, hiçbir güncellemenin çalıştırılmayı beklemediğinden emin olmak için ana kodunuzdan cancelAnimationFrame() çağırmak iyi bir uygulamadır.
Tarayıcı, animasyonun tutarlı bir hızda çalışmasını sağlamak ve görülemeyen şeyleri canlandırmak için kaynakları boşa harcamamak gibi karmaşık ayrıntıları halleder.
Nasıl çalıştığını görmek için Zıplayan Toplar örneğimize bir kez daha hızlıca bakalım. Her şeyi hareket ettiren döngünün kodu şöyle görünür:
```js
function loop() {
  ctx.fillStyle = "rgb(0 0 0 / 25%)";
  ctx.fillRect(0, 0, width, height);

  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  requestAnimationFrame(loop);
}

loop();
Döngüyü başlatmak ve ilk animasyon karesini çizmek için loop() fonksiyonunu kodun en altında bir kez çalıştırıyoruz; ardından loop() fonksiyonu, animasyonun bir sonraki karesini tekrar tekrar çalıştırmak için requestAnimationFrame(loop) çağırma işini üstlenir.
Her karede canvas’ı tamamen temizleyip her şeyi yeniden çizdiğimizi unutmayın. Mevcut her top için onu çiziyoruz, konumunu güncelliyoruz ve başka toplarla çarpışıp çarpışmadığını kontrol ediyoruz. Canvas’a bir grafik çizdikten sonra, o grafiği DOM öğelerinde yapabildiğiniz gibi tek tek değiştirmenin bir yolu yoktur. Her topu canvas üzerinde hareket ettiremezsiniz, çünkü bir kez çizildikten sonra canvas’ın parçası olur ve tek tek erişilebilir bir öğe veya nesne değildir. Bunun yerine, ya tüm kareyi silip her şeyi yeniden çizerek ya da hangi bölümlerin silinmesi gerektiğini tam olarak bilen ve yalnızca canvas’ın gerekli en küçük alanını silip yeniden çizen koda sahip olarak, silip yeniden çizmeniz gerekir.
Grafiklerin animasyonunu optimize etmek, birçok akıllıca tekniğin bulunduğu, programlamanın başlı başına bir uzmanlık alanıdır. Bunlar ise örneğimiz için ihtiyacımız olanın ötesindedir!
Genel olarak, bir canvas animasyonu yapma süreci aşağıdaki adımları içerir:
Canvas içeriğini temizleyin (ör. fillRect() veya clearRect() ile).
Gerekirse save() kullanarak durumu kaydedin — bu, devam etmeden önce canvas üzerinde güncellediğiniz ayarları kaydetmek istediğinizde gereklidir ve daha gelişmiş uygulamalar için yararlıdır.
Canlandırdığınız grafikleri çizin.
adımda kaydettiğiniz ayarları restore() kullanarak geri yükleyin.
Animasyonun bir sonraki karesinin çizilmesini planlamak için requestAnimationFrame() çağırın.
Not: save() ve restore()’u burada ele almayacağız, ancak bunlar Dönüşümler öğreticimizde (ve onu izleyenlerde) güzel bir şekilde açıklanmıştır.
Yürüyen nesne animasyonu
Şimdi kendi basit animasyonumuzu oluşturalım — bir sprite sayfası (sprite sheet) kullanarak ekran boyunca hareket eden bir nesneyi canlandıracağız.
Canvas şablonumuzun yeni bir kopyasını daha oluşturun ve kod düzenleyicinizde açın.
Yedek HTML’yi görüntüyü yansıtacak şekilde güncelleyin:
```
```html
<canvas class="myCanvas">
  <p>A cat walking.</p>
</canvas>
Bu sefer arka planı siyaha boyamayacağız. Bu yüzden ctx değişkenini aldıktan sonra arka planı bunun yerine açık griye boyayın:
```js
ctx.fillStyle = "#e5e6e9";
ctx.fillRect(0, 0, width, height);
JavaScript’in en altına, koordinat başlangıç noktasının yine canvas’ın ortasında olması için aşağıdaki satırı ekleyin:
```
```js
ctx.translate(width / 2, height / 2);
Şimdi yeni bir HTMLImageElement nesnesi oluşturalım, onun src özelliğini yüklemek istediğimiz görüntüye ayarlayalım ve görüntü yüklendiğinde draw() fonksiyonunun tetiklenmesini sağlayacak bir onload olay işleyicisi (event handler) ekleyelim:
```js
const image = new Image();
image.src =
  "https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png";
image.onload = draw;
Şimdi sprite’ın ekranda çizileceği konumu ve göstermek istediğimiz sprite numarasını takip etmek için bazı değişkenler ekleyeceğiz.
```
```js
let spriteIndex = 0;
let posX = 0;
const spriteWidth = 300;
const spriteHeight = 150;
const totalSprites = 12;
Sprite görüntüsü, [Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API) üzerindeki dokümantasyon çalışmaları için [Rachel Nabors](https://nearestnabors.com/) tarafından oluşturulmuş ve nezaketle paylaşılmıştır. Şöyle görünür:

![Üç sütunlu bir sprite sayfası; her sütun, siyah bir kedinin farklı hızlarda sola doğru hareket ettiği bir görüntü dizisi içeriyor. Her sprite 300 piksel genişliğinde ve 150 piksel yüksekliğindedir.](https://developer.mozilla.org/shared-assets/images/examples/web-animations/cat_sprite.png)

Üç sütunu vardır. Her sütun, kedinin farklı bir hızda (yürüme, tırıs ve dörtnala) hareket ettiğini temsil eden bir dizidir. Her dizi 12 veya 13 sprite içerir — her biri 300 piksel genişliğinde ve 150 piksel yüksekliğindedir. En soldaki, 12 sprite içeren yürüme dizisini kullanacağız. Her sprite'ı temiz bir şekilde göstermek için, yukarıda Firefox logosunda yaptığımız gibi, sprite sayfasından tek bir sprite görüntüsünü kesip yalnızca o kısmı göstermek üzere `drawImage()` kullanmamız gerekecek. Dilimin X ve Y koordinatları sırasıyla `spriteWidth` ve `spriteHeight`'in bir katı olmalıdır; en soldaki diziyi kullandığımız için X koordinatı her zaman 0'dır. Dilim boyutu her zaman `spriteWidth` çarpı `spriteHeight` olacaktır.
7. Şimdi kodun en altına, biraz kodla doldurulmaya hazır boş bir draw() fonksiyonu ekleyelim:
```js
function draw() {}
Bu bölümdeki kodun geri kalanı draw() içine girer. Önce, her kareyi çizmeye hazırlanmak için canvas’ı temizleyen aşağıdaki satırı ekleyin. Başlangıç konumunu daha önce width/2, height/2 olarak belirlediğimiz için dikdörtgenin sol üst köşesini -(width / 2), -(height / 2) olarak belirtmemiz gerektiğine dikkat edin.
```
```js
ctx.fillRect(-(width / 2), -(height / 2), width, height);
Sonra, görüntümüzü drawImage kullanarak — 9 parametreli sürümle — çizeceğiz. Aşağıdakini ekleyin:
```js
ctx.drawImage(
  image,
  0,
  spriteIndex * spriteHeight,
  spriteWidth,
  spriteHeight,
  0 + posX,
  -spriteHeight / 2,
  spriteWidth,
  spriteHeight,
);
Gördüğünüz gibi:
Gömülecek görüntü olarak image’i belirtiyoruz.
ve 3. parametreler, kaynak görüntüden kesilecek dilimin sol üst köşesini belirtir; X değeri 0'dır (en soldaki sütun için) ve Y değeri spriteHeight’in katları arasında döner. Diğer sütunları seçmek için X değerini spriteWidth veya 2 * spriteWidth ile değiştirebilirsiniz.
ve 5. parametreler, kesilecek dilimin boyutunu belirtir — spriteWidth ve spriteHeight.
ve 7. parametreler, dilimin canvas üzerinde çizileceği kutunun sol üst köşesini belirtir — X konumu 0 + posX’tir, yani posX değerini değiştirerek çizim konumunu değiştirebiliriz. Y konumu -spriteHeight / 2’dir, bu da görüntünün canvas üzerinde dikey olarak ortalanacağı anlamına gelir.
ve 9. parametreler, görüntünün canvas üzerindeki boyutunu belirtir. Yalnızca orijinal boyutunu korumak istiyoruz, bu yüzden genişlik ve yükseklik olarak spriteWidth ve spriteHeight’i belirtiyoruz.
Şimdi her çizimden sonra spriteIndex değerini değiştireceğiz — yani bazılarından sonra. Aşağıdaki bloğu draw() fonksiyonunun en altına ekleyin:
```
```js
if (posX % 11 === 0) {
  if (spriteIndex === totalSprites - 1) {
    spriteIndex = 0;
  } else {
    spriteIndex++;
  }
}
Tüm bloğu `if (posX % 11 === 0) { }` içine alıyoruz. `posX` değerinin 11'e kalansız bölünüp bölünemediğini kontrol etmek için modülo (`%`) işlecini (aynı zamanda [kalan işleci](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder) olarak da bilinir) kullanıyoruz. Bölünebiliyorsa, `spriteIndex`'i artırarak bir sonraki sprite'a geçiyoruz (sonuncusu bittikten sonra 0'a dönerek). Bu, etkin olarak sprite'ı yalnızca her 11. karede, yani yaklaşık saniyede 6 karede bir güncellediğimiz anlamına gelir (`requestAnimationFrame()` mümkünse bizi saniyede 60 kareye kadar çağırır). Kare hızını kasıtlı olarak yavaşlatıyoruz çünkü çalışmak için yalnızca 12 sprite'ımız var ve saniyenin 60'ta birinde bir tane gösterirsek nesnemiz çok hızlı hareket ederdi!

Dış bloğun içinde, `spriteIndex` değerinin sonuncuda olup olmadığını kontrol etmek için bir [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) ifadesi kullanıyoruz. Zaten son sprite'ı gösteriyorsak `spriteIndex`'i tekrar 0'a sıfırlıyoruz; değilse yalnızca 1 artırıyoruz.
11. Sonra her karede posX değerini nasıl değiştireceğimizi bulmamız gerekiyor — aşağıdaki kod bloğunu son bloğunuzun hemen altına ekleyin.
```js
if (posX < -width / 2 - spriteWidth) {
  const newStartPos = width / 2;
  posX = Math.ceil(newStartPos);
} else {
  posX -= 2;
}
`posX` değerinin `-width/2 - spriteWidth`'ten küçük olup olmadığını görmek için başka bir `if...else` ifadesi kullanıyoruz; bu, kedimizin ekranın sol kenarından dışarı yürüdüğü anlamına gelir. Öyleyse, kediyi ekranın sağ tarafının hemen sağına yerleştirecek bir konum hesaplıyoruz.

Kedimiz henüz ekranın kenarından yürüyüp çıkmadıysa, `posX`'i 2 azaltıyoruz. Bu, onu bir sonraki çizişimizde biraz daha sola hareket ettirecektir.
12. Son olarak, draw() fonksiyonunun en altında requestAnimationFrame() çağırarak animasyonu döngüye sokmamız gerekiyor:
```
```js
window.requestAnimationFrame(draw);
İşte bu kadar! Son örnek şöyle görünmelidir:
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Örneği MDN Playground’da açmak ve kaynak kodunu düzenlemek için Play düğmesine basabilirsiniz.
Basit bir çizim uygulaması
Son bir animasyon örneği olarak, animasyon döngüsünün kullanıcı girdisiyle (bu durumda fare hareketi gibi) nasıl birleştirilebileceğini göstermek için çok basit bir çizim uygulaması göstermek istiyoruz. Bunu adım adım sizinle oluşturmayacağız; yalnızca kodun en ilginç kısımlarını inceleyeceğiz.
Örneği aşağıda canlı olarak deneyebilirsiniz; ayrıca kaynak kodunu düzenleyebileceğiniz MDN Playground’da açmak için Play düğmesine tıklayabilirsiniz:
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
En ilginç kısımlara bakalım. Öncelikle, farenin X ve Y koordinatlarını ve tıklanıp tıklanmadığını üç değişkenle takip ediyoruz: curX, curY ve pressed. Fare hareket ettiğinde, onmousemove olay işleyicisi olarak ayarlanmış, geçerli X ve Y değerlerini yakalayan bir fonksiyon tetikliyoruz. Ayrıca fare düğmesine basıldığında pressed değerini true olarak, bırakıldığında tekrar false olarak değiştirmek için onmousedown ve onmouseup olay işleyicilerini kullanıyoruz.
```js
let curX;
let curY;
let pressed = false;

// fare imleci koordinatlarını güncelle
document.addEventListener("mousemove", (e) => {
  curX = e.pageX;
  curY = e.pageY;
});

canvas.addEventListener("mousedown", () => (pressed = true));

canvas.addEventListener("mouseup", () => (pressed = false));
“Clear canvas” düğmesine basıldığında, tüm canvas’ı daha önce gördüğümüz şekilde tekrar siyaha temizleyen basit bir fonksiyon çalıştırıyoruz:
```
```js
clearBtn.addEventListener("click", () => {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, width, height);
});
Çizim döngüsü bu sefer oldukça basit — pressed true ise, dolgu stili renk seçicideki değere ve yarıçapı aralık girdisinde ayarlanan değere eşit olan bir daire çiziyoruz. Daireyi ölçtüğümüz yerin 85 piksel yukarısına çizmemiz gerekiyor, çünkü dikey ölçüm görünüm alanının üstünden alınır, ancak biz daireyi 85 piksel yüksekliğindeki araç çubuğunun altından başlayan canvas’ın üstüne göre çiziyoruz. Y koordinatı olarak yalnızca curY ile çizseydik, fare konumundan 85 piksel daha aşağıda görünürdü.
```js
function draw() {
  if (pressed) {
    ctx.fillStyle = colorPicker.value;
    ctx.beginPath();
    ctx.arc(
      curX,
      curY - 85,
      sizePicker.value,
      degToRad(0),
      degToRad(360),
      false,
    );
    ctx.fill();
  }

  requestAnimationFrame(draw);
}

draw();
Tüm <input> türleri iyi desteklenir. Bir tarayıcı bir girdi türünü desteklemiyorsa, düz metin alanına geri döner.
WebGL
Şimdi 2D’yi geride bırakıp 3D canvas’a hızlıca göz atma zamanı. 3D canvas içeriği, her ikisi de <canvas> öğeleri üzerine çizim yapsa da 2D canvas API’sinden tamamen ayrı bir API olan WebGL API ile belirtilir.
WebGL, OpenGL (Open Graphics Library) temellidir ve bilgisayarın GPU’su ile doğrudan iletişim kurmanıza olanak tanır. Bu nedenle ham WebGL yazmak, normal JavaScript’ten çok C++ gibi düşük seviyeli dillere yakındır; oldukça karmaşıktır ama inanılmaz derecede güçlüdür.
Bir kütüphane kullanma
Karmaşıklığı nedeniyle çoğu kişi 3D grafik kodunu Three.js, PlayCanvas veya Babylon.js gibi üçüncü taraf bir JavaScript kütüphanesi kullanarak yazar. Bunların çoğu benzer şekilde çalışır; ilkel ve özel şekiller oluşturma, görüntüleme kameralarını ve aydınlatmayı konumlandırma, yüzeyleri dokularla kaplama ve daha fazlası için işlevsellik sağlar. WebGL’i sizin yerinize halleder ve daha yüksek bir seviyede çalışmanıza izin verir.
Evet, bunlardan birini kullanmak yeni bir API (bu durumda üçüncü taraf bir API) öğrenmek anlamına gelir, ancak bunlar ham WebGL kodlamaktan çok daha basittir.
Dönen bir küp
Bir WebGL kütüphanesiyle bir şeyin nasıl oluşturulacağına dair bir örneğe bakalım. En popüler olanlardan biri olduğu için Three.js’i seçeceğiz. Bu öğreticide 3D dönen bir küp oluşturacağız.
Başlamak için yerel sabit sürücünüzde webgl-cube adında yeni bir klasör oluşturun.
İçinde index.html adında yeni bir dosya oluşturun ve ona aşağıdaki içeriği ekleyin:
```
```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />

    <title>Three.js basic cube example</title>

    <script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
    <script src="script.js" defer></script>
    <link href="style.css" rel="stylesheet" />
  </head>

    <body></body>
</html>
Sonra, yine aynı klasörde script.js adında yeni bir dosya oluşturun. Şimdilik boş bırakın.
Şimdi yine aynı klasörde style.css adında yeni bir dosya oluşturun ve ona aşağıdaki içeriği ekleyin:
```css
html,
body {
  margin: 0;
}

    body {
  overflow: hidden;
}
Sayfamıza three.js’i ekledik (HTML’imizdeki ilk <script> öğesi bunu yapıyor), şimdi script.js içine onu kullanan JavaScript yazmaya başlayabiliriz. Yeni bir sahne (scene) oluşturarak başlayalım — script.js dosyanıza aşağıdakini ekleyin:
```
```js
const scene = new THREE.Scene();
[`Scene()`](https://threejs.org/docs/index.html#api/en/scenes/Scene) yapıcısı, göstermeye çalıştığımız tüm 3D dünyayı temsil eden yeni bir sahne oluşturur.
6. Sonra, sahneyi görebilmemiz için bir kameraya ihtiyacımız var. 3D görüntü terimleriyle kamera, dünyadaki bir izleyicinin konumunu temsil eder. Bir kamera oluşturmak için sıradaki satırları ekleyin:
```js
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5;
[`PerspectiveCamera()`](https://threejs.org/docs/index.html#api/en/cameras/PerspectiveCamera) yapıcısı dört argüman alır:
Görüş alanı (field of view): Kameranın önündeki ekranda görünür olması gereken alanın ne kadar geniş olduğu, derece cinsinden.
En-boy oranı (aspect ratio): Genellikle bu, sahnenin genişliğinin sahnenin yüksekliğine bölünmesiyle elde edilen orandır. Başka bir değer kullanmak sahneyi bozar (bu istediğiniz şey olabilir, ancak genellikle değildir).
Yakın düzlem (near plane): Nesnelerin ekrana işlenmeyi durdurmadan önce kameraya ne kadar yakın olabileceği. Parmak ucunuzu gözlerinizin arasındaki boşluğa giderek yaklaştırdığınızda, bir noktada onu artık göremediğinizi düşünün.
Uzak düzlem (far plane): Nesnelerin artık işlenmemesi için kameradan ne kadar uzakta olduğu. Ayrıca kameranın konumunu Z ekseni boyunca 5 uzaklık birimi dışarıda olacak şekilde ayarlıyoruz; bu, CSS’te olduğu gibi, ekrandan size, yani izleyiciye doğrudur.
Üçüncü hayati bileşen bir işleyicidir (renderer). Bu, belirli bir kameradan görüldüğü şekliyle belirli bir sahneyi işleyen bir nesnedir. Şimdilik WebGLRenderer() yapıcısını kullanarak bir tane oluşturacağız, ancak daha sonraya kadar kullanmayacağız. Sıradaki satırları ekleyin:
```
```js
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
İlk satır yeni bir işleyici oluşturur, ikinci satır işleyicinin kameranın görüntüsünü çizeceği boyutu ayarlar ve üçüncü satır işleyici tarafından oluşturulan [`<canvas>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/canvas) öğesini belgenin [`<body>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/body)'sine ekler. Artık işleyicinin çizdiği her şey pencerenizde görüntülenecek.
8. Sonra, canvas üzerinde göstereceğimiz küpü oluşturmak istiyoruz. JavaScript’inizin en altına aşağıdaki kod parçasını ekleyin:
```js
let cube;

    const loader = new THREE.TextureLoader();

    loader.load(
  "https://mdn.github.io/shared-assets/images/examples/learn/metal003.png",
  (texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);

    const geometry = new THREE.BoxGeometry(2.4, 2.4, 2.4);
    const material = new THREE.MeshLambertMaterial({ map: texture });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    draw();
  },
);
Burada kavranması gereken biraz daha fazla şey var, o yüzden aşamalar halinde inceleyelim:
Önce, küpümüze kodun her yerinden erişebilmek için global bir cube değişkeni oluşturuyoruz.
Sonra yeni bir TextureLoader nesnesi oluşturuyor, ardından onun üzerinde load() çağırıyoruz. load() bu durumda iki parametre alır (daha fazlasını alabilse de): yüklemek istediğimiz doku (bir PNG) ve doku yüklendiğinde çalışacak bir fonksiyon.
Bu fonksiyonun içinde, görüntünün küpün tüm yüzlerine 2 x 2 tekrarla sarılmasını istediğimizi belirtmek için texture nesnesinin özelliklerini kullanıyoruz. Sonra yeni bir BoxGeometry nesnesi ve yeni bir MeshLambertMaterial nesnesi oluşturuyor ve küpümüzü yaratmak için bunları bir Mesh içinde bir araya getiriyoruz. Bir nesne genellikle bir geometriye (hangi şekilde olduğu) ve bir malzemeye (yüzeyinin neye benzediği) ihtiyaç duyar.
Son olarak, küpümüzü sahneye ekliyor, ardından animasyonu başlatmak için draw() fonksiyonumuzu çağırıyoruz.
draw()’u tanımlamaya geçmeden önce, işleri biraz canlandırmak için sahneye birkaç ışık ekleyeceğiz; sıradaki blokları ekleyin:
```
```js
const light = new THREE.AmbientLight("white"); // yumuşak beyaz ışık
scene.add(light);

    const spotLight = new THREE.SpotLight("white");
spotLight.position.set(100, 1000, 1000);
spotLight.castShadow = true;
scene.add(spotLight);
Bir [`AmbientLight`](https://threejs.org/docs/index.html#api/en/lights/AmbientLight) nesnesi, dışarıdayken güneş gibi tüm sahneyi biraz aydınlatan yumuşak bir ışık türüdür. Buna karşılık [`SpotLight`](https://threejs.org/docs/index.html#api/en/lights/SpotLight) nesnesi, daha çok bir el feneri (aslında bir spot ışığı) gibi yönlü bir ışık hüzmesidir.
10. Son olarak, draw() fonksiyonumuzu kodun en altına ekleyelim:
```js
function draw() {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);

    requestAnimationFrame(draw);
}
Bu oldukça sezgisel; her karede küpümüzü X ve Y eksenlerinde biraz döndürüyor, ardından sahneyi kameramızdan görüldüğü şekliyle işliyor ve son olarak bir sonraki karemizin çizilmesini planlamak için `requestAnimationFrame()` çağırıyoruz.
Bitmiş ürün şöyle görünmelidir:
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Not: GitHub deposumuzda başka bir ilginç 3D küp örneği de bulabilirsiniz — Three.js Video Cube (canlı halini de görün). Bu örnek, bir bilgisayar web kamerasından video akışı almak ve bunu bir doku olarak küpün yüzeyine yansıtmak için getUserMedia() kullanır!
Özet
Bu noktada, Canvas ve WebGL kullanarak grafik programlamanın temelleri ve bu API’lerle neler yapabileceğiniz hakkında yararlı bir fikriniz ve daha fazla bilgi için nereye başvuracağınız konusunda iyi bir fikriniz olmalı. İyi eğlenceler!
Ayrıca bakın
Burada canvas’ın yalnızca gerçek temellerini ele aldık — öğrenilecek çok daha fazla şey var! Aşağıdaki makaleler sizi daha ileriye götürecektir.
Canvas öğreticisi — 2D canvas hakkında bilmeniz gerekenleri burada ele alınandan çok daha ayrıntılı biçimde açıklayan çok detaylı bir öğretici serisi. Okunması şart.
WebGL öğreticisi — Ham WebGL programlamanın temellerini öğreten bir seri.
Three.js ile temel bir demo oluşturma — temel Three.js öğreticisi. PlayCanvas veya Babylon.js için de eşdeğer kılavuzlarımız var.
Oyun geliştirme — MDN’de web oyunları geliştirme için açılış sayfası. Burada 2D ve 3D canvas ile ilgili gerçekten yararlı öğreticiler ve teknikler mevcut — Teknikler ve Öğreticiler menü seçeneklerine bakın.
Örnekler
Violent theremin — Ses üretmek için Web Audio API’sini, buna eşlik edecek güzel bir görselleştirme üretmek için canvas’ı kullanır.
Voice change-o-matic — Web Audio API’sinden gelen gerçek zamanlı ses verilerini görselleştirmek için bir canvas kullanır.
Önceki
Genel bakış: İstemci tarafı web API’leri
Sonraki
İstemci tarafı depolama
Önceki
Genel bakış: İstemci tarafı web API’leri
Sonraki
Modern web tarayıcıları, web sitelerinin kullanıcının izniyle verileri kullanıcının bilgisayarında depolaması ve gerektiğinde bu verileri geri alması için bir dizi yol destekler. Bu, verileri uzun süreli depolama için kalıcı kılmanıza, siteleri veya belgeleri çevrimdışı kullanım için kaydetmenize, siteniz için kullanıcıya özgü ayarları saklamanıza ve daha fazlasına olanak tanır. Bu makale, bunların nasıl çalıştığının en temel noktalarını açıklar.
Ön koşullar:
HTML, CSS ve JavaScript konusunda aşinalık; özellikle JavaScript nesne temelleri ve DOM betikleme ile ağ istekleri gibi temel API kapsamı.
Öğrenme çıktıları:
İstemci tarafı depolama kavramları ve bunu mümkün kılan temel teknolojiler — Web Storage API, çerezler (cookies), Cache API ve IndexedDB API.
Temel kullanım durumları — yeniden yüklemeler arasında durumu korumak, oturum açma ve kullanıcı kişiselleştirme verilerini kalıcı kılmak ve yerel/çevrimdışı çalışma.
JavaScript tarafından denetlenen basit anahtar-değer çifti depolama için Web Storage kullanımı.
Daha karmaşık, yapılandırılmış verileri depolamak için IndexedDB kullanımı.
Çevrimdışı kullanım durumları için Cache API ve service worker kullanımı.

Bu makalede

---

<a id="makale-12"></a>

📄 **Bu bölüm şu MDN makalesinin çevirisidir:**  
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Client-side_storage

## 12. İstemci Tarafı Depolama

İstemci tarafı depolama mı?
Basit verileri depolama — web depolama
Karmaşık verileri depolama — IndexedDB
Çevrimdışı varlık depolama
Özet
Ayrıca bakın
İstemci tarafı depolama mı?
MDN öğrenme alanının başka bir yerinde statik siteler ile dinamik siteler arasındaki farktan bahsetmiştik. Başlıca modern web sitelerinin çoğu dinamiktir — verileri sunucuda bir tür veritabanı kullanarak depolar (sunucu tarafı depolama), ardından gerekli verileri almak, bunları statik sayfa şablonlarına eklemek ve ortaya çıkan HTML’yi kullanıcının tarayıcısı tarafından görüntülenmek üzere istemciye sunmak için sunucu tarafı kod çalıştırır.
İstemci tarafı depolama benzer ilkelerle çalışır, ancak farklı kullanımları vardır. Verileri istemcide (yani kullanıcının makinesinde) depolamanıza ve gerektiğinde geri almanıza olanak tanıyan JavaScript API’lerinden oluşur. Bunun birçok farklı kullanımı vardır, örneğin:
Site tercihlerini kişiselleştirme (ör. kullanıcının seçtiği özel pencere öğelerini (widget), renk düzenini veya yazı tipi boyutunu gösterme).
Önceki site etkinliğini kalıcı kılma (ör. önceki bir oturumdaki alışveriş sepetinin içeriğini saklama, kullanıcının daha önce oturum açıp açmadığını hatırlama).
Verileri ve varlıkları yerel olarak kaydederek bir sitenin daha hızlı (ve potansiyel olarak daha ucuz) indirilmesini sağlama veya ağ bağlantısı olmadan kullanılabilir hale getirme.
Web uygulamasının ürettiği belgeleri çevrimdışı kullanım için yerel olarak kaydetme
Çoğu zaman istemci tarafı ve sunucu tarafı depolama birlikte kullanılır. Örneğin, bir grup müzik dosyasını (belki bir web oyunu veya müzik çalar uygulaması tarafından kullanılan) indirebilir, bunları istemci tarafı bir veritabanında depolayabilir ve gerektiğinde çalabilirsiniz. Kullanıcının müzik dosyalarını yalnızca bir kez indirmesi gerekir — sonraki ziyaretlerde bunlar bunun yerine veritabanından alınır.
Not: İstemci tarafı depolama API’lerini kullanarak depolayabileceğiniz veri miktarında sınırlar vardır (muhtemelen hem tek tek her API için hem de toplamda); kesin sınır tarayıcıya ve muhtemelen kullanıcı ayarlarına bağlı olarak değişir. Daha fazla bilgi için Tarayıcı depolama kotaları ve çıkarma ölçütleri bölümüne bakın.
Eski usul: Çerezler
İstemci tarafı depolama kavramı uzun zamandır var. Web’in ilk günlerinden beri siteler, web sitelerindeki kullanıcı deneyimini kişiselleştirmek için bilgileri depolamakta çerezleri (cookies) kullanmıştır. Bunlar, web’de yaygın olarak kullanılan en eski istemci tarafı depolama biçimidir.
Günümüzde istemci tarafı verileri depolamak için daha kolay mekanizmalar mevcuttur; bu nedenle bu makalede size çerezlerin nasıl kullanılacağını öğretmeyeceğiz. Ancak bu, çerezlerin modern web’de tamamen işe yaramaz olduğu anlamına gelmez — hâlâ kullanıcı kişiselleştirmesi ve durumuyla ilgili verileri, örneğin oturum kimliklerini ve erişim belirteçlerini (access tokens) depolamak için yaygın olarak kullanılırlar. Çerezler hakkında daha fazla bilgi için HTTP çerezlerini kullanma makalemize bakın.
Yeni usul: Web Storage ve IndexedDB
Yukarıda bahsettiğimiz “daha kolay” özellikler şunlardır:
Web Storage API, bir ad ve buna karşılık gelen bir değerden oluşan daha küçük veri öğelerini depolamak ve almak için bir mekanizma sağlar. Bu, yalnızca kullanıcının adı, oturum açıp açmadığı, ekranın arka planı için hangi rengin kullanılacağı gibi bazı basit verileri depolamanız gerektiğinde yararlıdır.
IndexedDB API, tarayıcıya karmaşık verileri depolamak için eksiksiz bir veritabanı sistemi sağlar. Bu, müşteri kayıtlarının eksiksiz kümelerinden ses veya video dosyaları gibi karmaşık veri türlerine kadar her şey için kullanılabilir.
Bu API’ler hakkında aşağıda daha fazla bilgi edineceksiniz.
Cache API
Cache API’si, belirli isteklere verilen HTTP yanıtlarını depolamak için tasarlanmıştır ve örneğin web sitesi varlıklarını çevrimdışı depolayarak sitenin daha sonra ağ bağlantısı olmadan kullanılabilmesi gibi şeyleri yapmak için çok yararlıdır. Cache genellikle Service Worker API ile birlikte kullanılır, ancak öyle olması zorunlu değildir.
Cache ve Service Worker’ların kullanımı ileri düzey bir konudur ve bu makalede çok ayrıntılı ele almayacağız; ancak aşağıdaki Çevrimdışı varlık depolama bölümünde bir örnek göstereceğiz.
Basit verileri depolama — web depolama
Web Storage API kullanımı çok kolaydır — basit ad/değer veri çiftlerini (dizeler, sayılar vb. ile sınırlı) depolarsınız ve bu değerleri gerektiğinde geri alırsınız.
Temel sözdizimi
Size nasıl yapılacağını gösterelim:
Öncelikle GitHub’daki web depolama boş şablonumuza gidin (bunu yeni bir sekmede açın).
Tarayıcınızın geliştirici araçlarının JavaScript konsolunu açın.
Tüm web depolama verileriniz, tarayıcının içinde nesne benzeri iki yapının içinde bulunur: sessionStorage ve localStorage. Birincisi verileri tarayıcı açık olduğu sürece kalıcı kılar (tarayıcı kapatıldığında veriler kaybolur), ikincisi ise tarayıcı kapatılıp yeniden açıldıktan sonra bile verileri kalıcı kılar. Genellikle daha yararlı olduğu için bu makalede ikincisini kullanacağız. Storage.setItem() yöntemi, depolamada bir veri öğesi kaydetmenize olanak tanır — iki parametre alır: öğenin adı ve değeri. Bunu JavaScript konsolunuza yazmayı deneyin (isterseniz değeri kendi adınızla değiştirin!):
```
```js
localStorage.setItem("name", "Chris");
Storage.getItem() yöntemi bir parametre alır — geri almak istediğiniz veri öğesinin adı — ve öğenin değerini döndürür. Şimdi şu satırları JavaScript konsolunuza yazın:
```js
let myName = localStorage.getItem("name");
myName;
İkinci satırı yazdığınızda, `myName` değişkeninin artık `name` veri öğesinin değerini içerdiğini görmelisiniz.
5. Storage.removeItem() yöntemi bir parametre alır — kaldırmak istediğiniz veri öğesinin adı — ve o öğeyi web depolamadan kaldırır. Aşağıdaki satırları JavaScript konsolunuza yazın:
```
```js
localStorage.removeItem("name");
myName = localStorage.getItem("name");
myName;
Üçüncü satır artık `null` döndürmelidir — `name` öğesi artık web depolamada mevcut değildir.
Veriler kalıcıdır!
Web depolamanın temel özelliklerinden biri, verilerin sayfa yüklemeleri arasında (ve localStorage söz konusu olduğunda tarayıcı kapatıldığında bile) kalıcı olmasıdır. Bunu iş başında görelim.
Web depolama boş şablonumuzu tekrar açın, ancak bu sefer bu öğreticiyi açtığınız tarayıcıdan farklı bir tarayıcıda! Bu, işlerin üstesinden gelmeyi kolaylaştıracaktır.
Bu satırları tarayıcının JavaScript konsoluna yazın:
```js
localStorage.setItem("name", "Chris");
let myName = localStorage.getItem("name");
myName;
`name` öğesinin döndürüldüğünü görmelisiniz.
3. Şimdi tarayıcıyı kapatın ve yeniden açın.
Aşağıdaki satırları tekrar girin:
```
```js
let myName = localStorage.getItem("name");
myName;
Tarayıcı kapatılıp yeniden açılmış olsa bile değerin hâlâ kullanılabilir olduğunu görmelisiniz.
Her alan adı için ayrı depolama
Her alan adı (tarayıcıda yüklenen her ayrı web adresi) için ayrı bir veri deposu vardır. İki web sitesi yüklerseniz (örneğin google.com ve amazon.com) ve bir web sitesinde bir öğe depolamayı denerseniz, bunun diğer web sitesinde kullanılabilir olmayacağını göreceksiniz.
Bu mantıklı — web siteleri birbirlerinin verilerini görebilseydi ortaya çıkacak güvenlik sorunlarını hayal edebilirsiniz!
Daha kapsamlı bir örnek
Web depolamanın nasıl kullanılabileceği hakkında size bir fikir vermek için bu yeni edindiğimiz bilgiyi çalışan bir örnek yazarak uygulayalım. Örneğimiz bir ad girmenize olanak tanıyacak, ardından sayfa size kişiselleştirilmiş bir karşılama vermek üzere güncellenecek. Bu durum, ad web depolamada saklandığı için sayfa/tarayıcı yeniden yüklemeleri arasında da kalıcı olacak.
Örnek HTML’yi personal-greeting.html adresinde bulabilirsiniz — bu, bir üst bilgi, içerik ve alt bilgi ile adınızı girmek için bir form içeren bir web sitesi içerir.
*[Görsel: MDN orijinal makalesindeki ilgili ekran görüntüsüne bakınız.]*
Nasıl çalıştığını anlayabilmeniz için örneği adım adım oluşturalım.
Öncelikle, personal-greeting.html dosyamızın yerel bir kopyasını bilgisayarınızda yeni bir dizinde oluşturun.
Ardından, HTML’imizin <script src="index.js" defer></script> gibi bir satırla index.js adlı bir JavaScript dosyasına başvurduğuna dikkat edin. Bunu oluşturmamız ve JavaScript kodumuzu içine yazmamız gerekiyor. HTML dosyanızla aynı dizinde bir index.js dosyası oluşturun.
Bu örnekte değiştirmemiz gereken tüm HTML özelliklerine referanslar oluşturarak başlayacağız — bu referansların uygulamanın yaşam döngüsü boyunca değişmesi gerekmediği için hepsini sabit olarak oluşturacağız. JavaScript dosyanıza aşağıdaki satırları ekleyin:
```js
// gerekli sabitleri oluştur
const rememberDiv = document.querySelector(".remember");
const forgetDiv = document.querySelector(".forget");
const form = document.querySelector("form");
const nameInput = document.querySelector("#entername");
const submitBtn = document.querySelector("#submitname");
const forgetBtn = document.querySelector("#forgetname");

    const h1 = document.querySelector("h1");
const personalGreeting = document.querySelector(".personal-greeting");
Sıradaki adımda, gönder düğmesine basıldığında formun gerçekten kendi kendini göndermesini durdurmak için küçük bir olay dinleyicisi (event listener) eklememiz gerekiyor, çünkü bu istediğimiz davranış değil. Bu kod parçasını önceki kodunuzun altına ekleyin:
```
```js
// Bir düğmeye basıldığında formun gönderilmesini durdur
form.addEventListener("submit", (e) => e.preventDefault());
Şimdi, işleyici fonksiyonu “Say hello” düğmesine tıklandığında çalışacak bir olay dinleyicisi eklememiz gerekiyor. Yorumlar her bölümün ne yaptığını ayrıntılı olarak açıklıyor, ancak özünde burada kullanıcının metin giriş kutusuna girdiği adı alıp setItem() kullanarak web depolamada kaydediyor, ardından asıl web sitesi metnini güncellemeyi ele alacak nameDisplayCheck() adlı bir fonksiyon çalıştırıyoruz. Bunu kodunuzun en altına ekleyin:
```js
// 'Say hello' düğmesine tıklandığında fonksiyonu çalıştır
submitBtn.addEventListener("click", () => {
  // girilen adı web depolamada sakla
  localStorage.setItem("name", nameInput.value);
  // kişiselleştirilmiş karşılamaların görüntülenmesini ve form görünümünün güncellenmesini düzenlemek için nameDisplayCheck() çalıştır
  nameDisplayCheck();
});
Bu noktada ayrıca “Forget” düğmesine tıklandığında bir fonksiyon çalıştıracak bir olay işleyicisine (event handler) de ihtiyacımız var — bu yalnızca “Say hello” düğmesine tıklandıktan sonra görüntülenir (iki form durumu ileri geri geçiş yapar). Bu fonksiyonda removeItem() kullanarak name öğesini web depolamadan kaldırıyor, ardından görüntüyü güncellemek için yine nameDisplayCheck() çalıştırıyoruz. Bunu en alta ekleyin:
```
```js
// 'Forget' düğmesine tıklandığında fonksiyonu çalıştır
forgetBtn.addEventListener("click", () => {
  // Saklanan adı web depolamadan kaldır
  localStorage.removeItem("name");
  // genel karşılamanın yeniden görüntülenmesini ve form görünümünün güncellenmesini düzenlemek için nameDisplayCheck() çalıştır
  nameDisplayCheck();
});
Şimdi nameDisplayCheck() fonksiyonunun kendisini tanımlama zamanı. Burada, localStorage.getItem('name') ifadesini koşullu bir test olarak kullanarak name öğesinin web depolamada saklanıp saklanmadığını kontrol ediyoruz. Ad saklanmışsa bu çağrı true olarak değerlendirilir; saklanmamışsa false olarak değerlendirilir. Çağrı true olarak değerlendirilirse, kişiselleştirilmiş bir karşılama görüntülüyor, formun “forget” kısmını görüntülüyor ve formun “Say hello” kısmını gizliyoruz. Çağrı false olarak değerlendirilirse, genel bir karşılama görüntülüyor ve bunun tersini yapıyoruz. Yine, aşağıdaki kodu en alta ekleyin:
```js
// nameDisplayCheck() fonksiyonunu tanımla
function nameDisplayCheck() {
  // 'name' veri öğesinin web depolamada saklanıp saklanmadığını kontrol et
  if (localStorage.getItem("name")) {
    // Saklanmışsa, kişiselleştirilmiş karşılamayı görüntüle
    const name = localStorage.getItem("name");
    h1.textContent = `Welcome, ${name}`;
    personalGreeting.textContent = `Welcome to our website, ${name}! We hope you have fun while you are here.`;
    // formun 'remember' kısmını gizle ve 'forget' kısmını göster
    forgetDiv.style.display = "block";
    rememberDiv.style.display = "none";
  } else {
    // saklanmamışsa, genel karşılamayı görüntüle
    h1.textContent = "Welcome to our website ";
    personalGreeting.textContent =
      "Welcome to our website. We hope you have fun while you are here.";
    // formun 'forget' kısmını gizle ve 'remember' kısmını göster
    forgetDiv.style.display = "none";
    rememberDiv.style.display = "block";
  }
}
Son olarak, sayfa yüklendiğinde nameDisplayCheck() fonksiyonunu çalıştırmamız gerekiyor. Bunu yapmazsak, kişiselleştirilmiş karşılama sayfa yeniden yüklemeleri arasında kalıcı olmaz. Aşağıdakini kodunuzun en altına ekleyin:
```
```js
nameDisplayCheck();
Örneğiniz tamamlandı — aferin! Şimdi geriye kalan tek şey kodunuzu kaydetmek ve HTML sayfanızı bir tarayıcıda test etmek. Bitmiş sürümümüzün canlı çalışır halini burada görebilirsiniz.
Not: İncelemeniz için biraz daha karmaşık başka bir örnek de Web Storage API’sini kullanma sayfasındadır.
Not: Bitmiş sürümümüzün kaynağındaki <script src="index.js" defer></script> satırında, defer özniteliği <script> öğesinin içeriğinin sayfa yüklenmeyi bitirene kadar çalıştırılmayacağını belirtir.
Karmaşık verileri depolama — IndexedDB
IndexedDB API (bazen IDB olarak kısaltılır), tarayıcıda bulunan, türleri dizeler veya sayılar gibi basit değerlerle sınırlı olmayan karmaşık ilişkili verileri depolayabileceğiniz eksiksiz bir veritabanı sistemidir. Bir IndexedDB örneğinde videoları, görüntüleri ve hemen hemen başka her şeyi depolayabilirsiniz.
IndexedDB API’si bir veritabanı oluşturmanıza, ardından bu veritabanı içinde nesne depoları (object stores) oluşturmanıza olanak tanır.
 Nesne depoları ilişkisel bir veritabanındaki tablolara benzer ve her nesne deposu bir dizi nesne içerebilir.
 IndexedDB API’si hakkında daha fazla bilgi edinmek için IndexedDB kullanma sayfasına bakın.
Ancak bunun bir bedeli var: IndexedDB’nin kullanımı Web Storage API’sinden çok daha karmaşıktır. Bu bölümde yapabileceklerinin yalnızca yüzeyini kazıyacağız, ancak başlamanız için yeterli bilgiyi vereceğiz.
Not depolama örneği üzerinde çalışma
Burada size notları tarayıcınızda depolamanıza ve istediğiniz zaman görüntüleyip silmenize olanak tanıyan bir örnek göstereceğiz; bunu kendiniz oluşturmanızı sağlayacak ve ilerledikçe IDB’nin en temel kısımlarını açıklayacağız.
Uygulama şuna benzer:
*[Görsel: MDN orijinal makalesindeki ilgili ekran görüntüsüne bakınız.]*
Her notun bir başlığı ve bazı gövde metni vardır; her biri ayrı ayrı düzenlenebilir. Aşağıda inceleyeceğimiz JavaScript kodunda, neler olup bittiğini anlamanıza yardımcı olacak ayrıntılı yorumlar bulunmaktadır.
Başlarken
Öncelikle index.html, style.css ve index-start.js dosyalarımızın yerel kopyalarını yerel makinenizde yeni bir dizine oluşturun.
Dosyalara göz atın. HTML’in bir üst bilgi ve alt bilgi içeren, ayrıca notların görüntüleneceği bir yer ve veritabanına yeni notlar girmek için bir form içeren ana içerik alanı olan bir web sitesi tanımladığını göreceksiniz. CSS, neler olup bittiğini daha net hale getirmek için biraz stil sağlar. JavaScript dosyası, notların görüntüleneceği <ul> öğesine, başlık ve gövde <input> öğelerine, <form>’un kendisine ve <button>’a referanslar içeren beş bildirilmiş sabit içerir.
JavaScript dosyanızın adını index.js olarak değiştirin. Artık ona kod eklemeye başlamaya hazırsınız.
Veritabanı ilk kurulumu
Şimdi bir veritabanını gerçekten kurmak için öncelikle ne yapmamız gerektiğine bakalım.
Sabit bildirimlerinin altına aşağıdaki satırları ekleyin:
```js
// Açık veritabanını saklayacağımız bir db nesne örneği oluştur
let db;
Burada `db` adlı bir değişken bildiriyoruz — bu, daha sonra veritabanımızı temsil eden bir nesneyi saklamak için kullanılacak. Bunu birkaç yerde kullanacağız, bu yüzden işleri kolaylaştırmak için burada global olarak bildirdik.
2. Sonra aşağıdakini ekleyin:
```
```js
// Veritabanımızı aç; zaten yoksa oluşturulur
// (aşağıdaki upgradeneeded işleyicisine bakın)
const openRequest = window.indexedDB.open("notes_db", 1);
Bu satır, `notes_db` adlı bir veritabanının `1` sürümünü açmak için bir istek oluşturur. Bu zaten yoksa, sonraki kod tarafından sizin için oluşturulur. Bu istek örüntüsünün IndexedDB boyunca çok sık kullanıldığını göreceksiniz. Veritabanı işlemleri zaman alır. Sonuçları beklerken tarayıcıyı kilitlemek istemezsiniz, bu yüzden veritabanı işlemleri [eşzamansızdır (asynchronous)](https://developer.mozilla.org/en-US/docs/Glossary/Asynchronous), yani hemen gerçekleşmek yerine gelecekte bir noktada gerçekleşirler ve bittiklerinde bilgilendirilirsiniz.

Bunu IndexedDB'de ele almak için bir istek nesnesi oluşturursunuz (istediğiniz adı verebilirsiniz — ne için olduğu açık olsun diye biz buna `openRequest` dedik). Ardından, istek tamamlandığında, başarısız olduğunda vb. kod çalıştırmak için olay işleyicileri kullanırsınız; bunları aşağıda kullanımda göreceksiniz.

  **Not:** Sürüm numarası önemlidir. Veritabanınızı yükseltmek istiyorsanız (örneğin tablo yapısını değiştirerek), kodunuzu artırılmış bir sürüm numarasıyla, `upgradeneeded` işleyicisinin içinde belirtilen farklı bir şemayla (aşağıya bakın) vb. yeniden çalıştırmanız gerekir. Bu öğreticide veritabanlarını yükseltmeyi ele almayacağız.
3. Şimdi aşağıdaki olay işleyicilerini önceki eklemenizin hemen altına ekleyin:
```js
// error işleyicisi, veritabanının başarıyla açılmadığını belirtir
openRequest.addEventListener("error", () =>
  console.error("Database failed to open"),
);

    // success işleyicisi, veritabanının başarıyla açıldığını belirtir
openRequest.addEventListener("success", () => {
  console.log("Database opened successfully");

    // Açılan veritabanı nesnesini db değişkeninde sakla. Bu aşağıda çok kullanılır
  db = openRequest.result;

    // IDB'de zaten bulunan notları görüntülemek için displayData() fonksiyonunu çalıştır
  displayData();
});
[`error`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/error_event) olay işleyicisi, sistem isteğin başarısız olduğunu bildirirse çalışır. Bu, bu soruna yanıt vermenize olanak tanır. Örneğimizde yalnızca JavaScript konsoluna bir ileti yazdırıyoruz.

[`success`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/success_event) olay işleyicisi, istek başarıyla döndürülürse, yani veritabanı başarıyla açılırsa çalışır. Bu durumda, açılan veritabanını temsil eden bir nesne [`openRequest.result`](https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/result) özelliğinde kullanılabilir hale gelir ve veritabanını değiştirmemize olanak tanır. Bunu, daha sonra kullanmak üzere daha önce oluşturduğumuz `db` değişkeninde saklıyoruz. Ayrıca veritabanındaki verileri [`<ul>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ul) içinde görüntüleyen `displayData()` adlı bir fonksiyon çalıştırıyoruz. Veritabanında zaten bulunan notların sayfa yüklenir yüklenmez görüntülenmesi için bunu şimdi çalıştırıyoruz. `displayData()`'nın daha sonra tanımlandığını göreceksiniz.
4. Bu bölüm için son olarak, veritabanını kurmak için muhtemelen en önemli olay işleyicisini ekleyeceğiz: upgradeneeded. Bu işleyici, veritabanı henüz kurulmamışsa veya veritabanı mevcut saklanan veritabanından daha büyük bir sürüm numarasıyla açılırsa (bir yükseltme gerçekleştirilirken) çalışır. Aşağıdaki kodu önceki işleyicinizin altına ekleyin:
```
```js
// Henüz yapılmadıysa veritabanı tablolarını kur
openRequest.addEventListener("upgradeneeded", (e) => {
  // Açılan veritabanına bir referans al
  db = e.target.result;

    // Notları ve otomatik artan bir anahtarı saklamak için veritabanımızda bir objectStore oluştur
  // Bir objectStore, ilişkisel bir veritabanındaki 'tablo'ya benzer
  const objectStore = db.createObjectStore("notes_os", {
    keyPath: "id",
    autoIncrement: true,
  });

    // objectStore'un hangi veri öğelerini içereceğini tanımla
  objectStore.createIndex("title", "title", { unique: false });
  objectStore.createIndex("body", "body", { unique: false });

    console.log("Database setup complete");
});
Burası, veritabanımızın şemasını (yapısını), yani içerdiği sütun (veya alan) kümesini tanımladığımız yerdir. Burada önce `request` nesnesi olan olayın hedefinin `result` özelliğinden (`e.target.result`) mevcut veritabanına bir referans alıyoruz. Bu, `success` olay işleyicisinin içindeki `db = openRequest.result;` satırına eşdeğerdir, ancak bunu burada ayrıca yapmamız gerekir, çünkü `upgradeneeded` olay işleyicisi (gerekirse) `success` olay işleyicisinden önce çalışır; bu da bunu yapmasaydık `db` değerinin kullanılabilir olmayacağı anlamına gelir.

Ardından açılan veritabanımızın içinde `notes_os` adında yeni bir nesne deposu oluşturmak için [`IDBDatabase.createObjectStore()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/createObjectStore) kullanıyoruz. Bu, geleneksel bir veritabanı sistemindeki tek bir tabloya eşdeğerdir. Ona notes adını verdik ve ayrıca `id` adında `autoIncrement` bir anahtar alanı belirttik — her yeni kayıtta buna otomatik olarak artırılmış bir değer verilecek — geliştiricinin bunu açıkça ayarlaması gerekmez. Anahtar olduğu için `id` alanı, bir kaydı silerken veya görüntülerken olduğu gibi kayıtları benzersiz biçimde tanımlamak için kullanılacaktır.

Ayrıca [`IDBObjectStore.createIndex()`](https://developer.mozilla.org/en-US/docs/Web/API/IDBObjectStore/createIndex) yöntemini kullanarak diğer iki dizini (alanı) oluşturuyoruz: `title` (her notun başlığını içerecek) ve `body` (notun gövde metnini içerecek).
Dolayısıyla bu veritabanı şeması kurulduğunda, veritabanına kayıt eklemeye başladığımızda her biri şu satırlarda bir nesne olarak temsil edilecek:
```json
{
  "title": "Buy milk",
  "body": "Need both cows milk and soy.",
  "id": 8
}
Veritabanına veri ekleme
Şimdi veritabanına nasıl kayıt ekleyebileceğimize bakalım. Bu, sayfamızdaki form kullanılarak yapılacak.
Önceki olay işleyicinizin altına, form gönderildiğinde (gönder <button>’ına basılarak başarılı bir form gönderimi sağlandığında) addData() adlı bir fonksiyon çalıştıran bir submit olay işleyicisi kuran aşağıdaki satırı ekleyin:
```
```js
// Form gönderildiğinde addData() fonksiyonunun çalışması için bir submit olay işleyicisi oluştur
form.addEventListener("submit", addData);
Şimdi addData() fonksiyonunu tanımlayalım. Bunu önceki satırınızın altına ekleyin:
```js
// addData() fonksiyonunu tanımla
function addData(e) {
  // varsayılanı engelle - formun geleneksel şekilde gönderilmesini istemiyoruz
  e.preventDefault();

  // form alanlarına girilen değerleri al ve veritabanına eklenmeye hazır bir nesnede sakla
  const newItem = { title: titleInput.value, body: bodyInput.value };

  // veriyi eklemeye hazır, okuma/yazma yapan bir veritabanı işlemi (transaction) aç
  const transaction = db.transaction(["notes_os"], "readwrite");

  // veritabanına zaten eklenmiş bir nesne deposunu çağır
  const objectStore = transaction.objectStore("notes_os");

  // newItem nesnemizi nesne deposuna eklemek için bir istek yap
  const addRequest = objectStore.add(newItem);

  addRequest.addEventListener("success", () => {
    // Bir sonraki girişi eklemeye hazır olmak için formu temizle
    titleInput.value = "";
    bodyInput.value = "";
  });

  // Her şey bittiğinde, işlemin tamamlandığını bildir
  transaction.addEventListener("complete", () => {
    console.log("Transaction completed: database modification finished.");

    // displayData()'yı tekrar çalıştırarak yeni eklenen öğeyi göstermek için veri görüntüsünü güncelle
    displayData();
  });

  transaction.addEventListener("error", () =>
    console.log("Transaction not opened due to error"),
  );
}
Bu oldukça karmaşık; parçalarına ayırırsak:
Formun geleneksel biçimde gönderilmesini durdurmak için olay nesnesi üzerinde Event.preventDefault() çalıştırıyoruz (bu, sayfanın yenilenmesine neden olur ve deneyimi bozardı).
Veritabanına girilecek bir kaydı temsil eden, form girdilerindeki değerlerle doldurulmuş bir nesne oluşturuyoruz. Daha önce açıkladığımız gibi bu otomatik olarak doldurulduğu için açıkça bir id değeri eklememiz gerekmediğini unutmayın.
IDBDatabase.transaction() yöntemini kullanarak notes_os nesne deposuna karşı bir readwrite işlemi açıyoruz. Bu işlem nesnesi, nesne deposuna erişmemize ve onunla bir şey yapmamıza, örneğin yeni bir kayıt eklememize olanak tanır.
IDBTransaction.objectStore() yöntemini kullanarak nesne deposuna erişiyor ve sonucu objectStore değişkeninde saklıyoruz.
IDBObjectStore.add() kullanarak yeni kaydı veritabanına ekliyoruz. Bu, daha önce gördüğümüz şekilde bir istek nesnesi oluşturur.
Yaşam döngüsündeki kritik noktalarda kod çalıştırmak için request ve transaction nesnelerine bir dizi olay işleyicisi ekliyoruz. İstek başarılı olduğunda, bir sonraki notu girmeye hazır olmak için form girdilerini temizliyoruz. İşlem tamamlandığında, sayfadaki notların görüntüsünü güncellemek için displayData() fonksiyonunu tekrar çalıştırıyoruz.
Verileri görüntüleme
Kodumuzda displayData()’ya zaten iki kez başvurduk, bu yüzden muhtemelen onu tanımlasak iyi olur. Bunu önceki fonksiyon tanımının altında kodunuza ekleyin:
```
```js
// displayData() fonksiyonunu tanımla
function displayData() {
  // Burada görüntü her güncellendiğinde liste öğesinin içeriğini boşaltıyoruz
  // Bunu yapmazsanız, her yeni not eklendiğinde yinelenenler listelenirdi
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Nesne depomuzu aç ve ardından bir imleç (cursor) al - bu, depodaki
  // farklı veri öğeleri arasında yineleme yapar
  const objectStore = db.transaction("notes_os").objectStore("notes_os");
  objectStore.openCursor().addEventListener("success", (e) => {
    // İmlecin kendisine bir referans al
    const cursor = e.target.result;

    // Üzerinde yinelenecek başka bir veri öğesi varsa, bu kodu çalıştırmaya devam et
    if (cursor) {
      // Her veri öğesini görüntülerken içine koymak için bir liste öğesi, h3 ve p oluştur
      // HTML parçasını yapılandır ve listenin içine ekle
      const listItem = document.createElement("li");
      const h3 = document.createElement("h3");
      const para = document.createElement("p");

      listItem.appendChild(h3);
      listItem.appendChild(para);
      list.appendChild(listItem);

      // İmleçteki verileri h3 ve para içine koy
      h3.textContent = cursor.value.title;
      para.textContent = cursor.value.body;

      // Veri öğesinin kimliğini listItem üzerinde bir özniteliğin içinde sakla, böylece
      // hangi öğeye karşılık geldiğini biliriz. Bu, daha sonra öğeleri silmek istediğimizde yararlı olacak
      listItem.setAttribute("data-note-id", cursor.value.id);

      // Bir düğme oluştur ve her listItem'ın içine yerleştir
      const deleteBtn = document.createElement("button");
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = "Delete";

      // Düğmeye tıklandığında deleteItem() fonksiyonunun çalışması için
      // bir olay işleyicisi ayarla
      deleteBtn.addEventListener("click", deleteItem);

      // İmlecin bir sonraki öğesine ilerle
      cursor.continue();
    } else {
      // Yine, liste öğesi boşsa, 'No notes stored' iletisini görüntüle
      if (!list.firstChild) {
        const listItem = document.createElement("li");
        listItem.textContent = "No notes stored.";
        list.appendChild(listItem);
      }
      // üzerinde yinelenecek başka imleç öğesi kalmadıysa, bunu belirt
      console.log("Notes all displayed");
    }
  });
}
Yine bunu parçalarına ayıralım:
Önce, <ul> öğesinin içeriğini boşaltıyor, ardından onu güncellenmiş içerikle dolduruyoruz. Bunu yapmasaydınız, her güncellemede eklenen, yinelenmiş içeriklerden oluşan devasa bir listeyle karşılaşırdınız.
Sonra, addData()’da yaptığımız gibi IDBDatabase.transaction() ve IDBTransaction.objectStore() kullanarak notes_os nesne deposuna bir referans alıyoruz; burada yalnızca bunları tek satırda zincirliyoruz.
Sonraki adım, bir imleç için istek açmak üzere IDBObjectStore.openCursor() yöntemini kullanmaktır — bu, bir nesne deposundaki kayıtlar üzerinde yineleme yapmak için kullanılabilen bir yapıdır. Kodu daha özlü hale getirmek için bu satırın sonuna bir success olay işleyicisi zincirliyoruz — imleç başarıyla döndürüldüğünde işleyici çalışır.
const cursor = e.target.result kullanarak imlecin kendisine (bir IDBCursor nesnesi) bir referans alıyoruz.
Sonra imlecin veri deposundan bir kayıt içerip içermediğini kontrol ediyoruz (if (cursor){ }) — içeriyorsa bir DOM parçası oluşturuyor, onu kayıttaki verilerle dolduruyor ve sayfaya (<ul> öğesinin içine) ekliyoruz. Ayrıca, tıklandığında bir sonraki bölümde inceleyeceğimiz deleteItem() fonksiyonunu çalıştırarak o notu silecek bir silme düğmesi ekliyoruz.
if bloğunun sonunda, imleci veri deposundaki bir sonraki kayda ilerletmek ve if bloğunun içeriğini tekrar çalıştırmak için IDBCursor.continue() yöntemini kullanıyoruz. Yinelenecek başka bir kayıt varsa, bu onun sayfaya eklenmesine neden olur, ardından continue() tekrar çalıştırılır ve bu böyle devam eder.
Üzerinde yinelenecek başka kayıt kalmadığında, cursor undefined döndürür ve bu nedenle if bloğu yerine else bloğu çalışır. Bu blok, <ul> içine herhangi bir not eklenip eklenmediğini kontrol eder — eklenmediyse, hiçbir not saklanmadığını belirten bir ileti ekler.
Bir notu silme
Yukarıda belirtildiği gibi, bir notun silme düğmesine basıldığında not silinir. Bu, şuna benzeyen deleteItem() fonksiyonuyla sağlanır:
```js
// deleteItem() fonksiyonunu tanımla
function deleteItem(e) {
  // silmek istediğimiz görevin adını al. IDB ile kullanmayı denemeden önce
  // bunu bir sayıya dönüştürmemiz gerekir; IDB anahtar
  // değerleri tür duyarlıdır.
  const noteId = Number(e.target.parentNode.getAttribute("data-note-id"));

  // bir veritabanı işlemi aç ve yukarıda aldığımız kimliği kullanarak bulup görevi sil
  const transaction = db.transaction(["notes_os"], "readwrite");
  const objectStore = transaction.objectStore("notes_os");
  const deleteRequest = objectStore.delete(noteId);

  // veri öğesinin silindiğini bildir
  transaction.addEventListener("complete", () => {
    // düğmenin üst öğesini sil
    // bu liste öğesidir, böylece artık görüntülenmez
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log(`Note ${noteId} deleted.`);

    // Yine, liste öğesi boşsa, 'No notes stored' iletisini görüntüle
    if (!list.firstChild) {
      const listItem = document.createElement("li");
      listItem.textContent = "No notes stored.";
      list.appendChild(listItem);
    }
  });
}
Bunun ilk kısmı biraz açıklamayı hak ediyor — silinecek kaydın kimliğini Number(e.target.parentNode.getAttribute('data-note-id')) kullanarak alıyoruz — kaydın kimliğinin, ilk görüntülendiğinde <li> üzerindeki bir data-note-id özniteliğinde saklandığını hatırlayın. Ancak öznitelik dize veri türünde olduğu ve dolayısıyla bir sayı bekleyen veritabanı tarafından tanınmayacağı için onu global yerleşik Number() nesnesinden geçirmemiz gerekir.
Sonra daha önce gördüğümüz aynı örüntüyü kullanarak nesne deposuna bir referans alıyor ve kaydı veritabanından silmek için ona kimliği geçirerek IDBObjectStore.delete() yöntemini kullanıyoruz.
Veritabanı işlemi tamamlandığında, notun <li>’sini DOM’dan siliyor ve <ul>’nin şimdi boş olup olmadığını görmek için kontrolü tekrar yapıyor, uygun şekilde bir not ekliyoruz.
İşte bu kadar! Örneğiniz artık çalışıyor olmalı.
Sorun yaşıyorsanız, canlı örneğimizle karşılaştırmaktan çekinmeyin (kaynak koduna da bakın).
IndexedDB ile karmaşık veri depolama
Yukarıda bahsettiğimiz gibi, IndexedDB yalnızca metin dizelerinden fazlasını depolamak için kullanılabilir. Video veya görüntü blob’ları gibi karmaşık nesneler dahil, istediğiniz hemen hemen her şeyi depolayabilirsiniz. Ve bunu başarmak, diğer veri türlerinden çok daha zor değildir.
Bunun nasıl yapılacağını göstermek için IndexedDB video deposu adlı başka bir örnek yazdık (canlı çalışırken de görün). Örneği ilk çalıştırdığınızda, tüm videoları ağdan indirir, bunları bir IndexedDB veritabanında depolar ve ardından videoları kullanıcı arayüzünde <video> öğelerinin içinde görüntüler. İkinci çalıştırışınızda, videoları veritabanında bulur ve görüntülemeden önce bunun yerine oradan alır — bu, sonraki yüklemeleri çok daha hızlı ve daha az bant genişliği tüketen hale getirir.
Örneğin en ilginç kısımlarını adım adım inceleyelim. Hepsine bakmayacağız — büyük bir kısmı önceki örneğe benziyor ve kod iyi yorumlanmış.
Bu örnek için, getirilecek videoların adlarını bir nesne dizisinde sakladık:
```
```js
const videos = [
  { name: "crystal" },
  { name: "elf" },
  { name: "frog" },
  { name: "monster" },
  { name: "pig" },
  { name: "rabbit" },
];
Başlangıç olarak, veritabanı başarıyla açıldığında bir init() fonksiyonu çalıştırıyoruz. Bu fonksiyon farklı video adları arasında dolaşır ve videos veritabanından her adla tanımlanan bir kaydı yüklemeyi dener. Her video veritabanında bulunursa (request.result’ın true olarak değerlendirilip değerlendirilmediğine bakılarak kontrol edilir — kayıt mevcut değilse undefined olacaktır), video dosyaları (blob olarak saklanır) ve video adı, kullanıcı arayüzüne yerleştirilmek üzere doğrudan displayVideo() fonksiyonuna iletilir. Bulunmazsa, tahmin ettiğiniz gibi videoyu ağdan getirmek için video adı fetchVideoFromNetwork() fonksiyonuna iletilir.
```js
function init() {
  // Video adları arasında tek tek dolaş
  for (const video of videos) {
    // İşlemi aç, nesne deposunu al ve her videoyu adıyla get() ile al
    const objectStore = db.transaction("videos_os").objectStore("videos_os");
    const request = objectStore.get(video.name);
    request.addEventListener("success", () => {
      // Sonuç veritabanında varsa (undefined değilse)
      if (request.result) {
        // Videoları IDB'den al ve displayVideo() kullanarak görüntüle
        console.log("taking videos from IDB");
        displayVideo(
          request.result.mp4,
          request.result.webm,
          request.result.name,
        );
      } else {
        // Videoları ağdan getir
        fetchVideoFromNetwork(video);
      }
    });
  }
}
Aşağıdaki kod parçası fetchVideoFromNetwork() içinden alınmıştır — burada videonun MP4 ve WebM sürümlerini iki ayrı fetch() isteğiyle getiriyoruz. Ardından her yanıtın gövdesini bir blob olarak çıkarmak için Response.blob() yöntemini kullanıyoruz; bu bize videoların daha sonra depolanabilecek ve görüntülenebilecek nesne temsilini verir. Burada bir sorunumuz var — bu iki istek de eşzamansızdır, ancak videoyu yalnızca her iki söz (promise) de yerine getirildiğinde görüntülemeyi veya depolamayı denemek istiyoruz. Neyse ki böyle bir sorunu ele alan yerleşik bir yöntem var — Promise.all(). Bu, bir argüman alır — yerine getirilip getirilmediği kontrol edilecek tüm tekil sözlere referanslar, bir dizi içine yerleştirilmiş olarak — ve tüm tekil sözler yerine getirildiğinde yerine getirilen bir söz döndürür. Bu sözün then() işleyicisinin içinde, videoları kullanıcı arayüzünde görüntülemek için daha önce yaptığımız gibi displayVideo() fonksiyonunu çağırıyor, ardından bu videoları veritabanının içinde depolamak için storeVideo() fonksiyonunu da çağırıyoruz.
```
```js
// fetch() fonksiyonunu kullanarak videonun MP4 ve WebM sürümlerini getir,
// ardından yanıt gövdelerini blob olarak kullanıma sun
const mp4Blob = fetch(`videos/video.name.mp4`).then((response)=>response.blob(),);constwebmBlob=fetch(`videos/{video.name}.webm`).then((response) =>
  response.blob(),
);

    // Sonraki kodu yalnızca her iki söz de yerine getirildiğinde çalıştır
Promise.all([mp4Blob, webmBlob]).then((values) => {
  // ağdan getirilen videoyu displayVideo() ile görüntüle
  displayVideo(values[0], values[1], video.name);
  // storeVideo() kullanarak IDB'de sakla
  storeVideo(values[0], values[1], video.name);
});
Önce storeVideo()’ya bakalım. Bu, önceki örnekte veritabanına veri eklemek için gördüğünüz örüntüye çok benziyor — bir readwrite işlemi açıyor ve videos_os nesne deposuna bir referans alıyoruz, veritabanına eklenecek kaydı temsil eden bir nesne oluşturuyoruz, ardından onu IDBObjectStore.add() kullanarak ekliyoruz.
```js
// storeVideo() fonksiyonunu tanımla
function storeVideo(mp4, webm, name) {
  // İşlemi aç, nesne deposunu al; IDB'ye yazabilmemiz için readwrite yap
  const objectStore = db
    .transaction(["videos_os"], "readwrite")
    .objectStore("videos_os");

    // add() kullanarak kaydı IDB'ye ekle
  const request = objectStore.add({ mp4, webm, name });

    request.addEventListener("success", () =>
    console.log("Record addition attempt finished"),
  );
  request.addEventListener("error", () => console.error(request.error));
}
Son olarak, videoyu kullanıcı arayüzüne eklemek için gereken DOM öğelerini oluşturan ve ardından bunları sayfaya ekleyen displayVideo() var. Bunun en ilginç kısımları aşağıda gösterilenlerdir — video blob’larımızı bir <video> öğesinde gerçekten görüntülemek için, URL.createObjectURL() yöntemini kullanarak nesne URL’leri (bellekte saklanan video blob’larına işaret eden dahili URL’ler) oluşturmamız gerekir. Bu yapıldıktan sonra, nesne URL’lerini <source> öğemizin src özniteliklerinin değerleri olarak ayarlayabiliriz ve sorunsuz çalışır.
```
```js
// displayVideo() fonksiyonunu tanımla
function displayVideo(mp4Blob, webmBlob, title) {
  // Blob'lardan nesne URL'leri oluştur
  const mp4URL = URL.createObjectURL(mp4Blob);
  const webmURL = URL.createObjectURL(webmBlob);

    // Videoyu sayfaya gömmek için DOM öğeleri oluştur
  const article = document.createElement("article");
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const video = document.createElement("video");
  video.controls = true;
  const source1 = document.createElement("source");
  source1.src = mp4URL;
  source1.type = "video/mp4";
  const source2 = document.createElement("source");
  source2.src = webmURL;
  source2.type = "video/webm";

    // DOM öğelerini sayfaya göm
  section.appendChild(article);
  article.appendChild(h2);
  article.appendChild(video);
  video.appendChild(source1);
  video.appendChild(source2);
}
Çevrimdışı varlık depolama
Yukarıdaki örnek, büyük varlıkları bir IndexedDB veritabanında depolayan, bunları birden fazla kez indirme ihtiyacını ortadan kaldıran bir uygulamanın nasıl oluşturulacağını zaten gösteriyor. Bu, kullanıcı deneyiminde zaten büyük bir iyileştirme, ancak hâlâ eksik bir şey var — ana HTML, CSS ve JavaScript dosyalarının siteye her erişildiğinde hâlâ indirilmesi gerekiyor; bu da ağ bağlantısı olmadığında çalışmayacağı anlamına geliyor.
*[Görsel: MDN orijinal makalesindeki ilgili ekran görüntüsüne bakınız.]*
İşte Service worker’lar ve yakından ilişkili Cache API burada devreye girer.
Bir service worker, bir tarayıcı tarafından erişildiğinde belirli bir kökene (origin) (web sitesi veya belirli bir alan adındaki bir web sitesinin bir parçası) karşı kaydedilen bir JavaScript dosyasıdır. Kaydedildiğinde, o kökende bulunan sayfaları denetleyebilir. Bunu, yüklenmiş bir sayfa ile ağ arasında durarak ve o kökene yönelik ağ isteklerini yakalayarak yapar.
Bir isteği yakaladığında, ona istediğiniz her şeyi yapabilir (kullanım örneği fikirlerine bakın), ancak klasik örnek, ağ yanıtlarını çevrimdışı kaydetmek ve ardından bir isteğe ağdan gelen yanıtlar yerine bunları sağlamaktır. Etkin olarak, bir web sitesinin tamamen çevrimdışı çalışmasını sağlamanıza olanak tanır.
Cache API, biraz farklı bir başka istemci tarafı depolama mekanizmasıdır — HTTP yanıtlarını kaydetmek için tasarlanmıştır ve bu nedenle service worker’larla çok iyi çalışır.
Bir service worker örneği
Bunun neye benzeyebileceği hakkında size biraz fikir vermek için bir örneğe bakalım. Önceki bölümde gördüğümüz video deposu örneğinin başka bir sürümünü oluşturduk — bu, tıpatıp aynı çalışır, ancak ek olarak HTML, CSS ve JavaScript’i bir service worker aracılığıyla Cache API’sinde de kaydeder; bu da örneğin çevrimdışı çalışmasına olanak tanır!
Service worker’lı IndexedDB video deposunun canlı çalışır halini görün ve ayrıca kaynak koduna bakın.
Service worker’ı kaydetme
Dikkat edilmesi gereken ilk şey, ana JavaScript dosyasına fazladan bir kod parçasının yerleştirilmiş olmasıdır (index.js dosyasına bakın). Önce, Navigator nesnesinde serviceWorker üyesinin kullanılabilir olup olmadığını görmek için bir özellik algılama testi yapıyoruz. Bu true döndürürse, en azından service worker’ların temellerinin desteklendiğini biliriz. Bunun içinde, sw.js dosyasında bulunan bir service worker’ı bulunduğu kökene karşı kaydetmek için ServiceWorkerContainer.register() yöntemini kullanıyoruz; böylece kendisiyle aynı dizindeki sayfaları veya alt dizinleri denetleyebilir. Sözü yerine getirildiğinde, service worker kaydedilmiş sayılır.
```js
// Sitenin çevrimdışı çalışmasını sağlamayı denetlemek için service worker'ı kaydet
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(
      "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js",
    )
    .then(() => console.log("Service Worker Registered"));
}
Not: sw.js dosyası için verilen yol, kodu içeren JavaScript dosyasına değil, site köküne göredir. Service worker https://mdn.github.io/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js adresindedir. Kök https://mdn.github.io’dur ve bu nedenle verilen yolun /learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/sw.js olması gerekir. Bu örneği kendi sunucunuzda barındırmak isterseniz, bunu buna göre değiştirmeniz gerekir. Bu oldukça kafa karıştırıcıdır, ancak güvenlik nedenleriyle bu şekilde çalışması gerekir.
Service worker’ı yükleme
Service worker’ın denetimi altındaki herhangi bir sayfaya bir sonraki erişildiğinde (örneğin örnek yeniden yüklendiğinde), service worker o sayfaya karşı yüklenir; bu, onu denetlemeye başlayacağı anlamına gelir. Bu gerçekleştiğinde, service worker’a karşı bir install olayı tetiklenir; service worker’ın içine yüklemeye yanıt verecek kod yazabilirsiniz.
sw.js dosyasında (service worker) bir örneğe bakalım. install dinleyicisinin self’e karşı kaydedildiğini göreceksiniz. Bu self anahtar sözcüğü, service worker dosyasının içinden service worker’ın global kapsamına başvurmanın bir yoludur.
install işleyicisinin içinde, olay nesnesinde bulunan ExtendableEvent.waitUntil() yöntemini kullanarak, tarayıcının içindeki söz başarıyla yerine getirilene kadar service worker’ın yüklemesini tamamlamaması gerektiğini bildiriyoruz.
Cache API’sini iş başında gördüğümüz yer burasıdır. Yanıtların depolanabileceği yeni bir önbellek nesnesi açmak için (bir IndexedDB nesne deposuna benzer) CacheStorage.open() yöntemini kullanıyoruz. Bu söz, video-store önbelleğini temsil eden bir Cache nesnesiyle yerine getirilir. Ardından bir dizi varlığı getirmek ve yanıtlarını önbelleğe eklemek için Cache.addAll() yöntemini kullanıyoruz.
```
```js
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("video-store")
      .then((cache) =>
        cache.addAll([
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.html",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/index.js",
          "/learning-area/javascript/apis/client-side-storage/cache-sw/video-store-offline/style.css",
        ]),
      ),
  );
});
Şimdilik bu kadar, yükleme tamamlandı.
Sonraki isteklere yanıt verme
Service worker HTML sayfamıza karşı kaydedilip yüklendiğinde ve ilgili tüm varlıklar önbelleğimize eklendiğinde, neredeyse hazırız. Yapılacak yalnızca bir şey daha var: sonraki ağ isteklerine yanıt verecek kod yazmak.
sw.js içindeki ikinci kod parçasının yaptığı budur. Service worker global kapsamına, fetch olayı tetiklendiğinde işleyici fonksiyonu çalıştıran başka bir dinleyici ekliyoruz. Bu, tarayıcı service worker’ın kaydedildiği dizindeki bir varlık için istekte bulunduğunda gerçekleşir.
İşleyicinin içinde, önce istenen varlığın URL’sini günlüğe kaydediyoruz. Ardından FetchEvent.respondWith() yöntemini kullanarak isteğe özel bir yanıt sağlıyoruz.
Bu bloğun içinde, herhangi bir önbellekte eşleşen bir istek (yani URL ile eşleşen) bulunup bulunamayacağını kontrol etmek için CacheStorage.match() kullanıyoruz. Bu söz, eşleşme bulunursa eşleşen yanıtla, bulunmazsa undefined ile yerine getirilir.
Eşleşme bulunursa, onu özel yanıt olarak döndürüyoruz. Bulunmazsa, yanıtı ağdan fetch() ile getiriyor ve bunun yerine onu döndürüyoruz.
```js
self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
Service worker’ımız için bu kadar.
 Onlarla yapabileceğiniz çok daha fazla şey var — çok daha fazla ayrıntı için service worker yemek kitabına bakın.
 Bu örneğe ilham veren Web Uygulamanıza Service Worker ve Çevrimdışı Mod Ekleme makalesi için Paul Kinlan’a çok teşekkürler.
Örneği çevrimdışı test etme
Service worker örneğimizi test etmek için, yüklendiğinden emin olmak üzere onu birkaç kez yüklemeniz gerekecek. Bu yapıldıktan sonra şunları yapabilirsiniz:
Ağ bağlantınızı çekmeyi/Wi-Fi’nizi kapatmayı deneyin.
Firefox kullanıyorsanız File > Work Offline seçeneğini seçin.
Chrome kullanıyorsanız geliştirici araçlarına gidin, ardından Application > Service Workers seçeneğini seçin ve Offline onay kutusunu işaretleyin.
Örnek sayfanızı tekrar yenilerseniz, hâlâ sorunsuz yüklendiğini görmelisiniz. Her şey çevrimdışı saklanıyor — sayfa varlıkları bir önbellekte, videolar ise bir IndexedDB veritabanında.
Özet
Şimdilik bu kadar. İstemci tarafı depolama teknolojilerine dair özetimizi yararlı bulduğunuzu umuyoruz.
Ayrıca bakın
Web storage API
IndexedDB API
Çerezler
Service worker API
Önceki
Genel bakış: İstemci tarafı web API’leri
Sonraki
Üçüncü taraf API’leri
Önceki
Genel bakış: İstemci tarafı web API’leri
Şimdiye kadar ele aldığımız API’ler tarayıcıya yerleşiktir, ancak tüm API’ler öyle değildir. Google, GitHub, YouTube, Spotify vb. birçok büyük web sitesi ve hizmet, geliştiricilerin verilerinden (ör. blogunuzda depolarınız hakkında bilgi göstermek) veya hizmetlerinden (ör. kullanıcılarınızın oturum açması için Google girişini kullanmak) yararlanmasına olanak tanıyan API’ler sunar. Bu makale, tarayıcı API’leri ile üçüncü taraf API’leri arasındaki farkı açıklar ve ikincisinin tipik kullanım örneklerini gösterir.
Ön koşullar:
HTML, CSS ve JavaScript konusunda aşinalık; özellikle JavaScript nesne temelleri ve DOM betikleme ile ağ istekleri gibi temel API kapsamı.
Öğrenme çıktıları:
Üçüncü taraf API’lerinin ardındaki kavramlar ve API anahtarları (API keys) gibi ilişkili örüntüler.
RESTful bir API kullanma.
Google’ın YouTube API’lerini kullanma.

Bu makalede
Üçüncü taraf API’leri nedir?
RESTful bir API — GitHub
YouTube örneği
Özet
Üçüncü taraf API’leri nedir?
Üçüncü taraf API’leri, üçüncü taraflarca — genellikle Spotify veya Google gibi şirketlerce — sağlanan ve işlevlerine JavaScript aracılığıyla erişmenize ve bunları sitenizde kullanmanıza olanak tanıyan API’lerdir. Bir örnek, videoları arayıp sayfalarınızda gösterebilen YouTube’un API’leridir.
Üçüncü taraf API’lerinin tarayıcı API’lerinden nasıl farklılaştığına bakalım.
Üçüncü taraf sunucularında bulunurlar
Tarayıcı API’leri tarayıcıya yerleşiktir — onlara JavaScript’ten hemen erişebilirsiniz. Örneğin, Giriş makalesinde gördüğümüz Web Audio API’sine yerel AudioContext nesnesi kullanılarak erişilir. Örneğin:
```
```js
const audioCtx = new AudioContext();
// …
const audioElement = document.querySelector("audio");
// …
const audioSource = audioCtx.createMediaElementSource(audioElement);
// vb.
Üçüncü taraf API’leri ise üçüncü taraf sunucularında bulunur. Onlara JavaScript’ten erişmek için önce API işlevselliğine bağlanmanız ve onu sayfanızda kullanılabilir hale getirmeniz gerekir.
Tüm üçüncü taraf API’leri sonuçta sunucularına HTTP kullanarak bağlanır. Ancak fetch() çağrılarını elle yapmak zahmetlidir ve uyumluluğu bozan değişikliklere açıktır; bu yüzden genellikle işlevselliği, Yazılım Geliştirme Kiti (Software Development Kit, SDK) olarak bilinen fonksiyonlara sarılmış biçimde sunarlar. SDK, HTTP yükünü (payload) oluşturur, isteği doğru uç noktaya (endpoint) gönderir, yanıtı ayrıştırır vb.; böylece mümkün olduğunca az kod yazarsınız ve yalnızca gerekli verileri sağlarsınız.
Geleneksel olarak SDK, bir <script> öğesinde harici bir betik gömülerek sağlanır; bu, kütüphaneyi global bir değişken olarak kaydeder. Daha modern API’ler genellikle bunları içe aktarabileceğiniz modüller olarak sunar; bazen npm gibi paket yöneticileri aracılığıyla dağıtılırlar.
Örneğin, Google’ın JavaScript istemci kütüphanesi, betiği yüklediğinizde global bir gapi nesnesi sunar:
```html
<script src="https://apis.google.com/js/api.js"></script>
Google Drive API’si için istemciyi başlattıktan ve kullanıcının yetkilendirmesini aldıktan sonra, bir yöntem çağrısıyla dosyaları listeleyebilirsiniz:
```
```js
async function listDriveFiles() {
  try {
    const response = await gapi.client.drive.files.list({
      pageSize: 10,
      fields: "files(id, name)",
    });

    for (const file of response.result.files) {
      console.log(`file.name({file.id})`);
    }
  } catch (error) {
    console.error("Could not list Drive files:", error);
  }
}
Kütüphane gapi.client.drive.files.list() çağrısını bir HTTP isteğine çevirir ve ayrıştırılmış yanıtı response.result aracılığıyla kullanılabilir kılar. Elbette, Google’ın Drive API JavaScript hızlı başlangıcında tanıtıldığı gibi, Google API’lerini kullanmak için çok fazla kurulum gerekir—uygulamayı izinleriyle birlikte kaydetmeniz, OAuth yapılandırmanız vb. gerekir.
Genellikle API anahtarı gerektirirler
Tarayıcı API’leri için güvenlik, ilk makalemizde tartışıldığı gibi, izin istemleriyle ele alınma eğilimindedir. Bunların amacı, kullanıcıya ziyaret ettikleri web sitelerinde neler olup bittiğini bildirmek ve birinin bir API’yi kötü niyetle kullanmasının kurbanı olma olasılıklarını azaltmaktır.
Üçüncü taraf API’lerinin biraz farklı bir izin sistemi vardır — geliştiricilere API işlevselliğine erişim izni vermek için geliştirici anahtarları kullanma eğilimindedirler; bu, kullanıcıdan çok API sağlayıcısını korumaya yöneliktir.
Anahtar zorunluluğu, API sağlayıcısının API’yi kullanan geliştiricileri eylemlerinden sorumlu tutmasını sağlar. Geliştirici bir anahtar kaydettirdiğinde, API sağlayıcısı onu tanımlayabilir ve geliştirici API ile kötü niyetli bir şey yapmaya başlarsa (insanların konumunu izlemek veya API’yi çalışmaz hale getirmek için yüklerce istekle spam yapmak gibi) harekete geçebilir. En kolay eylem, geliştiricinin API ayrıcalıklarını iptal etmektir.
YouTube API örneğinde şuna benzer bir satır bulacaksınız:
```js
gapi.client.setApiKey("YOUR-API-KEY-HERE");
Bu satır, uygulamanızda kullanılacak bir API veya geliştirici anahtarı belirtir — uygulama geliştiricisi bir anahtar almak için başvurmalı ve ardından API’nin işlevselliğine erişim izni almak için onu kodunun içine eklemelidir. Örneğimizde yalnızca bir yer tutucu (placeholder) sağladık.
Diğer API’ler anahtarı biraz farklı bir şekilde eklemenizi gerektirebilir, ancak örüntü çoğu için nispeten benzerdir.
Uyarı: API anahtarlarını parolalarınızı koruduğunuz gibi koruyun. API sağlayıcısının belgeleri açıkça izin vermedikçe, API anahtarlarını asla, kesinlikle ön yüz (frontend) kodunuza gömmeyin. Aksi takdirde, web sitenizin herhangi bir ziyaretçisi API anahtarını çıkarıp kötüye kullanabilir; bu da hassas bilgilerin sızmasına veya API’yi kullanmanız için yasaklanmanıza yol açabilir. Her zaman kendi arka ucunuzu (backend) kurun ve isteği vekil edin (proxy) —yani sunucunuz API anahtarını kullanarak üçüncü taraf API ile iletişim kurarken, kullanıcınız kendi sunucunuzla iletişim kurar. API anahtarı yalnızca sunucunuzda bulunur.
Bunları asla herkese açık GitHub depolarınıza göndermemeniz gerektiği (commit) de söylemeye gerek yok. Bir anahtarı yanlışlıkla ifşa ederseniz, hemen iptal edin ve yenisini alın.
Tüm API’ler API anahtarı gerektirmez. Bazı API’ler açık erişimli, yüksek hacimli işlevsellik sağlar; bu nedenle API erişimi vermek sunucu yüküne pek bir şey eklemez (yine de hız sınırlaması (rate limit) olabilir). Örnekler arasında GitHub REST API (sonraki bölüme bakın), makale içeriği için Wikipedia’nın API’leri ve sorular ve cevaplar için Stack Exchange API bulunur.
RESTful bir API — GitHub
Daha önce belirtildiği gibi, tüm API’ler sonuçta HTTP isteklerine dönüşür, ancak bazı API’ler SDK sağlarken bazıları isteği sizin kendiniz ele almanızı bekler.
İkinci durumda API’ler genellikle RESTful bir biçimde tasarlanır. Bu, istemcinin durumsuz (stateless) olduğu (yani her isteğin yalıtılmış olarak yapıldığı), belirli eylemleri gerçekleştirmek için belirli HTTP fiillerini (GET, POST vb.) kullanarak belirli URL’lere istek gönderdiği ve her eylem için girdiyi URL parametreleri veya istek gövdesi aracılığıyla gönderdiği bir paradigmadır.
GitHub REST API’sine bakalım. Bu API, GitHub depoları hakkında bilgi almanıza ve bunu sitenizde görüntülemenize olanak tanır.
Belgeleri bulun
Üçüncü taraf bir API kullanmak istediğinizde, API’nin özelliklerini ve bunların nasıl kullanılacağını gözden geçirebilmeniz için belgeleri bulun. Bu örnek için GitHub’ın Search repositories uç noktasını kullanacağız.
REST API’leri için belgeleri okurken şu beş soruya odaklanın:
Görev için hangi HTTP yönteminin kullanılacağı
Görev için hangi URL uç noktasına istek yapılacağı
Uç noktanın hangi yükü (payload) ve hangi biçimde (JSON gövdesi, XML gövdesi, sorgu parametreleri vb.) beklediği
Hangi durum kodlarını döndürebileceği ve her birinin ne anlama geldiği
Yanıt gövdesinde nelerin bulunduğu ve hangi biçimde olduğu
Kişisel erişim belirteci alın
Bu alıştırma için isteklerinizi doğrulamak üzere bir kişisel erişim belirteci (personal access token, PAT) oluşturun:
GitHub hesabınızda oturum açın veya henüz hesabınız yoksa bir hesap oluşturun.
GitHub’ın ayrıntılı bir kişisel erişim belirteci oluşturma yönergelerini izleyin. Ona açıklayıcı bir ad verin (örneğin “MDN 3rd party API lesson”) ve kısa bir son kullanma süresi belirleyin (bu dersten sonra kullanmaya devam etmeyi düşünmüyorsanız) ve kaynak sahibi olarak kendi hesabınızı seçin.
Repository access altında Public repositories seçeneğini seçin. Ek izinleri ayarlamadan bırakın: herkese açık depoları aramak herhangi bir izin gerektirmez.
Generate token’a tıklayın ve belirteci kopyalayın. Onu kaynak kodunuza eklemek yerine canlı örnekteki forma gireceksiniz.
Bu örnek, API anahtarlarını tipik kullanımlarından farklı şekilde kullanır: web sitesi kullanıcıdan kendi anahtarını göndermesini ister ve eylemi kullanıcı adına gerçekleştirir; bu nedenle kendi API anahtarına veya istekleri vekil edecek bir sunucuya ihtiyaç duymaz.
Uyarı: Bir kez daha, bu PAT’ı parolanız gibi görün. PAT’ınızı yalnızca güvendiğiniz web siteleriyle paylaşın ve kötüye kullanılmaması için ona gerçekten dar kapsamlı izinler ve kısa bir son kullanma tarihi verin. Örneğimiz belirteci doğrudan tarayıcınızdan GitHub’a gönderir ve tarayıcı depolamasında saklamaz veya başka sunuculara göndermez.
GitHub ayrıca herkese açık depoların kimlik doğrulamasız aranmasına, daha düşük bir arama hız sınırıyla izin verir. Örneği belirteç olmadan deneyebilmeniz için belirteç alanını isteğe bağlı yapacağız, ardından bir isteğe kimlik doğrulamanın nasıl eklendiğini görmek için belirtecinizi gireceksiniz.
Örneği kurun
Uygulama, bir arama terimi ve isteğe bağlı olarak depo oluşturulması için başlangıç ve bitiş tarihleri yazmanıza olanak tanır, ardından eşleşen depoları görüntüler.
HTML; arama formunu, bir durum iletisini, bir sonuçlar bölümünü ve sayfalama (pagination) düğmelerini tanımlar:
```
```html
<form>
  <fieldset>
    <legend>Search public repositories</legend>
    <p>
      <label for="token">Personal access token (optional):</label>
      <input id="token" type="password" autocomplete="off" />
    </p>
    <p>
      <label for="search">Search term:</label>
      <input id="search" type="search" required />
    </p>
    <p>
      <label for="start-date">Created on or after:</label>
      <input id="start-date" type="date" />
    </p>
    <p>
      <label for="end-date">Created on or before:</label>
      <input id="end-date" type="date" />
    </p>
    <button type="submit">Search</button>
  </fieldset>
</form>
<p id="status" role="status"></p>
<section aria-label="Search results"></section>
<nav aria-label="Result pages">
  <button id="previous" type="button" disabled>Previous page</button>
  <button id="next" type="button" disabled>Next page</button>
</nav>
JavaScript, HTML öğelerine referansları saklayarak ve sayfalama durumunu kurarak başlar:
```js
const baseURL = "https://api.github.com/search/repositories";
const perPage = 10;
const searchForm = document.querySelector("form");
const searchFields = document.querySelector("fieldset");
const tokenInput = document.querySelector("#token");
const searchTerm = document.querySelector("#search");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
const section = document.querySelector("section");
const status = document.querySelector("#status");
const nextBtn = document.querySelector("#next");
const previousBtn = document.querySelector("#previous");

let pageNumber = 1;
let query = "";
let hasNextPage = false;
API’yi uygulamanıza bağlayın
Form gönderildiğinde arama sorgusunu bir araya getiriyoruz:
```
```js
searchForm.addEventListener("submit", submitSearch);

function submitSearch(e) {
  e.preventDefault();

  query = `${searchTerm.value.trim()} is:public`;
  if (startDate.value !== "") {
    query = `${query} created:>=${startDate.value}`;
  }
  if (endDate.value !== "") {
    query = `${query} created:<=${endDate.value}`;
  }

  pageNumber = 1;
  hasNextPage = false;
  section.textContent = "";
  fetchResults(pageNumber);
}
submitSearch(), formun gerçekten gönderilip sayfayı yeniden yüklemesini durdurmak için preventDefault() çağırır. Ardından arama terimini GitHub’ın arama niteleyicileriyle birleştirir: is:public sonuçları herkese açık depolarla sınırlar ve created: niteleyicileri oluşturulma tarihine göre filtreler. Bu sorguyu üst düzey bir değişken olarak kaydediyoruz; böylece arama formu düzenlenmiş olsa bile sayfaları çevirirken aynı sorgu yeniden kullanılır.
API’den veri isteme
Şimdi Fetch API kullanarak bir istek yapalım. fetchResults() fonksiyonu bir sayfa arama sonucu ister:
```js
async function fetchResults(page) {
  const url = new URL(baseURL);
  url.searchParams.set("q", query);
  url.searchParams.set("page", page);
  url.searchParams.set("per_page", perPage);

  const headers = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2026-03-10",
  };
  const token = tokenInput.value.trim();
  if (token !== "") {
    headers.Authorization = `Bearer ${token}`;
  }

  searchFields.disabled = true;
  nextBtn.disabled = true;
  previousBtn.disabled = true;
  status.textContent = "Loading…";

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await response.json();
    displayResults(json);
    pageNumber = page;
    hasNextPage = pageNumber * perPage < Math.min(json.total_count, 1000);
    status.textContent = `Page ${pageNumber}.`;
    if (json.incomplete_results) {
      status.textContent +=
        " The search returned incomplete results. Try a narrower search.";
    }
  } catch (error) {
    status.textContent = `Could not fetch results: ${error.message}`;
  } finally {
    searchFields.disabled = false;
    previousBtn.disabled = pageNumber === 1;
    nextBtn.disabled = !hasNextPage;
  }
}
GitHub’ın REST API’si eylem türlerini ayırt etmek için standart HTTP fiillerini kullanır. Bu bir okuma işlemi olduğu için bir GET isteği yaparız (fetch()’in varsayılanı). GET isteğinin gövdesi yoktur, bu yüzden girdi sorgu parametreleriyle sağlanır. Bunları URL nesnesinin searchParams özelliği aracılığıyla ekleriz: arama sorgusu (q), sayfa numarası (page) ve sayfa başına sonuç sayısı (per_page).
Örneğin, tarih olmadan cats aramak şuna benzer bir URL üretir:
```
```js
https://api.github.com/search/repositories?q=cats+is%3Apublic&page=1&per_page=10
headers nesnesi yanıt biçimini ve API sürümünü belirtir. Authorization başlığı (header) dikkatinizi hak ediyor: bu, API anahtarlarını iletmenin standart yoludur. Burada Bearer şemasını kullanıyoruz.
REST API, verileri JSON biçiminde döndürür çünkü bunu Accept: "application/vnd.github+json" ile talep ettik; ardından response.json() kullanarak ayrıştırırız. JSON’un şekli GitHub’ın Search repositories uç noktası belgelerinde de bulunabilir.
Not: Bir 401 hatası alırsanız, yanlış yazılmış, süresi dolmuş veya iptal edilmiş bir belirteç olup olmadığını kontrol edin. Bir 403 veya 429 hatası bir hız sınırına işaret edebilir; bu durumda durumu yalnızca kötüleştiren Search’e tekrar tekrar tıklamak yerine yeniden denemeden önce beklemelisiniz. GitHub’ın sorun giderme kılavuzuna bakın.
Başarılı bir istekten sonra fetchResults(), pageNumber’ı günceller ve uygun düğmeleri etkinleştirir. Previous page düğmesi ilk sayfada devre dışıdır. Arama uç noktası en fazla 1.000 sonuç sunar; bu yüzden fetchResults(), Next page düğmesinin ne zaman devre dışı bırakılacağına karar vermek için bu sınırı ve total_count’u kullanır.
Verileri görüntüleme
displayResults() fonksiyonu, döndürülen depoları görüntüler:
```js
function displayResults(json) {
  section.textContent = "";

  const repositories = json.items;

  if (repositories.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No results returned.";
    section.appendChild(para);
    return;
  }
  for (const current of repositories) {
    const article = document.createElement("article");
    const heading = document.createElement("h2");
    const link = document.createElement("a");
    const para = document.createElement("p");
    const details = document.createElement("p");

    link.href = current.html_url;
    link.textContent = current.full_name;
    para.textContent = current.description ?? "No description provided.";
    details.textContent = `Stars: ${current.stargazers_count}`;

    heading.appendChild(link);
    article.appendChild(heading);
    article.appendChild(para);
    article.appendChild(details);
    section.appendChild(article);
  }
}
Kod, JSON yanıt gövdesini okur ve sonucu bir DOM ağacına dönüştürür.
Önce bölümün içeriğini temizler.
Depolar, yanıtın items dizisindedir. Boşsa, hiç sonuç döndürülmediğini belirten bir ileti görüntüleriz.
Aksi takdirde, her deponun adı, bağlantısı, açıklaması ve yıldız sayısı için öğeler oluşturur, ardından bunları DOM’a ekleriz.
Sayfalama düğmelerini bağlama
“Previous page” ve “Next page” düğmelerine tıklanmasını dinleyen ve uygun şekilde sonraki veya önceki sonuç sayfasını isteyen olay dinleyicileri sağlıyoruz:
```
```js
nextBtn.addEventListener("click", () => {
  fetchResults(pageNumber + 1);
});

previousBtn.addEventListener("click", () => {
  fetchResults(pageNumber - 1);
});
GitHub’ın sayfa numaraları 1'den başlar. Sayfa başına 10 sonuç istedik, bu yüzden 2. sayfa sonraki 10 sonucu içerir ve bu böyle devam eder. Geçerli sayfa numarası pageNumber içinde kaydedilir ve yalnızca başarılı bir istekten sonra güncellenir.
Örneği deneyin
javascript gibi bir arama terimi girin ve formu gönderin. Belirtecinizle ve belirteç olmadan aramayı, tarih eklemeyi ve sayfalar arasında gezinmeyi deneyin.
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
YouTube örneği
İnceleyip öğrenmeniz için başka bir örnek daha oluşturduk — YouTube video arama örneğimize bakın.
Not: Bağlantısı verilen örnek çalışmıyor çünkü geçerli bir API anahtarı içermiyor; dediğimiz gibi, API anahtarlarını asla yayımlanan ön yüz kodunda paylaşmamalısınız. Demoyu çalıştırmak için, aşağıda açıklandığı gibi kendi API anahtarınızla yerel bir kopya kurun.
Bu örnek iki ilişkili API kullanır:
YouTube videolarını aramak ve sonuçları döndürmek için YouTube Data API.
Döndürülen video örneklerini, izleyebilmeniz için iframe video oynatıcılarının içinde görüntülemek için YouTube IFrame Player API.
Bu örnek ilginçtir çünkü bir uygulama oluşturmak için birlikte kullanılan iki ilişkili üçüncü taraf API’sini gösterir. Birincisi RESTful bir API iken, ikincisi bir video oynatıcıyı denetlemek için JavaScript yöntemleri sağlar. Bu örnek her iki API için de JavaScript kütüphaneleri kullanır: Data API’si için istemci kütüphanesi HTTP isteklerini ele alır ve sonuçları döndürür.
*[Görsel: MDN orijinal makalesindeki ilgili ekran görüntüsüne bakınız.]*
Bu örnek hakkında makalede çok fazla bir şey söylemeyeceğiz — nasıl çalıştığını açıklamak için kaynak kodunun içine ayrıntılı yorumlar eklenmiştir.
Data API’si, onu etkinleştiren projeler için varsayılan bir günlük kota sağlar. İstekler bu kotayı tüketir, bu yüzden sınırlı sayıda arama yapabilirsiniz.
Çalıştırmak için şunları yapmanız gerekecek:
YouTube Data API Genel Bakış belgelerini okuyun.
Enabled APIs sayfasını ziyaret ettiğinizden ve API listesinde YouTube Data API v3'ün durumunun ON olduğundan emin olun.
Google Cloud’dan bir API anahtarı alın.
Kaynak kodunda YOUR-API-KEY-HERE dizesini bulun ve onu API anahtarınızla değiştirin.
Örneği bir web sunucusu üzerinden çalıştırın. Doğrudan tarayıcıda (yani bir file:// URL’si aracılığıyla) çalıştırırsanız çalışmaz.
Özet
Bu makale, web sitelerinize işlevsellik eklemek için üçüncü taraf API’lerini kullanmaya yararlı bir giriş sundu.
Önceki
Genel bakış: İstemci tarafı web API’leri

Bu metin, MDN Web Docs içeriğinin Türkçe çevirisidir. Orijinal: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Client-side_APIs/Third_party_APIs. İçerik MDN katkıcılarına aittir ve CC BY-SA lisansıyla paylaşılmıştır.

Eşzamansız JavaScript
Bu modülde eşzamansız (asynchronous) JavaScript’e göz atıyoruz: neden önemli olduğunu ve bir sunucudan kaynak getirme gibi engelleme potansiyeli taşıyan işlemlerin etkili biçimde nasıl ele alınabileceğini inceliyoruz.
Bu makalede
Ön koşullar
Eğitimler ve meydan okumalar
Ayrıca bakın
Ön koşullar
Eşzamansız JavaScript oldukça ileri düzey bir konudur; buna başlamadan önce JavaScript ile dinamik betik yazma modüllerini tamamlamanız önerilir.
Not: Dosya oluşturamadığınız bir bilgisayar, tablet veya başka bir cihazda çalışıyorsanız, kodu CodePen veya JSFiddle gibi çevrimiçi bir düzenleyicide çalıştırmayı deneyebilirsiniz.
Eğitimler ve meydan okumalar
Eşzamansız JavaScript’e giriş
 Bu makalede eşzamanlı (synchronous) ve eşzamansız programlamayı, eşzamansız tekniklere neden sıklıkla başvurmamız gerektiğini ve eşzamansız fonksiyonların JavaScript’te tarihsel olarak uygulanış biçimiyle ilgili sorunları öğreneceğiz.
Sözler (Promise) nasıl kullanılır
 Burada sözleri tanıtacak ve söz tabanlı API’lerin nasıl kullanılacağını göstereceğiz. Ayrıca async ve await anahtar sözcüklerini de tanıtacağız.
Söz tabanlı bir API uygulama
 Bu makale, kendi söz tabanlı API’nizi nasıl uygulayacağınızı ana hatlarıyla anlatacaktır.
Çalışanlara (worker) giriş

---

<a id="makale-18"></a>

📄 **Bu bölüm şu MDN makalesinin çevirisidir:**  
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JavaScript/Introducing_workers

## 18. Çalışanlara (Worker) Giriş

 Çalışanlar, ana kodunuzun yanıt verebilir kalması için belirli görevleri ayrı bir iş parçacığında (thread) çalıştırmanızı sağlar. Bu makalede, uzun süren eşzamanlı bir fonksiyonu bir çalışan kullanacak şekilde yeniden yazacağız.
Animasyonları sıralama Meydan okuma

---

<a id="makale-19"></a>

📄 **Bu bölüm şu MDN makalesinin çevirisidir:**  
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JavaScript/Sequencing_animations

## 19. Animasyonları Sıralama – Meydan Okuma

 Bu meydan okuma, bir dizi animasyonu belirli bir sırayla oynatmak için sözleri kullanmanızı ister.
Ayrıca bakın
Marijn Haverbeke’nin harika çevrimiçi kitabı Eloquent JavaScript’ten Eşzamansız Programlama.
Genel bakış: Uzantı modülleri
Sonraki
Eşzamansız JavaScript’e giriş
Genel bakış: Eşzamansız JavaScript
Sonraki

---

<a id="makale-15"></a>

📄 **Bu bölüm şu MDN makalesinin çevirisidir:**  
https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JavaScript/Introducing

## 15. Eşzamansız JavaScript'e Giriş

Bu makalede eşzamansız programlamanın ne olduğunu, ona neden ihtiyaç duyduğumuzu açıklayacak ve eşzamansız fonksiyonların JavaScript’te tarihsel olarak hangi yollarla uygulandığını kısaca ele alacağız.
Ön koşullar:
JavaScript temelleri konusunda sağlam bir anlayış.
Öğrenme çıktıları:
Eşzamansız JavaScript’in ne olduğuna, eşzamanlı JavaScript’ten nasıl farklılaştığına ve ona neden ihtiyaç duyduğumuza aşina olmak.
Eşzamanlı programlamanın ne olduğu ve neden bazen sorunlu olabileceği.
Eşzamansız programlamanın bu sorunları nasıl çözmeyi amaçladığı.
Olay işleyiciler (event handlers) ve geri çağrı fonksiyonları (callback functions) ve bunların eşzamansız programlamayla ilişkisi.

Eşzamansız programlama, programınızın uzun sürmesi muhtemel bir görevi başlatmasını ve bu görev çalışırken, görevin bitmesini beklemek zorunda kalmak yerine diğer olaylara yanıt verebilmeyi sürdürmesini sağlayan bir tekniktir. Görev bittiğinde, sonuç programınıza sunulur.
Tarayıcıların sağladığı pek çok fonksiyon, özellikle de en ilginç olanları, uzun sürebilir ve bu nedenle eşzamansızdır. Örneğin:
fetch() kullanarak HTTP istekleri yapmak
getUserMedia() kullanarak kullanıcının kamerasına veya mikrofonuna erişmek
showOpenFilePicker() kullanarak kullanıcıdan dosya seçmesini istemek
Dolayısıyla kendi eşzamansız fonksiyonlarınızı çok sık uygulamanız gerekmese de, bunları doğru biçimde kullanmanız gerekme olasılığınız çok yüksektir.
Bu makalede, eşzamansız programlamayı bir zorunluluk haline getiren, uzun süren eşzamanlı fonksiyonların yarattığı sorunu inceleyerek başlayacağız.
Bu makalede
Eşzamanlı programlama
Uzun süren bir eşzamanlı fonksiyon
Uzun süren eşzamanlı fonksiyonlarla ilgili sorun
Olay işleyiciler
Geri çağrılar
Eşzamanlı programlama
Aşağıdaki koda bakın:
```js
const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
// "Hello, my name is Miriam!"
Bu kod:
name adında bir dize (string) bildirir.
name’i kullanan greeting adında başka bir dize bildirir.
Selamlamayı JavaScript konsoluna yazdırır.
Tarayıcı, programı fiilen yazdığımız sırayla, her seferinde bir satır olacak şekilde adım adım işler. Her noktada tarayıcı, bir sonraki satıra geçmeden önce o satırın işini bitirmesini bekler. Bunu yapmak zorundadır, çünkü her satır kendinden önceki satırlarda yapılan işe bağlıdır.
Bu, onu bir eşzamanlı program (synchronous program) yapar. Şu şekilde ayrı bir fonksiyon çağırsaydık bile eşzamanlı olmaya devam ederdi:
```
```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = "Miriam";
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
Burada makeGreeting() bir eşzamanlı fonksiyondur, çünkü çağıran, devam edebilmek için fonksiyonun işini bitirmesini ve bir değer döndürmesini beklemek zorundadır.
Uzun süren bir eşzamanlı fonksiyon
Peki eşzamanlı fonksiyon uzun sürerse?
Aşağıdaki program, kullanıcı “Generate primes” düğmesine tıkladığında çok sayıda büyük asal sayı üretmek için çok verimsiz bir algoritma kullanır. Kullanıcının belirttiği asal sayı adedi ne kadar yüksekse, işlem o kadar uzun sürer.
```html
<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Generate primes</button>
<button id="reload">Reload</button>

<div id="output"></div>
```
```js
const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `Finished generating ${quota.value} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
“Generate primes” düğmesine tıklamayı deneyin. Bilgisayarınızın ne kadar hızlı olduğuna bağlı olarak, program “Finished!” mesajını görüntülemeden önce muhtemelen birkaç saniye geçecektir.
Uzun süren eşzamanlı fonksiyonlarla ilgili sorun
Sonraki örnek, içine yazı yazabilmeniz için bir metin kutusu eklememiz dışında bir öncekiyle aynıdır. Bu sefer “Generate primes” düğmesine tıklayın ve hemen ardından metin kutusuna yazı yazmayı deneyin.
generatePrimes() fonksiyonumuz çalışırken programımızın tamamen yanıt vermez hale geldiğini göreceksiniz: hiçbir şey yazamaz, hiçbir şeye tıklayamaz veya başka hiçbir şey yapamazsınız.
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Bunun nedeni, bu JavaScript programının tek iş parçacıklı (single-threaded) olmasıdır. İş parçacığı (thread), bir programın izlediği talimatlar dizisidir. Program tek bir iş parçacığından oluştuğu için aynı anda yalnızca tek bir şey yapabilir: dolayısıyla uzun süren eşzamanlı çağrımızın geri dönmesini beklerken başka hiçbir şey yapamaz.
İhtiyacımız olan, programımızın şunları yapabilmesini sağlayacak bir yoldur:
Bir fonksiyonu çağırarak uzun süren bir işlemi başlatmak.
Bu fonksiyonun işlemi başlatıp hemen geri dönmesini sağlamak; böylece programımız diğer olaylara yanıt verebilir kalır.
Fonksiyonun işlemi ana iş parçacığını engellemeyecek şekilde yürütmesini sağlamak; örneğin yeni bir iş parçacığı başlatarak.
İşlem sonunda tamamlandığında bizi sonucuyla birlikte bilgilendirmesini sağlamak.
Eşzamansız API’lerin bize sağladığı şey budur. Bu modülün geri kalanı, bu yaklaşımların JavaScript’te nasıl uygulandığını açıklar.
Uzun süren görev türleri ve bunlara nasıl yaklaşılacağı
İki tür uzun süren görev vardır: tarayıcı API’lerinin sağladığı yetenekler ve JavaScript’te kendinizin uyguladığı özel kod.
Tarayıcının sağladığı uzun süren görev ilkellerinin neredeyse tamamı zaten eşzamansızdır; örneğin fetch() kullanarak HTTP istekleri yapmak, IndexedDB’yi sorgulamak veya verileri şifrelemek gibi. Bunlar ana iş parçacığını asla engellemez; bunlarla olaylar, geri çağrılar veya sözler (promises) aracılığıyla etkileşim kurarsınız; bunu hemen sonra göreceksiniz.
Ancak generatePrimes() fonksiyonumuz özel JavaScript kodudur. Çağrıyı bir söze sarmak bu hesaplamaları başka bir iş parçacığına taşımaz; dolayısıyla çalışırken ana iş parçacığını yine engeller. Onu eşzamansız yapmak için bir web çalışanı (web worker) kullanarak açıkça bir iş parçacığı oluşturmamız gerekir. Bu, eğitimin ilerleyen bölümlerinde ele alınacaktır ve JavaScript’te mevcut eşzamansız ilkelleri çağırmaktan daha karmaşıktır.
Olay işleyiciler
Eşzamansız fonksiyonlar için az önce gördüğümüz tanım size olay işleyicileri hatırlatmış olabilir ve eğer hatırlattıysa haklısınız. Olay işleyiciler gerçekte bir eşzamansız programlama biçimidir: hemen değil, olay gerçekleştiğinde çağrılacak bir fonksiyon (olay işleyici) sağlarsınız. Eğer “olay”, “eşzamansız işlem tamamlandı” ise, bu olay, çağırana bir eşzamansız fonksiyon çağrısının sonucunu bildirmek için kullanılabilir.
Bazı erken dönem eşzamansız API’ler olayları tam olarak bu şekilde kullanıyordu. XMLHttpRequest API’si, JavaScript kullanarak uzak bir sunucuya HTTP istekleri yapmanızı sağlar. Bu uzun sürebileceğinden eşzamansız bir API’dir ve bir isteğin ilerleyişi ile nihai tamamlanması hakkında, XMLHttpRequest nesnesine olay dinleyicileri (event listeners) ekleyerek bilgilendirilirsiniz.
Aşağıdaki örnek bunu iş başında gösterir. Bir istek göndermek için “Click to start request” düğmesine basın. Yeni bir XMLHttpRequest oluşturur ve onun loadend olayını dinleriz. İşleyici, durum koduyla birlikte bir “Finished!” mesajı kaydeder.
Olay dinleyicisini ekledikten sonra isteği göndeririz. Bunun ardından “Started XHR request” kaydı yapabildiğimize dikkat edin: yani istek sürerken programımız çalışmaya devam edebilir ve istek tamamlandığında olay işleyicimiz çağrılır.
```html
<button id="xhr">Click to start request</button>
<button id="reload">Reload</button>

<pre class="event-log"></pre>
```
```js
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Bu, kullanıcının bir düğmeye tıklaması gibi kullanıcı eylemlerine yönelik işleyiciler gibi bir olay işleyicidir. Ancak bu sefer olay, bir nesnenin durumundaki değişikliktir.
Geri çağrılar
Olay işleyici, belirli bir geri çağrı türüdür. Geri çağrı, uygun zamanda çağrılacağı beklentisiyle başka bir fonksiyona geçirilen bir fonksiyondan ibarettir. Az önce gördüğümüz gibi, geri çağrılar bir zamanlar eşzamansız fonksiyonların JavaScript’te uygulanışının ana yoluydu.
Ancak geri çağrı tabanlı kod, geri çağrının kendisinin de geri çağrı kabul eden fonksiyonları çağırması gerektiğinde anlaşılması zor hale gelebilir. Bir dizi eşzamansız fonksiyona bölünen bir işlem yapmanız gerekiyorsa bu yaygın bir durumdur. Örneğin şunu düşünün:
```js
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
Burada üç adıma bölünmüş tek bir işlemimiz var ve her adım bir önceki adıma bağlı. Örneğimizde ilk adım girdiye 1 ekler, ikincisi 2 ekler, üçüncüsü 3 ekler. 0 girdisiyle başlayınca nihai sonuç 6 olur (0 + 1 + 2 + 3). Eşzamanlı bir program olarak bu çok basittir. Peki adımları geri çağrılar kullanarak uygulasaydık?
```
```js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();
Geri çağrıların içinde geri çağrılar çağırmak zorunda olduğumuz için, okunması ve hata ayıklaması (debug) çok daha zor olan, derinlemesine iç içe geçmiş bir doOperation() fonksiyonu elde ederiz. Buna bazen “geri çağrı cehennemi” (callback hell) veya “kıyamet piramidi” (pyramid of doom) denir (çünkü girinti, yan yatmış bir piramide benzer).
Geri çağrıları bu şekilde iç içe geçirdiğimizde hataları ele almak da çok zor hale gelebilir: çoğu zaman hata işlemeyi yalnızca en üst düzeyde bir kez yapmak yerine “piramidin” her düzeyinde hataları ele almanız gerekir.
Bu nedenlerle çoğu modern eşzamansız API geri çağrı kullanmaz. Bunun yerine JavaScript’te eşzamansız programlamanın temeli Promise’tır ve bir sonraki makalenin konusu da budur.
Genel bakış: Eşzamansız JavaScript
Sonraki
Sözler (Promise) nasıl kullanılır
Önceki
Genel bakış: Eşzamansız JavaScript
Sonraki
Sözler (Promise), modern JavaScript’te eşzamansız (asynchronous) programlamanın temelidir. Söz, eşzamansız bir fonksiyonun döndürdüğü ve işlemin o anki durumunu temsil eden bir nesnedir. Söz çağırana döndürüldüğünde işlem çoğu zaman henüz bitmemiştir, ancak söz nesnesi, işlemin sonunda başarıyla ya da başarısızlıkla sonuçlanmasını ele alacak yöntemler sunar.
Ön koşullar:
JavaScript temellerinin ve bu modüldeki önceki derslerde ele alınan eşzamansız kavramların sağlam biçimde anlaşılmış olması.
Öğrenme çıktıları:
JavaScript’te sözleri kullanmanın kavramları ve temelleri. Sözleri zincirleme ve birleştirme. Sözlerde hataları ele alma. async ve await: sözlerle ilişkileri ve neden yararlı oldukları.

Önceki makalede, eşzamansız fonksiyonları gerçekleştirmek için geri çağrıların (callback) kullanımından söz ettik. Bu tasarımda eşzamansız fonksiyonu, geri çağrı fonksiyonunuzu ileterek çağırırsınız. Fonksiyon hemen döner ve işlem bittiğinde geri çağrınızı çağırır.
Söz tabanlı bir API’de ise eşzamansız fonksiyon işlemi başlatır ve bir Promise nesnesi döndürür. Ardından bu söz nesnesine işleyiciler (handler) ekleyebilirsiniz; bu işleyiciler, işlem başarılı olduğunda ya da başarısız olduğunda çalıştırılır.
Bu makalede
fetch() API’sini kullanma
Sözleri zincirleme
Hataları yakalama
Söz terminolojisi
Birden fazla sözü birleştirme
async ve await
Özet
Ayrıca bakın
fetch() API’sini kullanma
Not: Bu makalede, sayfadaki kod örneklerini tarayıcınızın JavaScript konsoluna kopyalayarak sözleri keşfedeceğiz. Bunu ayarlamak için:
bir tarayıcı sekmesi açın ve https://example.org adresini ziyaret edin
o sekmede, tarayıcınızın geliştirici araçlarındaki JavaScript konsolunu açın
bir örnek gösterdiğimizde onu konsola kopyalayın. Her yeni örnek girişinizde sayfayı yeniden yüklemeniz gerekecek; aksi halde konsol, fetchPromise değişkenini yeniden tanımladığınızdan şikâyet eder.
Bu örnekte, https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json adresindeki JSON dosyasını indireceğiz ve bununla ilgili bazı bilgileri günlüğe kaydedeceğiz.
Bunu yapmak için sunucuya bir HTTP isteği göndereceğiz. Bir HTTP isteğinde uzak bir sunucuya istek mesajı göndeririz ve sunucu bize bir yanıt gönderir. Bu durumda sunucudan bir JSON dosyası almak için istek göndereceğiz. Geçen makalede XMLHttpRequest API’sini kullanarak HTTP istekleri yaptığımızı hatırlıyor musunuz? Bu makalede ise XMLHttpRequest’in modern, söz tabanlı karşılığı olan fetch() API’sini kullanacağız.
Bunu tarayıcınızın JavaScript konsoluna kopyalayın:
```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
Burada şunları yapıyoruz:
fetch() API’sini çağırıyor ve dönüş değerini fetchPromise değişkenine atıyoruz
hemen ardından fetchPromise değişkenini günlüğe kaydediyoruz. Bu, Promise { <state>: "pending" } gibi bir şey çıktılamalıdır; bu da bize bir Promise nesnemiz olduğunu ve bu nesnenin, değeri "pending" olan bir state özelliği taşıdığını söyler. "pending" (beklemede) durumu, getirme işleminin hâlâ devam ettiği anlamına gelir.
Söz’ün then() yöntemine bir işleyici fonksiyon geçiriyoruz. Getirme işlemi başarılı olduğunda (ve başarılı olursa), söz işleyicimizi çağırır ve ona sunucunun yanıtını içeren bir Response nesnesi geçirir.
isteği başlattığımıza dair bir mesaj günlüğe kaydediyoruz.
Tam çıktı şuna benzer olmalıdır:
Promise { <state>: "pending" }
Started request…
Received response: 200
Started request… mesajının yanıtı almadan önce günlüğe kaydedildiğine dikkat edin. Eşzamanlı bir fonksiyonun aksine fetch(), istek hâlâ sürerken geri döner ve böylece programımızın duyarlı kalmasını sağlar. Yanıt, isteğimizin başarılı olduğu anlamına gelen 200 (OK) durum kodunu gösterir.
Bu muhtemelen geçen makaledeki, XMLHttpRequest nesnesine olay işleyicileri eklediğimiz örneğe çok benziyor. Bunun yerine, döndürülen sözün then() yöntemine bir işleyici geçiriyoruz.
Sözleri zincirleme
fetch() API’siyle bir Response nesnesi aldıktan sonra yanıt verisini almak için başka bir fonksiyon çağırmanız gerekir. Bu durumda yanıt verisini JSON olarak almak istiyoruz; bu yüzden Response nesnesinin json() yöntemini çağırırız. json() yönteminin de eşzamansız olduğu ortaya çıkıyor. Yani burada art arda iki eşzamansız fonksiyon çağırmamız gereken bir durum var.
Şunu deneyin:
```
```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
Bu örnekte, daha önce olduğu gibi fetch() tarafından döndürülen söze bir then() işleyicisi ekliyoruz. Ancak bu kez işleyicimiz response.json() çağırıyor ve ardından response.json() tarafından döndürülen söze yeni bir then() işleyicisi geçiriyor.
Bu, “baked beans” değerini günlüğe kaydetmelidir (“products.json” dosyasında listelenen ilk ürünün adı).
Ama dur bir dakika! Geçen makalede, bir geri çağrının içinde başka bir geri çağrı çağırdığımızda, giderek daha fazla iç içe geçmiş kod düzeyleri elde ettiğimizi söylemiştik, hatırlıyor musunuz? Ve bu “geri çağrı cehenneminin” kodumuzu anlaşılması zor hale getirdiğini söylemiştik. Bu da aynısı değil mi, sadece then() çağrılarıyla?
Elbette öyle. Ancak sözlerin zarif özelliği, then() yönteminin kendisinin, geri çağrı fonksiyonunun dönüş değeriyle yerine getirilen (fonksiyon başarıyla çalışırsa) yeni bir söz döndürmesidir. Bu, yukarıdaki kodu şu şekilde yeniden yazabileceğimiz (ve kesinlikle yazmamız gerektiği) anlamına gelir:
```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
İkinci then() çağrısını ilk then() işleyicisinin içinde yapmak yerine, json() tarafından döndürülen sözü döndürebilir ve ikinci then() çağrısını bu dönüş değeri üzerinde yapabiliriz. Buna söz zincirleme (promise chaining) denir; art arda eşzamansız fonksiyon çağrıları yapmamız gerektiğinde sürekli artan girinti düzeylerinden kaçınmamızı sağlar.
Bir sonraki adıma geçmeden önce eklememiz gereken bir şey daha var. Yanıtı okumaya çalışmadan önce sunucunun isteği kabul ettiğinden ve işleyebildiğinden emin olmalıyız. Bunu, yanıttaki durum kodunu kontrol ederek ve “OK” değilse bir hata fırlatarak yapacağız:
```
```js
const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });
Hataları yakalama
Bu bizi son parçaya getiriyor: hataları nasıl ele alırız? fetch() API’si pek çok nedenle hata fırlatabilir (örneğin ağ bağlantısı olmadığı için ya da URL’nin bir şekilde hatalı biçimlendirilmiş olması nedeniyle) ve sunucu bir hata döndürdüğünde biz de kendimiz hata fırlatıyoruz.
Geçen makalede, iç içe geçmiş geri çağrılarla hata ele almanın çok zorlaşabildiğini ve her iç içe geçme düzeyinde hataları ele almamız gerektiğini görmüştük.
Hata ele almayı desteklemek için Promise nesneleri bir catch() yöntemi sunar. Bu, then() yöntemine çok benzer: onu çağırır ve bir işleyici fonksiyon geçirirsiniz. Ancak then() yöntemine geçirilen işleyici eşzamansız işlem başarılı olduğunda çağrılırken, catch() yöntemine geçirilen işleyici eşzamansız işlem başarısız olduğunda çağrılır.
Bir söz zincirinin sonuna catch() eklerseniz, eşzamansız fonksiyon çağrılarından herhangi biri başarısız olduğunda çağrılır. Böylece bir işlemi art arda gelen birkaç eşzamansız fonksiyon çağrısı olarak gerçekleştirebilir ve tüm hataları ele almak için tek bir yere sahip olabilirsiniz.
fetch() kodumuzun bu sürümünü deneyin. catch() kullanarak bir hata işleyicisi ekledik ve ayrıca isteğin başarısız olması için URL’yi değiştirdik.
```js
const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
Bu sürümü çalıştırmayı deneyin: catch() işleyicimiz tarafından günlüğe kaydedilen hatayı görmelisiniz.
Söz terminolojisi
Sözler, netleştirmeye değer oldukça özel bir terminolojiyle gelir.
Öncelikle, bir söz üç durumdan birinde olabilir:
beklemede (pending): Başlangıç durumu. İşlem henüz tamamlanmamıştır (ne başarılı olmuş ne de başarısız).
yerine getirildi (fulfilled): İşlem başarılı oldu. Sözün .then() işleyicisi bu durumda çağrılır.
reddedildi (rejected): İşlem başarısız oldu. Sözün .catch() işleyicisi bu durumda çağrılır.
Burada “başarılı” ya da “başarısız” olmanın ne anlama geldiğinin ilgili API’ye bağlı olduğuna dikkat edin. Örneğin fetch(), (diğer nedenlerin yanı sıra) bir ağ hatası isteğin gönderilmesini engellediğinde döndürülen sözü reddeder; ancak sunucu bir yanıt gönderdiyse, yanıt 404 Not Found gibi bir hata olsa bile sözü yerine getirir.
Bir sözün durumunu betimlemek için birkaç terim daha kullanırız:
tamamlanmış (completed): Söz artık beklemede değildir; ya yerine getirilmiş ya da reddedilmiştir.
çözümlenmiş (resolved): Söz tamamlanmıştır ya da başka bir sözün durumunu izleyecek şekilde “kilitlenmiştir”. Bu, bir söz başka bir söze bağlı olduğunda önem kazanan daha ileri düzey bir kavramdır.
Let’s talk about how to talk about promises (“Sözlerden nasıl söz edeceğimiz hakkında konuşalım”) makalesi, bu terminolojinin ayrıntılarına dair harika bir açıklama sunar.
Birden fazla sözü birleştirme
İşleminiz birkaç eşzamansız fonksiyondan oluşuyorsa ve her birinin bir sonrakine başlamadan önce tamamlanmasını istiyorsanız ihtiyacınız olan şey söz zinciridir. Ancak eşzamansız fonksiyon çağrılarını birleştirmeniz gereken başka yollar da olabilir ve Promise API’si bunlar için bazı yardımcılar sunar.
Bazen tüm sözlerin yerine getirilmesine ihtiyaç duyarsınız, ancak bunlar birbirine bağlı değildir. Böyle bir durumda hepsini birlikte başlatmak ve hepsi yerine getirildiğinde bilgilendirilmek çok daha verimlidir. Burada ihtiyacınız olan, Promise.all() yöntemidir. Bir söz dizisi alır ve tek bir söz döndürür.
Promise.all() tarafından döndürülen söz:
dizideki tüm sözler yerine getirildiğinde ve getirilirse yerine getirilir. Bu durumda then() işleyicisi, sözlerin all() yöntemine geçirildiği sırayla tüm yanıtlardan oluşan bir dizi ile çağrılır.
dizideki sözlerden herhangi biri reddedildiğinde ve reddedilirse reddedilir. Bu durumda catch() işleyicisi, reddeden söz tarafından fırlatılan hatayla çağrılır.
Örneğin:
```
```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
Burada üç farklı URL’ye üç fetch() isteği yapıyoruz. Hepsi başarılı olursa her birinin yanıt durumunu günlüğe kaydedeceğiz. Herhangi biri başarısız olursa başarısızlığı günlüğe kaydediyoruz.
Sağladığımız URL’lerle tüm istekler yerine getirilmelidir; ancak ikincisi için, istenen dosya mevcut olmadığından sunucu 200 (OK) yerine 404 (Not Found) döndürecektir. Dolayısıyla çıktı şöyle olmalıdır:
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
Aynı kodu şu şekilde hatalı biçimlendirilmiş bir URL ile denersek:
```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
O zaman catch() işleyicisinin çalışmasını bekleyebiliriz ve şuna benzer bir şey görmeliyiz:
Failed to fetch: TypeError: Failed to fetch
Bazen bir söz kümesinden herhangi birinin yerine getirilmesine ihtiyaç duyarsınız ve hangisi olduğu umurunuzda değildir. Bu durumda Promise.any() yöntemini istersiniz. Bu, Promise.all() gibidir; ancak söz dizisinden herhangi biri yerine getirilir getirilmez yerine getirilir, hepsi reddedilirse de reddedilir:
```
```js
const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
Bu durumda hangi getirme isteğinin önce tamamlanacağını tahmin edemeyeceğimize dikkat edin.
Bunlar, birden fazla sözü birleştirmeye yarayan ek Promise fonksiyonlarından yalnızca ikisidir. Geri kalanları öğrenmek için Promise başvuru belgelerine bakın.
async ve await
async anahtar sözcüğü, eşzamansız söz tabanlı kodla çalışmanın daha basit bir yolunu sunar. Bir fonksiyonun başına async eklemek onu bir async fonksiyon yapar:
```js
async function myFunction() {
  // Bu bir async fonksiyondur
}
Bir async fonksiyonun içinde, bir söz döndüren fonksiyon çağrısından önce await anahtar sözcüğünü kullanabilirsiniz. Bu, kodun o noktada söz sonuçlanana (settled) kadar beklemesini sağlar; sonuçlandığında sözün yerine getirilme değeri bir dönüş değeri gibi ele alınır ya da reddedilme değeri fırlatılır.
Bu, eşzamansız fonksiyonları kullanan ancak eşzamanlı koda benzeyen kod yazmanızı sağlar. Örneğin bunu, getirme örneğimizi yeniden yazmak için kullanabiliriz:
```
```js
async function fetchProducts() {
  try {
    // bu satırdan sonra fonksiyonumuz `fetch()` çağrısı sonuçlanana kadar bekleyecek
    // `fetch()` çağrısı ya bir Response döndürecek ya da bir hata fırlatacak
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // bu satırdan sonra fonksiyonumuz `response.json()` çağrısı sonuçlanana kadar bekleyecek
    // `response.json()` çağrısı ya ayrıştırılmış JSON nesnesini döndürecek ya da bir hata fırlatacak
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
Burada await fetch() çağırıyoruz ve bir Promise almak yerine, çağıranımız, fetch() eşzamanlı bir fonksiyonmuş gibi tamamen tamamlanmış bir Response nesnesi geri alıyor!
Hata ele alma için kod eşzamanlıymış gibi tam olarak aynı şekilde bir try...catch bloğu bile kullanabiliriz.
Ancak async fonksiyonların her zaman bir söz döndürdüğünü unutmayın; dolayısıyla şöyle bir şey yapamazsınız:
```js
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name); // "promise" bir Promise nesnesidir, bu yüzden bu çalışmaz
Bunun yerine şöyle bir şey yapmanız gerekir:
```
```js
async function fetchProducts() {
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

const promise = fetchProducts();
promise
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
Burada try...catch yapısını, döndürülen sözün catch işleyicisine geri taşıdık. Bu, then işleyicimizin, fetchProducts fonksiyonu içinde bir hata yakalanıp data değerinin undefined olması durumuyla uğraşmak zorunda kalmaması anlamına gelir. Hataları söz zincirinizin son adımı olarak ele alın.
Ayrıca, kodunuz bir JavaScript modülünde değilse await ifadesini yalnızca bir async fonksiyonun içinde kullanabileceğinizi de unutmayın. Yani sıradan bir betikte şunu yapamazsınız:
```js
try {
  // await'i async fonksiyon dışında kullanmaya yalnızca bir modülde izin verilir
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
} catch (error) {
  console.error(`Could not get products: ${error}`);
  throw error;
}
Muhtemelen başka türlü söz zincirleri kullanacağınız yerlerde async fonksiyonları sık sık kullanacaksınız; bunlar sözlerle çalışmayı çok daha sezgisel hale getirir.
Tıpkı bir söz zincirinde olduğu gibi await ifadesinin de eşzamansız işlemleri art arda (seri) tamamlanmaya zorladığını aklınızda tutun. Bir sonraki işlemin sonucu bir öncekinin sonucuna bağlıysa bu gereklidir; ancak durum böyle değilse Promise.all() gibi bir şey daha performanslı olacaktır.
Özet
Sözler, modern JavaScript’te eşzamansız programlamanın temelidir. Derin iç içe geçmiş geri çağrılar olmadan eşzamansız işlem dizilerini ifade etmeyi ve bunlar hakkında akıl yürütmeyi kolaylaştırır; ayrıca eşzamanlı try...catch deyimine benzeyen bir hata ele alma biçimini destekler.
async ve await anahtar sözcükleri, art arda gelen eşzamansız fonksiyon çağrılarından bir işlem oluşturmayı kolaylaştırır, açık söz zincirleri oluşturma ihtiyacını ortadan kaldırır ve tıpkı eşzamanlı koda benzeyen kod yazmanıza olanak tanır.
Sözler tüm modern tarayıcıların en son sürümlerinde çalışır; söz desteğinin sorun olacağı tek yerler Opera Mini ile IE11 ve öncesi sürümlerdir.
Bu makalede sözlerin tüm özelliklerine değinmedik, yalnızca en ilginç ve yararlı olanlarına değindik. Sözler hakkında daha fazla şey öğrenmeye başladıkça daha fazla özellik ve teknikle karşılaşacaksınız.
Pek çok modern Web API’si söz tabanlıdır; bunların arasında WebRTC, Web Audio API, Media Capture and Streams API ve çok daha fazlası yer alır.
Ayrıca bakın
Promise()
Sözleri kullanma
Nolan Lawson’dan We have a problem with promises (“Sözlerle ilgili bir sorunumuz var”)
Let’s talk about how to talk about promises (“Sözlerden nasıl söz edeceğimiz hakkında konuşalım”)
Önceki
Genel bakış: Eşzamansız JavaScript
Sonraki
Söz tabanlı bir API nasıl gerçekleştirilir
Önceki
Genel bakış: Eşzamansız JavaScript
Sonraki
Son makalede, söz döndüren API’lerin nasıl kullanılacağını ele aldık. Bu makalede ise madalyonun öbür yüzüne bakacağız: söz döndüren API’lerin nasıl gerçekleştirileceğine. Bu, söz tabanlı API’leri kullanmaktan çok daha seyrek karşılaşılan bir iştir, ancak yine de bilmeye değer.
Ön koşullar:
JavaScript temellerinin ve bu modüldeki önceki derslerde ele alınan eşzamansız kavramların sağlam biçimde anlaşılmış olması.
Öğrenme çıktıları:
Söz tabanlı API’lerin nasıl gerçekleştirileceğini anlamak.

Genel olarak, söz tabanlı bir API gerçekleştirdiğinizde, olayları (event), düz geri çağrıları (callback) ya da bir mesaj iletimi modelini kullanabilen eşzamansız (asynchronous) bir işlemi sarmalıyor olacaksınız. O işlemin başarısını ya da başarısızlığını doğru biçimde ele alması için bir Promise nesnesi ayarlarsınız.
Bu makalede
alarm() API’sini gerçekleştirme
alarm() API’sini kullanma
alarm() API’siyle async ve await kullanma
Ayrıca bakın
alarm() API’sini gerçekleştirme
Bu örnekte alarm() adında, söz tabanlı bir alarm API’si gerçekleştireceğiz. Bu API, argüman olarak uyandırılacak kişinin adını ve kişiyi uyandırmadan önce beklenecek gecikmeyi milisaniye cinsinden alacak. Gecikmeden sonra fonksiyon, uyandırmamız gereken kişinin adını da içeren bir “Wake up!” mesajı gönderecek.
setTimeout() fonksiyonunu sarmalama
alarm() fonksiyonumuzu gerçekleştirmek için setTimeout() API’sini kullanacağız. setTimeout() API’si, argüman olarak bir geri çağrı fonksiyonu ve milisaniye cinsinden verilen bir gecikme alır. setTimeout() çağrıldığında, verilen gecikmeye ayarlanmış bir zamanlayıcı başlatır ve süre dolduğunda verilen fonksiyonu çağırır.
Aşağıdaki örnekte, setTimeout() fonksiyonunu bir geri çağrı fonksiyonu ve 1000 milisaniyelik bir gecikmeyle çağırıyoruz:
```
```html
<button id="set-alarm">Set alarm</button>
<div id="output"></div>
```js
const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");

function setAlarm() {
  setTimeout(() => {
    output.textContent = "Wake up!";
  }, 1000);
}

button.addEventListener("click", setAlarm);
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Promise() yapıcısı
alarm() fonksiyonumuz, zamanlayıcının süresi dolduğunda yerine getirilen bir Promise döndürecek. then() işleyicisine (handler) bir “Wake up!” mesajı geçirecek ve çağıran negatif bir gecikme değeri verirse sözü reddedecek.
Buradaki anahtar bileşen Promise() yapıcısıdır (constructor). Promise() yapıcısı argüman olarak tek bir fonksiyon alır. Bu fonksiyona executor (yürütücü) diyeceğiz. Yeni bir söz oluşturduğunuzda yürütücünün gerçekleştirimini siz sağlarsınız.
Bu yürütücü fonksiyonun kendisi, ikisi de fonksiyon olan ve geleneksel olarak resolve ve reject olarak adlandırılan iki argüman alır. Yürütücü gerçekleştiriminizde, temeldeki eşzamansız fonksiyonu çağırırsınız. Eşzamansız fonksiyon başarılı olursa resolve, başarısız olursa reject çağırırsınız. Yürütücü fonksiyon bir hata fırlatırsa reject otomatik olarak çağrılır. resolve ve reject fonksiyonlarına herhangi bir türde tek bir parametre geçirebilirsiniz.
Dolayısıyla alarm() fonksiyonunu şu şekilde gerçekleştirebiliriz:
```
```js
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
      return;
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
Bu fonksiyon yeni bir Promise oluşturur ve döndürür. Sözün yürütücüsünün içinde şunları yapıyoruz:
delay değerinin negatif olmadığını kontrol ediyoruz ve negatifse özel bir hata geçirerek reject çağırıyoruz.
setTimeout() fonksiyonunu, bir geri çağrı ve delay geçirerek çağırıyoruz. Geri çağrı, zamanlayıcının süresi dolduğunda çağrılacak ve geri çağrının içinde "Wake up!" mesajımızı geçirerek resolve çağırıyoruz.
alarm() API’sini kullanma
Bu kısım son makaleden oldukça tanıdık gelmelidir. alarm() fonksiyonunu çağırabilir ve döndürülen söz üzerinde then() ile catch() çağırarak sözün yerine getirilmesi ve reddedilmesi için işleyiciler belirleyebiliriz.
```js
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
      return;
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", () => {
  alarm(name.value, delay.value)
    .then((message) => (output.textContent = message))
    .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
});
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
“Name” ve “Delay” için farklı değerler ayarlamayı deneyin. “Delay” için negatif bir değer ayarlamayı da deneyin.
alarm() API’siyle async ve await kullanma
alarm() bir Promise döndürdüğü için, onunla diğer her sözle yapabileceğimiz her şeyi yapabiliriz: söz zincirleme, Promise.all() ve async / await:
```
```js
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject(new Error("Alarm delay must not be negative"));
      return;
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener("click", async () => {
  try {
    const message = await alarm(name.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});
*[Etkileşimli demo: MDN Playground üzerinde canlı olarak görüntülenebilir.]*
Ayrıca bakın
Promise() yapıcısı
Sözleri kullanma
Önceki
Genel bakış: Eşzamansız JavaScript
Sonraki
Çalışanlara (worker) giriş
Önceki
Genel bakış: Eşzamansız JavaScript
Sonraki
“Eşzamansız JavaScript” modülümüzün bu son makalesinde, bazı görevleri ayrı bir iş parçacığında (thread) çalıştırmanıza olanak tanıyan çalışanları (worker) tanıtacağız.
Ön koşullar:
JavaScript temellerinin ve bu modüldeki önceki derslerde ele alınan eşzamansız kavramların sağlam biçimde anlaşılmış olması.
Öğrenme çıktıları:
Özel web çalışanlarının nasıl ve neden kullanılacağı. Paylaşılan çalışanlar ve hizmet çalışanları gibi diğer web çalışanı türlerinin amacını anlamak.

Bu modülün ilk makalesinde, programınızda uzun süren eşzamanlı bir görev olduğunda neler olduğunu görmüştük: tüm pencere tamamen yanıt vermez hale geliyor. Temelde bunun nedeni, programın tek iş parçacıklı (single-threaded) olmasıdır. İş parçacığı, bir programın izlediği talimatlar dizisidir. Program tek bir iş parçacığından oluştuğu için aynı anda yalnızca tek bir şey yapabilir: dolayısıyla uzun süren eşzamanlı çağrımızın dönmesini beklerken başka hiçbir şey yapamaz.
Çalışanlar, bazı görevleri farklı bir iş parçacığında çalıştırma imkânı verir; böylece görevi başlatabilir, ardından diğer işlemlere (örneğin kullanıcı eylemlerini ele almaya) devam edebilirsiniz.
Bunun yol açtığı bir kaygı, birden fazla iş parçacığı aynı paylaşılan veriye erişebiliyorsa, bu verileri birbirlerine göre bağımsız ve beklenmedik biçimde değiştirebilmeleridir.
 Bu, bulunması zor hatalara neden olabilir.
Web’de bu sorunlardan kaçınmak için ana kodunuz ile çalışan kodunuz birbirlerinin değişkenlerine asla doğrudan erişemez ve veriyi yalnızca çok belirli durumlarda gerçekten “paylaşabilir”.
 Çalışanlar ve ana kod tamamen ayrı dünyalarda çalışır ve yalnızca birbirlerine mesaj göndererek etkileşir. Özellikle bu, çalışanların DOM’a (pencere, belge, sayfa öğeleri vb.) erişemeyeceği anlamına gelir.
Üç farklı çalışan türü vardır:
özel çalışanlar (dedicated workers)
paylaşılan çalışanlar (shared workers)
hizmet çalışanları (service workers)
Bu makalede, ilk tür çalışan için bir örneği adım adım inceleyecek, ardından diğer ikisini kısaca ele alacağız.
Bu makalede
Web çalışanlarını kullanma
Diğer çalışan türleri
Özet
Ayrıca bakın
Web çalışanlarını kullanma
Asal sayıları hesaplayan bir sayfamız olduğu ilk makaleyi hatırlıyor musunuz? Asal sayı hesaplamasını çalıştırmak için bir çalışan kullanacağız; böylece sayfamız kullanıcı eylemlerine yanıt vermeye devam edecek.
Eşzamanlı asal sayı üreteci
Önce önceki örneğimizdeki JavaScript koduna bir kez daha bakalım:
```js
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  return primes;
}

document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  const primes = generatePrimes(quota);
  document.querySelector("#output").textContent =
    `Finished generating ${quota} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
Bu programda, generatePrimes() fonksiyonunu çağırdıktan sonra program tamamen yanıt vermez hale gelir.
Bir çalışanla asal sayı üretimi
Bu örnek için, önce https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/workers/start adresindeki dosyaların yerel bir kopyasını oluşturun. Bu dizinde dört dosya vardır:
index.html
style.css
main.js
generate.js
“index.html” ve “style.css” dosyaları zaten tamamlanmıştır:
```
```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Prime numbers</title>
    <script src="main.js" defer></script>
    <link href="style.css" rel="stylesheet" />
  </head>

  <body>
    <label for="quota">Number of primes:</label>
    <input type="text" id="quota" name="quota" value="1000000" />

    <button id="generate">Generate primes</button>
    <button id="reload">Reload</button>

    <textarea id="user-input" rows="5" cols="62">
Try typing in here immediately after pressing "Generate primes"
    </textarea>

    <div id="output"></div>
  </body>
</html>
```css
textarea {
  display: block;
  margin: 1rem 0;
}
“main.js” ve “generate.js” dosyaları boştur. Ana kodu “main.js” dosyasına, çalışan kodunu ise “generate.js” dosyasına ekleyeceğiz.
Dolayısıyla önce, çalışan kodunun ana koddan ayrı bir betikte tutulduğunu görebiliriz. Yukarıdaki “index.html” dosyasına bakarak, yalnızca ana kodun bir <script> öğesine dahil edildiğini de görebiliriz.
Şimdi aşağıdaki kodu “main.js” dosyasına kopyalayın:
```
```js
// "generate.js" içindeki kodu vererek yeni bir çalışan oluştur
const worker = new Worker("./generate.js");

// Kullanıcı "Generate primes" düğmesine tıkladığında çalışana bir mesaj gönder.
// Mesaj komutu "generate"dir ve mesaj ayrıca, üretilecek asal sayı adedi olan
// "quota" değerini de içerir.
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});

// Çalışan ana iş parçacığına bir mesaj geri gönderdiğinde,
// çıktı kutusunu, mesaj verisinden alınan üretilen asal sayı adedini de
// içeren, kullanıcıya yönelik bir mesajla güncelle.
worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});
İlk olarak, çalışanı Worker() yapıcısını (constructor) kullanarak oluşturuyoruz. Ona, çalışan betiğini gösteren bir URL geçiriyoruz. Çalışan oluşturulur oluşturulmaz, çalışan betiği yürütülür.
Ardından, eşzamanlı sürümdeki gibi “Generate primes” düğmesine bir click olay işleyicisi (event handler) ekliyoruz. Ancak artık generatePrimes() fonksiyonunu çağırmak yerine, worker.postMessage() kullanarak çalışana bir mesaj gönderiyoruz. Bu mesaj bir argüman alabilir ve bu durumda iki özellik içeren bir JSON nesnesi geçiriyoruz:
command: çalışanın yapmasını istediğimiz şeyi tanımlayan bir dize (çalışanımız birden fazla şey yapabilirse diye)
quota: üretilecek asal sayı adedi.
Ardından çalışana bir message olay işleyicisi ekliyoruz. Bu, çalışanın işini bitirdiğinde bize haber vermesini ve ortaya çıkan verileri iletmesini sağlamak içindir. İşleyicimiz, mesajın data özelliğindeki veriyi alır ve çıktı öğesine yazar (veri tam olarak quota ile aynıdır, dolayısıyla bu biraz anlamsızdır; ancak ilkeyi gösterir).
Son olarak, “Reload” düğmesi için click olay işleyicisini gerçekleştiriyoruz. Bu, eşzamanlı sürümdekiyle tamamen aynıdır.
Şimdi çalışan koduna geçelim. Aşağıdaki kodu “generate.js” dosyasına kopyalayın:
```js
// Ana iş parçacığından gelen mesajları dinle.
// Mesaj komutu "generate" ise `generatePrimes()` fonksiyonunu çağır
addEventListener("message", (message) => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

// Asal sayıları üret (çok verimsiz bir biçimde)
function generatePrimes(quota) {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  // İşimiz bittiğinde, ana iş parçacığına, ürettiğimiz asal sayı adedini
  // içeren bir mesaj gönder.
  postMessage(primes.length);
}
Bunun, ana betik çalışanı oluşturur oluşturmaz çalıştığını unutmayın.
Çalışanın yaptığı ilk şey, ana betikten gelen mesajları dinlemeye başlamaktır. Bunu, bir çalışanda genel (global) bir fonksiyon olan addEventListener() ile yapar. message olay işleyicisinin içinde, olayın data özelliği, ana betikten geçirilen argümanın bir kopyasını içerir. Ana betik generate komutunu geçirdiyse, mesaj olayından gelen quota değerini geçirerek generatePrimes() fonksiyonunu çağırırız.
generatePrimes() fonksiyonu eşzamanlı sürümle aynıdır; tek fark, bir değer döndürmek yerine işimiz bittiğinde ana betiğe bir mesaj göndermemizdir. Bunun için, tıpkı addEventListener() gibi bir çalışanda genel bir fonksiyon olan postMessage() fonksiyonunu kullanırız. Daha önce gördüğümüz gibi ana betik bu mesajı dinliyor ve mesaj alındığında DOM’u güncelleyecektir.
Not: Bu siteyi çalıştırmak için yerel bir web sunucusu çalıştırmanız gerekir, çünkü file:// URL’lerinin çalışan yüklemesine izin verilmez. Nasıl yapılacağını öğrenmek için Yerel bir test sunucusunu nasıl kurarsınız? bölümüne bakın. Bunu yaptıktan sonra “Generate primes” düğmesine tıklayabilmeli ve ana sayfanızın yanıt vermeye devam ettiğini görebilmelisiniz.
Örneği oluştururken ya da çalıştırırken herhangi bir sorunla karşılaşırsanız, tamamlanmış sürümü inceleyebilir ve canlı olarak deneyebilirsiniz.
Diğer çalışan türleri
Az önce oluşturduğumuz çalışan, özel çalışan (dedicated worker) olarak adlandırılan türdendir. Bu, tek bir betik örneği tarafından kullanıldığı anlamına gelir.
Yine de başka çalışan türleri de vardır:
Paylaşılan çalışanlar (shared worker), farklı pencerelerde çalışan birkaç farklı betik tarafından paylaşılabilir.
Hizmet çalışanları (service worker), vekil sunucular gibi davranarak kaynakları önbelleğe alır; böylece web uygulamaları kullanıcı çevrimdışıyken de çalışabilir. Aşamalı Web Uygulamalarının (Progressive Web Apps) temel bir bileşenidir.
Özet
Bu makalede, bir web uygulamasının görevleri ayrı bir iş parçacığına devretmesini sağlayan web çalışanlarını tanıttık. Ana iş parçacığı ve çalışan hiçbir değişkeni doğrudan paylaşmaz; bunun yerine, karşı tarafça message olayları olarak alınan mesajlar göndererek iletişim kurar.
Çalışanlar, ana uygulamayı yanıt verir durumda tutmanın etkili bir yolu olabilir; ancak ana uygulamanın erişebildiği tüm API’lere erişemezler ve özellikle DOM’a erişemezler.
Ayrıca bakın
Web çalışanlarını kullanma
Hizmet çalışanlarını kullanma
Web çalışanları API’si
Önceki
Genel bakış: Eşzamansız JavaScript
Sonraki
Alıştırma: Animasyonları sıralama
Önceki
Genel bakış: Eşzamansız JavaScript
Bu alıştırmada, bir dizi animasyonu sırayla oynatması için bir sayfayı güncelleyeceksiniz. Bunu yapmak için Sözler (Promise) nasıl kullanılır makalesinde öğrendiğimiz tekniklerden bazılarını kullanacaksınız.
Ön koşullar:
JavaScript temellerinin ve söz tabanlı API’lerin nasıl kullanılacağının makul düzeyde anlaşılmış olması.
Hedef:
Söz tabanlı API’lerin nasıl kullanılacağının anlaşılıp anlaşılmadığını sınamak.

Bu makalede
Başlangıç noktası
Proje özeti
Tamamlanacak adımlar
Başlangıç noktası
https://github.com/mdn/learning-area/tree/main/javascript/asynchronous/sequencing-animations/start adresindeki dosyaların yerel bir kopyasını oluşturun. Dört dosya içerir:
alice.svg
index.html
main.js
style.css
Düzenlemeniz gereken tek dosya “main.js” dosyasıdır.
“index.html” dosyasını bir tarayıcıda açarsanız, çapraz biçimde dizilmiş üç görsel göreceksiniz:
*[Görsel: MDN orijinal makalesindeki ilgili ekran görüntüsüne bakınız.]*
Görseller, Web Animations API’sini kullanma rehberimizden alınmıştır.
Not: Takılırsanız, iletişim kanallarımızdan birinden bize ulaşabilirsiniz.
Proje özeti
Bu sayfayı, üç görselin her birine birbiri ardına bir animasyon uygulayacak şekilde güncellemek istiyoruz. Yani birincisi bittiğinde ikincisini, ikincisi bittiğinde de üçüncüsünü canlandıracağız.
Animasyon zaten “main.js” içinde tanımlıdır: görseli yalnızca döndürür ve kaybolana kadar küçültür.
Sayfanın nasıl çalışmasını istediğimiz konusunda size daha iyi bir fikir vermek için bitmiş örneğe göz atın. Animasyonların yalnızca bir kez çalıştığına dikkat edin: yeniden çalıştırmak için sayfayı yeniden yükleyin.
Tamamlanacak adımlar
İlk görseli canlandırma
Görselleri canlandırmak için Web Animations API’sini, özellikle de element.animate() yöntemini kullanıyoruz.
“main.js” dosyasını, şu şekilde bir alice1.animate() çağrısı ekleyerek güncelleyin:
```
```js
const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");

alice1.animate(aliceTumbling, aliceTiming);
Sayfayı yeniden yükleyin; ilk görselin dönüp küçüldüğünü görmelisiniz.
Tüm görselleri canlandırma
Sırada, alice1 bittiğinde alice2 görselini, alice2 bittiğinde de alice3 görselini canlandırmak var.
animate() yöntemi bir Animation nesnesi döndürür. Bu nesnenin, animasyonun oynatılması bittiğinde yerine getirilen bir Promise olan finished özelliği vardır. Dolayısıyla bir sonraki animasyonu ne zaman başlatacağımızı bilmek için bu sözü kullanabiliriz.
Bunu gerçekleştirmenin birkaç farklı yolunu denemenizi istiyoruz; böylece sözleri kullanmanın farklı yollarını pekiştirebilirsiniz.
Önce, çalışan ama geri çağrıları (callback) kullanmayı ele aldığımız bölümde gördüğümüz “geri çağrı cehenneminin” söz sürümü sorununa sahip bir şey gerçekleştirin.
Ardından, bunu bir söz zinciri (promise chain) olarak gerçekleştirin. Bunu yazmanın birkaç farklı yolu olduğuna dikkat edin; çünkü bir ok fonksiyonu için kullanabileceğiniz farklı biçimler vardır. Farklı biçimleri deneyin. Hangisi en özlü? Hangisini en okunabilir buluyorsunuz?
Son olarak, bunu async ve await kullanarak gerçekleştirin.
element.animate() yönteminin bir Promise döndürmediğini, bunun yerine finished özelliği bir Promise olan bir Animation nesnesi döndürdüğünü unutmayın.
Önceki
Genel bakış: Eşzamansız JavaScript


