<script lang="ts" setup>
import { navigation } from "~/utils/navigation";

const transformedNavigation = navigation.map(({ id, ...rest }) => [rest]);
</script>

<template>
	<header class="flex justify-between items-center gap-4">
		<div class="flex gap-6 items-center">
			<h1 class="font-black text-xl text-primary">Schedule</h1>
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
