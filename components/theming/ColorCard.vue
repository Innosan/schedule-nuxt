<script setup lang="ts">
import type { PropType } from "vue";
import type { Color } from "~/types/utility/Color";

const props = defineProps({
	color: {
		type: Object as PropType<Color>,
		required: true,
	},
	currentColor: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<UBadge
		@click="color.click()"
		:class="
			currentColor === color.label
				? 'opacity-100'
				: ' opacity-50 bg-opacity-10'
		"
		class="cursor-pointer bg-opacity-70 flex gap-2 items-center transition-all"
	>
		<span class="circle" :class="color.className"></span>
		<p>
			{{ color.label.charAt(0).toUpperCase() + color.label.slice(1) }}
		</p>
	</UBadge>
</template>
