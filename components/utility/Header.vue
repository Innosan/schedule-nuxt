<script lang="ts" setup>
import { navigation } from "~/utils/navigation";

const transformedNavigation = navigation.map(({ id, ...rest }) => [rest]);
</script>

<template>
	<header class="flex justify-between items-center gap-4">
		<div class="flex gap-2 items-center">
			<UIcon
				name="i-heroicons-calendar-days-solid"
				class="w-6 h-6 opacity-70"
			/>
			<p class="text-sm font-bold opacity-70">
				{{ isCurrentWeekEven() ? "Четная" : "Нечетная" }} неделя
			</p>
		</div>
		<div class="flex gap-4 items-center">
			<ThemeSwitch />
			<BurgerNavigation :links="transformedNavigation" />
		</div>
	</header>
</template>
