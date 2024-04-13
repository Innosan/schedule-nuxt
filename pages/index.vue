<script setup lang="ts">
import { oddSchedule } from "~/utils/oddSchedule";
import { evenSchedule } from "~/utils/evenSchedule";

import {
	getDaysUntilExamSession,
	getNumberOfDay,
	isCurrentWeekEven,
} from "~/utils/dateFunctions";
import ScheduleList from "~/components/containers/schedule/ScheduleList.vue";
import { getNumberOfLessons } from "~/types/schedule/Day";

const currentSchedule = isCurrentWeekEven() ? evenSchedule : oddSchedule;

const currentNumberOfDay = getNumberOfDay();
const currentDay =
	currentNumberOfDay >= 0 || currentNumberOfDay <= 4
		? currentSchedule.days[currentNumberOfDay]
		: null;

const blockToShow = ref("day");
const settingsStore = useSettingsStore();

const route = useRoute();
</script>

<template>
	<div class="flex flex-col gap-3">
		<UDivider />

		<LessonTimer
			:current-schedule="currentSchedule"
			:current-day="currentDay"
		/>

		<UDivider />

		<UButtonGroup size="xs" @click="route.hash ? navigateTo('/') : null">
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
				<ScheduleAccordeon
					v-if="settingsStore.scheduleDisplay === 'accordion'"
					:schedule="evenSchedule"
				/>
				<ScheduleList
					v-else-if="settingsStore.scheduleDisplay === 'list'"
					:schedule="evenSchedule"
				/>
				<ScheduleTable
					v-else-if="settingsStore.scheduleDisplay === 'table'"
					:schedule="evenSchedule"
				/>
			</div>
			<div
				v-else-if="blockToShow === 'odd-week'"
				key="odd-week"
				class="flex flex-col gap-8"
			>
				<ScheduleAccordeon
					v-if="settingsStore.scheduleDisplay === 'accordion'"
					:schedule="oddSchedule"
				/>
				<ScheduleList
					v-else-if="settingsStore.scheduleDisplay === 'list'"
					:schedule="oddSchedule"
				/>
				<ScheduleTable
					v-else-if="settingsStore.scheduleDisplay === 'table'"
					:schedule="oddSchedule"
				/>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4">
			<div
				v-if="currentDay"
				class="flex flex-col gap-1 rounded-lg p-3 ring-1 ring-gray-700"
			>
				<p class="opacity-70 text-sm">завтра</p>
				<p class="text-xl font-black">
					{{
						getNumberOfLessons(
							currentSchedule.days[getNumberOfDay() + 1],
						)
					}}
					пары
				</p>
			</div>
			<div
				class="flex flex-col gap-1 rounded-lg p-3 ring-1 ring-gray-700"
			>
				<p class="opacity-70">до сессии</p>
				<p class="text-2xl font-black">
					{{ getDaysUntilExamSession() }}
					дней
				</p>
			</div>
		</div>
	</div>
</template>
