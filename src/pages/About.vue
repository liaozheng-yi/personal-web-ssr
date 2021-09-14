<template>
  <h1 v-for="item in list" :key="item">{{ item }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let list = ref();
    return {
      list,
    };
  },
});
</script>

<style scoped>
h1 {
  color: red;
}
</style>
