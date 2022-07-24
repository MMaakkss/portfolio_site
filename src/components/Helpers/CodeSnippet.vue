<template>
	<div class="wrapper">
		<div class="code">
			<code>
				<pre>function initializeModelChunk(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk = (chunk: any);

  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;

  return value;
  }
				</pre>
			</code>
		</div>
	</div>
</template>

<script>
export default {
	name: "CodeSnippet"
}

</script>

<style lang="scss" scoped>
@import "../../style/variables";

.code {
	padding: 25px 30px;
	border-radius: 10px;
	background-color: $dark_blue;
	border: 1px solid $dark_grey;
}
</style>