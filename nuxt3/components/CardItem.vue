<template>
	<div class="card">
		<img
			class="card__img"
			:src="`https://image.tmdb.org/t/p/original/${data.poster_path}`"
			height="440"
			width="290"
			:alt="data.title"
		/>
		<p class="card__title">{{ data.title }}</p>
		<p class="card__rating">Rating: {{ data.vote_average }}</p>
	</div>
</template>
<script>
export default {
	props: {
		data: {
			type: Object,
			default: () => {},
		},
	},
};
</script>
<style lang="scss" scoped>
.card {
	width: fit-content;
	overflow: hidden;
	max-width: 290px;
	height: 100%;
	padding-bottom: 20px;
	border-radius: 14px;
	background-color: $dark;
	box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12),
		0px 12px 24px rgba(0, 0, 0, 0.12), 0px 1px 32px rgba(0, 0, 0, 0.12);
	color: $white;
	text-align: center;

	&__title {
		font-size: 24px;
		margin-top: 20px;
		font-weight: 400;
	}

	&__rating {
		font-size: 20px;
		font-weight: 300;
		margin-top: 10px;
	}
}
</style>
