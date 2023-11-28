import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useFormStore = defineStore("form", () => {
	const step = ref(1)
	// first step
	const name = ref("")
	const email = ref("")
	const phone = ref("")
	// second step
	const plan = ref("")
	const year = ref(false)
	// third step
	const online = ref(false)
	const storage = ref(false)
	const customizable = ref(false)
	// prices

	const arcadePrice = computed(() => (year.value === true ? 90 : 9))
	const advancedPrice = computed(() => (year.value === true ? 120 : 12))
	const proPrice = computed(() => (year.value === true ? 150 : 15))
	const onlinePrice = computed(() => (year.value === true ? 10 : 1))
	const storagePrice = computed(() => (year.value === true ? 20 : 2))
	const customizablePrice = computed(() => (year.value === true ? 10 : 2))
	const totalPrice = computed(() => {
		let total = 0
		if (plan.value === "Arcade") {
			total += arcadePrice.value
		} else if (plan.value === "Advanced") {
			total += advancedPrice.value
		} else if (plan.value === "Pro") {
			total += proPrice.value
		}
		if (online.value === true) {
			total += onlinePrice.value
		}
		if (storage.value === true) {
			total += storagePrice.value
		}
		if (customizable.value === true) {
			total += customizablePrice.value
		}
		return total
	})

	// addon list
	const addons = computed(() => {
		const list = []
		if (online.value === true) {
			list.push({
				name: "Online service",
				price: onlinePrice.value,
			})
		}
		if (storage.value === true) {
			list.push({
				name: "Larger storage",
				price: storagePrice.value,
			})
		}
		if (customizable.value === true) {
			list.push({
				name: "Customizable profile",
				price: customizablePrice.value,
			})
		}
		return list
	})

	return {
		step,
		name,
		email,
		phone,
		plan,
		year,
		online,
		storage,
		customizable,
		arcadePrice,
		advancedPrice,
		proPrice,
		onlinePrice,
		storagePrice,
		customizablePrice,
		totalPrice,
		addons,
	}
})
