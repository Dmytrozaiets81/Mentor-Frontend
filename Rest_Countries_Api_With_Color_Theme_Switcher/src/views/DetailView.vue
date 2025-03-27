<script setup>
	import axios from "axios"
	import { RouterLink } from "vue-router"
	import { ref, onBeforeMount } from "vue"
	import { useRoute } from "vue-router"

	const route = useRoute()

	const country = ref()
	const borders = ref([])

	onBeforeMount(async () => {
		const countryName = route.params.country
		const url = `https://restcountries.com/v2/name/${countryName}`
		const response = await axios.get(url)
		country.value = response.data[0]
		getBorders()
	})

	const getBorders = async () => {
		const borderList = []
		let base = "https://restcountries.com/v2/name/"
		for (const border of country.value.borders) {
			const response = await axios.get(base + border)
			borderList.push({
				name: response.data[0].name,
				url: "/detail/" + response.data[0].name,
			})
		}
		borders.value = borderList
	}
</script>

<template>
	<main
		class="min-h-screen w-screen bg-fem-grayWhite px-7 pb-[62px] pt-10 dark:bg-fem-primary">
		<RouterLink
			to="/"
			class="flex gap-2 rounded-sm px-6 py-[6px] shadow-lg dark:bg-fem-primaryLight">
			<div></div>
			Back
		</RouterLink>
		<section class="mt-16 flex flex-col gap-11">
			<img
				:src="country.flag"
				alt="flag" />
			<h2 class="text-[22px] font-extrabold leading-[30px]">
				{{ country.name }}
			</h2>
			<div class="flex flex-col gap-8 text-sm font-semibold leading-8">
				<ul>
					<li>
						Native Name:
						<span class="font-light">{{ country.nativeName }}</span>
					</li>
					<li>
						Population:
						<span class="font-light">{{
							country.population.toLocaleString()
						}}</span>
					</li>
					<li>
						Region:
						<span class="font-light">{{ country.region }}</span>
					</li>
					<li>
						Sub Region:
						<span class="font-light">{{ country.subregion }}</span>
					</li>
					<li>
						Capital:
						<span class="font-light">{{ country.capital }}</span>
					</li>
				</ul>
				<ul>
					<li>
						Top Level Domain:
						<span class="font-light">{{
							country.topLevelDomain[0]
						}}</span>
					</li>
					<li>
						Currencies:
						<span class="font-light">{{
							country.currencies.map(item => item.code).join(", ")
						}}</span>
					</li>
					<li>
						Languages:
						<span class="font-light">{{
							country.languages.map(item => item.name).join(", ")
						}}</span>
					</li>
				</ul>
				<div class="flex flex-col gap-4">
					Border Countries:
					<div
						class="flex flex-wrap items-center justify-start gap-[10px]">
						<RouterLink
							v-for="border in borders"
							to="border.url"
							class="w-24 rounded-sm bg-fem-primaryLight px-2 py-[6px] text-center text-xs font-light shadow-none">
							{{ border.name }}
						</RouterLink>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>
