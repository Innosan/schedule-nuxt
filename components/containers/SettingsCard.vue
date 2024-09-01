<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<UCard>
		<template #header>
			<p class="text-xl opacity-70 font-black">{{ title }}</p>
		</template>
		<div class="grid md:flex gap-8">
			<slot />
		</div>
	</UCard>
</template>
