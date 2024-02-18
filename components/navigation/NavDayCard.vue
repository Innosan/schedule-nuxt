<script setup lang="ts">
const props = defineProps({
	day: {
		type: Object,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
});

const route = useRoute();
</script>

<template>
	<NuxtLink
		v-if="index <= 5"
		class="text-xs flex flex-col gap-2 items-center"
		:to="'/#' + day.id"
		:class="
			route.hash.slice(1) === day.id ? 'text-primary-400 opacity-100' : ''
		"
	>
		<UIcon :name="day.icon" dynamic class="w-5 h-5" />
		<span class="font-bold">{{ day.shortName }}</span>
	</NuxtLink>
</template>

<style scoped></style>
