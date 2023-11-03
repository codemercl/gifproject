import './assets/_global.css'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { store } from './stores/store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then((registration) => {
      console.log('Service Worker registered with scope:', registration.scope)
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error)
    })
}