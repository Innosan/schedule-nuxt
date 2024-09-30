<script setup lang="ts">
import { type PropType } from "vue";

import ScheduleAccordeon from "./ScheduleAccordeon.vue";
import ScheduleList from "./ScheduleList.vue";
import ScheduleTable from "./ScheduleTable.vue";

import type { Schedule } from "~/types/schedule/Schedule";

const settingsStore = useSettingsStore();

const props = defineProps({
	schedule: {
		type: Object as PropType<Schedule>,
		required: true,
	},
});

const currentScheduleDisplay = computed(() => {
	switch (settingsStore.scheduleDisplay) {
		case "accordion":
			return ScheduleAccordeon;
		case "list":
			return ScheduleList;
		case "table":
			return ScheduleTable;
	}
});
</script>

<template>
	<component :is="currentScheduleDisplay" :schedule="schedule" />
</template>
