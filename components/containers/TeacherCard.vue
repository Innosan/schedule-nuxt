<script setup lang="ts">
import type { PropType } from "vue";
import { getFullName, getShortName, type Teacher } from "~/types/Teacher";

const props = defineProps({
	teacher: {
		type: Object as PropType<Teacher>,
		required: true,
	},
});

const isOpen = ref(false);
</script>

<template>
	<UButton
		@click="isOpen = true"
		:label="getShortName(teacher)"
		trailing-icon="i-heroicons-information-circle-solid"
	/>

	<UModal v-model="isOpen">
		<UCard>
			<template #header>
				<div class="flex flex-col gap-2">
					<div class="flex items-center justify-between">
						<h3 class="font-bold">{{ getFullName(teacher) }}</h3>

						<UButton
							color="gray"
							variant="ghost"
							icon="i-heroicons-x-mark-20-solid"
							class="-my-1"
							@click="isOpen = false"
						/>
					</div>

					<LessonInfoField
						:value="teacher.grade.title"
						icon="i-heroicons-academic-cap-solid"
					/>
				</div>
			</template>
			<div class="grid gap-4">
				<div class="flex gap-2">
					<LessonInfoField
						v-for="subject in teacher.subjects"
						:value="subject.title"
					/>
				</div>

				<UDivider icon="i-heroicons-chat-bubble-left-right" />
				<div class="flex gap-2 flex-col">
					<SocialCard
						v-if="teacher.email"
						icon="i-heroicons-envelope"
						:value="teacher.email"
						type="email"
					/>
					<p v-else class="opacity-70 text-sm font-bold">
						Почта не предоставлена
					</p>

					<SocialCard
						v-if="teacher.phoneNumber"
						icon="i-heroicons-phone"
						:value="teacher.phoneNumber"
						type="phone"
					/>
					<p v-else class="opacity-70 text-sm font-bold">
						Номер не предоставлен
					</p>
				</div>
			</div>
		</UCard>
	</UModal>
</template>

<style scoped></style>
