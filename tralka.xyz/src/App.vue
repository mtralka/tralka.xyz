<template>
	<div overflow="x-hidden">
		<RouterView />
	</div>
</template>

<style>
#app {
	font-family: 'Inter', sans-serif;
}

.caption {
	@apply text-[#6d655a] dark:text-[#a59d92];
	@apply uppercase text-[.75rem];
	@apply leading-6 tracking-[0.2em];
}

.tooltip label:hover::before {
	content: 'test';
	font-family: Roboto, -apple-system, sans-serif;
	text-transform: capitalize;
	font-size: 11px;
	position: absolute;
	top: 170%;
	left: 0;
	right: 0;
	opacity: 0.75;
	background-color: #323232;
	color: #fff;
	padding: 4px;
	border-radius: 3px;
	display: block;
}

.tooltip {
	@apply relative;
}

.tooltip:before {
	content: attr(data-tooltip);
	visibility: hidden;
	transition: opacity 0.4s;
	border-color: #09172167 transparet transparent transparent;
	@apply absolute  bg-gray-700 text-center
    @apply p-2 rounded-md m-l-[-60px];
	@apply bottom-[125%] left-[50%];
}

.tooltip:hover:before,
.tooltip:hover:after {
	opacity: 1;
	visibility: visible;
	@apply text-white text-xs;
}
</style>
