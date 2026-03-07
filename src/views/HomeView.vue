<script setup>
import { ref, reactive, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import HeroSection from '@/components/HeroSection.vue'

const AboutSection = defineAsyncComponent(() => import('@/components/AboutSection.vue'))
const SkillSection = defineAsyncComponent(() => import('@/components/SkillSection.vue'))
const ProjectSection = defineAsyncComponent(() => import('@/components/ProjectSection.vue'))
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'))
const FooterSection = defineAsyncComponent(() => import('@/components/FooterSection.vue'))

const aboutAnchor = ref(null)
const skillsAnchor = ref(null)
const projectsAnchor = ref(null)
const contactAnchor = ref(null)

const loaded = reactive({
  about: false,
  skills: false,
  projects: false,
  contact: false,
  footer: false,
})

let observer = null
const sessionStamp = new Date().toLocaleString()

const lazyTargets = [
  { key: 'about', getEl: () => aboutAnchor.value },
  { key: 'skills', getEl: () => skillsAnchor.value },
  { key: 'projects', getEl: () => projectsAnchor.value },
  { key: 'contact', getEl: () => contactAnchor.value },
]

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const key = entry.target.dataset.lazyKey
        if (!key || loaded[key]) continue
        loaded[key] = true
        if (key === 'contact') loaded.footer = true
        observer?.unobserve(entry.target)
      }
    },
    {
      rootMargin: '280px 0px',
      threshold: 0.01,
    },
  )

  for (const target of lazyTargets) {
    const el = target.getEl()
    if (!el) continue
    el.dataset.lazyKey = target.key
    observer.observe(el)
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div class="page">
    <HeaderNavigation />
    <main>
      <div class="main-titlebar">
        <span class="tb-dots">[x] [-] [ ]</span>
        <span class="tb-path">C:\\Users\\michael\\portfolio.exe</span>
        <span class="tb-time">{{ sessionStamp }}</span>
      </div>

      <HeroSection />

      <section id="about" ref="aboutAnchor" class="lazy-slot lazy-about">
        <AboutSection v-if="loaded.about" />
      </section>

      <div class="section-divider"></div>

      <section id="skills" ref="skillsAnchor" class="lazy-slot lazy-skills">
        <SkillSection v-if="loaded.skills" />
      </section>

      <div class="section-divider"></div>

      <section id="projects" ref="projectsAnchor" class="lazy-slot lazy-projects">
        <ProjectSection v-if="loaded.projects" />
      </section>

      <div class="section-divider"></div>

      <section id="contact" ref="contactAnchor" class="lazy-slot lazy-contact">
        <ContactSection v-if="loaded.contact" />
      </section>

      <FooterSection v-if="loaded.footer" />
    </main>
    <div class="terminal-prompt-fixed" aria-hidden="true">C:\\Users\\michael&gt; _</div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding-bottom: 28px;
}

main {
  max-width: 1200px;
  margin: calc(var(--nav-height) + 1rem) auto 2rem;
  border: 1px solid var(--border-strong);
  background:
    linear-gradient(180deg, rgba(14, 14, 14, 0.96), rgba(10, 10, 10, 0.98)),
    repeating-linear-gradient(
      0deg,
      rgba(var(--accent-rgb), 0.02) 0px,
      rgba(var(--accent-rgb), 0.02) 1px,
      transparent 1px,
      transparent 4px
    );
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.03),
    0 0 0 1px rgba(var(--accent-rgb), 0.08);
}

.main-titlebar {
  height: 32px;
  border-bottom: 1px solid rgba(var(--accent-rgb), 0.22);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0.8rem;
  color: var(--text-muted);
  font-size: 0.72rem;
  letter-spacing: 0.05em;
  background: #0d0d0d;
}

.tb-dots {
  color: var(--accent);
}

.tb-path {
  margin-left: 0.9rem;
  opacity: 0.9;
}

.tb-time {
  margin-left: auto;
  color: var(--text-muted);
  font-size: 0.68rem;
}

.terminal-prompt-fixed {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 28px;
  display: flex;
  align-items: center;
  padding: 0 0.7rem;
  border-top: 1px solid rgba(var(--accent-rgb), 0.25);
  background: #0b0b0b;
  color: var(--accent);
  font-size: 0.74rem;
  letter-spacing: 0.04em;
  z-index: 1002;
}

.lazy-slot {
  width: 100%;
}

.lazy-about {
  min-height: 660px;
}

.lazy-skills {
  min-height: 560px;
}

.lazy-projects {
  min-height: 700px;
}

.lazy-contact {
  min-height: 720px;
  padding-bottom: 8rem;
}

.section-divider {
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  max-width: 1200px;
  margin: 0 auto;
}

.section-divider::before {
  content: '----- run next_section.cmd -----';
}

@media (max-width: 900px) {
  main {
    margin: calc(var(--nav-height) + 0.75rem) 0.6rem 1.5rem;
  }

  .lazy-about {
    min-height: 800px;
  }

  .lazy-skills {
    min-height: 700px;
  }

  .lazy-projects {
    min-height: 900px;
  }

  .lazy-contact {
    min-height: 900px;
    padding-bottom: 7rem;
  }
}

@media (max-width: 600px) {
  main {
    margin: calc(var(--nav-height) + 0.5rem) 0.35rem 1.2rem;
  }

  .lazy-about,
  .lazy-skills,
  .lazy-projects {
    min-height: 520px;
  }

  .lazy-contact {
    min-height: 760px;
    padding-bottom: 6rem;
  }
}
</style>
