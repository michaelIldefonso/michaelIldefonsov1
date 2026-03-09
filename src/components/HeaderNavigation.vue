<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { LogoGithub, LogoLinkedin, MenuOutline, CloseOutline } from '@vicons/ionicons5'

const isScrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')

const navLinks = [
  { id: 'about', label: '//About' },
  { id: 'skills', label: '//Skills' },
  { id: 'projects', label: '//Projects' },
  { id: 'contact', label: '//Contact' },
]

let sectionEls = []
let rafId = null

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  mobileOpen.value = false
}

const scrollTop = (e) => {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const updateScrollState = () => {
  isScrolled.value = window.scrollY > 40
  for (let i = sectionEls.length - 1; i >= 0; i--) {
    const el = sectionEls[i]
    if (el && el.getBoundingClientRect().top <= 120) {
      activeSection.value = el.id
      return
    }
  }
  activeSection.value = ''
}

const onScroll = () => {
  if (rafId !== null) return
  rafId = window.requestAnimationFrame(() => {
    updateScrollState()
    rafId = null
  })
}

onMounted(async () => {
  await nextTick()
  sectionEls = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean)
  updateScrollState()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (rafId !== null) {
    window.cancelAnimationFrame(rafId)
  }
})
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-bg-surface/25 backdrop-blur-md shadow-lg' : 'bg-transparent'"
  >
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between w-full">
      <a
        class="font-bold text-xl tracking-tight text-text select-none cursor-pointer"
        href="#"
        @click="scrollTop"
      >
        <span class="text-text-secondary">&lt;</span>MI<span class="text-text-secondary"
          >/&gt;</span
        >
      </a>

      <nav class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.id"
          class="relative text-sm font-medium text-text-secondary hover:text-text transition-colors duration-200 pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300"
          :class="activeSection === link.id ? 'text-text after:w-full' : 'after:w-0'"
          href="#"
          @click.prevent="scrollTo(link.id)"
          >{{ link.label }}</a
        >
      </nav>

      <div class="flex items-center gap-4">
        <a
          href="https://github.com/michaelIldefonso"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex text-text-secondary hover:text-text transition-colors duration-200"
        >
          <LogoGithub class="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-ildefonso-62ba77267"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex text-text-secondary hover:text-text transition-colors duration-200"
        >
          <LogoLinkedin class="h-5 w-5" />
        </a>
        <button
          class="md:hidden text-text-secondary hover:text-text transition-colors duration-200 p-1"
          @click="mobileOpen = !mobileOpen"
          aria-label="Toggle menu"
        >
          <component :is="mobileOpen ? CloseOutline : MenuOutline" class="h-4 w-4" />
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <div
      :class="mobileOpen ? 'flex flex-col' : 'hidden'"
      class="md:hidden bg-bg-surface backdrop-blur-md border-t border-border-subtle px-6 py-4 gap-3"
    >
      <a
        v-for="link in navLinks"
        :key="link.id"
        class="text-sm font-medium transition-colors duration-200 py-2 border-b border-border-subtle"
        :class="activeSection === link.id ? 'text-accent' : 'text-text-secondary hover:text-text'"
        href="#"
        @click.prevent="scrollTo(link.id)"
        >{{ link.label }}</a
      >
      <div class="flex items-center gap-4 pt-2">
        <a
          href="https://github.com/michaelIldefonso"
          target="_blank"
          rel="noopener noreferrer"
          class="text-text-secondary hover:text-text transition-colors duration-200"
        >
          <LogoGithub class="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-ildefonso-62ba77267"
          target="_blank"
          rel="noopener noreferrer"
          class="text-text-secondary hover:text-text transition-colors duration-200"
        >
          <LogoLinkedin class="h-5 w-5" />
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
