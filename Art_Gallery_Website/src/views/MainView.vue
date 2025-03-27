<script setup>
	import Button from "../components/Button.vue"
	import FooterBase from "../components/FooterBase.vue"
</script>

<template>
	<main
		class="flex w-full flex-col items-center justify-center gap-[120px] lg:gap-[180px]">
		<div
			class="relative flex flex-col items-center md:w-full md:flex-row lg:pr-[165px]">
			<h1
				class="headingXL absolute left-[165px] top-[189px] z-20 hidden w-fit text-white mix-blend-difference lg:block">
				MODERN<br />ART GALLERY
			</h1>
			<div
				class="z-10 hidden w-full self-stretch bg-fem-almostBlack lg:block"></div>
			<h1
				class="headingXL absolute left-[165px] top-[189px] z-0 hidden w-fit text-white lg:block">
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
				class="relative mt-8 flex w-full flex-col gap-8 px-4 md:-ml-[47px] md:mr-10 md:mt-0 md:gap-12 md:px-0 lg:top-[190px] lg:-ml-[65px] lg:mr-0 lg:w-fit lg:gap-16 lg:self-start">
				<h1
					class="headingM md:headingL self-start leading-[55px] md:w-full md:leading-[65px] lg:hidden">
					MODERN<br />ART GALLERY
				</h1>
				<p
					class="bodyS lg:bodyM text-fem-darkGrey md:w-[339px] lg:w-[350px]">
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
			class="flex w-full flex-col gap-8 md:gap-[11px] md:px-10 lg:gap-[30px] lg:px-[164px]">
			<div
				class="flex flex-col gap-[25px] px-4 md:flex-row-reverse md:items-center md:justify-between md:px-0">
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
					class="flex flex-col gap-[21px] md:h-full md:w-[223px] md:gap-6 lg:w-[350px] lg:gap-8">
					<h2
						class="headingS lg:headingM text-[50px] leading-[45px] lg:leading-[60px]">
						Your Day <br class="lg:hidden" />
						at the Gallery
					</h2>
					<p class="bodyS lg:bodyM text-fem-darkGrey">
						Wander through our distinct collections and find new
						insights about our artists. Dive into the details of
						their creative process.
					</p>
				</div>
			</div>
			<div
				class="flex flex-col gap-4 px-4 md:w-full md:flex-row md:justify-center md:gap-[11px] md:px-0 lg:gap-[30px]">
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
						class="flex flex-col gap-6 bg-fem-almostBlack px-6 py-12 md:h-full md:py-[85px] md:pl-[29px] md:pr-7 lg:gap-8 lg:pb-16 lg:pl-12 lg:pr-[47px] lg:pt-[65px]">
						<h3
							class="headingS lg:headingM text-[50px] leading-[45px] text-white lg:leading-[60px] lg:text-white">
							COME & BE INSPIRED
						</h3>
						<p class="bodyS lg:bodyM text-white lg:text-white">
							We’re excited to welcome you to our gallery and see
							how our collections influence you.
						</p>
					</div>
				</div>
			</div>
		</div>
		<FooterBase color="black" />
	</main>
</template>
