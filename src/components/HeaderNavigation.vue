<script setup>
import { ref, nextTick, onMounted, onUnmounted } from 'vue'
import { NIcon } from 'naive-ui'
import { LogoGithub, LogoLinkedin, MenuOutline, CloseOutline } from '@vicons/ionicons5'

const isScrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('')

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
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
  <header class="nav-header" :class="{ scrolled: isScrolled }">
    <div class="nav-inner">
      <a class="nav-logo" href="#" @click="scrollTop">
        <span class="logo-tag">&lt;</span>MI<span class="logo-tag">/&gt;</span>
      </a>

      <nav class="nav-links">
        <a
          v-for="link in navLinks"
          :key="link.id"
          class="nav-link"
          :class="{ active: activeSection === link.id }"
          href="#"
          @click.prevent="scrollTo(link.id)"
          >{{ link.label }}</a
        >
      </nav>

      <div class="nav-right">
        <a
          href="https://github.com/michaelIldefonso"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-icon-link"
        >
          <NIcon size="19"><LogoGithub /></NIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/michael-ildefonso-62ba77267"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-icon-link"
        >
          <NIcon size="19"><LogoLinkedin /></NIcon>
        </a>
        <button class="mobile-toggle" @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
          <NIcon size="21">
            <component :is="mobileOpen ? CloseOutline : MenuOutline" />
          </NIcon>
        </button>
      </div>
    </div>

    <!-- Mobile dropdown -->
    <div class="mobile-menu" :class="{ open: mobileOpen }">
      <a
        v-for="link in navLinks"
        :key="link.id"
        class="mobile-link"
        :class="{ active: activeSection === link.id }"
        href="#"
        @click.prevent="scrollTo(link.id)"
        >{{ link.label }}</a
      >
      <div class="mobile-socials">
        <a
          href="https://github.com/michaelIldefonso"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-icon-link"
        >
          <NIcon size="19"><LogoGithub /></NIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/michael-ildefonso-62ba77267"
          target="_blank"
          rel="noopener noreferrer"
          class="nav-icon-link"
        >
          <NIcon size="19"><LogoLinkedin /></NIcon>
        </a>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition:
    background 0.3s ease,
    box-shadow 0.3s ease;
}

.nav-header.scrolled {
  background: rgba(8, 11, 18, 0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 64px;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0 5rem;
}

.nav-logo {
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s;
  margin-right: auto;
}
.nav-logo:hover {
  color: var(--accent);
}
.logo-tag {
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 0.2rem;
}

.nav-link {
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0.85rem;
  right: 0.85rem;
  height: 1.5px;
  background: var(--accent);
  transform: scaleX(0);
  transition: transform 0.2s ease;
  border-radius: 1px;
}
.nav-link:hover {
  color: var(--text);
}
.nav-link:hover::after {
  transform: scaleX(0.7);
}
.nav-link.active {
  color: var(--accent);
}
.nav-link.active::after {
  transform: scaleX(1);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.nav-icon-link {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: var(--text-muted);
  text-decoration: none;
  transition:
    color 0.2s,
    background-color 0.2s;
}
.nav-icon-link:hover {
  color: var(--text);
  background: rgba(129, 140, 248, 0.1);
}

.mobile-toggle {
  display: none;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text);
  cursor: pointer;
  transition: background 0.2s;
}
.mobile-toggle:hover {
  background: rgba(129, 140, 248, 0.08);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 0.75rem 2rem 1.5rem;
  gap: 0.1rem;
  background: rgba(8, 11, 18, 0.98);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}
.mobile-menu.open {
  display: flex;
}

.mobile-link {
  padding: 0.8rem 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: color 0.2s;
}
.mobile-link:last-of-type {
  border-bottom: none;
}
.mobile-link:hover,
.mobile-link.active {
  color: var(--accent);
}

.mobile-socials {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-top: 0.5rem;
}

@media (max-width: 768px) {
  .nav-inner {
    padding: 0 1.5rem;
  }
  .nav-links {
    display: none;
  }
  .mobile-toggle {
    display: flex;
  }
}

@media (hover: none), (pointer: coarse) {
  .nav-header.scrolled {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
</style>
