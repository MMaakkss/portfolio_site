<template>
	<div class="projects">
		<div class="projects__accordion">
			<Accordion
				v-for="(item, idx) in items"
				:key="idx"
				:data="item"
				:check-list="true"
				@project-list="getList"
			/>
		</div>
		<div class="projects__main">
			<Tabs/>
			<div class="projects__items">
				<div
					class="item"
					v-for="item in getProjectList"
				>
					<p class="item__title">
						<span class="blue">{{ item.title }}</span> // {{ items.shortDescription }}
					</p>
					<div class="item__preview">
						<div class="item__img">
							<img :src="item.img" alt="preview">
							<font-awesome-icon class="item__icon" :icon="`custom-${item.mainTechnology}`"/>
						</div>
						<div class="item__preview-bottom">
							<p class="item__description">
								{{ item.description }}
							</p>
							<div class="item__links">
								<a :href="item.projectLink">view-project</a>
								<a :href="item.gitLink">GitHub</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<router-view/>
		</div>
	</div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";
import Tabs from "@/components/Helpers/Tabs.vue";

import {library} from '@fortawesome/fontawesome-svg-core'
import {customVue} from "@/assets/icons.js";

library.add(customVue)

export default {
	name: "Projects",
	components: {
		Accordion,
		Tabs
	},
	data() {
		return {
			items: [
				{
					title: 'projects',
					icon: '',
					inner: {
						vue: 'Vue',
						html: 'Html',
					}
				},
			],
			projectList: [
				{
					title: 'Project html',
					shortDescription: '_ui-animations',
					img: '/src/assets/examp.jpeg',
					description: 'Duis aute irure dolor in velit esse cillum dolore.',
					projectLink: '#',
					gitLink: '#',
					stack: ['html'],
					mainTechnology: 'html'
				},
				{
					title: 'Project vue html',
					shortDescription: '_ui-animations',
					img: '/src/assets/examp.jpeg',
					description: 'Duis aute irure dolor in velit esse cillum dolore.',
					projectLink: '#',
					gitLink: '#',
					stack: ['vue', 'html'],
					mainTechnology: 'vue'
				},
				{
					title: 'Project vue',
					shortDescription: '_ui-animations',
					img: '/src/assets/examp.jpeg',
					description: 'Duis aute irure dolor in velit esse cillum dolore.',
					projectLink: '#',
					gitLink: '#',
					stack: ['vue'],
					mainTechnology: 'vue'
				},
			],
			list: [],
		}
	},
	methods: {
		getList(data) {
			this.list = data;
		}
	},
	computed: {
		getProjectList() {
			if (this.list.length > 0) {
				let selectedValue = this.list
				let projectList = []
				let sortedItem;

				for (let key in this.projectList) {
					selectedValue.forEach(selectedItem => {
						this.projectList[key].stack.forEach(item => {
							if (selectedItem === item) {
								sortedItem = JSON.parse(JSON.stringify(this.projectList[key]))
								func(key)
								projectList.push(sortedItem)
							}
						})
					})
				}

				function func(key) {
					projectList.forEach(element => {
						if (JSON.stringify(element) === JSON.stringify(sortedItem)) {
							let clear = projectList
							projectList = []
							delete  clear[key]

							clear.forEach(element => {
								if (element !== ( null && undefined)) {
									projectList.push(element)
								}
							})
						}
					})
				}
				return projectList
			} else {
				return this.projectList
			}
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.projects {
	height: 100%;
	display: flex;

	&__main {
		flex: 1 1;
	}

	&__accordion {
		height: 100%;
		border-right: 1px solid $dark_grey;
	}

	&__items {
		padding: 5.625rem 2.5rem;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		max-height: calc(100vh - 141px);
		overflow: auto;
		gap: 2.5rem;

		.item {
			width: 370px;
			margin-bottom: 1rem;

			&__title {
				margin-bottom: 1rem;

				span {
					font-weight: 700;
				}
			}

			&__preview {
				background-color: $dark_blue;
				border-radius: 8px;
				border: 1px solid $dark_grey;
				transition: 0.3s ease;

				&:hover {
					box-shadow: 1px 1px 10px rgba(77, 91, 206, 0.2);
				}

				&-bottom {
					padding: 2rem;
				}
			}

			&__links {
				display: flex;
				gap: 0.75rem;
				margin-top: 1.375rem;

				a {
					color: $white;
					padding: 0.625rem 0.875rem;
					border-radius: 8px;
					background-color: $gray;
					transition: 0.3s ease;
					border: 1px solid $dark_blue;

					&:hover {
						border: 1px solid $white;
						background-color: $dark_blue;
					}
				}
			}

			&__img {
				height: 145px;
				border-radius: 8px 8px 0 0;
				overflow: hidden;
				position: relative;

				img {
					border-radius: 8px 8px 0 0;
					width: 100%;
					height: 100%;
					transition: 0.3s ease;

					&:hover {
						transform: scale(1.1);
					}
				}
			}

			&__icon {
				position: absolute;
				padding: 5px 5px;
				right: 16px;
				top: 18px;
				border-radius: 2px;
				color: $dark;
				background-color: $light_green;
			}
		}
	}
}
</style>