<script setup lang="ts">
import type { PropType } from "vue";
import type { Schedule } from "~/types/schedule/Schedule";

import { dayMapper } from "~/utils/dateFunctions";
import { getNumberOfLessons } from "~/types/schedule/Day";

const props = defineProps({
	schedule: {
		type: Object as PropType<Schedule>,
		required: true,
	},
});

const scheduleAccordion = [
	{
		label: dayMapper[1].title,
		icon: dayMapper[1].icon,
		id: 1,
	},
	{
		label: dayMapper[2].title,
		icon: dayMapper[2].icon,
		id: 2,
	},
	{
		label: dayMapper[3].title,
		icon: dayMapper[3].icon,
		id: 3,
	},
	{
		label: dayMapper[4].title,
		icon: dayMapper[4].icon,
		id: 4,
	},
	{
		label: dayMapper[5].title,
		icon: dayMapper[5].icon,
		id: 5,
	},
];
</script>

<template>
	<UAccordion :items="scheduleAccordion" type="multiple">
		<template #leading="{ item, open }">
			<div
				class="w-6 h-6 rounded-md bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1"
			>
				<UIcon
					:name="item.icon"
					class="w-4 h-4 text-white dark:text-gray-900"
				/>
			</div>
		</template>

		<template #default="{ item, open }">
			<p
				class="hover:opacity-90 hover:bg-gray-800 rounded-lg font-bold p-2"
				:class="[open && 'bg-gray-800']"
			>
				{{ item.label }} •
				{{
					getNumberOfLessons(
						schedule.days[item.id - 1].filter(
							(lesson) => lesson.subject.id !== -1,
						),
					)
				}}
				пары
			</p>
		</template>

		<template #trailing="{ open }">
			<UIcon
				name="i-heroicons-chevron-right-20-solid"
				class="w-5 h-5 ms-auto transform transition-transform duration-200"
				:class="[open && 'rotate-90']"
			/>
		</template>

		<template #content="{ item }">
			<DayCard
				class="p-1"
				:day="schedule.days[item.id - 1]"
				:show-day="false"
				:key="item.id"
				:index="item.id"
			/>
		</template>
	</UAccordion>
</template>
