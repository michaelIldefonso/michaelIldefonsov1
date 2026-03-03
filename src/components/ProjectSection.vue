<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'Rekapo (Capstone Thesis)',
    description:
      'Architected a specialized STT system for Taglish code-switching. Engineered a custom 20-hour bilingual dataset to fine-tune Whisper-small, outperforming the Whisper-Medium baseline. Developed a production-grade backend featuring Google OAuth 2.0, INT8 quantization, and complex media processing via FFmpeg.',
    techStack: [
      'Python',
      'FastAPI',
      'Fine-tuned Whisper',
      'Google OAuth 2.0',
      'FFmpeg',
      'INT8 Quantization',
      'NLLB-200',
      'Qwen 1.5B',
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
      { url: 'https://github.com/michaelIldefonso/Rekapo/releases', label: 'APK' },
    ],
  },
  {
    title: 'bisHash (PyPI Library)',
    description:
      'A published Python security module for robust password orchestration. Implements Argon2id with server-side peppering, built-in IP-based rate limiting, and account lockout logic to mitigate brute-force attacks in login/signup flows.',
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
      'A cloud-native project management engine featuring a single-tenant workspace architecture. Implemented multi-provider OAuth 2.0 (Google/GitHub) and JWT for secure session management, leveraging serverless PostgreSQL for relational data integrity.',
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
  <n-p class="section-label">// what I've built</n-p>

  <section id="projects" class="section-projects">
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
</style>
