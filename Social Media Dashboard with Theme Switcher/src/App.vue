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
		<section class="main__first-container">
			<h2 class="sr-only">All Followers</h2>
			<MainCard
				v-for="card in followers"
				:key="card.name"
				:card="card" />
		</section>
		<section class="main__second-container">
			<h2 class="main__subtitle">{{ title2 }}</h2>
			<SecondaryCard
				v-for="card in todayOverview"
				key="card.type"
				:card="card" />
		</section>
	</main>
</template>

<style lang="scss">
	@media (min-width: 0px) {
		.main {
			padding: 0 1.56rem 2.81rem 1.56rem;
			margin-top: -2.75rem;

			&__subtitle {
				color: var(--big-text);
				font-size: 1.5rem;
				font-weight: 700;
				text-transform: capitalize;
				margin-top: 2.88rem;
				margin-bottom: calc(1.69rem - 1rem);
			}

			&__first-container {
				display: flex;
				flex-direction: column;
				gap: 1.5rem;
			}
			&__second-container {
				display: flex;
				flex-direction: column;
				gap: 1rem;
			}
		}
	}

	@media (min-width: $small-breakpoint) {
		.main {
			padding-bottom: 4.69rem;
			padding-left: 10.31rem;
			padding-right: 10.31rem;
			margin-top: -6.75rem;

			&__first-container {
				flex-direction: row;
				flex-wrap: wrap;
				gap: 1.88rem;
			}
			&__second-container {
				display: grid;
				grid-template-columns: repeat(4, minmax(0, 1fr));
				gap: 0;
				row-gap: 1.5rem;
				column-gap: 1.88rem;
			}
			&__subtitle {
				grid-column: 1 / -1;
				margin-bottom: 0;
			}
		}
	}
</style>
