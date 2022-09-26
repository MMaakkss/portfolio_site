<template>
	<div class="wrapper">
		<Header />
		<div class="container main">
			<slot />
		</div>
		<Footer />
	</div>
</template>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	height: 100%;

	.main {
		flex: 1;
	}
}
</style>
