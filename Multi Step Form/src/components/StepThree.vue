<script setup>
	import useFormatNumber from "@/composables/useFormatNumber"
	import { useFormStore } from "@/stores/form"

	const formStore = useFormStore()
	const { formattedNumber } = useFormatNumber()
</script>

<template>
	<div class="content__wrapper">
		<h1 class="content__title">Pick add-ons</h1>
		<p class="content__description">
			Add-ons help enhance your gaming experience.
		</p>
		<div class="content__options">
			<label
				class="content__option"
				:class="{
					'content__option--selected': formStore.online === true,
				}">
				<input
					type="checkbox"
					v-model="formStore.online"
					class="content__checkbox" />
				<div class="content__option-info">
					<span class="content__label">Online service</span>
					<span class="content__info">
						Access to multiplayer games
					</span>
				</div>
				<span class="content__price"
					>+{{ formattedNumber(formStore.onlinePrice) }}</span
				>
			</label>
			<label
				class="content__option"
				:class="{
					'content__option--selected': formStore.storage === true,
				}">
				<input
					type="checkbox"
					v-model="formStore.storage"
					class="content__checkbox" />
				<div class="content__option-info">
					<span class="content__label">Larger storage</span>
					<span class="content__info"> Extra 1TB of cloud save </span>
				</div>
				<span class="content__price"
					>+{{ formattedNumber(formStore.storagePrice) }}</span
				>
			</label>
			<label
				class="content__option"
				:class="{
					'content__option--selected':
						formStore.customizable === true,
				}">
				<input
					type="checkbox"
					v-model="formStore.customizable"
					class="content__checkbox" />
				<div class="content__option-info">
					<span class="content__label">Customizable profile</span>
					<span class="content__info">
						Custom theme on your profile
					</span>
				</div>
				<span class="content__price"
					>+{{ formattedNumber(formStore.customizablePrice) }}</span
				>
			</label>
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
		&__option {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			border-radius: 0.5rem;
			cursor: pointer;
			padding-left: 1rem;
			padding-right: 1rem;
			padding-top: 0.81rem;
			padding-bottom: 0.63rem;
			border: 1px solid var(--border-color);
			&:hover {
				background-color: var(--hover);
			}
			&--selected {
				background-color: var(--hover);
				border-color: var(--focus);
			}
		}
		&__option-info {
			display: flex;
			flex-direction: column;
			align-items: start;
			gap: 0.19rem;
		}
		&__options {
			display: flex;
			flex-direction: column;
			margin-top: 1.38rem;
			gap: 0.75rem;
		}
		&__checkbox {
			transform: scale(1.5);
			appearance: auto;
		}
		&__label {
			font-size: 0.875rem;
			font-weight: 500;
			color: var(--primary);
		}
		&__info {
			font-size: 0.75rem;
			font-weight: 400;
			line-height: 1.25rem;
		}
		&__price {
			font-size: 0.75rem;
			font-weight: 400;
			color: var(--focus);
			line-height: 1.25rem;
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
				gap: 1rem;
			}
			&__option {
				padding-top: 1rem;
				padding-bottom: 1.25rem;
				padding-left: 1.5rem;
				padding-right: 1.5rem;
			}
			&__option-info {
				margin-right: auto;
				margin-left: 1.5rem;
				gap: 0.44rem;
			}
			&__label {
				font-size: 1rem;
			}
			&__info {
				font-size: 0.9375rem;
			}
			&__price {
				font-size: 0.9375rem;
			}
		}
	}
</style>
