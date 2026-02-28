<script setup>
import { ref, markRaw } from 'vue'
import {
  PsychologyOutlined,
  SportsEsportsOutlined,
  SchoolOutlined,
  MemoryOutlined,
  NightlightRound,
} from '@vicons/material'
import { MusicNote220Regular } from '@vicons/fluent'

const sections = ref([
  {
    id: 1,
    title: 'Machine Learning',
    icon: markRaw(PsychologyOutlined),
    text: 'Intelligence Integrated. Self-taught in ML with a focus on practical implementation. My standout project is a Real-time Taglish Meeting Summarizer powered by three distinct AI models where I handled everything from model inference to UI delivery.',
  },
  {
    id: 2,
    title: 'Music & Guitar',
    icon: markRaw(MusicNote220Regular),
    text: 'A Diverse Palette. I play guitar and listen to almost everything. My inspiration ranges from the precision of Bach and Mozart to the soul of B.B. King and Albert King. I love the riffs of Led Zeppelin, Black Sabbath, and Pink Floyd along with the modern blues of John Mayer and Eric Clapton. Even Jazz, Pop, and Metal find a place in my rotation because music fuels my creative rhythm.',
  },
  {
    id: 3,
    title: 'Gaming & Anime',
    icon: markRaw(SportsEsportsOutlined),
    text: 'Strategic Storytelling. I thrive in competitive multiplayer games but I am equally at home in the strategy of PVE classics like Red Alert, StarCraft, and Terraria. I am inspired by the world building in anime and the complex logic behind game design and animation.',
  },
  {
    id: 4,
    title: 'Lifelong Learner',
    icon: markRaw(SchoolOutlined),
    text: "Always Iterating. To me, learning isn't just a requirement; it is a hobby. I am currently deep diving into the Vue 3 ecosystem and Naive UI by leveraging my strong Vanilla JS and DOM fundamentals to master component-based architecture.",
  },
  {
    id: 5,
    title: 'Hardware & Tinkering',
    icon: markRaw(MemoryOutlined),
    text: 'Systems Level Curiosity. I enjoy getting under the hood from hardware troubleshooting and component upgrades like RAM and SSDs to clean OS deployments and optimization. This hands on experience with the physical layer informs my approach to software ensuring I write code that respects the hardware it runs on.',
  },
  {
    id: 6,
    title: 'Night Owl & Deep Focus',
    icon: markRaw(NightlightRound),
    text: 'Peak Performance. I do my best work when the world is quiet. I leverage late nights and ambient soundscapes to enter a state of deep focus. That is when complex backend bugs get solved and polished UI comes to life.',
  },
])
</script>

<template>
  <div class="about-expanded">
    <div class="cards-grid">
      <n-card v-for="section in sections" :key="section.id" class="card">
        <div class="card-header">
          <NIcon size="24" style="margin-right: 0.5rem; flex-shrink: 0">
            <component :is="section.icon" />
          </NIcon>
          <span>{{ section.title }}</span>
        </div>
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
