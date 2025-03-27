<script setup>
	import ProIcon from "@/assets/icons/ProIcon.vue"
	import AdvancedIcon from "@/assets/icons/AdvancedIcon.vue"
	import ArcadeIcon from "@/assets/icons/ArcadeIcon.vue"
	import ToggleInput from "@/components/ToggleInput.vue"

	import useFormatNumber from "../composables/useFormatNumber"
	import { useFormStore } from "@/stores/form"

	const formStore = useFormStore()
	const { formattedNumber } = useFormatNumber()
</script>

<template>
	<div class="content__wrapper">
		<h1 class="content__title">Select your plan</h1>
		<p class="content__description">
			You have the option of monthly or yearly billing.
		</p>
		<div class="content__options">
			<label
				class="content__option"
				:class="{
					'content__option--selected': formStore.plan === 'Arcade',
				}">
				<input
					required
					type="radio"
					name="plan"
					value="Arcade"
					v-model="formStore.plan"
					class="sr-only" />
				<ArcadeIcon height="2.5rem" />
				<div class="content__info">
					<h2 class="content__plan">Arcade</h2>
					<p class="content__price">
						{{ formattedNumber(formStore.arcadePrice) }}
					</p>
				</div>
			</label>
			<label
				class="content__option"
				:class="{
					'content__option--selected': formStore.plan === 'Advanced',
				}">
				<input
					type="radio"
					name="plan"
					value="Advanced"
					v-model="formStore.plan"
					class="sr-only" />
				<AdvancedIcon height="2.5rem" />
				<div class="content__info">
					<h2 class="content__plan">Advanced</h2>
					<p class="content__price">
						{{ formattedNumber(formStore.advancedPrice) }}
					</p>
				</div>
			</label>
			<label
				class="content__option"
				:class="{
					'content__option--selected': formStore.plan === 'Pro',
				}">
				<input
					type="radio"
					name="plan"
					value="Pro"
					v-model="formStore.plan"
					class="sr-only" />
				<ProIcon height="2.5rem" />
				<div class="content__info">
					<h2 class="content__plan">Pro</h2>
					<p class="content__price">
						{{ formattedNumber(formStore.proPrice) }}
					</p>
				</div>
			</label>
		</div>

		<div class="content__toggle">
			<span
				class="content__duration"
				:class="{
					'content__duration--active': formStore.year === false,
				}">
				Monthly
			</span>
			<ToggleInput />
			<span
				class="content__duration"
				:class="{
					'content__duration--active': formStore.year === true,
				}"
				>Yearly</span
			>
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
	@media (min-width: $small-breakpoint) {
		.content {
			&__wrapper {
				margin-top: 2.5rem;
				margin-left: 6.25rem;
				margin-right: 6.25rem;
				margin-bottom: 0rem;
				border-radius: 0;
				box-shadow: none;
				padding: 0;
				width: 28.125rem;
			}
			&__title {
				font-size: 2rem;
			}
			&__description {
				margin-top: 0.69rem;
			}
			&__options {
				margin-top: 2.19rem;
				flex-direction: row;
				margin-bottom: 2rem;
			}
			&__option {
				flex-direction: column;
				width: 100%;
				align-items: start;
				padding: 1rem;
				padding-top: 1.25rem;
				gap: 2.44rem;
			}
			&__info {
				gap: 0.44rem;
			}
			&__toggle {
				justify-content: center;
				gap: 1.5rem;
			}
		}
	}
</style>
