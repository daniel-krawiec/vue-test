<template>
  <div class="fetchUsers"></div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import axios from 'axios'

export const BASE_URL = 'https://jsonplaceholder.typicode.com'

@Options({
  methods: {
    async fetchUsers () {
      try {
        return await axios.get(`${BASE_URL}/users`)
      } catch (e) {
        return []
      }
    }
  }
})

export default class FetchUsers extends Vue {}
</script>

<style scoped lang="scss">
</style>
