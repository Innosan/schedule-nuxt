<template>
	<header
		class="sticky top-0 dark:bg-gray-900 bg-primary-50 bg-opacity-80 backdrop-blur-sm z-10"
	>
		<div class="header-container flex gap-2 items-center">
			<SidebarNavigation />
			<GroupChanger />
			<div class="flex gap-2 items-center text-primary-400 rounded-xl">
				<p class="text-sm font-black">
					{{ !isCurrentWeekEven() ? "Четная" : "Нечетная" }} неделя,
					{{ dayMapper[getNumberOfDay() + 1].title }}
				</p>
			</div>
		</div>
	</header>
</template>
