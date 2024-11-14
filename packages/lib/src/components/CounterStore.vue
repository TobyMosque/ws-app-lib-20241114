<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterLibStore } from 'stores/counter'

const counterLibStore = useCounterLibStore()
const { count, double } = storeToRefs(counterLibStore)
const { increment } = counterLibStore
</script>

<template>
  <fieldset class="al__counter_store">
    <legend> Lib Counter - Store </legend>
    <div class="lib__counter_store--section">
      <input type="number" v-model.number="count" />
    </div>
    <div class="lib__counter_store--section">
      double: {{ double }}
    </div>
    <div class="lib__counter_store--section">
      <button @click="increment"> Increment </button>
    </div>
  </fieldset>
</template>

<style scoped>
.lib__counter_store--section {
  padding: 8px;
}
</style>
