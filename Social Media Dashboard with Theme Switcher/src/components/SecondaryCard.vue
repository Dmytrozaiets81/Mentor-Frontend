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
</script>

<template>
	<article class="secondary-card">
		<div class="secondary-card__title-container">
			<h3 class="secondary-card__title">{{ props.card.name }}</h3>
			<img
				:src="socialIcon"
				alt="social icon" />
		</div>
		<div class="secondary-card__info-container">
			<span class="secondary-card__number">{{ props.card.number }}</span>
			<div class="secondary-card__percentage-container">
				<img
					:src="arrowIcon"
					alt="arrow icon" />
				<span
					class="secondary-card__percentage"
					:class="{
						'secondary-card__percentage--up':
							props.card.progress > 0,
						'secondary-card__percentage--down':
							props.card.progress < 0,
					}"
					>{{ Math.abs(props.card.progress) }}%</span
				>
			</div>
		</div>
	</article>
</template>

<style lang="scss">
	@media (min-width: 0px) {
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
	}

	@media (min-width: $small-breakpoint) {
	}
</style>
