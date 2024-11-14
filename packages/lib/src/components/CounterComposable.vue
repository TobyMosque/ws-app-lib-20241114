<script setup lang="ts">
import { useCounterLibState } from 'composables/counter'

const { count, double, increment } = useCounterLibState()
</script>

<template>
  <fieldset class="lib__counter_composable">
    <legend> Lib Counter - Composable </legend>
    <div class="lib__counter_composable--section">
      <input type="number" v-model.number="count" />
    </div>
    <div class="lib__counter_composable--section">
      double: {{ double }}
    </div>
    <div class="lib__counter_composable--section">
      <button @click="increment"> Increment </button>
    </div>
  </fieldset>
</template>

<style scoped>
.lib__counter_composable--section {
  padding: 8px;
}
</style>
