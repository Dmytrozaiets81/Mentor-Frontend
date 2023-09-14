<script setup>
	import Button from "../components/Button.vue"
</script>

<template>
	<div class="flex flex-col items-center justify-center w-full gap-[120px]">
		<div>
			<div class="flex flex-col items-center">
				<img
					src="/src/assets/mobile/image-hero.jpg"
					alt="HeroImage" />
				<div class="flex flex-col w-full gap-8 px-4 mt-8">
					<h1 class="headingM leading-[55px] self-start">
						MODERN<br />ART GALLERY
					</h1>
					<p class="bodyS text-fem-darkGrey">
						The arts in the collection of the Modern Art Gallery all
						started from a spark of inspiration. Will these pieces
						inspire you? Visit us and find out.
					</p>
					<Button
						text="our location"
						direction="right" />
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-8">
			<div class="flex flex-col gap-[25px] px-4">
				<img
					src="/src/assets/mobile/image-grid-1.jpg"
					alt="image1" />
				<div class="flex flex-col gap-[21px]">
					<h2 class="headingS text-[50px] leading-[45px]">
						Your Day <br />
						at the Gallery
					</h2>
					<p class="bodyS text-fem-darkGrey">
						Wander through our distinct collections and find new
						insights about our artists. Dive into the details of
						their creative process.
					</p>
				</div>
			</div>
			<div class="flex flex-col gap-4 px-4">
				<img
					src="/src/assets/mobile/image-grid-2.jpg"
					alt="image1" />
				<div class="flex flex-col gap-4">
					<img
						src="/src/assets/mobile/image-grid-3.jpg"
						alt="image3" />
					<div
						class="flex flex-col gap-6 px-6 py-12 bg-fem-almostBlack">
						<h3
							class="headingS text-[50px] leading-[45px] text-white">
							COME & BE INSPIRED
						</h3>
						<p class="text-white bodyS">
							We’re excited to welcome you to our gallery and see
							how our collections influence you.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="">
			<div class="flex flex-col px-8 py-12 bg-fem-almostBlack gap-[38px]">
				<img
					src="/src/assets/logo-light.svg"
					alt="logo-light"
					class="w-fit" />
				<p class="bodyS text-base leading-[26px] text-white">
					The Modern Art Gallery is free to all visitors and open
					seven days a week from 8am to 9pm. Find us at 99 King
					Street, Newport, USA.
				</p>
				<div class="flex w-[102px] justify-between">
					<img
						src="/src/assets/icon-facebook.svg"
						alt="icon-facebook" />
					<img
						src="/src/assets/icon-instagram.svg"
						alt="icon-instgram" />
					<img
						src="/src/assets/icon-twitter.svg"
						alt="icon-twitter" />
				</div>
			</div>
		</div>
	</div>
</template>
