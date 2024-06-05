<script setup lang="ts">
const props = defineProps({
	minCols: {
		type: Number,
		default: 1,
	},
	maxCols: {
		type: Number,
		default: 4,
	},
	spacing: {
		type: Number,
		default: 4,
	},
});
</script>

<template>
	<div
		:class="`grid grid-cols-${minCols} xl:grid-cols-${maxCols} gap-${spacing}`"
		v-auto-animate
	>
		<slot />
	</div>
</template>
