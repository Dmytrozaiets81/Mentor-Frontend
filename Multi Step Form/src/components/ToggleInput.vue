<script setup></script>

<template>
	<label class="toggle__container">
		<input
			type="checkbox"
			name=""
			id=""
			class="sr-only toggle__input" />
		<span class="toggle__slider"></span>
	</label>
</template>

<style lang="scss" scoped>
	.toggle {
		&__container {
			position: relative;
			display: block;
			width: 2.375rem;
			height: 1.25rem;
		}
		&__slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: var(--primary);
			transition: color 0.4s;
			border-radius: 2.12rem;
			&:before {
				content: "";
				position: absolute;
				height: 0.75rem;
				width: 0.75rem;
				left: 0.25rem;
				bottom: calc(50% - 0.375rem);
				background-color: white;
				border-radius: 50%;
				transition: all 0.4s;
			}
			.toggle__input:checked + & {
				&:before {
					transform: translateX(1.125rem);
				}
			}
		}
	}
</style>
