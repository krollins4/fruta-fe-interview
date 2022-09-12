<script setup>
import EmptyState from '@/components/EmptyState.vue'

// import { useFruitsStore } from '@/stores/fruits'

// const store = useFruitsStore()
// const fruits = await store.listFruits()
</script>

<template>
<main>
  <EmptyState/> 
</main>
</template>

<style scoped>
  main {
    border-radius: 8px;
    border: 1px solid var(--color-border);
    padding: 2rem;
    min-width: 100%;
  }
</style>