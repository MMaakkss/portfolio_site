import {createApp} from 'vue'
import App from './App.vue'

import router from "./router/router";
// import VueAxios from 'vue-axios'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { plugin, defaultConfig } from '@formkit/vue'
import {store} from "./store";

import 'animate.css';
import './style/main.scss'

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.use(store)
	// .use(VueAxios, axios)
	.use(plugin, defaultConfig)
	.mount('#app')
