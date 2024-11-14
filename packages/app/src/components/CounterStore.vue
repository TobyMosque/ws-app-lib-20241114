<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterLibStore } from 'ws-al-lib/stores'

const counterLibStore = useCounterLibStore()
const { count, double } = storeToRefs(counterLibStore)
const { increment } = counterLibStore
</script>

<template>
  <fieldset class="app__counter_store">
    <legend> App Counter - Store </legend>
    <div class="app__counter_store--section">
      <input type="number" v-model.number="count" />
    </div>
    <div class="app__counter_store--section">
      double: {{ double }}
    </div>
    <div class="app__counter_store--section">
      <button @click="increment"> Increment </button>
    </div>
  </fieldset>
</template>

<style scoped>
.app__counter_store--section {
  padding: 8px;
}
</style>
