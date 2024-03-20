<script setup lang="ts">
const route = useRoute();

import { useThemeStore } from "~/stores/themeStore";

// Set the color as soon as the application starts
useAppConfig().ui.primary = useThemeStore().color;
useAppConfig().ui.gray = useThemeStore().gray;

const toast = useToast();
const { $pwa } = useNuxtApp();

onMounted(() => {
	if ($pwa.offlineReady)
		toast.add({ title: "Приложение готово к установке!" });
});
</script>

<template>
	<div class="dark:bg-gray-900">
		<Header />
		<div class="page-container" v-auto-animate>
			<NuxtPage :key="route" />
		</div>
	</div>
	<UNotifications />
	<NuxtPwaManifest />
</template>
