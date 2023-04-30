import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/styles.css'

const app = createApp(App)

app.use(router)
app.use(createApp)
app.mount('#app')
