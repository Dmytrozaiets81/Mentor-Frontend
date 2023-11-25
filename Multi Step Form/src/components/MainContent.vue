<script setup>
	import { ref } from "vue"

	import StepOne from "./StepOne.vue"
	import StepTwo from "./StepTwo.vue"
	import StepThree from "./StepThree.vue"
	import StepFour from "./StepFour.vue"
	import StepFive from "./StepFive.vue"

	const step = ref(2)
</script>

<template>
	<StepOne v-if="step == 1" />
	<StepTwo v-if="step == 2" />
	<StepThree v-if="step == 3" />
	<StepFour v-if="step == 4" />
	<StepFive v-if="step == 5" />
</template>

<style lang="scss" scoped></style>
