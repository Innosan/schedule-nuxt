<script setup lang="ts">
import type { PropType } from "vue";
import type { Lesson } from "~/types/Lesson";
import { getFullName, getShortName } from "~/types/Teacher";
import { timeMapper } from "~/utils/dateFunctions";
import LessonInfoField from "~/components/containers/LessonInfoField.vue";

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
		<template #header>
			<div class="grid gap-1 md:gap-3">
				<div
					:class="'text-' + lesson.type.color + '-400'"
					class="flex items-center gap-2"
				>
					<UIcon :name="lesson.type.icon" />
					<p class="font-extrabold">
						{{ lesson.subject.shortName ?? lesson.subject.title }}
					</p>
				</div>
				<div class="flex gap-3 flex-col">
					<div class="flex gap-4">
						<LessonInfoField
							icon="i-heroicons-clock"
							:value="
								timeMapper[index].start +
								' - ' +
								timeMapper[index].end
							"
						/>
						<LessonInfoField
							v-if="lesson.additionalGroups !== undefined"
							icon="i-heroicons-plus-solid"
							:value="lesson.additionalGroups"
						/>
					</div>
					<div>
						<LessonInfoField
							icon="i-heroicons-arrow-right-end-on-rectangle"
							:value="lesson.room"
						/>
					</div>
				</div>
			</div>
		</template>
		<div class="w-max flex gap-4 items-center">
			<TeacherCard
				v-for="teacher in lesson.teachers"
				:teacher="teacher"
			/>
			<ULink
				v-if="lesson.subject.distantLink !== undefined"
				class="underline"
				target="_blank"
				:to="lesson.subject.distantLink"
			>
				Курс
			</ULink>
		</div>
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
