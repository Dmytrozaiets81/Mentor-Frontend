import { computed } from "vue"
import { useFormStore } from "@/stores/form.js"

export default function useFormatNumber() {
	const formStore = useFormStore()

	const duration = computed(() => (formStore.year ? "yr" : "mo"))

	const formattedNumber = number => `$${number}/${duration.value}`

	return {
		formattedNumber,
	}
}
