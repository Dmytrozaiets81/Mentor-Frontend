<script setup>
import { ref } from "vue"

const email = ref("")
const error = ref(false)
const message = ref("")
const inputRef = ref(null)

const handleSubmit = () => {
	const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
	if (regex.test(email.value)) {
		error.value = false
		email.value = ""
		message.value = "Thank you! We'll be in touch"
	} else {
		error.value = true
		message.value = "Oops! Please check your email"
	}
}

const handleChange = () => {
	message.value = ""
}
</script>

<template>
	<form>
		<div class="form__container">
			<input
				required
				type="email"
				placeholder="Email address"
				class="form__input"
				@input="handleChange"
				v-model="email"
				aria-required="true"
				:aria-invalid="error"
				aria-errormessage="message"
				aria-label="Email input field"
				@keypress.enter.prevent="handleSubmit"
				ref="inputRef" />
			<button
				type="button"
				class="form__button"
				@click="handleSubmit">
				Request Access
			</button>
		</div>
		<p
			id="message"
			class="form__message"
			role="alert"
			aria-live="assertive"
			:class="{
				'form__message--sucess': !error,
				'form__message--error': error,
			}">
			{{ message }}
		</p>
	</form>
</template>

<style lang="scss" scoped>
.form {
	&__container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	&__button {
		@include focus-style;
		display: block;
		background-color: var(--fem-color-primary);
		color: var(--fem-color-base);
		font-size: 0.875rem;
		font-weight: 700;
		line-height: 1.75rem;
		border-radius: 1.75rem;
		box-shadow: 0px 25px 20px -20px rgba(84, 230, 175, 0.5);
		padding: 0.56rem 0rem;
		&:hover {
			background-color: var(--fem-color-primary-light);
		}
	}
	&__input {
		@include focus-style;
		display: block;
		border-radius: 1.75rem;
		background-color: var(--fem-color-neutral);
		font-size: 0.875rem;
		font-weight: 700;
		line-height: 1.75rem;
		padding: 0.56rem 2rem;
		color: white;

		&::placeholder {
			color: white;
			opacity: 0.5;
		}
	}

	&__message {
		font-size: 0.75rem;
		font-weight: 700;
		margin-top: 0.5rem;
		margin-left: 2rem;

		&--error {
			color: var(--fem-color-red);
		}

		&--sucess {
			color: var(--fem-color-primary);
		}
	}
}
@media (min-width: $tablet-breakpoint) {
	.form {
		&__container {
			width: 26.7rem;
			font-size: 20rem;
			position: relative;
		}
		&__input {
			font-size: 0.875rem;
			padding-top: 0.88rem;
			padding-bottom: 0.88rem;
		}
		&__button {
			position: absolute;
			top: 0.31rem;
			bottom: 0.31rem;
			right: 0.31rem;
			padding: 0.56rem 1.69rem;
		}
		&__message {
			position: absolute;
		}
	}
}
</style>
