<script setup lang="ts">
import { useThemeStore } from "~/stores/themeStore";
import {
	type Color,
	grayColorNames,
	primaryColorNames,
} from "~/types/utility/Color";

const themeStore = useThemeStore();
const changeTheme = (color: string) => {
	themeStore.setColor(color);
};

const changeGrayTheme = (color: string) => {
	themeStore.setGray(color);
};

const primaryColors = primaryColorNames.map(
	(c) =>
		<Color>{
			label: c,
			className: `bg-${c}-500`,
			click: () => {
				changeTheme(c);
			},
		},
);

const grayColors = grayColorNames.map(
	(c) =>
		<Color>{
			label: c,
			className: `bg-${c}-500`,
			click: () => {
				changeGrayTheme(c);
			},
		},
);

const colors = {
	primary: primaryColors,
	gray: grayColors,
};
</script>

<template>
	<ClientOnly>
		<div class="flex flex-col gap-3">
			<div class="flex flex-col gap-3">
				<p class="font-bold opacity-80">Основной</p>
				<div class="flex gap-2 flex-wrap">
					<ColorCard
						v-for="color in colors.primary"
						:color="color"
						:current-color="themeStore.color"
					/>
				</div>
			</div>
			<div class="flex-col gap-3 hidden dark:flex">
				<p class="font-bold opacity-80">Дополнительный</p>
				<div class="flex gap-2 flex-wrap">
					<ColorCard
						v-for="color in colors.gray"
						:color="color"
						:current-color="themeStore.gray"
					/>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>
