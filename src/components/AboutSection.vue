<script setup>
import AboutExpanded from './AboutExpanded.vue'
</script>

<template>
  <section id="about" class="section about">
    <n-h2>About Me</n-h2>
    <n-text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, dolorem. Neque ad
      necessitatibus rerum natus a beatae voluptates tempore voluptatibus quisquam sit, aspernatur
      molestias cupiditate commodi alias veniam non earum.
    </n-text>
    <n-collapse>
      <n-collapse-item>
        <template #header>
          <n-h3>Read More</n-h3>
        </template>
        <AboutExpanded />
      </n-collapse-item>
    </n-collapse>
  </section>
</template>
