<template>
  <div class="head">这是头部</div>
  <router-link to="/">home</router-link>|
  <router-link to="/about">about</router-link>
  <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </router-view>
</template>
<script lang="ts" setup></script>
<style lang="scss">
.head {
  background-color: black;
  height: 30px;
  text-align: center;
  color: white;
}
</style>
