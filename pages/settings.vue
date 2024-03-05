<script setup lang="ts"></script>

<template>
	<div class="flex gap-4 flex-col">
		<UAlert
			class="overflow-y-hidden"
			description="Настройте приложение под себя."
			title="Настройки"
			icon="i-heroicons-cog-solid"
		/>

		<ClientOnly>
			<UCard>
				<template #header>
					<p class="text-xl opacity-70 font-black">Look & Feel</p>
				</template>
				<div class="grid md:flex gap-8">
					<ColorSwitch />

					<SettingsItem title="Тема" icon="i-heroicons-moon-solid">
						<template #item>
							<ThemeSwitch />
						</template>
					</SettingsItem>
				</div>
			</UCard>
		</ClientOnly>
	</div>
</template>

<style scoped></style>
