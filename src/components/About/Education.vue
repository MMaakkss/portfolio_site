<template>
	<div class="wrapper">
		<section class="section animate__animated animate__bounceInLeft">
			<h3 class="title">
				Step IT Academy <span class="title__date">2021 - 2022</span>
			</h3>
		</section>
		<section class="section animate__animated animate__bounceInLeft">
			<h3 class="title">
				Chernihiv National University of Technology <span class="title__date">2022 - Current</span>
			</h3>
		</section>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../style/variables";

.wrapper {
	position: relative;

	&:before {
		content: "";
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 18.8px;
		height: calc(100% - 105px);
		width: 2px;
		background-color: $light_grey;

		@media (max-width: 1430px) {
			height: calc(100% - 135px);
		}

		@media (max-width: 1071px) and (min-width: 821px) {
			top: 48%;
		}

		@media (max-width: 653px) {
			top: 48%;
		}

		@media (max-width: 435px) {
			left: -1px;
			height: calc(100% - 100px);
		}

		@media (max-width: 332px) {
			top: 45%;
			height: calc(100% - 110px);
		}
	}
}

.section {
	padding: 40px;

	&:first-child {
		animation-duration: 1s;
	}

	&:nth-child(2) {
		animation-duration: 1.5s;
	}
	
	@media (max-width: 1115px) {
		padding: 40px 0 40px 40px;
	}

	@media (max-width: 435px) {
		padding: 20px 0 20px 20px;
	}

	.title {
		color: $white;
		font-size: 1.8rem;
		position: relative;

		&:before {
			content: "";
			position: absolute;
			top: 50%;
			left: -25px;
			transform: translateY(-50%);
			width: 10px;
			height: 10px;
			border-radius: 100%;
			border: 2px solid $light_grey;
			background-color: $light_dark;
		}

		&__date {
			font-size: 1.6rem;
			color: $orange;
		}

		@media (max-width: 1430px) {
			display: flex;
			flex-direction: column;

			&__date {
				margin-top: 5px;
			}
		}

		@media (max-width: 1195px) {
			font-size: 1.6rem;
		}

		@media (max-width: 740px) {
			font-size: 1.4rem;

			&__date {
				font-size: 1.2rem;
			}
		}

		@media (max-width: 385px) {
			font-size: 1.2rem;

			&__date {
				font-size: 1rem;
			}
		}
	}
}
</style>