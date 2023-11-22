<script setup>
	import RequestForm from "@/components/RequestForm.vue"
</script>

<template>
	<article class="main">
		<h1 class="main__header">
			<span class="main__header-span">publish your podcasts</span>
			<br />
			everywhere.
		</h1>
		<p class="main__description">
			Upload your audio to Pod with a single click. We’ll then distribute
			your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket
			Casts and more!
		</p>
		<div class="main__form-list">
			<ul class="main__list">
				<li class="main__item main__item--spotify">
					<img
						src="@/assets/desktop/spotify.svg"
						alt="Spotify" />
				</li>
				<li class="main__item main__item--apple">
					<img
						src="@/assets/desktop/apple-podcast.svg"
						alt="Apple Podcast" />
				</li>
				<li class="main__item main__item--google">
					<img
						src="@/assets/desktop/google-podcasts.svg"
						alt="Google Podcasts" />
				</li>
				<li class="main__item main__item--pocket">
					<img
						src="@/assets/desktop/pocket-casts.svg"
						alt="Pocket Casts" />
				</li>
			</ul>
			<RequestForm class="main__form" />
		</div>
	</article>
</template>

<style lang="scss" scoped>
	.main {
		&__header {
			font-size: 1.625rem;
			text-align: center;
			font-style: normal;
			font-weight: 100;
			color: white;
			line-height: 2.375rem;
			text-transform: uppercase;
		}
		&__header-span {
			color: var(--fem-color-primary);
		}
		&__description {
			color: var(--fem-color-secondary);
			text-align: center;
			font-style: normal;
			font-size: 0.9375rem;
			font-weight: 100;
			line-height: 1.5625rem;
			margin-top: 1rem;
			max-width: 327px;
		}
		&__list {
			display: flex;
			justify-content: center;
			margin-top: 2.06rem;
		}
		&__item {
			display: flex;
			height: 1.0625rem;
			width: auto;

			&-spotify {
				margin-right: 1.44rem;
			}

			&-apple {
				margin-right: 1.56rem;
			}

			&-google {
				margin-right: 1rem;
				padding: 0.19rem 0rem;
			}

			&-pocket {
				padding: 0.06rem 0rem;
			}
		}
		&__form {
			margin-top: 3rem;
		}
	}

	@media (min-width: $tablet-breakpoint) {
		.main {
			background-color: var(--fem-color-base);

			&__header {
				font-size: 3rem;
				line-height: 3.5rem;
				text-align: left;
				margin-top: 5.81rem;
			}
			&__description {
				font-size: 1.125rem;
				text-align: left;
				max-width: 27.8125rem;
				margin-top: 1.94rem;
				line-height: 1.75rem;
			}
			&__list {
				justify-content: left;
				margin-top: 4rem;
				margin-bottom: 2rem;
			}
			&__item {
				height: 1.8125rem;

				&--apple {
					margin-right: 2.56rem;
				}
				&--google {
					padding-top: 0.38rem;
					padding-bottom: 0.31rem;
					margin-right: 1.69rem;
				}
				&--pocket {
					padding-top: 0.12rem;
					padding-bottom: 0.0625rem;
				}
				&--spotify {
					margin-right: 2.5rem;
				}
			}

			&__form-list {
				display: flex;
				flex-direction: column-reverse;
			}
			&__form {
				margin-top: 2.5rem;
			}
		}
	}

	@media (min-width: $desktop-breakpoint) {
		.main {
			&__header {
				font-size: 3.25rem;
			}
		}
	}
</style>
