<script setup></script>

<template>
	<div class="content__wrapper">
		<h1 class="content__title">Pick add-ons</h1>
		<p class="content__description">
			Add-ons help enhance your gaming experience.
		</p>
		<div class="content__options">
			<label class="content__option">
				<input
					type="checkbox"
					class="content__checkbox" />
				<div class="content__option-info">
					<span class="content__label">Online service</span>
					<span class="content__info">
						Access to multiplayer games
					</span>
				</div>
				<span class="content__price">+$1/mo</span>
			</label>
			<label class="content__option">
				<input
					type="checkbox"
					class="content__checkbox" />
				<div class="content__option-info">
					<span class="content__label">Online service</span>
					<span class="content__info">
						Access to multiplayer games
					</span>
				</div>
				<span class="content__price">+$1/mo</span>
			</label>
			<label class="content__option content__option--selected">
				<input
					type="checkbox"
					class="content__checkbox" />
				<div class="content__option-info">
					<span class="content__label">Online service</span>
					<span class="content__info">
						Access to multiplayer games
					</span>
				</div>
				<span class="content__price">+$1/mo</span>
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
</style>
