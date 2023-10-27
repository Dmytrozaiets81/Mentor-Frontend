<script setup>
	import { ref } from "vue"
	// import { useDark, useToggle } from "@vueuse/core"

	const props = defineProps({
		title: String,
		totalFollowers: Object,
	})

	// const isDark = useDark({
	// 	selector: "body",
	// })
	// const toggleDark = useToggle(isDark)

	const switchToggle = ref(true)

	const handleToggle = () => {
		switchToggle.value = !switchToggle.value
		const body = document.querySelector("body")
		body.classList.toggle("dark")
		// isDark.value = !isDark.value
		// toggleDark()
	}
</script>

<template>
	<header class="header">
		<div class="header__left">
			<h1 class="header__title">
				{{ props.title }}
			</h1>
			<span class="header__info">
				{{ totalFollowers.title + totalFollowers.number }}
			</span>
		</div>
		<div
			class="header__right"
			id="header__label"
			@click="handleToggle">
			<span class="header__label"
				>{{ switchToggle ? "Light" : "Dark" }} Mode</span
			>
			<button
				class="header__toggle"
				type="button"
				aria-labelledby="header__label"
				role="switch"
				:aria-checked="switchToggle">
				<div
					class="header__toggle-circle"
					:class="{
						'header__toggle-circle--active': switchToggle,
					}"></div>
			</button>
		</div>
	</header>
</template>

<style lang="scss">
	@media (min-width: 0px) {
		.header {
			background-color: var(--top-bg);
			padding: 2.25rem 1.56rem 5.25rem 1.56rem;
			border-radius: 0rem 0rem 1.25rem 1.25rem;

			&__title {
				color: var(--big-text);
				font-size: 1.5rem;
				font-weight: 700;
				text-transform: capitalize;
				line-height: normal;
			}
			&__info {
				font-weight: 700;
				font-size: 0.875rem;
				text-transform: capitalize;
			}
			&__label {
				font-weight: 700;
				font-size: 0.875rem;
				text-transform: capitalize;
			}
			&__toggle {
				width: 3rem;
				height: 1.5rem;
				background: var(--toggle);
				border-radius: 1.25rem;
				position: relative;
				&-circle {
					background-color: var(--card);
					position: absolute;
					top: 50%;

					transform: translate(1.688rem, -50%);
					border-radius: 50%;
					width: 1.125rem;
					height: 1.125rem;
					&--active {
						transform: translate(0.188rem, -50%);
					}
				}
				&:hover {
					cursor: pointer;
				}
			}
			&__left {
				display: flex;
				flex-direction: column;
				padding-bottom: 1.5rem;
				gap: 0.25rem;
				justify-content: center;
				align-items: flex-start;
				border-bottom: 0.0625rem solid var(--card-hover);
			}
			&__right {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				margin-top: 1rem;

				&:hover {
					cursor: pointer;
					color: var(--big-text);
				}
			}
		}
	}

	@media (min-width: $small-breakpoint) {
		.header {
			padding-left: 10.31rem;
			padding-right: 10.31rem;
			padding-bottom: 9.62rem;
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: start;

			&__title {
				font-size: 1.75rem;
			}

			&__info {
				padding-left: 0.09rem;
			}

			&__left {
				flex-direction: column;
				border-bottom: none;
				padding-bottom: 0;
			}

			&__right {
				gap: 0.8125rem;
			}
		}
	}
</style>
