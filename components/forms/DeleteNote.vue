<script setup lang="ts">
import type { Note } from "~/types/Note";

const notesStore = useNotesStore();

const props = defineProps({
	noteToDelete: {
		type: Object as PropType<Note>,
		required: true,
	},
});
</script>

<template>
	<UModal title="Aboba">
		<UButton label="Удалить" />

		<template #header>
			<div class="flex flex-col gap-2">
				<p class="font-black text-xl">
					Удалить заметку "{{ noteToDelete.title }}"?
				</p>
				<div class="opacity-70 text-sm">
					<p>Уверены, что хотите удалить?</p>
					<p>
						Реальность будет проклята, и вам придется жить с этим.
					</p>
				</div>
			</div>
		</template>

		<template #body>
			<div class="flex gap-4 items-center">
				<UButton
					icon="i-heroicons-check"
					label="Да"
					@click="
						() => {
							notesStore.deleteNote(noteToDelete.id);
						}
					"
				/>
				<UButton
					color="gray"
					label="Не очень"
					variant="solid"
					icon="i-heroicons-x-mark-20-solid"
				/>
			</div>
		</template>
	</UModal>
</template>
