<template>
	<div>
		<div @click="prev">prev</div>
		<div @click="next">next</div>
		<div class="list">
			<NuxtLink
				class="list__item"
				v-for="item in list.results"
				:key="item.id"
				:to="`/${item.id}`"
			>
				<CardItem :data="item" />
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
const config = useAppConfig();

let page = ref(1);
let year = 2022;

let url = computed(
	() =>
		`https://api.themoviedb.org/3/discover/movie?api_key=${config.apiKey}&sort_by=popularity.desc&page=${page.value}&year=${year}`
);

const { data: list } = await useFetch(() => url.value, {
	watch: [page],
});

const next = () => {
	page.value++;
};
const prev = () => {
	if (page.value > 1) {
		page.value--;
	}
};
</script>

<style lang="scss" scoped>
.list {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 25px;

	&__item {
		cursor: pointer;
		border-radius: 14px;
		transition: 0.2s;

		&:hover {
			box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3),
				0px 12px 24px rgba(0, 0, 0, 0.3), 0px 1px 32px rgba(0, 0, 0, 0.3);
		}
	}
}
</style>
