<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
	color: {
		type: Object as PropType<{ label: string; click: () => void }>,
		required: true,
	},
	currentColor: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div
		@click="color.click()"
		:class="
			currentColor === color.label
				? 'opacity-100 border-opacity-60'
				: 'border-opacity-10 opacity-50'
		"
		class="cursor-pointer border-opacity-10 border-gray-600 flex gap-2 items-center hover:border-opacity-30 hover:opacity-70 transition-all border-2 dark:border-opacity-10 dark:border-white p-1.5 rounded-xl"
	>
		<span class="circle" :class="`bg-${color.label}-500`"></span>
		<p>
			{{ color.label.charAt(0).toUpperCase() + color.label.slice(1) }}
		</p>
	</div>
</template>
