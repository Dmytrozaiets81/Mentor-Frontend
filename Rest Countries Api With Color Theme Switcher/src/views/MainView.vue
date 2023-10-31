<script setup>
	import axios from "axios"
	import { ref, onMounted } from "vue"
	const data = ref([])
	onMounted(async () => {
		const response = await axios.get(
			"https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital",
		)
		data.value = response.data
	})
</script>
<template>
	<main
		class="h-full min-h-screen w-screen bg-fem-grayWhite px-4 pb-[65px] pt-6 dark:bg-fem-primary">
		<div class="relative">
			<input
				class="h-12 w-full rounded-[5px] border-none bg-white py-[14px] pl-[74px] text-xs font-normal leading-5 shadow-[0_2px_9px_0_rgba(0,0,0,0.05)] focus:border-none focus:outline-none dark:bg-fem-primaryLight dark:placeholder:text-white"
				type="text"
				placeholder="Search for a country…" />
			<div
				class="absolute left-8 top-1/2 -translate-y-1/2 text-[#C4C4C4] dark:text-white">
				A
			</div>
		</div>
		<div class="relative mt-10 w-fit">
			<select
				class="appearance-none rounded-[5px] border-none bg-white px-6 py-[14px] pr-[91px] text-xs leading-5 placeholder-red-950 focus:outline-none dark:bg-fem-primaryLight">
				<option value="">Filter by Region</option>
				<option>Option 1</option>
				<option>Option 2</option>
				<option>Option 3</option>
			</select>
			<div
				class="absolute right-[19px] top-1/2 -translate-y-1/2 text-black dark:text-white">
				v
			</div>
		</div>
		<section class="mx-10 mt-8 flex flex-col gap-10">
			<RouterLink
				v-for="country in data"
				:to="'/detail/' + country.name.common">
				<article
					class="rounded-[5px] bg-white pb-[46px] shadow-sm dark:bg-fem-primaryLight">
					<img
						:src="country.flags.svg"
						alt="flag"
						class="rounded-t-[5px]" />
					<div class="mx-6 mt-6 flex flex-col">
						<h2 class="mb-4 text-lg font-extrabold leading-[26px]">
							{{ country.name.common }}
						</h2>
						<ul
							class="flex flex-col gap-2 text-sm font-light leading-4">
							<li>
								<span class="font-bold">Population:</span>
								{{ country.population.toLocaleString() }}
							</li>
							<li>
								<span class="font-bold">Region:</span>
								{{ country.region }}
							</li>
							<li>
								<span class="font-extrabold">Capital:</span>
								{{ country.capital[0] }}
							</li>
						</ul>
					</div>
				</article>
			</RouterLink>
		</section>
	</main>
</template>
