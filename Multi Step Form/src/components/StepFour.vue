<script setup>
	import { computed } from "vue"
	import { useFormStore } from "@/stores/form"
	import useFormatNumber from "@/composables/useFormatNumber"
	const formStore = useFormStore()
	const { formattedNumber } = useFormatNumber()

	const planName = computed(() => {
		let duration = formStore.year ? "Yearly" : "Monthly"
		return formStore.plan + " (" + duration + ")"
	})

	const planPrice = computed(() => {
		if (formStore.plan === "Arcade") {
			return formStore.arcadePrice
		} else if (formStore.plan === "Advanced") {
			return formStore.advancedPrice
		} else if (formStore.plan === "Pro") {
			return formStore.proPrice
		}
	})
</script>

<template>
	<div class="content__wrapper">
		<h1 class="content__title">Finishing up</h1>
		<p class="content__description">
			Double-check everything looks OK before confirming.
		</p>
		<div class="content__summary">
			<div class="content__item">
				<div>
					<h2 class="content__plan">{{ planName }}</h2>
					<button
						class="content__edit"
						type="button">
						Change
					</button>
				</div>
				<span class="content__subtotal">{{
					formattedNumber(planPrice)
				}}</span>
			</div>
			<hr
				v-if="formStore.addons.length >= 1"
				class="content__divider content__item" />
			<div
				class="content__item"
				v-for="addon in formStore.addons"
				:key="addon.name">
				{{ addon.name }}
				<span>+{{ formattedNumber(addon.price) }}</span>
			</div>
		</div>
		<p class="content__total">
			Total (per month)
			<span class="content__total-price"
				>+{{ formattedNumber(formStore.totalPrice) }}</span
			>
		</p>
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
		&__divider {
			border: none;
			height: 0.0625rem;
			opacity: 0.2043;
			background: var(--secondary);
			background: red;
			width: 100%;
			margin: 0;
		}
		&__summary {
			margin-top: 1.37rem;
			background-color: var(--hover);
			border-radius: 0.5rem;
			display: flex;
			flex-direction: column;
			padding: 1rem;
			gap: 0.75rem;
		}
		&__total {
			margin-top: 1.5rem;
			display: flex;
			justify-content: space-between;
			margin-left: 1rem;
			margin-right: 1rem;
			font-size: 0.875rem;
			font-weight: 400;
			line-height: 1.25rem;
		}
		&__total-price {
			font-weight: 700;
			font-size: 1rem;
			color: var(--focus);
		}
		&__subtotal {
			font-size: 0.875rem;
			font-weight: 700;
			line-height: 1.25rem;
			color: var(--primary);
		}
		&__plan {
			font-size: 0.875rem;
			font-weight: 500;
			color: var(--primary);
		}
		&__edit {
			font-size: 0.875rem;
			font-weight: 400;
			color: var(--secondary);
			cursor: pointer;
			text-decoration: underline;
			line-height: 1.25rem;
			&:hover {
				color: var(--focus);
			}
		}
		&__item {
			display: flex;
			justify-content: space-between;
			align-items: center;
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
			&__summary {
				margin-top: 2.19rem;
				gap: 1rem;
			}
			&__divider {
				margin-top: 0.5rem;
			}
			&__total-price {
				font-size: 1.25rem;
			}
			&__item {
				font-size: 0.875rem;
				line-height: 1.25rem;
			}
			&__subtotal {
				font-size: 1rem;
			}
			&__plan {
				font-size: 1rem;
			}
		}
	}
</style>
