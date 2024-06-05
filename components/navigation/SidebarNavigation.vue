<script setup lang="ts">
import { officialLinks } from "~/utils/navigation";
import { dayMapper, getNumberOfDay } from "~/utils/dateFunctions";

const notesStore = useNotesStore();

const isOpen = ref(false);

const currentDay = dayMapper[getNumberOfDay() + 1];

const navigation = computed(() => {
	return [
		[
			{
				id: 1,
				to: "/",
				label: "Расписание",
				icon: "i-heroicons-calendar-days-solid",
			},
			{
				id: 2,
				to: "/database",
				label: "База данных",
				icon: "i-heroicons-circle-stack-16-solid",
			},
			{
				id: 3,
				to: "/notes",
				label: "Заметки",
				icon: "i-heroicons-pencil-square-solid",
				badge: notesStore.notes.length,
			},
		],
		[
			{
				id: 4,
				to: "/settings",
				label: "Настройки",
				icon: "i-heroicons-cog-solid",
			},
		],
	];
});

const { $pwa } = useNuxtApp();
</script>

<template>
	<div>
		<UButton
			@click="isOpen = true"
			icon="i-heroicons-bars-3"
			:class="isOpen ? 'rotate-90 opacity-80 transition-all' : ''"
			class="hover:rotate-90 hover:opacity-80 transition-all"
		/>

		<USlideover v-model="isOpen" side="left">
			<UCard :ui="{ ring: 'ring-0' }">
				<template #header>
					<div class="flex justify-between items-center">
						<div class="flex gap-3 items-center text-primary-400">
							<UIcon
								:name="currentDay.icon"
								class="w-6 h-6"
								dynamic
							/>
							<p class="font-black text-xl">
								{{ currentDay.title }}
							</p>
						</div>
						<UButton
							class="hover:rotate-90 hover:scale-95 hover:opacity-80 transition-all"
							color="gray"
							variant="ghost"
							icon="i-heroicons-x-mark-20-solid"
							@click="isOpen = false"
						/>
					</div>
				</template>
				<div class="flex gap-4 flex-col">
					<UVerticalNavigation :links="navigation">
						<template #icon="{ link }" @click="isOpen = false">
							<UIcon
								@click="isOpen = false"
								:name="link.icon"
								class="w-5 h-5"
							/>
						</template>
						<template #default="{ link }" @click="isOpen = false">
							<span
								@click="isOpen = false"
								class="relative w-full"
								>{{ link.label }}</span
							>
						</template>
					</UVerticalNavigation>

					<UDivider />

					<div class="flex gap-4 flex-wrap">
						<IconedNavigationLink
							v-for="link in officialLinks"
							:link="link"
						/>
					</div>

					<UDivider
						icon="i-heroicons-check-badge-solid"
						class="opacity-70"
					/>

					<div class="flex gap-4 flex-wrap">
						<IconedNavigationLink
							v-for="link in unofficialLinks"
							:link="link"
						/>
					</div>

					<UDivider
						icon="i-heroicons-sparkles-solid"
						class="opacity-70"
					/>
				</div>

				<div v-show="$pwa.needRefresh">
					<span>
						New content available, click on reload button to update.
					</span>

					<button @click="$pwa.updateServiceWorker()">Reload</button>
				</div>
				<div v-show="!$pwa.isPWAInstalled">
					<p>Установите приложение</p>
				</div>
			</UCard>
		</USlideover>
	</div>
</template>
