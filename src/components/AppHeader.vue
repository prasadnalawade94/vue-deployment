<template>
  <header class="app-header">
    <button 
      v-if="!isSidebarOpen"
      class="menu-button" 
      @click="openSidebar"
      aria-label="Open sidebar"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
    <div class="header-content">
      <h1 class="app-title">My Application</h1>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useSidebarStore } from '../store/sidebar'

const sidebarStore = useSidebarStore()
const isSidebarOpen = computed(() => sidebarStore.isOpen)

const openSidebar = () => {
  sidebarStore.open()
  sidebarStore.expand()
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #2c3e50;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.menu-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;
  margin-right: 1rem;
}

.menu-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.menu-button:active {
  background-color: rgba(255, 255, 255, 0.2);
}

.header-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
}

@media (min-width: 768px) {
  .app-header {
    padding: 0 2rem;
  }
  
  .app-title {
    font-size: 1.75rem;
  }
}
</style>
