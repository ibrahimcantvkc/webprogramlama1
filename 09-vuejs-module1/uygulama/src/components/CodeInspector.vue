<script setup>
import { computed, ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { FileCode2, Copy, Check, MousePointer2, ArrowRight } from 'lucide-vue-next'
import { codeFor } from '../utils/labCode.js'
const props = defineProps({ section:{type:String,required:true} })
const emit = defineEmits(['close', 'select'])
const copied=ref(false)
const drawerRef=ref(null)
function onKey(e){if(e.key==='Escape')emit('close')}
onMounted(()=>{window.addEventListener('keydown',onKey);nextTick(()=>drawerRef.value?.focus())})
onBeforeUnmount(()=>window.removeEventListener('keydown',onKey))
const sections={
  navigation:{title:'Yan menü',file:'src/components/AppSidebar.vue',marker:'nav-bind',summary:'Seçili menü Vue verisine bağlıdır. :class ile aktif sınıf eklenir; @click üst bileşene navigate olayını yollar.',concept:'v-bind · @click · emit',slide:'22, 25, 27'},
  progress:{title:'İlerleme göstergesi',file:'src/App.vue',marker:'progress-template',summary:'Tamamlanma yüzdesi, görev verisinden hesaplanır. Template içindeki {{ }} ve :style bu sayıyı ekrana yansıtır.',concept:'Template Syntax · JavaScript ifadesi',slide:'20–24'},
  stats:{title:'Görev istatistikleri',file:'src/App.vue',marker:'template-text',summary:'activeCount değeri Vue şablonunda {{ }} ile gösterilir. Görev değiştiğinde sayı güncellenir.',concept:'Metin interpolasyonu',slide:'20–21'},
  course:{title:'Ders kartı',file:'src/components/CourseCard.vue',marker:'props',summary:'CourseCard tek bir bileşendir. Başlık, saat ve derslik bilgilerini lesson prop’u ile üst bileşenden alır.',concept:'Component · props',slide:'26–27'},
  task:{title:'Görev kartı',file:'src/components/TaskRow.vue',marker:'task-event',summary:'TaskRow tıklamayı emit ile üst bileşene bildirir. Üst bileşen görevin durumunu değiştirir.',concept:'Component · emit',slide:'25–27'},
  schedule:{title:'Haftalık çizelge',file:'src/components/ScheduleWeek.vue',marker:'week-timeline',summary:'Aynı ders verisi v-for ile günlere yerleştirilir; üst bileşenden gelen veriler çizelgedeki konumu belirler.',concept:'v-for · props · olaylar',slide:'25–27'},
  notes:{title:'Not kartları',file:'src/App.vue',marker:'note-cards',summary:'v-for her not için aynı HTML düzenini tekrar kullanır. @click düzenleme ve silme işlemlerini başlatır.',concept:'v-for · @click',slide:'25'}
}
const sectionChoices=[{key:'stats',label:'İstatistik'},{key:'progress',label:'İlerleme'},{key:'course',label:'Ders kartı'},{key:'task',label:'Görev kartı'},{key:'schedule',label:'Ders çizelgesi'},{key:'notes',label:'Not kartı'},{key:'navigation',label:'Yan menü'}]
const current=computed(()=>sections[props.section]||sections.stats)
const code=computed(()=>codeFor(current.value.file,current.value.marker))
async function copy(){ try{await navigator.clipboard.writeText(code.value);copied.value=true;setTimeout(()=>copied.value=false,1500)}catch{} }
</script>
<template>
  <div class="inspect-panel-container">
    <aside ref="drawerRef" tabindex="-1" class="inspect-drawer" role="region" aria-label="Bileşen kodu">
      <div class="inspect-head"><span><MousePointer2 :size="17"/> KOD İNCELEME</span></div>
      <div class="inspect-body">
        <div class="inspect-shortcuts" aria-label="İncelenecek bölüm">
          <button v-for="choice in sectionChoices" :key="choice.key" :class="{'selected':section===choice.key}" :aria-pressed="section===choice.key" @click="emit('select',choice.key)">{{choice.label}}</button>
        </div>
        <div class="inspect-slide">SUNUM SLAYTI {{current.slide}}</div>
        <h2>{{current.title}}</h2>
        <p>{{current.summary}}</p>
        <div class="inspect-concept">{{current.concept}}</div>
        <div class="inspect-code-head"><span><FileCode2 :size="16"/> {{current.file}}</span><button @click="copy"><Check v-if="copied" :size="14"/><Copy v-else :size="14"/> {{copied?'Kopyalandı':'Kopyala'}}</button></div>
        <pre class="inspect-code"><code><span v-for="(line,index) in code.split('\n')" :key="index" class="inspect-line"><small>{{index+1}}</small>{{line || ' '}}</span></code></pre>
        <div class="inspect-explainer"><ArrowRight :size="17"/> Bu kod, projedeki ilgili dosyadan doğrudan okunuyor.</div>
      </div>
    </aside>
  </div>
</template>
