<script setup>
import NavbarTop from '@/components/NavbarTop.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillSection from '@/components/SkillSection.vue'
import ProjectSection from '@/components/ProjectSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
  <n-flex justify="center" align="center" wrap>
    <nav>
      <NavbarTop />
    </nav>
    <main>
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
    </main>
  </n-flex>
</template>
