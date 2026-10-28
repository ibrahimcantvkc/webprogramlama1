<script setup>
import { Clock3, MapPin, ArrowUpRight } from 'lucide-vue-next'
// @lab:props:start
const props = defineProps({ lesson: { type:Object, required:true }, compact:Boolean })
const emit = defineEmits(['remove'])
// @lab:props:end
</script>
<template>
  <article class="course-card" :class="[`course-${lesson.color}`,{'course-compact':compact}]">
    <div class="course-accent"></div>
    <div class="course-content">
      <div class="course-top"><span class="course-tag">{{ lesson.type }}</span><ArrowUpRight :size="17" class="course-arrow"/></div>
      <h3>{{ lesson.title }}</h3>
      <div class="course-details"><span><Clock3 :size="14"/>{{ lesson.time }} — {{ lesson.duration }}</span><span><MapPin :size="14"/>{{ lesson.room }}</span></div>
    </div>
  </article>
</template>
