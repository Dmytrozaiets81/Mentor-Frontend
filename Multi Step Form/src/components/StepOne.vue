<script setup>
	import { ref } from "vue"
	import { useFormStore } from "@/stores/form"
	const formStore = useFormStore()

	const nameError = ref(false)
	const emailError = ref(false)
	const phoneError = ref(false)
</script>

<template>
	<div class="content__wrapper">
		<h1 class="content__title">Personal info</h1>
		<p class="content__description">
			Please provide your name, email address, and phone number.
		</p>
		<label class="content__input-wrapper content__input--name">
			<span class="content__label">Name</span>
			<input
				required
				type="text"
				class="content__input"
				placeholder="e.g. Stephen King"
				@invalid="nameError = true"
				@input="nameError = false"
				v-model="formStore.name" />
			<span
				v-if="nameError"
				class="content__error"
				>This field is required</span
			>
		</label>
		<label class="content__input-wrapper content__input--email">
			<span class="content__label">Email Address</span>
			<input
				required
				type="email"
				class="content__input"
				placeholder="e.g. stephenking@lorem.com"
				@invalid="emailError = true"
				@input="emailError = false"
				v-model="formStore.email" />
			<span
				v-if="emailError"
				class="content__error"
				>This field is required</span
			>
		</label>
		<label class="content__input-wrapper content__input--phone">
			<span class="content__label">Phone Number</span>
			<input
				required
				type="tel"
				class="content__input"
				pattern="[+][0-9]{1,2}\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}"
				placeholder="eg. +1 234 567 8904"
				@invalid="phoneError = true"
				@input="phoneError = false"
				v-model="formStore.phone" />
			<span
				v-if="phoneError"
				class="content__error"
				>This field is required</span
			>
		</label>
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
			margin-left: auto;
			margin-right: auto;
		}
		&__description {
			margin-top: 0.56rem;
			font-family: Ubuntu;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5625rem;
		}
		&__input--name {
			margin-top: 1.38rem;
		}
		&__input--email {
			margin-top: 1rem;
		}
		&__input--phone {
			margin-top: 1rem;
		}
		&__title {
			color: var(--primary);
			font-size: 1.5rem;
			font-weight: 700;
		}
		&__label {
			color: var(--primary);
			font-size: 0.75rem;
			font-weight: 400;
		}
		&__input {
			margin-top: 0.19rem;
			padding: 0.69rem 1rem 0.75rem 1rem;
			border-radius: 0.25rem;
			border-width: 1px;
			border-style: solid;
			border-color: var(--border-color);
			font-size: 0.9375rem;
			font-weight: 500;
			@extend %input-focus;
		}
		&__input-wrapper {
			position: relative;
			display: flex;
			flex-direction: column;
		}
		&__error {
			position: absolute;
			color: var(--error);
			text-align: right;
			font-size: 0.75rem;
			font-weight: 700;
			right: 0;
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
			&__description {
				margin-top: 0.69rem;
			}
			&__input {
				margin-top: 0.5rem;
				padding: 0.94rem 1rem;
				border-radius: 0.5rem;
				font-size: 1rem;
			}
			&__input--name {
				margin-top: 2.19rem;
			}
			&__input--email {
				margin-top: 1.5rem;
			}
			&__input--phone {
				margin-top: 1.5rem;
			}
			&__title {
				font-size: 2rem;
			}
			&__label {
				font-size: 0.875rem;
			}
			&__error {
				font-size: 0.875rem;
			}
		}
	}
</style>
