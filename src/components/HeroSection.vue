<script setup>
// import { LogoGithub, LogoLinkedin, CodeSlash } from '@vicons/ionicons5'
import { ChevronDoubleDown20Filled } from '@vicons/fluent'
const name = 'Michael S. Ildefonso'
const title = 'Full-Stack Developer'

const scrollToSection = (e, sectionId) => {
  e.preventDefault()
  const element = document.querySelector(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="hero-grid"></div>
  <div class="gradient-line"></div>

  <!-- grid here -->
  <section class="section hero">
    <div class="hero-content">
      <n-text class="tagline">Hey, I'm</n-text>
      <n-h1 id="name">{{ name }}</n-h1>
      <n-h2 id="title">{{ title }}</n-h2>
      <n-text id="tagline"> Backend-first. Full-stack in progress.</n-text>
    </div>
    <div class="hero-actions">
      <div class="hero-actions-buttons">
        <n-button
          tag="a"
          href="#contact"
          @click="(e) => scrollToSection(e, '#contact')"
          type="primary"
          size="large"
          >Contact Me</n-button
        >
        <n-button
          tag="a"
          href="#projects"
          @click="(e) => scrollToSection(e, '#projects')"
          size="large"
          >View Projects</n-button
        >
      </div>
      <a href="#" class="hero-cv-link">View CV →</a>
    </div>
    <div class="hero-scroll">
      <n-button text style="font-size: 24px">
        <ChevronDoubleDown20Filled :width="34" :height="34" />
      </n-button>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

#name {
  font-size: 4rem !important;
  font-weight: 700 !important;
  margin: 0 !important;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

#title {
  font-size: 1.8rem !important;
  color: var(--accent) !important;
  margin: 0 !important;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

#tagline {
  color: var(--text-primary) !important;
  font-size: 1.1rem !important;
  line-height: 1.7 !important;
  max-width: 70ch !important;
  font-weight: 400 !important;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.tagline {
  font-size: 1rem !important;
  color: var(--text-muted) !important;
  animation: fadeInUp 0.8s ease-out both;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  position: relative;
  overflow: hidden;
}
.hero-social {
  display: none;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 8rem 0;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 2rem;
  animation: fadeInUp 0.8s ease-out 0.8s both;
}

.hero-actions-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-actions-buttons :deep(button) {
  transition: all 0.3s ease;
}

.hero-actions-buttons :deep(button:hover) {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(91, 192, 190, 0.2);
}

.hero-cv-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: inline-block;
  width: fit-content;
}

.hero-cv-link:hover {
  opacity: 0.8;
  transform: translateX(4px);
}

.hero-scroll {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  animation: fadeIn 1s ease-out 1s both;
}

.hero-scroll :deep(button) {
  animation: bounce 2s infinite;
  transition: all 0.3s ease;
}

.hero-scroll :deep(button:hover) {
  animation: none;
}

.hero-grid {
  position: absolute;
  top: 0;
  right: 0;
  width: 120%;
  height: 100%;
  background-image:
    linear-gradient(rgba(91, 192, 190, 0.466) 1px, transparent 1px),
    linear-gradient(90deg, rgba(91, 192, 190, 0.322) 1px, transparent 1px),
    radial-gradient(ellipse at 100% 0%, rgba(91, 192, 190, 0.281), 100%, transparent 40%);
  background-size:
    200px 200px,
    200px 200px,
    100% 100%;
  mask-image: radial-gradient(ellipse 80% 100% at 100% 0%, black 0%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 80% 100% at 100% 0%, black 0%, transparent 100%);
  pointer-events: none;
  z-index: 0;
}

@media (max-width: 768px) {
  .hero {
    padding: 0 24px;
  }
  .hero-content {
    margin: 4rem 0;
    gap: 8px;
  }
  #name {
    font-size: 2.5rem !important;
  }
  .hero {
    min-height: 70vh;
  }
  .hero-social {
    display: block;
  }
  .hero-scroll {
    display: none;
  }
}
@media (max-width: 480px) {
  #name {
    font-size: 2rem !important;
  }
  #title {
    font-size: 1.4rem !important;
  }
  #tagline {
    font-size: 1rem !important;
  }
  .hero {
    min-height: 70vh;
  }
  .hero-social {
    display: block;
  }
  .hero-scroll {
    display: none;
  }
}
</style>
