<script setup lang="ts">
import type { PropType } from "vue";
import type { NavigationLink } from "~/types/NavigationLink";

const props = defineProps({
	link: {
		type: Object as PropType<NavigationLink>,
		required: true,
	},
});
</script>

<template>
	<ULink
		class="flex gap-2 items-center p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-xl"
		:to="link.to"
		target="_blank"
	>
		<UIcon :name="link.icon" dynamic />
		{{ link.label }}
	</ULink>
</template>

<style scoped></style>
