<script setup lang="ts">
import { officialLinks } from "~/utils/navigation";
import { dayMapper, getNumberOfDay } from "~/utils/dateFunctions";

const notesStore = useNotesStore();

const currentDay = dayMapper[getNumberOfDay() + 1];
const open = ref(false);

const navigation = computed(() => {
	return [
		{
			to: "/",
			label: "Расписание",
			icon: "i-heroicons-calendar-days-solid",
			select: () => {
				open.value = false;
			},
		},
		{
			to: "/database",
			label: "База данных",
			icon: "i-heroicons-circle-stack-16-solid",
			select: () => {
				open.value = false;
			},
		},
		{
			to: "/notes",
			label: "Заметки",
			icon: "i-heroicons-pencil-square-solid",
			select: () => {
				open.value = false;
			},
			badge: notesStore.notes.length,
		},
		{
			to: "/settings",
			label: "Настройки",
			icon: "i-heroicons-cog-solid",
			select: () => {
				open.value = false;
			},
		},
	];
});

const { $pwa } = useNuxtApp();
</script>

<template>
	<USlideover
		v-model:open="open"
		side="left"
		description="Погодите, это реально?"
	>
		<template #default>
			<UButton
				icon="i-heroicons-bars-3"
				class="hover:rotate-90 hover:opacity-80 transition-all"
			/>
		</template>

		<template #title>
			<div class="flex gap-3 items-center text-primary-400">
				<UIcon :name="currentDay.icon" class="w-6 h-6" />
				<p class="font-black text-xl">
					{{ currentDay.title }}
				</p>
			</div>
		</template>

		<template #body>
			<div class="flex flex-col gap-4">
				<UNavigationMenu orientation="vertical" :items="navigation">
					<template #item-leading="{ item }">
						<UIcon :name="item.icon" class="w-5 h-5" />
					</template>
					<template #item-label="{ item }">
						<span class="relative w-full">{{ item.label }}</span>
					</template>
				</UNavigationMenu>

				<USeparator />

				<div class="flex gap-1 flex-wrap">
					<IconedNavigationLink
						v-for="link in officialLinks"
						:link="link"
					/>
				</div>

				<USeparator
					icon="i-heroicons-check-badge-solid"
					class="opacity-70"
				/>

				<div class="flex gap-1 flex-wrap">
					<IconedNavigationLink
						v-for="link in unofficialLinks"
						:link="link"
					/>
				</div>
			</div>
		</template>

		<template #footer>
			<div v-show="$pwa.needRefresh">
				<span>
					New content available, click on reload button to update.
				</span>

				<UButton @click="$pwa.updateServiceWorker()">Reload</UButton>
			</div>

			<UAlert
				v-show="!$pwa.isPWAInstalled"
				class="overflow-y-hidden mt-4"
				description="Вы можете установить PWA приложение в настройках сайта в браузере!"
				title="Приложение!"
				icon="i-heroicons-exclamation-circle-solid"
			/>
		</template>
	</USlideover>
</template>
