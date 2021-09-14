<template>
  <div>home</div>
  <div>{{ store.state.message }}</div>
</template>
<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
</script>

<style></style>
