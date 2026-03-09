<!-- ProjectsSection.vue -->
<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'Rekapo',
    subtitle: 'Capstone Thesis',
    description:
      'Standard STT models fail on Taglish — a code-switched mix of Tagalog and English spoken by 100M+ Filipinos. I built and curated a 20-hour bilingual dataset from scratch, then fine-tuned Whisper-small to outperform the larger Whisper-Medium baseline. The tradeoff: float16 quantization to hit acceptable inference latency on a constrained deployment budget, without sacrificing accuracy.',
    semanticTags: ['AI', 'Auth', 'Infra'],
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
    semanticTags: ['Auth', 'Infra'],
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
    semanticTags: ['Auth', 'Infra'],
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
  <section id="projects" class="relative max-w-6xl mx-auto px-6 py-16 mt-6 overflow-hidden">
    <!-- decorative lines -->
    <div
      class="pointer-events-none absolute -left-12 top-10 h-0.5 w-24 bg-linear-to-r from-white to-transparent"
    ></div>
    <div
      class="pointer-events-none absolute -right-8 bottom-6 h-24 w-24 border border-border mix-blend-color-burn opacity-40"
    ></div>

    <!-- section header -->
    <div class="flex items-center gap-4 border-b border-border pb-4 mb-10">
      <span class="font-mono text-xs uppercase tracking-[0.7em] text-text-muted">03</span>
      <span class="text-xs uppercase tracking-[0.5em] text-text-muted">Projects</span>
    </div>

    <p class="text-text-muted text-xs font-mono uppercase tracking-widest mb-10">
      Selected work · authentication · infrastructure · AI
    </p>

    <!-- projects list -->
    <div class="flex flex-col divide-y divide-border">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        v-bind="project"
        :index="index"
      />
    </div>

    <!-- github cta -->
    <div class="mt-10 pt-6 border-t border-border">
      <a
        href="https://github.com/michaelIldefonso?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        class="font-mono text-xs uppercase tracking-widest text-text-muted hover:text-text transition-colors duration-200"
      >
        View all repositories on GitHub →
      </a>
    </div>
  </section>
</template>
