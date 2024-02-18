<script setup lang="ts">
import { useNotesStore } from "~/stores/notesStore";
import type { Note } from "~/types/Note";

const emit = defineEmits(["update:modelValue"]);

const notesStore = useNotesStore();

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	noteToUpdate: {
		type: Object as PropType<Note>,
		required: true,
	},
});

const noteTitle = ref(props.noteToUpdate.title);
const noteContent = ref(props.noteToUpdate.content);

const localIsOpen = ref(props.modelValue);

watchEffect(() => {
	localIsOpen.value = props.modelValue;
});

watchEffect(() => {
	emit("update:modelValue", localIsOpen.value);
});

const getCreatedAt = () => {
	const date = new Date();
	return `${date.getHours()}:${date.getMinutes()}, ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
</script>

<template>
	<UModal v-model="localIsOpen">
		<UCard>
			<template #header>
				<div class="flex justify-between items-center">
					<p class="font-black text-xl">
						Обновить заметку "{{ noteToUpdate.title }}"
					</p>
				</div>
			</template>
			<div class="flex flex-col gap-4">
				<UFormGroup label="Заголовок">
					<UInput
						v-model="noteTitle"
						:placeholder="noteToUpdate.title"
					/>
				</UFormGroup>
				<UFormGroup label="Содержание">
					<UTextarea
						v-model="noteContent"
						:placeholder="noteToUpdate.content"
						textarea
					/>
				</UFormGroup>
			</div>
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

								localIsOpen = false;
							}
						"
					/>
					<UButton
						color="gray"
						label="Отменить"
						variant="ghost"
						icon="i-heroicons-x-mark-20-solid"
						class="-my-1"
						@click="localIsOpen = false"
					/>
				</div>
			</template>
		</UCard>
	</UModal>
</template>
