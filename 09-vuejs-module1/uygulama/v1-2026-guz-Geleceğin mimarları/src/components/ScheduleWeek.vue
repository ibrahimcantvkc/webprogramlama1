<script setup>
import { computed } from 'vue'
import { Clock3, MapPin, AlertTriangle, Plus } from 'lucide-vue-next'
import { weekdays } from '../data/starter.js'

// Haftalık takvim: saatleri piksel konumuna dönüştürür, çakışan dersleri yan yana dizer.
// @lab:week-timeline:start
const props = defineProps({ lessons: { type: Array, required: true }, today: { type: Number, default: 1 } })
const emit = defineEmits(['edit', 'add'])
const pixelsPerHour = 64
const minute = value => {
  const [hour, min] = String(value || '08:00').split(':').map(Number)
  return (hour || 0) * 60 + (min || 0)
}
const startHour = computed(() => Math.max(0, Math.min(8, ...props.lessons.map(l => Math.floor(minute(l.time)/60)))))
const endHour = computed(() => Math.min(24, Math.max(20, ...props.lessons.map(l => Math.ceil(minute(l.duration)/60)))))
const timeLabels = computed(() => Array.from({length:endHour.value - startHour.value + 1}, (_,i) => `${String(i+startHour.value).padStart(2,'0')}:00`))
// Her 30 dakikalık boşluk klavye ve dokunmatik ekranla seçilebilir.
const emptySlots = computed(() => Array.from({length:(endHour.value-startHour.value)*2}, (_,i) => {
  const total = startHour.value*60 + i*30
  const hour = String(Math.floor(total/60)).padStart(2,'0')
  const minutePart = String(total%60).padStart(2,'0')
  return { index:i, time:`${hour}:${minutePart}`, top:i*pixelsPerHour/2 }
}))
function chooseSlot(day, time){ emit('add', {day, time}) }
const calendarDays = computed(() => weekdays.map((name, index) => {
  const day = index + 1
  const lessons = props.lessons.filter(l => Number(l.day) === day)
    .map(l => ({ ...l, start: minute(l.time), finish: minute(l.duration) }))
    .filter(l => l.finish > l.start).sort((a,b) => a.start - b.start)
  // Birbiriyle çakışan blokları gruplayıp eşit genişlikte kulvarlara ayırıyoruz.
  const groups = []
  for (const lesson of lessons) {
    const last = groups.at(-1)
    if (!last || lesson.start >= last.finish) groups.push({ finish:lesson.finish, items:[lesson] })
    else { last.finish = Math.max(last.finish,lesson.finish); last.items.push(lesson) }
  }
  const blocks = []
  for (const group of groups) {
    const lanes = []
    for (const lesson of group.items) {
      let lane = lanes.findIndex(end => end <= lesson.start)
      if (lane < 0) { lane = lanes.length; lanes.push(lesson.finish) }
      else lanes[lane] = lesson.finish
      blocks.push({ ...lesson, lane, laneCount:0, conflict:group.items.length>1 })
    }
    for (const block of blocks.slice(-group.items.length)) block.laneCount = lanes.length
  }
  return { name,day,blocks,conflicts:blocks.some(b=>b.conflict) }
}))
const hasConflicts = computed(() => calendarDays.value.some(day => day.conflicts))
const itemStyle = item => {
  const top = Math.max(0, (item.start - startHour.value*60)/60 * pixelsPerHour)
  const height = Math.max(37, (Math.min(endHour.value*60,item.finish)-Math.max(startHour.value*60,item.start))/60*pixelsPerHour - 5)
  return {
    top:`${top}px`, height:`${height}px`,
    left:`calc(${item.lane*100/item.laneCount}% + 3px)`,
    width:`calc(${100/item.laneCount}% - 6px)`
  }
}
// @lab:week-timeline:end
</script>
<template>
  <div class="calendar-week-shell">
    <div class="calendar-week-head">
      <div><strong>Haftalık çizelge</strong><small>Boş zaman aralığını seçerek o saate ders ekle.</small></div>
      <span v-if="hasConflicts" class="calendar-conflict-legend"><AlertTriangle :size="15"/> Çakışan dersler var</span>
    </div>
    <div class="week-scroll" role="region" aria-label="Haftalık ders çizelgesi" tabindex="0">
      <div class="week-board">
        <div class="week-corner">SAAT</div>
        <div v-for="day in calendarDays" :key="`head-${day.day}`" class="week-day-head" :class="{'week-day-current':day.day===today}">
          <span>{{ day.name }}</span><small>{{day.blocks.length}} ders <AlertTriangle v-if="day.conflicts" :size="13"/></small>
        </div>
        <div class="week-hours" :style="{height:`${(endHour-startHour)*pixelsPerHour}px`}">
          <span v-for="(time,i) in timeLabels.slice(0,-1)" :key="time" class="week-hour-label" :style="{top:`${i*pixelsPerHour}px`}">{{time}}</span>
        </div>
        <div v-for="day in calendarDays" :key="day.day" class="week-day-lane" :class="{'week-lane-today':day.day===today}" :style="{height:`${(endHour-startHour)*pixelsPerHour}px`}">
          <button v-for="slot in emptySlots" :key="`${day.day}-${slot.time}`"
            type="button" class="week-empty-slot"
            :style="{top:`${slot.top}px`,height:`${pixelsPerHour/2}px`}"
            :aria-label="`${day.name} ${slot.time} saatine ders ekle`"
            :title="`${day.name} · ${slot.time} — Ders ekle`"
            @click="chooseSlot(day.day, slot.time)"><Plus :size="14" aria-hidden="true"/><span>Ders ekle</span></button>
          <button v-for="lesson in day.blocks" :key="lesson.id" class="week-lesson-block" :class="[`week-block-${lesson.color}`,{'week-block-conflict':lesson.conflict}]" :style="itemStyle(lesson)" :title="`${lesson.title} · ${lesson.time}–${lesson.duration} · ${lesson.room}`" @click="emit('edit',lesson)">
            <strong>{{lesson.title}}</strong><span><Clock3 :size="12"/> {{lesson.time}}–{{lesson.duration}}</span><small><MapPin :size="12"/> {{lesson.room}}</small>
          </button>
        </div>
      </div>
    </div>
    <p class="calendar-help">Yarımşar saatlik aralıklara ders eklenebilir. Ders kartları düzenlenir; çakışan dersler yan yana gösterilir.</p>
  </div>
</template>
