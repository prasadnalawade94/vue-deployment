<template>
  <div class="page">
    <h1>Settings</h1>
    <p>Manage your application settings and preferences.</p>
    <nav class="settings-nav">
      <router-link to="/settings/general" class="nav-link">General</router-link>
      <router-link to="/settings/security" class="nav-link">Security</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
</script>

<style scoped>
.page {
  padding: 2rem 0;
}

.page h1 {
  margin-bottom: 1rem;
  color: var(--color-heading);
}

.page p {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.settings-nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 1rem;
}

.nav-link {
  color: #3498db;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s;
}

.nav-link:hover {
  background-color: rgba(52, 152, 219, 0.1);
}

.nav-link.router-link-active {
  background-color: #3498db;
  color: white;
}
</style>
