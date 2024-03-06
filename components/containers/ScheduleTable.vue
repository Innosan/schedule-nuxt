<script setup lang="ts">
import type { Schedule } from "~/types/Schedule";
import type { PropType } from "vue";
import { getShortName } from "~/types/Teacher";
import { getNumberOfLessons } from "../../types/Day";

const props = defineProps({
	schedule: {
		type: Object as PropType<Schedule>,
		required: true,
	},
});

const columns = [
	{ key: "subject", label: "Subject" },
	{ key: "type", label: "Тип" },
	{ key: "teachers", label: "Преподаватели" },
	{ key: "room", label: "Кабинет" },
	{ key: "additionalGroups", label: "Доп. группы" },
];
</script>

<template>
	<div v-for="(day, index) in schedule.days" :key="index">
		<h2 class="font-black">
			{{ dayMapper[index + 1].title }},
			{{ getNumberOfLessons(day) }}
			пары
		</h2>
		<UTable :rows="day" :columns="columns">
			<template #subject-data="{ row }">
				<span>{{
					row.subject
						? row.subject.shortName ?? row.subject.title
						: " "
				}}</span>
			</template>
			<template #type-data="{ row }">
				<span>{{ row.type ? row.type.title : "" }}</span>
			</template>
			<template #teachers-data="{ row }">
				<span>{{
					row.teachers
						? row.teachers
								.map((teacher) => getShortName(teacher))
								.join(", ")
						: ""
				}}</span>
			</template>
			<template #room-data="{ row }">
				<span>{{ row.room }}</span>
			</template>
			<template #additionalGroups-data="{ row }">
				<span>{{ row.additionalGroups }}</span>
			</template>
		</UTable>
	</div>
</template>

<style scoped></style>
