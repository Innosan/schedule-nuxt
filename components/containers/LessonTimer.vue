<script setup lang="ts">
import { getNumberOfDay, setTime } from "~/utils/dateFunctions";
import type { PropType } from "vue";
import type { Schedule } from "~/types/Schedule";

import { timeMapper } from "~/utils/dateFunctions";
import type { Day } from "~/types/Day";

const props = defineProps({
	currentSchedule: {
		type: Object as PropType<Schedule>,
		required: true,
	},
	currentDay: {
		type: Object as PropType<Day>,
	},
});

const currentTime = ref(new Date());
// currentTime.value = setTime(3, 40);
let interval;

function getCurrentAndNextLesson(currentTime: Date) {
	const currentDay = getNumberOfDay();

	if (currentDay < 0 || currentDay > 4) return {};

	const lessons = props.currentSchedule.days[currentDay];

	let currentLesson = null;
	let nextLesson = null;

	let timeUntilCurrentLessonEnds = null;
	let timeUntilNextLesson = null;

	for (let i = 0; i < Object.keys(timeMapper).length; i++) {
		// Skip if the lesson is a gap
		if (Object.keys(lessons[i]).length === 0) continue;

		const lessonStart = new Date(currentTime);
		lessonStart.setHours(parseInt(timeMapper[i].start.split(":")[0]));
		lessonStart.setMinutes(parseInt(timeMapper[i].start.split(":")[1]));

		const lessonEnd = new Date(currentTime);
		lessonEnd.setHours(parseInt(timeMapper[i].end.split(":")[0]));
		lessonEnd.setMinutes(parseInt(timeMapper[i].end.split(":")[1]));

		if (currentTime >= lessonStart && currentTime <= lessonEnd) {
			currentLesson = lessons[i];
			nextLesson = lessons[i + 1] || null;
			timeUntilCurrentLessonEnds = Math.floor(
				(lessonEnd.getTime() - currentTime.getTime()) / 60000,
			); // in minutes
			if (nextLesson) {
				const nextLessonStart = new Date(currentTime);
				nextLessonStart.setHours(
					parseInt(timeMapper[i + 1].start.split(":")[0]),
				);
				nextLessonStart.setMinutes(
					parseInt(timeMapper[i + 1].start.split(":")[1]),
				);
				timeUntilNextLesson = Math.floor(
					(nextLessonStart.getTime() - currentTime.getTime()) / 60000,
				); // in minutes
			}
			break;
		} else if (currentTime < lessonStart) {
			nextLesson = lessons[i];
			timeUntilNextLesson = Math.floor(
				(lessonStart.getTime() - currentTime.getTime()) / 60000,
			); // in minutes
			break;
		} else if (
			i === Object.keys(timeMapper).length - 1 &&
			currentTime > lessonEnd
		) {
			currentLesson = lessons[i];
			nextLesson = null;
			timeUntilCurrentLessonEnds = Math.floor(
				(lessonEnd.getTime() - currentTime.getTime()) / 60000,
			); // in minutes
			break;
		}
	}

	const dayEnd =
		currentTime.getHours() > 17 ||
		(currentTime.getHours() === 17 && currentTime.getMinutes() >= 30);

	return {
		dayEnd,
		currentLesson,
		nextLesson,
		timeUntilCurrentLessonEnds,
		timeUntilNextLesson,
	};
}

onBeforeMount(() => {
	interval = setInterval(() => {
		currentTime.value = new Date();
		// currentTime.value = setTime(3, 40);
	}, 60000);
});

onUnmounted(() => clearInterval(interval));

const timedLessons = computed(() => {
	const {
		dayEnd,
		currentLesson,
		nextLesson,
		timeUntilCurrentLessonEnds,
		timeUntilNextLesson,
	} = getCurrentAndNextLesson(currentTime.value);

	return {
		dayEnd,
		currentLesson,
		nextLesson,
		timeUntilCurrentLessonEnds,
		timeUntilNextLesson,
	};
});
</script>

<template>
	<div
		v-if="!timedLessons.dayEnd && currentDay"
		class="flex gap-8 items-center"
	>
		<div v-if="timedLessons.currentLesson" class="flex gap-1 flex-col">
			<p class="font-bold text-sm opacity-70">Конец пары</p>
			<p class="font-black text-xl">
				{{ Math.floor(timedLessons.timeUntilCurrentLessonEnds / 60) }}
				ч. {{ timedLessons.timeUntilCurrentLessonEnds % 60 }} мин.
			</p>
			<UMeter
				:value="timedLessons.timeUntilCurrentLessonEnds"
				:max="90"
			/>
		</div>
		<div
			v-if="
				timedLessons.nextLesson !== null &&
				Object.keys(timedLessons.nextLesson).length !== 0
			"
			class="flex gap-1 flex-col"
		>
			<p class="font-bold text-sm opacity-70">
				{{
					timedLessons.nextLesson.subject.shortName ??
					timedLessons.nextLesson.subject.title
				}}
				через
			</p>
			<p class="font-black text-xl">
				{{ Math.floor(timedLessons.timeUntilNextLesson / 60) }}
				ч. {{ timedLessons.timeUntilNextLesson % 60 }} мин.
			</p>
		</div>
		<div v-else class="flex gap-2 items-center opacity-70">
			<UIcon
				name="i-material-symbols-alarm-off-outline-rounded"
				class="w-5 h-5"
				dynamic
			/>
			<p class="font-bold text-md">Пары нет</p>
		</div>
	</div>
	<div v-else class="flex gap-2 items-center opacity-70">
		<UIcon
			name="i-material-symbols-alarm-off-outline-rounded"
			class="w-5 h-5"
			dynamic
		/>
		<p class="font-bold text-md">Пары нет</p>
	</div>
</template>

<style scoped></style>
