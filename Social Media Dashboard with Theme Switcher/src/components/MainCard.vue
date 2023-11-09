<script setup>
	import { computed } from "vue"

	// icons

	import upIcon from "../assets/images/icon-up.svg"
	import downIcon from "../assets/images/icon-down.svg"

	// socials

	import facebookIcon from "../assets/images/icon-facebook.svg"
	import twitterIcon from "../assets/images/icon-twitter.svg"
	import instagramIcon from "../assets/images/icon-instagram.svg"
	import youtubeIcon from "../assets/images/icon-youtube.svg"

	const props = defineProps({
		card: Object,
	})

	const socialIcon = computed(() => {
		switch (props.card.name) {
			case "facebook":
				return facebookIcon
			case "twitter":
				return twitterIcon
			case "instagram":
				return instagramIcon
			case "youtube":
				return youtubeIcon
		}
	})

	const arrowIcon = computed(() => (props.card.today > 0 ? upIcon : downIcon))

	const barColor = computed(() => {
		return `main-card__bar--${props.card.name}`
	})
</script>

<template>
	<article class="main-card">
		<h3 class="sr-only">{{ props.card.name + " " + props.card.type }}</h3>
		<div :class="`main-card__bar ${barColor}`"></div>
		<div class="main-card__social-container">
			<img
				:src="socialIcon"
				alt="social icon" />
			<span class="main-card__username">{{ props.card.username }}</span>
		</div>
		<div class="main-card__followers-container">
			<span class="main-card__number">{{ props.card.number }}</span>
			<span class="main-card__type">{{ props.card.type }}</span>
		</div>
		<div class="main-card__today-container">
			<img
				:src="arrowIcon"
				alt="arrow icon" />
			<span
				class="main-card__today"
				:class="{
					'main-card__today--up': props.card.today > 0,
					'main-card__today--down': props.card.today < 0,
				}"
				>{{ Math.abs(props.card.today) }} today</span
			>
		</div>
	</article>
</template>

<style lang="scss">
	@media (min-width: 0px) {
		.main-card {
			background-color: var(--card);
			display: flex;
			flex-direction: column;
			border-radius: 5px;
			align-items: center;
			padding-bottom: 1.5rem;

			&:hover {
				background-color: var(--card-hover);
				cursor: pointer;
			}

			&__bar {
				width: 100%;
				height: 0.25rem;
				border-radius: 5px 5px 0 0;
				margin-bottom: calc(2rem - 0.25rem);

				&--facebook {
					background-color: var(--facebook);
				}
				&--twitter {
					background-color: var(--twitter);
				}
				&--instagram {
					background: var(--instagram);
				}
				&--youtube {
					background-color: var(--youtube);
				}
			}

			&__social-container {
				display: flex;
				gap: 0.5rem;
				align-items: center;
			}
			&__username {
				font-size: 0.75rem;
				font-weight: bold;
			}
			&__followers-container {
				margin-top: 1.75rem;
				margin-bottom: 1.56rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 0.56rem;
			}
			&__number {
				color: var(--big-text);
				font-size: 3.5rem;
				font-weight: bold;
				line-height: 3rem;
				letter-spacing: -0.125rem;
			}
			&__type {
				font-size: 0.75rem;
				text-transform: uppercase;
				letter-spacing: 0.3125rem;
			}
			&__today-container {
				display: flex;
				align-items: center;
				gap: 0.25rem;
			}
			&__today {
				font-size: 0.75rem;
				font-weight: bold;

				&--up {
					color: var(--primary-green);
				}
				&--down {
					color: var(--primary-red);
				}
			}
		}
	}

	@media (min-width: $small-breakpoint) {
		.main-card {
			flex: 1 1 0%;
		}
	}
</style>
