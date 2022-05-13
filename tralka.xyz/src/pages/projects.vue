<script setup lang="ts">
import { useHead } from '@vueuse/head';
import projects from '~/content/projects.json';

const photos = [{ src: 'MatthewAloft.webp', alt: '' }];

useHead({
	title: 'Projects - Matthew Tralka',
});
</script>

<template>
	<section p="">
		<ol display="grid" grid="col cols-1 md:cols-2 gap-x-8 gap-y-11">
			<li v-for="(project, index) in projects" :key="project.name" grid="span-1" list="zero-decimal inside">
				<article space="y-2" h="min-52">
					<h2 text="base 2xl" font="bold">
						{{ project.name }}
					</h2>
					<p w="full" text="lg">
						{{ project.description }}
					</p>
					<ul display="flex" class="project-list" text="lg">
						<li v-for="[name, link] in Object.entries(project.links)" :key="link">
							<a :href="link" target="_blank" class="underline decoration-accent">{{ name }}</a>
						</li>
					</ul>
				</article>
			</li>
		</ol>
	</section>
</template>
<style scoped>
.project-list > li:not(:first-child)::before {
	content: '\00a0\00a0\00B7\00a0\00a0';
}
ol > li::marker {
	display: inline;
}
</style>
