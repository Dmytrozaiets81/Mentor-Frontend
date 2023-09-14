<script setup>
	const props = defineProps(["text", "direction"])
</script>

<template>
	<a
		class="flex h-[72px] group"
		href="#">
		<div class="buttonBase">{{ text }}</div>
		<div
			class="buttonRibbon"
			:class="{ 'order-first': direction == 'left' }">
			<img
				src="../assets/icon-arrow-right.svg"
				alt="icon-arrow-right"
				v-if="direction === 'right'" />
			<img
				src="../assets/icon-arrow-left.svg"
				alt="icon-arrow-left"
				v-if="direction === 'left'" />
		</div>
	</a>
</template>
