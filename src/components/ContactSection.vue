<script setup>
import { reactive } from 'vue'
import { NFormItem, NInput, NButton, NSpace } from 'naive-ui'

const form = reactive({
  name: '',
  email: '',
  message: '',
})
function sendEmail() {
  // Placeholder for email sending logic
  alert(`Message sent! Name: ${form.name}, Email: ${form.email}, Message: ${form.message}`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<template>
  <n-p class="section-label">// get in touch</n-p>

  <section id="contact" class="section section-contact">
    <h2 class="section-title">Contact Me</h2>
    <p class="section-description">
      Have a project in mind or just want to connect? Feel free to reach out.
    </p>

    <div class="contact-wrapper">
      <form class="contact-form" @submit.prevent="sendEmail">
        <n-form-item label="Name" :show-feedback="false">
          <n-input
            v-model:value="form.name"
            placeholder="Your Name"
            :input-props="{ autocomplete: 'name' }"
          />
        </n-form-item>
        <n-form-item label="Email" :show-feedback="false">
          <n-input
            v-model:value="form.email"
            type="text"
            placeholder="your@email.com"
            :input-props="{ autocomplete: 'email' }"
          />
        </n-form-item>
        <n-form-item label="Message" :show-feedback="false">
          <n-input
            v-model:value="form.message"
            type="textarea"
            placeholder="What's on your mind?"
            :autosize="{ minRows: 4, maxRows: 8 }"
          />
        </n-form-item>
        <n-button type="primary" size="large" attr-type="submit" class="submit-btn">
          Send Message
        </n-button>
      </form>

      <div class="contact-links">
        <p class="links-label">Or reach me directly</p>
        <n-space vertical :size="12">
          <n-button text tag="a" href="mailto:michaelildefonso20@gmail.com" class="contact-link">
            michaelildefonso20@gmail.com
          </n-button>
          <n-button
            text
            tag="a"
            href="https://www.linkedin.com/in/michael-ildefonso-62ba77267"
            target="_blank"
            class="contact-link"
          >
            LinkedIn
          </n-button>
          <n-button
            text
            tag="a"
            href="https://github.com/michaelildefonso"
            target="_blank"
            class="contact-link"
          >
            GitHub
          </n-button>
        </n-space>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-contact {
  min-height: 85vh;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-label {
  color: var(--accent);
  font-size: 0.85rem;
  letter-spacing: 2px;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1rem;
}

.section-description {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  max-width: 55ch;
}

.contact-wrapper {
  display: flex;
  gap: 5rem;
  align-items: flex-start;
  max-width: 900px;
}

.contact-form {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.submit-btn {
  align-self: flex-start;
  margin-top: 8px;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 8px;
}

.links-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--text-muted);
  font-weight: 700;
  margin-bottom: 4px;
}

.contact-link {
  color: var(--text-muted) !important;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s ease;
}

.contact-link:hover {
  color: var(--accent) !important;
}

@media (max-width: 1024px) {
  .section-contact {
    min-height: auto;
    padding: 3rem 2rem;
  }
  .contact-wrapper {
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .section-contact {
    min-height: auto;
    padding: 2.5rem 1.5rem;
  }
  .section-title {
    font-size: 2rem;
  }
  .section-description {
    font-size: 0.95rem;
    margin-bottom: 2rem;
  }
  .contact-wrapper {
    flex-direction: column;
    gap: 2.5rem;
    max-width: 100%;
  }
  .contact-form {
    width: 100%;
  }
  .contact-links {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .section-contact {
    min-height: auto;
    padding: 2rem 1rem;
  }
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
  .section-description {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  .contact-wrapper {
    gap: 1.5rem;
  }
  .contact-form {
    gap: 16px;
  }
  .contact-links {
    gap: 0.75rem;
  }
  .links-label {
    font-size: 0.75rem;
  }
  .contact-link {
    font-size: 0.9rem;
  }
}
</style>
