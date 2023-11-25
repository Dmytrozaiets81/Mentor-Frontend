<script setup>
	import MainContent from "./components/MainContent.vue"
	import BgSidebarMobile from "@/assets/icons/BgSidebarMobile.vue"
</script>

<template>
	<div class="app__container">
		<aside class="app__nav-wrapper">
			<BgSidebarMobile />
			<nav class="app__nav-container">
				<ol class="app__nav-links">
					<li>
						<a
							href="#"
							class="app__link"
							>1</a
						>
					</li>
					<li>
						<a
							href="#"
							class="app__link"
							>2</a
						>
					</li>
					<li>
						<a
							href="#"
							class="app__link"
							>3</a
						>
					</li>
					<li>
						<a
							href="#"
							class="app__link"
							>4</a
						>
					</li>
				</ol>
			</nav>
		</aside>
		<main class="app__main">
			<MainContent />
			<div class="app__button-wrapper">
				<button
					class="app__button app__button--return"
					type="button">
					Go Back
				</button>
				<button
					class="app__button app__button--next"
					type="button">
					Next Step
				</button>
			</div>
		</main>
	</div>
</template>

<style lang="scss" scoped>
	.app {
		&__container {
			display: flex;
			flex-direction: column;
			justify-content: start;
			height: 100vh;
		}
		&__nav-wrapper {
			position: relative;
		}

		&__nav-container {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			top: 2rem;
		}
		&__nav-links {
			display: flex;
			justify-content: center;
			gap: 1rem;
		}
		&__link {
			height: 2.0625rem;
			width: 2.0625rem;
			padding: 0.31rem 0.47rem 0.31rem 0.59rem;
			display: flex;
			justify-content: center;
			align-items: center;
			color: white;
			font-size: 0.875rem;
			font-weight: 700;
			border-radius: 100%;
			border-width: 1px;
			border-style: solid;
			border-color: var(--active);
			&:hover,
			&:focus {
				background-color: var(--active);
				color: var(--primary);
			}
		}
		&__main {
			position: relative;
			margin-top: -5.3rem;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&__button-wrapper {
			background-color: white;
			margin-top: 2rem;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem;
		}
		&__button--next {
			color: white;
			background-color: var(--primary);
			padding: 0.75rem 1.5rem;
			border-radius: 0.625rem;
			&:hover {
				background-color: var(--active);
			}
		}
		&__button--return {
			color: var(--secondary);
			&:hover {
				color: var(--primary);
			}
		}
		&__button {
			font-size: 0.875rem;
			font-weight: 500;
			cursor: pointer;
			border: none;
			@extend %focus;
		}
	}
</style>
