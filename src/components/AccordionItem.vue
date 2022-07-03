<template>
	<div class="item" :class="{active: isActive}">
		<div class="item__head" @click="toggleAccordion">
			<font-awesome-icon
				class="icon"
				icon="custom-arrow-light"
			/>
			<font-awesome-icon
				:style="{color: item.iconColor}"
				class="custom-icon"
				v-if="item.icon"
				:icon="item.icon"
			/>
			<span class="item__title">
					{{ item.title }}
				</span></div>
		<AccordionItem v-if="item.content" :item="item.content"/>

		<div class="item-inner" v-if="item.inner">
			<router-link
				class="item-inner__wrap"
				v-for="(item, idx) in item.inner"
				:key="idx"
				:to="item.link"
			>
				<div class="item-inner__link">
					<font-awesome-icon class="icon" :icon="item.icon"/>
					<span>{{ item.title }}</span>
				</div>
			</router-link>
		</div>
	</div>

</template>

<script>
import {library} from '@fortawesome/fontawesome-svg-core'
import {customArrowLight, customEducation, customFolder} from "@/assets/icons.js";

library.add(customArrowLight, customEducation, customFolder)

export default {
	name: "AccordionItem",
	props: {
		item: {
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
.item {
	max-height: 1rem;
	overflow: hidden;
	transition: max-height 0.5s ease;
	margin-bottom: 1rem;
	position: relative;

	&:last-child {
		margin: 0;
	}

	&.active {
		max-height: 100vh;
	}

	&.active &__head {
		.icon {
			transform: rotate(0deg);
			color: #FFFFFF;
		}
	}

	&.active &__title {
		color: #FFFFFF;
	}

	&__head {
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 0 1.125rem;
		transition: 0.25s ease;

		&:hover {
			color: #FFFFFF;
		}


		.custom-icon {
			margin-left: 1.625rem;
			font-size: 1rem;
		}
	}

	.icon {
		font-size: 0.5rem;
		transform: rotate(-90deg);
		transition: transform 0.25s ease;
		margin-left: -0.4rem;
		position: absolute;
	}

	&__title {
		padding-left: 0.5rem;
	}

	&-inner {
		padding: 1.125rem 0;

		&:last-child {
			padding-bottom: 0;
		}

		a {
			transition: 0.25s ease;
		}

		&__wrap {
			flex: 1 1;

			&:hover {
				color: #FFFFFF;
			}
		}

		&__link {
			padding: 0 1.125rem;

			span {
				padding-left: 0.5rem;
			}
		}

		.icon {
			font-size: 1rem;
			transform: translate(0);
			margin-left: 1.625rem;
			position: static;
		}
	}

	.router-link-active {
		color: #FFFFFF;
	}
}
</style>