<script setup lang="ts"></script>

<template>
	<div
		class="flex gap-2 shadow-md flex-wrap sticky top-4 p-4 rounded-xl border-2 bg-gray-100 border-gray-300 dark:bg-gray-800 dark:border-gray-700 z-10"
	>
		<NuxtLink class="text-xs" v-for="day in dayMapper" :to="'#' + day.id">
			{{ day.title }}
		</NuxtLink>
	</div>
</template>

<style scoped></style>
