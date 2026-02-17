<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li 
        v-for="(item, index) in breadcrumbItems" 
        :key="index"
        class="breadcrumb-item"
      >
        <router-link 
          v-if="index < breadcrumbItems.length - 1"
          :to="item.path"
          class="breadcrumb-link"
        >
          {{ item.label }}
        </router-link>
        <span 
          v-else
          class="breadcrumb-current"
          aria-current="page"
        >
          {{ item.label }}
        </span>
        <span 
          v-if="index < breadcrumbItems.length - 1"
          class="breadcrumb-separator"
          aria-hidden="true"
        >
          /
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const breadcrumbItems = computed(() => {
  const items = []
  
  // Get all matched route records
  const matched = route.matched
  
  // Always add Home as the first item (unless we're already on home)
  if (route.path !== '/') {
    items.push({
      label: 'Home',
      path: '/'
    })
  }
  
  // Process matched routes
  matched.forEach((record) => {
    // Skip if no breadcrumb meta or if it's the root route
    if (!record.meta || !record.meta.breadcrumb || record.path === '/') {
      return
    }
    
    // Use the record's path directly (Vue Router handles full paths)
    items.push({
      label: record.meta.breadcrumb,
      path: record.path
    })
  })
  
  return items
})
</script>

<style scoped>
.breadcrumb {
  padding: 0.75rem 0;
}

.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 0.5rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
}

.breadcrumb-link {
  color: #3498db;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: #2980b9;
  text-decoration: underline;
}

.breadcrumb-current {
  color: #2c3e50;
  font-weight: 500;
}

.breadcrumb-separator {
  color: #95a5a6;
  margin-left: 0.5rem;
  user-select: none;
}

@media (max-width: 767px) {
  .breadcrumb {
    padding: 0.5rem 0;
  }
  
  .breadcrumb-item {
    font-size: 0.75rem;
  }
  
  .breadcrumb-separator {
    margin-left: 0.25rem;
  }
}
</style>
