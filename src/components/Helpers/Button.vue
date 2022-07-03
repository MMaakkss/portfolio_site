<template>
	<div class="button">{{ label }}</div>
</template>

<script>
export default {
	name: "Button",
	props:{
		label: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../style/variables";

.button{
	padding: 10px 14px;
	background-color: $orange;
	border-radius: 8px;
	color: $dark;
	transition: 0.3s ease-in-out;
	cursor: pointer;
	&:hover{
		outline: 1px solid $white;
		background-color: unset;
		color: $white;
	}
}
</style>