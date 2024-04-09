// https://nuxt.com/docs/api/configuration/nuxt-config

const sw = false;

export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: [
		"@nuxt/ui",
		"@formkit/auto-animate/nuxt",
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
		"@vite-pwa/nuxt",
	],

	components: [
		{
			path: "~/components",
			pathPrefix: false,
		},
	],

	colorMode: {
		preference: "dark",
	},

	app: {
		head: {
			title: "Schedule",
		},
	},

	pwa: {
		/* your pwa options */
		registerWebManifestInRouteRules: true,
		appManifest: true,

		strategies: sw ? "injectManifest" : "generateSW",
		srcDir: sw ? "service-worker" : undefined,
		filename: sw ? "sw.ts" : undefined,
		registerType: "autoUpdate",

		workbox: {
			globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
		},
		injectManifest: {
			globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
		},

		manifest: {
			name: "Techno Schedule",
			short_name: "Schedule",
			theme_color: "#27272a",
			background_color: "#27272a",
			icons: [
				{
					src: "pwa-192x192.png",
					sizes: "192x192",
					type: "image/png",
				},
				{
					src: "pwa-512x512.png",
					sizes: "512x512",
					type: "image/png",
				},
				{
					src: "pwa-512x512.png",
					sizes: "512x512",
					type: "image/png",
					purpose: "any maskable",
				},
			],
		},
	},

	css: ["~/assets/styles/main.css"],
});
