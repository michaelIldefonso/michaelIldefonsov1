<script setup>
import { RouterView } from 'vue-router'
import { darkTheme } from 'naive-ui'

const themeOverrides = {
  common: {
    primaryColor: '#5BC0BE',
    primaryColorHover: '#4aa8a6',
    primaryColorPressed: '#3a8f8d',
    bodyColor: '#0B132B',
    cardColor: '#0F172A',
  },
}
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <RouterView />
  </n-config-provider>
</template>
