<script setup>
import { ref, computed } from 'vue'
import { Code2, BookOpen, FileCode2, Copy, Check, ChevronRight, ChevronsRight, ExternalLink, Layers3, MonitorPlay } from 'lucide-vue-next'
import { labLessons, labSections } from '../data/lessons.js'
import LabPreview from './LabPreview.vue'
import { codeFor } from '../utils/labCode.js'
const props = defineProps({tasks:{type:Array,default:()=>[]},lessons:{type:Array,default:()=>[]}})
const selected = ref('entry')
const copied = ref(false)
const lesson = computed(()=>labLessons.find(l=>l.id===selected.value) ?? labLessons[0])
const position = computed(()=>labLessons.findIndex(l=>l.id===selected.value))
const code=computed(()=>codeFor(lesson.value.file,lesson.value.marker,lesson.value.snippet))
const lines=computed(()=>code.value.split('\n'))
function select(id){ if(!id)return;selected.value=id;copied.value=false }
function tone(line){
  const l=line.trim()
  if(l.startsWith('//')||l.startsWith('<!--')||l.startsWith('#'))return 'token-comment'
  if(l.startsWith('<')||l.startsWith('</'))return 'token-markup'
  if(/^(import|export|const|let|function|return)\b/.test(l))return 'token-statement'
  if(l.includes('v-if')||l.includes('v-for')||l.includes('@click')||l.includes(':class'))return 'token-directive'
  return ''
}
async function copyCode(){
  try {await navigator.clipboard.writeText(code.value);copied.value=true;setTimeout(()=>copied.value=false,1500)}
  catch {copied.value=false}
}
</script>
<template>
  <div class="lab-page">
    <div class="lab-intro">
      <div><div class="section-eyebrow coral-text"><Code2 :size="14"/> GELECEĞİN MİMARLARI / VUE.JS</div>
        <h1>Sunum <em>Laboratuvarı.</em></h1>
        <p>Solda uygulamanın gerçek kodu, sağda aynı kavramın canlı karşılığı. Başka sayfaya geçmeden incele.</p>
      </div>
      <div class="lab-version"><span class="live-dot"></span> {{labLessons.length}} konu <span>·</span> Sunum slaytlarıyla eşleşir</div>
    </div>
    <div class="lab-layout">
      <aside class="lab-index">
        <div class="lab-index-title"><BookOpen :size="17"/> KONU HARİTASI</div>
        <div v-for="section in labSections" :key="section.name" class="lab-index-section">
          <div class="lab-section-name">{{section.name}}</div>
          <button v-for="id in section.ids" :key="id" class="lab-lesson-link" :class="{'lab-lesson-active':selected===id}" :aria-current="selected===id?'step':undefined" @click="select(id)">
            <span>{{labLessons.find(l=>l.id===id)?.title}}</span><ChevronRight :size="14"/>
          </button>
        </div>
        <a class="docs-link" href="https://vuejs.org/guide/quick-start.html" target="_blank" rel="noopener noreferrer">Vue resmî belgeleri <ExternalLink :size="15"/></a>
      </aside>
      <main class="lab-detail">
        <div class="lab-detail-head lab-detail-head-v2"><div><span class="label-overline">{{lesson.tag}} / SLAYT {{lesson.slides}}</span><h2>{{lesson.title}}</h2><p>{{lesson.description}}</p></div></div>
        <div class="lab-workspace" aria-label="Kod ve canlı karşılığı">
          <section class="lab-workspace-code" aria-label="Kaynak kod">
            <div class="lab-column-heading"><FileCode2 :size="17"/> PROJE KODU <span>GERÇEK DOSYA</span></div>
            <div class="code-window">
              <div class="code-topbar"><div class="code-window-dots"><i></i><i></i><i></i></div><div class="code-filename"><FileCode2 :size="14"/> {{lesson.file}}</div><button class="code-copy" @click="copyCode"><Check v-if="copied" :size="14"/><Copy v-else :size="14"/> {{copied?'Kopyalandı':'Kopyala'}}</button></div>
              <pre class="code-content"><code><span v-for="(line,i) in lines" :key="i" class="code-line"><span class="code-line-no">{{i+1}}</span><span class="code-line-body" :class="tone(line)">{{line || ' '}}</span></span></code></pre>
            </div>
          </section>
          <section class="lab-workspace-preview" aria-label="Canlı örnek alanı">
            <div class="lab-column-heading"><MonitorPlay :size="17"/> CANLI KARŞILIĞI <span>AYNI EKRANDA</span></div>
            <div class="lab-preview-surface"><LabPreview :key="lesson.id" :topic="lesson.id" :tasks="tasks" :lessons="lessons" /></div>
          </section>
        </div>
        <div class="lab-bottom-grid lab-bottom-grid-v2 lab-bottom-grid-single"><div class="lab-demo-card"><div class="lab-card-heading"><Layers3 :size="18"/> NEREDE KULLANDIK?</div><p>{{lesson.description}}</p><small>Solda ilgili kaynak kod, sağda kodun arayüzdeki karşılığı bulunur. Önizleme işlemleri kayıtlı verileri değiştirmez.</small></div></div>
        <div class="lab-navigation"><span><Layers3 :size="16"/> {{position+1}} / {{labLessons.length}} konu</span><div><button class="subtle-button" :disabled="position===0" @click="select(labLessons[position-1]?.id)">Önceki</button><button class="primary-button" :disabled="position===labLessons.length-1" @click="select(labLessons[position+1]?.id)">Sonraki <ChevronsRight :size="17"/></button></div></div>
      </main>
    </div>
  </div>
</template>
