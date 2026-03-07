<script setup>
import { ref, markRaw } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'
import { SportsEsportsOutlined, SchoolOutlined, NightlightRound } from '@vicons/material'
import { MusicNote220Regular } from '@vicons/fluent'

const { el: cardsRef, isVisible } = useScrollReveal(0.15)

const sections = ref([
  {
    id: 1,
    title: 'Music & Guitar',
    icon: markRaw(MusicNote220Regular),
    subtitle: 'A Diverse Palette',
    text: "I'm a guitarist inspired by Bach, B.B. King, and John Mayer. Whether Jazz, Metal, or Rock, music fuels my creative rhythm.",
  },
  {
    id: 2,
    title: 'Gaming & Anime',
    icon: markRaw(SportsEsportsOutlined),
    subtitle: 'Strategic Storytelling',
    text: 'I thrive on the strategy of StarCraft and the immersive world-building of anime. Complex logic and animation systems fascinate me.',
  },
  {
    id: 3,
    title: 'Lifelong Learner',
    icon: markRaw(SchoolOutlined),
    subtitle: 'Always Iterating',
    text: 'Learning is a hobby, not a requirement. I deconstruct frameworks to understand component-based architecture from the ground up.',
  },
  {
    id: 4,
    title: 'Night Owl',
    icon: markRaw(NightlightRound),
    subtitle: 'Peak Performance',
    text: "Late nights and ambient soundscapes help me enter flow state. That's when complex bugs meet their match and polished UIs come alive.",
  },
])
</script>

<template>
  <div class="about-expanded">
    <n-p class="section-label">// More about me</n-p>
    <div class="cards-grid" ref="cardsRef">
      <n-card
        v-for="(section, index) in sections"
        :key="section.id"
        class="card"
        :class="{ 'is-visible': isVisible }"
        :style="{ transitionDelay: `${index * 120}ms` }"
      >
        <div class="card-header">
          <NIcon size="20" class="icon-teal">
            <component :is="section.icon" />
          </NIcon>
          <span class="title-bold">{{ section.title }}</span>
        </div>
        <div class="subtitle-accent">{{ section.subtitle }}</div>
        <n-text class="card-text">{{ section.text }}</n-text>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin: 1.5rem 0;
}

.icon-teal {
  color: var(--accent) !important;
  flex-shrink: 0;
  margin-right: 0.5rem;
}

.icon-teal :deep(svg) {
  color: var(--accent) !important;
}

.title-bold {
  font-weight: 600;
  font-size: 0.95rem;
}

.subtitle-accent {
  color: var(--accent);
  font-weight: 500;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.card-text {
  font-size: 0.9rem;
  line-height: 1.5;
}

.card {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    border-color 0.3s ease,
    background-color 0.3s ease;
  border: 1px solid rgba(129, 140, 248, 0.2) !important;
  border-radius: 6px !important;
  background-color: transparent !important;
  padding: 1.25rem !important;
}

.card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.card-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 0.5rem;
}

.section-label {
  font-family: monospace;
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 2.5rem;
}

.card:hover {
  border-color: rgba(129, 140, 248, 0.4) !important;
  background-color: rgba(129, 140, 248, 0.05) !important;
  transform: translateY(-2px);
}

:deep(.n-card__content) {
  padding: 0 !important;
}

:deep(.n-card-header) {
  display: none;
}

@media (max-width: 1200px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
