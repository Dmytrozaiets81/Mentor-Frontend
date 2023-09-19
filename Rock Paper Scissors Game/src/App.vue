<script setup>
	import { ref } from "vue"
	const score = ref(12)
	const rules = ref(false)
</script>

<template>
	<div
		class="bgGradient h-screen flex-col items-center justify-between px-8 pt-8"
		:class="{ flex: !rules, hidden: rules }">
		<Header
			class="flex h-fit w-full items-center justify-between rounded-[5px] border-[3px] border-solid border-white/[0.29] py-3 pl-[23px] pr-3">
			<img
				src="./assets/logo.svg"
				alt="logo"
				class="h-[48px] w-[83px]" />
			<div
				class="whiteGradient flex h-fit w-20 flex-col items-center gap-0 rounded-[4px] py-[10px] pl-6 pr-[23px]">
				<span
					class="text-center text-[10px] font-semibold uppercase leading-3 tracking-[1.563px] text-fem-score"
					>score</span
				>
				<span
					class="text-fem-darkest text-center text-[40px] font-bold leading-10"
					>{{ score }}</span
				>
			</div>
		</Header>
		<Main class="flex w-full justify-center">
			<div class="relative h-fit w-fit">
				<img
					src="./assets/bg-triangle.svg"
					alt="background_triangle"
					class="h-[190px] w-[207px]" />
				<button
					class="absolute left-3 top-3 w-[130px] -translate-x-1/2 -translate-y-1/2">
					<img
						src="./assets/item-paper.svg"
						alt="item-paper" />
				</button>
				<button
					class="absolute right-3 top-3 w-[130px] -translate-y-1/2 translate-x-1/2">
					<img
						src="./assets/item-scissors.svg"
						alt="item-scissors" />
				</button>
				<button
					class="absolute bottom-8 left-1/2 w-[130px] -translate-x-1/2 translate-y-1/2">
					<img
						src="./assets/item-rock.svg"
						alt="item-rock" />
				</button>
			</div>
		</Main>
		<button
			@click="rules = true"
			class="mb-14 w-fit rounded-lg border border-white pb-[10px] pl-[37px] pr-9 pt-[11px] text-center text-base font-semibold uppercase leading-[19px] tracking-[2.5px] text-white">
			rules
		</button>
	</div>
	<div
		class="h-screen w-full flex-col items-center justify-between pb-[66px] pt-[95px]"
		:class="{ flex: rules, hidden: !rules }">
		<span class="text-[32px] font-bold uppercase leading-8 text-fem-dark"
			>rules</span
		>
		<img
			src="./assets/image-rules.svg"
			alt="rules" />
		<button @click="rules = false">
			<img
				src="./assets/icon-close.svg"
				alt="close-icon" />
		</button>
	</div>
</template>
