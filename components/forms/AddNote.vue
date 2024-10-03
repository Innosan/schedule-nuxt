<script setup lang="ts">
const notesStore = useNotesStore();

const noteTitle = ref("");
const noteContent = ref("");

const getCreatedAt = () => {
	const date = new Date();
	return `${date.getHours()}:${date.getMinutes()}, ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};
</script>

<template>
	<UModal>
		<UButton label="Добавить заметку" />

		<template #header>
			<div class="flex justify-between items-center">
				<p class="font-black text-xl">Добавить заметку</p>
			</div>
		</template>

		<template #body>
			<div class="flex flex-col gap-4">
				<UFormField label="Заголовок">
					<UInput
						v-model="noteTitle"
						placeholder="Например, 'Формулы по физике'"
					/>
				</UFormField>
				<UFormField label="Содержание">
					<UTextarea
						v-model="noteContent"
						placeholder="Здесь вы можете писать что угодно"
						textarea
					/>
				</UFormField>
			</div>
		</template>

		<template #footer>
			<div class="flex gap-4 items-center">
				<UButton
					icon="i-heroicons-plus-solid"
					label="Добавить"
					@click="
						() => {
							notesStore.addNote({
								id: notesStore.notes.length + 1,
								title: noteTitle,
								content: noteContent,
								createdAt: getCreatedAt(),
								updatedAt: '',
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
