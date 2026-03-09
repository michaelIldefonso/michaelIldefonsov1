<!-- ContactSection.vue -->
<script setup>
import { reactive, ref } from 'vue'
import { MailOutline, LogoLinkedin, LogoGithub } from '@vicons/ionicons5'

const form = reactive({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const submitted = ref(false)

function sendEmail() {
  if (isSubmitting.value) return
  isSubmitting.value = true
  submitted.value = false
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.message = ''
    isSubmitting.value = false
    submitted.value = true
  }, 400)
}

const links = [
  {
    href: 'mailto:michaelildefonso20@gmail.com',
    label: 'Email',
    value: 'michaelildefonso20@gmail.com',
    icon: MailOutline,
  },
  {
    href: 'https://www.linkedin.com/in/michael-ildefonso-62ba77267',
    label: 'LinkedIn',
    value: 'michael-ildefonso',
    icon: LogoLinkedin,
    external: true,
  },
  {
    href: 'https://github.com/michaelildefonso',
    label: 'GitHub',
    value: 'michaelIldefonso',
    icon: LogoGithub,
    external: true,
  },
]
</script>

<template>
  <section
    id="contact"
    class="relative max-w-6xl mx-auto px-6 py-16 mt-6 overflow-hidden"
  >
    <!-- decorative lines -->
    <div
      class="pointer-events-none absolute -left-12 top-10 h-0.5 w-24 bg-linear-to-r from-white to-transparent"
    ></div>
    <div
      class="pointer-events-none absolute -right-8 bottom-6 h-24 w-24 border border-border mix-blend-color-burn opacity-40"
    ></div>

    <!-- section header -->
    <div class="flex items-center gap-4 border-b border-border pb-4 mb-10">
      <span class="font-mono text-xs uppercase tracking-[0.7em] text-text-muted">04</span>
      <span class="text-xs uppercase tracking-[0.5em] text-text-muted">Contact</span>
    </div>

    <div class="grid md:grid-cols-2 gap-16">
      <!-- left: intro + links -->
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-3">
          <h2 class="text-3xl font-black text-text leading-tight">
            Let's build something <span class="text-white font-black">together</span>
          </h2>
          <p class="text-text-secondary text-sm leading-relaxed">
            Have a project in mind, a role you think I'd fit, or just want to connect? Drop me a
            message — I'll get back to you promptly.
          </p>
        </div>

        <!-- direct links -->
        <div class="flex flex-col gap-3">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="flex items-center gap-4 border border-border p-4 hover:border-border-strong transition-colors duration-200 group"
          >
            <component
              :is="link.icon"
              class="w-4 h-4 text-text-muted group-hover:text-text transition-colors duration-200 shrink-0"
            />
            <div class="flex flex-col gap-0.5">
              <span class="font-mono text-[10px] uppercase tracking-widest text-text-muted">{{
                link.label
              }}</span>
              <span class="text-sm text-text">{{ link.value }}</span>
            </div>
          </a>
        </div>
      </div>

      <!-- right: form -->
      <form class="flex flex-col gap-5" @submit.prevent="sendEmail">
        <div class="flex flex-col gap-1.5">
          <label class="font-mono text-[10px] uppercase tracking-widest text-text-muted"
            >Name</label
          >
          <input
            v-model="form.name"
            class="bg-[#05070b] border border-border text-text text-sm px-4 py-2.5 placeholder:text-text-muted focus:outline-none focus:border-border-strong transition-colors duration-200"
            placeholder="Your name"
            autocomplete="name"
            required
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="font-mono text-[10px] uppercase tracking-widest text-text-muted"
            >Email</label
          >
          <input
            v-model="form.email"
            type="email"
            class="bg-[#05070b] border border-border text-text text-sm px-4 py-2.5 placeholder:text-text-muted focus:outline-none focus:border-border-strong transition-colors duration-200"
            placeholder="your@email.com"
            autocomplete="email"
            required
          />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="font-mono text-[10px] uppercase tracking-widest text-text-muted"
            >Message</label
          >
          <textarea
            v-model="form.message"
            class="bg-[#05070b] border border-border text-text text-sm px-4 py-2.5 placeholder:text-text-muted focus:outline-none focus:border-border-strong transition-colors duration-200 resize-none"
            placeholder="What's on your mind?"
            rows="5"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="font-mono text-xs uppercase tracking-widest border border-accent text-accent px-5 py-3 hover:bg-accent hover:text-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="!isSubmitting">Send Message →</span>
          <span v-else>Sending…</span>
        </button>

        <p v-if="submitted" class="font-mono text-xs text-text-muted" role="status">
          ✓ Message received — I'll get back to you shortly.
        </p>
      </form>
    </div>
  </section>
</template>
