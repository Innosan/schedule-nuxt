<script setup lang="ts">
import type { PropType } from "vue";
import type { Message } from "~/types/Message";
import { cardSizes } from "~/utils/cardSizes";

const props = defineProps({
	message: {
		type: Object as PropType<Message>,
		required: true,
	},
	isCurrentUser: {
		type: Boolean,
		required: true,
	},
});
</script>

<template>
	<UCard
		:ui="{
			...cardSizes.medium,
			background: isCurrentUser
				? 'bg-white dark:bg-gray-800'
				: 'bg-white dark:bg-gray-900',
		}"
	>
		<template #header>
			<div class="flex gap-2 items-center">
				<p class="text-xs opacity-45">{{ message.timestamp }}</p>
			</div>
		</template>
		<p class="opacity-80 text-lg font-bold">{{ message.content }}</p>
	</UCard>
</template>

<style scoped></style>
