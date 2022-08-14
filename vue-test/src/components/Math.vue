<template>
  <div class="math"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  methods: {
    adding (a: number, b: number): number {
      return a + b
    },

    multiplying (a: number, b: number): number {
      return a * b
    },

    substracting (a: number, b: number): number {
      return a - b
    },

    dividing (a: number, b: number): number {
      return a / b
    }
  }
})
export default class Math extends Vue {}
</script>

<style scoped lang="scss">
</style>
