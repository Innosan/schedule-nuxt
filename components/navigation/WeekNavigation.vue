<script setup lang="ts">
const route = useRoute();
</script>

<template>
	<div
		class="week-nav flex w-fit backdrop-blur-md self-center justify-evenly gap-8 bg-opacity-50 shadow-md flex-wrap sticky bottom-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 z-10"
	>
		<NuxtLink
			class="text-xs flex flex-col gap-2 items-center"
			v-for="day in dayMapper"
			:to="'/#' + day.id"
			:class="
				route.hash.slice(1) === day.id
					? 'text-primary-400 opacity-100'
					: ''
			"
		>
			<UIcon :name="day.icon" dynamic class="w-5 h-5" />
			<span class="font-bold">{{ day.shortName }}</span>
		</NuxtLink>
	</div>
</template>

<style scoped></style>
