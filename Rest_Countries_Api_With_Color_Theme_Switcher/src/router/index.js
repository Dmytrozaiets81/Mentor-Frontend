import { createRouter, createWebHistory } from "vue-router"

import MainView from "../views/MainView.vue"
import DetailView from "../views/DetailView.vue"

const routes = [
	{
		path: "/",
		name: "MainView",
		component: MainView,
	},
	{
		path: "/detail/:country",
		name: "DetailView",
		component: DetailView,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 }
	},
})

export default router
