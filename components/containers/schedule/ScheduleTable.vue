<script setup lang="ts">
import type { Schedule } from "~/types/schedule/Schedule";
import type { PropType } from "vue";
import { getShortName } from "~/types/schedule/Teacher";
import { getNumberOfLessons } from "~/types/schedule/Day";

const props = defineProps({
	schedule: {
		type: Object as PropType<Schedule>,
		required: true,
	},
});

const columns = [
	{ key: "subject", label: "Предмет" },
	{ key: "type", label: "Тип" },
	{ key: "teachers", label: "Преподаватели" },
	{ key: "room", label: "Кабинет" },
	{ key: "additionalGroups", label: "Доп. группы" },
];
</script>

<template>
	<div v-for="(day, index) in schedule.days" :key="index">
		<h2 class="font-black pb-3">
			{{ dayMapper[index + 1].title }},
			{{
				getNumberOfLessons(
					day.filter((lesson) => lesson.subject.id !== -1),
				)
			}}
			пары
		</h2>
		<UCard :ui="cardSizes.small">
			<UTable :rows="day" :columns="columns">
				<template #subject-data="{ row }">
					<span :class="row.subject ? '' : 'font-bold underline'">{{
						row.subject
							? row.subject.shortName ?? row.subject.title
							: "Пары нет"
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
		</UCard>
	</div>
</template>

<style scoped></style>
