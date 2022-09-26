<template>
	<div class="tabs">
<!--		<div-->
<!--			class="tabs__item"-->
<!--			v-for="(item, idx) in activeRoutes"-->
<!--			:key="idx"-->
<!--		>-->
<!--			<router-link :to="item">-->
<!--				{{ item }}-->
<!--			</router-link>-->
<!--			<font-awesome-icon @click="deleteR(item, idx)" class="icon" icon="custom-close"/>-->
<!--		</div>-->
		<div
			class="tabs__item"
		>
			<span>
				{{ $route.name }}
			</span>
			<router-link to="hello">
				<font-awesome-icon @click="deleteR(item, idx)" class="icon" icon="custom-close"/>
			</router-link>
		</div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

import {library} from '@fortawesome/fontawesome-svg-core'
import {customClose} from "@/assets/icons.js";

library.add(customClose)

export default {
	name: "Tabs",
	computed: {
		...mapGetters(['activeRoutes']),
	},
	methods: {
		...mapActions(['deleteRoute']),
		deleteR(routeName, routeIdx) {
			if (this.$route.name === routeName) {
				this.$router.push('/hello')
			}
			this.deleteRoute(routeIdx)
		}
	},
}
</script>

<style lang="scss" scoped>
@import "@/style/variables";

.tabs {
	display: flex;
	border-bottom: 1px solid $dark_grey;
	overflow: auto;
	height: 2.5rem;

	&__item {
		display: flex;
		align-items: center;
		border-right: 1px solid $dark_grey;
		width: fit-content;
		padding-right: 1rem;

		//a {
		//	padding: 0.625rem 3.375rem 0.625rem 1rem;
		//	transition: 0.25s ease;
		//
		//	&:hover {
		//		color: $white;
		//	}
		//}

		span {
			padding: 0 3.375rem 0 1rem;
		}

		.icon {
			font-size: 0.6rem;
			cursor: pointer;
			transition: 0.25s ease;

			&:hover {
				color: $white;
			}
		}
	}
}
</style>