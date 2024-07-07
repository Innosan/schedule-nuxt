<script setup lang="ts">
import { scheduleDisplayMapper } from "~/utils/scheduleDisplayMapper";

const settingsStore = useSettingsStore();
</script>

<template>
	<div class="flex gap-4 flex-col">
		<UAlert
			class="overflow-y-hidden"
			description="Настройте приложение под себя."
			title="Настройки"
			icon="i-heroicons-cog-solid"
		/>

		<UCard>
			<template #header>
				<p class="text-xl opacity-70 font-black">Отображение</p>
			</template>
			<div class="grid md:flex gap-8">
				<SettingsItem
					title="Недельное расписание"
					icon="i-heroicons-table-cells-solid"
				>
					<template #item>
						<UButtonGroup size="xs">
							<UButton
								v-for="(value, key) in scheduleDisplayMapper"
								:key="key"
								:leading-icon="value.icon"
								:label="value.label"
								:color="
									settingsStore.scheduleDisplay === key
										? 'primary'
										: 'gray'
								"
								@click="settingsStore.setScheduleDisplay(key)"
							/>
						</UButtonGroup>
					</template>
				</SettingsItem>

				<SettingsItem
					title="Карточка пары"
					icon="i-heroicons-bars-2-solid"
				>
					<template #item>
						<UButtonGroup size="xs">
							<UButton
								v-for="(value, key) in lessonCardStates"
								:key="key"
								:leading-icon="value.icon"
								:label="value.label"
								:color="
									settingsStore.lessonCardState === key
										? 'primary'
										: 'gray'
								"
								@click="settingsStore.setLessonCardState(key)"
							/>
						</UButtonGroup>
					</template>
				</SettingsItem>
			</div>
		</UCard>

		<ClientOnly>
			<UCard>
				<template #header>
					<p class="text-xl opacity-70 font-black">Визуал</p>
				</template>
				<div class="flex flex-col-reverse md:flex-row gap-8">
					<ColorSwitch />

					<SettingsItem title="Тема" icon="i-heroicons-moon-solid">
						<template #item>
							<ThemeSwitch />
						</template>
					</SettingsItem>

					<SettingsItem
						title="Показывать расписание"
						icon="i-heroicons-eye-20-solid"
					>
						<template #item>
							<UToggle
								v-model="settingsStore.showSchedule"
								@click="settingsStore.toggleScheduleState"
								size="xl"
							/>
						</template>
					</SettingsItem>
				</div>
			</UCard>
		</ClientOnly>
	</div>
</template>

<style scoped></style>
