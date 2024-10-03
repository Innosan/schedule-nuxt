<template>
	<ClientOnly>
		<USwitch
			color="primary"
			size="xl"
			checked-icon="i-heroicons-moon-20-solid"
			unchecked-icon="i-heroicons-sun-20-solid"
			v-model="isDark"
		/>
	</ClientOnly>
</template>

<script setup>
const colorMode = useColorMode();

const isDark = computed({
	get() {
		return colorMode.value === "dark";
	},
	set() {
		colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
	},
});
</script>
