<script setup>
const skills = [
  {
    label: 'Languages',
    tier: 'solid',
    chips: ['Python', 'JavaScript', 'HTML / CSS'],
  },
  {
    label: 'Frameworks',
    tier: 'solid',
    chips: ['FastAPI', 'Node / Express', 'Vue 3 / Vite'],
  },
  {
    label: 'DevOps & Delivery',
    tier: 'solid',
    chips: ['GitHub Actions', 'Git / GitHub', 'Railway / Vercel'],
  },
  {
    label: 'AI / Machine Learning',
    tier: 'solid',
    wide: true,
    chips: ['Fine-tuned Whisper', 'faster-whisper', 'FFmpeg', 'HuggingFace', 'Google Colab'],
  },
  {
    label: 'Auth & Persistence',
    tier: 'solid',
    chips: ['PostgreSQL', 'SQLAlchemy', 'OAuth2 / JWT'],
  },
  {
    label: 'Cloud & Network',
    tier: 'solid',
    chips: ['Cloudflare R2', 'Modal', 'CDN Caching', 'DNS / SSL', 'CORS'],
  },
  {
    label: 'Exposure & Prior Use',
    tier: 'minimal',
    wide: true,
    chips: ['React Native', 'React', 'PHP / Laravel', 'MySQL', 'Pydantic', 'ESLint'],
  },
]
</script>

<template>
  <section id="skills" class="relative max-w-6xl mx-auto px-6 py-16 mt-6 overflow-hidden">
    <!-- decorative lines -->
    <div
      class="pointer-events-none absolute -left-12 top-10 h-0.5 w-24 bg-linear-to-r from-white to-transparent"
    ></div>
    <div
      class="pointer-events-none absolute -right-8 bottom-6 h-24 w-24 border border-border mix-blend-color-burn opacity-40"
    ></div>

    <!-- section header -->
    <div class="flex items-center justify-between gap-4 border-b border-border pb-4 mb-10">
      <div class="flex items-center gap-3">
        <span class="font-mono text-xs uppercase tracking-[0.7em] text-text-muted">02</span>
        <span class="text-xs uppercase tracking-[0.5em] text-text-muted">Skills</span>
      </div>
    </div>

    <p class="text-text-muted text-xs font-mono uppercase tracking-widest mb-10">
      Solid stacks in full color · prior exposure in muted chips
    </p>

    <!-- grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
      <div
        v-for="group in skills"
        :key="group.label"
        :class="[
          'border p-4 sm:p-5 flex flex-col gap-4 transition-all duration-200',
          group.wide ? 'sm:col-span-2 md:col-span-2' : '',
          group.tier === 'solid'
            ? 'bg-[#05070b] border-solid border-border-strong'
            : group.tier === 'exposure'
              ? 'bg-[rgba(33,38,45,0.5)] border-dashed border-border-subtle'
              : 'bg-[rgba(21,27,35,0.4)] border-dotted border-border opacity-50',
        ]"
      >
        <p class="font-mono text-[10px] uppercase tracking-[0.4em] text-text-muted">
          {{ group.label }}
        </p>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="chip in group.chips"
            :key="chip"
            :class="[
              'text-xs px-2.5 py-1 font-mono border transition-colors duration-200',
              group.tier === 'solid'
                ? 'border-solid border-border-strong text-text hover:text-accent hover:border-accent'
                : group.tier === 'exposure'
                  ? 'border-dashed border-border-subtle text-text-muted bg-[rgba(101,108,118,0.15)]'
                  : 'border-dotted border-border-subtle text-text-disabled bg-[rgba(101,108,118,0.05)]',
            ]"
          >
            {{ chip }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
