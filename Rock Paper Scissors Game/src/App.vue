<script setup>
	import { ref } from "vue"
	import PlayerElection from "./components/PlayerElection.vue"
	import ComputerElection from "./components/ComputerElection.vue"

	const score = ref(0)
	const rules = ref(false)
	const gameOn = ref(false)
	const userSelect = ref()
	const computerSelect = ref()
	const winner = ref([false, false])

	const handleClick = select => {
		gameOn.value = true
		userSelect.value = select
		game()
	}

	const game = () => {
		const computer = Math.floor(Math.random() * 3) + 1
		computerSelect.value = computer
		if (userSelect.value === computer) {
			winner.value = [false, false]
		} else if (
			(userSelect.value === 1 && computerSelect.value === 3) ||
			(userSelect.value === 2 && computerSelect.value === 1) ||
			(userSelect.value === 3 && compcomputerSelect.value === 2)
		) {
			winner.value = [true, false]
			score.value++
		} else {
			winner.value = [false, true]
			score.value--
		}
	}
</script>

<template>
	<div
		class="bgGradient flex h-screen flex-col items-center justify-between overflow-hidden px-8 pt-8 lg:px-[333px] lg:pb-40"
		v-if="!rules">
		<Header
			class="flex h-fit w-full items-center justify-between rounded-[5px] border-[3px] border-solid border-white/[0.29] py-3 pl-[23px] pr-3 lg:rounded-[15px]">
			<img
				src="./assets/logo.svg"
				alt="logo"
				class="h-[48px] w-[83px] lg:h-[92.68px] lg:w-[155.48px]" />
			<div
				class="whiteGradient flex h-fit w-20 flex-col items-center gap-0 rounded-[4px] py-[10px] pl-6 pr-[23px] lg:w-fit lg:pb-[15px] lg:pl-12 lg:pr-[47px] lg:pt-4">
				<span
					class="text-center text-[10px] font-semibold uppercase leading-3 tracking-[1.563px] text-fem-score lg:text-[16px] lg:leading-[19px] lg:tracking-[2.5px]"
					>score</span
				>
				<span
					class="text-center text-[40px] font-bold leading-10 text-fem-darkest lg:text-[64px] lg:leading-[64px]"
					>{{ score }}</span
				>
			</div>
		</Header>
		<div
			class="flex w-full justify-center"
			v-if="!gameOn">
			<div class="relative h-fit w-fit">
				<img
					src="./assets/bg-triangle.svg"
					alt="background_triangle"
					class="block h-[190px] w-[207px] lg:hidden" />
				<img
					src="./assets/bg-triangle-large.svg"
					alt="background_triangle_large"
					class="hidden lg:block" />
				<button
					class="group absolute bottom-8 left-1/2 w-[130px] -translate-x-1/2 translate-y-1/2 lg:w-[198px]"
					@click="handleClick(1)">
					<img
						src="./assets/item-rock.svg"
						alt="item-rock"
						class="h-full w-full" />
					<div
						class="absolute -left-[12.63%] -top-[12.63%] -z-10 hidden h-[248px] w-[252px] rounded-full bg-white opacity-5 lg:group-hover:block"></div>
				</button>
				<button
					class="group absolute left-3 top-3 w-[130px] -translate-x-1/2 -translate-y-1/2 lg:w-[198px]"
					@click="handleClick(2)">
					<img
						src="./assets/item-paper.svg"
						alt="item-paper"
						class="h-full w-full" />
					<div
						class="absolute -left-[12.63%] -top-[12.63%] -z-10 hidden h-[248px] w-[252px] rounded-full bg-white opacity-5 lg:group-hover:block"></div>
				</button>
				<button
					class="group absolute right-3 top-3 w-[130px] -translate-y-1/2 translate-x-1/2 lg:w-[198px]"
					@click="handleClick(3)">
					<img
						src="./assets/item-scissors.svg"
						alt="item-scissors"
						class="h-full w-full" />
					<div
						class="absolute -left-[12.63%] -top-[12.63%] -z-10 hidden h-[248px] w-[252px] rounded-full bg-white opacity-5 lg:group-hover:block"></div>
				</button>
			</div>
		</div>
		<div
			class="flex w-full flex-col items-center"
			v-if="gameOn">
			<div class="relative h-fit w-fit lg:hidden">
				<div class="invisible h-[190px] w-[207px]" />
				<PlayerElection
					:winner="winner[0]"
					:election="userSelect" />
				<ComputerElection
					:winner="winner[1]"
					:election="computerSelect" />
			</div>
			<div class="relative hidden h-[100px] w-[700px] lg:block">
				<PlayerElection
					:winner="winner[0]"
					:election="userSelect"
					class="w-[300px]" />
				<ComputerElection
					:winner="winner[1]"
					class="w-[300px]"
					:election="computerSelect" />
			</div>
			<div class="absolute bottom-0 mb-36 flex flex-col gap-4 lg:mb-56">
				<div
					class="textShadow text-center text-[56px] font-bold uppercase leading-[67px] text-white"
					v-if="winner[0] && !winner[1]">
					you win
				</div>
				<div
					class="textShadow text-center text-[56px] font-bold uppercase leading-[67px] text-white"
					v-if="!winner[0] && winner[1]">
					you lose
				</div>
				<div
					class="textShadow text-center text-[56px] font-bold uppercase leading-[67px] text-white"
					v-if="!winner[0] && !winner[1]">
					its a tie
				</div>
				<button
					class="whiteGradient w-full rounded-lg border border-white pb-[14px] pt-[15px] text-center text-base font-semibold uppercase leading-[19px] tracking-[2.5px] text-fem-dark"
					@click="gameOn = false">
					play again
				</button>
			</div>
		</div>
		<button
			@click="rules = true"
			class="mb-14 w-fit rounded-lg border border-white pb-[10px] pl-[37px] pr-9 pt-[11px] text-center text-base font-semibold uppercase leading-[19px] tracking-[2.5px] text-white lg:absolute lg:bottom-8 lg:right-8 lg:mb-0">
			rules
		</button>
	</div>
	<div
		class="flex h-screen w-full flex-col items-center justify-between pb-[66px] pt-[95px]"
		v-if="rules">
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
