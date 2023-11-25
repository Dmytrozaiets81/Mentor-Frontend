<script setup></script>

<template>
	<div class="content__wrapper">
		<h1 class="content__title">Personal info</h1>
		<p class="content__description">
			Please provide your name, email address, and phone number.
		</p>
		<label class="content__input-wrapper content__input--name">
			<span class="content__label">Name</span>
			<input
				type="text"
				class="content__input"
				placeholder="e.g. Stephen King" />
			<span class="content__error">This field is required</span>
		</label>
		<label class="content__input-wrapper content__input--email">
			<span class="content__label">Email Address</span>
			<input
				type="email"
				class="content__input"
				placeholder="e.g. stephenking@lorem.com" />
			<span class="content__error">This field is required</span>
		</label>
		<label class="content__input-wrapper content__input--phone">
			<span class="content__label">Phone Number</span>
			<input
				type="text"
				class="content__input"
				placeholder="eg. +1 234 567 890" />
			<span class="content__error">This field is required</span>
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
</style>
