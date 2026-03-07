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
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2.5rem 5rem;
  margin-top: 0;
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
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 1px;
}

.footer-copy {
  font-size: 0.85rem;
  color: var(--text-muted);
  letter-spacing: 0.3px;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-link {
  font-size: 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
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
