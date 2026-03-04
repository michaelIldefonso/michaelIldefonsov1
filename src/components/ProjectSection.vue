<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'Rekapo (Capstone Thesis)',
    description:
      'Standard STT models fail on Taglish — a code-switched mix of Tagalog and English spoken by 100M+ Filipinos. I built and curated a 20-hour bilingual dataset from scratch, then fine-tuned Whisper-small to outperform the larger Whisper-Medium baseline. The tradeoff: float16 quantization to hit acceptable inference latency on a constrained deployment budget, without sacrificing accuracy.',
    techStack: [
      'Python',
      'FastAPI',
      'faster-whisper (float16 GPU)',
      'Google OAuth 2.0',
      'FFmpeg',
      'NLLB-200 1.3B · CTranslate2 Float16',
      'Qwen2.5-1.5B · NF4 4-bit GPU',
      'React Native',
      'GitHub Actions',
    ],
    githubUrl: [
      { url: 'https://github.com/michaelIldefonso/Rekapo', label: 'Backend' },
      { url: 'https://github.com/michaelIldefonso/RekapoApp', label: 'Mobile' },
      { url: 'https://github.com/michaelIldefonso/Rekapo_admin', label: 'Admin' },
    ],
    liveUrl: [
      { url: 'https://rekapo.ildf.site', label: 'API' },
      { url: 'https://rekapo-admin-demo.okims.site/', label: 'Admin Demo' },
      { url: 'https://github.com/michaelIldefonso/Rekapo/releases', label: 'APK' },
    ],
  },
  {
    title: 'bisHash (PyPI Library)',
    description:
      "bcrypt is the default — but it has no answer for database breaches exposing the pepper. I published bisHash to fill that gap: Argon2id with server-side peppering, IP-based rate limiting, and brute-force lockout built into a single importable module. The design goal was zero-config security for developers who shouldn't have to research cryptography to build a login flow.",
    techStack: [
      'Python',
      'Argon2',
      'PyPI',
      'Rate Limiting',
      'Security Engineering',
      'Library Design',
    ],
    githubUrl: [
      { url: 'https://github.com/michaelIldefonso/Hashing-Algorithm', label: 'Source' },
      { url: 'https://github.com/michaelIldefonso/Hash_demo', label: 'Demo' },
    ],
    liveUrl: [{ url: 'https://pypi.org/project/bisHash/', label: 'PyPI Package' }],
  },
  {
    title: 'Progresstify (Systems Project)',
    description:
      'The core challenge was session security across multiple OAuth providers without a managed auth service. I implemented JWT with multi-provider OAuth 2.0 (Google/GitHub) from scratch, using serverless PostgreSQL on Neon.tech to keep the data layer stateless and independently scalable. Deployed across Vercel and Render to separate frontend and API concerns cleanly.',
    techStack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Neon.tech',
      'OAuth 2.0',
      'JWT Auth',
      'Vercel',
      'Render',
      'Vite',
      'REST API',
    ],
    githubUrl: [
      { url: 'https://github.com/michaelIldefonso/Progresstify-BackEnd', label: 'Backend' },
      { url: 'https://github.com/michaelIldefonso/Progresstify-FrontEnd', label: 'Frontend' },
    ],
    liveUrl: [], // Empty array is fine with the new logic
  },
]
</script>

<template>
  <section id="projects" class="section-projects">
    <n-p class="section-label">// what I've built</n-p>
    <h2 class="section-title">Featured Projects</h2>

    <div class="projects-grid">
      <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
    </div>

    <div class="view-more-container">
      <n-divider title-placement="center">
        <n-text depth="3" class="divider-text">Curious about my other work?</n-text>
      </n-divider>

      <n-button
        secondary
        round
        size="large"
        tag="a"
        href="https://github.com/michaelIldefonso?tab=repositories"
        target="_blank"
        class="github-cta"
      >
        <template #icon>
          <span>📂</span>
        </template>
        Explore all repositories on GitHub
      </n-button>
    </div>
  </section>
</template>

<style scoped>
.section-projects {
  padding: 4rem 2rem;
  max-width: 1400px;
  margin: 0 auto;
}
.section-title {
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: var(--text);
  text-align: center;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;
}
.view-more-container {
  margin-top: 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.divider-text {
  font-size: 0.9rem;
  font-style: italic;
  letter-spacing: 1px;
}

.github-cta {
  transition: all 0.3s ease;
  font-weight: 600;
}

.github-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.2);
}
.section-label {
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 2.5rem;
}

@media (max-width: 768px) {
  .section-projects {
    padding: 4rem 1.5rem;
  }
}
</style>
