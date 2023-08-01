<template>
	<div class="game">
		<span class="game__decorator"></span>
		<span class="game__decorator"></span>
		<span class="game__decorator"></span>
		<span class="game__decorator"></span>
		<p class="game__title">Tic Tac Toe</p>
		<p class="game__prompt">Player "{{ player }}"s turn</p>
		<div class="game__board">
			<div v-for="(row, x) in board" :key="x" class="game__column">
				<div
					v-for="(cell, y) in row"
					:key="y"
					@click="makeMove(x, y)"
					class="game__row"
				>
					<span class="game__mark" v-if="cell === 'X'">x</span>
					<span class="game__mark" v-if="cell === 'O'">o</span>
				</div>
			</div>
		</div>
		<p v-if="winner" class="game__winner">Player "{{ winner }}" wins!</p>
		<Button @click="resetGame" label="Reset"/>
	</div>
</template>

<script>
import Button from "./Helpers/Button.vue";

export default {
	name: "Game",
	components: {
		Button
	},
	data() {
		return {
			player: "X",
			board: [
				["", "", ""],
				["", "", ""],
				["", "", ""]
			],
		}
	},
	computed: {
		winner() {
			return this.calculateWinner(this.board.flat())
		}
	},
	methods: {
		makeMove(x, y) {
			if (this.winner) return
			if (this.board[x][y]) return
			this.board[x][y] = this.player
			this.player = this.player === "X" ? "O" : "X"
		},
		calculateWinner(board) {
			const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
			for (let i = 0; i < lines.length; i++) {
				const [a, b, c] = lines[i]
				if (board[a] && board[a] === board[b] && board[a] === board[c]) {
					return board[a]
				}
			}
			return null
		},
		resetGame() {
			this.board = [
				["", "", ""],
				["", "", ""],
				["", "", ""]
			]
			this.player = "X"
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.game {
	text-align: center;
	color: $white;
	padding: 50px 90px;
	background: linear-gradient(150.26deg, rgba(23, 85, 83, 0.7) 1.7%, rgba(67, 217, 173, 0.091) 81.82%);
	border: 1px solid $dark;
	box-shadow: inset 0px 2px 0 rgba(255, 255, 255, 0.3);
	border-radius: 8px;
	position: relative;

	@media (max-width: 1200px) {
		padding: 40px 60px;
	}

	&__decorator {
		display: block;
		background: radial-gradient(73.08% 73.08% at 50% 26.92%, #196C6A 15.1%, #114B4A 100%);
		box-shadow: 2px 2px 4px #0D4341, inset 0 1px 2px #1A8277;
		width: 13px;
		height: 13px;
		border-radius: 100%;
		position: absolute;

		&:after {
			content: "✕";
			position: relative;
			font-size: 0.8rem;
			color: $secondary_green;
			top: -3px;
			left: 0.2px;
		}

		&:nth-child(1) {
			top: 8px;
			left: 8px;
		}

		&:nth-child(2) {
			bottom: 8px;
			left: 8px;
		}

		&:nth-child(3) {
			top: 8px;
			right: 8px;
		}

		&:nth-child(4) {
			bottom: 8px;
			right: 8px;
		}
	}

	&__title {
		font-size: 2rem;
		margin-bottom: 20px;
	}

	&__prompt {
		color: $green;
		margin-bottom: 10px;
	}

	&__board {
		width: fit-content;
		border: 1px solid $white;
		margin: auto auto 20px;
	}

	&__row {
		width: 5.5rem;
		height: 5.5rem;
		cursor: pointer;
		border-right: 1px solid $white;
		transition: 0.2s ease-in-out;

		@media (max-width: 1200px) {
			width: 4.5rem;
			height: 4.5rem;
		}

		&:last-child {
			border: none;
		}

		&:hover {
			background-color: $dark_grey;
		}
	}

	&__column {
		display: flex;
		border-bottom: 1px solid $white;

		&:last-child {
			border: none;
		}
	}

	&__mark {
		display: flex;
		align-items: center;
		height: 100%;
		justify-content: center;
		font-size: 3rem;
	}

	&__winner {
		margin-bottom: 20px;
	}
}
</style>