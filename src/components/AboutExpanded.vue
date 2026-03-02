<script setup>
import { ref, markRaw } from 'vue'
import { SportsEsportsOutlined, SchoolOutlined, NightlightRound } from '@vicons/material'
import { MusicNote220Regular } from '@vicons/fluent'

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
    <div class="cards-grid">
      <n-card v-for="section in sections" :key="section.id" class="card">
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
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card:hover .card-text {
  opacity: 1;
}

.card {
  transition: all 0.3s ease;
  border: 1px solid rgba(91, 192, 190, 0.2) !important;
  border-radius: 6px !important;
  background-color: transparent !important;
  padding: 1.25rem !important;
}

.card-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  gap: 0.5rem;
}

.section-label {
  color: var(--accent);
  font-size: 0.8rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
  border-top: 1px solid rgba(91, 192, 190, 0.15);
  padding-top: 1.5rem;
  margin-top: 1.5rem;
}

.card:hover {
  border-color: rgba(91, 192, 190, 0.4) !important;
  background-color: rgba(91, 192, 190, 0.05) !important;
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
