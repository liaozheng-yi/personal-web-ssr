<template>
  <!-- <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </router-view> -->
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-dialog-provider>
            <router-view></router-view>
          </n-dialog-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup>
import { ref } from 'vue'
import { zhCN, dateZhCN } from 'naive-ui'
import {
  NMessageProvider,
  NLoadingBarProvider,
  NNotificationProvider,
  NDialogProvider,
  NConfigProvider,
} from 'naive-ui'

</script>
<style></style>
