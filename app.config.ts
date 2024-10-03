export default defineAppConfig({
	ui: {
		colors: {
			primary: "green",
			gray: "neutral",
			error: "red",
		},

		card: {
			variants: {
				size: {
					sm: {
						root: "bg-white select-none dark:bg-gray-900 ring ring-gray-200 dark:ring-gray-800 divide-y divide-gray-200 dark:divide-gray-800 rounded-lg shadow",
						header: "p-2 sm:px-2",
						body: "p-2 sm:p-2",
						footer: "p-2 sm:px-2",
					},
				},
			},
		},
	},
});
