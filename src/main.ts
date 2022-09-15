import { createApp } from 'vue'
import App from './App'
import { createPinia } from 'pinia'
import router from '@/router/index'
import i18n from '@/locales/i18n'

const app = createApp(App)

app.use(createPinia()).use(router).use(i18n)

app.mount('#app')
