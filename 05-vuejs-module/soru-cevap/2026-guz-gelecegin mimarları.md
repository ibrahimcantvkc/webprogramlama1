Yasal Uyarı: Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında
tamamen eğitim amaçlı hazırlanmıştır. Orijinal dokümantasyon kaynakları (MDN Web
Docs vb.) kendi orijinal lisanslarına (CC BY-SA) tabidir. Bu çalışmanın hiçbir ticari amacı
yoktur.


Soru-Cevap: vue.js modules
- (Kurulum, Modern SPA ve Temeller): Quick Start & Creating a Vue Application (Kurulum ve Uygulama Oluşturma), Template Syntax (Şablon Sözdizimi),
Components Basics (Bileşenlere Giriş)

Takım adı: Gelecegin mimarları

Ders: web programlama 1

Modül: 09 - vue.js modules(1. takım)

Sorumlu:yunus sezgi (@yunus-sezgi34)


Bölüm 1: Sorular ve Cevaplar

soru 1— Modül : Quick Start & Creating a Vue Application

Vue.js resmi dokümantasyonuna ve modern web geliştirme standartlarına göre, yerel geliştirme ortamında modern ve ölçeklenebilir bir Single-Page
Application (SPA) projesi başlatmak için hangi modern yapı aracı (build tool) ve resmi komut tercih edilmelidir? Bu komutun arkasındaki temel mimari
amaç nedir?

Cevap: Vue.js ekosisteminde modern bir SPA projesi başlatmak için Vite altyapısını kullanan npm create vue@latest komutu tercih edilir. Bu komutun
temel mimari amacı; geliştiriciye projenin başında TypeScript desteği, Vue Router (sayfa yönlendirme), Pinia (durum yönetimi), Vitest (test araçları) gibi
modern ekosistem araçlarını interaktif bir sihirbaz aracılığıyla tek seferde ve hatasız bir şekilde entegre etme imkanı sunmaktır. Vite, geleneksel
bundler'lara kıyasla yerel geliştirme ortamında modül yüklemeyi çok daha hızlı hale getiren Native ESM tabanlı modern bir yapı aracıdır.

Soru 2- Modül:Creating a Vue Application

Aşağıdaki Vue.js başlatma kod bloğunu inceleyiniz. createApp fonksiyonu ile oluşturulan temel uygulama örneğinin (application instance) tarayıcı
DOM'unda görünür hale gelmesi ve aktifleşmesi için hangi özel metodun çağrılması gerekir ve bu metod parametre olarak ne alır?

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

// Uygulamanın ekranda görünmesi için buraya ne eklenmelidir?

Cevap: Kod bloğunun düzgün çalışması ve uygulamanın ekranda render edilebilmesi için kodun sonuna .mount('#app') metodu eklenmelidir. Bu metod,
HTML tarafında (örneğin index.html içinde) Vue uygulamasının enjekte edileceği hedef kök elementin CSS seçicisini (genellikle #app ID'sine sahip div
elemanını) parametre olarak alır. createApp(App) ile bellek üzerinde hazırlanan uygulama örneği, .mount() metodu çağrılmadığı sürece gerçek DOM ile
bağ kurulamaz ve kullanıcı arayüzünde görünür hale gelemez.

Soru3-Modül:Template Syntax (Raw HTML)

Vue.js şablonlarında standart metin verilerini ekrana yansıtmak için çift süslü parantez ({{ }}) sözdizimi kullanılır ve bu veriler güvenlik amacıyla varsayılan
olarak düz metin (text) olarak işlenir. Ancak dinamik olarak gelen bir içeriğin tarayıcı tarafından düz metin yerine doğrudan gerçek bir HTML etiketi
olarak yorumlanması ve render edilmesi gerekiyorsa hangi özel direktif kullanılmalıdır?

Cevap: Vue şablonlarında verileri ham HTML biçiminde (örneğin <span style="color: red">Metin</span> gibi etiketleri parse ederek) ekrana yansıtmak
için v-html direktifi kullanılmalıdır. Çift süslü parantezler ({{ }}) verileri string (düz metin) olarak ele alıp potansiyel XSS saldırılarına karşı koruma
sağlarken, v-html direktifi verilen string içeriği doğrudan DOM'un HTML içeriği (innerHTML) olarak günceller. Bu nedenle güvenilir olmayan dış kaynaklı
verilerde v-html kullanırken dikkatli olunmalıdır.

Soru4- Modül:Template Syntax (Attribute Bindings)

Vue.js şablon sözdiziminde (Template Syntax) HTML niteliklerine dinamik veri bağlarken (attribute binding), değişken adı ile niteliğin adı birebir aynı
olduğunda geliştiricilere kod tekrarından kaçınmak için sunulan sözdizimi optimizasyonunun (same-name shorthand) teknik mantığı ve avantajı nedir?

Cevap: Bu özelliğe same-name shorthand (aynı isim kısaltması) adı verilir. JavaScript ve modern ECMAScript standartlarındaki nesne anahtarı
kısaltmalarına benzer şekilde, eğer bağlanacak değişkenin adı ile HTML niteliğinin adı tamamen aynıysa (örneğin id değişkenini id niteliğine bağlamak
gibi), değer kısmını tekrar yazmaya gerek kalmadan sadece niteliği iki nokta üst üste ile (:id) yazmak yeterli olur. Bu optimizasyon, geliştiricilere büyük
kod tabanlarında gereksiz tekrarlardan (redundancy) kaçınma, kod satırlarını kısaltma ve okunabilirliği (clean code) artırma konusunda büyük bir
avantaj sağlar.

Soru5- Modül:Components Basics

Bileşen tabanlı mimarilerde (Component Basics) üst bileşenden (parent component) alt bileşene (child component) tek yönlü dinamik veri akışı (props
down) sağlanır. Bir alt bileşenin, dışarıdan gelebilecek title isimli metinsel veriyi güvenli ve tip güvenli bir şekilde karşılayabilmesi için <script setup>
bloğu içerisinde kullanılan derleme zamanı makrosu (compiler macro) nedir? Örnek kod ile açıklayınız?

Cevap: Bu işlem için Vue 3 ile gelen ve dışarıdan herhangi bir import tanımı yapmaya gerek duymadan doğrudan kullanılabilen defineProps derleme
zamanı makrosu kullanılır. defineProps, alt bileşenin hangi prop'ları kabul edeceğini tanımlar ve veri akışını denetler. <script setup> içerisindeki tipik
kullanım biçimi şu şekildedir:

defineProps({

title: {

type: String,

required: true

}

})

Bu sayede üst bileşenden aktarılan title verisi alt bileşen içerisinde güvenle kullanılabilir hale gelir.
