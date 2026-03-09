<!-- ProjectCard.vue -->
<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
  techStack: Array,
  semanticTags: Array,
  githubUrl: Array,
  liveUrl: Array,
  index: Number,
})
</script>

<template>
  <article class="py-8 flex gap-8 group">
    <!-- number -->
    <span class="font-mono text-xs text-text-muted tracking-widest pt-1 w-6 shrink-0">
      {{ String(index + 1).padStart(2, '0') }}
    </span>

    <!-- body -->
    <div class="flex flex-col gap-4 flex-1">
      <!-- head -->
      <div class="flex items-start justify-between gap-4 flex-wrap">
        <div class="flex flex-col gap-1">
          <span class="font-mono text-[10px] uppercase tracking-[0.4em] text-text-muted">
            {{ subtitle }}
          </span>
          <h3
            class="text-xl font-black text-text group-hover:text-white transition-colors duration-200"
          >
            {{ title }}
          </h3>
          <!-- semantic tags -->
          <div v-if="semanticTags?.length" class="flex gap-2 mt-1">
            <span
              v-for="tag in semanticTags"
              :key="tag"
              class="font-mono text-[10px] uppercase tracking-widest border border-border px-2 py-0.5 text-text-muted"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- links -->
        <div class="flex flex-wrap gap-2">
          <a
            v-for="link in githubUrl"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono text-[10px] uppercase tracking-widest border border-border px-3 py-1 text-text-muted hover:border-accent hover:text-accent transition-colors duration-200"
          >
            {{ link.label }}
          </a>
          <a
            v-for="link in liveUrl"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="font-mono text-[10px] uppercase tracking-widest border border-white/30 px-3 py-1 text-text hover:border-white hover:text-white transition-colors duration-200"
          >
            ↗ {{ link.label }}
          </a>
        </div>
      </div>

      <!-- description -->
      <p class="text-text-secondary text-sm leading-relaxed max-w-3xl">
        {{ description }}
      </p>

      <!-- tech stack -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tech in techStack"
          :key="tech"
          class="font-mono text-[10px] border border-border px-2 py-0.5 text-text-muted"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </article>
</template>
