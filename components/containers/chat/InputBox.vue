<script setup lang="ts">
const message = ref("");
const messageLimit = 150;

const isMessageValid = computed(() => message.value.length <= messageLimit);
const emit = defineEmits(["send-message"]);

const sendMessage = () => {
	if (isMessageValid.value) {
		emit("send-message", message.value);
		message.value = "";
	}
};
</script>

<template>
	<UFormGroup
		label="Ваше сообщение"
		size="xl"
		class="w-full"
		v-slot="{ error }"
		:error="!isMessageValid && 'Сообщение слишком длинное'"
		:hint="message.length + '/' + messageLimit"
	>
		<UTextarea
			@input="sendMessage"
			v-model="message"
			autoresize
			:maxrows="1"
			placeholder="Напишите что-нибудь..."
		/>
	</UFormGroup>
</template>

<style scoped></style>
