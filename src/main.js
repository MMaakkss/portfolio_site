import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router";
import './style/main.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
