<template>
	<Main/>
</template>

<script>
import Main from "./view/Main.vue";

export default {
	name: 'App',
	components: {
		Main,
	}
}
</script>

<style lang="scss">
#app {
	height: 100%;
}

code {
	background: unset !important;
	padding: 0 !important;
	line-height: 1.3rem;
}

.fade-enter-from, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 0.3s ease;
}
</style>
