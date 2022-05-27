import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { registerScrollSpy } from 'vue3-scroll-spy';
const app = createApp(App)
app.use(router)
registerScrollSpy(app)
app.mount('#app')
