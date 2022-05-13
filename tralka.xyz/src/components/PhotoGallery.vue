<script setup lang="ts">
import { getPhotoURL } from '~/composables/usePhotoURL.ts';

export interface iPhotos {
	src: string;
	alt?: string;
}

const props = defineProps<{
	photos: Array<iPhotos>;
}>();
</script>

<template>
	<ResponsiveGrid as="div">
		<RouterLink v-for="photo in photos" :key="photo.src" :to="`/photo/${photo.src}`" aria-label="Click for fullscreen">
			<img
				:src="getPhotoURL(photo.src)"
				:alt="photo.alt"
				class="rounded-md object-contain"
				loading="lazy"
				grid="col-span-1"
			/>
		</RouterLink>
	</ResponsiveGrid>
</template>
