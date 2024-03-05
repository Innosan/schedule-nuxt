<script setup lang="ts">
import { useThemeStore } from "~/stores/themeStore";
import ColorCard from "~/components/theming/ColorCard.vue";

const themeStore = useThemeStore();
const changeTheme = (color: string) => {
	themeStore.setColor(color);
};

const changeGrayTheme = (color: string) => {
	themeStore.setGray(color);
};

const colors = [
	[
		{
			label: "green",
			click: () => {
				changeTheme("green");
			},
		},
		{
			label: "violet",
			click: () => {
				changeTheme("violet");
			},
		},
		{
			label: "rose",
			click: () => {
				changeTheme("rose");
			},
		},
		{
			label: "old-lavender",
			click: () => {
				changeTheme("old-lavender");
			},
		},
		{
			label: "russett",
			click: () => {
				changeTheme("russett");
			},
		},
	],
	[
		{
			label: "neutral",
			click: () => {
				changeGrayTheme("neutral");
			},
		},
		{
			label: "stone",
			click: () => {
				changeGrayTheme("stone");
			},
		},
		{
			label: "zinc",
			click: () => {
				changeGrayTheme("zinc");
			},
		},
	],
];
</script>

<template>
	<ClientOnly>
		<div class="flex flex-col gap-3">
			<div class="flex flex-col gap-3">
				<p class="font-bold opacity-80">Основной</p>
				<div class="flex gap-2 flex-wrap">
					<ColorCard
						v-for="primary in colors[0]"
						:color="primary"
						:current-color="themeStore.color"
					/>
				</div>
			</div>
			<div class="flex-col gap-3 hidden dark:flex">
				<p class="font-bold opacity-80">Дополнительный</p>
				<div class="flex gap-2 flex-wrap">
					<ColorCard
						v-for="gray in colors[1]"
						:color="gray"
						:current-color="themeStore.gray"
					/>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>
