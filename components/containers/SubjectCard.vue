<script setup lang="ts">
import type { PropType } from "vue";
import type { Subject } from "~/types/Subject";

const props = defineProps({
	subject: {
		type: Object as PropType<Subject>,
		required: true,
	},
});

const evenLessons = computed(() => {
	let counter = 0;
	evenSchedule.days.forEach((day) => {
		day.forEach((lesson) => {
			if (lesson.subject?.id === props.subject.id) counter++;
		});
	});

	return counter;
});

const oddLessons = computed(() => {
	let counter = 0;
	oddSchedule.days.forEach((day) => {
		day.forEach((lesson) => {
			if (lesson.subject?.id === props.subject?.id) counter++;
		});
	});

	return counter;
});
</script>

<template>
	<UCard>
		<template #header>
			<div class="flex gap-2 items-center">
				<p class="font-black md:text-xl">{{ subject.title }}</p>
				<p class="opacity-70 text-sm">{{ subject.shortName }}</p>
			</div>
		</template>
		<div class="flex gap-12">
			<div class="flex flex-col">
				<p class="opacity-70">Всего</p>
				<p class="font-bold text-2xl">
					{{ (evenLessons + oddLessons) * 2 }} ч.
				</p>
			</div>
			<div class="flex flex-col">
				<p class="opacity-70">Пары</p>
				<div class="flex gap-2 items-center text-xl">
					<p class="font-bold">{{ evenLessons }}</p>
					<UDivider orientation="vertical" label="&" />
					<p class="font-bold">{{ oddLessons }}</p>
				</div>
			</div>
		</div>
		<template #footer>
			<div
				class="flex gap-4 overflow-x-auto pb-3 scroll-auto overscroll-y-auto"
			>
				<TeacherCard
					v-for="teacher in teachers.filter(
						(teach) => teach.subjects[0].id === subject.id,
					)"
					:teacher="teacher"
				/>
			</div>
		</template>
	</UCard>
</template>

<style scoped></style>
