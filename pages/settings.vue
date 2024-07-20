<script setup lang="ts">
import { scheduleDisplayMapper } from "~/utils/scheduleDisplayMapper";
import SettingsCard from "~/components/containers/SettingsCard.vue";
import { groups } from "~/types/Group";

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

		<SettingsCard title="Разное">
			<SettingsItem title="Номер группы" icon="i-heroicons-hashtag-solid">
				<UButtonGroup size="xs">
					<UButton
						v-for="value in groups"
						:key="value.id"
						:label="value.title"
						:color="
							settingsStore.groupNumber === value.id
								? 'primary'
								: 'gray'
						"
						@click="settingsStore.setGroupNumber(value.id)"
					/>
				</UButtonGroup>
			</SettingsItem>
		</SettingsCard>

		<ClientOnly>
			<SettingsCard title="Отображение">
				<SettingsItem
					title="Недельное расписание"
					icon="i-heroicons-table-cells-solid"
				>
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
				</SettingsItem>

				<SettingsItem
					title="Карточка пары"
					icon="i-heroicons-bars-2-solid"
				>
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
				</SettingsItem>
			</SettingsCard>

			<SettingsCard title="Визуал">
				<ColorSwitch />

				<SettingsItem title="Тема" icon="i-heroicons-moon-solid">
					<ThemeSwitch />
				</SettingsItem>

				<SettingsItem
					title="Показывать расписание"
					icon="i-heroicons-eye-20-solid"
				>
					<UToggle
						v-model="settingsStore.showSchedule"
						@click="settingsStore.toggleScheduleState"
						size="xl"
					/>
				</SettingsItem>
			</SettingsCard>
		</ClientOnly>
	</div>
</template>

<style scoped></style>
