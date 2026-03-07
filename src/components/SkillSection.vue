<script setup>
const skillRows = [
  { group: 'languages', items: 'python, javascript, html/css' },
  { group: 'frameworks', items: 'fastapi, node/express, vue3/vite' },
  { group: 'ai_ml', items: 'whisper, faster-whisper, ffmpeg, huggingface, colab' },
  { group: 'auth_db', items: 'postgresql, sqlalchemy, oauth2, jwt' },
  { group: 'devops', items: 'github actions, git, railway, vercel' },
  { group: 'cloud_network', items: 'cloudflare r2, modal, cdn, dns, ssl, cors' },
  { group: 'exposure', items: 'react native, react, php/laravel, mysql, pydantic, eslint' },
]
</script>

<template>
  <section class="skills section-shell">
    <div class="section-header">
      <span class="section-num">02</span>
      <span class="section-tag">skills --list</span>
    </div>
    <p class="section-subtitle">
      Current stack as terminal output. Primary tools first, then adjacent exposure.
    </p>

    <div class="skills-output">
      <p class="output-line">+-------------------+---------------------------------------------------------+</p>
      <p class="output-line">| group             | items                                                   |</p>
      <p class="output-line">+-------------------+---------------------------------------------------------+</p>
      <p v-for="row in skillRows" :key="row.group" class="output-line">
        {{ `| ${row.group.padEnd(17, ' ')} | ${row.items.padEnd(55, ' ')} |` }}
      </p>
      <p class="output-line">+-------------------+---------------------------------------------------------+</p>
    </div>
  </section>
</template>

<style scoped>
.skills-output {
  border: 1px solid var(--border);
  background: #0f0f0f;
  padding: 0.9rem;
  overflow-x: auto;
}

.output-line {
  margin: 0;
  font-size: 0.74rem;
  line-height: 1.7;
  white-space: pre;
  color: var(--text-secondary);
}

.output-line:first-child,
.output-line:nth-child(2),
.output-line:nth-child(3),
.output-line:last-child {
  color: var(--accent);
}
</style>
