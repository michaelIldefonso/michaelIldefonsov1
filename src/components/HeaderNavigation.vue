<script setup></script>

<template>
  <n-layout-header class="navbar-top">
    <n-space justify="space-between" align="center" style="width: 100%" class="container">
      <div class="navbar-title"><n-h1>Michael Ildefonso</n-h1></div>
      <n-menu :options="menuOptions" mode="horizontal"></n-menu>
    </n-space>
  </n-layout-header>
</template>

<script setup>
const menuOptions = [
  { label: 'Home', key: 'home' },
  { label: 'About', key: 'about' },
  { label: 'Skills', key: 'skills' },
  { label: 'Projects', key: 'projects' },
  { label: 'Contact', key: 'contact' },
]
</script>
