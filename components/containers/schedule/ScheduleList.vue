<script setup lang="ts">
import type { Schedule } from "~/types/schedule/Schedule";
import type { PropType } from "vue";

const props = defineProps({
	schedule: {
		type: Object as PropType<Schedule>,
		required: true,
	},
});
</script>

<template>
	<DayCard
		v-for="(day, index) in schedule.days"
		:key="index"
		:day="day"
		:index="index"
	/>
	<WeekNavigation />
</template>

<style scoped></style>
