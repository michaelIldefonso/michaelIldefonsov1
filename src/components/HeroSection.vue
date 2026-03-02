<script setup>
// import { LogoGithub, LogoLinkedin, CodeSlash } from '@vicons/ionicons5'
import { ChevronDoubleDown20Filled } from '@vicons/fluent'
const name = 'Michael S. Ildefonso'
const title = 'Full-Stack Developer'
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
    <n-space vertical>
      <div class="hero-actions">
        <n-space>
          <n-button type="primary" size="large">Contact Me</n-button>
          <n-button size="large">View CV</n-button>
        </n-space>
      </div>

      <!-- <div class="hero-social">
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
      </div> -->
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
  color: var(--text-primary) !important;
  font-size: 1.1rem !important;
  line-height: 1.7 !important;
  max-width: 70ch !important;
  font-weight: 400 !important;
}

.tagline {
  font-size: 1rem !important;
  color: var(--text-muted) !important;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  position: relative;
  overflow: hidden;
}
/* .gradient-line {
  position: absolute;
  top: 70%;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    transparent 10%,
    rgba(91, 192, 190, 0.8) 50%,
    transparent 90%,
    transparent 100%
  );
  pointer-events: none;
  z-index: 1;
  transform: rotate(-15deg);
  filter: blur(0.5px);
  box-shadow: 0 0 20px rgba(91, 192, 190, 0.6), 0 0 40px rgba(91, 192, 190, 0.3);
  animation: laserPulse 3s ease-in-out infinite;
} */

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
  margin-top: auto;
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
/* .logo {
  filter: brightness(1.5) invert(1);
  transform: scaleX(-1);
  margin-left: 200px;
}
.image-me {
  background: radial-gradient(ellipse at 50% 50%, rgba(91, 192, 190, 0.418), transparent 40%);
} */
</style>
