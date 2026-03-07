<script setup>
import { reactive, ref } from 'vue'
import { NIcon } from 'naive-ui'
import { MailOutline, LogoLinkedin, LogoGithub } from '@vicons/ionicons5'

const form = reactive({ name: '', email: '', message: '' })

const isSubmitting = ref(false)
const submitted = ref(false)

function sendEmail() {
  if (isSubmitting.value) return
  isSubmitting.value = true
  submitted.value = false

  // Placeholder for real email handling – simulate a quick send.
  setTimeout(() => {
    form.name = ''
    form.email = ''
    form.message = ''
    isSubmitting.value = false
    submitted.value = true
  }, 400)
}
</script>

<template>
  <section class="contact section-shell">
    <div class="section-header">
      <span class="section-num">04</span>
      <span class="section-tag">contact --send</span>
    </div>
    <p class="section-subtitle">
      Prefer a direct email, social link, or a quick form? Reach out however is easiest — I usually reply within a day.
    </p>

    <div class="contact-inner">
      <div class="contact-intro">
        <h2 class="contact-heading">
          Let's build something <span class="accent-word">together</span>
        </h2>
        <p class="contact-desc">
          Have a project in mind, a role you think I'd fit, or just want to connect? Drop me a
          message — I'll get back to you promptly.
        </p>
        <div class="direct-links">
          <a href="mailto:michaelildefonso20@gmail.com" class="direct-link">
            <span class="dl-icon" aria-hidden="true">
              <NIcon size="17"><MailOutline /></NIcon>
            </span>
            <span class="dl-copy">
              <span class="dl-label">Email</span>
              <span class="dl-value">michaelildefonso20@gmail.com</span>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/michael-ildefonso-62ba77267"
            target="_blank"
            rel="noopener noreferrer"
            class="direct-link"
          >
            <span class="dl-icon" aria-hidden="true">
              <NIcon size="17"><LogoLinkedin /></NIcon>
            </span>
            <span class="dl-copy">
              <span class="dl-label">LinkedIn</span>
              <span class="dl-value">michael-ildefonso</span>
            </span>
          </a>
          <a
            href="https://github.com/michaelildefonso"
            target="_blank"
            rel="noopener noreferrer"
            class="direct-link"
          >
            <span class="dl-icon" aria-hidden="true">
              <NIcon size="17"><LogoGithub /></NIcon>
            </span>
            <span class="dl-copy">
              <span class="dl-label">GitHub</span>
              <span class="dl-value">michaelIldefonso</span>
            </span>
          </a>
        </div>
      </div>

      <form class="contact-form" @submit.prevent="sendEmail">
        <div class="form-group">
          <label class="form-label">Name</label>
          <input
            v-model="form.name"
            class="form-input"
            placeholder="Your name"
            autocomplete="name"
            required
          />
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input
            v-model="form.email"
            type="email"
            class="form-input"
            placeholder="your@email.com"
            autocomplete="email"
            required
          />
        </div>
        <div class="form-group">
          <label class="form-label">Message</label>
          <textarea
            v-model="form.message"
            class="form-textarea"
            placeholder="What's on your mind?"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" class="form-submit" :disabled="isSubmitting">
          <span v-if="!isSubmitting">Send Message →</span>
          <span v-else>Sending…</span>
        </button>
        <p v-if="submitted" class="form-success" role="status">
          Thanks for reaching out — I’ve received your message and will get back to you shortly.
        </p>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: start;
}

.contact-heading {
  font-size: clamp(1.2rem, 2.2vw, 1.7rem);
  font-weight: 700;
  color: var(--text);
  line-height: 1.2;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.accent-word {
  color: var(--accent);
}

.contact-desc {
  color: var(--text-muted);
  font-size: 0.8rem;
  line-height: 1.9;
  margin-bottom: 1.3rem;
}

.direct-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.direct-link {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  padding: 0.8rem;
  border-radius: 0;
  border: 1px solid var(--border);
  background: #101010;
  text-decoration: none;
  transition: all 0.2s;
}

.direct-link:hover {
  border-color: rgba(var(--accent-rgb), 0.35);
  background: #151515;
  transform: none;
}

.dl-icon {
  width: 34px;
  height: 34px;
  border-radius: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  background: rgba(var(--accent-rgb), 0.08);
  border: 1px solid rgba(var(--accent-rgb), 0.2);
}

.dl-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dl-label {
  font-family: var(--font-body);
  font-size: 0.66rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.dl-value {
  font-size: 0.76rem;
  color: var(--text);
  font-weight: 500;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 1px solid var(--border);
  background: #101010;
  padding: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
}

.form-label::before {
  content: 'set ';
  color: var(--accent);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.65rem 0.8rem;
  background: #0c0c0c;
  border: 1px solid var(--border);
  border-radius: 0;
  color: var(--text);
  font-size: 0.78rem;
  font-family: var(--font-body);
  transition: all 0.2s;
  resize: none;
  outline: none;
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-muted);
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--accent);
  background: #0f0f0f;
  box-shadow: none;
}

.form-submit {
  align-self: flex-start;
  padding: 0.6rem 1rem;
  background: rgba(var(--accent-rgb), 0.12);
  color: var(--accent);
  border: none;
  border-radius: 0;
  border: 1px solid rgba(var(--accent-rgb), 0.35);
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: var(--font-body);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.form-submit::before {
  content: '$ ';
}

.form-submit:hover {
  background: rgba(var(--accent-rgb), 0.2);
  transform: none;
  box-shadow: none;
}

.form-submit:disabled {
  cursor: default;
  opacity: 0.75;
  box-shadow: none;
  transform: none;
}

.form-success {
  margin-top: 0.75rem;
  font-size: 0.75rem;
  color: var(--accent);
}

@media (max-width: 900px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 600px) {
}
</style>
