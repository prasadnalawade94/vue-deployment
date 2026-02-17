import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'

import '@mdi/font/css/materialdesignicons.css'
const pinia = createPinia()
createApp(App).use(pinia).use(router).use(vuetify).mount('#app')

