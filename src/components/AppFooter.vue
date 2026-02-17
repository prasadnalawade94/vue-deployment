<template>
  <footer class="app-footer">
    <div class="footer-content">
      <p class="footer-text">
        &copy; {{ currentYear }} My Application. All rights reserved.
      </p>
      <div class="footer-links">
        <a href="#" class="footer-link" @click.prevent>Privacy Policy</a>
        <span class="footer-separator">|</span>
        <a href="#" class="footer-link" @click.prevent>Terms of Service</a>
        <span class="footer-separator">|</span>
        <a href="#" class="footer-link" @click.prevent>Contact</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.app-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  width: 100%;
  max-width: 1280px;
}

.footer-text {
  margin: 0;
  font-size: 0.875rem;
  text-align: center;
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 0.875rem;
  transition: color 0.2s;
}

.footer-link:hover {
  color: #3498db;
}

.footer-separator {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
  }
  
  .footer-text {
    text-align: left;
  }
  
  .footer-links {
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .app-footer {
    height: auto;
    min-height: 60px;
    padding: 0.75rem 0;
  }
  
  .footer-content {
    gap: 0.25rem;
  }
  
  .footer-text {
    font-size: 0.75rem;
  }
  
  .footer-link {
    font-size: 0.75rem;
  }
  
  .footer-separator {
    font-size: 0.75rem;
  }
}
</style>
