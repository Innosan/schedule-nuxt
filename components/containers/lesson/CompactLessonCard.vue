<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "~/types/schedule/Lesson";
import { getShortName } from "~/types/schedule/Teacher";

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
		v-if="lesson.subject.id !== -1"
		class="select-none"
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
			<div class="flex opacity-70 flex-wrap gap-1 text-xs">
				<p class="truncate max-w-36 sm:max-w-full hover:max-w-full">
					{{ lesson.room }}
				</p>

				•

				<p class="truncate" v-for="teacher in lesson.teachers">
					{{ getShortName(teacher) }}
				</p>

				<div
					class="flex gap-1 items-center"
					v-if="lesson.additionalGroups"
				>
					•

					<p class="truncate">
						{{ lesson.additionalGroups }}
					</p>
				</div>
			</div>
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
		class="select-none"
		:ui="{
			body: { padding: 'px-3 py-3 sm:p-3' },
			header: { padding: 'px-3 py-3 sm:p-3' },
			footer: { padding: 'px-3 py-3 sm:p-3' },
		}"
	>
		<div class="flex gap-2 items-center">
			<UIcon name="i-heroicons-bell-snooze-solid" class="w-7 h-7" />
			<p class="font-black">Окно</p>
		</div>
	</UCard>
</template>
