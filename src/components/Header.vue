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
	</div>
</template>

<script>
export default {
	name: "Header"
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.header {
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid $dark_grey;
	background-color: $light_dark;

	a:hover {
		color: $white;
	}

	&__item-name {
		width: 310px;
		padding: 1.125rem 0 1.125rem 1.375rem !important;
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

	&__main-link {
		display: flex;
	}

	&__contact {
		border-right: none;
		border-left: 1px solid $dark_grey;
	}
	.header__item-wrap{
		background-color: $orange;
	}
	.router-link-active{
		top: -3px;
	}
}
</style>