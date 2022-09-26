<template>
	<header class="header">
		<div class="header__container">
			<nav class="header__nav nav">
				<div class="nav__menu">
					<ul>
						<nuxt-link class="nav__link" to="/">Main</nuxt-link>
						<nuxt-link class="nav__link" to="/toplist">Top List</nuxt-link>
					</ul>
				</div>
			</nav>
		</div>
	</header>
</template>

<script></script>

<style lang="scss" scoped>
.header {
	height: 60px;
	background-color: $dark;
	box-shadow: 0px -17px 45px 15px rgba(0, 0, 0, 0.75);

	&__container {
		max-width: 1440px;
		padding: 0 20px;
		margin: auto;
	}

	.nav {
		&__menu ul {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 20px;
			height: 60px;
		}

		&__link {
			color: $gray;
			font-size: 16px;
			padding: 12px 35px;
			border-radius: 6px;
			transition: 0.2s ease-out;
		}
	}
}

.router-link-active {
	color: $white !important;
	background-color: $dark_gray;
}
</style>
