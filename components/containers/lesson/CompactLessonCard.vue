<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "~/types/schedule/Lesson";

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
</script>

<template>
	<UCard
		v-if="lesson.subject"
		:ui="{
			body: { padding: 'px-3 py-3 sm:p-3' },
			header: { padding: 'px-3 py-3 sm:p-3' },
			footer: { padding: 'px-3 py-3 sm:p-3' },
		}"
	>
		<div class="grid gap-1">
			<div
				:class="'text-' + lesson.type.color + '-400'"
				class="flex items-center gap-2"
			>
				<UIcon :name="lesson.type.icon" />
				<p class="font-extrabold">
					{{ lesson.subject.shortName ?? lesson.subject.title }}
				</p>
			</div>
			<p class="opacity-70">{{ lesson.room }}</p>
		</div>
		<template #footer v-if="lesson.subject.distantLink !== undefined">
			<ULink
				class="underline"
				target="_blank"
				:to="lesson.subject.distantLink.link"
			>
				{{ lesson.subject.distantLink.type }}
			</ULink>
		</template>
	</UCard>
	<UCard
		v-else
		:ui="{
			body: { padding: 'px-3 py-3 sm:p-3' },
			header: { padding: 'px-3 py-3 sm:p-3' },
			footer: { padding: 'px-3 py-3 sm:p-3' },
		}"
	>
		<div class="flex gap-2 items-center">
			<UIcon name="i-heroicons-bell-snooze-solid" class="w-7 h-7" />
			<p class="font-black">Пары нет</p>
		</div>
	</UCard>
</template>

<style scoped></style>
