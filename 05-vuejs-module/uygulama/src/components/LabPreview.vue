<script setup>
import { ref, computed } from 'vue'
import { Terminal, Layers3, MousePointerClick, Check, Plus, RotateCcw, ArrowRight, Box, Monitor, Code2, CheckCircle2, Circle, CalendarDays, LayoutDashboard, ListTodo } from 'lucide-vue-next'
import CourseCard from './CourseCard.vue'
import TaskRow from './TaskRow.vue'
import BasePanel from './BasePanel.vue'
import TemplatePlayground from './TemplatePlayground.vue'
import { initialLessons, initialTasks } from '../data/starter.js'
const props = defineProps({ topic:{type:String,required:true}, tasks:{type:Array,default:()=>[]}, lessons:{type:Array,default:()=>[]} })
const sampleLessons = computed(()=>props.lessons.length ? props.lessons : initialLessons)
const sampleTasks = computed(()=>props.tasks.length ? props.tasks : initialTasks)
const counter = ref(sampleTasks.value.filter(t=>!t.done).length)
const selectedPage = ref('dashboard')
const stage = ref(0)
const treeSelected=ref('App.vue')
const treeNodes=[
  {key:'App.vue',file:'src/App.vue',role:'Kök bileşen',props:'—',events:'Alt bileşenlerden olay alır',structure:'Sayfaları ve kartları birleştirir'},
  {key:'AppSidebar',file:'src/components/AppSidebar.vue',role:'Gezinme menüsü',props:'active, mobileOpen',events:'navigate, close',structure:'Seçili sayfaya göre aktif menüyü gösterir'},
  {key:'CourseCard',file:'src/components/CourseCard.vue',role:'Ders kartı',props:'lesson, compact',events:'—',structure:'Aynı kartı farklı ders bilgileriyle kullanır'},
  {key:'TaskRow',file:'src/components/TaskRow.vue',role:'Görev satırı',props:'task',events:'toggle, remove',structure:'Buton olaylarını üst bileşene gönderir'},
  {key:'BasePanel',file:'src/components/BasePanel.vue',role:'Ortak panel',props:'title, eyebrow, actionLabel',events:'action',structure:'İçeriği slot üzerinden alır'}
]
const activeTreeNode=computed(()=>treeNodes.find(n=>n.key===treeSelected.value)||treeNodes[0])
const buildMode = ref('dev')
const courseIndex = ref(0)
const panelMode = ref('ders')
const demoTasks = ref(sampleTasks.value.slice(0,2).map(t=>({...t})))
const firstTask = ref({...sampleTasks.value[0],id:'lab-one',done:false})
const events = ref([])
const taskVisible=ref(true)
const fraction = ref(2)
const rate = computed(()=>Math.round(fraction.value/4*100))
const pickedCourse = computed(()=>sampleLessons.value[courseIndex.value % sampleLessons.value.length])
function updateTask(id){demoTasks.value=demoTasks.value.map(t=>t.id===id?{...t,done:!t.done}:t)}
function restoreTasks(){demoTasks.value=sampleTasks.value.slice(0,2).map(t=>({...t}))}
function removeDemoTask(id){demoTasks.value=demoTasks.value.filter(t=>t.id!==id)}
function emitToggle(id){firstTask.value={...firstTask.value,done:!firstTask.value.done};events.value.unshift(`toggle(${id}) → ${firstTask.value.done?'tamamlandı':'geri alındı'}`);events.value=events.value.slice(0,3)}
function emitRemove(id){taskVisible.value=false;events.value.unshift(`remove(${id}) → görev kaldırıldı`);events.value=events.value.slice(0,3)}
</script>
<template>
  <div class="lab-preview-inner">
    <template v-if="topic==='setup'">
      <div class="preview-caption">01 / PROJEYİ BAŞLATMA</div>
      <div class="steps-demo">
        <button v-for="(s,i) in [{title:'Proje oluştur',command:'npm create vue@latest'},{title:'Paketleri yükle',command:'npm install'},{title:'Geliştirme sunucusu',command:'npm run dev'}]" :key="i" :class="{'step-current':stage===i}" @click="stage=i"><span>0{{i+1}}</span><strong>{{s.title}}</strong><Check v-if="i<stage" :size="16"/></button>
      </div>
      <div class="preview-terminal"><Terminal :size="18"/><code>{{ ['npm create vue@latest','npm install','npm run dev'][stage] }}</code></div>
      <p class="preview-tip">Aşamaları seç: sağdaki komut değişir. Bu panel terminal komutlarını çalıştırmaz.</p>
    </template>
    <template v-else-if="topic==='entry' || topic==='tree'">
      <div class="preview-caption">UYGULAMA BİLEŞEN AĞACI</div>
      <div class="component-tree-preview">
        <button class="tree-root tree-clickable" :class="{'tree-selected':treeSelected==='App.vue'}" @click="treeSelected='App.vue'"><Layers3 :size="17"/> App.vue <small>KÖK</small></button>
        <div class="tree-line"></div>
        <div class="tree-children"><button v-for="node in treeNodes.slice(1)" :key="node.key" class="tree-clickable" :class="{'tree-selected':treeSelected===node.key}" @click="treeSelected=node.key"><Box :size="16"/> {{node.key}}</button></div>
        <div class="tree-node-detail"><div><strong>{{activeTreeNode.role}}</strong><small>{{activeTreeNode.file}}</small></div><p>{{activeTreeNode.structure}}</p><div><span>Props: {{activeTreeNode.props}}</span><span>Emits: {{activeTreeNode.events}}</span></div></div>
      </div>
      <div class="mini-application"><span class="mini-brand">pusula<span>.</span></span><span class="mini-pill">Dersler ve görevler</span><div class="mini-application-grid"><span>Ders akışı</span><span>Yaklaşan işler</span></div></div>
      <p class="preview-tip">Bileşenler ana uygulamada ayrı dosyalardır; App.vue bir araya getirir.</p>
    </template>
    <template v-else-if="topic==='mount'">
      <div class="preview-caption">DOM'A BAĞLANMA AKIŞI</div>
      <div class="mount-demo"><div class="mount-dom">index.html <code>&lt;div id="app"&gt;&lt;/div&gt;</code></div><ArrowRight :size="24" class="mount-arrow"/><div class="mount-render"><span class="mini-brand">pusula<span>.</span></span><strong>Uygulama ekranda</strong><small>main.js → mount('#app')</small></div></div>
      <p class="preview-tip">Boş HTML kapsayıcısı, Vue uygulamasının bağlandığı alana dönüşür.</p>
    </template>
    <template v-else-if="topic==='build'">
      <div class="preview-caption">İKİ FARKLI ÇALIŞMA ŞEKLİ</div>
      <div class="preview-tabs"><button :class="{'preview-tab-active':buildMode==='dev'}" @click="buildMode='dev'">Geliştirme</button><button :class="{'preview-tab-active':buildMode==='build'}" @click="buildMode='build'">Üretim</button></div>
      <div class="preview-terminal"><Terminal :size="17"/><code>{{buildMode==='dev'?'npm run dev':'npm run build'}}</code></div>
      <div class="build-result"><CheckCircle2 :size="23"/><div><strong>{{buildMode==='dev'?'Vite geliştirme sunucusu':'dist/ klasörünün oluşturulması'}}</strong><p>{{buildMode==='dev'?'Kod düzenleme ve tarayıcıda görüntüleme içindir.':'Yayımlamaya uygun dosyaları üretir.'}}</p></div></div>
      <p class="preview-tip">Bu görsel bir işlem akışıdır; burada build komutu çalıştırılmaz.</p>
    </template>
    <template v-else-if="topic==='interpolation'">
      <div class="preview-caption">GENEL BAKIŞ / AKTİF GÖREVLER</div>
      <div class="live-stat-preview"><span>Aktif görevler</span><strong>{{counter}}</strong><small>devam ediyor</small></div>
      <div class="preview-actions"><button class="preview-secondary" :disabled="counter===0" @click="counter--">− Azalt</button><button class="preview-primary" @click="counter++"><Plus :size="15"/> Görev ekle</button></div>
      <div class="live-hint"><MousePointerClick :size="17"/> <span>Sayacın değeri değişince <code>&#123;&#123; activeCount &#125;&#125;</code> görüntüsü değişir.</span></div>
    </template>
    <template v-else-if="topic==='binding'">
      <div class="preview-caption">YAN MENÜ / AKTİF SINIF</div>
      <div class="mini-sidebar-preview"><button v-for="item in [{id:'dashboard',name:'Genel Bakış',icon:'▦'},{id:'schedule',name:'Ders Programım',icon:'▤'},{id:'tasks',name:'Yapılacaklar',icon:'☑'}]" :key="item.id" class="mini-nav-button" :class="{'mini-nav-active':selectedPage===item.id}" @click="selectedPage=item.id"><span>{{item.icon}}</span>{{item.name}}<Check v-if="selectedPage===item.id" :size="16"/></button></div>
      <p class="preview-tip">Düğmeye bastığında <code>:class</code> aktif menüye uygun CSS sınıfını ekler.</p>
    </template>
    <template v-else-if="topic==='directives'">
      <div class="preview-caption">YAPILACAKLAR / LİSTE GÖSTERİMİ</div>
      <div class="preview-task-list"><TaskRow v-for="task in demoTasks" :key="task.id" :task="task" @toggle="updateTask" @remove="removeDemoTask"/><div v-if="demoTasks.length===0" class="preview-empty"><CheckCircle2 :size="24"/> Liste boş. <code>v-if</code> ile görüntüleniyor.</div></div>
      <button class="preview-secondary" @click="restoreTasks"><RotateCcw :size="15"/> Listeyi yenile</button>
      <p class="preview-tip">Kartlar gerçek TaskRow.vue bileşenidir. Buradaki işlemler kişisel verilerini değiştirmez.</p>
    </template>
    <template v-else-if="topic==='expressions'">
      <div class="preview-caption">GENEL BAKIŞ / İLERLEME HESABI</div>
      <div class="expression-demo"><span>Görev tamamlama oranı</span><strong>{{rate}}<small>%</small></strong><div class="expr-track"><span :style="{width: `${rate}%`}"></span></div><small>{{fraction}} / 4 görev tamamlandı</small></div>
      <div class="preview-actions"><button class="preview-secondary" :disabled="fraction===0" @click="fraction--">−</button><button class="preview-primary" :disabled="fraction===4" @click="fraction++">+ Tamamla</button></div>
      <p class="preview-tip"><code>:style</code> içindeki yüzde ifadesi sonuç üretir; genişlik otomatik değişir.</p>
    </template>
    <template v-else-if="topic==='props'">
      <div class="preview-caption">AYNI BİLEŞEN / FARKLI PROPS</div>
      <div class="preview-tabs"><button v-for="(lesson,i) in sampleLessons.slice(0,3)" :key="lesson.id" :class="{'preview-tab-active':courseIndex===i}" @click="courseIndex=i">Ders {{i+1}}</button></div>
      <div class="preview-course"><CourseCard :lesson="pickedCourse" /></div>
      <div class="live-hint"><Box :size="17"/><span><code>:lesson</code> ile aktarılan veri değişti; CourseCard.vue aynı kaldı.</span></div>
    </template>
    <template v-else-if="topic==='events'">
      <div class="preview-caption">GÖREV SATIRI / OLAY İLETİŞİMİ</div>
      <div class="preview-task-list"><TaskRow v-if="taskVisible" :task="firstTask" @toggle="emitToggle" @remove="emitRemove" /><div v-else class="preview-empty"><CheckCircle2 :size="20"/> Görev kaldırıldı. <button class="preview-secondary" @click="taskVisible=true">Geri getir</button></div></div>
      <div class="event-console"><div>ÜST BİLEŞENE GELEN OLAYLAR</div><p v-for="(event,i) in events" :key="i">{{event}}</p><p v-if="!events.length" class="event-idle">Yukarıdaki görevi işaretle veya sil simgesine bas.</p></div>
      <p class="preview-tip">Gerçek TaskRow kullanılıyor. Olaylar bu panelin içinde karşılanıyor.</p>
    </template>
    <template v-else-if="topic==='slots'">
      <div class="preview-caption">ORTAK PANEL / DEĞİŞEN İÇERİK</div>
      <div class="preview-tabs"><button :class="{'preview-tab-active':panelMode==='ders'}" @click="panelMode='ders'">Ders kartı</button><button :class="{'preview-tab-active':panelMode==='gorev'}" @click="panelMode='gorev'">Görev satırı</button></div>
      <div class="preview-slot"><BasePanel title="Haftalık çalışma" eyebrow="BASEPANEL / SLOT"><CourseCard v-if="panelMode==='ders'" :lesson="sampleLessons[0]" compact/><TaskRow v-else :task="firstTask" @toggle="emitToggle" @remove="emitRemove"/></BasePanel></div>
      <p class="preview-tip">BasePanel çerçevesi korunuyor; yalnızca <code>&lt;slot&gt;</code> içeriği değişiyor.</p>
    </template>
    <template v-else-if="topic==='sfc'">
      <div class="preview-caption">COURSECARD.VUE / TEK DOSYA</div>
      <div class="sfc-lines"><span><Code2 :size="15"/> &lt;script setup&gt; <small>Veri ve mantık</small></span><span><Monitor :size="15"/> &lt;template&gt; <small>HTML görünümü</small></span><span><Box :size="15"/> style.css <small>Görsel düzen</small></span></div>
      <div class="preview-course"><CourseCard :lesson="sampleLessons[0]" compact/></div>
      <p class="preview-tip">Görünen kart, bu dosyadaki script ve template ile oluşturuluyor.</p>
    </template>
    <template v-else-if="topic==='components'">
      <div class="preview-caption">AYNI COURSECARD İKİ FARKLI DERSTE</div>
      <div class="preview-course-pair"><CourseCard v-for="lesson in sampleLessons.slice(0,2)" :key="lesson.id" :lesson="lesson" compact/></div>
      <p class="preview-tip">Tek bir bileşen iki defa çağrılıyor, farklı props değerleri alıyor.</p>
    </template>
    <template v-else-if="topic==='playground'"><TemplatePlayground /></template>
    <template v-else-if="topic==='cdn'">
      <div class="preview-caption">İKİ KURULUM SEÇENEĞİ</div>
      <div class="install-compare"><div><span>CDN</span><strong>HTML'e script etiketi</strong><p>Derleme gerektirmeyen basit sayfalara Vue eklenebilir. SFC kullanılmaz.</p></div><div class="compare-selected"><span>BU PROJEDE</span><strong>npm + Vite</strong><p>.vue bileşenlerini derleyip çok parçalı uygulamayı çalıştırır.</p><CheckCircle2 :size="21"/></div></div>
      <p class="preview-tip">CDN ve import maps alternatif yöntemlerdir; Pusula npm + Vite yöntemini kullanır.</p>
    </template>
  </div>
</template>
