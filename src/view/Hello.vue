<template>
	<div class="hello">
		<div class="introduce animate__animated animate__bounceInLeft">
			<p class="introduce__hi">Hi all. I am</p>
			<h1 class="introduce__name">Maksym Minakov</h1>
			<p class="introduce__position">> Front-end developer</p>
			<div class="introduce__comments">
				<p class="comment">// you can also see it on my Github page</p>
				<p class="comment link">
					<span class="blue">const </span>
					<span class="green">githubLink </span>
					=
					<span class="red">
						“<a target="_blank" href="https://github.com/MMaakkss">https://github.com/MMaakkss</a>”
					</span>
				</p>
			</div>
		</div>
		<div class="game">
			<Game/>
		</div>
	</div>
</template>

<script>
import Game from "@/components/Game.vue";

export default {
	name: "Hello",
	components: {
		Game,
	}
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.hello {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	gap: 130px;
	overflow: hidden;
	
	@media (max-width: 1200px) {
		gap: 80px;
	}

	@media (max-width: 992px) {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			width: 200px;
			height: 200px;
			background: $green;
			opacity: 0.4;
			filter: blur(174px);
			transform: rotate(-94.3deg);
			z-index: -1;
			top: 145px;
			left: 85px;
		}

		&:after {
			content: '';
			position: absolute;
			width: 200px;
			height: 400px;
			opacity: 0.4;
			background: $blue;
			opacity: 0.4;
			filter: blur(174px);
			transform: rotate(45deg);
			z-index: -1;
			right: 150px;
			bottom: 0px;
		}
	}

	@media (max-width: 768px) {
		align-items: unset;
		padding-top: 96px;
		padding-bottom: 20px;

		&:before {
			filter: blur(140px);
			top: 115px;
			left: 10%;
		}

		&:after {
			filter: blur(140px);
			right: 10%;
		}
	}

	@media (max-height: 600px) {
		overflow-y: auto;
	}

	@media (max-width: 520px) {
		padding: 96px 30px 20px 30px;
	}

	.introduce {
		color: $white;
		max-width: 521px;
		min-width: max-content;

		@media (max-width: 520px) {
			max-width: 100%;
			min-width: unset;
		}

		&__hi {
			font-size: 1.125rem;

			@media (max-width: 600px) {
				font-size: 0.9rem;
			}

			@media (max-width: 510px) {
				font-size: 1rem;
			}

			@media (max-width: 345px) {
				font-size: 0.8rem;
			}
		}

		&__name {
			line-height: 5.125rem;
			font-size: 3.875rem;

			@media (max-width: 600px) {
				font-size: 3.175rem;
			}

			@media (max-width: 510px) {
				font-size: 3.675rem;
				line-height: 4.125rem;
			}

			@media (max-width: 345px) {
				font-size: 3.175rem;
			}

		}

		&__position {
			font-size: 2rem;
			color: $blue;

			@media (max-width: 600px) {
				font-size: 1.4rem;
			}

			@media (max-width: 510px) {
				margin-top: 10px;
			}

			@media (max-width: 345px) {
				font-size: 0.99rem;
			}

			animation: bounceInLeft;
			animation-duration: 1.5s;
		}

		&__comments {
			margin-top: 5.125rem;

			@media (max-width: 768px) {
				position: absolute;
				bottom: 0;
				padding-bottom: 30px;
			}

			@media (max-height: 600px) {
				position: unset;
			}

			@media (max-width: 600px) {
				font-size: 0.9rem;
			}

			@media (max-width: 510px) {
				font-size: 1rem;
				word-break: break-all;
			}

			@media (max-width: 345px) {
				font-size: 0.8rem;
			}

			.comment {
				margin-top: 15px;
				color: $light_grey;

				animation: bounceInLeft;
				animation-duration: 2s;

				&.link {
					animation: bounceInLeft;
					animation-duration: 3s;

					.blue {
						color: $blue;
					}

					.green {
						color: $green;
					}

					.red {
						color: $red;

						a {
							color: $red;
							text-decoration: 0.5px underline solid $red;
						}
					}
				}
			}
		}
	}

	.game {
		min-width: max-content;
		position: relative;

		@media (max-width: 992px) {
			display: none;
		}

		&:before {
			content: '';
			position: absolute;
			width: 200px;
			height: 200px;
			background: $green;
			opacity: 0.4;
			filter: blur(174px);
			transform: rotate(-94.3deg);
			z-index: -1;
			top: -100px;
			left: -100px;
		}

		&:after {
			content: '';
			position: absolute;
			width: 200px;
			height: 400px;
			opacity: 0.4;
			background: $blue;
			opacity: 0.4;
			filter: blur(174px);
			transform: rotate(45deg);
			z-index: -1;
			right: -80px;
			bottom: -180px;
		}
	}
}
</style>