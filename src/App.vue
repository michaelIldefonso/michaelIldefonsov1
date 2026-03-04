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
    <div class="app-wrapper">
      <div class="blob blob-1" aria-hidden="true"></div>
      <div class="blob blob-2" aria-hidden="true"></div>
      <div class="blob blob-3" aria-hidden="true"></div>
      <RouterView />
    </div>
  </n-config-provider>
</template>

<style>
.app-wrapper {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  isolation: isolate;
}

.blob-1 {
  width: 600px;
  height: 600px;
  background: rgba(99, 102, 241, 0.13);
  top: -150px;
  right: 5%;
  animation-duration: 25s;
  animation-delay: 0s;
}

.blob-2 {
  width: 400px;
  height: 400px;
  background: rgba(129, 140, 248, 0.09);
  top: 20%;
  right: 30%;
  animation-duration: 32s;
  animation-delay: -8s;
}

.blob-3 {
  width: 300px;
  height: 300px;
  background: rgba(79, 70, 229, 0.1);
  top: 40%;
  right: 8%;
  animation-duration: 20s;
  animation-delay: -15s;
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  animation-name: drift;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  pointer-events: none;
  z-index: 0;
}

@keyframes drift {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  25% {
    transform: translate(20px, -20px) scale(1.03);
  }
  50% {
    transform: translate(-15px, 15px) scale(0.97);
  }
  75% {
    transform: translate(10px, 20px) scale(1.02);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
</style>
