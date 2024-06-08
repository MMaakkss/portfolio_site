import { createRouter, createWebHashHistory } from "vue-router"
import Hello from "../view/Hello.vue"
import About from "../view/About.vue"
import Contact from "../view/Contact.vue"
import Projects from "../view/Projects.vue"
import Education from "../components/About/Education.vue"
import Experience from "@/components/About/Experience.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/hello",
      name: "hello",
      alias: "/",
      component: Hello,
    },
    {
      path: "/about",
      name: "about-me",
      component: About,
      children: [
        {
          path: "/education",
          name: "education",
          component: Education,
        },
        {
          path: "/experience",
          name: "experience",
          component: Experience,
        },
      ],
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
    },
  ],
})