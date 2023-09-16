import { createRouter, createWebHistory } from "vue-router"

import MainView from "../views/MainView.vue"
import LocationView from "../views/LocationView.vue"

const routes = [
	{
		path: "/",
		component: MainView,
		name: "Main",
	},
	{
		path: "/location",
		component: LocationView,
		name: "Location",
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
