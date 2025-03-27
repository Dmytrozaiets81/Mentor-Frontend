<script setup>
	// components
	import MainApp from "./components/MainApp.vue"
	import HeaderApp from "./components/HeaderApp.vue"
	import FooterApp from "./components/FooterApp.vue"

	// data
	import data from "../data.json"

	const { title, totalFollowers, followers, todayOverview, title2 } = data
</script>

<template>
	<HeaderApp
		:title="title"
		:totalFollowers="totalFollowers" />
	<MainApp
		:followers="followers"
		:title="title2"
		:todayOverview="todayOverview" />
	<FooterApp />
</template>

<style lang="scss" scoped></style>
