<script setup lang="ts">
import { oddSchedule } from "~/utils/oddSchedule";
import { evenSchedule } from "~/utils/evenSchedule";

import { getNumberOfDay, isCurrentWeekEven } from "~/utils/dateFunctions";

const currentSchedule = isCurrentWeekEven() ? evenSchedule : oddSchedule;
const currentDay =
	getNumberOfDay() >= 0 || getNumberOfDay() <= 4
		? currentSchedule.days[getNumberOfDay()]
		: null;

const route = useRoute();
</script>

<template>
	<ClientOnly>
		<UDivider />
		<LessonTimer
			:current-schedule="currentSchedule"
			:current-day="currentDay"
		/>
		<UDivider />

		<UTabs
			:items="scheduleTabs"
			@change="route.hash ? navigateTo('/') : null"
			class="mt-4"
		>
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
				<div>
					<div v-if="tabItem.key === 'day'" class="mt-4">
						<DayCard
							v-if="currentDay"
							:day="currentDay"
							:key="getNumberOfDay()"
							:index="getNumberOfDay()"
							:show-day="false"
						/>
						<UCard
							v-else
							:ui="{
								body: { padding: 'px-3 py-3 sm:p-3' },
								header: { padding: 'px-3 py-3 sm:p-3' },
								footer: { padding: 'px-3 py-3 sm:p-3' },
							}"
						>
							<div class="flex gap-2 items-center">
								<UIcon
									name="i-heroicons-bell-snooze-solid"
									class="w-7 h-7"
								/>
								<p class="font-black">Пар нет</p>
							</div>
						</UCard>
					</div>
					<div
						v-else-if="tabItem.key === 'even-week'"
						key="even-week"
						class="flex flex-col gap-8"
					>
						<DayCard
							v-for="(day, index) in evenSchedule.days"
							:key="index"
							:day="day"
							:index="index"
						/>
						<WeekNavigation />
					</div>
					<div
						v-else-if="tabItem.key === 'odd-week'"
						key="odd-week"
						class="flex flex-col gap-8"
					>
						<DayCard
							v-for="(day, index) in oddSchedule.days"
							:key="index"
							:day="day"
							:index="index"
						/>
						<WeekNavigation />
					</div>
				</div>
			</template>
		</UTabs>
	</ClientOnly>
</template>

<style scoped></style>
