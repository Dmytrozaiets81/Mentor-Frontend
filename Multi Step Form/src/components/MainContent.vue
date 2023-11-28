<script setup>
	import StepOne from "./StepOne.vue"
	import StepTwo from "./StepTwo.vue"
	import StepThree from "./StepThree.vue"
	import StepFour from "./StepFour.vue"
	import StepFive from "./StepFive.vue"

	import { useFormStore } from "@/stores/form"
	const formStore = useFormStore()
</script>

<template>
	<StepOne v-if="formStore.step == 1" />
	<StepTwo v-if="formStore.step == 2" />
	<StepThree v-if="formStore.step == 3" />
	<StepFour v-if="formStore.step == 4" />
	<StepFive v-if="formStore.step == 5" />
</template>
