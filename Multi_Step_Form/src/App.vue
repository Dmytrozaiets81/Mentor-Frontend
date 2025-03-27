<script setup>
	import MainContent from "./components/MainContent.vue"
	import BgSidebarMobile from "@/assets/icons/BgSidebarMobile.vue"
	import BgSidebarDesktop from "@/assets/icons/BgSidebarDesktop.vue"

	import { useFormStore } from "@/stores/form"
	const formStore = useFormStore()

	const handleNextStep = () => {
		formStore.step++
	}

	const handlePreviousStep = () => {
		formStore.step--
	}
</script>

<template>
	<div class="app__container">
		<aside class="app__nav-wrapper">
			<BgSidebarMobile class="app__sidebar-mobile" />
			<BgSidebarDesktop class="app__sidebar-desktop" />
			<nav class="app__nav-container">
				<ol class="app__nav-steps">
					<li class="app__step-container">
						<div
							class="app__step"
							:class="{
								'app__step--active': formStore.step === 1,
							}">
							1
						</div>
						<div class="app__step-info">
							<span class="app__step-label">step 1</span>
							<span class="app__step-description">your info</span>
						</div>
					</li>
					<li class="app__step-container">
						<div
							class="app__step"
							:class="{
								'app__step--active': formStore.step === 2,
							}">
							2
						</div>
						<div class="app__step-info">
							<span class="app__step-label">step 2</span>
							<span class="app__step-description"
								>select plan</span
							>
						</div>
					</li>
					<li class="app__step-container">
						<div
							class="app__step"
							:class="{
								'app__step--active': formStore.step === 3,
							}">
							3
						</div>
						<div class="app__step-info">
							<span class="app__step-label">step 3</span>
							<span class="app__step-description">add-ons</span>
						</div>
					</li>
					<li class="app__step-container">
						<div
							class="app__step"
							:class="{
								'app__step--active':
									formStore.step === 4 ||
									formStore.step === 5,
							}">
							4
						</div>
						<div class="app__step-info">
							<span class="app__step-label">step 4</span>
							<span class="app__step-description">summary</span>
						</div>
					</li>
				</ol>
			</nav>
		</aside>
		<form @submit.prevent="handleNextStep">
			<main class="app__main">
				<MainContent />
				<div
					class="app__button-wrapper"
					:class="{
						'app__button-wrapper--hide': formStore.step === 5,
					}">
					<button
						class="app__button app__button--return"
						type="button"
						:class="{
							'app__button--hide': formStore.step === 1,
						}"
						@click="handlePreviousStep">
						Go Back
					</button>
					<button
						class="app__button app__button--next"
						:class="{
							'app__button--confirm': formStore.step === 4,
						}"
						type="submit">
						Next Step
					</button>
				</div>
			</main>
		</form>
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
		&__nav-steps {
			display: flex;
			justify-content: center;
			gap: 1rem;
		}
		&__step {
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
			&--active {
				background-color: var(--active);
				color: var(--primary);
			}
		}
		&__step-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 1rem;
			text-transform: uppercase;
		}
		&__step-info {
			display: none;
		}
		&__step-label {
			font-size: 0.75rem;
			font-weight: 400;
			color: var(--tertiary);
		}
		&__step-description {
			font-size: 0.875rem;
			font-weight: 700;
			letter-spacing: 0.0625rem;
			color: white;
		}
		&__main {
			position: relative;
			margin-top: -23%;
			// margin-top: -5.3rem;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}
		&__button-wrapper {
			background-color: white;
			margin-top: 2rem;
			display: flex;
			justify-content: end;
			align-items: center;
			padding: 1rem;
			&--hide {
				display: none;
			}
		}
		&__button {
			font-size: 0.875rem;
			font-weight: 500;
			cursor: pointer;
			border: none;
			@extend %focus;
		}
		&__button--next {
			margin-left: auto;
			color: white;
			background-color: var(--primary);
			padding: 0.75rem 1.5rem;
			border-radius: 0.625rem;
			&:hover {
				background-color: var(--button);
			}
		}
		&__button--confirm {
			&:hover {
				background-color: var(--confirm);
			}
		}
		&__button--return {
			height: 100%;
			color: var(--secondary);
			&:hover {
				color: var(--primary);
			}
		}
		&__button--hide {
			display: none;
		}
		&__sidebar-desktop {
			display: none;
		}
	}
	@media (min-width: $small-breakpoint) {
		.app {
			&__main {
				margin-top: 0;
			}
			&__container {
				padding: 1rem;
				flex-direction: row;
				border-radius: 0.9375rem;
				background: white;
				width: max-content;
				height: auto;
			}
			&__nav-wrapper {
				max-height: 35.5rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
			&__nav-steps {
				flex-direction: column;
			}
			&__button-wrapper {
				background-color: transparent;
				margin-bottom: 2rem;
				margin-left: 6.25rem;
				margin-right: 6.25rem;
				margin-top: 0;
				padding: 0;
			}
			&__sidebar-mobile {
				display: none;
			}
			&__sidebar-desktop {
				display: block;
			}
			&__step-info {
				display: flex;
				flex-direction: column;
				gap: 0.25rem;
			}
			&__nav-steps {
				gap: 2rem;
			}
		}
	}
</style>
