import { createApp } from './main'
const { app, router } = createApp('client')

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
    app.mount('#app')
})