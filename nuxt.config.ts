// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ["@nuxt/ui", "@formkit/auto-animate/nuxt", "@pinia/nuxt"],

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
			link: [
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon-16x16.png",
				},
				{
					rel: "manifest",
					href: "/site.webmanifest",
				},
			],
		},
	},

	css: ["~/assets/styles/main.css"],
});
