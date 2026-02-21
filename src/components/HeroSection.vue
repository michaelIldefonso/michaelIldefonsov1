<script setup>
import { LogoGithub, LogoLinkedin } from '@vicons/ionicons5'
import { ChevronDoubleDown20Filled } from '@vicons/fluent'
const name = 'Michael S. Ildefonso'
const title = 'Full-Stack Developer'
const tagline = 'Building modern web applications with Vue.js and beyond.'
</script>

<template>
  <section class="section hero">
    <div class="hero-content">
      <n-h1 id="name">{{ name }}</n-h1>
      <n-h2 id="title">{{ title }}</n-h2>
      <n-p id="tagline">{{ tagline }}</n-p>
    </div>
    <n-space vertical>
      <div class="hero-actions">
        <n-space>
          <n-button type="primary" size="large">Contact Me</n-button>
          <n-button size="large">Download CV</n-button>
        </n-space>
      </div>

      <div class="hero-social">
        <n-space>
          <n-button tag="a" href="https://github.com/michaelIldefonso" target="_blank" size="small">
            <template #icon>
              <LogoGithub />
            </template>
          </n-button>
          <n-button tag="a" href="https://linkedin.com/in/..." target="_blank" size="small">
            <template #icon>
              <LogoLinkedin />
            </template>
          </n-button>
        </n-space>
      </div>
    </n-space>
    <div class="hero-scroll">
      <n-button text style="font-size: 24px">
        <ChevronDoubleDown20Filled :width="34" :height="34" />
      </n-button>
    </div>
  </section>
</template>

<style scoped>
#name {
  font-size: 4rem !important;
  font-weight: 700 !important;
  margin: 0 !important;
}

#title {
  font-size: 1.8rem !important;
  color: var(--accent) !important;
  margin: 0 !important;
}

#tagline {
  color: var(--text-muted) !important;
  font-size: 1rem !important;
}

.hero {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 8rem 0;
}
.hero-scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: auto;
}
.hero-social {
  display: flex;
  padding: 2rem 0;
  gap: 16px;
}
</style>
