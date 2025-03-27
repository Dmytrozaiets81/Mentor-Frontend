<script setup>
	import { ref } from "vue"
	const navModal = ref(false)
</script>

<template>
	<header>
		<nav
			class="relative mx-6 mt-10 flex items-center justify-between lg:ml-[167px] lg:mr-[165px] lg:mt-12">
			<a
				href="#"
				class="lg:self-end">
				<h1>
					<img
						src="../assets/logo.svg"
						alt="heading" />
				</h1>
			</a>
			<div
				class="relative ml-[41.43px] mr-auto hidden items-center gap-[32px] text-[15px] font-bold text-neutral-grayishViolet lg:flex lg:leading-normal">
				<a
					href="#"
					class="hover:text-neutral-darkestBlue"
					>Features</a
				>
				<a
					href="#"
					class="hover:text-neutral-darkestBlue"
					>Pricing</a
				>
				<a
					href="#"
					class="hover:text-neutral-darkestBlue"
					>Resources</a
				>
			</div>

			<div class="hidden items-center gap-[37px] lg:flex">
				<a
					href="#"
					class="text-[15px] font-bold text-neutral-grayishViolet lg:leading-normal"
					>Login</a
				>
				<button
					class="rounded-[28px] bg-primary-cyan pb-[8px] pl-6 pr-[23px] pt-[9px] text-[15px] font-bold leading-normal text-white hover:bg-primary-lightCyan active:bg-primary-lightestCyan lg:block">
					Sign Up
				</button>
			</div>
			<div
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
						class="rounded-[28px] bg-primary-cyan pb-[9px] pt-[12px] text-lg font-bold leading-[27px] text-white hover:bg-primary-lightCyan active:bg-primary-lightestCyan">
						Sign Up
					</button>
				</ul>
			</div>
			<button
				@click="navModal = !navModal"
				class="lg:hidden">
				<img
					src="../assets/hamburger.svg"
					alt="menu icon" />
			</button>
		</nav>
	</header>
</template>
