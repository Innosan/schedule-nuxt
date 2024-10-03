<script setup lang="ts">
import AppHeader from "~/components/utility/AppHeader.vue";

const route = useRoute();

import { useThemeStore } from "~/stores/themeStore";

// Set the color as soon as the application starts
useAppConfig().ui.colors.primary = useThemeStore().color;
useAppConfig().ui.colors.gray = useThemeStore().gray;

const { $pwa } = useNuxtApp();
</script>

<template>
	<UApp>
		<div class="dark:bg-gray-900">
			<AppHeader />

			<div class="page-container" v-auto-animate>
				<NuxtPage />
			</div>
		</div>
	</UApp>

	<NuxtPwaManifest />
</template>
