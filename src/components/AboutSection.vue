<script setup>
import { ref } from 'vue'
import AboutExpanded from './AboutExpanded.vue'
import { ChevronDoubleDown20Filled } from '@vicons/fluent'

const isExpanded = ref(false)
</script>

<template>
  <section class="about-section" id="about">
    <n-p class="section-label">// get to know me</n-p>
    <div class="about-me">
      <div class="about-header">
        <n-h2>About Me</n-h2>
      </div>
      <div class="vertical-divider"></div>
      <div class="about-intro">
        <n-text>
          I am a <b>final year Computer Science student</b> and <b>Full Stack Developer</b> building
          at the intersection of Backend Architecture and Modern Frontend Engineering. I don’t just
          write code; I build practical solutions like a Real time Taglish AI Summarizer that
          bridges complex model inference with a polished user experience. I am currently leveraging
          my <b>Vanilla JS fundamentals</b> to master the <b>Vue 3 ecosystem</b> to build data
          driven applications that are as performant as they are accessible.
        </n-text>
      </div>
    </div>
    <n-space vertical :size="16">
      <transition name="expand">
        <div v-if="isExpanded" class="about-expanded">
          <AboutExpanded />
        </div>
      </transition>

      <n-button
        type="primary"
        @click="isExpanded = !isExpanded"
        :icon-placement="'right'"
        class="expand-btn"
      >
        {{ isExpanded ? 'Show Less' : 'Read More' }}
        <template #icon>
          <ChevronDoubleDown20Filled
            :size="18"
            :class="{ rotated: isExpanded }"
            style="margin-left: 8px"
          />
        </template>
      </n-button>
    </n-space>
  </section>
</template>

<style scoped>
.about-intro {
  max-width: 80ch;
  font-size: 1.05rem;
  line-height: 1.8;
}
.about-me {
  display: flex;
  align-items: center;
  gap: 6rem;
  max-width: 1200px;
  margin: 0 auto;
}
.expand-btn {
  transition: all 0.3s ease;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
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
}

/* Responsive: Hide the line when the layout stacks on mobile */
@media (max-width: 768px) {
  .about-me {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }

  .vertical-divider {
    display: none;
  }
}
</style>
