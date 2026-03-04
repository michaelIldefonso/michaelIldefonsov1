<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { NIcon } from 'naive-ui'
import {
  LogoGithub,
  LogoLinkedin,
  PersonOutline,
  LayersOutline,
  CodeSlashOutline,
  MailOutline,
} from '@vicons/ionicons5'

const activeSection = ref(null)

const menuOptions = [
  { key: 'about', label: 'About', icon: PersonOutline },
  { key: 'skills', label: 'Skills', icon: LayersOutline },
  { key: 'projects', label: 'Projects', icon: CodeSlashOutline },
  { key: 'contact', label: 'Contact', icon: MailOutline },
]

const scrollToSection = (sectionKey) => {
  const element = document.getElementById(sectionKey)
  element?.scrollIntoView({ behavior: 'smooth' })
}

const updateActiveSection = () => {
  if (window.scrollY < 100) {
    activeSection.value = null
    return
  }

  for (const item of menuOptions) {
    const element = document.getElementById(item.key)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom > 0) {
        activeSection.value = item.key
        break
      }
    }
  }
}

onMounted(() => window.addEventListener('scroll', updateActiveSection))
onUnmounted(() => window.removeEventListener('scroll', updateActiveSection))
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-menu">
      <div class="nav-items">
        <n-tooltip v-for="item in menuOptions" :key="item.key" placement="right" trigger="hover">
          <template #trigger>
            <div
              class="nav-item"
              :class="{ active: activeSection === item.key }"
              @click="scrollToSection(item.key)"
            >
              <NIcon size="22">
                <component :is="item.icon" />
              </NIcon>
            </div>
          </template>
          {{ item.label }}
        </n-tooltip>
      </div>
    </div>

    <div class="sidebar-socials">
      <n-space vertical :size="15" align="center">
        <n-button
          tag="a"
          href="https://github.com/michaelIldefonso"
          target="_blank"
          circle
          size="small"
        >
          <template #icon>
            <NIcon><LogoGithub /></NIcon>
          </template>
        </n-button>
        <n-button
          tag="a"
          href="https://www.linkedin.com/in/michael-ildefonso-62ba77267"
          target="_blank"
          circle
          size="small"
        >
          <template #icon>
            <NIcon><LogoLinkedin /></NIcon>
          </template>
        </n-button>
      </n-space>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 64px;
  background-color: var(--bg-darkest);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-menu {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.nav-item {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  color: var(--text-muted);
  transition:
    color 0.2s,
    background-color 0.2s;
}

.nav-item:hover {
  color: var(--text);
  background-color: rgba(129, 140, 248, 0.08);
}

.nav-item.active {
  color: var(--accent);
  background-color: rgba(129, 140, 248, 0.12);
}

.sidebar-socials {
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
