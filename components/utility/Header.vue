<script lang="ts" setup></script>

<template>
	<header class="flex justify-between items-center gap-4">
		<div class="flex gap-6 items-center">
			<SidebarNavigation />
			<div
				class="flex gap-2 items-center text-primary-400 dark:p-2 dark:bg-gray-900 rounded-xl dark:border-2 dark:border-gray-700"
			>
				<UIcon name="i-heroicons-calendar-days-solid" class="w-6 h-6" />
				<p class="text-sm font-black">
					{{ isCurrentWeekEven() ? "Четная" : "Нечетная" }} неделя
				</p>
			</div>
		</div>
		<div class="flex gap-4 items-center"></div>
	</header>
</template>
