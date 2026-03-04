<script setup>
import { RouterView } from 'vue-router'
import { darkTheme } from 'naive-ui'

const themeOverrides = {
  common: {
    primaryColor: '#818CF8',
    primaryColorHover: '#6366F1',
    primaryColorPressed: '#4F46E5',
    bodyColor: '#080B12',
    cardColor: '#0D1220',
    successColor: '#818CF8',
    successColorHover: '#6366F1',
    successColorPressed: '#4F46E5',
    successColorSuppl: '#818CF8',
    infoColor: '#818CF8',
    infoColorHover: '#6366F1',
    infoColorPressed: '#4F46E5',
    infoColorSuppl: '#818CF8',
  },
}
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <div class="topo-overlay"></div>
    <RouterView />
  </n-config-provider>
</template>
