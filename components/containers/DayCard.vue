<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "~/types/schedule/Lesson";
import { dayMapper } from "~/utils/dateFunctions";

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
	</div>
</template>

<style scoped></style>
