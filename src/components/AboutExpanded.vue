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
    text: "I'm a guitarist inspired by Bach, B.B. King, and John Mayer. Jazz, Metal, and Rock sessions fuel my creative rhythm.",
  },
  {
    id: 2,
    title: 'Gaming & Anime',
    icon: markRaw(SportsEsportsOutlined),
    subtitle: 'Strategic Storytelling',
    text: 'I thrive on the strategy of StarCraft and the immersive world-building of anime — complex logic and animation systems fascinate me.',
  },
  {
    id: 3,
    title: 'Lifelong Learner',
    icon: markRaw(SchoolOutlined),
    subtitle: 'Always Iterating',
    text: 'Learning is a hobby, not a requirement. I like deconstructing frameworks to understand component-based architecture from the ground up.',
  },
  {
    id: 4,
    title: 'Night Owl',
    icon: markRaw(NightlightRound),
    subtitle: 'Peak Performance',
    text: "Late nights and ambient soundscapes help me enter flow state — that’s when complex bugs finally meet their match.",
  },
])
</script>

<template>
  <div class="expanded">
    <p class="expanded-label">// more about me</p>
    <div class="hobby-grid" ref="cardsRef">
      <div
        v-for="(section, index) in sections"
        :key="section.id"
        class="hobby-card"
        :class="{ visible: isVisible }"
        :style="{ transitionDelay: `${index * 100}ms` }"
      >
        <div class="hobby-icon-wrap">
          <NIcon size="20" class="hobby-icon">
            <component :is="section.icon" />
          </NIcon>
        </div>
        <div class="hobby-body">
          <span class="hobby-subtitle">{{ section.subtitle }}</span>
          <h4 class="hobby-title">{{ section.title }}</h4>
          <p class="hobby-text">{{ section.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expanded-label {
  font-family: monospace;
  color: var(--accent);
  font-size: 0.82rem;
  letter-spacing: 2px;
  margin-bottom: 1.5rem;
}

.hobby-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.hobby-card {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  padding: 1.5rem;
  border-radius: 14px;
  border: 1px solid rgba(129, 140, 248, 0.12);
  background: rgba(129, 140, 248, 0.03);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.hobby-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.hobby-card:hover {
  border-color: rgba(129, 140, 248, 0.28);
  background: rgba(129, 140, 248, 0.06);
  transform: translateY(-3px);
  transition: all 0.25s ease;
}

.hobby-icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(129, 140, 248, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.hobby-icon {
  color: var(--accent) !important;
}
.hobby-icon :deep(svg) {
  color: var(--accent) !important;
}

.hobby-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.hobby-subtitle {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--accent);
  font-weight: 600;
}

.hobby-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text);
}

.hobby-text {
  font-size: 0.87rem;
  line-height: 1.6;
  color: var(--text-muted);
  margin-top: 4px;
}

@media (max-width: 1100px) {
  .hobby-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .hobby-grid {
    grid-template-columns: 1fr;
  }
}
</style>
