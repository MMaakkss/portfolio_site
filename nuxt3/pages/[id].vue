<template>
	<div>
		<p>Title: {{ movie.title }}</p>
		<p>Imbd Rating: {{ movieImbd.imdbRating }}</p>
	</div>
</template>

<script setup>
const config = useAppConfig();

const route = useRoute();
const movieId = route.params.id;

const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.apiKey}`;

const { data: movie } = await useFetch(url, { key: movieId });

let movieImbd = ref({});

watch(
	movie,
	() => {
		useFetch(
			() =>
				`https://www.omdbapi.com/?i=${movie.value.imdb_id}&apikey=${config.ombdToken}`,
			{ key: movie.value.imdb_id }
		).then((res) => {
			movieImbd.value = res.data.value;
		});
	},
	{
		deep: true,
		immediate: true,
	}
);

console.log(movie.value);
</script>
