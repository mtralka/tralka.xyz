<script setup lang="ts">
import { getNASANotifications, iNotification } from '~/api/nasa';
import { useTimeAgo } from '@vueuse/core';
import Markdown from 'vue3-markdown-it';

const notifications: Ref<Array<iNotification> | null> = ref(null);

onMounted(async () => {
	const data = await getNASANotifications();
	notifications.value = data.slice(0, 30);
	console.log('inside', notifications);
});

const parseBody = (body: string): string => {
	const value = body.match(/(?<=Summary:\s*).*?(?=\s*Links|##)/gs);
	return value[0];
};

const parseTime = (time: string): string => {
	return useTimeAgo(new Date(time)).value;
};
</script>

<template>
	<ul h="max-44" overflow="y-scroll x-hidden" space="y-4">
		<li v-for="notification in notifications" :key="notification.messageID">
			<a
				:href="notification.messageURL"
				target="_blank"
				class="sticky top-0"
				bg="dark:[#2a2722] [#e8e6e3]"
				display="flex"
				align="items-center"
				space="x-3"
			>
				<h4 font="bold" text="lg md:xl">{{ notification.messageType }}</h4>
				<p font="italic">{{ parseTime(notification.messageIssueTime) }}</p>
			</a>
			<div space="y-1" font="leading-tight tracking-wider mono sm md:base">
				<Markdown :source="parseBody(notification.messageBody)" linkify id="notifications" />
			</div>
		</li>
	</ul>
</template>
