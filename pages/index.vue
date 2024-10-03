<script setup lang="ts">
import {
	getDaysUntilExamSession,
	getNumberOfDay,
	isCurrentWeekEven,
} from "~/utils/dateFunctions";
import { groups } from "~/types/Group";
import ScheduleCard from "~/components/containers/schedule/ScheduleCard.vue";
const settingsStore = useSettingsStore();
const currentGroup = computed(() => {
	return (
		groups.find((group) => group.id === settingsStore.groupNumber) ||
		groups[0]
	);
});

// Remove ! after schedule stabilisation
const currentSchedule = computed(() => {
	return !isCurrentWeekEven()
		? currentGroup.value.evenSchedule
		: currentGroup.value.oddSchedule;
});

const currentNumberOfDay = getNumberOfDay();
const currentDay = computed(() => {
	return currentNumberOfDay >= 0 || currentNumberOfDay <= 4
		? currentSchedule.value.days[currentNumberOfDay]
		: null;
});

const nextNumberOfDay = currentNumberOfDay + 1;

const blockToShow = ref("day");

const route = useRoute();
</script>

<template>
	<div class="flex flex-col gap-3" v-if="settingsStore.showSchedule">
		<ClientOnly>
			<LessonTimer
				:current-schedule="currentSchedule"
				:current-day="currentDay"
			/>
		</ClientOnly>

		<USeparator />

		<UButtonGroup size="sm" @click="route.hash ? navigateTo('/') : null">
			<UButton
				@click="blockToShow = 'day'"
				label="День"
				leading-icon="i-heroicons-sun-solid"
				:color="blockToShow === 'day' ? 'primary' : 'gray'"
				:variant="blockToShow === 'day' ? 'solid' : 'subtle'"
			/>
			<UButton
				@click="blockToShow = 'even-week'"
				label="Чётная"
				leading-icon="i-heroicons-hand-thumb-up-solid"
				:color="blockToShow === 'even-week' ? 'primary' : 'gray'"
				:variant="blockToShow === 'even-week' ? 'solid' : 'subtle'"
			/>
			<UButton
				@click="blockToShow = 'odd-week'"
				label="Нечётная"
				leading-icon="i-heroicons-hand-thumb-down-solid"
				:color="blockToShow === 'odd-week' ? 'primary' : 'gray'"
				:variant="blockToShow === 'odd-week' ? 'solid' : 'subtle'"
			/>
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
					<UCard v-else :ui="cardSizes.sm">
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
				<ScheduleCard :schedule="currentGroup.evenSchedule" />
			</div>
			<div
				v-else-if="blockToShow === 'odd-week'"
				key="odd-week"
				class="flex flex-col gap-8"
			>
				<ScheduleCard :schedule="currentGroup.oddSchedule" />
			</div>
		</div>
		<UDrawer
			title="Дополнительно"
			description="Расписание на завтра и другие рофланы"
		>
			<UButton
				label="Дополнительно"
				color="primary"
				variant="subtle"
				block
				size="xl"
				trailing-icon="i-heroicons-chevron-up-20-solid"
			/>

			<template #body>
				<div class="flex flex-col gap-4">
					<UCard :ui="cardSizes.sm">
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
						<DayCard
							v-if="currentNumberOfDay === 6"
							:day="currentSchedule.days[0]"
							:key="0"
							:index="0"
							:show-day="false"
						/>
					</UCard>

					<UAlert
						variant="soft"
						description="осталось до сессии"
						:title="getDaysUntilExamSession() + ' дней'"
					/>
				</div>
			</template>
		</UDrawer>
	</div>
	<div v-else>
		<UAlert
			description="Начались каникулы (или вы просто так решили) и на этот период расписание скрывается. Если хотите показывать его всегда, есть кнопочка в настройках!"
			title="Расписание скрыто!"
			icon="i-heroicons-exclamation-circle-20-solid"
		/>
	</div>
</template>
