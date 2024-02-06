<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "~/types/Lesson";
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
	<div class="flex gap-3 flex-col">
		<h2 v-if="showDay" class="font-black text-xl">
			{{ dayMapper[index + 1] }}
		</h2>
		<div class="flex gap-2 flex-col">
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
