import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isOpen: window.innerWidth >= 768, // Open by default on desktop
    isCollapsed: false
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
    },
    collapse() {
      this.isCollapsed = true
    },
    expand() {
      this.isCollapsed = false
    }
  }
})
