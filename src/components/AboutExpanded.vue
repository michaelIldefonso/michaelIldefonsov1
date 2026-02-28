<script setup>
import { ref } from 'vue'

const sections = ref([
  {
    id: 1,
    title: 'Machine Learning',
    text: 'Intelligence Integrated. Self-taught in ML with a focus on practical implementation. My standout project is a Real-time Taglish Meeting Summarizer powered by three distinct AI models, where I handled everything from model inference to UI delivery.',
  },
  {
    id: 2,
    title: 'Music & Guitar',
    text: 'A Diverse Palette. I play guitar and listen to almost everything. My inspiration ranges from the precision of Bach and Mozart to the soul of B.B. King and Albert King. I love the riffs of Led Zeppelin, Black Sabbath, and Pink Floyd along with the modern blues of John Mayer and Eric Clapton. Even Jazz, Pop, and Metal find a place in my rotation because music fuels my creative rhythm.',
  },
  {
    id: 3,
    title: 'Gaming & Anime',
    text: 'Strategic Storytelling. I thrive in competitive multiplayer games but I am equally at home in the strategy of PVE classics like Red Alert, StarCraft, and Terraria. I am inspired by the world building in anime and the complex logic behind game design and animation.',
  },
  {
    id: 4,
    title: 'Lifelong Learner',
    text: "Always Iterating. To me, learning isn't just a requirement; it is a hobby. I am currently deep-diving into the Vue 3 ecosystem and Naive UI by leveraging my strong Vanilla JS and DOM fundamentals to master component-based architecture.",
  },
  {
    id: 5,
    title: 'Hardware & Tinkering',
    text: 'Systems-Level Curiosity. Hands-on with hardware projects from component-level laptop repairs to building IoT solutions with Arduino. This under-the-hood perspective drives my approach to debugging and software optimization.',
  },
  {
    id: 6,
    title: 'Night Owl & Deep Focus',
    text: 'Peak Performance. I do my best work when the world is quiet. I leverage late nights and ambient soundscapes to enter a state of deep focus. That is when complex backend bugs get solved and polished UI comes to life.',
  },
])
</script>

<template>
  <div class="about-expanded">
    <transition-group name="stagger" tag="div" appear class="cards-grid">
      <n-card
        v-for="(section, index) in sections"
        :key="section.id"
        :title="section.title"
        :style="{ '--delay': index * 0.15 + 's' }"
        class="card"
      >
        <n-text>{{ section.text }}</n-text>
      </n-card>
    </transition-group>
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
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
