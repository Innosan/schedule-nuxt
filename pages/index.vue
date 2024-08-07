<script setup lang="ts">
import {
	getDaysUntilExamSession,
	getNumberOfDay,
	isCurrentWeekEven,
} from "~/utils/dateFunctions";
import { groups } from "~/types/Group";
const settingsStore = useSettingsStore();
const currentGroup =
	groups.find((group) => group.id === settingsStore.groupNumber) || groups[0];

const currentSchedule = isCurrentWeekEven()
	? currentGroup.evenSchedule
	: currentGroup.oddSchedule;

const currentNumberOfDay = getNumberOfDay();
const currentDay =
	currentNumberOfDay >= 0 || currentNumberOfDay <= 4
		? currentSchedule.days[currentNumberOfDay]
		: null;

const nextNumberOfDay = currentNumberOfDay + 1;

const blockToShow = ref("day");

const route = useRoute();
</script>

<template>
	<div class="flex flex-col gap-3" v-if="settingsStore.showSchedule">
		<UDivider />

		<LessonTimer
			:current-schedule="currentSchedule"
			:current-day="currentDay"
		/>

		<ClosestLessons
			:is-even-week="isCurrentWeekEven()"
			:current-day-index="currentNumberOfDay"
			:current-group="currentGroup"
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
			<div
				v-if="blockToShow === 'day'"
				key="day"
				class="flex flex-col gap-6"
			>
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
					<UCard
						:ui="{
							body: { padding: 'px-3 py-3 sm:p-3' },
							header: { padding: 'px-3 py-3 sm:p-3' },
							footer: { padding: 'px-3 py-3 sm:p-3' },
						}"
					>
						<template #header>
							<p class="opacity-70 font-bold">На завтра</p>
						</template>
						<DayCard
							v-if="currentNumberOfDay < 4"
							:day="currentSchedule.days[nextNumberOfDay]"
							:key="nextNumberOfDay"
							:index="nextNumberOfDay"
							:show-day="false"
						/>
						<p v-else class="font-black">Пар нет</p>
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
					:schedule="currentGroup.evenSchedule"
				/>
				<ScheduleList
					v-else-if="settingsStore.scheduleDisplay === 'list'"
					:schedule="currentGroup.evenSchedule"
				/>
				<ScheduleTable
					v-else-if="settingsStore.scheduleDisplay === 'table'"
					:schedule="currentGroup.evenSchedule"
				/>
			</div>
			<div
				v-else-if="blockToShow === 'odd-week'"
				key="odd-week"
				class="flex flex-col gap-8"
			>
				<ScheduleAccordeon
					v-if="settingsStore.scheduleDisplay === 'accordion'"
					:schedule="currentGroup.oddSchedule"
				/>
				<ScheduleList
					v-else-if="settingsStore.scheduleDisplay === 'list'"
					:schedule="currentGroup.oddSchedule"
				/>
				<ScheduleTable
					v-else-if="settingsStore.scheduleDisplay === 'table'"
					:schedule="currentGroup.oddSchedule"
				/>
			</div>
		</div>
		<div class="flex flex-col gap-1 rounded-lg p-3 ring-1 ring-gray-700">
			<p class="opacity-70">до сессии</p>
			<p class="text-2xl font-black">
				{{ getDaysUntilExamSession() }}
				дней
			</p>
		</div>
	</div>
	<div v-else>
		<UAlert
			class="overflow-y-hidden"
			description="Начались каникулы (или вы просто так решили) и на этот период расписание скрывается. Если хотите показывать его всегда, есть кнопочка в настройках!"
			title="Расписание скрыто!"
			icon="i-heroicons-exclamation-circle-20-solid"
			:actions="[
				{
					variant: 'outline',
					color: 'primary',
					label: 'Открыть настройки',
					click: () => navigateTo('/settings'),
				},
			]"
		/>
	</div>
</template>
