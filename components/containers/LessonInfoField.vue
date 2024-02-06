<script setup lang="ts">
const props = defineProps({
	value: {
		type: String,
		required: true,
	},
	tooltip: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<UTooltip :text="tooltip">
		<div
			class="flex gap-2 w-max items-center bg-gray-200 dark:bg-gray-800 p-1 px-2 rounded-xl opacity-70 hover:opacity-100 transition-all"
		>
			<UIcon class="w-4 h-4" :name="icon" />

			<p class="text-sm">
				{{ value }}
			</p>
		</div>
	</UTooltip>
</template>

<style scoped></style>
