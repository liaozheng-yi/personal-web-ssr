<template>
  <div>
    <router-link to="/">home</router-link>|
    <router-link to="/about">about</router-link>
    <router-view v-slot="{ Component }">
      <Suspense>
        <component :is="Component" />
      </Suspense>
    </router-view>
  </div>
</template>

<script lang="ts" setup></script>
<style></style>
