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
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
})

const scrollToSection = (e, id) => {
  e.preventDefault()
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section class="hero" id="hero">
    <div class="hero-content">
      <p class="hero-greeting">Hi, I'm</p>
      <h1 class="hero-name">Michael<br />Ildefonso</h1>
      <h2 class="hero-title">Full-Stack Developer</h2>
      <div class="hero-sub-wrap" aria-live="polite">
        <p class="hero-sub">
          {{ displayedTagline }}<span class="typing-caret" aria-hidden="true"></span>
        </p>
      </div>
      <div class="hero-ctas">
        <a href="#contact" class="btn-primary" @click="(e) => scrollToSection(e, '#contact')"
          >Get in touch</a
        >
        <a href="#projects" class="btn-ghost" @click="(e) => scrollToSection(e, '#projects')"
          >View work ↓</a
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes caretBlink {
  0%,
  45% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

.hero {
  padding: calc(var(--nav-height) + 4rem) 5rem 1.5rem; /* was 3rem, try 1.5rem */
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
}

.hero-greeting {
  font-family: monospace;
  font-size: 0.95rem;
  color: var(--accent);
  letter-spacing: 3px;
  text-transform: uppercase;
  animation: fadeUp 0.8s ease both;
}

.hero-name {
  font-size: clamp(4rem, 8vw, 7rem);
  max-width: 700px; /* stops it from going too wide vs the content below */
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: var(--text);
  animation: fadeUp 0.8s ease 0.1s both;
  background: linear-gradient(135deg, #e0e7ff, #818cf8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-title {
  font-size: clamp(1.1rem, 2vw, 1.45rem);
  font-weight: 500;
  color: var(--accent);
  animation: fadeUp 0.8s ease 0.2s both;
}

.hero-sub-wrap {
  max-width: 60ch;
  min-height: 3.6rem;
  display: flex;
  align-items: flex-start;
}

.hero-sub {
  margin: 0;
  font-size: 1rem;
  color: var(--text-muted);
  line-height: 1.8;
  padding-left: 1rem;
  border-left: 2px solid color-mix(in srgb, var(--accent) 55%, transparent);
  letter-spacing: 0.01em;
  animation: fadeUp 0.8s ease 0.3s both;
  text-wrap: balance;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.typing-caret {
  width: 2px;
  height: 1.05em;
  background: var(--accent);
  border-radius: 1px;
  display: inline-block;
  animation: caretBlink 1s steps(1, end) infinite;
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  margin-top: 0.75rem;
  flex-wrap: wrap;
  animation: fadeUp 0.8s ease 0.4s both;
}

.btn-primary {
  padding: 0.75rem 1.75rem;
  background: var(--accent);
  color: #080b12;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.25s ease;
  letter-spacing: 0.3px;
}
.btn-primary:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(129, 140, 248, 0.3);
}

.btn-ghost {
  padding: 0.75rem 1.75rem;
  border: 1px solid rgba(129, 140, 248, 0.35);
  color: var(--text);
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.25s ease;
}
.btn-ghost:hover {
  background: rgba(129, 140, 248, 0.08);
  border-color: var(--accent);
  transform: translateY(-2px);
}

@media (max-width: 960px) {
  .hero {
    padding: calc(var(--nav-height) + 3rem) 2rem 4rem;
    text-align: center;
  }
  .hero-content {
    align-items: center;
    max-width: 100%;
  }
  .hero-sub-wrap {
    max-width: 100%;
    min-height: 4.2rem;
  }
  .hero-sub {
    border-left: none;
    border-top: 2px solid color-mix(in srgb, var(--accent) 55%, transparent);
    padding-left: 0;
    padding-top: 0.75rem;
  }
  .hero-ctas {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: calc(var(--nav-height) + 2rem) 1.25rem 3rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-greeting,
  .hero-name,
  .hero-title,
  .hero-sub,
  .hero-ctas {
    animation: none !important;
  }
  .btn-primary:hover,
  .btn-ghost:hover {
    transform: none;
  }

  .typing-caret {
    animation: none;
  }
}
</style>
