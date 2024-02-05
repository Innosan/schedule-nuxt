<script setup lang="ts">
import { firstSchedule, secondSchedule } from "~/utils/data";
import { getNumberOfDay, isCurrentWeekEven } from "~/utils/dateFunctions";

const currentSchedule = isCurrentWeekEven() ? firstSchedule : secondSchedule;
const currentDay = getNumberOfDay();
</script>

<template>
	<h1>Home page</h1>
	<DayCard :day="currentSchedule.days[currentDay]" :index="currentDay" />
	<div>
		<DayCard
			v-for="(day, index) in currentSchedule.days"
			:key="index"
			:day="day"
			:index="index"
		/>
	</div>
</template>

<style scoped></style>
