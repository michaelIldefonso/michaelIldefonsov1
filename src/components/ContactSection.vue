<script setup>
import { reactive } from 'vue'
import { NIcon } from 'naive-ui'
import { MailOutline, LogoLinkedin, LogoGithub } from '@vicons/ionicons5'

const form = reactive({ name: '', email: '', message: '' })

function sendEmail() {
  alert(`Message sent! Name: ${form.name}, Email: ${form.email}, Message: ${form.message}`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <section class="contact">
    <div class="section-header">
      <span class="section-num">04</span>
      <span class="section-tag">Contact</span>
    </div>

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
          <a href="https://github.com/michaelildefonso" target="_blank" class="direct-link">
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
        <button type="submit" class="form-submit">Send Message →</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 3.5rem;
}

.section-num {
  font-family: monospace;
  font-size: 4rem;
  font-weight: 900;
  color: rgba(129, 140, 248, 0.08);
  line-height: 1;
  letter-spacing: -2px;
  user-select: none;
}

.section-tag {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--text);
  letter-spacing: -0.02em;
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.contact-heading {
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 800;
  color: var(--text);
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-bottom: 1rem;
}

.accent-word {
  color: var(--accent);
}

.contact-desc {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
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
  padding: 1rem 1.25rem;
  border-radius: 10px;
  border: 1px solid rgba(129, 140, 248, 0.16);
  background: rgba(13, 18, 32, 0.58);
  text-decoration: none;
  transition: all 0.2s;
}

.direct-link:hover {
  border-color: rgba(129, 140, 248, 0.42);
  background: rgba(129, 140, 248, 0.08);
  transform: translateY(-2px);
}

.dl-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  background: rgba(129, 140, 248, 0.12);
  border: 1px solid rgba(129, 140, 248, 0.25);
}

.dl-copy {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dl-label {
  font-family: monospace;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--accent);
}

.dl-value {
  font-size: 0.92rem;
  color: var(--text);
  font-weight: 500;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.75rem 1rem;
  background: rgba(13, 18, 32, 0.8);
  border: 1px solid rgba(129, 140, 248, 0.15);
  border-radius: 8px;
  color: var(--text);
  font-size: 0.95rem;
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
  background: rgba(18, 25, 41, 0.9);
  box-shadow: 0 0 0 3px rgba(129, 140, 248, 0.15);
}

.form-submit {
  align-self: flex-start;
  padding: 0.8rem 2rem;
  background: var(--accent);
  color: #080b12;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: var(--font-body);
}

.form-submit:hover {
  background: var(--accent-hover);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(129, 140, 248, 0.3);
}

@media (max-width: 900px) {
  .contact {
    padding: 4rem 2rem;
  }
  .contact-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 600px) {
  .contact {
    padding: 3rem 1.25rem;
  }
}
</style>
