<script setup>
	import ProIcon from "@/assets/icons/ProIcon.vue"
	import AdvancedIcon from "@/assets/icons/AdvancedIcon.vue"
	import ArcadeIcon from "@/assets/icons/ArcadeIcon.vue"
	import ToggleInput from "@/components/ToggleInput.vue"

	import { ref } from "vue"

	const test = ref()
</script>

<template>
	<div class="content__wrapper">
		<h1 class="content__title">Select your plan</h1>
		<p class="content__description">
			You have the option of monthly or yearly billing.
		</p>
		<div class="content__options">
			<label class="content__option">
				<input
					type="radio"
					name="plan"
					value="1"
					v-model="test"
					class="sr-only" />
				<ArcadeIcon height="2.5rem" />
				<div class="content__info">
					<h2 class="content__plan">Arcade</h2>
					<p class="content__price">$9/mo</p>
				</div>
			</label>
			<label class="content__option">
				<input
					type="radio"
					name="plan"
					value="2"
					v-model="test"
					class="sr-only" />
				<AdvancedIcon height="2.5rem" />
				<div class="content__info">
					<h2 class="content__plan">Advanced</h2>
					<p class="content__price">$12/mo</p>
				</div>
			</label>
			<label class="content__option">
				<input
					type="radio"
					name="plan"
					value="3"
					v-model="test"
					class="sr-only" />
				<ProIcon height="2.5rem" />
				<div class="content__info">
					<h2 class="content__plan">Pro</h2>
					<p class="content__price">$15/mo</p>
				</div>
			</label>
		</div>

		<div class="content__toggle">
			<span class="content__duration content__duration--active">
				Monthly
			</span>
			<ToggleInput />
			<span class="content__duration">Yearly</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.content {
		&__wrapper {
			padding: 2rem 1.5rem;
			background-color: white;
			display: flex;
			flex-direction: column;
			box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
			margin: 0 1rem;
			border-radius: 0.625rem;
		}
		&__title {
			color: var(--primary);
			font-size: 1.5rem;
			font-weight: 700;
		}
		&__description {
			margin-top: 0.56rem;
			font-family: Ubuntu;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5625rem;
		}
		&__toggle {
			display: flex;
			justify-content: space-evenly;
			align-items: center;
			background-color: var(--hover);
			padding: 0.88rem 0rem;
			border-radius: 0.5rem;
		}
		&__duration {
			font-size: 0.875rem;
			font-weight: 500;
			height: fit-content;
			&--active {
				color: var(--primary);
			}
		}
		&__option {
			border-radius: 0.5rem;
			border: 1px solid var(--border-color);
			display: flex;
			padding: 0.88rem 1rem 1.25rem 1rem;
			gap: 0.88rem;
			cursor: pointer;
			&:hover {
				border: 1px solid var(--focus);
			}
			&:focus-within {
				border: 1px solid var(--focus);
			}
			&--selected {
				border: 1px solid var(--focus);
				background-color: var(--hover);
			}
		}
		&__info {
			display: flex;
			flex-direction: column;
			gap: 0.44rem;
		}
		&__plan {
			color: var(--primary);
			font-size: 1rem;
			font-weight: 500;
		}
		&__price {
			color: var(--secondary);
			font-size: 0.875rem;
			font-weight: 400;
			line-height: 1.25rem;
		}
		&__options {
			margin-top: 1.38rem;
			margin-bottom: 1.5rem;
			display: flex;
			flex-direction: column;
			gap: 0.75rem;
		}
	}
</style>
