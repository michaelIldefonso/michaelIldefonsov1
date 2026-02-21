<script setup>
import ProjectCard from './ProjectCard.vue'
const projects = [
  {
    title: 'Rekapo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    techStack: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: [
      { url: 'https://github.com/michaelIldefonso/rekapoApp', label: 'Frontend' },
      { url: 'https://github.com/michaelIldefonso/rekapoBackend', label: 'Backend' },
    ],
    liveUrl: [
      { url: 'https://rekapo.com', label: 'Backend' },
      { url: 'https://github.com/michaelIldefonso/rekapo/releases', label: 'App' },
    ],
  },
  {
    title: 'Rekapo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    techStack: ['Vue.js', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: [
      { url: 'https://github.com/michaelIldefonso/rekapoApp', label: 'Frontend' },
      { url: 'https://github.com/michaelIldefonso/rekapoBackend', label: 'Backend' },
    ],
    liveUrl: [
      { url: 'https://rekapo.com', label: 'Backend' },
      { url: 'https://github.com/michaelIldefonso/rekapo/releases', label: 'App' },
    ],
  },
]
</script>

<template>
  <section id="projects" class="section-projects">
    <h2>Projects</h2>
    <div class="projects-grid"></div>
    <ProjectCard v-for="project in projects" :key="project.title" v-bind="project" />
  </section>
</template>
