import { ref, watch } from 'vue'

export function useStoredList(key, fallback) {
  let initial = fallback
  try {
    const fromStorage = localStorage.getItem(key)
    if (fromStorage) {
      const parsed = JSON.parse(fromStorage)
      if (Array.isArray(parsed)) initial = parsed
    }
  } catch (error) {
    console.warn('Kayıt okunamadı:', error)
  }
  const items = ref(initial)
  watch(items, value => {
    try { localStorage.setItem(key, JSON.stringify(value)) }
    catch (error) { console.warn('Kayıt yazılamadı:', error) }
  }, { deep:true })
  return items
}
export function uid() {
  return globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`
}
