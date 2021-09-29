<template>
  <h1 v-for="item in list" :key="item">{{ item }}</h1>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  async setup() {
    let list = ref();
    const res = await new Promise((resolve) => {
      //you can inject api request here
      setTimeout(() => {
        resolve(["11", "22", "33", "44", "55", "66"]);
      }, 2000);
    });
    list.value = res;
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
