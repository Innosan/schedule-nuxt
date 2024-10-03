<script setup lang="ts">
import { groups } from "~/types/Group";
const settingsStore = useSettingsStore();
</script>

<template>
	<UButtonGroup>
		<UButton
			v-for="value in groups"
			:key="value.id"
			:label="value.title"
			:color="settingsStore.groupNumber === value.id ? 'primary' : 'gray'"
			:variant="
				settingsStore.groupNumber === value.id ? 'solid' : 'subtle'
			"
			@click="settingsStore.setGroupNumber(value.id)"
		/>
	</UButtonGroup>
</template>
