<template>
	<div class="about">
		<div class="about__main">
			<div class="tab-content">
				<div v-if="$route.name === 'about'">
					About
				</div>
				<router-view v-else v-slot="{ Component }">
					<transition
						mode="out-in"
						name="fade"
					>
						<component style="flex: 1" :is="Component"/>
					</transition>
				</router-view>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "About",
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.about {
	height: 100%;
	display: flex;

	&__main {
		flex: 1 1;
	}

	.tab-content {
		padding: 1.125rem;
		line-height: 150%;

		p {
			padding-left: 1.2rem;
			position: relative;
			//background: ;

			&:before {
				position: absolute;
				content: ' ';
				height: 100%;
				width: 20px;
				left: 0;
			}
		}
	}
}
</style>