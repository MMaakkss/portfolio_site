<template>
	<div class="hello">
		<div class="introduce">
			<p class="introduce__hi">Hi all. I am</p>
			<h1 class="introduce__name">Maksym Minakov</h1>
			<p class="introduce__position">> Front-end developer</p>
			<div class="introduce__comments">
				<p class="comment">// you can also see it on my Github page</p>
				<p class="comment">// you can also see it on my Github page</p>
				<p class="comment link">
					<span class="blue">const </span>
					<span class="green">githubLink </span>
					=
					<span class="red">
						“<a href="https://github.com/MMaakkss">https://github.com/MMaakkss</a>”
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

	.introduce {
		color: $white;
		max-width: 521px;
		min-width: max-content;

		&__hi {
			font-size: 1.125rem;
		}

		&__name {
			line-height: 5.125rem;
			font-size: 3.875rem;
		}

		&__position {
			font-size: 2rem;
			color: $blue;
		}

		&__comments {
			margin-top: 5.125rem;

			.comment {
				margin-top: 15px;
				color: $light_grey;

				&:first-child {
					margin: 0;
				}

				&.link {
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