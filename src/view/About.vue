<template>
	<div class="about">
		<Accordion></Accordion>
	</div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";

export default {
	name: "About",
	components: {
		Accordion
	}
}
</script>

<style lang="scss" scoped>
.about{
	height: 100%;
}
</style>