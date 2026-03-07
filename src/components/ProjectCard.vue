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
      <div class="card-window-bar">
        <span></span>
        <span></span>
        <span></span>
        <p>{{ title.toLowerCase().replaceAll(' ', '_') }}.log</p>
      </div>
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
            rel="noopener noreferrer"
            class="link-pill link-source"
            >{{ link.label }}</a
          >
          <a
            v-for="link in liveUrl"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
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
  padding: 1.7rem;
  border-radius: 0;
  border: 1px solid rgba(var(--accent-rgb), 0.22);
  background: #101010;
  transition: all 0.25s ease;
}

.project-card:hover {
  border-color: rgba(var(--accent-rgb), 0.42);
  background: #141414;
  transform: none;
  box-shadow: none;
}

.project-card-rekapo::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    var(--accent) 0%,
    var(--accent-hover) 50%,
    var(--accent) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.card-num {
  font-family: var(--font-body);
  font-size: 2.2rem;
  font-weight: 900;
  color: rgba(var(--accent-rgb), 0.2);
  line-height: 1;
  padding-top: 0.2rem;
  letter-spacing: -1px;
  user-select: none;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-window-bar {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.75rem;
  border-radius: 0;
  background: rgba(7, 12, 9, 0.88);
  border: 1px solid rgba(var(--accent-rgb), 0.17);
}

.card-window-bar span {
  width: 9px;
  height: 9px;
  border-radius: 0;
  background: rgba(var(--accent-rgb), 0.34);
}

.card-window-bar span:first-child {
  background: rgba(255, 241, 118, 0.6);
}

.card-window-bar span:nth-child(2) {
  background: rgba(var(--accent-rgb), 0.65);
}

.card-window-bar span:nth-child(3) {
  background: rgba(var(--accent-rgb), 0.5);
}

.card-window-bar p {
  margin: 0;
  margin-left: 0.45rem;
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 0.07em;
  text-transform: lowercase;
}

.card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.card-subtitle {
  font-family: var(--font-body);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--accent);
  margin-bottom: 4px;
}

.card-subtitle::before {
  content: 'cat ';
  color: var(--text-muted);
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
  border-radius: 0;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
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
  padding: 0.3rem 0.7rem;
  border-radius: 0;
  font-size: 0.72rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: all 0.2s;
}

.link-pill::before {
  content: '> ';
  color: var(--text-muted);
}

.link-source {
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-muted);
  border: 1px solid rgba(var(--accent-rgb), 0.22);
}
.link-source:hover {
  color: var(--text);
  background: rgba(var(--accent-rgb), 0.08);
}

.link-live {
  background: rgba(var(--accent-rgb), 0.1);
  color: var(--accent);
  border: 1px solid rgba(var(--accent-rgb), 0.3);
}
.link-live:hover {
  background: rgba(var(--accent-rgb), 0.18);
  border-color: var(--accent);
}

.card-desc {
  color: var(--text-muted);
  font-size: 0.8rem;
  line-height: 1.9;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  padding: 0.2rem 0.6rem;
  background: rgba(var(--accent-rgb), 0.07);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
  border-radius: 0;
  font-size: 0.75rem;
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
