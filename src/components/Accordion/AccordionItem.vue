<template>
	<div class="item" :class="{active: isActive}" v-if="item.inner">
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
			</span>
		</div>
		<div class="item-inner">
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
	<div v-else>
		<div class="item-inner__link no-inner">
			<font-awesome-icon class="icon" :icon="item.icon"/>
			<span>{{ item.title }}</span>
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
		},
		height: {
			type: Number,
			default: 0,
		}
	},
	data() {
		return {
			isActive: false,
		}
	},
	computed: {
		itemHeight() {
			const padding = 18;
			let itemHeight = 16.5 * this.item.inner.length;
			let marginHeight = 13 * (this.item.inner.length - 1);
			let contentHeight = padding + itemHeight + marginHeight;

			return contentHeight
		}
	},
	methods: {
		toggleAccordion(e) {
			this.isActive = !this.isActive;

			if (this.item.inner) {
				let item = e.target.closest('.accordion__item');

				let innerItem = e.target.closest('.item');
				let contentHeight = this.height;

				if (this.isActive) {
					innerItem.style.maxHeight = this.itemHeight + 16 + 'px'
				} else {
					innerItem.style.maxHeight = 16 + 'px';
				}

				if (this.isActive) {
					item.style.maxHeight = this.itemHeight + contentHeight + 'px';

					this.$emit('inner-height-plus', this.itemHeight);
				} else {
					item.style.maxHeight = this.height + 'px';

					this.$emit('inner-height-minus', this.itemHeight);
				}
			}
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../../style/variables";

.item {
	overflow: hidden;
	transition: max-height 0.5s ease;
	margin-bottom: 1rem;
	max-height: 1rem;
	position: relative;

	&:last-child {
		margin: 0;
	}

	&.active &__head {
		.icon {
			transform: rotate(0deg);
			color: $white;
		}
	}

	&.active &__title {
		color: $white;
	}
	.router-link-active{
		color: $white;
	}

	&__head {
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 0 1.125rem;
		transition: 0.25s ease;

		&:hover {
			color: $white;
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
				color: $white;
			}
		}

		&__link {
			padding: 0 1.125rem;
			margin-bottom: 0.8125rem;
			white-space: nowrap;
			display: flex;
			align-items: center;
			
			@media (max-width: 768px) {
				padding: 0 30px;
			}

			@media (max-width: 475px) {
				padding: 0 23px;
			}

			@media (max-width: 320px) {
				padding: 0 13px;
			}

			span {
				margin-left: 0.5rem;
				max-width: 100%;
				overflow: auto;
				display: inline-block;
			}

			&.no-inner {
				padding-left: 0.8rem;

				@media (max-width: 768px) {
					padding: 0 33px;
				}

				@media (max-width: 475px) {
					padding: 0 23px;
				}

				@media (max-width: 320px) {
					padding: 0 13px;
				}

				.icon {
					font-size: 0.8rem;
				}
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
		color: $white;
	}
}
</style>