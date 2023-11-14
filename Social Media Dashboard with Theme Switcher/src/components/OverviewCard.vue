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
		switch (props.card.type) {
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
		props.card.progress > 0 ? upIcon : downIcon
	)

	const cardLinkDescription = computed(() => {
		return `${props.card.name} of ${props.card.username} at ${props.card.type}}`
	})

	const hrefAccount = computed(() => {
		return `https://${props.card.type}.com/${props.card.username}`
	})

	const altArrowIcon = computed(() => {
		const direction = props.card.progress >= 0 ? "up" : "down"
		const indicator = props.card.progress >= 0 ? "increase" : "decrease"
		return `${direction} arrow, ${props.card.name} ${indicator}`
	})

	const getClassIndicator = computed(() => {
		const value = props.card.progress >= 0 ? "up" : "down"
		return `secondary-card__percentage--${value}`
	})

	const todayNumber = computed(() => {
		return Math.abs(props.card.progress)
	})
</script>

<template>
	<article class="secondary-card">
		<div class="secondary-card__title-container">
			<h3 class="secondary-card__title">
				<a
					:href="hrefAccount"
					:aria-label="cardLinkDescription"
					target="_blank"
					class="secondary-card__link"
					>{{ props.card.name }}</a
				>
			</h3>
			<img
				:src="socialIcon"
				:alt="`${props.card.type} icon`" />
		</div>
		<div class="secondary-card__info-container">
			<span class="secondary-card__number">{{ props.card.number }}</span>
			<div class="secondary-card__percentage-container">
				<img
					:src="arrowIcon"
					:alt="altArrowIcon" />
				<span
					class="secondary-card__percentage"
					:class="getClassIndicator"
					>{{ todayNumber }}%</span
				>
			</div>
		</div>
	</article>
</template>

<style lang="scss">
	.secondary-card {
		background-color: var(--card);
		display: flex;
		flex-direction: column;
		border-radius: 5px;
		align-items: center;
		padding-top: 1.69rem;
		padding-bottom: 1.19rem;
		padding-left: 1.5rem;
		padding-right: 1.94rem;
		gap: 1.31rem;
		position: relative;

		&:hover {
			background-color: var(--card-hover);
			cursor: pointer;
		}

		&__title-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}
		&__title {
			text-transform: capitalize;
			font-size: 0.875rem;
			font-weight: bold;
		}

		&__link {
			color: var(--text);
			@extend %links;
		}

		&__info-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}
		&__number {
			color: var(--big-text);
			font-weight: bold;
			font-size: 2rem;
		}
		&__percentage-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			place-self: flex-end;
			gap: 0.1875rem;
			padding-bottom: 0.31rem;
		}
		&__percentage {
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
	}
</style>
