import {createApp} from "vue";
import App from "./App.vue";

import router from "./router/router";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {plugin, defaultConfig} from "@formkit/vue";
import {store} from "./store";

import "highlight.js/styles/atom-one-dark.css";

import "animate.css";
import "./style/main.scss";

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(router)
	.use(store)
	.use(plugin, defaultConfig)
	.mount("#app")
