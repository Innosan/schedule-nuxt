<script setup lang="ts">
import type { Note } from "~/types/Note";
import type { PropType } from "vue";

const props = defineProps({
	note: {
		type: Object as PropType<Note>,
		required: true,
	},
});

const isUpdateOpen = ref(false);
const isDeleteOpen = ref(false);
</script>

<template>
	<UCard class="overflow-y-hidden">
		<template #header>
			<div class="flex gap-3 items-center">
				<p class="font-black text-xl">{{ note.title }}</p>
				<p class="opacity-70 text-sm">{{ note.createdAt }}</p>
				<p class="opacity-70 text-sm">{{ note.updatedAt }}</p>
			</div>
		</template>
		<textarea
			class="w-full font-bold bg-transparent opacity-70"
			:value="note.content"
			readonly
		/>
		<template #footer>
			<div class="flex gap-3 items-center">
				<UButton
					variant="outline"
					label="Редактировать"
					icon="i-heroicons-pencil-solid"
					@click="isUpdateOpen = true"
				/>
				<UButton
					variant="outline"
					label="Удалить"
					icon="i-heroicons-trash-solid"
					@click="isDeleteOpen = true"
				/>
			</div>
		</template>
	</UCard>

	<UpdateNote :note-to-update="note" v-model="isUpdateOpen" />
	<DeleteNote :note-to-delete="note" v-model="isDeleteOpen" />
</template>

<style scoped></style>
