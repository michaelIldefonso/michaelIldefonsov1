<script setup>
import { NCard, NTag, NSpace, NButton, NText } from 'naive-ui'

defineProps({
  title: String,
  description: String,
  techStack: Array,
  githubUrl: Array,
  liveUrl: Array,
})

// Correct Object for Naive UI Tags using your palette
const tagConfig = {
  color: 'rgba(91, 192, 190, 0.1)', // --accent with transparency
  textColor: 'var(--accent)', // #5bc0be
  borderColor: 'rgba(91, 192, 190, 0.2)',
}
</script>

<template>
  <n-card :title="title" hoverable class="project-card">
    <div class="card-content">
      <n-text class="description">
        {{ description }}
      </n-text>

      <n-space wrap :size="[8, 8]" class="tech-tags">
        <n-tag
          v-for="tech in techStack"
          :key="tech"
          size="small"
          :bordered="false"
          round
          :color="tagConfig"
        >
          {{ tech }}
        </n-tag>
      </n-space>

      <div class="links-footer">
        <div v-if="githubUrl?.length" class="link-row">
          <span class="link-label">Source</span>
          <n-space :size="12">
            <n-button
              v-for="link in githubUrl"
              :key="link.url"
              text
              tag="a"
              :href="link.url"
              target="_blank"
              class="footer-btn"
            >
              {{ link.label }}
            </n-button>
          </n-space>
        </div>

        <div v-if="liveUrl?.length" class="link-row">
          <span class="link-label">Live</span>
          <n-space :size="12">
            <n-button
              v-for="link in liveUrl"
              :key="link.url"
              text
              tag="a"
              :href="link.url"
              target="_blank"
              class="footer-btn accent-btn"
            >
              {{ link.label }}
            </n-button>
          </n-space>
        </div>
      </div>
    </div>
  </n-card>
</template>

<style scoped>
.project-card {
  height: 100%;
  background-color: var(--bg-surface);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.description {
  display: block;
  margin-bottom: 20px;
  line-height: 1.6;
  color: var(--text-muted);
}

.links-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 16px;
}

.link-row {
  display: flex;
  align-items: center;
  gap: 16px;
}

.link-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-width: 60px;
  color: var(--text-muted);
  font-weight: 700;
}

.footer-btn {
  color: var(--text-muted);
  font-weight: 600;
  transition: color 0.2s ease;
}

.footer-btn:hover {
  color: var(--accent-hover) !important;
}

/* Highlight the 'Live' buttons slightly more with your accent */
.accent-btn {
  color: var(--accent);
}

.accent-btn:hover {
  color: var(--accent-hover) !important;
}
</style>
