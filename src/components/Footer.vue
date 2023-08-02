<template>
	<div class="footer">
		<div class="footer__social">
			<span class="footer__item footer__title">find me in:</span>
			<a target="_blank" href="https://t.me/windstom" class="footer__item footer__item-icon">
				<font-awesome-icon icon="custom-telegram"/>
			</a>
		</div>
		<a target="_blank" href="https://github.com/MMaakkss" class="footer__git">
			@Maksmm
			<font-awesome-icon class="footer__git-icon" icon="custom-git"/>
		</a>
	</div>
</template>

<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {customGit, customTelegram} from "@/assets/icons.js";
library.add(customGit, customTelegram)

export default {
	name: "Footer",
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.footer {
	display: flex;
	border-top: 1px solid $dark_grey;
	height: 3rem;
	align-items: center;
	justify-content: space-between;
	background: $light_dark;
	position: relative;
	z-index: 10;

	&__social {
		display: flex;
		height: 100%;
	}

	&__item {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;

		@media (max-width: 340px) {
			text-align: center;
		}

		&:nth-child(n) {
			border-right: 1px solid $dark_grey;
		}

		&-icon {
			width: 2.4rem;
			text-align: center;
			filter: brightness(0.8);
			transition: 0.2s ease-in-out;

			&:hover {
				filter: unset;
			}
		}
	}

	&__title {
		padding-left: 1.375rem;
		padding-right: 1.125rem;
	}

	&__git {
		padding: 0 1.375rem;
		height: 100%;
		display: flex;
		align-items: center;
		border-left: 1px solid $dark_grey;

		@media (max-width: 475px) {
			border-left: none;
		}

		&-icon {
			margin-left: 0.5rem;
			filter: brightness(0.8);
			transition: 0.2s ease-in-out;
		}

		&:hover &-icon {
			filter: unset;
		}
	}
}
</style>
