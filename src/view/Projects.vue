<template>
	<div class="projects">
		<div class="projects__main">
			<div class="projects__items">
				<div
					class="item"
					v-for="item in getProjectList"
					:key="item.name"
				>
					<div class="item__title">
						<p class="blue">{{ item.name }}</p>
						<p>//created: {{ item.created }}</p>
					</div>
					<div class="item__preview">
						<div class="item__img">
							<img src="https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg" alt="preview">
							<font-awesome-icon
								class="item__icon"
								:style="{background: item.color}"
								:icon="`custom-${item.mainTechnology}`"
							/>
						</div>
						<div class="item__preview-bottom">
							<p class="item__description">
								{{ item.description }}
							</p>
							<div class="item__links">
								<a
									target="_blank"
									:href="item.homepage"
									v-if="item.homepage"
								>
									view-project
								</a>
								<a target="_blank" :href="item.url">GitHub</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {customVue, customJS} from "@/assets/icons.js";
library.add(customVue, customJS);

import {mapState} from "vuex";

export default {
	name: "Projects",
	props: {
		list: {
			type: Array,
			default: () => [],
		}
	},
	computed: {
		...mapState({
			reposList: "projectList",
		}),
		getProjectList() {
			if (this.list.length > 0) {
				let projectList = [];

				for (let key in this.reposList) {
					this.list.forEach(selectedItem => {
						if (selectedItem.toLowerCase() === this.reposList[key].mainTechnology) {
							let sortedItem = JSON.parse(JSON.stringify(this.reposList[key]));

							projectList.slice(key, 1);
							projectList.push(sortedItem);
						}
					})
				}

				return projectList;
			} else {
				return this.reposList;
			}
		},
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

	&__items {
		padding: 5.625rem 2.5rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		max-height: calc(100vh - 141px);
		overflow: auto;
		gap: 50px;

		@media (max-width: 1140px) {
			padding: 50px 30px;
			gap: 50px;
			justify-content: center;
		}

		@media (max-width: 768px) {
			padding: 40px 30px;
			max-height: fit-content;
		}

		@media (max-width: 475px) {
			padding: 40px 20px;
		}

		@media (max-width: 450px) {
			padding: 40px 10px;
		}

		.item {
			width: 45%;
			margin-bottom: 1rem;
			display: flex;
			flex-direction: column;

			@media (max-width: 1140px) {
				width: 90%;
			}

			@media (max-width: 768px) {
				width: 100%;
			}

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
					justify-content: space-between;
				}
			}

			&__links {
				display: flex;
				flex-wrap: wrap;
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
				height: 175px;
				border-radius: 8px 8px 0 0;
				overflow: hidden;
				position: relative;

				@media (min-width: 1800px) {
					height: 250px;
				}

				@media (min-width: 2500px) {
					height: 300px;
				}

				@media (max-width: 1140px) {
					height: 240px;
				}

				@media (max-width: 475px) {
					height: 200px;
				}

				@media (max-width: 415px) {
					height: 145px;
				}

				img {
					object-fit: cover;
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