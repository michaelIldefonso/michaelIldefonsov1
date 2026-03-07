<script setup>
// Skills section - no additional scripts needed
</script>

<template>
  <section class="skills">
    <div class="section-header">
      <span class="section-num">02</span>
      <span class="section-tag">Skills</span>
    </div>

    <div class="bento">
      <!-- Languages -->
      <div class="bento-card bento-sm">
        <p class="card-label">Languages</p>
        <div class="chip-list">
          <span class="chip chip-primary">Python</span>
          <span class="chip chip-primary">JavaScript</span>
          <span class="chip chip-ghost">HTML / CSS</span>
        </div>
      </div>

      <!-- Frameworks -->
      <div class="bento-card bento-sm">
        <p class="card-label">Frameworks</p>
        <div class="chip-list">
          <span class="chip chip-primary">FastAPI</span>
          <span class="chip chip-primary">Node / Express</span>
          <span class="chip chip-primary">Vue 3 / Vite</span>
        </div>
      </div>

      <!-- DevOps -->
      <div class="bento-card bento-sm">
        <p class="card-label">DevOps &amp; Delivery</p>
        <div class="chip-list">
          <span class="chip chip-info">GitHub Actions</span>
          <span class="chip chip-info">Git / GitHub</span>
          <span class="chip chip-info">Railway / Vercel</span>
        </div>
      </div>

      <!-- AI / ML Wide -->
      <div class="bento-card bento-md">
        <p class="card-label">AI / Machine Learning</p>
        <div class="chip-list">
          <span class="chip chip-accent">Fine-tuned Whisper</span>
          <span class="chip chip-accent">faster-whisper</span>
          <span class="chip chip-accent">FFmpeg</span>
          <span class="chip chip-ghost">HuggingFace</span>
          <span class="chip chip-ghost">Google Colab</span>
        </div>
      </div>

      <!-- Auth & DB -->
      <div class="bento-card bento-sm">
        <p class="card-label">Auth &amp; Persistence</p>
        <div class="chip-list">
          <span class="chip chip-warn">PostgreSQL</span>
          <span class="chip chip-warn">SQLAlchemy</span>
          <span class="chip chip-ghost">OAuth2 / JWT</span>
        </div>
      </div>

      <!-- Cloud + Exposure Row -->
      <div class="bento-pair">
        <div class="bento-card">
          <p class="card-label">Cloud &amp; Network</p>
          <div class="chip-list">
            <span class="chip chip-ghost">Cloudflare R2</span>
            <span class="chip chip-ghost">Modal</span>
            <span class="chip chip-ghost">CDN Caching</span>
            <span class="chip chip-ghost">DNS / SSL</span>
            <span class="chip chip-ghost">CORS</span>
          </div>
        </div>

        <div class="bento-card exposure">
          <p class="card-label">Exposure &amp; Prior Use</p>
          <div class="chip-list">
            <span class="chip chip-ghost">React Native</span>
            <span class="chip chip-ghost">React</span>
            <span class="chip chip-ghost">PHP / Laravel</span>
            <span class="chip chip-ghost">MySQL</span>
            <span class="chip chip-ghost">Pydantic</span>
            <span class="chip chip-ghost">ESLint</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3.5rem;
}

.section-num {
  font-family: monospace;
  font-size: 4rem;
  font-weight: 900;
  color: rgba(129, 140, 248, 0.08);
  line-height: 1;
  letter-spacing: -3px;
  user-select: none;
}

.section-tag {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.bento {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

.bento-card {
  padding: 1.75rem;
  border-radius: 16px;
  border: 1px solid rgba(129, 140, 248, 0.12);
  background: rgba(13, 18, 32, 0.8);
  transition:
    border-color 0.25s ease,
    background-color 0.25s ease,
    transform 0.25s ease;
}

.bento-card:hover {
  border-color: rgba(129, 140, 248, 0.28);
  background: rgba(18, 25, 41, 0.9);
  transform: translateY(-3px);
}

.bento-md {
  grid-column: span 2;
}
.bento-wide {
  grid-column: span 2;
}

.bento-full {
  grid-column: 1 / -1;
}

.bento-pair {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.25rem;
}

.exposure {
  border-style: dashed;
  opacity: 0.9;
  background: linear-gradient(180deg, rgba(129, 140, 248, 0.06), rgba(13, 18, 32, 0.82));
}

.card-label {
  font-family: monospace;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--accent);
  margin-bottom: 1rem;
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.chip-primary {
  background: var(--chip-primary-bg);
  color: var(--accent);
  border: 1px solid var(--chip-primary-border);
}

.chip-accent {
  background: var(--chip-accent-bg);
  color: var(--chip-accent);
  border: 1px solid var(--chip-accent-border);
}

.chip-info {
  background: var(--chip-info-bg);
  color: var(--chip-info);
  border: 1px solid var(--chip-info-border);
}

.chip-warn {
  background: var(--chip-warn-bg);
  color: var(--chip-warn);
  border: 1px solid var(--chip-warn-border);
}

.chip-ghost {
  background: var(--chip-ghost-bg);
  color: var(--text-muted);
  border: 1px solid var(--chip-ghost-border);
}

@media (max-width: 900px) {
  .skills {
    padding: 4rem 2rem;
  }
  .bento {
    grid-template-columns: repeat(2, 1fr);
  }
  .bento-wide {
    grid-column: span 2;
  }
  .bento-full {
    grid-column: span 2;
  }
}

@media (max-width: 600px) {
  .skills {
    padding: 3rem 1.25rem;
  }
  .bento {
    grid-template-columns: 1fr;
  }
  .bento-md,
  .bento-wide,
  .bento-full {
    grid-column: span 1;
  }
  .bento-pair {
    grid-template-columns: 1fr;
  }
}
</style>
