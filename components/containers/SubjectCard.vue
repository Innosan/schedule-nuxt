<script setup lang="ts">
import type { PropType } from "vue";
import type { Subject } from "~/types/schedule/Subject";
import TitledItem from "~/components/containers/TitledItem.vue";

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
	<UCard :ui="cardSizes.medium" class="overflow-y-clip h-min">
		<template #header>
			<p class="font-black truncate md:text-xl">
				{{ subject.title }}
			</p>
		</template>
		<div class="flex gap-12">
			<TitledItem
				title="Всего"
				:content="((evenLessons + oddLessons) * 2).toString() + ' ч.'"
			/>
			<TitledItem
				title="Пары"
				:content="
					evenLessons === 0 && oddLessons === 0
						? 'Пар нет'
						: `${evenLessons} + ${oddLessons}`
				"
			/>
		</div>
		<template #footer>
			<div
				class="flex gap-4 overflow-x-auto scroll-auto overscroll-y-auto"
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
