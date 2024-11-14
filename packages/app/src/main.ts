import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'ws-al-lib/style.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.mount('#app')
