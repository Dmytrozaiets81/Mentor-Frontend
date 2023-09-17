<script setup>
	import Button from "../components/Button.vue"
	import FooterBase from "../components/FooterBase.vue"
</script>

<template>
	<div class="flex flex-col items-center justify-center w-full">
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
			class="flex flex-col w-full px-4 bg-fem-almostBlack pb-14 md:flex-row md:items-start md:pt-[88px] md:pb-[80px] md:pl-[39px] md:pr-[40px] md:gap-[68px] lg:px-[165px] lg:pt-[104px] lg:pb-32 lg:justify-between lg:gap-[220px]">
			<h2
				class="text-white headingM text-[50px] leading-[45px] my-12 md:my-0 md:w-full lg:headingL lg:text-white lg:w-fit">
				our <br class="hidden lg:block" />
				location
			</h2>
			<div class="flex flex-col gap-6 md:gap-5 lg:w-fit">
				<h3
					class="headingS text-[32px] leading-8 text-fem-gold lg:headingS lg:text-fem-gold lg:w-fit">
					99 King Street
				</h3>
				<p class="text-white bodyS lg:bodyM lg:text-white lg:w-fit">
					Newport <br />
					RI 02840 <br />
					United States of America
				</p>
				<p
					class="text-white bodyS md:w-[398px] lg:bodyM lg:text-white lg:w-[540px]">
					Our newly opened gallery is located near the Edward King
					House on 99 King Street, the Modern Art Gallery is free to
					all visitors and open seven days a week from 8am to 9pm.
				</p>
			</div>
		</div>
		<FooterBase color="gold" />
	</div>
</template>
