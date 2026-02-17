<template>
  <div 
    class="sidebar-wrapper"
    :class="{ 
      'wrapper-open': isOpen, 
      'wrapper-closed': !isOpen
    }"
  >
    <aside 
      class="app-sidebar" 
      :class="{ 
        'sidebar-open': isOpen, 
        'sidebar-closed': !isOpen,
        'sidebar-collapsed': isCollapsed && isOpen,
        'sidebar-expanded': !isCollapsed && isOpen
      }"
    >
      <nav class="sidebar-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span class="nav-text" :class="{ 'nav-text-hidden': isCollapsed }">Home</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span class="nav-text" :class="{ 'nav-text-hidden': isCollapsed }">Dashboard</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/settings" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
              <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
            </svg>
            <span class="nav-text" :class="{ 'nav-text-hidden': isCollapsed }">Settings</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span class="nav-text" :class="{ 'nav-text-hidden': isCollapsed }">Profile</span>
          </router-link>
        </li>
      </ul>
    </nav>
    </aside>

    <button 
      v-if="isOpen"
      class="sidebar-toggle" 
      @click="toggleSidebar"
      :class="{ 
        'toggle-collapsed': isCollapsed && !isMobile(),
        'toggle-expanded': !isCollapsed || isMobile(),
        'sidebar-toggle-mode-off':isCollapsed ,
        'sidebar-toggle-mode':!isCollapsed 
      }"
      aria-label="Toggle sidebar"
    >
      <svg 
        v-if="isCollapsed && !isMobile()"
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
      <svg 
        v-else
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    </button>
  </div>
  <div 
    v-if="isOpen" 
    class="sidebar-overlay" 
    @click="closeSidebar"
  ></div>
</template>

<script setup>
import { computed } from 'vue'
import { useSidebarStore } from '../store/sidebar'

const sidebarStore = useSidebarStore()

const isOpen = computed(() => sidebarStore.isOpen)
const isCollapsed = computed(() => sidebarStore.isCollapsed)

const isMobile = () => {
  return window.innerWidth < 768
}

const toggleSidebar = () => {
  if (isMobile()) {
    // On mobile: close the sidebar
    sidebarStore.close()
  } else {
    // On desktop: toggle collapse/expand
    sidebarStore.toggleCollapse()
  }
}

const closeSidebar = () => {
  sidebarStore.close()
}
</script>

<style scoped>
.sidebar-wrapper {
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 999;
  display: flex;
  align-items: flex-start;
}

.app-sidebar {
  width: 250px;
  height: calc(100vh - 60px);
  background-color: #34495e;
  color: white;
  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
}

.sidebar-toggle {
  position: fixed;
  width: 32px;
  height: 32px;
  background-color: #34495e;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-left: none;
  color: white;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px 0px 0px 8px;

  transition: all 0.3s ease-in-out;
  margin-top: 1rem;
  z-index: 1000;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
}
    .sidebar-toggle-mode{
    margin-left: 88%;
      margin-top: auto;
  }
      .sidebar-toggle-mode-off{
    margin-left: 54%;
      margin-top: auto;
  }

.sidebar-toggle:hover {
  background-color: #2c3e50;
  border-color: rgba(255, 255, 255, 0.3);
}

.sidebar-toggle:active {
  background-color: #1a252f;
}

.sidebar-nav {
  padding: 1rem 0;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 10px;
}

.nav-item {
  margin: 0;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.2s, padding 0.3s ease-in-out;
  cursor: pointer;
  justify-content: flex-start;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.15);
  border-left: 3px solid #3498db;
  padding-left: calc(1.5rem - 3px);
}

.nav-link svg {
  margin-right: 0.75rem;
  flex-shrink: 0;
  min-width: 20px;
}

.nav-text {
  font-size: 1rem;
  white-space: nowrap;
  opacity: 1;
  transition: opacity 0.2s ease-in-out, width 0.3s ease-in-out;
  overflow: hidden;
}

.nav-text-hidden {
  opacity: 0;
  width: 0;
  margin: 0;
  padding: 0;
}

.sidebar-overlay {
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

/* Collapsed state - only on desktop when sidebar is open */
@media (min-width: 768px) {
  .app-sidebar.sidebar-collapsed {
    width: 70px;
  }
  
  .app-sidebar.sidebar-collapsed .nav-link {
    padding: 1rem;
    justify-content: center;
  }
  
  .app-sidebar.sidebar-collapsed .nav-link svg {
    margin-right: 0;
  }
}

/* Mobile: Sidebar hidden by default, slides in from left */
@media (max-width: 767px) {
  .sidebar-toggle{
    margin-left: 90%;
  }
  .sidebar-wrapper {
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }
  
  .sidebar-wrapper.wrapper-open {
    transform: translateX(0);
  }
  
  .sidebar-wrapper.wrapper-closed {
    transform: translateX(-100%);
  }
  
  .sidebar-wrapper .app-sidebar {
    width: 250px;
  }
  
  /* On mobile, always show labels when sidebar is open */
  .app-sidebar.sidebar-open .nav-text {
    opacity: 1;
  }
  
  .sidebar-toggle {
    margin-top: 1rem;
  }
}

/* Desktop: Sidebar can be toggled but stays visible when open */
@media (min-width: 768px) {
  .sidebar-wrapper {
    transform: translateX(0);
    transition: transform 0.3s ease-in-out;
  }
  
  .sidebar-wrapper.wrapper-closed {
    transform: translateX(-100%);
  }
  
  .app-sidebar {
    transform: translateX(0);
  }
  
  .sidebar-overlay {
    display: none;
  }
}

/* Scrollbar styling */
.app-sidebar::-webkit-scrollbar {
  width: 6px;
}

.app-sidebar::-webkit-scrollbar-track {
  background: #2c3e50;
}

.app-sidebar::-webkit-scrollbar-thumb {
  background: #7f8c8d;
  border-radius: 3px;
}

.app-sidebar::-webkit-scrollbar-thumb:hover {
  background: #95a5a6;
}
</style>
