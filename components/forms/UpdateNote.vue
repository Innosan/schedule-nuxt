<script setup lang="ts">
import type { Note } from "~/types/Note";

const notesStore = useNotesStore();

const props = defineProps({
	noteToUpdate: {
		type: Object as PropType<Note>,
		required: true,
	},
});

const noteTitle = ref(props.noteToUpdate.title);
const noteContent = ref(props.noteToUpdate.content);

const getCreatedAt = () => {
	const date = new Date();
	return `${date.getHours()}:${date.getMinutes()}, ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
</script>

<template>
	<UModal>
		<UButton label="Обновить" />

		<template #header>
			<div class="flex justify-between items-center">
				<p class="font-black text-xl">
					Обновить заметку "{{ noteToUpdate.title }}"
				</p>
			</div>
		</template>

		<template #body>
			<div class="flex flex-col gap-4">
				<UFormField label="Заголовок">
					<UInput
						v-model="noteTitle"
						:placeholder="noteToUpdate.title"
					/>
				</UFormField>
				<UFormField label="Содержание">
					<UTextarea
						v-model="noteContent"
						:placeholder="noteToUpdate.content"
						textarea
					/>
				</UFormField>
			</div>
		</template>

		<template #footer>
			<div class="flex gap-4 items-center">
				<UButton
					icon="i-heroicons-pencil-solid"
					label="Обновить"
					@click="
						() => {
							notesStore.updateNote({
								id: noteToUpdate.id,
								title: noteTitle,
								content: noteContent,
								createdAt: noteToUpdate.createdAt,
								updatedAt: getCreatedAt(),
							});
						}
					"
				/>
				<UButton
					color="gray"
					label="Отменить"
					variant="ghost"
					icon="i-heroicons-x-mark-20-solid"
					class="-my-1"
				/>
			</div>
		</template>
	</UModal>
</template>
