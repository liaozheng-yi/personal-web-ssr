<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <n-theme-editor :style="themeEditorStyle">
      <n-loading-bar-provider>
        <n-message-provider>
          <n-notification-provider>
            <n-dialog-provider>
              <app />
            </n-dialog-provider>
          </n-notification-provider>
        </n-message-provider>
      </n-loading-bar-provider>
      <n-global-style />
    </n-theme-editor>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { zhCN, dateZhCN } from 'naive-ui'
import App from './App.vue'
import {
  NThemeEditor,
  NGlobalStyle,
  NMessageProvider,
  NLoadingBarProvider,
  NNotificationProvider,
  NDialogProvider,
  NConfigProvider
} from 'naive-ui'
let themeEditorStyle = ref({})
</script>
