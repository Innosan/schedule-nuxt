<script setup lang="ts">
import { getFullName } from "~/types/schedule/Teacher";

const blockToShow = ref("subjects");

const searchTerm = ref("");
const filteredSubjects = computed(() => {
	return subjects.filter((subject) => {
		if (searchTerm.value === "") return true;
		else {
			return (
				subject.title
					.toLowerCase()
					.includes(searchTerm.value.toLowerCase()) ||
				subject.shortName
					?.toLowerCase()
					.includes(searchTerm.value.toLowerCase())
			);
		}
	});
});

const filteredTeachers = computed(() => {
	return teachers.filter((teacher) => {
		if (searchTerm.value === "") return true;
		else {
			return getFullName(teacher)
				.toLowerCase()
				.includes(searchTerm.value.toLowerCase());
		}
	});
});

const changeBlock = (to: string) => {
	blockToShow.value = to;
	searchTerm.value = "";
};

const route = useRoute();
</script>

<template>
	<div class="flex flex-col gap-4">
		<UButtonGroup size="xs" @click="route.hash ? navigateTo('/') : null">
			<UButton
				leading-icon="i-heroicons-briefcase-solid"
				:color="blockToShow === 'subjects' ? 'primary' : 'gray'"
				@click="changeBlock('subjects')"
			>
				Предметы
			</UButton>
			<UButton
				leading-icon="i-heroicons-academic-cap-solid"
				:color="blockToShow === 'teachers' ? 'primary' : 'gray'"
				@click="changeBlock('teachers')"
			>
				Преподаватели
			</UButton>
		</UButtonGroup>
		<div class="grid gap-4" v-auto-animate>
			<UInput
				v-model="searchTerm"
				class="w-full h-max"
				variant="outline"
				leading-icon="i-heroicons-magnifying-glass-16-solid"
				:placeholder="
					blockToShow === 'subjects' ? 'Python...' : 'Гаечка...'
				"
				:ui="{ icon: { trailing: { pointer: '' } } }"
			>
				<template #trailing>
					<UButton
						:key="searchTerm"
						v-show="searchTerm !== ''"
						color="gray"
						variant="link"
						:padded="false"
						icon="i-heroicons-x-mark-20-solid"
						@click="searchTerm = ''"
					/>
				</template>
			</UInput>
			<template v-if="blockToShow === 'subjects'" key="subjects">
				<AnimatedGrid :max-cols="3">
					<SubjectCard
						v-for="subject in filteredSubjects"
						:key="subject.id"
						:subject="subject"
					/>
				</AnimatedGrid>
			</template>
			<template v-else key="teachers">
				<AnimatedGrid :min-cols="2" :max-cols="6">
					<TeacherCard
						v-for="teacher in filteredTeachers"
						:key="teacher.id"
						:teacher="teacher"
					/>
				</AnimatedGrid>
			</template>
		</div>
	</div>
</template>
