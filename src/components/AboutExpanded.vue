<script setup>
const lines = [
  'hobby.music = guitar sessions (bach | b.b. king | mayer)',
  'hobby.games = strategy and systems (starcraft, anime worldbuilding)',
  'learning.mode = deconstruct frameworks / rebuild from first principles',
  'focus.window = night-time deep work + ambient soundscapes',
]
</script>

<template>
  <div class="expanded">
    <p class="expanded-label">$ cat profile_extras.log</p>
    <div class="hobby-grid">
      <p v-for="line in lines" :key="line" class="output-line">{{ line }}</p>
    </div>
  </div>
</template>

<style scoped>
.expanded-label {
  font-family: var(--font-body);
  color: var(--accent);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  margin-bottom: 0.9rem;
}

.hobby-grid {
  border: 1px solid var(--border);
  background: #0f0f0f;
  padding: 0.9rem;
}

.output-line {
  margin: 0;
  font-size: 0.78rem;
  line-height: 1.8;
  color: var(--text-muted);
  white-space: pre-wrap;
}
</style>
