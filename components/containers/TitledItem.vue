<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="flex flex-col">
		<p class="opacity-70 text-sm">{{ title }}</p>
		<p class="font-bold text-xl">{{ content }}</p>
	</div>
</template>

<style scoped></style>
