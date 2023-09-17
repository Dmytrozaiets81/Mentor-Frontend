<script setup>
	import Button from "../components/Button.vue"
	import FooterBase from "../components/FooterBase.vue"
</script>

<template>
	<div
		class="flex flex-col items-center justify-center w-full gap-[120px] lg:gap-[180px]">
		<div
			class="relative flex flex-col items-center md:flex-row md:w-full lg:pr-[165px]">
			<h1
				class="z-20 absolute hidden text-white mix-blend-difference lg:block headingXL w-fit left-[165px] top-[189px]">
				MODERN<br />ART GALLERY
			</h1>
			<div
				class="z-10 self-stretch hidden w-full bg-fem-almostBlack lg:block"></div>
			<h1
				class="z-0 absolute hidden text-white lg:block headingXL w-fit left-[165px] top-[189px]">
				MODERN<br />ART GALLERY
			</h1>
			<!-- mobile hero image -->
			<img
				src="/src/assets/mobile/image-hero.jpg"
				alt="HeroImage"
				class="w-screen md:hidden" />
			<!-- tablet hero image -->
			<img
				src="/src/assets/tablet/image-hero.jpg"
				alt="HeroImage"
				class="hidden w-full md:block lg:hidden" />
			<!-- desktop hero image  -->
			<img
				src="/src/assets/desktop/image-hero.jpg"
				alt="HeroImage"
				class="hidden w-full lg:block" />

			<div
				class="flex flex-col w-full gap-8 md:gap-12 lg:gap-16 px-4 md:px-0 mt-8 md:mt-0 md:-ml-[47px] md:mr-10 lg:mr-0 lg:self-start lg:top-[190px] relative lg:w-fit lg:-ml-[65px]">
				<h1
					class="headingM leading-[55px] md:headingL self-start md:leading-[65px] md:w-full lg:hidden">
					MODERN<br />ART GALLERY
				</h1>
				<p
					class="bodyS text-fem-darkGrey md:w-[339px] lg:w-[350px] lg:bodyM">
					The arts in the collection of the Modern Art Gallery all
					started from a spark of inspiration. Will these pieces
					inspire you? Visit us and find out.
				</p>
				<Button
					text="our location"
					direction="right"
					route="/location" />
			</div>
		</div>
		<div
			class="flex flex-col w-full gap-8 md:gap-[11px] md:px-10 lg:px-[164px] lg:gap-[30px]">
			<div
				class="flex flex-col gap-[25px] px-4 md:px-0 md:flex-row-reverse md:justify-between md:items-center">
				<!-- mobile image 1 -->
				<img
					src="/src/assets/mobile/image-grid-1.jpg"
					alt="image1"
					class="md:hidden" />
				<!-- tablet image 1 -->
				<img
					src="/src/assets/tablet/image-grid-1.jpg"
					alt="image1"
					class="hidden md:block lg:hidden" />
				<!-- desktop image 1 -->
				<img
					src="/src/assets/desktop/image-grid-1.jpg"
					alt="image1"
					class="hidden lg:block" />
				<div
					class="flex flex-col gap-[21px] md:w-[223px] lg:w-[350px] md:gap-6 md:h-full lg:gap-8">
					<h2
						class="headingS text-[50px] leading-[45px] lg:headingM lg:leading-[60px]">
						Your Day <br class="lg:hidden" />
						at the Gallery
					</h2>
					<p class="bodyS text-fem-darkGrey lg:bodyM">
						Wander through our distinct collections and find new
						insights about our artists. Dive into the details of
						their creative process.
					</p>
				</div>
			</div>
			<div
				class="flex flex-col gap-4 px-4 md:flex-row md:px-0 md:gap-[11px] md:justify-center md:w-full lg:gap-[30px]">
				<!-- mobile image 2 -->
				<img
					src="/src/assets/mobile/image-grid-2.jpg"
					alt="image1"
					class="md:hidden" />
				<!-- tablet image 2 -->
				<img
					src="/src/assets/tablet/image-grid-2.jpg"
					alt="image1"
					class="hidden w-full md:block lg:hidden" />
				<!-- desktop image 2 -->
				<img
					src="/src/assets/desktop/image-grid-2.jpg"
					alt="image1"
					class="hidden w-full lg:block" />
				<div class="flex flex-col gap-4 md:gap-[11px] lg:gap-[30px]">
					<!-- mobile image 3 -->
					<img
						src="/src/assets/mobile/image-grid-3.jpg"
						alt="image3"
						class="md:hidden" />
					<!-- tablet image 3 -->
					<img
						src="/src/assets/tablet/image-grid-3.jpg"
						alt="image3"
						class="hidden md:block lg:hidden" />
					<!-- desktop image 3 -->
					<img
						src="/src/assets/desktop/image-grid-3.jpg"
						alt="image3"
						class="hidden lg:block" />
					<div
						class="flex flex-col gap-6 px-6 py-12 bg-fem-almostBlack md:h-full md:py-[85px] md:pl-[29px] md:pr-7 lg:gap-8 lg:pl-12 lg:pr-[47px] lg:pt-[65px] lg:pb-16">
						<h3
							class="headingS text-[50px] leading-[45px] text-white lg:headingM lg:text-white">
							COME & BE INSPIRED
						</h3>
						<p class="text-white bodyS lg:bodyM lg:text-white">
							We’re excited to welcome you to our gallery and see
							how our collections influence you.
						</p>
					</div>
				</div>
			</div>
		</div>
		<FooterBase color="black" />
	</div>
</template>
