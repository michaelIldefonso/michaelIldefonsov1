<script setup>
// import { LogoGithub, LogoLinkedin, CodeSlash } from '@vicons/ionicons5'
import { ChevronDoubleDown20Filled } from '@vicons/fluent'
const name = 'Michael S. Ildefonso'
const title = 'Full-Stack Developer'
</script>

<template>
  <div class="hero-grid">
    <div class="navbar-content">
      <!-- Add your image here -->
      <!-- <div class="image-me">
        <img src="@/assets/me.svg" alt="Logo" class="logo" />
      </div> -->
      <n-menu :options="menuOptions" mode="vertical"></n-menu>
    </div>
  </div>
  <!-- grid here -->
  <section class="section hero">
    <div class="hero-content">
      <n class="tagline">Hey, I'm</n>
      <n-h1 id="name">{{ name }}</n-h1>
      <n-h2 id="title">{{ title }}</n-h2>
      <n-p id="tagline"
        >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab perspiciatis, natus ipsum,
        quos saepe harum <br />
        iste ipsam quibusdam cumque esse error odit corrupti, amet libero vel dignissimos tenetur
        soluta. Magnam!</n-p
      >
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
  color: var(--text-muted) !important;
  font-size: 1rem !important;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
  position: relative; /* needed for ::after */
  overflow: hidden;
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
  margin-top: auto;
}
.hero-social {
  display: flex;
  padding: 2rem 0;
  gap: 16px;
}

.hero-grid {
  position: absolute;
  top: 0;
  right: 0;
  width: 55%;
  height: 100%;
  background-image:
    linear-gradient(rgba(91, 192, 190, 0.466) 1px, transparent 1px),
    linear-gradient(90deg, rgba(91, 192, 190, 0.466) 1px, transparent 1px),
    radial-gradient(ellipse at 60% 50%, rgba(91, 192, 190, 0.418), 85%, transparent 40%);
  background-size:
    100px 100px,
    100px 100px,
    100% 100%;
  mask-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent);
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
