import { ref, onMounted } from 'vue'

export function useScrollReveal(threshold = 0.2) {
  const el = ref(null)
  const isVisible = ref(false)

  onMounted(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.disconnect()
        }
      },
      { threshold },
    )
    if (el.value) observer.observe(el.value)
  })

  return { el, isVisible }
}
