<script setup>
import { CalendarDays, Trash2, Circle, CheckCircle2 } from 'lucide-vue-next'
// @lab:task-props:start
const props = defineProps({ task: { type:Object, required:true } })
const emit = defineEmits(['toggle','remove'])
// @lab:task-props:end
const trDate = date => {
  const d = new Date(`${date}T12:00:00`)
  return Number.isNaN(d.getTime()) ? 'Tarih yok' : new Intl.DateTimeFormat('tr-TR',{day:'numeric',month:'short'}).format(d)
}
</script>
<template>
  <div class="task-row" :class="{'task-is-done':task.done}">
    <!-- @lab:task-event:start -->
    <button class="task-check" :aria-label="task.done ? 'Görevi geri al' : 'Görevi tamamla'" @click="emit('toggle', task.id)">
      <CheckCircle2 v-if="task.done" :size="23" /><Circle v-else :size="23" />
    </button>
    <!-- @lab:task-event:end -->
    <div class="task-info"><strong>{{ task.title }}</strong><span>{{ task.course }}</span></div>
    <span class="task-date"><CalendarDays :size="14" /> {{ trDate(task.deadline) }}</span>
    <span class="priority-chip" :class="`priority-${task.priority.toLowerCase()}`">{{ task.priority }}</span>
    <button class="task-remove icon-button" :aria-label="`${task.title} görevini sil`" title="Görevi sil" @click="emit('remove',task.id)"><Trash2 :size="16" /></button>
  </div>
</template>
