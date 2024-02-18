<script setup lang="ts">
import { officialLinks } from "~/utils/navigation";
import { dayMapper, getNumberOfDay } from "~/utils/dateFunctions";

const notesStore = useNotesStore();

const isOpen = ref(false);

const currentDay = dayMapper[getNumberOfDay()];

const navigation = computed(() => {
	return [
		{
			id: 1,
			to: "/",
			label: "Расписание",
			icon: "i-heroicons-calendar-days-solid",
		},
		{
			id: 2,
			to: "/subjects",
			label: "Предметы",
			icon: "i-heroicons-rectangle-stack",
		},
		{
			id: 3,
			to: "/notes",
			label: "Заметки",
			icon: "i-heroicons-pencil-square-solid",
			badge: notesStore.notes.length,
		},
	];
});
</script>

<template>
	<div>
		<UButton
			@click="isOpen = true"
			icon="i-heroicons-bars-3"
			:class="isOpen ? 'rotate-90' : ''"
			class="transition-all"
		/>

		<USlideover v-model="isOpen" side="left">
			<UCard>
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
							color="gray"
							variant="ghost"
							icon="i-heroicons-x-mark-20-solid"
							@click="isOpen = false"
						/>
					</div>
				</template>
				<div class="flex gap-4 flex-col">
					<UVerticalNavigation :links="navigation">
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
				<template #footer>
					<div class="flex gap-4 items-center">
						<ThemeSwitch />
						<ColorSwitch />
					</div>
				</template>
			</UCard>
		</USlideover>
	</div>
</template>