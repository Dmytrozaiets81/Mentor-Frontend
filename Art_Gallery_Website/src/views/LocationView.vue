<script setup>
	import Button from "../components/Button.vue"
	import FooterBase from "../components/FooterBase.vue"
</script>

<template>
	<main class="flex w-full flex-col items-center justify-center">
		<div class="relative">
			<Button
				class="absolute md:left-[39px] lg:left-[156px]"
				text="back to home"
				direction="left"
				route="/" />
			<!-- mobile map -->
			<img
				src="/src/assets/mobile/image-map.png"
				alt="map"
				class="w-screen md:hidden" />
			<!-- tablet map -->
			<img
				src="/src/assets/tablet/image-map.png"
				alt="map"
				class="hidden w-screen md:block lg:hidden" />
			<!-- desktop map -->
			<img
				src="/src/assets/desktop/image-map.png"
				alt="map"
				class="hidden w-screen lg:block" />
		</div>
		<div
			class="flex w-full flex-col bg-fem-almostBlack px-4 pb-14 md:flex-row md:items-start md:gap-[68px] md:pb-[80px] md:pl-[39px] md:pr-[40px] md:pt-[88px] lg:justify-between lg:gap-[220px] lg:px-[165px] lg:pb-32 lg:pt-[104px]">
			<h2
				class="headingM lg:headingL my-12 text-[50px] leading-[45px] text-white md:my-0 md:w-full lg:w-fit lg:text-white">
				our <br class="hidden lg:block" />
				location
			</h2>
			<div class="flex flex-col gap-6 md:gap-5 lg:w-fit">
				<h3
					class="headingS lg:headingS text-[32px] leading-8 text-fem-gold lg:w-fit lg:text-fem-gold">
					99 King Street
				</h3>
				<p class="bodyS lg:bodyM text-white lg:w-fit lg:text-white">
					Newport <br />
					RI 02840 <br />
					United States of America
				</p>
				<p
					class="bodyS lg:bodyM text-white md:w-[398px] lg:w-[540px] lg:text-white">
					Our newly opened gallery is located near the Edward King
					House on 99 King Street, the Modern Art Gallery is free to
					all visitors and open seven days a week from 8am to 9pm.
				</p>
			</div>
		</div>
		<FooterBase color="gold" />
	</main>
</template>
