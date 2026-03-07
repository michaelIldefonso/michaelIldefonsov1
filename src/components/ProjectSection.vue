<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'Rekapo',
    subtitle: 'Capstone Thesis',
    description:
      'Standard STT models fail on Taglish — a code-switched mix of Tagalog and English spoken by 100M+ Filipinos. I built and curated a 20-hour bilingual dataset from scratch, then fine-tuned Whisper-small to outperform the larger Whisper-Medium baseline. The tradeoff: float16 quantization to hit acceptable inference latency on a constrained deployment budget, without sacrificing accuracy.',
    semanticTags: [
      { label: 'AI', tone: 'accent' },
      { label: 'Auth', tone: 'warn' },
      { label: 'Infra', tone: 'info' },
    ],
    techStack: [
      'Python',
      'FastAPI',
      'faster-whisper',
      'Google OAuth 2.0',
      'FFmpeg',
      'NLLB-200 1.3B',
      'Qwen2.5-1.5B',
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
    title: 'bisHash',
    subtitle: 'PyPI Library',
    description:
      "bcrypt is the default — but it has no answer for database breaches exposing the pepper. I published bisHash to fill that gap: Argon2id with server-side peppering, IP-based rate limiting, and brute-force lockout built into a single importable module. The design goal was zero-config security for developers who shouldn't have to research cryptography to build a login flow.",
    semanticTags: [
      { label: 'Auth', tone: 'warn' },
      { label: 'Infra', tone: 'info' },
    ],
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
    title: 'Progresstify',
    subtitle: 'Systems Project',
    description:
      'The core challenge was session security across multiple OAuth providers without a managed auth service. I implemented JWT with multi-provider OAuth 2.0 (Google/GitHub) from scratch, using serverless PostgreSQL on Neon.tech to keep the data layer stateless and independently scalable. Deployed across Vercel and Render to separate frontend and API concerns cleanly.',
    semanticTags: [
      { label: 'Auth', tone: 'warn' },
      { label: 'Infra', tone: 'info' },
    ],
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
    ],
    githubUrl: [
      { url: 'https://github.com/michaelIldefonso/Progresstify-BackEnd', label: 'Backend' },
      { url: 'https://github.com/michaelIldefonso/Progresstify-FrontEnd', label: 'Frontend' },
    ],
    liveUrl: [],
  },
]
</script>

<template>
  <section class="projects section-shell">
    <div class="section-header">
      <span class="section-num">03</span>
      <span class="section-tag">projects --verbose</span>
    </div>
    <p class="section-subtitle">
      Selected work that shows how I approach authentication, infrastructure, and AI in production-like environments.
    </p>

    <div class="projects-list">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        v-bind="project"
        :index="index"
      />
    </div>

    <div class="cta-row">
      <a
        href="https://github.com/michaelIldefonso?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="cta-github"
      >
        View all repositories on GitHub →
      </a>
    </div>
  </section>
</template>

<style scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.cta-row {
  margin-top: 3rem;
  display: flex;
  justify-content: center;
}

.cta-github {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.75rem 1.3rem;
  border: 1px solid rgba(var(--accent-rgb), 0.45);
  background: rgba(var(--accent-rgb), 0.08);
  border-radius: 0;
  transition: all 0.25s ease;
}

.cta-github::before {
  content: '$ ';
  color: rgba(var(--accent-rgb), 0.75);
}

.cta-github:hover {
  background: rgba(var(--accent-rgb), 0.16);
  border-color: var(--accent);
  transform: none;
  box-shadow: none;
}
</style>
