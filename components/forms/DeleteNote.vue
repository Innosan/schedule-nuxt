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
	noteToDelete: {
		type: Object as PropType<Note>,
		required: true,
	},
});

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
				<div class="flex flex-col gap-2">
					<p class="font-black text-xl">
						Удалить заметку "{{ noteToDelete.title }}"?
					</p>
					<div class="opacity-70 text-sm">
						<p>Уверены, что хотите удалить?</p>
						<p>
							Реальность будет проклята, и вам придется жить с
							этим.
						</p>
					</div>
				</div>
			</template>
			<div class="flex gap-4 items-center">
				<UButton
					icon="i-heroicons-check"
					label="Да"
					@click="
						() => {
							notesStore.deleteNote(noteToDelete.id);
							localIsOpen = false;
						}
					"
				/>
				<UButton
					color="gray"
					label="Не очень"
					variant="ghost"
					icon="i-heroicons-x-mark-20-solid"
					class="-my-1"
					@click="localIsOpen = false"
				/>
			</div>
		</UCard>
	</UModal>
</template>
