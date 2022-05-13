<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
</script>
<template>
	<div
		bg="[#f4f2f1] dark:[#38342e]"
		text="dark:white"
		w="screen"
		h="min-screen"
		font="subpixel-antialiased"
		border="accent t-8"
		class="border-accent"
		display="flex"
		flex="col"
	>
		<div p="x-5 md:x-14" w="max-5xl full" m="x-auto" h="min-[75vh]">
			<Header />
			<main role="main" p="y-8">
				<div space="y-4" p="b-32">
					<p class="caption" text="left">
						{{ useRouter().currentRoute.value.meta.caption || route.name }}
					</p>
					<div>
						<RouterView :class="useRouter().currentRoute.value.meta.contentClass" />
					</div>
				</div>
			</main>
		</div>
		<Footer flex="shrink-0 grow" />
	</div>
</template>
<style>
.override-content.markdown-body > * {
	@apply inline;
	@apply font-normal;
}

.override-content.markdown-body > *:not(:first-child)::before {
	content: ' ';
}
.override-content.markdown-body h1 {
	@apply font-bold;
}

.override-content.markdown-body > * {
	@apply text-2xl md:text-[2rem];
}

.markdown-body > * {
	@apply prose-2xl;
}

.markdown-body > * {
	@apply text-left;
	@apply !leading-relaxed !tracking-tight;
}
.markdown-body em {
	@apply not-italic;
	@apply underline decoration-accent;
	@apply accent;
}
.markdown-body a {
	@apply hover:text-accent;
	@apply underline decoration-accent;
	@apply decoration-gray-400;
	@apply hover:decoration-accent;
}
.markdown-body > * li {
	@apply !mt-2;
}
</style>
