<script setup>
import AppHeader from './components/AppHeader.vue'
import AppSidebar from './components/AppSidebar.vue'
import AppFooter from './components/AppFooter.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import { useSidebarStore } from './store/sidebar'
import { computed } from 'vue'

const sidebarStore = useSidebarStore()
const isSidebarOpen = computed(() => sidebarStore.isOpen)
const isSidebarCollapsed = computed(() => sidebarStore.isCollapsed)
</script>

<template>

  <v-app>
    <v-container>
    <AppHeader />
    <AppSidebar />
    <main 
      class="app-main" 
      :class="{ 
        'sidebar-open': isSidebarOpen,
        'sidebar-collapsed': isSidebarOpen && isSidebarCollapsed,
        'sidebar-expanded': isSidebarOpen && !isSidebarCollapsed
      }"
    >
      <div class="main-content">
        <Breadcrumb />
        <router-view />
      </div>
    </main>
    <AppFooter />
    </v-container>
  </v-app>


  <!-- <div class="app-container">
   
  </div> -->
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  margin-top: 60px;
  margin-bottom: 60px;
  /* padding: 2rem 1rem; */
  flex: 1;
  transition: margin-left 0.3s ease-in-out;
  min-height: calc(100vh - 120px);
}

.main-content {
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
}

.main-content h2 {
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.main-content p {
  margin-bottom: 1rem;
  color: var(--color-text);
  line-height: 1.6;
}

/* Mobile: Content takes full width */
@media (max-width: 767px) {
  .app-main {
    margin-left: 0;
    /* padding: 1.5rem 1rem; */
  }
}

/* Desktop: Content adjusts when sidebar is open */
@media (min-width: 768px) {
  .app-main {
    margin-left: 0;
  }
  
  .app-main.sidebar-expanded {
    margin-left: 100px;
  }
  
  .app-main.sidebar-collapsed {
    /* margin-left: 70px; */
  }
}

@media (min-width: 1024px) {
  .app-main {
    padding: 2rem;
  }
  
  .main-content {
    padding: 0;
  }
}
</style>
