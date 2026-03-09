<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const taglines = [
  'I build things that work, then make them better.',
  'Backend-first. Always learning. Always shipping.',
  'I pick the hardest option and figure it out.',
]

const displayedTagline = ref('')

let timeoutId = null
let taglineIndex = 0
let charIndex = 0
let isDeleting = false

const TYPE_SPEED = 52
const DELETE_SPEED = 28
const FULL_TEXT_PAUSE = 1400
const NEXT_TAGLINE_DELAY = 320

const tickTagline = () => {
  const activeTagline = taglines[taglineIndex]

  if (!isDeleting) {
    charIndex = Math.min(charIndex + 1, activeTagline.length)
    displayedTagline.value = activeTagline.slice(0, charIndex)

    if (charIndex === activeTagline.length) {
      isDeleting = true
      timeoutId = setTimeout(tickTagline, FULL_TEXT_PAUSE)
      return
    }

    timeoutId = setTimeout(tickTagline, TYPE_SPEED)
    return
  }

  charIndex = Math.max(charIndex - 1, 0)
  displayedTagline.value = activeTagline.slice(0, charIndex)

  if (charIndex === 0) {
    isDeleting = false
    taglineIndex = (taglineIndex + 1) % taglines.length
    timeoutId = setTimeout(tickTagline, NEXT_TAGLINE_DELAY)
    return
  }

  timeoutId = setTimeout(tickTagline, DELETE_SPEED)
}

onMounted(() => {
  displayedTagline.value = ''
  timeoutId = setTimeout(tickTagline, 350)
})

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId)
})

const scrollToSection = (e, id) => {
  e.preventDefault()
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section
    id="hero"
    class="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 overflow-hidden"
  >
    <p class="font-mono text-xs tracking-widest uppercase text-text-muted mb-4">Hello, world</p>

    <h1
      class="font-black leading-none tracking-tight text-text mb-4"
      style="font-size: clamp(3.5rem, 8vw, 7rem)"
    >
      Michael Ildefonso
    </h1>

    <h2 class="text-2xl font-medium text-text-secondary mb-3">Full-Stack Developer</h2>

    <div class="min-h-8 mb-8" aria-live="polite">
      <p class="text-base text-text-muted">
        {{ displayedTagline
        }}<span
          class="inline-block w-0.5 h-[1em] bg-accent ml-0.5 align-middle animate-pulse"
          aria-hidden="true"
        ></span>
      </p>
    </div>

    <div class="flex gap-2 sm:gap-3 flex-wrap">
      <a
        href="#contact"
        class="px-6 py-3 bg-accent text-black font-semibold text-sm transition-colors duration-200 hover:bg-accent-hover hover:outline-border-black"
        @click="(e) => scrollToSection(e, '#contact')"
      >
        Get in touch
      </a>
      <a
        href="#projects"
        class="px-6 py-3 border border-border-strong text-text font-semibold text-sm transition-colors duration-200 hover:border-accent hover:text-accent"
        @click="(e) => scrollToSection(e, '#projects')"
      >
        View work ↓
      </a>
    </div>
  </section>
</template>
