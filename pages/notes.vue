<script setup lang="ts">
import { useNotesStore } from "~/stores/notesStore";
const notesStore = useNotesStore();

const isOpen = ref(false);
</script>

<template>
	<UAlert
		class="overflow-y-hidden"
		description="Здесь вы можете хранить всякие заметки, которые вам нужны. Например, формулы, которые вы постоянно забываете, или просто что-то важное."
		title="Заметки"
		icon="i-heroicons-pencil-square-solid"
		:actions="[
			{
				variant: 'outline',
				color: 'primary',
				label: 'Добавить заметку',
				click: () => (isOpen = true),
			},
		]"
	/>
	<NoteCard v-for="note in notesStore.notes" :note="note" />
	<AddNote v-model="isOpen" />
</template>

<style scoped></style>
