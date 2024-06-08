<template>
  <div class="tabs">
    <div
      class="tabs__item"
    >
			<span>
				{{ $route.name }}
			</span>
      <router-link to="hello">
        <font-awesome-icon @click="deleteR(item, idx)" class="icon" icon="custom-close"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { customClose } from "@/assets/icons.js"

library.add(customClose)

export default {
  name: "Tabs",
  methods: {
    deleteR(routeName, routeIdx) {
      this.$router.push('/hello')
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/style/variables";

.tabs {
  display: flex;
  border-bottom: 1px solid $dark_grey;
  overflow: auto;
  height: 2.5rem;

  &__item {
    display: flex;
    align-items: center;
    border-right: 1px solid $dark_grey;
    width: fit-content;
    padding-right: 1rem;

    span {
      padding: 0 3.375rem 0 1rem;
    }

    .icon {
      font-size: 0.6rem;
      cursor: pointer;
      transition: 0.25s ease;

      &:hover {
        color: $white;
      }
    }
  }
}
</style>