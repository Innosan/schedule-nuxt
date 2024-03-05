<script setup lang="ts">
import { oddSchedule } from "~/utils/oddSchedule";
import { evenSchedule } from "~/utils/evenSchedule";

import { getNumberOfDay, isCurrentWeekEven } from "~/utils/dateFunctions";

const currentSchedule = isCurrentWeekEven() ? evenSchedule : oddSchedule;

const currentNumberOfDay = getNumberOfDay();
const currentDay =
	currentNumberOfDay >= 0 || currentNumberOfDay <= 4
		? currentSchedule.days[currentNumberOfDay]
		: null;

const blockToShow = ref("day");
</script>

<template>
	<div class="flex flex-col gap-3">
		<UDivider />

		<LessonTimer
			:current-schedule="currentSchedule"
			:current-day="currentDay"
		/>

		<UDivider />

		<UButtonGroup size="xs">
			<UButton
				leading-icon="i-heroicons-sun-solid"
				:color="blockToShow === 'day' ? 'primary' : 'gray'"
				@click="blockToShow = 'day'"
			>
				День
			</UButton>
			<UButton
				leading-icon="i-heroicons-hand-thumb-up-solid"
				:color="blockToShow === 'even-week' ? 'primary' : 'gray'"
				@click="blockToShow = 'even-week'"
			>
				Четная неделя
			</UButton>
			<UButton
				leading-icon="i-heroicons-hand-thumb-down-solid"
				:color="blockToShow === 'odd-week' ? 'primary' : 'gray'"
				@click="blockToShow = 'odd-week'"
			>
				Нечетная неделя
			</UButton>
		</UButtonGroup>
		<div v-auto-animate>
			<div v-if="blockToShow === 'day'" key="day">
				<ClientOnly>
					<DayCard
						v-if="currentDay"
						:day="currentDay"
						:key="currentNumberOfDay"
						:index="currentNumberOfDay"
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
				</ClientOnly>
			</div>
			<div
				v-else-if="blockToShow === 'even-week'"
				key="even-week"
				class="flex flex-col gap-8"
			>
				<ScheduleAccordeon :schedule="evenSchedule" />
			</div>
			<div
				v-else-if="blockToShow === 'odd-week'"
				key="odd-week"
				class="flex flex-col gap-8"
			>
				<ScheduleAccordeon :schedule="oddSchedule" />
			</div>
		</div>
	</div>
</template>
