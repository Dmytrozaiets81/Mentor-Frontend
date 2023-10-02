<script setup>
	import { ref, reactive } from "vue"

	const navModal = ref(false)
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
	<header class="relative flex items-center justify-between px-6 pt-10">
		<h1>
			<img
				src="./assets/logo.svg"
				alt="heading" />
		</h1>
		<button @click="navModal = !navModal">
			<img
				src="./assets/hamburger.svg"
				alt="menu icon" />
		</button>
		<nav
			v-if="navModal"
			class="absolute inset-x-0 -bottom-[23.33px] mx-4 translate-y-full rounded-[10px] bg-primary-darkViolet px-6 py-10">
			<ul
				class="flex flex-col gap-[30px] text-center text-lg font-bold leading-[27px] text-white">
				<li>Features</li>
				<li>Pricing</li>
				<li
					class="border-b border-neutral-grayishViolet border-opacity-25 pb-[30px]">
					Resources
				</li>
				<li>Login</li>
				<button
					class="active:bg-primary-lightestCyan rounded-[28px] bg-primary-cyan pb-[9px] pt-[12px] text-lg font-bold leading-[27px] text-white hover:bg-primary-lightCyan">
					Sign Up
				</button>
			</ul>
		</nav>
	</header>
	<main>
		<section class="mt-[23px] overflow-hidden px-6">
			<img
				src="./assets/illustration-working3.svg"
				alt="illustration working"
				class="-mr-6 ml-auto max-w-none" />
			<h1
				class="mt-[37px] text-center text-[42px] font-bold leading-[48px] -tracking-[1.05px] text-neutral-darkestBlue">
				More than just shorter links
			</h1>
			<p
				class="mt-[15px] text-center text-lg font-medium leading-[30px] tracking-[0.123px] text-neutral-grayishViolet">
				Build your brand’s recognition and get detailed insights on how
				your links are performing.
			</p>
			<button
				class="active:bg-primary-lightestCyan mx-auto mt-8 block rounded-[28px] bg-primary-cyan px-10 pb-3 pt-[14px] text-xl font-bold leading-[30px] text-white hover:bg-primary-lightCyan">
				Get Started
			</button>
		</section>
		<section class="relative mt-[88px] px-6">
			<div
				class="w-full rounded-[10px] bg-primary-darkViolet bg-[url('./assets/bg-shorten-mobile.svg')] bg-right-top bg-no-repeat p-6">
				<form @submit.prevent="handleShortenLink">
					<input
						id="shorten"
						type="url"
						v-model="shortenInput"
						class="peer w-full rounded-[5px] border-none py-[6px] pl-4 text-base font-medium leading-9 tracking-[0.12px] text-neutral-darkestBlue invalid:ring-primary-red focus:outline-none focus:ring-4 focus:ring-primary-cyan"
						pattern="https?://.+"
						placeholder="Shorten a link here..." />
					<p
						class="mt-1 hidden text-xs font-medium italic leading-[18px] tracking-[0.082px] text-primary-red peer-invalid:block">
						Please add a link
					</p>
					<button
						type="submit"
						class="active:bg-primary-lightestCyan mx-auto mt-4 block w-full rounded-[5px] bg-primary-cyan pb-[10px] pt-[11px] text-lg font-bold leading-[27px] text-white hover:bg-primary-lightCyan">
						Shorten It!
					</button>
				</form>
			</div>
		</section>
		<section class="bg-neutral-lightGray -mt-20 px-6 pb-20 pt-20">
			<div
				v-for="link in shortedLinks"
				class="mt-6 flex flex-col rounded-[5px] bg-white pb-4">
				<span
					class="truncate border-b-2 px-4 py-[6px] text-base font-medium leading-9 tracking-[0.12px] text-neutral-darkestBlue">
					{{ link.link }}
				</span>

				<span
					class="mx-4 mt-[6px] text-base font-medium leading-9 tracking-[0.12px] text-primary-cyan"
					>{{ link.short }}</span
				>
				<button
					@click="handleCopy(link)"
					class="active:bg-primary-lightestCyan ml-4 mr-4 mt-2 rounded-[5px] bg-primary-cyan pb-[10px] pt-[11px] text-lg font-bold leading-[27px] text-white hover:bg-primary-lightCyan"
					:class="{ 'bg-primary-darkViolet': link.copy }">
					{{ link.copy ? "Copied!" : "Copy" }}
				</button>
			</div>
			<h1
				class="mt-20 text-center text-[28px] font-bold leading-[48px] -tracking-[0.7px] text-neutral-darkestBlue">
				Advanced Statistics
			</h1>
			<p class="mt-4 text-center text-neutral-grayishViolet">
				Track how your links are performing across the web with our
				advanced statistics dashboard.
			</p>
			<div class="flex flex-col">
				<div
					class="absolute left-1/2 mt-[92px] h-[1011px] w-2 -translate-x-1/2 bg-primary-cyan" />
				<article class="relative mt-[92px] bg-white px-8 pb-[41px]">
					<img
						class="mx-auto -mt-11"
						src="./assets/brand-recognition.svg"
						alt="Brand Recognition Icon" />
					<h1
						class="mt-[33px] text-center text-[22px] font-bold leading-[33px] text-neutral-darkestBlue">
						Brand Recognition
					</h1>
					<p
						class="mt-3 text-center text-[15px] font-medium leading-[26px] text-neutral-grayishViolet">
						Boost your brand recognition with each click. Generic
						links don’t mean a thing. Branded links help instil
						confidence in your content.
					</p>
				</article>
				<article class="relative mt-[92px] bg-white px-8 pb-[41px]">
					<img
						class="mx-auto -mt-11"
						src="./assets/detailed-records.svg"
						alt="Detailed Records Icon" />
					<h1
						class="mt-[33px] text-center text-[22px] font-bold leading-[33px] text-neutral-darkestBlue">
						Detailed Records
					</h1>
					<p
						class="mt-3 text-center text-[15px] font-medium leading-[26px] text-neutral-grayishViolet">
						Gain insights into who is clicking your links. Knowing
						when and where people engage with your content helps
						inform better decisions.
					</p>
				</article>
				<article class="relative mt-[92px] bg-white px-8 pb-[41px]">
					<img
						class="mx-auto -mt-11"
						src="./assets/fully-customizable.svg"
						alt="Fully Customizable Icon" />

					<h1
						class="mt-[33px] text-center text-[22px] font-bold leading-[33px] text-neutral-darkestBlue">
						Fully Customizable
					</h1>
					<p
						class="mt-3 text-center text-[15px] font-medium leading-[26px] text-neutral-grayishViolet">
						Improve brand awareness and content discoverability
						through customizable links, supercharging audience
						engagement.
					</p>
				</article>
			</div>
		</section>
		<section
			class="bg-primary-darkViolet bg-[url('./assets/bg-boost-mobile.svg')] bg-right-top bg-no-repeat py-[90px] pl-9 pr-[35px]">
			<h1
				class="text-center text-[28px] font-bold leading-[48px] -tracking-[0.7px] text-white">
				Boost your links today
			</h1>
			<button
				class="active:bg-primary-lightestCyan mx-auto mt-4 block rounded-[28px] bg-primary-cyan px-10 pb-3 pt-[14px] text-xl font-bold leading-[30px] text-white hover:bg-primary-lightCyan">
				Get Started
			</button>
		</section>
	</main>
	<footer class="bg-neutral-darkestViolet pb-14 pt-[54px]">
		<nav class="flex flex-col items-center gap-[38px]">
			<h1 class="mb-[11.33px]">
				<img
					src="./assets/logo-white.svg"
					alt="heading" />
			</h1>
			<article>
				<h1
					class="text-center text-base font-bold -tracking-[0.25px] text-white">
					Features
				</h1>
				<ul
					class="mt-[22px] flex flex-col gap-[10px] text-center text-[15px] font-medium leading-[23px] -tracking-[0.234px] text-neutral-gray">
					<li><a href="#">Link Shortening</a></li>
					<li><a href="#">Branded Links</a></li>
					<li><a href="#">Analytics</a></li>
				</ul>
			</article>
			<article>
				<h1
					class="text-center text-base font-bold -tracking-[0.25px] text-white">
					Resources
				</h1>
				<ul
					class="mt-[22px] flex flex-col gap-[10px] text-center text-[15px] font-medium leading-[23px] -tracking-[0.234px] text-neutral-gray">
					<li><a href="#">Blog</a></li>
					<li><a href="#">Developers</a></li>
					<li><a href="#">Support</a></li>
				</ul>
			</article>
			<article>
				<h1
					class="text-center text-base font-bold -tracking-[0.25px] text-white">
					Company
				</h1>
				<ul
					class="mt-[22px] flex flex-col gap-[10px] text-center text-[15px] font-medium leading-[23px] -tracking-[0.234px] text-neutral-gray">
					<li><a href="#">About</a></li>
					<li><a href="#">Our Team</a></li>
					<li><a href="#">Careers</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</article>
			<article class="mt-2 flex gap-5">
				<a href="#">
					<img
						src="./assets/icon-facebook.svg"
						class="h-full w-full"
						alt="facebook icon" />
				</a>
				<a href="#">
					<img
						src="./assets/icon-twitter.svg"
						class="h-[24px]"
						alt="twitter icon" />
				</a>
				<a href="#">
					<img
						src="./assets/icon-pinterest.svg"
						class="h-full w-full"
						alt="pinterest icon" />
				</a>
				<a href="#">
					<img
						src="./assets/icon-instagram.svg"
						class="h-full w-full"
						alt="instagram icon" />
				</a>
			</article>
		</nav>
	</footer>
</template>
