<script lang="ts" setup></script>

<template>
	<header class="flex justify-between items-center gap-4">
		<div class="flex gap-4 items-center">
			<SidebarNavigation />
			<div class="flex gap-2 items-center text-primary-400 rounded-xl">
				<p class="text-sm font-black">
					{{ isCurrentWeekEven() ? "Четная" : "Нечетная" }} неделя,
					{{ dayMapper[getNumberOfDay() + 1].title }}
				</p>
				<p></p>
			</div>
		</div>
		<div class="flex gap-4 items-center"></div>
	</header>
</template>
