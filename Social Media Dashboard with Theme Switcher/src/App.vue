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
	<main class="app__main">
		<section class="app__first-container">
			<h2 class="sr-only">All Followers</h2>
			<MainCard
				v-for="card in followers"
				:key="card.name"
				:card="card" />
		</section>
		<section class="app__second-container">
			<h2 class="app__subtitle">{{ title2 }}</h2>
			<SecondaryCard
				v-for="card in todayOverview"
				key="card.type"
				:card="card" />
		</section>
	</main>
	<footer class="app__attribution">
		Challenge by
		<a
			href="https://www.frontendmentor.io?ref=challenge"
			target="_blank"
			>Frontend Mentor</a
		>
		Coded by
		<a
			href="https://github.com/Juanescacha"
			target="_blank"
			>Juan Camargo</a
		>
	</footer>
</template>

<style lang="scss">
	@media (min-width: 0px) {
		.app {
			&__main {
				padding: 0 1.56rem 2.81rem 1.56rem;
				margin-top: -2.75rem;
			}

			&__attribution {
				font-size: 1rem;
				text-align: center;
				color: var(--big-text);
				margin-bottom: 3rem;

				a {
					color: var(--twitter);

					&:hover {
						text-decoration: underline;
					}
				}
			}

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
		.app {
			&__main {
				padding-bottom: 4.69rem;
				padding-left: 10.31rem;
				padding-right: 10.31rem;
				margin-top: -6.75rem;
			}

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
