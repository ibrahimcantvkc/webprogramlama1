// Konular ve slayt aralıkları Geleceğin Mimarları Vue.js sunumundaki başlıklarla eşleşir.
// Kodlar Sunum Laboratuvarı'nda gerçek proje dosyalarından okunur.
export const labSections = [
  {name:'01 / Başlangıç',ids:['setup','entry','mount','build']},
  {name:'02 / Şablon Sözdizimi',ids:['interpolation','binding','directives','expressions','playground']},
  {name:'03 / Bileşenler',ids:['tree','props','events','slots']},
  {name:'04 / Yapı ve Alternatifler',ids:['sfc','components','cdn']}
]
export const labLessons = [
  {id:'setup',tag:'BAŞLANGIÇ',title:'Kurulum ve geliştirme',slides:'4–6',file:'Terminal',snippet:'npm create vue@latest\n# Proje klasörüne geçtikten sonra:\nnpm install\nnpm run dev',description:'Node.js ve create-vue ile Vue projesinin kurulumu; npm ile bağımlılıkların yüklenmesi ve Vite geliştirme sunucusu.'},
  {id:'entry',tag:'UYGULAMA',title:'createApp ve kök bileşen',slides:'14–15',file:'src/main.js',marker:'app-start',description:'App.vue kök bileşendir. createApp(App), Vue uygulamasını oluşturur.'},
  {id:'mount',tag:'UYGULAMA',title:'mount ile DOM bağlantısı',slides:'16',file:'index.html',marker:'mount-target',description:'index.html içindeki id="app" kapsayıcısı Vue uygulamasının bağlandığı yerdir.'},
  {id:'build',tag:'BAŞLANGIÇ',title:'Geliştirme ve üretim',slides:'6–7',file:'package.json',marker:null,description:'Geliştirme sunucusu dev, dağıtıma uygun çıktı build komutuyla hazırlanır.'},
  {id:'interpolation',tag:'ŞABLON',title:'{{ }} ile metin bağlama',slides:'20–21',file:'src/App.vue',marker:'template-text',description:'Mustache yazımıyla değişen JavaScript verisini doğrudan HTML metnine bağlıyoruz.'},
  {id:'binding',tag:'ŞABLON',title:'v-bind ile dinamik özellik',slides:'22',file:'src/components/AppSidebar.vue',marker:'nav-bind',description:':class, v-bind kısaltmasıdır; aktif menünün CSS sınıfı seçime göre değişir.'},
  {id:'directives',tag:'ŞABLON',title:'v-if, v-for ve @click',slides:'25',file:'src/App.vue',marker:'task-list',description:'Bir görev listesini v-for ile oluşturuyor; v-if ile dolu ve boş görünüm arasında karar veriyoruz.'},
  {id:'expressions',tag:'ŞABLON',title:'JavaScript ifadeleri',slides:'23–24',file:'src/App.vue',marker:'progress-template',description:'Şablon bağlamalarında değer üreten ifadeler kullanılır. Burada yüzde değeri :style içinde hesaplanır.'},
  {id:'playground',tag:'ŞABLON',title:'Template Syntax deney alanı',slides:'20–25',file:'src/components/TemplatePlayground.vue',marker:'playground-template',description:'Mustache metin bağlamasını, v-if koşulunu ve v-bind ile CSS/disabled özelliklerini tek bir etkileşimli alanda inceliyoruz.'},
  {id:'tree',tag:'BİLEŞEN',title:'Bileşen ağacı',slides:'15, 26',file:'src/App.vue',marker:'component-imports',description:'App.vue içinde yan menü, ders kartları, görev satırları ve paneller ayrı bileşenler halinde bulunur.'},
  {id:'props',tag:'BİLEŞEN',title:'Props ile veri gönderme',slides:'27',file:'src/components/CourseCard.vue',marker:'props',description:'CourseCard bileşeni, dışarıdan aldığı lesson nesnesini ekrana yerleştirir.'},
  {id:'events',tag:'BİLEŞEN',title:'Emits ile olay bildirme',slides:'27',file:'src/components/TaskRow.vue',marker:'task-event',description:'Alt bileşen, kullanıcı tıklamasını emit ile üst bileşene bildirir.'},
  {id:'slots',tag:'BİLEŞEN',title:'Slot ile içerik yerleştirme',slides:'27',file:'src/components/BasePanel.vue',marker:'slot',description:'BasePanel görünümü ortak tutar; içerisindeki slot farklı bileşenler alabilir.'},
  {id:'sfc',tag:'YAPI',title:'Tek Dosyalı Bileşen (SFC)',slides:'4, 12, 28',file:'src/components/CourseCard.vue',marker:null,description:'.vue uzantılı dosyada script ve template bölümleri birlikte tanımlanabilir.'},
  {id:'components',tag:'BİLEŞEN',title:'Tekrar kullanılabilir kartlar',slides:'26–27',file:'src/App.vue',marker:'dashboard-course',description:'Aynı CourseCard bileşenini farklı ders verileriyle tekrar tekrar oluşturuyoruz.'},
  {id:'cdn',tag:'BAŞLANGIÇ',title:'CDN ve Vite farkı',slides:'8–11',file:'index.html',marker:'module-script',description:'Sunumda CDN, global build, ES module ve import maps alternatifleri var. Bu projede npm + Vite + SFC yöntemi kullanılıyor.'}
]
