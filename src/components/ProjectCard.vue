<script setup>
defineProps({
  title: String,
  description: String,
  techStack: Array,
  githubUrl: Array,
  liveUrl: Array,
})
</script>

<template>
  <article class="project-card">
    <div class="header">
      <h3>{{ title }}</h3>
    </div>
    <div class="card-body">
      <p>{{ description }}</p>
    </div>
    <div class="card-tech">
      <ul>
        <li v-for="tech in techStack" :key="tech">{{ tech }}</li>
      </ul>
    </div>
    <div class="card-links">
      <a v-for="link in githubUrl" :key="link.url" :href="link.url" target="_blank">
        {{ link.label || 'Github' }}
      </a>
      <a v-for="link in liveUrl" :key="link.url" :href="link.url" target="_blank">
        {{ link.label || 'Live Demo' }}
      </a>
    </div>
  </article>
</template>
