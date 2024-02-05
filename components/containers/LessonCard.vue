<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "~/types/Lesson";
import { getFullName } from "~/types/Teacher";

const props = defineProps({
	lesson: {
		type: Object as PropType<Lesson>,
		required: true,
	},
});
</script>

<template>
	<UCard v-if="lesson.subject">
		<template #header>
			<div class="flex gap-4">
				<p>{{ lesson.subject.title }}</p>
				<p>{{ lesson.type.title }}</p>
			</div>
		</template>
		<p>
			{{ getFullName(lesson.teachers[0]) }}
		</p>
	</UCard>
	<div v-else>
		<p>No lesson</p>
	</div>
</template>

<style scoped></style>
