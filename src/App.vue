<script setup>
	import { ref } from "vue";

	const email = ref("");
	const error = ref(false);

	const handleSubmit = () => {
		const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (regex.test(email.value)) {
			error.value = false;
		} else {
			error.value = true;
		}
	};
</script>

<template>
	<div
		class="bg-fem-base h-screen text-body text-fem-secondary overflow-hidden"
	>
		<div
			class="w-full lg:max-w-[1440px] md:h-fit lg:h-full lg:mx-auto flex lg:items-center justify-end"
		>
			<img
				src="./assets/desktop/bg-pattern-dots.svg"
				alt="pattern"
				class="absolute bottom-0 left-0 z-50 hidden md:block lg:hidden ml-[30px]"
			/>
			<div class="flex relative">
				<img
					class="absolute md:mt-[50px] lg:-mt-7"
					src="./assets/desktop/logo.svg"
					alt="logo"
				/>
				<img
					src="./assets/desktop/bg-pattern-dots.svg"
					alt="pattern"
					class="absolute bottom-0 right-0 z-50 -mb-[52px] hidden lg:block"
				/>
				<div
					class="bg-fem-base md:w-[635px] lg:w-[723px] flex flex-col h-fit items-start md:pt-[93px] lg:pt-[88px] self-end md:-mr-[398px] lg:-mr-[338px] z-20"
				>
					<h1>
						<span class="text-fem-primary block"
							>Publish your podcasts</span
						>
						everywhere.
					</h1>
					<div class="mt-6 w-[445px]">
						Upload your audio to Pod with a single click. We’ll then
						distribute your podcast to Spotify, Apple Podcasts,
						Google Podcasts, Pocket Casts and more!
					</div>
					<div class="relative mt-10">
						<input
							v-model="email"
							@keyup.enter="handleSubmit"
							type="email"
							class="bg-fem-neutral rounded-[28px] w-[427px] h-[56px] placeholder:text-white/50 text-sm pl-8 font-bold text-white focus:outline-0"
							placeholder="Email address"
						/>
						<button
							class="bg-fem-primary text-black font-bold text-sm rounded-[28px] py-[9px] px-[27px] leading-7 -ml-[168px] hover:bg-fem-primaryLight"
							type="button"
							@click="handleSubmit"
						>
							Request Access
						</button>
						<span
							v-if="error"
							class="absolute text-fem-red text-xs font-bold leading-normal block ml-8 mt-2"
							>Oops! Please check your email</span
						>
					</div>
					<div class="flex gap-10 mt-16 items-center">
						<img
							src="./assets/desktop/spotify.svg"
							alt="spotify"
						/><img
							src="./assets/desktop/apple-podcast.svg"
							alt="Apple Podcast"
						/><img
							src="./assets/desktop/google-podcasts.svg"
							alt="Google Podcasts"
						/><img
							src="./assets/desktop/pocket-casts.svg"
							alt="Pocket Casts"
						/>
					</div>
				</div>

				<div
					class="md:w-[491px] md:h-[767px] lg:w-[888px] lg:h-[640px] relative"
				>
					<div
						class="h-full w-full bg-fem-primary absolute opacity-[0.7993] mix-blend-multiply z-10"
					/>
					<img
						src="./assets/desktop/image-host.jpg"
						alt="host"
						class="bg-cover grayscale mix-blend-screen hidden lg:block"
					/>
					<img
						src="./assets/tablet/image-host.jpg"
						alt="host"
						class="bg-cover grayscale mix-blend-screen hidden md:block lg:hidden"
					/><img
						src="./assets/mobile/image-host.jpg"
						alt="host"
						class="bg-cover grayscale mix-blend-screen block md:hidden"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

