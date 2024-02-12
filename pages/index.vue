<script setup lang="ts">
import { firstSchedule, secondSchedule } from "~/utils/data";
import { getNumberOfDay, isCurrentWeekEven } from "~/utils/dateFunctions";
import WeekNavigation from "~/components/navigation/WeekNavigation.vue";

const currentSchedule = isCurrentWeekEven() ? firstSchedule : secondSchedule;
const currentDay =
	getNumberOfDay() >= 0 || getNumberOfDay() <= 4
		? currentSchedule.days[getNumberOfDay()]
		: null;

const currentTime = ref(new Date());

// Create a function to format the time nicely
// const formatTime = (date: Date) => {
// 	return date.toLocaleTimeString("ru-RU", {
// 		hour: "2-digit",
// 		minute: "2-digit",
// 	});
// };

let interval;

onBeforeMount(() => {
	interval = setInterval(() => {
		currentTime.value = new Date();
	}, 1000);
});

onUnmounted(() => clearInterval(interval));

const currentLessonIndex = computed(() => {
	if (!currentDay) return null;

	for (let i = 0; i < currentDay.length; i++) {
		const lessonStart = new Date().setHours(
			...timeMapper[i].start.split(":").map(Number),
		);
		const lessonEnd = new Date().setHours(
			...timeMapper[i].end.split(":").map(Number),
		);

		if (currentTime.value >= lessonStart && currentTime.value < lessonEnd) {
			return i;
		}
	}

	return null;
});

const nextLessonIndex = computed(() => {
	if (!currentDay || !currentLessonIndex.value) return null;

	return currentLessonIndex.value + 1 < currentDay.length
		? currentLessonIndex.value + 1
		: null;
});

const nextLesson = computed(() => {
	if (!nextLessonIndex.value) return null;

	return {
		name:
			currentDay[nextLessonIndex.value]?.subject.shortName ||
			`Lesson ${Number(nextLessonIndex.value) + 1}`,
		...timeMapper[nextLessonIndex.value],
	};
});

const timeUntilNextLesson = computed(() => {
	if (!nextLesson.value) return null;

	const lessonStart = new Date().setHours(
		...nextLesson.value.start.split(":").map(Number),
	);

	const diff = lessonStart - currentTime.value.getTime();
	const hours = Math.floor(diff / (1000 * 60 * 60));
	const minutes = Math.floor((diff / (1000 * 60)) % 60);

	return { hours, minutes };
});

const timeUntilCurrentLessonEnds = computed(() => {
	if (currentLessonIndex.value === null) return null;

	const lessonEnd = new Date().setHours(
		...timeMapper[currentLessonIndex.value].end.split(":").map(Number),
	);

	const diff = lessonEnd - currentTime.value.getTime();
	const hours = Math.floor(diff / (1000 * 60 * 60));
	const minutes = Math.floor((diff / (1000 * 60)) % 60);

	return { hours, minutes };
});
</script>

<template>
	<ClientOnly>
		<UDivider />
		<div class="flex gap-8 items-center">
			<div v-if="timeUntilCurrentLessonEnds" class="flex gap-1 flex-col">
				<p class="font-bold text-sm opacity-70">Конец пары</p>
				<p class="font-black text-xl">
					{{ timeUntilCurrentLessonEnds.hours }} ч.
					{{ timeUntilCurrentLessonEnds.minutes }} мин.
				</p>
				<UProgress
					:value="
						60 * timeUntilCurrentLessonEnds.hours +
						timeUntilCurrentLessonEnds.minutes
					"
					:max="90"
				/>
			</div>
			<div v-if="timeUntilNextLesson" class="flex gap-1 flex-col">
				<p class="font-bold text-sm opacity-70">
					{{ nextLesson.name }} через
				</p>
				<p class="font-black text-xl">
					{{ timeUntilNextLesson.hours }} ч.
					{{ timeUntilNextLesson.minutes }} мин.
				</p>
			</div>
			<div v-else class="flex gap-2 items-center opacity-70">
				<UIcon name="i-heroicons-bell-slash" class="w-5 h-5" />
				<p class="font-bold text-md">Пары нет</p>
			</div>
		</div>

		<UDivider />

		<UTabs :items="scheduleTabs" class="mt-4">
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
						<WeekNavigation />
						<DayCard
							v-for="(day, index) in firstSchedule.days"
							:key="index"
							:day="day"
							:index="index"
						/>
					</div>
					<div
						v-else-if="tabItem.key === 'odd-week'"
						key="odd-week"
						class="flex flex-col gap-8"
					>
						<WeekNavigation />
						<DayCard
							v-for="(day, index) in secondSchedule.days"
							:key="index"
							:day="day"
							:index="index"
						/>
					</div>
				</div>
			</template>
		</UTabs>
	</ClientOnly>
</template>

<style scoped></style>
