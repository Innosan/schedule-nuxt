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
			@click="settingsStore.setGroupNumber(value.id)"
		/>
	</UButtonGroup>
</template>
