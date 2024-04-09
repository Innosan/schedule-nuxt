<template>
	<component
		:is="currentLessonCardComponent"
		:lesson="lesson"
		:index="index"
	/>
</template>

<script setup lang="ts">
import { computed, type PropType } from "vue";
import CompactLessonCard from "./CompactLessonCard.vue";
import DefaultLessonCard from "./DefaultLessonCard.vue";
import type { Lesson } from "~/types/schedule/Lesson";

const settingsStore = useSettingsStore();

const props = defineProps({
	lesson: {
		type: Object as PropType<Lesson>,
		required: true,
	},
	index: {
		type: Number,
		required: true,
	},
});

const currentLessonCardComponent = computed(() => {
	switch (settingsStore.lessonCardState) {
		case "compact":
			return CompactLessonCard;
		default:
			return DefaultLessonCard;
	}
});
</script>
