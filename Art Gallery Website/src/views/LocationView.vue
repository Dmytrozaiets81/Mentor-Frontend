<script setup>
	import Button from "../components/Button.vue"
</script>

<template>
	<div class="flex flex-col items-center justify-center w-full">
		<div class="relative">
			<Button
				class="absolute"
				text="back to home"
				direction="left"
				route="/" />
			<img
				src="/src/assets/mobile/image-map.png"
				alt="map"
				class="w-screen" />
		</div>
		<div class="flex flex-col w-full px-4 bg-fem-almostBlack pb-14">
			<h2 class="text-white headingM text-[50px] leading-[45px] my-12">
				our location
			</h2>
			<div class="flex flex-col gap-6">
				<h3 class="headingS text-[32px] leading-8 text-fem-gold">
					99 King Street
				</h3>
				<p class="text-white bodyS">
					Newport <br />
					RI 02840 <br />
					United States of America
				</p>
				<p class="text-white bodyS">
					Our newly opened gallery is located near the Edward King
					House on 99 King Street, the Modern Art Gallery is free to
					all visitors and open seven days a week from 8am to 9pm.
				</p>
			</div>
		</div>
		<div class="flex flex-col px-8 py-12 bg-fem-gold gap-[38px] w-full">
			<img
				src="/src/assets/logo-dark.svg"
				alt="logo-dark"
				class="w-fit" />
			<p class="bodyS text-base leading-[26px] text-fem-almostBlack">
				The Modern Art Gallery is free to all visitors and open seven
				days a week from 8am to 9pm. Find us at 99 King Street, Newport,
				USA.
			</p>
			<div class="flex w-[102px] justify-between">
				<img
					src="/src/assets/icon-facebook-dark.svg"
					alt="icon-facebook-dark" />
				<img
					src="/src/assets/icon-instagram-dark.svg"
					alt="icon-instgram-dark" />
				<img
					src="/src/assets/icon-twitter-dark.svg"
					alt="icon-twitter-dark" />
			</div>
		</div>
	</div>
</template>
