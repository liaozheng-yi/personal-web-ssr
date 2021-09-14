import { createApp } from './main'
const { app, router, store } = createApp()

router.beforeResolve((to, from, next) => {
    next();
});


// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
    app.mount('#app'.true)
})