<template>
	<div class="projects">
		<div class="projects__accordion">
			<Accordion
				:data="this.getTechnologiesList"
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
					<div class="item__title">
						<p class="blue">{{ item.name }}</p>
						<p>//created: {{ item.created }}</p>
					</div>
					<div class="item__preview">
						<div class="item__img">
							<img :src="item.img" alt="preview">
							<font-awesome-icon :style="{background: item.color}" class="item__icon" :icon="`custom-${item.mainTechnology}`"/>
						</div>
						<div class="item__preview-bottom">
							<p class="item__description">
								{{ item.description }}
							</p>
							<div class="item__links">
								<a v-if="item.homepage" :href="item.homepage">view-project</a>
								<a :href="item.url">GitHub</a>
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
import Accordion from "../components/Accordion/Accordion.vue";
import Tabs from "../components/Helpers/Tabs.vue";

import {library} from '@fortawesome/fontawesome-svg-core'
import {customVue, customJS} from "@/assets/icons.js";
import {mapActions, mapState} from "vuex";

library.add(customVue, customJS)

export default {
	name: "Projects",
	components: {
		Accordion,
		Tabs
	},
	data() {
		return {
			list: [],
		}
	},
	methods: {
		...mapActions({
			getGitHubRepos: 'getRepos'
		}),
		getList(data) {
			this.list = data;
		}
	},
	computed: {
		...mapState({
			reposList: 'projectList',
			techList: 'techList'
		}),
		getProjectList() {
			if (this.list.length > 0) {
				let projectList = []

				for (let key in this.reposList) {
					this.list.forEach(selectedItem => {
						if (selectedItem.toLowerCase() === this.reposList[key].mainTechnology) {
							let sortedItem = JSON.parse(JSON.stringify(this.reposList[key]))

							projectList.slice(key, 1)
							projectList.push(sortedItem)
						}
					})
				}

				return projectList
			} else {
				return this.reposList
			}
		},
		getTechnologiesList() {
			const tech = this.techList

			const sidebarContent = {
				title: 'projects',
				inner: tech
			}

			return sidebarContent
		}
	},
	mounted() {
		this.getGitHubRepos('MMaakkss');
	}
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
		justify-content: space-between;
		flex-wrap: wrap;
		max-height: calc(100vh - 141px);
		overflow: auto;
		gap: 50px;

		//@media (max-width: 1140px) {
		//	padding: 50px 30px;
		//	gap: 10px;
		//	justify-content: center;
		//}

		.item {
			width: 45%;
			margin-bottom: 1rem;
			display: flex;
			flex-direction: column;

			//@media (max-width: 1080px) {
			//	width: 48%;
			//}

			&__title {
				margin-bottom: 16px;
				line-height: 1.2rem;

				.blue {
					font-weight: 700;
					text-transform: capitalize;
					margin-bottom: 5px;
				}
			}

			&__preview {
				background-color: $dark_blue;
				border-radius: 8px;
				border: 1px solid $dark_grey;
				transition: 0.3s ease;
				flex: 1;
				display: flex;
				flex-direction: column;

				&:hover {
					box-shadow: 1px 1px 10px rgba(77, 91, 206, 0.2);
				}

				&-bottom {
					padding: 2rem;
					display: flex;
					flex: 1;
					flex-direction: column;
					justify-content: end;
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
			}
		}
	}
}
</style>