<template>
	<div class="wrapper">
		<section class="section">
			<div class="title">
				Freelance <span class="title__date">February 2021 - March 2021</span>
			</div>
			<p class="description">
				Created some simple landings using html/css/js
			</p>
		</section>
		<section class="section">
			<div class="title">
				Comserve <span class="title__date">March 2022 - November 2022</span>
			</div>
			<p class="description">
				I worked in a team where we developed a small marketplace as well as a project management system somewhat similar to GitLab. I also developed templates for the website builder.
				<br>
				Technology stack: vue.js, express.js, mongoDB
			</p>
		</section>
		<section class="section">
			<div class="title">
				Bondioli & Pavesi <span class="title__date">November 2022 - Present</span>
			</div>
			<p class="description">
				I developed a company website that includes an online shop from scratch. I was the only front-end developer and worked in a team with a designer and a back-end developer. I also redesigned the admin panel for this site and made a mini shop for promotional purposes.
				<br>
				Technology stack: front-end: vue 3, back-end: bitrix
			</p>
		</section>
	</div>
</template>

<script>
</script>

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

		@media (max-width: 1120px) {
			top: calc(50% + 10px);
		}

		@media (max-width: 435px) {
			left: -1px;
			height: calc(100% - 70px);
		}
	}
}

.section {
	padding: 40px;

	@media (max-width: 880px) {
		padding: 40px 20px 40px 40px;
	}

	@media (max-width: 435px) {
		padding: 20px;
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

		@media (max-width: 1120px) {
			display: flex;
			flex-direction: column;
			
			&__date {
				margin-left: 50px;
				margin-top: 5px;
			}
		}

		@media (max-width: 570px) {
			font-size: 1.6rem;

			&__date {
				font-size: 1.4rem;
			}
		}

		@media (max-width: 515px) {
			font-size: 1.5rem;

			&__date {
				font-size: 1.2rem;
				margin-left: 20px;
			}
		}

		@media (max-width: 435px) {
			&__date {
				margin-left: 0;
			}
		}

		@media (max-width: 380px) {
			&__date {
				font-size: 1rem;
			}
		}

		@media (max-width: 325px) {
			font-size: 1.4rem;

			&__date {
				font-size: 0.9rem;
			}
		}
	}

	.description {
		font-size: 1.2rem;
		margin-top: 20px;

		@media (max-width: 515px) {
			font-size: 1rem;
			margin-top: 10px;
		}

		@media (max-width: 325px) {
			font-size: 0.9rem;
		}
	}
}
</style>