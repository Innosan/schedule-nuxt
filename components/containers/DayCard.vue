<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "~/types/schedule/Lesson";
import { dayMapper } from "~/utils/dateFunctions";
import { dropChanceMapper, emptySweat, type Sweat } from "~/types/Sweat";

const props = defineProps({
	index: {
		type: Number,
		required: true,
	},
	day: {
		type: Array as PropType<Lesson[]>,
		required: true,
	},
	showDay: {
		type: Boolean,
		default: true,
	},
});

const sweatyStore = useSweatyStore();
const settingsStore = useSettingsStore();

const dayDropChance = computed(() => {
	const sweatyDay: Sweat[] = props.day?.map((lesson) => {
		if (lesson.subject.id !== -1)
			return sweatyStore.userSweatness[lesson.subject.id];
		else return emptySweat;
	});

	let sweatRating = 0;

	sweatyDay.forEach((sw) => {
		if (sw.sweatRating !== 0)
			sweatRating += dropChanceMapper[sw.sweatRating];
	});

	return sweatRating;
});
</script>

<template>
	<div class="flex gap-3 flex-col" :id="dayMapper[index + 1].id">
		<h2 v-if="showDay" class="font-black text-xl">
			{{ dayMapper[index + 1].title }}
		</h2>
		<div class="flex 2xl:grid 2xl:grid-cols-4 gap-2 flex-col">
			<LessonCard
				v-for="(lesson, lessonIndex) in day"
				:lesson="lesson"
				:index="lessonIndex"
				:key="lessonIndex"
			/>
		</div>
		<UProgress
			v-if="settingsStore.showDropChance"
			:value="dayDropChance"
			:max="100"
			indicator
		/>
	</div>
</template>

<style scoped></style>
