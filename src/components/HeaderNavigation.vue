<script setup>
import { h } from 'vue'
import { NIcon } from 'naive-ui'
import {
  LogoGithub,
  LogoLinkedin,
  PersonOutline,
  LayersOutline,
  CodeSlashOutline,
  MailOutline,
} from '@vicons/ionicons5'

// Helper function to render Naive UI icons properly
function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  { key: 'about', icon: renderIcon(PersonOutline) },
  { key: 'skills', icon: renderIcon(LayersOutline) },
  { key: 'projects', icon: renderIcon(CodeSlashOutline) },
  { key: 'contact', icon: renderIcon(MailOutline) },
]
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-menu">
      <n-menu :options="menuOptions" mode="vertical" :icon-size="28" />
    </div>

    <div class="sidebar-socials">
      <n-space vertical :size="15" align="center">
        <n-button
          tag="a"
          href="https://github.com/michaelIldefonso"
          target="_blank"
          circle
          size="large"
        >
          <template #icon>
            <NIcon><LogoGithub /></NIcon>
          </template>
        </n-button>
        <n-button tag="a" href="https://linkedin.com/in/..." target="_blank" circle size="large">
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
  width: 80px; /* Replaced 13vh with a fixed width */
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

.sidebar-socials {
  padding-bottom: 24px;
}

/* Optional: Center the menu icons horizontally inside the menu item */
:deep(.n-menu-item-content) {
  justify-content: center;
  padding: 0 !important; /* Removes default Naive UI padding if it offsets the icon */
}
</style>
