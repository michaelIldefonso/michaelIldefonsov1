<script setup>
import AboutExpanded from './AboutExpanded.vue'
</script>

<template>
  <section class="about section-shell">
    <div class="section-header">
      <span class="section-num">01</span>
      <span class="section-tag">whoami</span>
    </div>
    <p class="section-subtitle">
      A quick snapshot of who I am, what I care about, and how I think about building software.
    </p>

    <div class="about-grid">
      <div class="about-avatar-col">
        <div class="avatar-frame">
          <div class="avatar-initials">MI</div>
          <div class="avatar-ring"></div>
        </div>
        <div class="about-stats">
          <div class="stat">
            <span class="stat-val">3+</span>
            <span class="stat-label">Years building</span>
          </div>
          <div class="stat">
            <span class="stat-val">3</span>
            <span class="stat-label">Major projects</span>
          </div>
          <div class="stat">
            <span class="stat-val">1</span>
            <span class="stat-label">PyPI library</span>
          </div>
        </div>
      </div>

      <div class="about-content">
        <h2 class="about-title">Building <span class="accent-word">meaningful</span> software</h2>
        <div class="about-text">
          <p>
            I'm a <strong>final-year Computer Science student</strong> and
            <strong>Full-Stack Developer</strong> building at the intersection of
            <strong>backend architecture</strong> and modern frontend engineering.
          </p>
          <p>
            I don't just write code — I engineer practical solutions. My capstone,
            <strong>Rekapo</strong>, is a real-time Taglish AI summarizer that bridges complex model
            inference with a polished UX. I'm currently mastering the
            <strong>Vue 3 ecosystem</strong> to build data-driven applications that are as
            performant as they are accessible.
          </p>
        </div>
        <div class="about-tags">
          <span class="tag">Backend-first</span>
          <span class="tag">Full-stack</span>
          <span class="tag">Open to work</span>
        </div>
      </div>
    </div>

    <div class="about-more">
      <AboutExpanded />
    </div>
  </section>
</template>
<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2rem;
  align-items: start;
}

.about-avatar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.avatar-frame {
  position: relative;
  width: 160px;
  height: 160px;
  border: 1px solid var(--border-strong);
  background: #111;
}

.avatar-initials {
  position: absolute;
  inset: 0;
  width: 160px;
  height: 160px;
  background: repeating-linear-gradient(
    0deg,
    rgba(var(--accent-rgb), 0.03) 0px,
    rgba(var(--accent-rgb), 0.03) 1px,
    transparent 1px,
    transparent 3px
  );
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 2px;
  border: 1px solid rgba(var(--accent-rgb), 0.24);
}

.avatar-ring {
  position: absolute;
  inset: -4px;
  border: 1px dashed rgba(var(--accent-rgb), 0.3);
  animation: none;
  z-index: 1;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  padding: 0.75rem;
  background: #101010;
  border: 1px solid var(--border);
}

.stat-val {
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}

.stat-label {
  font-size: 0.7rem;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
  white-space: nowrap;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding-top: 0.5rem;
}

.about-title {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
  letter-spacing: 0.01em;
}

.accent-word {
  color: var(--accent);
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about-text p {
  color: var(--text-secondary);
  font-size: 0.88rem;
  line-height: 1.9;
}

.about-text strong {
  color: var(--text);
  font-weight: 600;
}

.about-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  padding: 0.3rem 0.7rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.25);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.about-more {
  margin-top: 2.2rem;
  padding-top: 1.5rem;
  border-top: 1px dashed rgba(var(--accent-rgb), 0.2);
}

@media (max-width: 960px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .about-avatar-col {
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  }
  .about-stats {
    flex-direction: row;
    width: auto;
    flex: 1;
  }
  .stat {
    flex: 1;
  }
}

@media (max-width: 600px) {
  .about-avatar-col {
    flex-direction: column;
  }
  .about-stats {
    flex-direction: row;
    width: 100%;
  }
}

</style>
