<script setup>
	import ThankyouIcon from "@/assets/icons/ThankyouIcon.vue"
</script>

<template>
	<div class="content__wrapper">
		<ThankyouIcon class="content__logo" />
		<h1 class="content__title">Thank you!</h1>
		<p class="content__description">
			Thanks for confirming your subscription! We hope you have fun using
			our platform. If you ever need support, please feel free to email us
			at support@loremgaming.com.
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
			align-items: center;
			box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
			padding-bottom: 4.93rem;
			margin: 0 1rem;
			border-radius: 0.625rem;
		}
		&__title {
			margin-top: 1.5rem;
			color: var(--primary);
			font-size: 1.5rem;
			font-weight: 700;
			text-align: center;
		}
		&__description {
			margin-top: 0.56rem;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5625rem;
			text-align: center;
		}
		&__logo {
			width: 56px;
			height: 56px;
		}
	}

	@media (min-width: $small-breakpoint) {
		.content {
			&__wrapper {
				margin-top: 2.5rem;
				margin-left: 6.25rem;
				margin-right: 6.25rem;
				margin-bottom: 2.5rem;
				border-radius: 0;
				box-shadow: none;
				padding: 0;
				width: 28.125rem;
				height: 100%;
				justify-content: center;
			}
			&__title {
				font-size: 2rem;
				width: 100%;
				margin-top: 2rem;
			}
			&__description {
				margin-top: 0.89rem;
			}
			&__logo {
				width: 80px;
				height: 80px;
			}
		}
	}
</style>
