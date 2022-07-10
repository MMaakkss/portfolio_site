<template>
	<div class="projects">
		<div class="projects__accordion">
			<Accordion v-for="(item, idx) in items" :key="idx" :data="item"></Accordion>
		</div>
		<div class="projects__main">
			<Tabs/>
			<div class="projects__items">
				<div class="item">
					<p class="item__title">
						<span class="blue">Project 1</span> // _ui-animations
					</p>
					<div class="item__preview">
						<div class="item__img">
							<font-awesome-icon class="item__icon" icon="custom-vue"/>
						</div>
						<div class="item__preview-bottom">
							<p class="item__description">
								Duis aute irure dolor in velit esse cillum dolore.
							</p>
							<div class="item__links">
								<a href="#">view-project</a>
								<a href="#">GitHub</a>
							</div>
						</div>
					</div>
				</div>
				<div class="item">
					<p class="item__title">
						<span class="blue">Project 1</span> // _ui-animations
					</p>
					<div class="item__preview">
						<div class="item__img">
							<font-awesome-icon class="item__icon" icon="custom-vue"/>
						</div>
						<div class="item__preview-bottom">
							<p class="item__description">
								Duis aute irure dolor in velit esse cillum dolore.
							</p>
							<div class="item__links">
								<a href="#">view-project</a>
								<a href="#">GitHub</a>
							</div>
						</div>
					</div>
				</div>
				<div class="item">
					<p class="item__title">
						<span class="blue">Project 1</span> // _ui-animations
					</p>
					<div class="item__preview">
						<div class="item__img">
							<font-awesome-icon class="item__icon" icon="custom-vue"/>
						</div>
						<div class="item__preview-bottom">
							<p class="item__description">
								Duis aute irure dolor in velit esse cillum dolore.
							</p>
							<div class="item__links">
								<a href="#">view-project</a>
								<a href="#">GitHub</a>
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
				},
			],
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
				background-image: url("../assets/examp.jpeg");
				background-repeat: no-repeat;
				background-position: center;
				background-size: cover;
				position: relative;
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