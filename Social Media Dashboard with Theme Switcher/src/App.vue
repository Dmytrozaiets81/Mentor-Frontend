<script setup>
	import MainCard from "./components/MainCard.vue"
	import SecondaryCard from "./components/SecondaryCard.vue"
	import HeaderBar from "./components/HeaderBar.vue"
	import data from "../data.json"

	const { title, totalFollowers, followers, todayOverview, title2 } = data
</script>

<template>
	<HeaderBar
		:title="title"
		:totalFollowers="totalFollowers" />
	<main class="main">
		<MainCard
			v-for="card in followers"
			:key="card.name"
			:card="card" />
		<h2 class="main__subtitle">{{ title2 }}</h2>
		<SecondaryCard
			v-for="card in todayOverview"
			key="card.type"
			:card="card" />
	</main>
</template>

<style lang="scss">
	@media (min-width: 0px) {
		.main {
			padding: 0 1.56rem;
			margin-top: -2.75rem;

			&__subtitle {
				color: var(--big-text);
				font-size: 1.5rem;
				font-weight: 700;
				text-transform: capitalize;
			}
		}
	}

	@media (min-width: 376px) {
		.main {
			padding: 0 10.31rem;
			display: grid;
			// grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
			grid-template-columns: repeat(4, 1fr);
			column-gap: 1.88rem;
			row-gap: 1.5rem;

			&__subtitle {
				grid-column: 1 / -1;
				margin-top: 1.38rem;
			}
		}
	}
</style>
