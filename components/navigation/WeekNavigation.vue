<script setup lang="ts">
const route = useRoute();
</script>

<template>
	<div
		class="week-nav flex w-fit backdrop-blur-md self-center justify-evenly gap-8 bg-opacity-50 shadow-md flex-wrap sticky bottom-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 z-10"
	>
		<NavDayCard
			v-for="day in dayMapper"
			:day="day"
			:key="day.number"
			:index="day.number"
		/>
	</div>
</template>

<style scoped></style>
