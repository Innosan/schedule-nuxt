<script setup lang="ts"></script>

<template>
	<div
		class="flex gap-2 shadow-md flex-wrap sticky top-4 p-4 rounded-xl bg-gray-100 dark:bg-gray-800 z-10"
	>
		<NuxtLink class="text-xs" v-for="day in dayMapper" :to="'/#' + day.id">
			{{ day.title }}
		</NuxtLink>
	</div>
</template>

<style scoped></style>
