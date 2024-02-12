<script setup lang="ts">
import type { Grade } from "~/types/Grade";
import { getFullName } from "~/types/Teacher";

import { grades } from "~/utils/grades";

const currentGrade = ref(<Grade>{});
</script>

<template>
	<UButton
		@click="currentGrade = <Grade>{}"
		:class="!currentGrade.id ? 'opacity-100' : 'opacity-70'"
		label="Все"
	/>
	<UButtonGroup>
		<UButton
			v-for="grade in grades"
			@click="currentGrade = grade"
			:class="currentGrade.id === grade.id ? 'opacity-100' : 'opacity-70'"
			class="text-xs"
			size="sm"
			:label="grade.title"
		/>
	</UButtonGroup>

	<UCard
		v-if="currentGrade.id"
		v-for="teacher in teachers.filter(
			(teach) => teach.grade.id === currentGrade.id,
		)"
	>
		<template #header>
			<p class="text-xl font-black">{{ getFullName(teacher) }}</p>
		</template>
		<p class="opacity-70">{{ teacher.grade.title }}</p>
	</UCard>
	<UCard v-else v-for="teacher in teachers">
		<template #header>
			<p class="text-xl font-black">{{ getFullName(teacher) }}</p>
		</template>
		<p class="opacity-70">{{ teacher.grade.title }}</p>
	</UCard>
</template>

<style scoped></style>
