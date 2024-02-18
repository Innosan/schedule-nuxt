<script setup lang="ts">
import { useNotesStore } from "~/stores/notesStore";

const emit = defineEmits(["update:modelValue"]);

const notesStore = useNotesStore();

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
});

const noteTitle = ref("");
const noteContent = ref("");

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
					<p class="font-black text-xl">Добавить заметку</p>
				</div>
			</template>
			<div class="flex flex-col gap-4">
				<UFormGroup label="Заголовок">
					<UInput
						v-model="noteTitle"
						placeholder="Например, 'Формулы по физике'"
					/>
				</UFormGroup>
				<UFormGroup label="Содержание">
					<UTextarea
						v-model="noteContent"
						placeholder="Здесь вы можете писать что угодно"
						textarea
					/>
				</UFormGroup>
			</div>
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
