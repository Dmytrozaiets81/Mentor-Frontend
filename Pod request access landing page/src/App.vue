<script setup>
	import { ref } from "vue";

	const email = ref("");
	const error = ref(false);
	const message = ref("");

	const handleSubmit = () => {
		const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		if (regex.test(email.value)) {
			error.value = false;
		} else {
			if (email.value === "") {
				message.value = "Oops! Please add your email";
				error.value = true;
			} else {
				message.value = "Oops! Please check your email";
			}

			error.value = true;
		}
	};
</script>

<template>
	<div
		class="bg-fem-base h-screen text-body text-fem-secondary overflow-auto"
	>
		<div class="flex flex-col md:hidden items-center justify-center p-6">
			<img
				class="mt-[38px] z-50"
				src="./assets/desktop/logo.svg"
				alt="logo"
			/>
			<h1 class="text-center mt-[57px] z-50">
				<span class="text-fem-primary block"
					>Publish your podcasts</span
				>
				everywhere.
			</h1>
			<div class="mt-4 text-[15px] leading-[25px] text-center z-50">
				Upload your audio to Pod with a single click. We’ll then
				distribute your podcast to Spotify, Apple Podcasts, Google
				Podcasts, Pocket Casts and more!
			</div>
			<div class="flex items-center mt-[33px] z-50">
				<img
					src="./assets/desktop/spotify.svg"
					alt="spotify"
					class="h-[17px]"
				/>
				<img
					src="./assets/desktop/apple-podcast.svg"
					alt="Apple Podcast"
					class="h-[17px] ml-[23px]"
				/>
				<img
					src="./assets/desktop/google-podcasts.svg"
					alt="Google Podcasts"
					class="h-[11px] ml-[25px]"
				/>
				<img
					src="./assets/desktop/pocket-casts.svg"
					alt="Pocket Casts"
					class="h-[15px] ml-4"
				/>
			</div>
			<div class="relative mt-12 z-50">
				<input
					v-model="email"
					@keyup.enter="handleSubmit"
					type="email"
					class="bg-fem-neutral rounded-[28px] w-full min-w-[327px] h-[46px] placeholder:text-white/50 text-sm pl-8 font-bold text-white focus:outline-0"
					placeholder="Email address"
				/>
				<button
					class="bg-fem-primary text-black font-bold min-w-[327px] text-sm rounded-[28px] w-full py-[9px] leading-7 hover:bg-fem-primaryLight mt-4"
					type="button"
					@click="handleSubmit"
				>
					Request Access
				</button>
				<span
					v-if="error"
					class="absolute text-fem-red text-xs font-bold leading-normal block mt-2 text-center w-full"
					>{{ message }}</span
				>
			</div>
			<div
				class="h-full w-full bottom-0 absolute bg-[url('./assets/mobile/image-host.jpg')] grayscale opacity-10 z-10 bg-no-repeat bg-cover"
			/>
			<div
				class="bottom-0 h-full w-full absolute bg-fem-primary mix-blend-multiply opacity-20 z-0"
			/>
		</div>
		<div
			class="hidden md:flex w-full lg:max-w-[1440px] md:h-fit lg:h-full lg:mx-auto lg:items-center justify-end"
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
					class="bg-fem-base md:w-[635px] lg:w-[723px] flex flex-col h-fit items-start md:pt-[93px] lg:pt-[88px] self-end md:-mr-[398px] lg:-mr-[336px] z-20"
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
							class="shadow-[0_2px_4px_0_rgba(84,230,175,0.14)] hover:shadow-none bg-fem-primary text-fem-base font-bold text-sm rounded-[28px] py-[9px] px-[27px] leading-7 -ml-[169px] hover:bg-fem-primaryLight -top-[0.4px] relative"
							type="button"
							@click="handleSubmit"
						>
							Request Access
						</button>
						<span
							v-if="error"
							class="absolute text-fem-red text-xs font-bold leading-normal block ml-8 mt-2"
							>{{ message }}</span
						>
					</div>
					<div class="flex mt-16 items-center">
						<img
							src="./assets/desktop/spotify.svg"
							alt="spotify"
						/><img
							src="./assets/desktop/apple-podcast.svg"
							alt="Apple Podcast"
							class="ml-10"
						/><img
							src="./assets/desktop/google-podcasts.svg"
							alt="Google Podcasts"
							class="ml-[41px]"
						/><img
							src="./assets/desktop/pocket-casts.svg"
							alt="Pocket Casts"
							class="ml-[27px]"
						/>
					</div>
				</div>

				<div
					class="md:w-[491px] md:h-[767px] lg:w-[888px] lg:h-[640px] relative"
				>
					<picture class="bg-white">
						<source
							media="(min-width: 1440px)"
							srcset="./assets/desktop/image-host.jpg"
						/>
						<source
							media="(min-width: 768px)"
							srcset="./assets/tablet/image-host.jpg"
						/>
						<img
							src="./assets/mobile/image-host.jpg"
							alt="host person talking to a microphone"
							class="bg-cover"
						/>
					</picture>
				</div>
			</div>
		</div>
	</div>
</template>
