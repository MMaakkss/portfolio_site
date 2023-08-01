<template>
	<div class="wrapper">
		<p>// Code snippet showcase:</p>
		<div class="code">
			<div
				v-if="typeof code === 'object'"
				v-for="(item, idx) in code"
				:key="idx"
				class="code__item"
			>
				<highlightjs
					language='javascript'
					:code="item"
				/>
			</div>
			<highlightjs
				v-else
				language='javascript'
				:code="code"
			/>
		</div>
	</div>
</template>

<script>
import "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
	name: "CodeSnippet",
	components: {
		highlightjs: hljsVuePlugin.component,
	},
	props: {
		code: {
			type: [String, Array],
			default: () => []
		}
	},
}
</script>

<style lang="scss" scoped>
@import "../../style/variables";

.wrapper {
	width: 100%;
	height: fit-content;

	p {
		margin-bottom: 60px;
	}

	.code {

		&__item {
			padding: 20px 0;
			border-bottom: 1px solid $dark_grey;

			&:first-child {
				padding-top: 0;
			}

			&:last-child {
				padding-bottom: 0;
				border: none;
			}

			pre {
				padding: 25px 30px;
				border-radius: 10px;
				border: 1px solid $dark_grey;
				background-color: $dark_blue;
			}
		}
	}
}
</style>