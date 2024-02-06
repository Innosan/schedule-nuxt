<script setup lang="ts">
import { firstSchedule, secondSchedule } from "~/utils/data";
import { getNumberOfDay, isCurrentWeekEven } from "~/utils/dateFunctions";

const currentSchedule = isCurrentWeekEven() ? firstSchedule : secondSchedule;
const currentDay = currentSchedule.days[getNumberOfDay()];
const currentLesson = currentDay;
</script>

<template>
	<UTabs :items="scheduleTabs" class="mt-4">
		<template
			#default="{ item, index, selected }"
			:class="selected ? 'bg-primary-500' : ''"
		>
			<div class="flex items-center gap-2 relative truncate">
				<span class="font-bold">{{ item.label }}</span>

				<span
					v-if="selected"
					class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400"
				/>
			</div>
		</template>
		<template #item="{ item: tabItem }">
			<div v-if="tabItem.key === 'day'" class="mt-4">
				<DayCard
					:day="currentDay"
					:index="getNumberOfDay()"
					:show-day="false"
				/>
			</div>
			<div v-else-if="tabItem.key === 'week'" class="flex flex-col gap-8">
				<DayCard
					v-for="(day, index) in currentSchedule.days"
					:key="index"
					:day="day"
					:index="index"
				/>
			</div>
		</template>
	</UTabs>
</template>

<style scoped></style>
