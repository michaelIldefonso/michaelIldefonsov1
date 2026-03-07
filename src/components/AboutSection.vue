<script setup>
import AboutExpanded from './AboutExpanded.vue'
</script>

<template>
  <section class="about section-shell">
    <div class="section-header">
      <span class="section-num">01</span>
      <span class="section-tag">About</span>
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
  gap: 5rem;
  align-items: start;
}

.about-avatar-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.avatar-frame {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 24px;
}

.avatar-frame::before {
  content: '';
  position: absolute;
  inset: -3px;
  border-radius: 27px;
  background: conic-gradient(
    from 180deg,
    rgba(129, 140, 248, 0.08),
    rgba(129, 140, 248, 0.7),
    rgba(129, 140, 248, 0.1),
    rgba(129, 140, 248, 0.75),
    rgba(129, 140, 248, 0.08)
  );
  filter: blur(1px);
  z-index: 0;
}

.avatar-initials {
  position: relative;
  z-index: 2;
  width: 160px;
  height: 160px;
  border-radius: 24px;
  background:
    radial-gradient(circle at 26% 20%, rgba(129, 140, 248, 0.4) 0%, transparent 45%),
    linear-gradient(145deg, rgba(17, 24, 39, 0.96) 10%, rgba(27, 38, 64, 0.94) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: #dbe4ff;
  text-shadow: 0 0 20px rgba(129, 140, 248, 0.35);
  letter-spacing: 2px;
  border: 1px solid rgba(129, 140, 248, 0.34);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.06),
    0 16px 36px rgba(2, 6, 23, 0.5),
    0 0 32px rgba(129, 140, 248, 0.2);
}

.avatar-ring {
  position: absolute;
  inset: -7px;
  border-radius: 29px;
  border: 1px dashed rgba(129, 140, 248, 0.24);
  animation: spin 26s linear infinite;
  z-index: 1;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
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
  border-radius: 10px;
  background: rgba(129, 140, 248, 0.04);
  border: 1px solid rgba(129, 140, 248, 0.1);
}

.stat-val {
  font-size: 1.5rem;
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
  font-weight: 800;
  color: var(--text);
  line-height: 1.2;
  letter-spacing: -0.02em;
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
  font-size: 1.05rem;
  line-height: 1.8;
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
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
  background: rgba(129, 140, 248, 0.08);
  border: 1px solid rgba(129, 140, 248, 0.2);
  letter-spacing: 0.3px;
}

.about-more {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
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

@media (prefers-reduced-motion: reduce) {
  .avatar-ring {
    animation: none;
  }
}
</style>
