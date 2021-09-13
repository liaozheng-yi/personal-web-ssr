<template>
  <h1>{{ msg }}</h1>
</template>

<script setup lang="ts">
import {ref} from 'vue';
let msg = ref('about')
</script>

<style scoped>
h1 {
  color: red;
}
</style>
