<script setup>
import AboutExpanded from './AboutExpanded.vue'

const stats = [
  { value: '3+', label: 'Years building' },
  { value: '3', label: 'Major projects' },
  { value: '1', label: 'PyPI library' },
  { value: '24/7', label: 'Problem space' },
]

const tags = ['Backend-first', 'Full-stack', 'Open to work']
</script>

<template>
  <section
    id="about"
    class="relative max-w-6xl mx-auto px-6 py-16 overflow-hidden"
  >
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
        <span class="font-mono text-xs uppercase tracking-[0.7em] text-text-muted">01</span>
        <span class="text-xs uppercase tracking-[0.5em] text-text-muted">About</span>
      </div>
    </div>

    <!-- main grid -->
    <div class="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
      <!-- left: bio -->
      <div class="relative border border-border p-8 bg-[#05070b] overflow-hidden">
        <div class="absolute -right-12 top-8 h-1 w-24 bg-white/60"></div>
        <div class="absolute -left-10 bottom-6 h-1 w-24 bg-white/60"></div>

        <h2 class="text-4xl font-black leading-tight text-text">
          Building <span class="text-white">meaningful</span> software
        </h2>

        <div class="flex flex-col gap-4 text-text-secondary mt-4 text-sm leading-relaxed">
          <p>
            I'm a
            <strong class="text-text font-semibold">final-year Computer Science student</strong> and
            <strong class="text-text font-semibold">Full-Stack Developer</strong> building at the
            intersection of
            <strong class="text-text font-semibold">backend architecture</strong> and modern
            frontend engineering.
          </p>
          <p>
            I don't just write code — I engineer practical solutions. My capstone,
            <strong class="text-text font-semibold">Rekapo</strong>, is a real-time Taglish AI
            summarizer that bridges complex model inference with a polished UX. I'm currently
            mastering the <strong class="text-text font-semibold">Vue 3 ecosystem</strong> to build
            data-driven applications that are as performant as they are accessible.
          </p>
        </div>
      </div>

      <!-- right: stats grid -->
      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="border border-border-strong bg-[#0b0d11] p-5 text-center"
        >
          <span class="text-3xl font-black tracking-tight text-text">{{ stat.value }}</span>
          <span class="block mt-1 text-[10px] uppercase tracking-[0.4em] text-text-muted">{{
            stat.label
          }}</span>
        </div>
      </div>
    </div>

    <!-- tags -->
    <div class="mt-10 flex flex-wrap gap-3">
      <span
        v-for="tag in tags"
        :key="tag"
        class="border border-border font-mono text-[10px] uppercase tracking-[0.4em] px-3 py-1 text-text-muted"
      >
        {{ tag }}
      </span>
    </div>

    <!-- hobbies -->
    <div class="mt-12">
      <AboutExpanded />
    </div>
  </section>
</template>
