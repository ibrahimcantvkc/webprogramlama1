<script setup>
import { LayoutDashboard, CalendarDays, ListTodo, StickyNote, Code2, MousePointer2, ArrowUpRight, X } from 'lucide-vue-next'
const props = defineProps({ active: {type:String,required:true},mobileOpen:Boolean,inspectMode:Boolean })
const emit = defineEmits(['navigate','close','toggle-inspect'])
const nav = [
 {key:'dashboard',name:'Genel Bakış',icon:LayoutDashboard},
 {key:'schedule',name:'Ders Programım',icon:CalendarDays},
 {key:'tasks',name:'Yapılacaklar',icon:ListTodo},
 {key:'notes',name:'Not Defterim',icon:StickyNote}
]
</script>
<template>
  <aside class="sidebar" data-inspect="navigation" :class="{'sidebar-mobile-open': mobileOpen}">
    <div class="brand-wrap">
      <div class="brand-mark"><span class="brand-mark-dot"></span><span class="brand-mark-orbit"></span></div>
      <div class="brand-txt"><strong>pusula<span>.</span></strong><small>Yönünü belirle, gününü planla.</small></div>
      <button class="icon-button sidebar-close" aria-label="Menüyü kapat" @click="emit('close')"><X :size="21" /></button>
    </div>
    <div class="nav-caption">ÇALIŞMA ALANI</div>
    <nav class="nav-links" aria-label="Ana menü">
      <!-- @lab:nav-bind:start -->
      <button v-for="item in nav" :key="item.key" class="nav-link"
        :class="{ 'nav-link-active': active === item.key }"
        @click="emit('navigate', item.key)">
        <component :is="item.icon" :size="19" :stroke-width="1.85" />
        <span>{{ item.name }}</span>
        <span v-if="active === item.key" class="nav-indicator"></span>
      </button>
      <!-- @lab:nav-bind:end -->
    </nav>
    <div class="nav-caption nav-caption-bottom">GELİŞTİRİCİ ALANI</div>
    <button class="nav-link nav-lab" :class="{'nav-link-active':active==='lab'}" @click="emit('navigate','lab')">
      <Code2 :size="19"/><span>Sunum Laboratuvarı</span><ArrowUpRight :size="16" class="nav-link-arrow"/>
    </button>
    <button class="nav-link nav-inspect inspect-trigger" :class="{'nav-link-active':inspectMode}" :aria-pressed="inspectMode" @click="emit('toggle-inspect')">
      <MousePointer2 :size="19"/><span>Kod İnceleme</span><span v-if="inspectMode" class="nav-indicator"></span>
    </button>
    <div class="sidebar-spacer"></div>
    <div class="side-bottom"><span class="status-dot"></span> Geleceğin Mimarları <span class="side-bottom-version">v3.2</span></div>
  </aside>
</template>
