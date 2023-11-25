<script setup></script>

<template>
	<div class="content__wrapper">
		<h1 class="content__title">Finishing up</h1>
		<p class="content__description">
			Double-check everything looks OK before confirming.
		</p>
		<div class="content__summary">
			<div class="content__item">
				<div>
					<h2 class="content__plan">Arcade (Monthly)</h2>
					<button
						class="content__edit"
						type="button">
						Change
					</button>
				</div>
				<span class="content__subtotal">$9/mo</span>
			</div>
			<hr class="content__divider content__item" />
			<div class="content__item">
				Online service
				<span>+$1/mo</span>
			</div>
			<div class="content__item">
				Larger storage
				<span>+$2/mo</span>
			</div>
		</div>
		<p class="content__total">
			Total (per month)
			<span class="content__total-price">+$12/mo</span>
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
				text-decoration: none;
			}
		}
		&__item {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
