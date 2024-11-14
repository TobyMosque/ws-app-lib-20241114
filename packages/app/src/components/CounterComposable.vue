<script setup lang="ts">
import { useCounterLibState } from 'ws-al-lib/composables'

const { count, double, increment } = useCounterLibState()
</script>

<template>
  <fieldset class="app__counter_composable">
    <legend> App Counter - Composable </legend>
    <div class="app__counter_composable--section">
      <input type="number" v-model.number="count" />
    </div>
    <div class="app__counter_composable--section">
      double: {{ double }}
    </div>
    <div class="app__counter_composable--section">
      <button @click="increment"> Increment </button>
    </div>
  </fieldset>
</template>

<style scoped>
.app__counter_composable--section {
  padding: 8px;
}
</style>
