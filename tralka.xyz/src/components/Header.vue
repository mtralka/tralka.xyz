<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { headerItems } from '~/composables/navigationItems.ts';
import { useRoute } from 'vue-router';
const isDark = useDark();
const toggleDark = useToggle(isDark);
const route = useRoute();
</script>
<template>
	<header p="t-8 md:t-16" m="b-16" display="flex" align="items-center">
		<RouterLink to="/" flex="shrink-0 grow-0" aria-label="Navigate home">
			<i-ic-twotone-sailing text="4xl accent" />
		</RouterLink>
		<nav flex="grow">
			<ul display="flex" justify="end" space="x-1 md:x-2" text="sm md:lg" font="semi">
				<li v-for="item in headerItems" :key="item.name">
					<RouterLink
						:to="item.path"
						border="b-1 md:b-2"
						:class="[route.name === item.name ? 'border-accent' : 'border-transparent hover:border-gray-300']"
						p="y-2 x-1 md:2"
						class="cursor-pointer capitalize"
					>
						{{ item.name }}
					</RouterLink>
				</li>
			</ul>
		</nav>
		<button m="l-8" @click="toggleDark()" aria-label="Toggle dark mode">
			<div>
				<i-ic-outline-dark-mode v-if="isDark" />
				<i-ic-outline-wb-sunny v-else />
			</div>
		</button>
	</header>
</template>
