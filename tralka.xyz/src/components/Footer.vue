<script setup lang="ts">
import { footerItems } from '~/composables/navigationItems.ts';
import { useClipboard } from '@vueuse/core';
import { ref } from 'vue';
import footerLinks from '~/content/footerLinks.json';
import contactInfo from '~/content/contactInfo.json';

const source = ref(contactInfo.email);
const { text, copy, copied, isSupported } = useClipboard({ source });
</script>

<template>
	<footer w="full" h="min-52 md:min-72 md:min-92" bg="dark:[#2a2722] [#e8e6e3]" p="x-4 md:x-8 b-8 t-16">
		<div display="grid" grid="cols-2 md:cols-4 gap-y-10 md:gap-8" justify="center" p="x-8 md:x-22">
			<section grid="col-span-1" display="flex" flex="col" align="items-center">
				<div space="y-8">
					<h3 class="caption" w="full">Site</h3>
					<ul space="y-1" text="sm base">
						<li v-for="item in footerItems" :key="item.name" p="1" text="capitalize">
							<RouterLink :to="item.path" class="hover:text-accent cursor-pointer">
								{{ item.name }}
							</RouterLink>
						</li>
					</ul>
				</div>
			</section>
			<section grid="col-span-1" display="flex" flex="col" align="items-center">
				<div space="y-8">
					<h3 class="caption" w="full">Links</h3>
					<ul space="y-1" w="full" text="sm md:base">
						<li p="1" text="capitalize hover:accent" class="cursor-pointer" space="x-1" @click="copy()">
							<div class="tooltip" data-tooltip="Click to Copy" display="flex" align="items-center">
								<i-ic-round-content-copy />
								<span> Email </span>
							</div>
						</li>
						<li v-for="item in footerLinks" :key="item.name" p="1" text="capitalize">
							<a :href="item.href" target="_blank" class="hover:text-accent cursor-pointer">
								{{ item.name }}
							</a>
						</li>
					</ul>
				</div>
			</section>
			<aside grid="col-span-2" display="block" space="y-8" p="">
				<a href="https://kauai.ccmc.gsfc.nasa.gov/DONKI/search/" target="_blank"
					><h3 class="caption" text="center md:left">🛸DONKI Notifications</h3></a
				>
				<DonkiNotifications />
			</aside>
		</div>
	</footer>
</template>
<style scoped>
.caption {
	@apply text-[#6d655a] dark:text-[#a59d92];
}
.contact-list > li:not(:first-child)::before {
	content: '\00a0\00B7\00a0';
}
</style>
