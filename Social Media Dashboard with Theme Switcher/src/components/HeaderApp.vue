<script setup>
	import { ref } from "vue"

	const props = defineProps({
		title: String,
		totalFollowers: Object,
	})

	const switchToggle = ref(true)
	const darkMode = ref(true)

	const handleToggle = () => {
		switchToggle.value = !switchToggle.value
		const body = document.querySelector("body")
		body.classList.toggle("dark")
		darkMode.value = !darkMode.value
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
		<div class="header__right">
			<span class="header__label">Dark Mode</span>
			<label class="header__switch">
				switch
				<input
					@change="handleToggle"
					type="checkbox"
					class="header__input"
					:value="darkMode" />
				<span class="header__slider"></span>
			</label>
		</div>
	</header>
</template>

<style lang="scss" scoped>
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
			user-select: none;
		}

		&__switch {
			position: relative;
			display: inline-block;
			font-size: 0.1px;
			width: 3rem;
			height: 1.5rem;
		}

		&__input {
			opacity: 0;
			width: 0;
			height: 0;

			&:focus + .header__slider {
				outline: solid 3px var(--big-text);
			}

			&:checked + .header__slider:before {
				transform: translateX(1.375rem);
			}
		}

		&__slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background: var(--toggle);
			transition: color 0.4s;
			border-radius: 2.12rem;

			&:before {
				content: "";
				position: absolute;
				height: 1.125rem;
				width: 1.125rem;
				left: 0.25rem;
				bottom: calc(50% - 1.125rem / 2);
				background-color: var(--card);
				border-radius: 50%;
				transition: all 0.4s;
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

	@media (min-width: $small-breakpoint) {
		.header {
			padding-left: 10.31rem;
			padding-right: 10.31rem;
			padding-bottom: 9.62rem;
			display: flex;
			width: 100%;
			justify-content: space-between;
			align-items: center;
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
				margin-top: 0;
			}
		}
	}
</style>
