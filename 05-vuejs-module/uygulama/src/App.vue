<script setup>
import { ref, computed, nextTick } from 'vue'
import { Menu, Search, Plus, ArrowUpRight, CalendarDays, CheckCircle2, BookOpen, ListTodo, ChevronRight, Trash2, Pencil, X, Check, RotateCcw, MousePointer2, Undo2, AlertTriangle } from 'lucide-vue-next'
// @lab:component-imports:start
import AppSidebar from './components/AppSidebar.vue'
import BasePanel from './components/BasePanel.vue'
import CourseCard from './components/CourseCard.vue'
import TaskRow from './components/TaskRow.vue'
import PresentationStudio from './components/PresentationStudio.vue'
import ScheduleWeek from './components/ScheduleWeek.vue'
import CodeInspector from './components/CodeInspector.vue'
// @lab:component-imports:end
import { initialLessons, initialTasks, initialNotes, weekdays } from './data/starter.js'
import { useStoredList, uid } from './utils/storage.js'
// @lab:reactive-state:start
const tasks = useStoredList('pusula-tasks-v1', initialTasks)
const lessons = useStoredList('pusula-lessons-v1', initialLessons)
const notes = useStoredList('pusula-notes-v1', initialNotes)
const currentPage = ref('dashboard')
const search = ref('')
// @lab:reactive-state:end
const mobileOpen = ref(false)
const now = new Date()
const dayNumber = now.getDay()
const selectedDay = ref(dayNumber >= 1 && dayNumber <= 5 ? dayNumber : 1)
const taskFilter = ref('Tümü')
const inspectMode=ref(false)
const inspectSection=ref('')
function interceptInspectable(event){
  if (!inspectMode.value || currentPage.value === 'lab') return
  if (event.target.closest('.inspect-trigger, .inspect-drawer, .sidebar, .modal-overlay')) return
  const marker = event.target.closest('[data-inspect]')
  if (marker) {
    event.preventDefault()
    event.stopPropagation()
    inspectSection.value = marker.dataset.inspect
  } else if (inspectSection.value) {
    // Kod paneli dışında boş bir alana basılınca önizleme kapanır.
    inspectSection.value = ''
  }
}
const taskFormOpen = ref(false)
const lessonFormOpen = ref(false)
const lessonTitleInput = ref(null)
const editingLessonId = ref(null)
const noteFormOpen = ref(false)
const editingNoteId = ref(null)
const toast = ref('')
function dateAfter(days){const d=new Date();d.setDate(d.getDate()+days);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`}
const newTask = ref({title:'',course:'Web Programlama I',deadline:dateAfter(3),priority:'Orta'})
const newLesson = ref({title:'',day:selectedDay.value,time:'09:00',duration:'10:30',room:'B-204',type:'Teori',color:'teal'})
const newNote = ref({title:'',body:'',color:'sand'})
const trDate = new Intl.DateTimeFormat('tr-TR',{day:'numeric',month:'long',year:'numeric'}).format(now)
const todayDay = dayNumber>=1&&dayNumber<=5 ? dayNumber : 1
// @lab:stat-expr:start
const doneCount = computed(() => tasks.value.filter(task => task.done).length)
const activeCount = computed(() => tasks.value.filter(task => !task.done).length)
const completionRate = computed(() => tasks.value.length ? Math.round(doneCount.value / tasks.value.length * 100) : 0)
const progressLabel = computed(() => `${doneCount.value} / ${tasks.value.length} görev tamamlandı`)
// @lab:stat-expr:end
const courseCount = computed(() => lessons.value.length)
const weekLessons = computed(() => [...lessons.value].sort((a,b)=> a.day-b.day || a.time.localeCompare(b.time)))
const dayLessons = computed(() => weekLessons.value.filter(lesson=>lesson.day===selectedDay.value))
const dayLoad = computed(() => weekdays.map((day,i) => ({day:i+1,label:day.slice(0,3),count:lessons.value.filter(lesson=>lesson.day===i+1).length})))
const maxDayLoad = computed(() => Math.max(1,...dayLoad.value.map(d=>d.count)))
const todayLessons = computed(() => weekLessons.value.filter(lesson=>lesson.day===todayDay))
const upcomingTasks = computed(() => [...tasks.value].filter(t=>!t.done).sort((a,b)=>(a.deadline||'').localeCompare(b.deadline||'')))
const filteredTasks = computed(() => tasks.value.filter(task => {
  const matchesFilter=taskFilter.value==='Tümü' || (taskFilter.value==='Yapılacak'&&!task.done) || (taskFilter.value==='Tamamlanan'&&task.done)
  const words = `${task.title} ${task.course}`.toLocaleLowerCase('tr-TR')
  return matchesFilter && words.includes(search.value.toLocaleLowerCase('tr-TR'))
}).sort((a,b)=>Number(a.done)-Number(b.done) || (a.deadline||'').localeCompare(b.deadline||'')))
const navTitles={dashboard:'Genel Bakış',schedule:'Ders Programım',tasks:'Yapılacaklar',notes:'Not Defterim',lab:'Sunum Laboratuvarı'}
const undoSnapshot=ref(null)
let toastTimer
function showToast(msg, undo=null){
  clearTimeout(toastTimer)
  toast.value=msg;undoSnapshot.value=undo
  toastTimer=setTimeout(()=>{toast.value='';undoSnapshot.value=null},undo?5500:3000)
}
function undoDelete(){
  const snapshot=undoSnapshot.value
  if(!snapshot)return
  const {kind,item,index}=snapshot
  const target=kind==='task'?tasks:kind==='lesson'?lessons:notes
  const copy=[...target.value]
  if(!copy.some(v=>v.id===item.id)) copy.splice(Math.min(index,copy.length),0,item)
  target.value=copy
  showToast('Silme işlemi geri alındı')
}

function navigate(page){ currentPage.value=page;mobileOpen.value=false;inspectMode.value=false;inspectSection.value='';search.value='';window.scrollTo({top:0,behavior:'smooth'}) }
function toggleInspector(){
  const shouldOpen = !inspectMode.value
  if (shouldOpen && currentPage.value === 'lab') currentPage.value = 'dashboard'
  inspectMode.value = shouldOpen
  inspectSection.value = shouldOpen ? 'stats' : ''
  mobileOpen.value = false
}
// @lab:task-handlers:start
function toggleTask(id){ tasks.value=tasks.value.map(task=>task.id===id?{...task,done:!task.done}:task) }
function removeTask(id){ const index=tasks.value.findIndex(t=>t.id===id);if(index<0)return;const item={...tasks.value[index]};tasks.value=tasks.value.filter(task=>task.id!==id);showToast('Görev silindi',{kind:'task',item,index}) }
function addTask(){
  const title=newTask.value.title.trim()
  if(!title)return
  tasks.value.unshift({id:uid(),title,course:newTask.value.course.trim()||'Kişisel',deadline:newTask.value.deadline,priority:newTask.value.priority,done:false})
  newTask.value={title:'',course:'Web Programlama I',deadline:dateAfter(3),priority:'Orta'}
  taskFormOpen.value=false
  showToast('Görev eklendi')
}
// @lab:task-handlers:end
function openNewLesson(slot = null){
  editingLessonId.value = null
  const validSlot = slot && typeof slot === 'object' && Number.isInteger(Number(slot.day)) && /^\d{2}:\d{2}$/.test(slot.time || '')
  const day = validSlot ? Number(slot.day) : selectedDay.value
  const start = validSlot ? slot.time : '09:00'
  const [hours, minutes] = start.split(':').map(Number)
  const endTotal = Math.min(hours * 60 + minutes + 90, 23 * 60 + 59)
  const end = `${String(Math.floor(endTotal / 60)).padStart(2,'0')}:${String(endTotal % 60).padStart(2,'0')}`
  newLesson.value = { title:'', day, time:start, duration:end, room:'', type:'Teori', color:'teal' }
  selectedDay.value = day
  lessonFormOpen.value = true
  nextTick(() => lessonTitleInput.value?.focus())
}
function editLesson(lesson){
  editingLessonId.value=lesson.id
  newLesson.value={title:lesson.title,day:lesson.day,time:lesson.time,duration:lesson.duration,room:lesson.room,type:lesson.type,color:lesson.color}
  lessonFormOpen.value=true
  nextTick(() => lessonTitleInput.value?.focus())
}
const lessonConflict = computed(() => {
  if (!lessonFormOpen.value) return []
  const candidate = newLesson.value
  return lessons.value.filter(lesson =>
    lesson.id !== editingLessonId.value &&
    Number(lesson.day) === Number(candidate.day) &&
    candidate.time < lesson.duration && candidate.duration > lesson.time
  )
})
function addLesson(){
  if(!newLesson.value.title.trim())return
  if(newLesson.value.duration<=newLesson.value.time){showToast('Bitiş saati başlangıçtan sonra olmalı');return}
  const value={...newLesson.value,title:newLesson.value.title.trim(),day:Number(newLesson.value.day)}
  if(editingLessonId.value){
    lessons.value=lessons.value.map(l=>l.id===editingLessonId.value?{...value,id:l.id}:l)
    showToast('Ders güncellendi')
  }else{
    lessons.value.push({...value,id:uid()})
    showToast('Ders programa eklendi')
  }
  selectedDay.value=Number(value.day)
  editingLessonId.value=null
  lessonFormOpen.value=false
}
function removeLesson(id){const index=lessons.value.findIndex(l=>l.id===id);if(index<0)return;const item={...lessons.value[index]};lessons.value=lessons.value.filter(l=>l.id!==id);showToast('Ders programdan kaldırıldı',{kind:'lesson',item,index})}
function openNewNote(){
  editingNoteId.value=null
  newNote.value={title:'',body:'',color:'sand'}
  noteFormOpen.value=true
}
function editNote(note){
  editingNoteId.value=note.id
  newNote.value={title:note.title,body:note.body,color:note.color}
  noteFormOpen.value=true
}
function addNote(){
  if(!newNote.value.title.trim()||!newNote.value.body.trim())return
  const value={...newNote.value,title:newNote.value.title.trim(),body:newNote.value.body.trim()}
  if(editingNoteId.value){
    notes.value=notes.value.map(n=>n.id===editingNoteId.value?{...value,id:n.id}:n)
    showToast('Not güncellendi')
  }else{
    notes.value.unshift({...value,id:uid()})
    showToast('Not kaydedildi')
  }
  editingNoteId.value=null
  noteFormOpen.value=false
}
function removeNote(id){const index=notes.value.findIndex(n=>n.id===id);if(index<0)return;const item={...notes.value[index]};notes.value=notes.value.filter(n=>n.id!==id);showToast('Not silindi',{kind:'note',item,index})}
function resetData(){
  if(!confirm('Kişisel görev, ders ve notlarını başlangıç hâline döndürmek istiyor musun?'))return
  tasks.value=structuredClone(initialTasks);lessons.value=structuredClone(initialLessons);notes.value=structuredClone(initialNotes);showToast('Kişisel alan sıfırlandı')
}
</script>

<template>
  <div class="app-shell" :class="{'inspect-mode':inspectMode}" @click.capture="interceptInspectable">
    <!-- @lab:component-tree:start -->
    <AppSidebar :active="currentPage" :mobile-open="mobileOpen" :inspect-mode="inspectMode" @navigate="navigate" @close="mobileOpen=false" @toggle-inspect="toggleInspector" />
    <!-- @lab:component-tree:end -->
    <div v-if="mobileOpen" class="mobile-overlay" @click="mobileOpen=false"></div>
    <div class="app-main">
      <header class="topbar">
        <div class="topbar-left"><button class="icon-button mobile-menu" aria-label="Menüyü aç" @click="mobileOpen=true"><Menu :size="23"/></button><span class="breadcrumb">Çalışma alanı</span><ChevronRight :size="14" class="breadcrumb-arrow"/><strong>{{navTitles[currentPage]}}</strong></div>
        <div class="topbar-right"><span class="topbar-date"><CalendarDays :size="16"/>{{trDate}}</span><span class="topbar-divider"></span><span class="author-avatar" title="Geleceğin Mimarları">GM</span></div>
      </header>
      <div v-if="inspectMode && currentPage!=='lab'" class="inspect-hint"><MousePointer2 :size="16"/> Kodlar yalnızca Kod İnceleme açıkken görünür. Kartı seçebilir, boş alana tıklayarak önizlemeyi kapatabilirsin.</div>
      <div class="main-content">
        <template v-if="currentPage==='dashboard'">
          <section class="welcome-row"><div><h1>Genel <span>bakış.</span></h1><p>Dersler, görevler ve kişisel notlar.</p></div></section>
          <section class="hero-banner">
            <div class="hero-decoration hero-decoration-one"></div><div class="hero-decoration hero-decoration-two"></div><div class="hero-decoration hero-decoration-three"></div>
            <div class="hero-content"><div class="hero-pill">HAFTALIK ÖZET</div><h2>Çalışma <em>durumu.</em></h2><p>{{activeCount}} bekleyen görev · {{courseCount}} ders oturumu</p></div>
            <div class="hero-progress" data-inspect="progress"><!-- @lab:progress-template:start --><div class="hero-progress-circle" :style="{'--progress': `${completionRate}%`}"><div><strong>{{completionRate}}<small>%</small></strong><span>TAMAMLANDI</span></div></div><p>{{progressLabel}}</p><!-- @lab:progress-template:end --></div>
          </section>
          <section class="stats-grid" aria-label="Çalışma istatistikleri">
            <div class="stat-card" data-inspect="stats"><span class="stat-icon stat-icon-coral"><ListTodo :size="22"/></span><span class="stat-label">Aktif görevler</span>
              <!-- @lab:template-text:start -->
              <div class="stat-bottom"><strong>{{activeCount}}</strong><span>devam ediyor <ArrowUpRight :size="16"/></span></div>
              <!-- @lab:template-text:end -->
            </div>
            <div class="stat-card"><span class="stat-icon stat-icon-teal"><CheckCircle2 :size="22"/></span><span class="stat-label">Tamamlanan</span><div class="stat-bottom"><strong>{{doneCount}}</strong><span>görev tamamlandı <ArrowUpRight :size="16"/></span></div></div>
            <div class="stat-card"><span class="stat-icon stat-icon-lavender"><BookOpen :size="22"/></span><span class="stat-label">Ders kaydım</span><div class="stat-bottom"><strong>{{courseCount}}</strong><span>haftalık oturum <ArrowUpRight :size="16"/></span></div></div>
          </section>
          <div class="dashboard-grid">
            <div class="dashboard-main-col">
              <!-- @lab:component-tree:start -->
              <BasePanel title="Haftalık ders akışı" eyebrow="PROGRAM" action-label="Tüm program" @action="navigate('schedule')">
                <div class="day-chips"><button v-for="(day,i) in weekdays" :key="day" :class="{ 'day-chip-active':selectedDay===i+1 }" @click="selectedDay=i+1">{{day.slice(0,3)}}</button></div>
                <!-- @lab:dashboard-course:start --><div v-if="dayLessons.length" class="course-grid course-grid-dashboard"><CourseCard v-for="lesson in dayLessons" :key="lesson.id" :lesson="lesson" compact data-inspect="course" /></div><!-- @lab:dashboard-course:end -->
                <div v-else class="empty-compact"><CalendarDays :size="27"/><p>Bu güne henüz ders eklenmedi.</p><button class="quiet-link" @click="navigate('schedule')">Ders ekle ↗</button></div>
              </BasePanel>
              <!-- @lab:component-tree:end -->
              <BasePanel title="Yaklaşan işler" eyebrow="ÖNCELİKLER" action-label="Tüm görevler" @action="navigate('tasks')">
                <TransitionGroup v-if="upcomingTasks.length" name="list-flow" tag="div" class="task-list task-list-dashboard"><TaskRow v-for="task in upcomingTasks.slice(0,4)" :key="task.id" :task="task" data-inspect="task" @toggle="toggleTask" @remove="removeTask" /></TransitionGroup>
                <div v-else class="empty-compact"><CheckCircle2 :size="29"/><p>Bekleyen görev bulunmuyor.</p></div>
                
              </BasePanel>
            </div>
            <div class="dashboard-side-col">
              <div class="focus-card weekly-focus"><span class="focus-tiny">HAFTALIK GÖRÜNÜM</span><h2>Ders <em>yoğunluğu.</em></h2><p>Bir güne tıklayarak ders akışını görüntüle.</p><div class="week-load-chart" aria-label="Haftanın günlerine göre ders sayısı"><button v-for="item in dayLoad" :key="item.day" type="button" class="week-load-day" :class="{'week-load-active':selectedDay===item.day}" :aria-label="`${weekdays[item.day-1]}: ${item.count} ders`" :aria-pressed="selectedDay===item.day" @click="selectedDay=item.day"><span class="week-load-count">{{item.count}}</span><span class="week-load-track"><span class="week-load-bar" :style="{height: `${Math.max(item.count ? 13 : 3,item.count/maxDayLoad*100)}%`}"></span></span><small>{{item.label}}</small></button></div></div>
              <div class="side-notes-card"><div class="side-notes-header"><span>SON NOTLAR</span></div><div v-if="notes.length" class="mini-note-list"><button v-for="note in notes.slice(0,2)" :key="note.id" @click="navigate('notes')"><span class="mini-note-bullet"></span><span><strong>{{note.title}}</strong><small>{{note.body}}</small></span></button></div><p v-else class="hint">Henüz not bulunmuyor.</p></div>
            </div>
          </div>
          
        </template>
        <template v-else-if="currentPage==='schedule'">
          <div class="page-heading"><div><div class="section-eyebrow">AKADEMİK PLAN</div><h1>Ders <em>programım.</em></h1><p>Boş gün ve saatlere tıklayarak ders ekle; mevcut dersleri seçerek düzenle.</p></div><button class="primary-button" @click="openNewLesson"><Plus :size="18"/> Ders ekle</button></div>
          <!-- @lab:schedule-week:start -->
          <section data-inspect="schedule"><ScheduleWeek :lessons="weekLessons" :today="todayDay" @edit="editLesson" @add="openNewLesson" /></section>
          <!-- @lab:schedule-week:end -->
          <p class="context-disclaimer">Bu sayfa kişisel ders planlaması içindir. Üniversitenin resmî otomasyon sistemine bağlı değildir.</p>
        </template>
        <template v-else-if="currentPage==='tasks'">
          <div class="page-heading"><div><div class="section-eyebrow">ÇALIŞMA PLANI</div><h1>Yapılacak <em>işler.</em></h1><p>Görevlerini görüntüle, filtrele ve tamamlananları işaretle.</p></div><button class="primary-button" @click="taskFormOpen=true"><Plus :size="18"/> Yeni görev</button></div>
          <div class="task-page-overview"><div><span>GÖREV ÖZETİ</span><strong>{{activeCount}} aktif iş</strong><p>{{doneCount}} görev tamamlandı.</p></div><div class="task-page-progress"><strong>{{completionRate}}%</strong><div class="small-progress"><span :style="{width:`${completionRate}%`}"></span></div><small>tamamlanma</small></div></div>
          <section class="task-page-panel"><div class="task-page-toolbar"><div class="task-filters"><button v-for="filter in ['Tümü','Yapılacak','Tamamlanan']" :key="filter" :class="{'filter-active':taskFilter===filter}" @click="taskFilter=filter">{{filter}}</button></div><label class="search-input"><Search :size="17"/><input v-model="search" placeholder="Görevlerde ara..." aria-label="Görevlerde ara"></label></div>
            <!-- @lab:task-list:start -->
            <TransitionGroup v-if="filteredTasks.length" name="list-flow" tag="div" class="task-list task-list-full"><TaskRow v-for="task in filteredTasks" :key="task.id" :task="task" data-inspect="task" @toggle="toggleTask" @remove="removeTask" /></TransitionGroup>
            <div v-else class="empty-state"><ListTodo :size="38"/><h3>Bu filtrede görev bulunmuyor</h3><p>Arama veya filtreyi değiştirebilir ya da yeni bir görev ekleyebilirsin.</p></div>
            <!-- @lab:task-list:end -->
          </section>
        </template>
        <template v-else-if="currentPage==='notes'">
          <div class="page-heading"><div><div class="section-eyebrow">KİŞİSEL ALAN</div><h1>Not <em>defterim.</em></h1><p>Önemli fikirleri, hatırlatmaları ve küçük planları tek yerde topla.</p></div></div>
          <div class="note-banner"><div class="note-banner-heading">Notlarını <em>düzenle.</em></div><p>Yeni not oluşturabilir, kayıtlı notlarını değiştirebilirsin.</p></div>
          <!-- @lab:note-cards:start -->
          <TransitionGroup name="note-flow" tag="div" class="notes-grid"><article data-inspect="notes" v-for="(note,index) in notes" :key="note.id" class="note-card" :class="`note-${note.color}`"><div class="note-top"><span>NOT {{String(index+1).padStart(2,'0')}}</span><div class="note-actions"><button class="icon-button" :aria-label="`${note.title} notunu düzenle`" @click="editNote(note)"><Pencil :size="17"/></button><button class="icon-button" :aria-label="`${note.title} notunu sil`" @click="removeNote(note.id)"><Trash2 :size="17"/></button></div></div><h2>{{note.title}}</h2><p>{{note.body}}</p><span class="note-card-bottom">GELECEĞİN MİMARLARI <ArrowUpRight :size="17"/></span></article><button key="add-note-card" class="note-add-card" @click="openNewNote"><span><Plus :size="27"/></span><strong>Yeni bir düşünce ekle</strong><small>Notlarına yenisini kat</small></button></TransitionGroup>
          <!-- @lab:note-cards:end -->
        </template>
        <PresentationStudio v-else-if="currentPage==='lab'" :tasks="tasks" :lessons="lessons" />
      </div>
      <footer class="app-footer"><span>© {{now.getFullYear()}} Şarkışla Uygulamalı Bilimler Yüksekokulu</span><span>Geleceğin Mimarları <span class="footer-dot">·</span> Web Programlama I <button class="reset-button" title="Kişisel verileri sıfırla" @click="resetData"><RotateCcw :size="13"/> Sıfırla</button></span></footer>
    </div>
    <div v-if="taskFormOpen || lessonFormOpen || noteFormOpen" class="modal-overlay" @keydown.esc="taskFormOpen=false;lessonFormOpen=false;noteFormOpen=false" @click.self="taskFormOpen=false;lessonFormOpen=false;noteFormOpen=false">
      <section v-if="taskFormOpen" class="modal-card" role="dialog" aria-modal="true" aria-labelledby="task-title"><div class="modal-head"><div><span class="section-eyebrow">YENİ HEDEF</span><h2 id="task-title">Görev oluştur</h2></div><button class="icon-button" aria-label="Kapat" @click="taskFormOpen=false"><X :size="22"/></button></div><form @submit.prevent="addTask"><label>Görev adı <input v-model="newTask.title" placeholder="Örn. Vue sunumunu tamamla" maxlength="95" autofocus required/></label><label>Ders / kategori <input v-model="newTask.course" placeholder="Ders adı" maxlength="55"/></label><div class="form-pair"><label>Son tarih <input v-model="newTask.deadline" type="date" required/></label><label>Öncelik <select v-model="newTask.priority"><option>Yüksek</option><option>Orta</option><option>Düşük</option></select></label></div><button class="primary-button form-submit" type="submit"><Plus :size="18"/> Görevi kaydet</button></form></section>
      <section v-if="lessonFormOpen" class="modal-card" role="dialog" aria-modal="true" aria-labelledby="lesson-title"><div class="modal-head"><div><span class="section-eyebrow">HAFTALIK PLAN</span><h2 id="lesson-title">{{editingLessonId ? 'Dersi düzenle' : 'Ders ekle'}}</h2></div><button class="icon-button" aria-label="Kapat" @click="lessonFormOpen=false"><X :size="22"/></button></div><form @submit.prevent="addLesson"><label>Ders adı <input ref="lessonTitleInput" v-model="newLesson.title" placeholder="Örn. Web Programlama I" maxlength="75" required /></label><div class="form-pair"><label>Gün <select v-model="newLesson.day"><option v-for="(day,i) in weekdays" :key="day" :value="i+1">{{day}}</option></select></label><label>Derslik <input v-model="newLesson.room" maxlength="25" placeholder="B-204" /></label></div><div class="form-pair"><label>Başlangıç <input v-model="newLesson.time" type="time" required /></label><label>Bitiş <input v-model="newLesson.duration" type="time" required /></label></div><p v-if="lessonConflict.length" class="lesson-conflict-warning" role="status"><AlertTriangle :size="17"/> Bu saatte {{lessonConflict.map(item=>item.title).join(', ')}} bulunuyor. Kaydedersen dersler çizelgede çakışmalı gösterilir.</p><div class="form-pair"><label>Tür <select v-model="newLesson.type"><option>Teori</option><option>Uygulama</option><option>Seminer</option></select></label><label>Renk <select v-model="newLesson.color"><option value="teal">Turkuaz</option><option value="coral">Mercan</option><option value="violet">Mor</option><option value="yellow">Sarı</option></select></label></div><button class="primary-button form-submit" type="submit"><Check :size="18"/> {{editingLessonId ? 'Değişiklikleri kaydet' : 'Dersi kaydet'}}</button></form></section>
      <section v-if="noteFormOpen" class="modal-card" role="dialog" aria-modal="true" aria-labelledby="note-title"><div class="modal-head"><div><span class="section-eyebrow">YENİ FİKİR</span><h2 id="note-title">{{editingNoteId ? 'Notu düzenle' : 'Not oluştur'}}</h2></div><button class="icon-button" aria-label="Kapat" @click="noteFormOpen=false"><X :size="22"/></button></div><form @submit.prevent="addNote"><label>Başlık <input v-model="newNote.title" placeholder="Notun başlığı" maxlength="70" required /></label><label>Notun <textarea v-model="newNote.body" placeholder="Buraya yaz..." rows="6" maxlength="700" required></textarea></label><label>Kart rengi <select v-model="newNote.color"><option value="sand">Krem</option><option value="lavender">Lila</option><option value="mint">Mint</option></select></label><button class="primary-button form-submit" type="submit"><Check :size="18"/> {{editingNoteId ? 'Değişiklikleri kaydet' : 'Notu kaydet'}}</button></form></section>
    </div>
    <Transition name="toast"><div v-if="toast" class="toast-popup" role="status" aria-live="polite"><CheckCircle2 :size="18"/>{{toast}} <button v-if="undoSnapshot" class="undo-action" @click="undoDelete"><Undo2 :size="15"/> Geri al</button></div></Transition>
    <CodeInspector v-if="inspectMode && inspectSection" :section="inspectSection" @select="inspectSection=$event" @close="toggleInspector" />
  </div>
</template>
