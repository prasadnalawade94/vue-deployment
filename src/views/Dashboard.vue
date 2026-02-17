<template>

  <v-row>
    <v-col cols="6">
      <v-text-field label="Name" />
    </v-col>

    <v-col cols="6">
      <v-btn color="primary">Save</v-btn>
    </v-col>
  </v-row>

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
  margin-bottom: 1rem;
}

.link {
  color: #3498db;
  text-decoration: none;
  transition: color 0.2s;
}

.link:hover {
  color: #2980b9;
  text-decoration: underline;
}
</style>
