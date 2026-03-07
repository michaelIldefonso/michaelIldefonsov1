<script setup>
import { RouterView } from 'vue-router'
import { darkTheme } from 'naive-ui'

const themeOverrides = {
  common: {
    primaryColor: '#FFB347',
    primaryColorHover: '#FFC777',
    primaryColorPressed: '#FF951F',
    bodyColor: '#0C0C0C',
    cardColor: '#121212',
    successColor: '#FFB347',
    successColorHover: '#FFC777',
    successColorPressed: '#FF951F',
    successColorSuppl: '#FFB347',
    infoColor: '#FFB347',
    infoColorHover: '#FFC777',
    infoColorPressed: '#FF951F',
    infoColorSuppl: '#FFB347',
  },
}
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
    <RouterView />
  </n-config-provider>
</template>
