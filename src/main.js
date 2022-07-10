import {createApp} from 'vue'
import App from './App.vue'
import router from "./router/router";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {store} from "./store";

import 'animate.css';
import './style/main.scss'

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).use(store).mount('#app')
