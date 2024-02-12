<script setup lang="ts">
const route = useRoute();
</script>

<template>
	<div>
		<Header />
		<div class="page-container" v-auto-animate>
			<NuxtPage :key="route" />
		</div>
	</div>
</template>
