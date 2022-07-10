<template>
	<div class="about">
		<div class="about__accordion">
			<Accordion
				v-for="(item, idx) in items"
				:key="idx"
				:data="item"
			/>
		</div>
		<div class="about__main">
			<Tabs/>
			<div v-if="$route.name === 'about'">
				<div class="tab-content">
				</div>
			</div>
			<router-view/>
		</div>
	</div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";
import Tabs from "@/components/Helpers/Tabs.vue";

export default {
	name: "About",
	components: {
		Accordion,
		Tabs
	},
	data() {
		return {
			items: [
				{
					title: 'personal-info',
					icon: '',
					content: [
						{
							title: 'bio',
							icon: 'custom-folder',
							iconColor: '#E99287'
						},
						{
							title: 'interests',
							icon: 'custom-folder',
							iconColor: '#43D9AD'
						},
						{
							title: 'education',
							icon: 'custom-folder',
							iconColor: '#3A49A4',
							inner: [
								{
									title: 'school',
									icon: 'custom-education',
									link: 'school'
								}
							]
						},
					]
				},
				{
					title: 'contacts',
					icon: '',
					inner: [
						{
							title: 'maks_minakov@icloud.com',
							icon: 'custom-mail'
						},
						{
							title: '+38094583772',
							icon: 'custom-tel'
						}
					]
				}
			],
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.about {
	height: 100%;
	display: flex;

	&__accordion {
		height: 100%;
		border-right: 1px solid $dark_grey;
	}

	&__main {
		flex: 1 1;
		max-width: calc(100% - 310px)
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