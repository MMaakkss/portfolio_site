<template>
	<div class="wrapper">
		<Header/>
		<div class="content">
			<router-view v-slot="{ Component }">
				<transition
					mode="out-in"
					name="fade"
				>
					<component :is="Component"/>
				</transition>
			</router-view>
		</div>
		<Footer class="footer"/>
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

import {mapActions} from 'vuex'


export default {
	components: {
		Footer,
		Header,
	},
	methods: {
		...mapActions(['getRoutes']),
	},
	watch: {
		$route() {
			this.getRoutes(this.$route.name)
		}
	},
};
</script>

<style lang="scss" scoped>

.wrapper {
	display: flex;
	flex-direction: column;
	height: 100%;

	.content {
		flex: 1 0 auto;
	}

	.footer {
		flex: 0 0 auto;
	}
}

.fade-enter-from, .fade-leave-to {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity 0.5s ease;
}
</style>
