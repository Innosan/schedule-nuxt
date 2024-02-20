<script setup lang="ts">
import { oddSchedule } from "~/utils/oddSchedule";
import { evenSchedule } from "~/utils/evenSchedule";
import { getNumberOfDay, isCurrentWeekEven } from "~/utils/dateFunctions";
import WeekNavigation from "~/components/navigation/WeekNavigation.vue";
import type { Lesson } from "~/types/Lesson";

const currentSchedule = isCurrentWeekEven() ? evenSchedule : oddSchedule;
const currentDay =
	getNumberOfDay() >= 0 || getNumberOfDay() <= 4
		? currentSchedule.days[getNumberOfDay()]
		: null;

const currentTime = ref(new Date());
let interval;

function getCurrentAndNextLesson(currentTime: Date) {
	const currentDay = getNumberOfDay();
	if (currentDay < 0 || currentDay > 4) return {};
	const lessons = currentSchedule.days[currentDay];
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
		currentTime.getHours().toString() +
			currentTime.getMinutes().toString() >=
		"1730";

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
	}, 1000);
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

const route = useRoute();
</script>

<template>
	<ClientOnly>
		<UDivider />
		<div
			v-if="!timedLessons.dayEnd && currentDay"
			class="flex gap-8 items-center"
		>
			<div v-if="timedLessons.currentLesson" class="flex gap-1 flex-col">
				<p class="font-bold text-sm opacity-70">Конец пары</p>
				<p class="font-black text-xl">
					{{
						Math.floor(timedLessons.timeUntilCurrentLessonEnds / 60)
					}}
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

		<UDivider />

		<UTabs
			:items="scheduleTabs"
			@change="route.hash ? navigateTo('/') : null"
			class="mt-4"
		>
			<template
				#default="{ item, index, selected }"
				:class="selected ? 'bg-primary-500' : ''"
			>
				<div class="flex items-center gap-2 relative truncate">
					<span class="font-bold">{{ item.label }}</span>

					<span
						v-if="selected"
						class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
					/>
				</div>
			</template>
			<template #item="{ item: tabItem }">
				<div>
					<div v-if="tabItem.key === 'day'" class="mt-4">
						<DayCard
							v-if="currentDay"
							:day="currentDay"
							:key="getNumberOfDay()"
							:index="getNumberOfDay()"
							:show-day="false"
						/>
						<UCard
							v-else
							:ui="{
								body: { padding: 'px-3 py-3 sm:p-3' },
								header: { padding: 'px-3 py-3 sm:p-3' },
								footer: { padding: 'px-3 py-3 sm:p-3' },
							}"
						>
							<div class="flex gap-2 items-center">
								<UIcon
									name="i-heroicons-bell-snooze-solid"
									class="w-7 h-7"
								/>
								<p class="font-black">Пар нет</p>
							</div>
						</UCard>
					</div>
					<div
						v-else-if="tabItem.key === 'even-week'"
						key="even-week"
						class="flex flex-col gap-8"
					>
						<DayCard
							v-for="(day, index) in evenSchedule.days"
							:key="index"
							:day="day"
							:index="index"
						/>
						<WeekNavigation />
					</div>
					<div
						v-else-if="tabItem.key === 'odd-week'"
						key="odd-week"
						class="flex flex-col gap-8"
					>
						<DayCard
							v-for="(day, index) in oddSchedule.days"
							:key="index"
							:day="day"
							:index="index"
						/>
						<WeekNavigation />
					</div>
				</div>
			</template>
		</UTabs>
	</ClientOnly>
</template>

<style scoped></style>
