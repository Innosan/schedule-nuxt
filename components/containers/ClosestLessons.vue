<script setup lang="ts">
import type { Group } from "~/types/Group";
import type { PropType } from "vue";

const props = defineProps({
	isEvenWeek: {
		type: Boolean,
		required: true,
	},
	currentDayIndex: {
		type: Number,
		required: true,
	},
	currentGroup: {
		type: Object as PropType<Group>,
		required: true,
	},
});
const showClosestLessons = ref(false);

const subjectsWithNextLesson = computed(() => {
	return subjects.map((subject) => {
		const daysUntilNextLesson = calculateDaysUntilNextLesson(subject.id);
		return {
			...subject,
			daysUntilNextLesson,
		};
	});
});

function calculateDaysUntilNextLesson(subjectId: number): number {
	let daysUntilNextLesson = -1;
	let dayOffset = 0;
	let found = false;

	for (let weekOffset = 0; weekOffset < 2; weekOffset++) {
		const schedule =
			weekOffset % 2 === (props.isEvenWeek ? 0 : 1)
				? props.currentGroup.evenSchedule
				: props.currentGroup.oddSchedule;
		for (let dayIndex = 0; dayIndex < schedule.days.length; dayIndex++) {
			const day =
				schedule.days[
					(props.currentDayIndex + dayIndex) % schedule.days.length
				];
			dayOffset = weekOffset * 7 + dayIndex;
			if (
				day.some(
					(lesson) =>
						lesson.subject && lesson.subject.id === subjectId,
				)
			) {
				found = true;
				break;
			}
		}
		if (found) break;
	}

	daysUntilNextLesson = found ? dayOffset : -1;
	return daysUntilNextLesson;
}
</script>

<template>
	<UButton
		@click="showClosestLessons = !showClosestLessons"
		label="Найти ближайшую пару"
		variant="solid"
		color="gray"
		leading-icon="i-heroicons-sparkles-solid"
		size="lg"
	/>

	<UModal v-model="showClosestLessons">
		<UCard>
			<template #header>
				<div class="flex justify-between items-start gap-2">
					<h2 class="text-lg font-semibold">Ближайшие пары</h2>

					<UButton
						color="gray"
						variant="ghost"
						icon="i-heroicons-x-mark-20-solid"
						class="-my-1"
						@click="showClosestLessons = false"
					/>
				</div>
			</template>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-2">
				<div
					v-for="subject in subjectsWithNextLesson.sort(
						(a, b) => a.daysUntilNextLesson - b.daysUntilNextLesson,
					)"
					:key="subject.id"
					class="flex flex-col gap-1 ring-1 ring-gray-800 p-2 rounded-md"
				>
					<p class="opacity-70 text-xs">
						{{ subject.shortName ?? subject.title }}
					</p>
					<p class="font-bold">
						{{
							subject.daysUntilNextLesson === 0
								? "сегодня"
								: subject.daysUntilNextLesson === 1
								  ? "завтра"
								  : subject.daysUntilNextLesson === -1
								    ? "не найдено"
								    : subject.daysUntilNextLesson + " дня"
						}}
					</p>
				</div>
			</div>
		</UCard>
	</UModal>
</template>
