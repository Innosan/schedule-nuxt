<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "~/types/Lesson";

const props = defineProps({
	index: {
		type: Number,
		required: true,
	},
	day: {
		type: Array as PropType<Lesson[]>,
		required: true,
	},
});
</script>

<template>
	<h2>Day {{ index + 1 }}</h2>
	<LessonCard
		v-for="(lesson, lessonIndex) in day"
		:lesson="lesson"
		:key="lessonIndex"
	/>
</template>

<style scoped></style>
