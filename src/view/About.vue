<template>
	<div class="about">
		<div class="about__accordion">
			<Accordion v-for="(item, idx) in items" :key="idx" :data="item"></Accordion>
		</div>
		<div class="about__main">
			<div v-if="$route.name === 'about'">About</div>
			<router-view />
		</div>
	</div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";

export default {
	name: "About",
	components: {
		Accordion
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
			]
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.about {
	height: 100%;

	&__accordion {
		height: 100%;
		width: 310px;
		float: left;
		border-right: 1px solid $dark_grey;
	}
}
</style>