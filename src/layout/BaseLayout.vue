<template>
  <base-header />
  <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </router-view>
</template>
<script setup>
import BaseHeader from 'comps/Header/BaseHeader.vue'
</script>
<style lang="scss"></style>
