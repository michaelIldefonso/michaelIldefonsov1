<script setup>
import HeaderNavigation from '@/components/HeaderNavigation.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillSection from '@/components/SkillSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <div style="display: flex; justify-content: center; width: 100%">
    <div style="max-width: 1200px; width: 100%">
      <nav><HeaderNavigation /></nav>
      <main>
        <n-space vertical>
          <HeroSection />
          <n-divider />

          <AboutSection />
          <n-divider />

          <SkillSection />
          <n-divider />

          <ProjectSection />
          <n-divider />

          <ContactSection />
          <n-divider />

          <FooterSection />
        </n-space>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
