<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		default: "",
	},
	icon: {
		type: String,
		default: "",
	},
});
</script>

<template>
	<div class="flex flex-col gap-3">
		<div class="flex gap-2 items-center text-primary-500">
			<UIcon :name="icon" class="w-6 h-6" />
			<p class="font-black text-lg">
				{{ title }}
			</p>
		</div>

		<slot name="item" />
	</div>
</template>

<style scoped></style>
