<script setup>
import { NCard, NTag, NSpace, NButton, NText } from 'naive-ui'

defineProps({
  title: String,
  description: String,
  techStack: Array,
  githubUrl: Array,
  liveUrl: Array,
})

// This satisfies the Naive UI prop validation while using your CSS variables
const tagConfig = {
  color: 'rgba(91, 192, 190, 0.1)', // Your --accent with alpha
  textColor: 'var(--accent)', // Direct use of your CSS variable
  borderColor: 'rgba(91, 192, 190, 0.3)',
}
</script>

<template>
  <n-card :title="title" hoverable class="project-card">
    <div class="card-content">
      <n-text depth="3" class="description">
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
          class="tech-tag"
        >
          {{ tech }}
        </n-tag>
      </n-space>

      <div class="links-footer">
        <div v-if="githubUrl?.length" class="link-row">
          <n-text depth="3" class="link-label">Source</n-text>
          <n-space :size="12">
            <n-button
              v-for="link in githubUrl"
              :key="link.url"
              text
              tag="a"
              :href="link.url"
              target="_blank"
              type="info"
              class="footer-btn"
            >
              {{ link.label }}
            </n-button>
          </n-space>
        </div>

        <div v-if="liveUrl?.length" class="link-row">
          <n-text depth="3" class="link-label">Live</n-text>
          <n-space :size="12">
            <n-button
              v-for="link in liveUrl"
              :key="link.url"
              text
              tag="a"
              :href="link.url"
              target="_blank"
              type="success"
              class="footer-btn"
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
  background-color: rgba(24, 24, 28, 0.8);
  /* Use your bg-surface variable if defined globally */
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.description {
  display: block;
  margin-bottom: 20px;
  line-height: 1.6;
  color: var(--text-muted);
}

.tech-tags {
  margin-bottom: 24px;
}

/* We removed the !important because the :color prop handles it now */
.tech-tag {
  font-weight: 500;
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
}

.footer-btn {
  font-weight: 600;
  transition: color 0.2s ease;
}

.footer-btn:hover {
  color: var(--accent) !important;
}
</style>
