<script setup lang="ts">
import type { Note } from "~/types/Note";
import type { PropType } from "vue";

const props = defineProps({
	note: {
		type: Object as PropType<Note>,
		required: true,
	},
});
</script>

<template>
	<UCard>
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
				<UpdateNote :note-to-update="note" />
				<DeleteNote :note-to-delete="note" />
			</div>
		</template>
	</UCard>
</template>
