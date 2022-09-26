export default defineNuxtConfig({
	buildModules: ["@nuxtjs/style-resources"],
	css: ["~/assets/style/main.scss"],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData:
						'@use "@/assets/style/variables.scss" as *;',
				},
			},
		},
	},
});
