<script setup>
	defineProps(["winner", "election"])
</script>

<template>
	<button
		class="absolute right-3 top-3 w-[130px] -translate-y-1/2 translate-x-1/2">
		<img
			src="../assets/item-rock.svg"
			alt="item-rock"
			v-if="election === 1" />
		<img
			src="../assets/item-paper.svg"
			alt="item-paper"
			v-if="election === 2" />
		<img
			src="../assets/item-scissors.svg"
			alt="item-scissors"
			v-if="election === 3" />

		<div
			class="textShadow absolute -left-1 mt-[17px] w-max text-[15px] font-bold uppercase leading-8 tracking-[1.875px] text-white">
			the house picked
		</div>
		<div>
			<div
				v-if="winner"
				class="absolute -left-[60%] -top-[60%] -z-10 h-[220%] w-[220%] rounded-full bg-white opacity-5" />
			<div
				v-if="winner"
				class="absolute -left-[40%] -top-[40%] -z-10 h-[180%] w-[180%] rounded-full bg-white opacity-5" />
			<div
				v-if="winner"
				class="absolute -left-[20%] -top-[20%] -z-10 h-[140%] w-[140%] rounded-full bg-white opacity-5" />
		</div>
	</button>
</template>
