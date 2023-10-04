<script setup>
	import { ref, reactive } from "vue"

	const shortenInput = ref("")
	const shortedLinks = reactive([])

	const handleShortenLink = async () => {
		if (shortenInput.value === "") {
			console.log("Please add a link")
		} else {
			const base = "https://api.shrtco.de/v2/shorten?url="
			const url = base + shortenInput.value
			await fetch(url)
				.then(res => res.json())
				.then(data => {
					shortedLinks.push({
						link: shortenInput.value,
						short: data.result.full_short_link,
						copy: false,
					})
				})
				.catch(err => console.log(err))
			shortenInput.value = ""
		}
	}

	const handleCopy = link => {
		navigator.clipboard.writeText(link.short)
		link.copy = true
	}
</script>

<template>
	<main>
		<section
			class="mt-[23px] overflow-hidden px-6 lg:mt-[78px] lg:flex lg:gap-[100px] lg:pl-[165px]">
			<picture class="lg:order-2">
				<source
					media="(min-width: 1024px)"
					srcset="../assets/illustration-working2.svg" />
				<img
					src="../assets/illustration-working3.svg"
					alt="illustration working"
					class="-mr-6 ml-auto max-w-none" />
			</picture>
			<div class="lg:order-1 lg:flex lg:flex-col lg:justify-center">
				<h1
					class="mt-[37px] text-center text-[42px] font-bold leading-[48px] -tracking-[1.05px] text-neutral-darkestBlue lg:mt-0 lg:text-left lg:text-[80px] lg:leading-[90px] lg:-tracking-[2px]">
					More than just shorter links
				</h1>
				<p
					class="mt-[15px] text-center text-lg font-medium leading-[30px] tracking-[0.123px] text-neutral-grayishViolet lg:mt-[5px] lg:text-left">
					Build your brand’s recognition and get detailed insights on
					how your links are performing.
				</p>
				<button
					class="mx-auto mt-8 block rounded-[28px] bg-primary-cyan px-10 pb-3 pt-[14px] text-xl font-bold leading-[30px] text-white hover:bg-primary-lightCyan active:bg-primary-lightestCyan lg:mx-0 lg:mr-auto lg:mt-[38px]">
					Get Started
				</button>
			</div>
		</section>
		<section class="relative mt-[88px] px-6 lg:px-[165px]">
			<div
				class="w-full rounded-[10px] bg-primary-darkViolet bg-[url('./assets/bg-shorten-mobile.svg')] bg-right-top bg-no-repeat p-6 lg:bg-[url('./assets/bg-shorten-desktop.svg')] lg:px-16 lg:pt-[52px]">
				<form
					@submit.prevent="handleShortenLink"
					class="lg:flex lg:items-start lg:gap-6">
					<div class="lg:flex lg:w-4/5 lg:flex-col">
						<input
							id="shorten"
							type="url"
							v-model="shortenInput"
							class="peer w-full rounded-[5px] border-none py-[6px] pl-4 text-base font-medium leading-9 tracking-[0.12px] text-neutral-darkestBlue ring-primary-cyan invalid:ring-primary-red focus:outline-none focus:ring-4 lg:mb-7 lg:h-16 lg:text-xl lg:leading-9 lg:tracking-[0.15px] lg:invalid:mb-0"
							pattern="https?://.+"
							placeholder="Shorten a link here..." />
						<p
							class="mt-1 hidden text-xs font-medium italic leading-[18px] tracking-[0.082px] text-primary-red peer-invalid:block lg:mt-1 lg:text-base">
							Please add a link
						</p>
					</div>
					<button
						type="submit"
						class="mx-auto mt-4 block w-full rounded-[5px] bg-primary-cyan pb-[10px] pt-[11px] text-lg font-bold leading-[27px] text-white hover:bg-primary-lightCyan active:bg-primary-lightestCyan lg:mt-0 lg:h-16 lg:w-1/5 lg:text-xl lg:leading-normal">
						Shorten It!
					</button>
				</form>
			</div>
		</section>
		<section
			class="-mt-20 bg-neutral-lightGray px-6 pb-20 pt-20 lg:px-[165px]">
			<div
				v-for="link in shortedLinks"
				class="mt-6 flex flex-col rounded-[5px] bg-white pb-4 lg:flex-row lg:items-center lg:justify-between lg:py-[18px] lg:pl-8 lg:pr-6">
				<span
					class="truncate border-b-2 px-4 py-[6px] text-base font-medium leading-9 tracking-[0.12px] text-neutral-darkestBlue lg:mr-6 lg:w-fit lg:border-b-0 lg:p-0 lg:text-xl lg:leading-9">
					{{ link.link }}
				</span>
				<span
					class="mx-4 mt-[6px] text-base font-medium leading-9 tracking-[0.12px] text-primary-cyan lg:ml-auto lg:mr-6 lg:mt-0 lg:text-xl lg:leading-9 lg:tracking-[0.15px]"
					>{{ link.short }}</span
				>
				<button
					@click="handleCopy(link)"
					class="ml-4 mr-4 mt-2 rounded-[5px] bg-primary-cyan px-[31px] pb-[10px] pt-[11px] text-lg font-bold leading-[27px] text-white hover:bg-primary-lightCyan active:bg-primary-lightestCyan lg:m-0 lg:pb-[7px] lg:pt-[10px] lg:text-[15px] lg:leading-[23px]"
					:class="{
						'bg-primary-darkViolet': link.copy,
						'lg:px-[21px]': link.copy,
					}">
					{{ link.copy ? "Copied!" : "Copy" }}
				</button>
			</div>
			<h1
				class="mt-20 text-center text-[28px] font-bold leading-[48px] -tracking-[0.7px] text-neutral-darkestBlue lg:mx-auto lg:mt-[120px] lg:w-fit lg:text-[40px] lg:leading-[48px] lg:-tracking-[1px]">
				Advanced Statistics
			</h1>
			<p
				class="mt-4 text-center text-neutral-grayishViolet lg:mx-auto lg:mt-[18px] lg:max-w-[540px] lg:text-lg lg:leading-8 lg:tracking-[0.123px]">
				Track how your links are performing across the web with our
				advanced statistics dashboard.
			</p>
			<div
				class="flex flex-col lg:relative lg:mt-[100px] lg:flex-row lg:justify-between lg:gap-[30px]">
				<div
					class="absolute left-1/2 mt-[92px] h-[1011px] w-2 -translate-x-1/2 bg-primary-cyan lg:hidden" />
				<div
					class="absolute top-[44%] hidden h-2 w-full bg-primary-cyan lg:block"></div>
				<article
					class="relative mt-[92px] rounded-[5px] bg-white px-8 pb-[41px] lg:mt-0 lg:h-fit">
					<img
						class="mx-auto -mt-11 lg:ml-0 lg:mr-auto"
						src="../assets/brand-recognition.svg"
						alt="Brand Recognition Icon" />
					<h1
						class="mt-[33px] text-center text-[22px] font-bold leading-[33px] text-neutral-darkestBlue lg:text-start">
						Brand Recognition
					</h1>
					<p
						class="mt-3 text-center text-[15px] font-medium leading-[26px] text-neutral-grayishViolet lg:max-w-[286px] lg:text-start">
						Boost your brand recognition with each click. Generic
						links don’t mean a thing. Branded links help instil
						confidence in your content.
					</p>
				</article>
				<article
					class="relative mt-[92px] rounded-[5px] bg-white px-8 pb-[41px] lg:mt-11 lg:h-fit">
					<img
						class="mx-auto -mt-11 lg:ml-0 lg:mr-auto"
						src="../assets/detailed-records.svg"
						alt="Detailed Records Icon" />
					<h1
						class="mt-[33px] text-center text-[22px] font-bold leading-[33px] text-neutral-darkestBlue lg:text-start">
						Detailed Records
					</h1>
					<p
						class="mt-3 text-center text-[15px] font-medium leading-[26px] text-neutral-grayishViolet lg:max-w-[286px] lg:text-start">
						Gain insights into who is clicking your links. Knowing
						when and where people engage with your content helps
						inform better decisions.
					</p>
				</article>
				<article
					class="lg:mt-22 relative mt-[92px] rounded-[5px] bg-white px-8 pb-[41px] lg:h-fit">
					<img
						class="mx-auto -mt-11 lg:ml-0 lg:mr-auto"
						src="../assets/fully-customizable.svg"
						alt="Fully Customizable Icon" />

					<h1
						class="mt-[33px] text-center text-[22px] font-bold leading-[33px] text-neutral-darkestBlue lg:text-start">
						Fully Customizable
					</h1>
					<p
						class="mt-3 text-center text-[15px] font-medium leading-[26px] text-neutral-grayishViolet lg:max-w-[286px] lg:text-start">
						Improve brand awareness and content discoverability
						through customizable links, supercharging audience
						engagement.
					</p>
				</article>
			</div>
		</section>
		<section
			class="bg-primary-darkViolet bg-[url('./assets/bg-boost-mobile.svg')] bg-right-top bg-no-repeat py-[90px] pl-9 pr-[35px] lg:bg-[url('./assets/bg-boost-desktop.svg')] lg:px-[165px] lg:py-[57px]">
			<h1
				class="mx-auto w-fit text-center text-[28px] font-bold leading-[48px] -tracking-[0.7px] text-white lg:text-[40px] lg:leading-[48px] lg:-tracking-[1px]">
				Boost your links today
			</h1>
			<button
				class="mx-auto mt-4 block rounded-[28px] bg-primary-cyan px-10 pb-3 pt-[14px] text-xl font-bold leading-[30px] text-white hover:bg-primary-lightCyan active:bg-primary-lightestCyan lg:mt-8">
				Get Started
			</button>
		</section>
	</main>
</template>
