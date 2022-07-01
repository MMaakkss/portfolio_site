<template>
	<div class="wrapper">
		<Header/>
		<div class="content">
			<router-view></router-view>
		</div>
		<Footer class="footer" />
	</div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	components: {
		Footer,
		Header,
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
</style>
