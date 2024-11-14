import { computed, ref } from 'vue'
import { createGlobalState } from '@vueuse/core'

export function useCounterLib () {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  function increment() {
    count.value++;
  }

  return {
    count,
    double,
    increment
  }
}

export const useCounterLibState = createGlobalState(useCounterLib)