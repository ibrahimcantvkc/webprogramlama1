<script setup>
import { ref } from 'vue'
import { Eye, EyeOff, RotateCcw, Sparkles } from 'lucide-vue-next'
// @lab:playground-state:start
const message = ref('Merhaba Vue!')
const visible = ref(true)
const color = ref('teal')
const disabled = ref(false)
// @lab:playground-state:end
function reset(){message.value='Merhaba Vue!';visible.value=true;color.value='teal';disabled.value=false}
</script>
<template>
  <div class="playground-demo">
    <div class="preview-caption">METİN · KOŞUL · DİNAMİK ÖZELLİK</div>
    <label class="playground-label">Başlık metni <input :value="message" maxlength="65" @input="message=$event.target.value" placeholder="Bir başlık yaz..."/></label>
    <div class="playground-controls"><button :class="{'preview-tab-active':visible}" @click="visible=!visible"><Eye v-if="visible" :size="15"/><EyeOff v-else :size="15"/> {{visible?'Görünür':'Gizli'}}</button><button :class="{'preview-tab-active':color==='coral'}" @click="color=color==='teal'?'coral':'teal'">Rengi değiştir</button><button @click="disabled=!disabled">{{disabled?'Butonu etkinleştir':'Butonu devre dışı bırak'}}</button></div>
    <div class="playground-render">
      <!-- @lab:playground-template:start -->
      <div v-if="visible" class="playground-card" :class="`playground-${color}`">
        <Sparkles :size="17"/><strong>{{ message || 'Başlık girilmedi' }}</strong>
      </div>
      <p v-else class="playground-hidden">v-if koşulu yanlış: kart DOM'da bulunmuyor.</p>
      <button class="preview-primary" :disabled="disabled">Dinamik buton</button>
      <!-- @lab:playground-template:end -->
    </div>
    <div class="playground-legend"><span><code>&#123;&#123; &#125;&#125;</code> metin</span><span><code>v-if</code> görünürlük</span><span><code>:class</code> renk</span><span><code>:disabled</code> durum</span></div>
    <button class="preview-secondary" @click="reset"><RotateCcw :size="15"/> Başlangıca dön</button>
    <p class="preview-tip">Bu kontroller gerçek Vue veri bağlamalarıyla çalışır. Kullanıcı girdisi düz metin olarak gösterilir; v-html kullanılmaz.</p>
  </div>
</template>
