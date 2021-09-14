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
  async asyncData() {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve(["22", "33", "44", "55"]);
      }, 3000);
    });
    this.list = ref(data);
  },
});
</script>

<style scoped>
h1 {
  color: red;
}
</style>
