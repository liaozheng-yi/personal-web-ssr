import {createApp} from 'vue'
import App from './App.vue'

// wait until router is ready before mounting to ensure hydration match
createApp(App).mount('#app')