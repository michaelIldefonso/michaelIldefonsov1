<script setup>
import { LogoGithub, LogoLinkedin, ChevronDown } from '@vicons/ionicons5'
const name = 'Michael S. Ildefonso'
const title = 'Full-Stack Developer'
const tagline = 'Building modern web applications with Vue.js and beyond.'
</script>

<template>
  <section id="hero" class="section hero">
    <div class="hero-content">
      <n-h1>{{ name }}</n-h1>
      <n-h2>{{ title }}</n-h2>
      <n-p>{{ tagline }}</n-p>
    </div>
    <div class="hero-actions">
      <n-space justify="center" align="center">
        <n-button type="primary">Contact Me</n-button>
        <n-button>Download CV</n-button>
      </n-space>
    </div>

    <div class="hero-social">
      <n-space justify="center" align="center">
        <n-button tag="a" href="https://github.com/michaelIldefonso" target="_blank">
          <template #icon>
            <LogoGithub />
          </template>
          GitHub
        </n-button>
        <n-button tag="a" href="https://linkedin.com/in/..." target="_blank">
          <template #icon>
            <LogoLinkedin />
          </template>
          LinkedIn
        </n-button>
      </n-space>
    </div>
    <div class="hero-scroll">
      <n-text>Scroll Down</n-text>
      <!-- or just an arrow icon -->
      <ChevronDown :width="24" :height="24" />
    </div>
  </section>
</template>
