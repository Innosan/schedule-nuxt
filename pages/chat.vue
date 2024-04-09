<script setup lang="ts">
const messages = useState("messages", () => {
	return [];
});
let socket: WebSocket | null = null;

onMounted(() => {
	socket = new WebSocket("ws://127.0.0.1:8000/ws");

	socket.onopen = function (event) {
		console.log("[open] Connection established");
		console.log(event.data.messages);
	};

	socket.onclose = function (event) {
		if (event.wasClean) {
			console.log(
				`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`,
			);
		} else {
			console.log("[close] Connection died");
		}
	};

	socket.onerror = function (error) {
		console.error(`[error] ${error.message}`);
	};

	socket.onmessage = function (event) {
		console.log(`[message] Data received from server: ${event.data}`);
		const newMessages = JSON.parse(event.data);
		console.log(newMessages);
		messages.value = newMessages.messages;
	};
});

const newMessage = ref("");
const onMessage = (message: string) => {
	newMessage.value = message;
};

const sendMessage = () => {
	if (socket?.readyState === WebSocket.OPEN) {
		socket.send(newMessage.value);
	}
};

const isMessageValid = computed(() => newMessage.value.length <= 150);
</script>

<template>
	<div class="flex flex-col gap-4 h-full contd">
		<UAlert
			class="overflow-y-hidden"
			description="Можете пукать в чатик всякими рофланами."
			title="Чатик"
			icon="i-heroicons-pencil-square-solid"
		/>
		<div class="flex flex-col gap-2 h-4/5 overflow-y-scroll scroll-auto">
			<Message
				v-for="message in messages"
				:key="message.id"
				:message="message"
			/>
		</div>
		<ClientOnly>
			<div class="flex gap-4 w-full">
				<InputBox class="mt-auto" @send-message="onMessage" />

				<UButton
					@click="sendMessage"
					:disabled="!isMessageValid || newMessage === ''"
					icon="i-heroicons-paper-airplane-solid"
					color="primary"
				/>
			</div>
		</ClientOnly>
	</div>
</template>

<style scoped>
.contd {
	height: 90vh;
}
</style>
