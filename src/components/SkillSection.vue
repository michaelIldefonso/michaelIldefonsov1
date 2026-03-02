<script setup>
import { NCard, NTag, NSpace, NIcon } from 'naive-ui'
import {
  CodeOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  LockOutlined,
  EyeOutlined,
  GlobalOutlined,
  BuildOutlined,
} from '@vicons/antd'
</script>

<template>
  <section id="skills" class="section skills">
    <h2 class="section-title">Technical Proficiency</h2>

    <div class="skills-group">
      <h3 class="group-label">Core Engineering Stack</h3>
      <div class="skills-cards">
        <n-card embedded :bordered="false" class="skill-card">
          <template #header>
            <n-space align="center" :size="8">
              <n-icon :size="20" color="#58ead4"><CodeOutlined /></n-icon>
              <span>Languages & Runtimes</span>
            </n-space>
          </template>
          <n-space>
            <n-tag type="success">Python (py)</n-tag>
            <n-tag type="success">JavaScript</n-tag>
            <n-tag :bordered="false" class="ghost-tag">Pip / Venv</n-tag>
            <n-tag :bordered="false" class="ghost-tag">HTML / CSS</n-tag>
          </n-space>
        </n-card>

        <n-card embedded :bordered="false" class="skill-card">
          <template #header>
            <n-space align="center" :size="8">
              <n-icon :size="20" color="#58ead4"><RocketOutlined /></n-icon>
              <span>Frameworks</span>
            </n-space>
          </template>
          <n-space>
            <n-tag type="success">FastAPI</n-tag>
            <n-tag type="success">Node.js / Express</n-tag>
            <n-tag type="success">Vue 3 / Vite</n-tag>
          </n-space>
        </n-card>

        <n-card embedded :bordered="false" class="skill-card">
          <template #header>
            <n-space align="center" :size="8">
              <n-icon :size="20" color="#58ead4"><BuildOutlined /></n-icon>
              <span>DevOps & Delivery</span>
            </n-space>
          </template>
          <n-space>
            <n-tag type="info">GitHub Actions (CI/CD)</n-tag>
            <n-tag type="info">NPM / NPX</n-tag>
            <n-tag type="info">Git / GitHub</n-tag>
            <n-tag type="info">Railway / Vercel</n-tag>
          </n-space>
        </n-card>

        <n-card embedded :bordered="false" class="skill-card exposure-card">
          <template #header>
            <n-space align="center" :size="8">
              <n-icon :size="20" color="#999"><EyeOutlined /></n-icon>
              <span>Exposure & Prior Use</span>
            </n-space>
          </template>
          <n-space>
            <n-tag :bordered="false" class="ghost-tag">React Native</n-tag>
            <n-tag :bordered="false" class="ghost-tag">PHP / Laravel</n-tag>
            <n-tag :bordered="false" class="ghost-tag">MySQL</n-tag>
            <n-tag :bordered="false" class="ghost-tag">ESLint</n-tag>
            <n-tag :bordered="false" class="ghost-tag">Pydantic</n-tag>
          </n-space>
        </n-card>
      </div>
    </div>

    <div class="skills-grid-bottom">
      <div class="skills-group">
        <h3 class="group-label">
          <n-space align="center" :size="8">
            <n-icon :size="18" color="#18a058"><ThunderboltOutlined /></n-icon>
            <span>AI / Machine Learning</span>
          </n-space>
        </h3>
        <n-space wrap>
          <n-tag type="info">Fine-tuned Whisper</n-tag>
          <n-tag type="info">Faster-whisper</n-tag>
          <n-tag type="info">FFmpeg</n-tag>
          <n-tag type="info" ghost>Google Colab</n-tag>
          <n-tag type="info" ghost>HuggingFace</n-tag>
        </n-space>
      </div>

      <div class="skills-group">
        <h3 class="group-label">
          <n-space align="center" :size="8">
            <n-icon :size="18" color="#2080f0"><GlobalOutlined /></n-icon>
            <span>Network & Cloud</span>
          </n-space>
        </h3>
        <n-space wrap>
          <n-tag color="#2080f0" ghost>DNS: ildf.site</n-tag>
          <n-tag ghost>Cloudflare R2</n-tag>
          <n-tag ghost>Modal</n-tag>
          <n-tag ghost>CORS Management</n-tag>
        </n-space>
      </div>

      <div class="skills-group">
        <h3 class="group-label">
          <n-space align="center" :size="8">
            <n-icon :size="18" color="#f0a020"><LockOutlined /></n-icon>
            <span>Auth & Persistence</span>
          </n-space>
        </h3>
        <n-space wrap>
          <n-tag type="warning">PostgreSQL</n-tag>
          <n-tag type="warning">SQLAlchemy</n-tag>
          <n-tag type="warning" ghost>OAuth2 / JWT</n-tag>
        </n-space>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 2rem 0;
}
.section-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #fff;
}
.group-label {
  font-size: 1.1rem;
  margin-bottom: 1.25rem;
  opacity: 0.9;
  color: #fff;
}

.skills-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.skill-card {
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.03);
  height: 100%;
}

.skill-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.05);
}

.exposure-card {
  border: 1px dashed rgba(255, 255, 255, 0.15) !important;
  opacity: 0.8;
}

.ghost-tag {
  background-color: rgba(255, 255, 255, 0.05) !important;
  color: #999 !important;
}

.skills-grid-bottom {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.skills-group {
  margin-bottom: 24px;
}
</style>
