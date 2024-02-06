import type { Config } from "tailwindcss";

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				slate: {
					'50': '#f8f7f8',
					'100': '#f0eeef',
					'200': '#ded9dd',
					'300': '#c2b7c0',
					'400': '#a0909d',
					'500': '#847382',
					'600': '#6c5d69',
					'700': '#584c56',
					'800': '#4b4149',
					'900': '#41393f',
					'950': '#211d20',
				},
			},
		},
	},
};
