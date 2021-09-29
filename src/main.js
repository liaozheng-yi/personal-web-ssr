import App from './App.vue'
import { createSSRApp, createApp as createClientApp } from 'vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a
// fresh store here.
export function createApp(entry) {
    const app = entry === 'server' ? createSSRApp(App) : createClientApp(App)
    const router = createRouter()
    const store = createStore()
    sync(store, router);
    app.use(router).use(store)

    return { app, router, store }
}
