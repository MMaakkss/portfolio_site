<template>
	<div class="accordion">
		<div
			class="accordion__item"
			:class="{active: isActive}"
		>
			<router-link v-if="data.link" :to="data.link">
				<span class="accordion__item-title" @click="toggleAccordion">
					<font-awesome-icon class="icon" icon="custom-arrow"/>
					{{ data.title }}
				</span>
			</router-link>

			<span v-else class="accordion__item-title" @click="toggleAccordion">
					<font-awesome-icon class="icon" icon="custom-arrow"/>
					{{ data.title }}
				</span>

			<div v-if="data.content" class="accordion__item-content">
				<AccordionItem v-for="item in data.content" :item="item"/>
			</div>

			<div v-if="data.inner" class="accordion__item-inner">
				<p v-for="(item, idx) in data.inner" :key="idx">
					<font-awesome-icon :icon="item.icon" class="icon"/>
					{{ item.title }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import AccordionItem from "./AccordionItem.vue";

import {library} from '@fortawesome/fontawesome-svg-core'
import {customArrow, customMail, customTel} from "@/assets/icons.js";

library.add(customArrow, customMail, customTel)

export default {
	name: "Accordion",
	components: {
		AccordionItem,
	},
	props: {
		data: {
			type: Object,
			default: {},
		}
	},
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		toggleAccordion() {
			this.isActive = !this.isActive
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.accordion {

	&__item {
		border-bottom: 1px solid $dark_grey;
		max-height: 40px;
		overflow: hidden;
		transition: 0.5s ease;

		&.active {
			max-height: 100vh;

			.icon {
				transform: rotate(0deg);
				transform: translate(-5px, 0);
			}
		}

		&.active &-inner .icon {
			margin: 0;
		}

		&.active &-title {
			color: $white;
		}

		&-title {
			padding-left: 1.7rem;
			height: 2.5rem;
			border-bottom: 1px solid $dark_grey;
			cursor: pointer;
			transition: 0.25s ease;
			display: flex;
			align-items: center;

			.icon {
				position: relative;
				left: -10px;
				top: 4px;
				transform: rotate(-90deg);
			}

			&:hover {
				color: $white;
			}
		}

		&-content {
			padding: 1.125rem 0;
		}

		&-inner {
			padding: 1.125rem 0;

			p {
				margin-bottom: 0.8rem;
				padding-left: 1.125rem;

				&:last-child {
					margin: 0;
				}
			}
		}

		.icon {
			font-size: 0.7rem;
			transition: transform 0.25s ease;
		}
	}
}
</style>