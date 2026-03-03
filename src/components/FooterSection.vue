<template>
  <footer class="footer">
    <n-text class="footer-copy">&copy; 2026 Michael Ildefonso. All rights reserved.</n-text>
  </footer>
</template>

<style scoped>
.footer {
  background-color: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  padding: 2rem;
  text-align: center;
  margin-top: 4rem;
}

.footer-copy {
  color: var(--text-muted);
  font-size: 0.9rem;
  letter-spacing: 0.5px;
}

@media (max-width: 768px) {
  .footer {
    padding: 1.5rem 1rem;
    margin-top: 3rem;
  }
  .footer-copy {
    font-size: 0.85rem;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 1rem;
    margin-top: 2rem;
  }
  .footer-copy {
    font-size: 0.8rem;
  }
}
</style>
