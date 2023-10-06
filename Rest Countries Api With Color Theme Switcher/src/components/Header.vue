<script setup>
	import { useDark, useToggle } from "@vueuse/core"
	import { MoonIcon } from "@heroicons/vue/24/outline"
	import { SunIcon } from "@heroicons/vue/24/solid"

	const isDark = useDark()
	const toggleDark = useToggle(isDark)
</script>

<template>
	<header
		class="flex w-full items-center justify-between px-4 py-[30px] dark:bg-fem-primaryLight">
		<h1 class="text-sm font-extrabold">Where in the world?</h1>
		<button
			@click="toggleDark()"
			class="flex items-center gap-1 text-xs font-semibold">
			<SunIcon
				v-if="isDark"
				class="h-4 w-4" />
			<MoonIcon
				v-else
				class="h-4" />
			<span class="w-full">{{ isDark ? "Light" : "Dark" }} Mode</span>
		</button>
	</header>
</template>
