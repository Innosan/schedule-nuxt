<script setup lang="ts">
import type { PropType } from "vue";
import type { Subject } from "~/types/schedule/Subject";
import { groups } from "~/types/Group";

const settingsStore = useSettingsStore();

const currentGroup =
	groups.find((group) => group.id === settingsStore.groupNumber) || groups[0];

const props = defineProps({
	subject: {
		type: Object as PropType<Subject>,
		required: true,
	},
});

const evenLessons = computed(() => {
	let counter = 0;
	currentGroup.evenSchedule.days.forEach((day) => {
		day.forEach((lesson) => {
			if (lesson.subject?.id === props.subject.id) counter++;
		});
	});

	return counter;
});

const oddLessons = computed(() => {
	let counter = 0;
	currentGroup.oddSchedule.days.forEach((day) => {
		day.forEach((lesson) => {
			if (lesson.subject?.id === props.subject?.id) counter++;
		});
	});

	return counter;
});
</script>

<template>
	<UCard>
		<template #header>
			<p class="font-black truncate md:text-xl">
				{{ subject.title }}
			</p>
		</template>
		<div class="flex gap-12">
			<TitledItem
				title="Всего"
				:content="((evenLessons + oddLessons) * 2).toString() + ' ч.'"
			/>
			<TitledItem
				title="Пары"
				:content="
					evenLessons === 0 && oddLessons === 0
						? 'Пар нет'
						: `${evenLessons} + ${oddLessons}`
				"
			/>
		</div>
	</UCard>
</template>
