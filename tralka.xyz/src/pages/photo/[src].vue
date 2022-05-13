<script setup lang="ts">
import { getPhotoURL } from '~/composables/usePhotoURL.ts';
const props = defineProps<{
	src: string;
}>();
</script>

<template>
	<div w="full" h="full" p="10" display="flex" justify="center">
		<img :src="getPhotoURL(src)" class="object-cover" />
	</div>
</template>
<route lang="yaml">
name: Photo
meta:
  header: false
  footer: false
</route>
