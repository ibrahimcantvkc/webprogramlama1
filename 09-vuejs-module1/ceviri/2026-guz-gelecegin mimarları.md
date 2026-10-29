Uyarı: Bu içerik, SCÜ Şarkışla UBYO Web Programlama I dersi kapsamında tamamen eğitim amaçlı çevrilmiş ve derlenmiştir. Orijinal dokümantasyon kaynakları (MDN Web Docs, Vue.js, Three.js vb.) kendi orijinal lisanslarına (CC-BY-SA, MIT) tabidir. Bu çalışmanın hiçbir ticari amacı yoktur.

# Hızlı Başlangıç (Quick Start)

**Resmî kaynak:** [https://vuejs.org/guide/quick-start.html](https://vuejs.org/guide/quick-start.html)

## Vue'yu Çevrim İçi Deneyin

Vue'yu hızlıca tanımak ve nasıl çalıştığını görmek için doğrudan [Vue Playground](https://play.vuejs.org/) üzerinde deneyebilirsiniz.

Herhangi bir derleme adımı olmadan, yalnızca HTML kullanarak çalışmak istiyorsanız başlangıç noktası olarak [JSFiddle](https://jsfiddle.net/) kullanabilirsiniz.

Node.js ve derleme araçları kavramlarına zaten aşinaysanız tarayıcınız üzerinden eksiksiz bir proje kurulumunu [StackBlitz](https://stackblitz.com/) üzerinde de deneyebilirsiniz.

Önerilen kurulumu adım adım öğrenmek için ilk Vue uygulamanızı nasıl çalıştıracağınızı, düzenleyeceğinizi ve yayımlayacağınızı gösteren etkileşimli [Scrimba eğitimini](https://scrimba.com/) izleyebilirsiniz.

---

## Vue Uygulaması Oluşturma (Creating a Vue Application)

### Ön Koşullar

- Komut satırını kullanmaya aşina olmak.

- Node.js'in `^22.18.0 || >=24.12.0` sürümlerinden birini yüklemek.

Bu bölümde, kendi bilgisayarınızda bir Vue Tek Sayfa Uygulamasının (Single Page Application - SPA) nasıl oluşturulacağını öğreneceğiz. Oluşturulan proje, Vite tabanlı bir derleme yapılandırması kullanacak ve Vue Tek Dosyalı Bileşenlerini (Single-File Components - SFC) kullanmamıza olanak sağlayacaktır.

Node.js'in güncel bir sürümünün yüklü olduğundan ve komut satırında bulunduğunuz çalışma dizininin projeyi oluşturmak istediğiniz dizin olduğundan emin olun.

Komut satırında aşağıdaki komutu çalıştırın. Komutun başındaki `$` işaretini yazmayın.

### Proje Oluşturma

Aşağıdaki örnekte npm kullanılmıştır. Vue projesi oluşturmak için pnpm, yarn veya bun gibi alternatif paket yöneticileri de kullanılabilir.

```sh

npm create vue@latest


```

Bu komut, Vue için resmî proje oluşturma aracı olan `create-vue` paketini yükler ve çalıştırır.

Ardından TypeScript ve test desteği gibi isteğe bağlı özellikleri seçmeniz için bazı sorular gösterilir:

```text

✔ Project name: … <your-project-name>

✔ Add TypeScript? … No / Yes

✔ Add JSX Support? … No / Yes

✔ Add Vue Router for Single Page Application development? … No / Yes

✔ Add Pinia for state management? … No / Yes

✔ Add Vitest for Unit testing? … No / Yes

✔ Add an End-to-End Testing Solution? … No / Cypress / Nightwatch / Playwright

✔ Add ESLint for code quality? … No / Yes

✔ Add Prettier for code formatting? … No / Yes

✔ Add Vue DevTools 7 extension for debugging? (experimental) … No / Yes



Scaffolding project in ./<your-project-name>...

Done.


```

Bir seçeneğin ne işe yaradığından emin değilseniz şimdilik Enter tuşuna basarak varsayılan seçeneği, yani `No` seçeneğini tercih edebilirsiniz.

Proje oluşturulduktan sonra bağımlılıkları yüklemek ve geliştirme sunucusunu başlatmak için aşağıdaki komutları çalıştırın:

```sh

cd <your-project-name>

npm install

npm run dev


```

Bu adımlardan sonra ilk Vue projeniz çalışıyor olmalıdır.

Oluşturulan projedeki örnek bileşenlerin Options API yerine Composition API ve `<script setup>` kullanılarak yazıldığına dikkat edin.

### Ek İpuçları

- **Önerilen IDE kurulumu:** Visual Studio Code ve [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) uzantısıdır. Başka bir kod düzenleyici kullanıyorsanız IDE desteği bölümünü inceleyebilirsiniz.

- **Araçlar hakkında daha fazla bilgi:** Arka uç (backend) çatılarının entegrasyonu da dâhil olmak üzere daha fazla ayrıntı için [Tooling Guide](https://vuejs.org/guide/scaling-up/tooling.html) sayfasına bakabilirsiniz.

- **Vite hakkında:** Kullanılan temel derleme aracını daha iyi anlamak için [Vite belgelerini](https://vite.dev/guide/) inceleyebilirsiniz.

- **TypeScript hakkında:** TypeScript kullanmayı seçerseniz [TypeScript Kullanım Kılavuzu](https://vuejs.org/guide/typescript/overview.html) sayfasını inceleyebilirsiniz.

### Uygulamayı Üretime Hazırlama

Uygulamanızı yayımlamaya hazır olduğunuzda aşağıdaki komutu çalıştırın:

```sh

npm run build


```

Bu komut, projenin `./dist` dizininde üretime hazır bir derleme oluşturur.

Uygulamanın yayımlanması hakkında daha fazla bilgi için [Production Deployment Guide](https://vuejs.org/guide/best-practices/production-deployment.html) sayfasını inceleyebilirsiniz.

**Sonraki Adımlar:** Vue belgelerindeki bir sonraki bölüme geçebilirsiniz.

---

## CDN Üzerinden Vue Kullanımı (Using Vue from CDN)

Vue'yu bir CDN üzerinden doğrudan bir `<script>` etiketi aracılığıyla kullanabilirsiniz:

```html

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>


```

Bu örnekte `unpkg` kullanılmıştır. Ancak npm paketlerini sunan `jsdelivr` veya `cdnjs` gibi başka CDN hizmetlerini de kullanabilirsiniz.

İsterseniz bu dosyayı indirip kendi sunucunuz üzerinden de sunabilirsiniz.

Vue bir CDN üzerinden kullanıldığında herhangi bir **derleme adımı (build step)** gerekmez. Bu durum kurulumu oldukça basitleştirir. Yöntem, statik HTML sayfalarına etkileşim kazandırmak veya Vue'yu bir arka uç çatısıyla birlikte kullanmak için uygundur.

Ancak bu yöntemde Tek Dosyalı Bileşen (SFC) sözdizimini kullanamazsınız.

## Global Derlemeyi Kullanma (Using the Global Build)

Yukarıdaki bağlantı, Vue'nun global derlemesini yükler. Bu derlemede en üst düzeydeki API'ler, global `Vue` nesnesinin özellikleri olarak sunulur.

Global derlemeyi kullanan tam bir örnek aşağıda verilmiştir:

```html

<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>



<div id="app">{{ message }}</div>



<script>

  const { createApp, ref } = Vue



  createApp({

    setup() {

      const message = ref('Hello vue!')

      return {

        message

      }

    }

  }).mount('#app')

</script>


```

**Çevrim içi örnek:** [CodePen Demo](https://codepen.io/)

> **İpucu:** Rehber boyunca Composition API için verilen örneklerin çoğunda, derleme araçları gerektiren `<script setup>` sözdizimi kullanılacaktır. Composition API'yi derleme adımı olmadan kullanmak istiyorsanız `setup()` seçeneğinin kullanımını inceleyin.

---

## ES Modülü Derlemesini Kullanma (Using the ES Module Build)

Belgelerin geri kalanında ağırlıklı olarak ES modülleri sözdizimi kullanılacaktır.

Günümüzdeki modern tarayıcıların çoğu ES modüllerini yerel olarak destekler. Bu nedenle Vue'yu yerel ES modülleri aracılığıyla bir CDN üzerinden aşağıdaki gibi kullanabiliriz:

```html

<div id="app">{{ message }}</div>



<script type="module">

  import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'



  createApp({

    setup() {

      const message = ref('Hello Vue!')

      return {

        message

      }

    }

  }).mount('#app')

</script>


```

Burada `<script type="module">` kullandığımıza dikkat edin. Ayrıca içe aktarılan CDN adresi, Vue'nun ES modülleri için hazırlanmış derlemesini göstermektedir.

**Çevrim içi örnek:** [CodePen Demo](https://codepen.io/)

---

## Import Maps Özelliğini Etkinleştirme (Enabling Import Maps)

Yukarıdaki örnekte Vue'yu içe aktarmak için tam bir CDN adresi kullanıyoruz. Ancak belgelerin geri kalanında aşağıdaki gibi kodlarla karşılaşacaksınız:

```js

import { createApp } from 'vue'


```

Tarayıcıya `vue` modülünün nerede bulunduğunu **Import Maps (İçe Aktarma Haritaları)** kullanarak bildirebiliriz:

```html

<script type="importmap">

  {

    "imports": {

      "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

    }

  }

</script>



<div id="app">{{ message }}</div>



<script type="module">

  import { createApp, ref } from 'vue'



  createApp({

    setup() {

      const message = ref('Hello Vue!')

      return {

        message

      }

    }

  }).mount('#app')

</script>


```

**Çevrim içi örnek:** [CodePen Demo](https://codepen.io/)

Import Map içerisine diğer bağımlılıklar için de kayıtlar ekleyebilirsiniz. Ancak bu kayıtların kullanmayı amaçladığınız kütüphanenin ES modülleri sürümünü göstermesine dikkat edin.

### Import Maps Tarayıcı Desteği

Import Maps, tarayıcılara görece yeni eklenmiş bir özelliktir. Bu nedenle kullandığınız tarayıcının bu özelliği desteklediğinden emin olun.

Özellikle Safari'de bu özellik yalnızca **Safari 16.4 ve sonraki sürümlerde** desteklenir.

---

## Üretimde Kullanıma İlişkin Notlar (Notes on Production Use)

Buraya kadar verilen örneklerde Vue'nun geliştirme derlemesi kullanılmıştır.

Vue'yu üretim ortamında bir CDN üzerinden kullanmayı planlıyorsanız [Production Deployment Guide](https://vuejs.org/guide/best-practices/production-deployment.html) sayfasını incelemelisiniz.

Vue'yu bir derleme sistemi olmadan kullanmak mümkün olsa da alternatif olarak `vuejs/petite-vue` projesini değerlendirebilirsiniz.

Bu yaklaşım, geçmişte `jquery/jquery` veya günümüzde `alpinejs/alpine` gibi kütüphanelerin tercih edilebildiği kullanım senaryoları için daha uygun olabilir.

---

## Modülleri Ayrı Dosyalara Bölme (Splitting Up the Modules)

Rehberde ilerledikçe kodumuzu daha kolay yönetebilmek için farklı JavaScript dosyalarına ayırmamız gerekebilir.

Örneğin aşağıdaki gibi bir yapı oluşturabiliriz.

### index.html

```html

<div id="app"></div>



<script type="module">

  import { createApp } from 'vue'

  import MyComponent from './my-component.js'



  createApp(MyComponent).mount('#app')

</script>


```

### my-component.js

```js

import { ref } from 'vue'



export default {

  setup() {

    const count = ref(0)

    return { count }

  },

  template: `<div>Count is: {{ count }}</div>`

}


```

Yukarıdaki `index.html` dosyasını doğrudan tarayıcıda açarsanız bir hata ile karşılaşırsınız. Bunun nedeni, ES modüllerinin tarayıcının yerel bir dosyayı açarken kullandığı `file://` protokolü üzerinden çalışamamasıdır.

Güvenlik nedenleriyle ES modülleri yalnızca `http://` protokolü üzerinden çalışabilir. Tarayıcılar web sayfalarını da bu protokol aracılığıyla açar.

Bu nedenle ES modüllerini kendi bilgisayarımızda çalıştırabilmek için `index.html` dosyasını yerel bir HTTP sunucusu üzerinden sunmamız gerekir.

### Yerel HTTP Sunucusu Başlatma

Öncelikle bilgisayarınızda Node.js'in yüklü olduğundan emin olun. Ardından HTML dosyanızın bulunduğu dizinde komut satırını açıp aşağıdaki komutu çalıştırın:

```sh

npx serve


```

Statik dosyaları doğru MIME türleriyle sunabilen başka bir HTTP sunucusu da kullanabilirsiniz.

İçe aktarılan bileşenin şablonunun bir JavaScript dizgesi içinde tanımlandığını fark etmiş olabilirsiniz.

Visual Studio Code kullanıyorsanız bu dizgeler için sözdizimi renklendirmesi elde etmek amacıyla `es6-string-html` uzantısını yükleyebilir ve dizgelerin başına `/*html*/` yorumunu ekleyebilirsiniz.

---

## Vue ile Kullanılabilen Çatılar (Frameworks)

Vue ile sunucu tarafında işleme (Server-Side Rendering - SSR) ve başka özellikleri kutudan çıktığı gibi destekleyen çeşitli çatılar bulunmaktadır:

- [Nuxt](https://nuxt.com/)

- [Vike](https://vike.dev/)

- [Astro](https://astro.build/)

- [Quasar](https://quasar.dev/)

---

## Kaynaklar

- [Vue.js — Quick Start](https://vuejs.org/guide/quick-start.html)

- [Vue.js — Tooling Guide](https://vuejs.org/guide/scaling-up/tooling.html)

- [Vue.js — TypeScript Kullanımı](https://vuejs.org/guide/typescript/overview.html)

- [Vue.js — Production Deployment Guide](https://vuejs.org/guide/best-practices/production-deployment.html)

- [Vue Playground](https://play.vuejs.org/)

# Vue Uygulaması Oluşturma (Creating a Vue Application)

## Uygulama Örneği (The Application Instance)

Her Vue uygulaması, [`createApp`](https://vuejs.org/api/application#createapp) fonksiyonuyla yeni bir **uygulama örneği (application instance)** oluşturularak başlatılır:

**JavaScript**

```js

import { createApp } from 'vue'



const app = createApp({

  /* kök bileşen seçenekleri */

})


```

## Kök Bileşen (The Root Component)

`createApp` fonksiyonuna gönderdiğimiz nesne aslında bir bileşendir. Her uygulama, alt bileşenler içerebilen bir **kök bileşene (root component)** ihtiyaç duyar.

Tek Dosyalı Bileşenler (Single-File Components) kullanıyorsanız kök bileşeni genellikle başka bir dosyadan içe aktarırız:

**JavaScript**

```js

import { createApp } from 'vue'

// App kök bileşenini tek dosyalı bir bileşenden içe aktar.

import App from './App.vue'



const app = createApp(App)


```

Bu rehberdeki birçok örnek yalnızca tek bir bileşene ihtiyaç duysa da gerçek uygulamaların çoğu, iç içe geçmiş ve yeniden kullanılabilir bileşenlerden oluşan bir ağaç yapısında düzenlenir. Örneğin, bir yapılacaklar listesi (Todo) uygulamasının bileşen ağacı şöyle görünebilir:

```text

App (kök bileşen)

├─ TodoList

│  └─ TodoItem

│     ├─ TodoDeleteButton

│     └─ TodoEditButton

└─ TodoFooter

   ├─ TodoClearButton

   └─ TodoStatistics


```

Rehberin ilerleyen bölümlerinde birden fazla bileşenin nasıl tanımlanacağını ve birlikte nasıl kullanılacağını ele alacağız. Bundan önce, tek bir bileşenin içinde neler olduğuna odaklanacağız.

## Uygulamayı DOM'a Yerleştirme (Mounting the App)

Bir uygulama örneği, `.mount()` metodu çağrılana kadar herhangi bir şey görüntülemez. Bu metot bir **kapsayıcı (container)** parametresi bekler. Bu parametre gerçek bir DOM öğesi veya bir seçici dizesi olabilir:

**HTML**

```html

<div id="app"></div>


```

**JavaScript**

```js

app.mount('#app')


```

Uygulamanın kök bileşeninin içeriği, kapsayıcı öğenin içinde görüntülenir. Kapsayıcı öğenin kendisi uygulamanın bir parçası olarak kabul edilmez.

`.mount()` metodu, tüm uygulama yapılandırmaları ve kaynak kayıtları tamamlandıktan sonra çağrılmalıdır. Ayrıca bu metodun dönüş değerinin, kaynak kaydetme metotlarından farklı olarak uygulama örneği değil, kök bileşen örneği olduğunu unutmayın.

### DOM İçindeki Kök Bileşen Şablonu (In-DOM Root Component Template)

Kök bileşenin şablonu genellikle bileşenin kendisinde bulunur. Ancak şablonu ayrı olarak sağlamak da mümkündür. Bunun için şablon doğrudan uygulamanın yerleştirileceği kapsayıcının içine yazılabilir:

**HTML**

```html

<div id="app">

  <button @click="count++">{{ count }}</button>

</div>


```

**JavaScript**

```js

import { createApp } from 'vue'



const app = createApp({

  data() {

    return {

      count: 0

    }

  }

})



app.mount('#app')


```

Kök bileşende önceden bir `template` seçeneği tanımlanmamışsa Vue, kapsayıcının `innerHTML` içeriğini otomatik olarak şablon olarak kullanır.

DOM içindeki şablonlar genellikle [**derleme adımı olmadan Vue kullanılan**](https://vuejs.org/guide/quick-start#using-vue-from-cdn) uygulamalarda tercih edilir. Ayrıca kök şablonun sunucu tarafından dinamik olarak oluşturulduğu sunucu taraflı çerçevelerle birlikte de kullanılabilir.

## Uygulama Yapılandırmaları (App Configurations)

Uygulama örneği, uygulama düzeyindeki bazı seçenekleri yapılandırmamızı sağlayan bir `.config` nesnesi sunar. Örneğin, alt bileşenlerin tamamında meydana gelen hataları yakalayan uygulama düzeyinde bir hata işleyicisi tanımlanabilir:

**JavaScript**

```js

app.config.errorHandler = (err) => {

  /* hatayı işle */

}


```

Uygulama örneği, uygulama kapsamında kullanılacak kaynakları kaydetmek için de çeşitli metotlar sağlar. Örneğin, bir bileşen şu şekilde kaydedilebilir:

**JavaScript**

```js

app.component('TodoDeleteButton', TodoDeleteButton)


```

Bu işlem, `TodoDeleteButton` bileşenini uygulamanın herhangi bir yerinde kullanılabilir hâle getirir. Bileşenlerin ve diğer kaynak türlerinin kaydedilmesini rehberin ilerleyen bölümlerinde ele alacağız. Ayrıca uygulama örneği API'lerinin tamamına [**API referansından**](https://vuejs.org/api/application) ulaşabilirsiniz.

**Uygulamayı DOM'a yerleştirmeden önce tüm uygulama yapılandırmalarını tamamladığınızdan emin olun!**

## Birden Fazla Uygulama Örneği (Multiple Application Instances)

Aynı sayfada yalnızca tek bir uygulama örneği kullanmak zorunda değilsiniz. `createApp` API'si, her biri kendine ait yapılandırma ve genel kaynak kapsamına sahip birden fazla Vue uygulamasının aynı sayfada birlikte çalışmasına olanak tanır:

**JavaScript**

```js

const app1 = createApp({

  /* ... */

})

app1.mount('#container-1')



const app2 = createApp({

  /* ... */

})

app2.mount('#container-2')


```

Sunucu tarafından oluşturulmuş HTML'yi geliştirmek için Vue kullanıyorsanız ve Vue'nun yalnızca büyük bir sayfanın belirli bölümlerini kontrol etmesini istiyorsanız tek bir Vue uygulama örneğini sayfanın tamamına yerleştirmekten kaçının. Bunun yerine, birden fazla küçük uygulama örneği oluşturun ve her birini sorumlu olduğu HTML öğesine yerleştirin.

# Şablon Sözdizimi (Template Syntax)

[Scrimba'da etkileşimli video dersini izleyin](https://scrimba.com/)

Vue, görüntülenen DOM'u bileşen örneğinin verilerine bildirimsel olarak bağlamayı sağlayan HTML tabanlı bir şablon sözdizimi kullanır. Tüm Vue şablonları, standartlara uygun tarayıcılar ve HTML ayrıştırıcıları tarafından çözümlenebilen, sözdizimi açısından geçerli HTML kodlarıdır.

Vue, arka planda şablonları yüksek düzeyde optimize edilmiş JavaScript koduna dönüştürür. Bu işlem, reaktivite sistemiyle birlikte çalışarak uygulamanın durumu değiştiğinde Vue'nun hangi bileşenlerin yeniden görüntülenmesi gerektiğini belirlemesini ve mümkün olan en az DOM değişikliğini yapmasını sağlar.

Sanal DOM (Virtual DOM) kavramlarına aşinaysanız ve JavaScript'in doğrudan gücünü kullanmayı tercih ediyorsanız şablonlar yerine doğrudan render fonksiyonları da yazabilirsiniz. İsteğe bağlı olarak JSX desteğinden de yararlanabilirsiniz. Ancak render fonksiyonlarının şablonlarla aynı düzeyde derleme zamanı optimizasyonlarından yararlanmadığını unutmayın.

## Metin Araya Yerleştirme (Text Interpolation)

Veri bağlamanın en temel biçimi, çift süslü parantezler kullanılan "Mustache" sözdizimiyle metin araya yerleştirmedir:

**Şablon**

```html

<span>Mesaj: {{ msg }}</span>


```

Mustache etiketi, ilgili bileşen örneğindeki `msg` özelliğinin değeriyle değiştirilir. `msg` özelliği her değiştiğinde görüntülenen metin de otomatik olarak güncellenir.

## Ham HTML (Raw HTML)

Çift süslü parantezler verileri HTML olarak değil, düz metin olarak yorumlar. Gerçek HTML çıktısı oluşturmak için `v-html` yönergesini kullanmanız gerekir:

**Şablon**

```html

<p>Metin araya yerleştirme kullanımı: {{ rawHtml }}</p>

<p>v-html yönergesinin kullanımı: <span v-html="rawHtml"></span></p>


```

**Görüntülenen sonuç:**

Metin araya yerleştirme kullanımı: `<span style="color: red">This should be red.</span>`

v-html yönergesinin kullanımı: This should be red.

Burada yeni bir kavramla karşılaşıyoruz. `v-html` özelliği bir **yönerge (directive)** olarak adlandırılır. Yönergeler, Vue tarafından sağlanan özel özellikleri belirtmek için `v-` ön ekiyle başlar. Tahmin edebileceğiniz gibi bu yönergeler, görüntülenen DOM üzerinde özel reaktif davranışlar uygular. Bu örnekte, etkin bileşen örneğindeki `rawHtml` özelliğinin değerine göre ilgili öğenin iç HTML içeriğinin güncel tutulmasını istiyoruz.

`span` öğesinin içeriği, düz HTML olarak yorumlanan `rawHtml` özelliğinin değeriyle değiştirilir. Bu içerikteki veri bağlamaları dikkate alınmaz. Vue, metin tabanlı bir şablon motoru olmadığı için `v-html` yönergesi şablon parçalarını birleştirmek amacıyla kullanılmamalıdır. Bunun yerine, kullanıcı arayüzünün yeniden kullanılması ve birleştirilmesi için temel yapı birimi olarak bileşenler tercih edilmelidir.

### Güvenlik Uyarısı

Web sitenizde rastgele HTML içeriğini dinamik olarak görüntülemek oldukça tehlikeli olabilir; çünkü bu durum kolayca XSS (Siteler Arası Betik Çalıştırma) güvenlik açıklarına yol açabilir.

`v-html` yönergesini yalnızca güvenilir içeriklerde kullanın ve kullanıcıların sağladığı içeriklerde asla kullanmayın.

## Özellik Bağlamaları (Attribute Bindings)

Mustache sözdizimi HTML özelliklerinin içinde kullanılamaz. Bunun yerine `v-bind` yönergesini kullanın:

**Şablon**

```html

<div v-bind:id="dynamicId"></div>


```

`v-bind` yönergesi, öğenin `id` özelliğini bileşenin `dynamicId` özelliğiyle eş zamanlı tutar. Bağlanan değer `null` veya `undefined` ise bu özellik görüntülenen öğeden kaldırılır.

### Kısa Yazım (Shorthand)

`v-bind` çok sık kullanıldığı için kendine özgü bir kısa yazıma sahiptir:

**Şablon**

```html

<div :id="dynamicId"></div>


```

`:` ile başlayan özellikler normal HTML'den farklı görünebilir. Ancak `:` karakteri özellik adlarında geçerli bir karakterdir ve Vue tarafından desteklenen tüm tarayıcılar bunu doğru şekilde ayrıştırabilir. Ayrıca bu kısa yazım, son görüntülenen HTML işaretlemesinde ayrı bir özellik olarak görünmez.

Kısa yazımı kullanmak zorunlu değildir; ancak ilerleyen bölümlerde kullanımını öğrendikçe bu yöntemi pratik bulacaksınız.

Rehberin geri kalanındaki kod örneklerinde, Vue geliştiricileri arasında en yaygın kullanım olduğu için kısa yazım tercih edilecektir.

### Aynı Adlı Kısa Yazım (Same-name Shorthand)

**Yalnızca Vue 3.4 ve üzeri sürümlerde desteklenir.**

HTML özelliğinin adı, bağlanan JavaScript değişkeninin adıyla aynıysa özellik değerini yazmadan daha kısa bir sözdizimi kullanılabilir:

**Şablon**

```html

<!-- :id="id" ile aynı anlama gelir -->

<div :id></div>



<!-- Bu kullanım da geçerlidir -->

<div v-bind:id></div>


```

Bu özellik, JavaScript'te nesneler tanımlanırken kullanılan özellik kısa yazımına benzer. Bu özelliğin yalnızca Vue 3.4 ve üzeri sürümlerde kullanılabildiğini unutmayın.

### Boolean Özellikler (Boolean Attributes)

Boolean özellikler, bir HTML öğesinde bulunup bulunmamalarına göre doğru veya yanlış değer ifade edebilen özelliklerdir. Örneğin `disabled`, en sık kullanılan Boolean özelliklerden biridir.

`v-bind` bu durumda biraz farklı çalışır:

**Şablon**

```html

<button :disabled="isButtonDisabled">Buton</button>


```

`isButtonDisabled` doğru kabul edilen bir değere sahipse `disabled` özelliği eklenir. Değer boş bir dize olsa bile özellik eklenir; böylece `<button disabled="">` kullanımıyla tutarlılık sağlanır. Diğer yanlış kabul edilen değerlerde özellik eklenmez.

### Birden Fazla Özelliği Dinamik Olarak Bağlama (Dynamically Binding Multiple Attributes)

Birden fazla HTML özelliğini temsil eden bir JavaScript nesneniz olduğunu varsayalım:

**JavaScript**

```js

const objectOfAttrs = {

  id: 'container',

  class: 'wrapper',

  style: 'background-color:green'

}


```

Bu özellikleri tek bir öğeye bağlamak için `v-bind` yönergesini herhangi bir argüman vermeden kullanabilirsiniz:

**Şablon**

```html

<div v-bind="objectOfAttrs"></div>


```

## JavaScript İfadelerini Kullanma (Using JavaScript Expressions)

Şimdiye kadar şablonlarımızda yalnızca basit özellik anahtarlarına veri bağladık. Ancak Vue, tüm veri bağlamalarının içinde JavaScript ifadelerinin gücünden yararlanmayı destekler:

**Şablon**

```html

{{ number + 1 }}



{{ ok ? 'YES' : 'NO' }}



{{ message.split('').reverse().join('') }}



<div :id="`list-${id}`"></div>


```

Bu ifadeler, geçerli bileşen örneğinin veri kapsamı içinde JavaScript olarak değerlendirilir.

Vue şablonlarında JavaScript ifadeleri şu alanlarda kullanılabilir:

- Metin araya yerleştirmelerinin içinde (Mustache sözdizimi).

- Vue yönergelerinin (`v-` ile başlayan özel özelliklerin) değerlerinde.

### Yalnızca İfadeler (Expressions Only)

Her veri bağlaması yalnızca tek bir ifade içerebilir. İfade, bir değere dönüştürülebilen kod parçasıdır. Bunu kontrol etmenin basit bir yolu, kodun `return` ifadesinden sonra kullanılabilir olup olmadığına bakmaktır.

Bu nedenle aşağıdaki örnekler **çalışmaz**:

**Şablon**

```html

<!-- Bu bir ifade değil, bir deyimdir -->

{{ var a = 1 }}



<!-- Akış kontrolü de çalışmaz; bunun yerine üçlü koşul ifadeleri kullanın -->

{{ if (ok) { return message } }}


```

### Fonksiyonları Çağırma (Calling Functions)

Bir bağlama ifadesinin içinde bileşen tarafından erişilebilir hâle getirilmiş bir metodu çağırmak mümkündür:

**Şablon**

```html

<time :title="toTitleDate(date)" :datetime="date">

  {{ formatDate(date) }}

</time>


```

**İpucu:** Bağlama ifadeleri içinde çağrılan fonksiyonlar, bileşen her güncellendiğinde yeniden çalıştırılır. Bu nedenle verileri değiştirmek veya eşzamansız işlemler başlatmak gibi yan etkilere neden olmamalıdırlar.

### Kısıtlanmış Global Nesnelere Erişim (Restricted Globals Access)

Şablon ifadeleri bir güvenlik sınırlandırması içinde çalışır ve yalnızca sınırlı sayıdaki global nesneye erişebilir. Bu liste, `Math` ve `Date` gibi yaygın kullanılan yerleşik global nesneleri içerir.

Listede açıkça yer almayan global nesnelere, örneğin `window` üzerine kullanıcı tarafından eklenen özelliklere, şablon ifadelerinden erişilemez.

Ancak tüm Vue ifadelerinde kullanılmak üzere ek global özellikleri `app.config.globalProperties` aracılığıyla açıkça tanımlayabilirsiniz.

## Yönergeler (Directives)

Yönergeler, `v-` ön ekiyle başlayan özel HTML özellikleridir. Vue, yukarıda tanıttığımız `v-html` ve `v-bind` dâhil olmak üzere birçok yerleşik yönerge sunar.

Yönerge değerlerinin tek bir JavaScript ifadesi olması beklenir. Bunun istisnaları, ilerleyen bölümlerde ele alınacak olan `v-for`, `v-on` ve `v-slot` yönergeleridir.

Bir yönergenin görevi, ifadesinin değeri değiştiğinde DOM üzerinde gerekli güncellemeleri reaktif olarak uygulamaktır. Örneğin `v-if` yönergesini ele alalım:

**Şablon**

```html

<p v-if="seen">Şimdi beni görüyorsun</p>


```

Burada `v-if` yönergesi, `seen` ifadesinin değerinin doğru kabul edilip edilmemesine göre `<p>` öğesini kaldırır veya DOM'a ekler.

### Argümanlar (Arguments)

Bazı yönergeler, yönerge adından sonra iki nokta (`:`) ile belirtilen bir **argüman** alabilir. Örneğin `v-bind` yönergesi, bir HTML özelliğini reaktif olarak güncellemek için kullanılır:

**Şablon**

```html

<a v-bind:href="url"> ... </a>



<!-- Kısa yazım -->

<a :href="url"> ... </a>


```

Burada `href`, `v-bind` yönergesine öğenin `href` özelliğini `url` ifadesinin değerine bağlamasını söyleyen argümandır. Kısa yazımda argümandan önce gelen `v-bind:` bölümü tek bir karaktere, yani `:` işaretine indirgenir.

Bir başka örnek, DOM olaylarını dinleyen `v-on` yönergesidir:

**Şablon**

```html

<a v-on:click="doSomething"> ... </a>



<!-- Kısa yazım -->

<a @click="doSomething"> ... </a>


```

Buradaki argüman, dinlenecek olayın adıdır: `click`. `v-on` yönergesinin karşılık gelen kısa yazımı `@` karakteridir. Olay yönetimini ilerleyen bölümlerde daha ayrıntılı ele alacağız.

### Dinamik Argümanlar (Dynamic Arguments)

Bir yönerge argümanını köşeli parantez içine alarak JavaScript ifadesi kullanmak da mümkündür:

**Şablon**

```html

<!--

Argüman ifadesiyle ilgili bazı kısıtlamalar vardır.

Bunlar aşağıdaki dinamik argüman değeri ve sözdizimi

kısıtlamaları bölümlerinde açıklanmaktadır.

-->

<a v-bind:[attributeName]="url"> ... </a>



<!-- Kısa yazım -->

<a :[attributeName]="url"> ... </a>


```

Burada `attributeName`, dinamik olarak bir JavaScript ifadesi şeklinde değerlendirilir ve ortaya çıkan değer argümanın son değeri olarak kullanılır.

Örneğin, bileşen örneğinizde `attributeName` adlı bir veri özelliğinin değeri `"href"` ise bu bağlama `v-bind:href` ile aynı şekilde çalışır.

Benzer şekilde dinamik argümanları, bir olay işleyicisini dinamik bir olay adına bağlamak için de kullanabilirsiniz:

**Şablon**

```html

<a v-on:[eventName]="doSomething"> ... </a>



<!-- Kısa yazım -->

<a @[eventName]="doSomething"> ... </a>


```

Bu örnekte `eventName` değerinin `"focus"` olduğu durumda `v-on:[eventName]`, `v-on:focus` ile aynı anlama gelir.

### Dinamik Argüman Değeri Kısıtlamaları (Dynamic Argument Value Constraints)

Dinamik argümanların `null` dışında bir dizeye (string) dönüşmesi beklenir. Özel `null` değeri, bağlamayı açıkça kaldırmak için kullanılabilir. Dize olmayan diğer değerler bir uyarıya neden olur.

### Dinamik Argüman Sözdizimi Kısıtlamaları (Dynamic Argument Syntax Constraints)

Boşluk ve tırnak işaretleri gibi bazı karakterler HTML özellik adlarında geçerli olmadığı için dinamik argüman ifadelerinin belirli sözdizimi kısıtlamaları vardır.

Örneğin aşağıdaki kullanım geçersizdir:

**Şablon**

```html

<!-- Bu kullanım derleyici uyarısına neden olur. -->

<a :['foo' + bar]="value"> ... </a>


```

Karmaşık bir dinamik argüman kullanmanız gerekiyorsa birazdan ele alacağımız hesaplanan bir özellik (computed property) kullanmak daha uygun olabilir.

DOM içi şablonlar, yani doğrudan bir HTML dosyasına yazılan şablonlar kullanılırken anahtar adlarında büyük harflerden de kaçınmalısınız. Bunun nedeni, tarayıcıların HTML özellik adlarını küçük harflere dönüştürmesidir:

**Şablon**

```html

<a :[someAttr]="value"> ... </a>


```

Yukarıdaki kullanım DOM içi şablonlarda `:[someattr]` biçimine dönüştürülür. Bileşeninizde `someattr` yerine `someAttr` adlı bir özellik bulunuyorsa kodunuz çalışmaz. Tek Dosyalı Bileşenlerin içindeki şablonlar bu kısıtlamaya tabi değildir.

### Değiştiriciler (Modifiers)

Değiştiriciler, bir yönergenin özel bir şekilde davranması gerektiğini belirten ve nokta (`.`) ile gösterilen son eklerdir.

Örneğin `.prevent` değiştiricisi, `v-on` yönergesine tetiklenen olay üzerinde `event.preventDefault()` metodunu çağırmasını söyler:

**Şablon**

```html

<form @submit.prevent="onSubmit">...</form>


```

Bu özellikleri incelerken ilerleyen bölümlerde `v-on` ve `v-model` için başka değiştirici örnekleri de göreceksiniz.

Son olarak, yönerge sözdiziminin tamamı şu şekilde görselleştirilebilir:

![Vue Şablon Sözdizimi](gorseller/vue-template-sozdizimi.png)

[Bu sayfayı GitHub üzerinde düzenleyin](https://github.com/vuejs/docs/edit/main/src/guide/essentials/template-syntax.md)

# Bileşen Temelleri (Components Basics)

[Scrimba'da etkileşimli video dersini izleyin](https://scrimba.com/)

Bileşenler, kullanıcı arayüzünü birbirinden bağımsız ve yeniden kullanılabilir parçalara ayırmamızı ve her parçayı ayrı ayrı ele almamızı sağlar. Bir uygulamanın iç içe geçmiş bileşenlerden oluşan bir ağaç yapısı şeklinde düzenlenmesi yaygındır.

![Vue Bileşen Ağacı](gorseller/vue-bilesen-agaci.png)

Bu yapı, yerel HTML öğelerini iç içe yerleştirmeye oldukça benzer. Ancak Vue, her bileşendeki özel içeriği ve mantığı kapsüllememizi sağlayan kendi bileşen modelini uygular. Vue, yerel Web Components teknolojisiyle de uyumlu çalışır. Vue bileşenleri ile yerel Web Components arasındaki ilişkiyi merak ediyorsanız [buradan daha fazla bilgi edinebilirsiniz](https://vuejs.org/guide/extras/web-components.html).

## Bileşen Tanımlama (Defining a Component)

Bir derleme adımı kullanıldığında, her Vue bileşenini genellikle `.vue` uzantılı ayrı bir dosyada tanımlarız. Bu yapıya **Tek Dosyalı Bileşen (Single-File Component - SFC)** denir.

**ButtonCounter.vue**

```vue

<script setup>

import { ref } from 'vue'



const count = ref(0)

</script>



<template>

  <button @click="count++">Bana {{ count }} kez tıkladınız.</button>

</template>


```

Bir derleme adımı kullanılmadığında Vue bileşeni, Vue'ya özgü seçenekler içeren sıradan bir JavaScript nesnesi olarak tanımlanabilir:

**JavaScript**

```js

import { ref } from 'vue'



export default {

  setup() {

    const count = ref(0)

    return { count }

  },

  template: `

    <button @click="count++">

      Bana {{ count }} kez tıkladınız.

    </button>`

  // DOM içindeki bir şablon da hedeflenebilir:

  // template: '#my-template-element'

}


```

Bu örnekte şablon bir JavaScript dizesi olarak yazılmıştır ve Vue tarafından çalışma sırasında derlenir. Ayrıca bir öğeyi gösteren kimlik seçicisi de kullanabilirsiniz. Genellikle yerel `<template>` öğeleri hedeflenir; Vue, bu öğenin içeriğini şablon kaynağı olarak kullanır.

Yukarıdaki örnek tek bir bileşen tanımlar ve bunu bir `.js` dosyasının varsayılan dışa aktarımı olarak sunar. Ancak aynı dosyadan birden fazla bileşeni dışa aktarmak için adlandırılmış dışa aktarımlar da kullanabilirsiniz.

## Bileşen Kullanma (Using a Component)

**İpucu:** Bu rehberin geri kalanında SFC sözdizimini kullanacağız. Derleme adımı kullanılsın veya kullanılmasın, bileşenlerle ilgili temel kavramlar aynıdır. Örnekler bölümünde her iki senaryonun da kullanımını görebilirsiniz.

Bir alt bileşeni kullanmak için onu üst bileşene içe aktarmamız gerekir. Sayaç bileşenimizi `ButtonCounter.vue` adlı bir dosyaya yerleştirdiğimizi varsayalım. Bileşen, dosyanın varsayılan dışa aktarımı olarak sunulur.

**App.vue**

```vue

<script setup>

import ButtonCounter from './ButtonCounter.vue'

</script>



<template>

  <h1>İşte bir alt bileşen!</h1>

  <ButtonCounter />

</template>


```

`<script setup>` kullanıldığında, içe aktarılan bileşenler şablonda otomatik olarak kullanılabilir hâle gelir.

Bir bileşeni genel olarak da kaydedebilirsiniz. Böylece bileşeni içe aktarmaya gerek kalmadan ilgili uygulamadaki tüm bileşenlerde kullanabilirsiniz. Genel ve yerel kayıt yöntemlerinin avantajları ile dezavantajları, Bileşen Kaydı bölümünde ele alınır.

Bileşenler istediğiniz kadar yeniden kullanılabilir:

**Şablon**

```html

<h1>İşte birçok alt bileşen!</h1>

<ButtonCounter />

<ButtonCounter />

<ButtonCounter />


```

[Örneği Playground ortamında deneyin](https://play.vuejs.org/)

Butonlara tıkladığınızda her birinin kendine ait, bağımsız bir sayaç tuttuğunu fark edeceksiniz. Bunun nedeni, bileşeni her kullandığınızda yeni bir bileşen örneğinin oluşturulmasıdır.

SFC dosyalarında, alt bileşenleri yerel HTML öğelerinden ayırmak için **PascalCase** biçimindeki etiket adlarının kullanılması önerilir. Yerel HTML etiket adları büyük-küçük harfe duyarsız olsa da Vue SFC derlenen bir biçim olduğundan burada büyük-küçük harfe duyarlı etiket adları kullanabiliriz. Ayrıca etiketleri `/>` ile kapatabiliriz.

Şablonlarınızı doğrudan DOM içinde, örneğin yerel bir `<template>` öğesinin içeriğinde yazıyorsanız tarayıcının yerel HTML ayrıştırma kuralları uygulanır. Bu durumda bileşenlerde **kebab-case** kullanmalı ve kapatma etiketlerini açıkça yazmalısınız:

**Şablon**

```html

<!-- Bu şablon DOM içine yazılmışsa -->

<button-counter></button-counter>

<button-counter></button-counter>

<button-counter></button-counter>


```

Daha fazla bilgi için DOM içi şablon ayrıştırma kısıtlamaları bölümüne bakabilirsiniz.

## Props ile Veri Aktarma (Passing Props)

Bir blog oluşturduğumuzu düşünelim. Büyük olasılıkla her blog yazısını temsil eden bir bileşene ihtiyaç duyacağız. Tüm blog yazılarının aynı görsel düzene sahip olmasını, ancak farklı içerikler göstermesini isteriz.

Başlığını ve içeriğini göstermek istediğimiz belirli bir yazının verilerini bileşene aktaramıyorsak bu bileşen pek kullanışlı olmaz. İşte bu noktada **props** devreye girer.

Props, bir bileşen üzerinde tanımlanabilen özel özelliklerdir. Blog yazısı bileşenimize bir başlık aktarmak için `defineProps` makrosunu kullanarak bu bileşenin kabul edeceği props listesini tanımlamamız gerekir.

**BlogPost.vue**

```vue

<script setup>

defineProps(['title'])

</script>



<template>

  <h4>{{ title }}</h4>

</template>


```

`defineProps`, yalnızca `<script setup>` içinde kullanılabilen bir derleme zamanı makrosudur ve ayrıca içe aktarılması gerekmez. Tanımlanan props özellikleri şablonda otomatik olarak kullanılabilir hâle gelir.

`defineProps`, bileşene aktarılan tüm props değerlerini içeren bir nesne de döndürür. Böylece gerektiğinde bu değerlere JavaScript içinde erişebiliriz:

**JavaScript**

```js

const props = defineProps(['title'])

console.log(props.title)


```

Ayrıca bkz.: [Bileşen Props Türlerini Tanımlama](https://vuejs.org/guide/typescript/composition-api.html#typing-component-props)

`<script setup>` kullanmıyorsanız props özelliklerini `props` seçeneğiyle tanımlamanız gerekir. Props nesnesi, `setup()` fonksiyonuna ilk argüman olarak aktarılır:

**JavaScript**

```js

export default {

  props: ['title'],

  setup(props) {

    console.log(props.title)

  }

}


```

Bir bileşen istediğiniz kadar prop içerebilir ve varsayılan olarak her propa herhangi bir türde değer aktarılabilir.

Bir prop tanımlandıktan sonra ona aşağıdaki gibi özel bir HTML özelliği üzerinden veri aktarabilirsiniz:

**Şablon**

```html

<BlogPost title="Vue ile yolculuğum" />

<BlogPost title="Vue ile blog yazmak" />

<BlogPost title="Vue neden bu kadar eğlenceli?" />


```

Ancak tipik bir uygulamada üst bileşeninizde büyük olasılıkla bir blog yazıları dizisi bulunur:

**JavaScript**

```js

const posts = ref([

  { id: 1, title: 'Vue ile yolculuğum' },

  { id: 2, title: 'Vue ile blog yazmak' },

  { id: 3, title: 'Vue neden bu kadar eğlenceli?' }

])


```

Ardından `v-for` kullanarak dizideki her öğe için bir bileşen görüntülemek isteyebilirsiniz:

**Şablon**

```html

<BlogPost

  v-for="post in posts"

  :key="post.id"

  :title="post.title"

/>


```

[Örneği Playground ortamında deneyin](https://play.vuejs.org/)

Dinamik prop değerlerini aktarmak için `:title="post.title"` şeklindeki `v-bind` kısa yazımının kullanıldığına dikkat edin. Bu yöntem, özellikle önceden görüntülenecek içeriğin tam olarak bilinmediği durumlarda kullanışlıdır.

Şimdilik props hakkında bilmeniz gerekenler bunlardır. Bu sayfayı bitirip içeriğe hâkim olduktan sonra [Props hakkındaki tam rehberi](https://vuejs.org/guide/components/props.html) okumanızı öneririz.

## Olayları Dinleme (Listening to Events)

`<BlogPost>` bileşenini geliştirirken bazı özellikler üst bileşenle iletişim kurulmasını gerektirebilir. Örneğin, sayfanın geri kalanının yazı tipi boyutunu değiştirmeden blog yazılarının metnini büyütmeye yarayan bir erişilebilirlik özelliği eklemek isteyebiliriz.

Üst bileşende `postFontSize` adlı bir `ref` tanımlayarak bu özelliği destekleyebiliriz:

**JavaScript**

```js

const posts = ref([

  /* ... */

])



const postFontSize = ref(1)


```

Bu değişken, tüm blog yazılarının yazı tipi boyutunu kontrol etmek için şablonda kullanılabilir:

**Şablon**

```html

<div :style="{ fontSize: postFontSize + 'em' }">

  <BlogPost

    v-for="post in posts"

    :key="post.id"

    :title="post.title"

  />

</div>


```

Şimdi `<BlogPost>` bileşeninin şablonuna bir buton ekleyelim:

**BlogPost.vue**

```vue

<!-- <script> bölümü gösterilmemiştir -->

<template>

  <div class="blog-post">

    <h4>{{ title }}</h4>

    <button>Metni büyüt</button>

  </div>

</template>


```

Buton henüz herhangi bir işlem yapmıyor. Butona tıklandığında üst bileşene tüm yazıların metnini büyütmesi gerektiğini bildirmek istiyoruz.

Bu sorunu çözmek için bileşenler özel bir olay sistemi sunar. Üst bileşen, yerel bir DOM olayını dinler gibi `v-on` veya `@` kullanarak alt bileşen örneğindeki herhangi bir olayı dinleyebilir:

**Şablon**

```html

<BlogPost

  ...

  @enlarge-text="postFontSize += 0.1"

/>


```

Ardından alt bileşen, olayın adını parametre olarak verdiğimiz yerleşik `$emit` metodunu çağırarak bir olay yayınlayabilir:

**BlogPost.vue**

```vue

<!-- <script> bölümü gösterilmemiştir -->

<template>

  <div class="blog-post">

    <h4>{{ title }}</h4>

    <button @click="$emit('enlarge-text')">Metni büyüt</button>

  </div>

</template>


```

`@enlarge-text="postFontSize += 0.1"` dinleyicisi sayesinde üst bileşen olayı alır ve `postFontSize` değerini günceller.

[Örneği Playground ortamında deneyin](https://play.vuejs.org/)

İsteğe bağlı olarak yayınlanan olayları `defineEmits` makrosuyla tanımlayabiliriz:

**BlogPost.vue**

```vue

<script setup>

defineProps(['title'])

defineEmits(['enlarge-text'])

</script>


```

Bu işlem, bileşenin yayınladığı olayları belgelendirir ve isteğe bağlı olarak doğrulanmalarını sağlar. Ayrıca Vue'nun bu olayları alt bileşenin kök öğesine yerel olay dinleyicileri olarak örtük biçimde uygulamasını önlemesine yardımcı olur.

`defineProps` gibi `defineEmits` de yalnızca `<script setup>` içinde kullanılabilir ve ayrıca içe aktarılması gerekmez. `$emit` metoduna eşdeğer bir `emit` fonksiyonu döndürür. `$emit` fonksiyonuna doğrudan erişilemeyen `<script setup>` bölümünde olay yayınlamak için kullanılabilir:

**Vue**

```vue

<script setup>

const emit = defineEmits(['enlarge-text'])



emit('enlarge-text')

</script>


```

Ayrıca bkz.: [Bileşen Olaylarının Türlerini Tanımlama](https://vuejs.org/guide/typescript/composition-api.html#typing-component-emits)

`<script setup>` kullanmıyorsanız yayınlanan olayları `emits` seçeneğiyle tanımlayabilirsiniz. `emit` fonksiyonuna, `setup()` fonksiyonuna ikinci argüman olarak aktarılan bağlam nesnesi üzerinden erişebilirsiniz:

**JavaScript**

```js

export default {

  emits: ['enlarge-text'],

  setup(props, ctx) {

    ctx.emit('enlarge-text')

  }

}


```

Şimdilik özel bileşen olayları hakkında bilmeniz gerekenler bunlardır. Bu sayfayı bitirip içeriğe hâkim olduktan sonra [Özel Olaylar hakkındaki tam rehberi](https://vuejs.org/guide/components/events.html) okumanızı öneririz.

## Slot'lar ile İçerik Dağıtımı (Content Distribution with Slots)

HTML öğelerinde olduğu gibi, bir bileşene içerik aktarmak çoğu zaman kullanışlıdır:

**Şablon**

```html

<AlertBox>

  Kötü bir şey meydana geldi.

</AlertBox>


```

Bu kullanım aşağıdaki gibi görüntülenebilir:

**Örnek çıktı**

```text

Bu, demo amacıyla gösterilen bir hata mesajıdır.



Kötü bir şey meydana geldi.


```

Bu işlem Vue'nun özel `<slot>` öğesi kullanılarak gerçekleştirilebilir:

**AlertBox.vue**

```vue

<template>

  <div class="alert-box">

    <strong>Bu, demo amacıyla gösterilen bir hata mesajıdır.</strong>

    <slot />

  </div>

</template>



<style scoped>

.alert-box {

  /* ... */

}

</style>


```

Yukarıda görüldüğü gibi içeriğin yerleştirilmesini istediğimiz noktada `<slot>` öğesini bir yer tutucu olarak kullanıyoruz. Hepsi bu kadar!

[Örneği Playground ortamında deneyin](https://play.vuejs.org/)

Şimdilik slot'lar hakkında bilmeniz gerekenler bunlardır. Bu sayfayı bitirip içeriğe hâkim olduktan sonra [Slot'lar hakkındaki tam rehberi](https://vuejs.org/guide/components/slots.html) okumanızı öneririz.

## Dinamik Bileşenler (Dynamic Components)

Bazen sekmeli bir arayüzde olduğu gibi bileşenler arasında dinamik olarak geçiş yapmak kullanışlıdır.

[Örneği Playground ortamında açın](https://play.vuejs.org/)

Bu özellik, Vue'nun özel `is` özelliğine sahip `<component>` öğesi sayesinde mümkün olur:

**Şablon**

```html

<!-- currentTab değiştiğinde bileşen de değişir -->

<component :is="tabs[currentTab]"></component>


```

Yukarıdaki örnekte `:is` özelliğine aktarılan değer şu iki türden biri olabilir:

- Kayıtlı bir bileşenin adı olan bir dize.

- İçe aktarılmış gerçek bir bileşen nesnesi.

Normal HTML öğeleri oluşturmak için de `is` özelliğini kullanabilirsiniz.

`<component :is="...">` ile birden fazla bileşen arasında geçiş yapıldığında, geçiş yapılan bileşen DOM'dan kaldırılır. Yerleşik `<KeepAlive>` bileşenini kullanarak etkin olmayan bileşenlerin bellekte tutulmasını sağlayabiliriz.

## DOM İçi Şablon Ayrıştırma Kısıtlamaları (In-DOM Template Parsing Caveats)

Vue şablonlarını doğrudan DOM içine yazıyorsanız Vue, şablon dizesini DOM üzerinden almak zorundadır. Bu durum, tarayıcıların yerel HTML ayrıştırma davranışından kaynaklanan bazı kısıtlamalara yol açar.

**İpucu:** Aşağıda açıklanan kısıtlamalar yalnızca şablonları doğrudan DOM içine yazdığınızda geçerlidir. Aşağıdaki kaynaklardan gelen dize tabanlı şablonlar için geçerli değildir:

- Tek Dosyalı Bileşenler (SFC).

- Doğrudan yazılmış şablon dizeleri (örneğin `template: '...'`).

- `<script type="text/x-template">`.

### Büyük-Küçük Harf Duyarsızlığı (Case Insensitivity)

HTML etiketleri ve özellik adları büyük-küçük harfe duyarsızdır. Bu nedenle tarayıcılar büyük harfleri küçük harflere dönüştürür.

DOM içi şablonlar kullanılırken PascalCase bileşen adlarının, camelCase prop adlarının ve `v-on` olay adlarının kısa çizgiyle ayrılmış karşılıkları olan kebab-case biçiminde yazılması gerekir.

**JavaScript**

```js

// JavaScript'te camelCase kullanımı

const BlogPost = {

  props: ['postTitle'],

  emits: ['updatePost'],

  template: `

    <h3>{{ postTitle }}</h3>

  `

}


```

**HTML şablonu**

```html

<!-- HTML'de kebab-case kullanımı -->

<blog-post post-title="merhaba!" @update-post="onUpdatePost"></blog-post>


```

### Kendiliğinden Kapanan Etiketler (Self Closing Tags)

Önceki kod örneklerinde bileşenler için kendiliğinden kapanan etiketler kullandık:

**Şablon**

```html

<MyComponent />


```

Bunun nedeni, Vue şablon ayrıştırıcısının türü ne olursa olsun `/>` ifadesini etiketi bitirme işareti olarak kabul etmesidir.

Ancak DOM içi şablonlarda açık bir kapatma etiketi kullanmamız gerekir:

**Şablon**

```html

<my-component></my-component>


```

HTML standardı, yalnızca belirli öğelerin kapatma etiketi olmadan kullanılmasına izin verir. En yaygın örnekler `<input>` ve `<img>` öğeleridir. Diğer öğelerde kapatma etiketi kullanılmazsa yerel HTML ayrıştırıcısı açılış etiketinin hiç kapatılmadığını düşünür.

Örneğin aşağıdaki kod:

**Şablon**

```html

<my-component /> <!-- Etiketi burada kapatmak istiyoruz... -->

<span>merhaba</span>


```

Şu şekilde ayrıştırılır:

```html

<my-component>

  <span>merhaba</span>

</my-component> <!-- Tarayıcı etiketi burada kapatır. -->


```

### Öğelerin Yerleştirilme Kısıtlamaları (Element Placement Restrictions)

`<ul>`, `<ol>`, `<table>` ve `<select>` gibi bazı HTML öğelerinin içinde hangi öğelerin bulunabileceği konusunda kısıtlamalar vardır. Ayrıca `<li>`, `<tr>` ve `<option>` gibi bazı öğeler yalnızca belirli öğelerin içinde yer alabilir.

Bu kısıtlamalara sahip öğelerle birlikte bileşen kullanıldığında sorunlar ortaya çıkabilir. Örneğin:

**Şablon**

```html

<table>

  <blog-post-row></blog-post-row>

</table>


```

Özel `<blog-post-row>` bileşeni geçersiz içerik olarak bulunduğu konumdan çıkarılabilir ve sonuçta görüntülenen çıktıda hatalara neden olabilir. Bunun yerine özel `is` özelliğini kullanabiliriz:

**Şablon**

```html

<table>

  <tr is="vue:blog-post-row"></tr>

</table>


```

**İpucu:** Yerel HTML öğelerinde kullanıldığında, `is` özelliğinin değerinin Vue bileşeni olarak yorumlanabilmesi için `vue:` ön ekiyle başlaması gerekir. Bu, yerel özelleştirilmiş yerleşik öğelerle karışıklığı önlemek için gereklidir.

Şimdilik DOM içi şablon ayrıştırma kısıtlamaları hakkında bilmeniz gerekenler bunlardır.

---

**Resmî kaynak:** [Vue.js — Components Basics](https://vuejs.org/guide/essentials/component-basics.html)
