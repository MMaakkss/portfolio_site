<template>
	<div class="header">
		<div class="header__main-link">
			<span class="header__item header__item-name">maksym-minakov</span>
			<div class="header__item-wrap">
				<router-link class="header__item" to="hello">_hello</router-link>
			</div>
			<div class="header__item-wrap">
				<router-link class="header__item" to="about">_about-me</router-link>
			</div>
			<div class="header__item-wrap">
				<router-link class="header__item" to="projects">_projects</router-link>
			</div>
		</div>
		<div class="header__item-wrap">
			<router-link class="header__contact" to="contact">_contact-me</router-link>
		</div>
		<div
			class="burger"
			:class="{active: isActive}"
			@click="isActive = !isActive"
		>
			<span></span>
		</div>
	</div>
	<div class="burger-menu" :class="{active: isActive}">
		<router-link class="burger-menu__item" @click="isActive = false" to="hello">_hello</router-link>
		<router-link class="burger-menu__item" @click="isActive = false" to="about">_about-me</router-link>
		<router-link class="burger-menu__item" @click="isActive = false" to="projects">_projects</router-link>
		<router-link class="burger-menu__item" @click="isActive = false" to="contact">_contact-me</router-link>
	</div>
</template>

<script>
export default {
	name: "Header",
	data() {
		return {
			isActive: false,
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.header {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid $dark_grey;
	background-color: $light_dark;

	@media (max-width: 992px) {
		z-index: 2;
		align-items: center;
		position: fixed;
		width: 100%;
	}

	a:hover {
		color: $white;
	}

	&__item, &__contact {
		transition: 0.25s ease;
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 2rem;
		border-right: 1px solid $dark_grey;
		background-color: $light_dark;
		position: relative;
		top: 0;
	}

	&__item-name {
		width: 310px;
		padding: 1.125rem 0 1.125rem 1.375rem;

		@media (max-width: 992px) {
			width: 280px;
			border-right: none;
		}

		@media (max-width: 340px) {
			width: fit-content;
		}
	}

	&__main-link {
		display: flex;
	}

	&__contact {
		border-right: none;
		border-left: 1px solid $dark_grey;
	}

	.header__item-wrap {
		background-color: $orange;

		@media (max-width: 992px) {
			display: none;
		}
	}

	.burger {
		margin-right: 20px;
		height: 26px;
		width: 26px;
		display: none;
		flex-direction: column;
		justify-content: center;
		position: relative;
		cursor: pointer;

		@media (max-width: 992px) {
			display: flex;
		}

		span, span:before, span:after {
			display: block;
			position: absolute;

			width: 100%;
			height: 2px;

			background-color: $light_grey;

			transition-duration: .25s;
		}

		span:before {
			content: '';
			top: -8px;
		}

		span:after {
			content: '';
			top: 8px;
		}

		&.active {
			span {
				transform: rotate(45deg);

				&:before {
					top: 0;
					transform: rotate(0);
				}

				&:after {
					top: 0;
					transform: rotate(90deg);
				}
			}
		}
	}

}

.burger-menu {
	display: none;

	@media (max-width: 992px) {
		display: block;
	}
}

.burger-menu {
	display: flex;
	flex-direction: column;
	background-color: $light_dark;
	width: 100%;
	height: 100%;
	overflow: auto;
	position: fixed;
	top: -100%;
	z-index: 1;
	transition: 0.35s;

	&.active {
		top: 53px;
	}

	&__item {
		padding: 20px;
		border-bottom: 1px solid $dark_grey;
	}
}

.router-link-active {
	top: -3px;
	color: $white;
}
</style>