<script setup lang="ts">
const route = useRoute();
</script>

<template>
	<NuxtPwaManifest />
	<div>
		<Header />
		<div v-show="$pwa.needRefresh">
			<span>
				New content available, click on reload button to update.
			</span>

			<button @click="$pwa.updateServiceWorker()">Reload</button>
		</div>
		<div class="page-container" v-auto-animate>
			<NuxtPage :key="route" />
		</div>
	</div>
	<UNotifications />
</template>
