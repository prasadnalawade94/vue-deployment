<script setup>
import {useCounterStore} from '../store/store';
const counterStore = useCounterStore();
</script>

<template>
  hello welcome component {{ counterStore.count }}
  <button @click="counterStore.increment()">Increment</button>
  <button @click="counterStore.decrement()">Increment</button>
</template>
