import { defineStore } from 'pinia'
import { useCounterLib } from 'composables/counter'

export const useCounterLibStore = defineStore('counterLib', () => {
  const { count, double, increment } = useCounterLib()

  return {
    count,
    double,
    increment
  }
})