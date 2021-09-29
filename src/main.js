import App from './App.vue'
import { createSSRApp, createApp as createClientApp } from 'vue'
import { createRouter } from './router'
import { createStore } from './store'
import { sync } from 'vuex-router-sync'
import naive from './plugin/naive'
// SSR requires a fresh app instance per request, therefore we export a function
// that creates a fresh app instance. If using Vuex, we'd also be creating a fresh store here.
export function createApp(entry) {
    const router = createRouter()
    const store = createStore()
    sync(store, router);

    const app = entry === 'server' ? createSSRApp(App) : createClientApp(App)
    app.use(router).use(store).use(naive)

    return { app, router, store }
}
