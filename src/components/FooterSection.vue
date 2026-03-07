<template>
  <footer class="footer">
    <div class="footer-inner">
      <span class="footer-logo">&lt;MI /&gt;</span>
      <p class="footer-copy">© 2026 Michael Ildefonso · Built with Vue 3 + Vite</p>
      <div class="footer-links">
        <a
          href="https://github.com/michaelIldefonso"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >GitHub</a
        >
        <a
          href="https://www.linkedin.com/in/michael-ildefonso-62ba77267"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
          >LinkedIn</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(var(--accent-rgb), 0.22);
  padding: 1.1rem 5rem;
  margin-top: 0;
  background: #0b0b0b;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-logo {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.06em;
}

.footer-copy {
  font-size: 0.74rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

.footer-copy::before {
  content: '[status] ';
  color: var(--accent);
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  font-size: 0.74rem;
  color: var(--text-muted);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  transition: color 0.2s;
}

.footer-link:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .footer {
    padding: 2rem 1.5rem;
  }
  .footer-inner {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }
}
</style>
