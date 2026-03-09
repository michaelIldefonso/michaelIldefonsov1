<!-- AboutExpanded.vue -->
<script setup>
import { ref, markRaw } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { SportsEsportsOutlined, SchoolOutlined, PsychologyOutlined } from '@vicons/material'
import { MusicNote220Regular } from '@vicons/fluent'

const { el: cardsRef, isVisible } = useScrollReveal(0.15)

const sections = ref([
  {
    id: 1,
    title: 'Music & Guitar',
    icon: markRaw(MusicNote220Regular),
    subtitle: 'A Diverse Palette',
  },
  {
    id: 2,
    title: 'Gaming & Anime',
    icon: markRaw(SportsEsportsOutlined),
    subtitle: 'Strategic Storytelling',
  },
  { id: 3, title: 'Lifelong Learner', icon: markRaw(SchoolOutlined), subtitle: 'Always Iterating' },
  { id: 4, title: 'Deep Focus', icon: markRaw(PsychologyOutlined), subtitle: 'Peak Performance' },
])
</script>

<template>
  <div class="mt-4">
    <p class="font-mono text-[10px] uppercase tracking-[0.6em] text-text-muted mb-6">// more about me</p>

    <div ref="cardsRef" class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        v-for="(section, index) in sections"
        :key="section.id"
        class="border border-border-strong bg-[#05060a] p-5 rounded-sm flex flex-col gap-3 transition-all duration-500 opacity-0 translate-y-4 hover:border-white/60"
        :class="{ 'opacity-100 translate-y-0': isVisible }"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <component :is="section.icon" class="w-6 h-6 text-text-muted" />
        <div class="flex flex-col gap-1">
          <span class="font-mono text-[10px] uppercase tracking-[0.4em] text-text-muted">
            {{ section.subtitle }}
          </span>
          <h4 class="text-sm font-semibold text-text">{{ section.title }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
