<script setup lang="ts">
import { firstSchedule, secondSchedule } from "~/utils/data";
import { getNumberOfDay, isCurrentWeekEven } from "~/utils/dateFunctions";

const currentSchedule = isCurrentWeekEven() ? firstSchedule : secondSchedule;
const currentDay =
	getNumberOfDay() >= 0 || getNumberOfDay() <= 4
		? currentSchedule.days[getNumberOfDay()]
		: null;
const currentLesson = currentDay;
</script>

<template>
	<ClientOnly>
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
							v-for="(day, index) in firstSchedule.days"
							:key="index"
							:day="day"
							:index="index"
						/>
					</div>
					<div
						v-else-if="tabItem.key === 'odd-week'"
						key="odd-week"
						class="flex flex-col gap-8"
					>
						<DayCard
							v-for="(day, index) in secondSchedule.days"
							:key="index"
							:day="day"
							:index="index"
						/>
					</div>
				</div>
			</template>
		</UTabs>
	</ClientOnly>
</template>

<style scoped></style>
