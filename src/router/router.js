import {createRouter, createWebHashHistory} from "vue-router";
import Hello from "../view/Hello.vue";
import About from "../view/About.vue";
import Contact from "../view/Contact.vue";
import Projects from "../view/Projects.vue";
import PersonalInfo from "../components/About/PersonalInfo.vue";
import School from "../components/About/School.vue";

export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/hello',
			name: 'hello',
			alias: '/',
			component: Hello,
		},
		{
			path: '/about',
			name: 'about-me',
			component: About,
			children: [
				{
					path: '/personal-info',
					name: 'personal-info',
					component: PersonalInfo,
				},
				{
					path: '/school',
					name: 'school',
					component: School,
				}
			]
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact,
		},
		{
			path: '/projects',
			name: 'projects',
			component: Projects,
		},
	]
})