<script setup lang="ts">
interface iProps {
	as: string;
}

const props = defineProps<iProps>();
</script>

<template>
	<component :is="as" display="grid" grid="cols-1 md:cols-2 lg:cols-3 gap-5" w="full" h="full">
		<slot> </slot>
	</component>
</template>
