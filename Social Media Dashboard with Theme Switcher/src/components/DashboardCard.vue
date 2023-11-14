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

	const arrowIcon = computed(() =>
		props.card.today >= 0 ? upIcon : downIcon
	)

	const barColor = computed(() => {
		return `main-card__bar--${props.card.name}`
	})

	const getClassIndicator = computed(() => {
		const value = props.card.today >= 0 ? "up" : "down"
		return `main-card__today--${value}`
	})

	const altArrowIcon = computed(() => {
		const direction = props.card.today >= 0 ? "up" : "down"
		const indicator = props.card.today >= 0 ? "increase" : "decrease"
		return `${direction} arrow, ${props.card.type} ${indicator}`
	})

	const todayNumber = computed(() => {
		return Math.abs(props.card.today)
	})

	const cardLinkDescription = computed(() => {
		return `go to ${props.card.username} at ${props.card.name}`
	})

	const hrefAccount = computed(() => {
		return `https://${props.card.name}.com/${props.card.username}`
	})
</script>

<template>
	<article :class="`main-card main-card--${props.card.name}`">
		<h3 class="sr-only">{{ props.card.name + " " + props.card.type }}</h3>
		<a
			class="main-card__social-link"
			target="_blank"
			:aria-label="cardLinkDescription"
			:href="hrefAccount">
			<img
				:src="socialIcon"
				alt="" />
			<span class="main-card__username">{{ props.card.username }}</span>
		</a>
		<div class="main-card__followers-container">
			<span class="main-card__number">{{ props.card.number }}</span>
			<span class="main-card__type">{{ props.card.type }}</span>
		</div>
		<div class="main-card__today-container">
			<img
				:src="arrowIcon"
				:alt="altArrowIcon" />
			<span
				class="main-card__today"
				:class="getClassIndicator"
				>{{ todayNumber }} Today</span
			>
		</div>
	</article>
</template>

<style lang="scss" scoped>
	.main-card {
		background-color: var(--card);
		display: flex;
		flex-direction: column;
		border-radius: 5px;
		align-items: center;
		padding-bottom: 1.5rem;
		position: relative;

		&:hover {
			background-color: var(--card-hover);
			cursor: pointer;
		}

		&--facebook {
			border-top: 0.25rem solid var(--facebook);
		}

		&--twitter {
			border-top: 0.25rem solid var(--twitter);
		}

		&--instagram {
			position: relative;
			&::before {
				content: "";
				position: relative;
				top: 0;
				border-top-right-radius: 0.3125rem;
				border-top-left-radius: 0.3125rem;
				width: 100%;
				height: 0.25rem;
				background: var(--instagram);
			}
		}

		&--youtube {
			border-top: 0.25rem solid var(--youtube);
		}

		&__social-link {
			display: flex;
			gap: 0.5rem;
			align-items: center;
			margin-top: 1.75rem;
			color: var(--text);
			@extend %links;
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

	@media (min-width: $small-breakpoint) {
		.main-card {
			flex: 1 1 0%;
		}
	}
</style>
