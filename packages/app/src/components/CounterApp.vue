<script setup lang="ts">
import CounterStore from './CounterStore.vue';
import CounterComposable from './CounterComposable.vue';
</script>

<template>
  <counter-store></counter-store>
  <counter-composable></counter-composable>
</template>

<style scoped>
.al__counter_store--section {
  padding: 8px;
}
</style>
