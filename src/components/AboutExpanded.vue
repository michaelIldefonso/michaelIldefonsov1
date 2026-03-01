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
    text: "I'm a guitarist inspired by everything from the precision of Bach to the soulful blues of B.B. King and John Mayer. Whether it's Jazz, Metal, or Classic Rock, music fuels my creative rhythm and keeps my perspective fresh.",
  },
  {
    id: 2,
    title: 'Gaming & Anime',
    icon: markRaw(SportsEsportsOutlined),
    subtitle: 'Strategic Storytelling',
    text: "I thrive on the strategy of classics like StarCraft and Red Alert, balanced with the immersive world-building found in anime. I'm constantly fascinated by the complex logic and animation systems that bring these digital worlds to life.",
  },
  {
    id: 3,
    title: 'Lifelong Learner',
    icon: markRaw(SchoolOutlined),
    subtitle: 'Always Iterating',
    text: "To me, learning isn't a requirement; it's a hobby. I enjoy deconstructing modern frameworks back to their DOM fundamentals to truly understand how component-based architecture works under the hood.",
  },
  {
    id: 4,
    title: 'Night Owl & Deep Focus',
    icon: markRaw(NightlightRound),
    subtitle: 'Peak Performance',
    text: "I do my best work when the world is quiet. Using late nights and ambient soundscapes to enter a flow state, I find that's when complex backend bugs finally meet their match and polished UIs come to life.",
  },
])
</script>

<template>
  <div class="about-expanded">
    <n-p class="section-label">// More about me</n-p>
    <div class="cards-grid">
      <n-card v-for="section in sections" :key="section.id" class="card">
        <div class="card-header">
          <NIcon size="24" class="icon-teal" style="margin-right: 0.5rem; flex-shrink: 0">
            <component :is="section.icon" />
          </NIcon>
          <span class="title-bold">{{ section.title }}</span>
        </div>
        <div class="subtitle-accent">{{ section.subtitle }}</div>
        <n-text>{{ section.text }}</n-text>
      </n-card>
    </div>
  </div>
</template>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}
.icon-teal {
  color: var(--accent) !important;
}

.icon-teal :deep(svg) {
  color: var(--accent) !important;
}
.title-bold {
  font-weight: bold;
  font-size: 1.1rem;
}

.subtitle-accent {
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.card {
  transition: all 0.3s ease;
  border-left: 3px solid var(--accent) !important;
  border-radius: 8px !important;
  background-color: var(--bg-surface);
}
.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.section-label {
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 8px;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(91, 192, 190, 0.1);
}

:deep(.n-card-header__main) {
  color: var(--accent) !important;
}
:deep(.n-card__content) {
  padding-top: 8px !important;
}
:deep(.n-card-header) {
  padding-bottom: 4px !important;
}
.stagger-enter-active {
  animation: slideIn 0.6s ease-out;
  animation-delay: var(--delay);
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
}
.card-header {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
</style>
