<script setup>
import { h, ref, onMounted, onUnmounted } from 'vue'
import { NIcon } from 'naive-ui'
import {
  LogoGithub,
  LogoLinkedin,
  PersonOutline,
  LayersOutline,
  CodeSlashOutline,
  MailOutline,
} from '@vicons/ionicons5'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const activeSection = ref('hero')
const menuOptions = [
  { key: 'about', label: '', icon: renderIcon(PersonOutline) },
  { key: 'skills', label: '', icon: renderIcon(LayersOutline) },
  { key: 'projects', label: '', icon: renderIcon(CodeSlashOutline) },
  { key: 'contact', label: '', icon: renderIcon(MailOutline) },
]

const scrollToSection = (sectionKey) => {
  const element = document.getElementById(sectionKey)
  element?.scrollIntoView({ behavior: 'smooth' })
}

const updateActiveSection = () => {
  // Check if we're at the top of the page (hero section)
  if (window.scrollY < 100) {
    activeSection.value = null
    return
  }

  const sections = menuOptions.map((opt) => opt.key)

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      if (rect.top <= 150 && rect.bottom > 0) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-menu">
      <n-menu
        :options="menuOptions"
        mode="vertical"
        :icon-size="28"
        class="navigation"
        :value="activeSection"
        @update:value="scrollToSection"
      />
    </div>

    <div class="sidebar-socials">
      <n-space vertical :size="15" align="center">
        <n-button
          tag="a"
          href="https://github.com/michaelIldefonso"
          target="_blank"
          circle
          size="medium"
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
          size="medium"
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
  width: 100px; /* Replaced 13vh with a fixed width */
  background-color: var(--bg-darkest);
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.08);
  z-index: 1000;

  /* Flexbox magic to separate top, middle, and bottom */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidebar-menu {
  /* flex: 1 takes up all remaining vertical space, perfectly centering the menu */
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.navigation {
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
}

:deep(.n-menu) {
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
}

:deep(.n-menu-item) {
  width: 100px !important;
  height: 60px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin: 5px 0 !important;
}

:deep(.n-menu-item-content) {
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  padding: 0 !important;
}

.sidebar-socials {
  padding-bottom: 24px;
}

/*Hide navbar when screen is smaller than 768px (mobile view) */
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
