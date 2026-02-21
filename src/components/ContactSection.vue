<script setup>
import { reactive } from 'vue'
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
  <section id="contact" class="section-contact">
    <h2>Get in Touch</h2>
    <p>If you would like to get in touch, please reach out via email or connect on LinkedIn.</p>
    <form @submit.prevent="sendEmail">
      <input type="text" placeholder="Your Name" v-model="form.name" />
      <input type="email" placeholder="Your Email" v-model="form.email" />
      <textarea placeholder="Your Message" v-model="form.message"></textarea>
      <button type="submit">Send Message</button>
    </form>

    <div class="footer-social">
      <a href="mailto:michaelildefonso20@gmail.com">michaelildefonso20@gmail.com</a>
      <a href="https://www.linkedin.com/in/michael-ildefonso">LinkedIn</a>
      <a href="https://github.com/michaelildefonso">GitHub</a>
    </div>
  </section>
</template>
