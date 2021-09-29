<template>
  <div class="header-top">
    <n-dropdown trigger="hover" @select="handleSelect" :options="options">
      <button>导航</button>
      <!-- there is a bug in page refreshing if you use some naive ui component
        I'm don't know the deep reason 
      -->
      <!-- <n-button>导航</n-button> -->
    </n-dropdown>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const options = [
  {
    label: 'home',
    key: 'index',
  },
  {
    label: '预获取数据-2秒',
    key: 'about',
  },
]
const handleSelect = key => {
  router.push('/' + key)
}
</script>
<style lang="scss">
.header-top {
  padding: 0 60px;
  height: 35px;
  line-height: 35px;
  background: $bg0;
}
</style>
