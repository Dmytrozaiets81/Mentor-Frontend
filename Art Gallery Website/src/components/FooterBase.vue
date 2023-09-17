<script setup>
	defineProps(["color"])
</script>
<template>
	<div
		class="flex flex-col px-8 py-12 gap-[38px] w-full md:flex-row md:pl-[39px] md:pr-10 md:py-14 md:justify-between md:items-start md:gap-0 lg:px-[165px] lg:py-20"
		:class="{
			'bg-fem-almostBlack': color === 'black',
			'bg-fem-gold': color === 'gold',
		}">
		<img
			src="/src/assets/logo-light.svg"
			alt="logo-light"
			class="w-[159.572px]"
			:class="{
				block: color === 'black',
				hidden: color === 'gold',
			}" /><img
			src="/src/assets/logo-dark.svg"
			alt="logo-dark"
			class="w-fit"
			:class="{
				hidden: color === 'black',
				block: color === 'gold',
			}" />
		<p
			class="bodyS text-base leading-[26px] md:w-[281px] lg:w-[430px] md:ml-[64.95px] md:mr-[133px] lg:ml-[140.43px] lg:mr-[280px] lg:text-[18px] lg:leading-[28px] lg:font-light"
			:class="{
				'text-white': color === 'black',
				'text-fem-almostBlack': color === 'gold',
			}">
			The Modern Art Gallery is free to all visitors and open seven days a
			week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
		</p>
		<div
			class="w-[102px] md:w-[100px] justify-between"
			:class="{
				flex: color === 'black',
				hidden: color === 'gold',
			}">
			<img
				src="/src/assets/icon-facebook.svg"
				alt="icon-facebook" />
			<img
				src="/src/assets/icon-instagram.svg"
				alt="icon-instgram" />
			<img
				src="/src/assets/icon-twitter.svg"
				alt="icon-twitter" />
		</div>
		<div
			class="w-[102px] justify-between"
			:class="{
				hidden: color === 'black',
				flex: color === 'gold',
			}">
			<img
				src="/src/assets/icon-facebook-dark.svg"
				alt="icon-facebook-dark" />
			<img
				src="/src/assets/icon-instagram-dark.svg"
				alt="icon-instgram-dark" />
			<img
				src="/src/assets/icon-twitter-dark.svg"
				alt="icon-twitter-dark" />
		</div>
	</div>
</template>
