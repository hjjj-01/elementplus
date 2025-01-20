import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import './assets/base.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
import '@/assets/CSS/aside.css'
import store from '@/assets/JS/store'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(router)
app.use(ElementPlus).use(store)

app.mount('#app')
