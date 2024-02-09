<script setup lang="ts">
const props = defineProps({
	icon: {
		type: String,
		required: true,
	},
	value: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="flex gap-2 items-center">
		<UIcon :name="icon" />
		<a v-if="type === 'email'" :href="'mailto:' + value">{{ value }}</a>
		<a v-else :href="'tel:' + value">{{ value }}</a>
	</div>
</template>

<style scoped></style>
