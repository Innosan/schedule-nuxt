<script setup lang="ts">
import type { PropType } from "vue";
import type { Schedule } from "~/types/Schedule";

import { dayMapper } from "~/utils/dateFunctions";
import { getNumberOfLessons } from "../../../types/Day";

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
	<UAccordion :items="scheduleAccordion" multiple>
		<template #default="{ item, index, open }">
			<UButton
				color="gray"
				variant="ghost"
				class="my-1 border-2 border-opacity-0 dark:border-opacity-0 border-black dark:border-white transition-all"
				:class="
					open
						? 'border-opacity-10 dark:border-opacity-10'
						: 'border-opacity-0'
				"
				:ui="{
					padding: { sm: 'p-3' },
				}"
			>
				<template #leading>
					<div
						class="w-6 h-6 rounded-md bg-primary-500 dark:bg-primary-400 flex items-center justify-center -my-1"
					>
						<UIcon
							dynamic
							:name="item.icon"
							class="w-4 h-4 text-white dark:text-gray-900"
						/>
					</div>
				</template>

				<span class="truncate font-black mx-2"
					>{{ item.label }} •
					{{ getNumberOfLessons(schedule.days[item.id - 1]) }} пары
				</span>

				<template #trailing>
					<UIcon
						name="i-heroicons-chevron-right-20-solid"
						class="w-5 h-5 ms-auto transform transition-transform duration-200"
						:class="[open && 'rotate-90']"
					/>
				</template>
			</UButton>
		</template>
		<template #item="{ item }">
			<DayCard
				:day="schedule.days[item.id - 1]"
				:show-day="false"
				:key="item.id"
				:index="item.id"
			/>
		</template>
	</UAccordion>
</template>

<style scoped></style>
