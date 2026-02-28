<script setup>
import { ref } from 'vue'
import AboutExpanded from './AboutExpanded.vue'
import { ChevronDoubleDown20Filled } from '@vicons/fluent'

const isExpanded = ref(false)
</script>

<template>
  <section class="about-section" id="about">
    <div class="about-header">
      <n-p class="section-label">// get to know me</n-p>

      <n-h2>About Me</n-h2>
    </div>

    <n-space vertical :size="16">
      <div class="about-intro">
        <n-text>
          I am a final year Computer Science student and Full Stack Developer building at the
          intersection of Backend Architecture and Modern Frontend Engineering. I don’t just write
          code; I build practical solutions like a Real time Taglish AI Summarizer that bridges
          complex model inference with a polished user experience. I am currently leveraging my deep
          Vanilla JS fundamentals to master the Vue 3 ecosystem to build data driven applications
          that are as performant as they are accessible.
        </n-text>
      </div>

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
          <ChevronDoubleDown20Filled :size="18" :class="{ rotated: isExpanded }" />
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
.expand-btn {
  transition: all 0.3s ease;
}
.section-label {
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 8px;
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
}

:deep(.expand-btn svg) {
  transition: transform 0.3s ease;
}

:deep(.expand-btn svg.rotated) {
  transform: rotate(180deg);
}
.about-header h2 {
  font-size: 2rem !important;
  font-weight: 700 !important;
  margin-bottom: 1.5rem !important;
}
</style>
