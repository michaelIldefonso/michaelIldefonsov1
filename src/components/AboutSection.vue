<script setup>
import AboutExpanded from './AboutExpanded.vue'
</script>

<template>
  <section class="about-section" id="about">
    <n-p class="section-label">// get to know me</n-p>
    <div class="about-me">
      <div class="about-header">
        <n-h2 class="about">About Me</n-h2>
      </div>
      <div class="vertical-divider"></div>
      <div class="about-intro">
        <n-text>
          I am a <b>final year Computer Science student</b> and <b>Full Stack Developer</b> building
          at the intersection of <b>Backend Architecture</b> and <b>Modern Frontend Engineering</b>.
          I don’t just write code; I build practical solutions like a
          <b>Real-time Taglish AI Summarizer</b> that bridges complex model inference with a
          polished user experience. I am currently leveraging my <b>Vanilla JS fundamentals</b> to
          master the <b>Vue 3 ecosystem</b> to build data driven applications that are as performant
          as they are accessible.
        </n-text>
      </div>
    </div>
    <n-divider></n-divider>
    <n-space vertical :size="16">
      <div class="about-expanded">
        <AboutExpanded />
      </div>
    </n-space>
  </section>
</template>

<style scoped>
.about-section {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}
.about-intro {
  max-width: 80ch;
  font-size: 1.05rem;
  line-height: 1.8;
  text-indent: 3ch;
}
.about-me {
  display: flex;
  align-items: center;
  gap: 6rem;
  max-width: 1200px;
  margin: 0 auto;
}
b {
  color: var(--accent);
  font-weight: 600;
}

.vertical-divider {
  width: 1px;
  height: 80px; /* Adjust this to match the height of your text */
  background-color: rgba(20, 184, 166, 0.2); /* This is the teal color at 20% opacity */
  margin: 0 2rem; /* Replaces 'mx-4' - gives space on left and right */
  align-self: center;
  background: linear-gradient(to bottom, transparent, rgba(20, 184, 166, 0.4), transparent);
}

.section-label {
  font-family: monospace;
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 2.5rem;
}
.expand-btn:hover {
  transform: scale(1.02);
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 2000px;
}

.about-expanded {
  overflow: hidden;
  margin-top: 2rem;
}

:deep(.expand-btn svg) {
  transition: transform 0.3s ease;
}

:deep(.expand-btn svg.rotated) {
  transform: rotate(180deg);
}
:deep(.about-header .n-h2) {
  font-size: 2.5rem !important;
  font-weight: 700 !important;
  margin-bottom: 0 !important;
  white-space: nowrap;
}

/* Responsive: Hide the line when the layout stacks on mobile */
@media (max-width: 768px) {
  .about-section {
    padding: 4rem 1.5rem;
  }
  .about-me {
    flex-direction: column;
    align-items: center;
    margin: 0;
    gap: 1.5rem;
  }

  .vertical-divider {
    display: none;
  }
  .about-intro {
    text-indent: 3ch;
    margin: 0;
  }
  .about-expanded {
    margin: 0;
  }
}

@media (max-width: 480px) {
}
</style>
