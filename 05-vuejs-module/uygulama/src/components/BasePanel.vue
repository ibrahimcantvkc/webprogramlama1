<script setup>
defineProps({ title:String, eyebrow:String, actionLabel:String })
defineEmits(['action'])
</script>
<template>
  <section class="panel base-panel">
    <div class="panel-head">
      <div><div v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</div><h2>{{ title }}</h2></div>
      <button v-if="actionLabel" class="quiet-link" @click="$emit('action')">{{ actionLabel }} <span>↗</span></button>
    </div>
    <!-- @lab:slot:start -->
    <div class="panel-body"><slot>Bu alana bileşenin içeriği gelir.</slot></div>
    <!-- @lab:slot:end -->
  </section>
</template>
