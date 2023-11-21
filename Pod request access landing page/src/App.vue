<script setup>
	import FooterApp from "@/components/FooterApp.vue"
	import ContentBase from "@/components/ContentBase.vue"
	import LogoIcon from "@/components/LogoIcon.vue"
</script>

<template>
	<main class="app__container">
		<LogoIcon />
		<ContentBase class="app__content" />
		<img
			src="./assets/desktop/bg-pattern-dots.svg"
			class="app__pattern"
			alt="background pattern"
			aria-hidden="true" />
		<div
			class="app__bg-image"
			aria-hidden="true" />
		<FooterApp />
	</main>
</template>

<style lang="scss" scoped>
	.app {
		&__bg-image {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100vh;
			opacity: 0.1;
			background-repeat: no-repeat;
			background-size: cover;
			z-index: -1;
			background-image: url("@/assets/mobile/image-host.jpg");
		}
		&__content {
			margin-top: 3.56rem;
		}
		&__container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: start;
			width: 100%;
			height: 100%;
			position: relative;
			padding-top: 3.87rem;
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
		&__pattern {
			display: none;
		}
	}

	@media (min-width: $tablet-breakpoint) {
		.app {
			&__bg-image {
				background-image: url("@/assets/tablet/image-host.jpg");
				opacity: 0.7993;
				background-position: right top;
				background-size: auto;
				height: 767px;
			}
			&__container {
				padding-left: 2.44rem;
				align-items: start;
				padding-top: 3.13rem;
			}
			&__content {
				margin-top: 9.5rem;
				padding-right: 2.6rem;
			}
			&__pattern {
				display: block;
				margin-top: 7.6rem;
				bottom: 0;
			}
		}
	}
	@media (min-width: $desktop-breakpoint) {
		.app {
			&__bg-image {
				background-image: url("@/assets/desktop/image-host.jpg");
				opacity: 0.7993;
				margin-top: 8.12rem;
				background-position: right top;
				height: 640px;
			}
			&__container {
				padding-left: 10.31rem;
				align-items: start;
				padding-top: 6.38rem;
			}
			&__content {
				margin-top: 6.44rem;
				padding-right: 5rem;
			}
			&__pattern {
				display: block;
				position: absolute;
				right: 0;
				top: 0;
				margin-top: 44.88rem;
			}
		}
	}
</style>
