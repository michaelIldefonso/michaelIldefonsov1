<script setup>
import { ref } from 'vue'
import AboutExpanded from './AboutExpanded.vue'
import { ChevronDoubleDown20Filled } from '@vicons/fluent'

const isExpanded = ref(false)
</script>

<template>
  <section class="about-section" id="about">
    <div class="about-header">
      <n-h2>About Me</n-h2>
      <n-divider />
    </div>

    <n-space vertical :size="16">
      <n-text>
        Hi, I’m Michael, a final-year Computer Science student and Full-Stack Developer. While my
        foundation is rooted in Backend Architecture and API Design, I am currently bridging that
        logic into Modern Frontend Engineering. I’m actively seeking roles where I can apply my
        systems-level thinking to build accessible, data-driven web applications.
      </n-text>

      <transition name="expand" @enter="onEnter" @leave="onLeave">
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
.expand-btn {
  transition: all 0.3s ease;
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
}
</style>
