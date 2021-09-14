<template>
  <div>home</div>
  <div>{{ store.state.message }}</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>

<style></style>
