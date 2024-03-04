<script setup lang="ts">
import { useThemeStore } from "~/stores/themeStore";

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
			label: "pink",
			click: () => {
				changeTheme("pink");
			},
		},
		{
			label: "woodrush",
			click: () => {
				changeTheme("woodrush");
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
			label: "old-lavender",
			click: () => {
				changeGrayTheme("old-lavender");
			},
		},
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
	],
];
</script>

<template>
	<ClientOnly>
		<UDropdown :items="colors">
			<UButton icon="i-heroicons-paint-brush-solid" />

			<template #item="{ item }">
				<span
					class="circle"
					:class="'bg-' + item.label + '-500'"
				></span>
				<p>
					{{
						item.label.charAt(0).toUpperCase() + item.label.slice(1)
					}}
				</p>
			</template>
		</UDropdown>
	</ClientOnly>
</template>
