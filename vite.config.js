import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), //设置@指向src目录
      comps: resolve(__dirname, './src/components') //设置comps指向components目录
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/css/publicColor.scss';`
      }
    }
  }
});
