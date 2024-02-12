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

	css: ["~/assets/styles/main.css"],
});
