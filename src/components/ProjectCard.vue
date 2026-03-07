<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
  techStack: Array,
  semanticTags: Array,
  githubUrl: Array,
  liveUrl: Array,
  index: Number,
})
</script>

<template>
  <article class="project-card" :class="{ 'project-card-rekapo': title === 'Rekapo' }">
    <div class="card-num">{{ String(index + 1).padStart(2, '0') }}</div>
    <div class="card-body">
      <div class="card-head">
        <div>
          <p class="card-subtitle">{{ subtitle }}</p>
          <h3 class="card-title">{{ title }}</h3>
          <div v-if="semanticTags?.length" class="meta-tags">
            <span
              v-for="tag in semanticTags"
              :key="`${title}-${tag.label}`"
              class="meta-pill"
              :class="`meta-${tag.tone}`"
            >
              {{ tag.label }}
            </span>
          </div>
        </div>
        <div class="card-links">
          <a
            v-for="link in githubUrl"
            :key="link.url"
            :href="link.url"
            target="_blank"
            class="link-pill link-source"
            >{{ link.label }}</a
          >
          <a
            v-for="link in liveUrl"
            :key="link.url"
            :href="link.url"
            target="_blank"
            class="link-pill link-live"
            >↗ {{ link.label }}</a
          >
        </div>
      </div>
      <p class="card-desc">{{ description }}</p>
      <div class="card-tags">
        <span v-for="tech in techStack" :key="tech" class="tech-tag">{{ tech }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.project-card {
  position: relative;
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 2rem;
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid rgba(129, 140, 248, 0.1);
  background: rgba(13, 18, 32, 0.6);
  transition: all 0.25s ease;
}

.project-card:hover {
  border-color: rgba(129, 140, 248, 0.3);
  background: rgba(18, 25, 41, 0.8);
  transform: translateY(-3px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
}

.project-card-rekapo::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg, #818cf8 0%, #22d3ee 50%, #818cf8 100%);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.card-num {
  font-family: monospace;
  font-size: 2.5rem;
  font-weight: 900;
  color: rgba(129, 140, 248, 0.15);
  line-height: 1;
  padding-top: 4px;
  letter-spacing: -2px;
  user-select: none;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.card-subtitle {
  font-family: monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 4px;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.meta-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.65rem;
}

.meta-pill {
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.meta-accent {
  color: var(--chip-accent);
  background: var(--chip-accent-bg);
  border: 1px solid var(--chip-accent-border);
}

.meta-info {
  color: var(--chip-info);
  background: var(--chip-info-bg);
  border: 1px solid var(--chip-info-border);
}

.meta-warn {
  color: var(--chip-warn);
  background: var(--chip-warn-bg);
  border: 1px solid var(--chip-warn-border);
}

.card-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.link-pill {
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}

.link-source {
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-muted);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
.link-source:hover {
  color: var(--text);
  background: rgba(255, 255, 255, 0.08);
}

.link-live {
  background: rgba(129, 140, 248, 0.1);
  color: var(--accent);
  border: 1px solid rgba(129, 140, 248, 0.2);
}
.link-live:hover {
  background: rgba(129, 140, 248, 0.18);
  border-color: var(--accent);
}

.card-desc {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.75;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  padding: 0.2rem 0.6rem;
  background: rgba(129, 140, 248, 0.06);
  border: 1px solid rgba(129, 140, 248, 0.12);
  border-radius: 5px;
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 500;
}

@media (max-width: 768px) {
  .project-card {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.5rem;
  }
  .card-num {
    font-size: 1.5rem;
  }
  .card-head {
    flex-direction: column;
  }
}
</style>
