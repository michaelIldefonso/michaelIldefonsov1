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
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
}

.lazy-slot {
  width: 100%;
}

.lazy-about {
  min-height: 720px;
}

.lazy-skills {
  min-height: 600px;
}

.lazy-projects {
  min-height: 760px;
}

.lazy-contact {
  min-height: 780px;
  padding-bottom: 8rem;
}

.section-divider {
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(129, 140, 248, 0.12), transparent);
  max-width: 1200px;
  margin: 0 auto;
}

@media (max-width: 900px) {
  .lazy-about {
    min-height: 860px;
  }

  .lazy-skills {
    min-height: 760px;
  }

  .lazy-projects {
    min-height: 980px;
  }

  .lazy-contact {
    min-height: 980px;
    padding-bottom: 7rem;
  }
}

@media (max-width: 600px) {
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
