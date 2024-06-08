<template>
  <div v-if="this.$route.name !== 'hello'" class="close">
    <span @click="this.$router.push('/hello')"></span>
  </div>
</template>

<script>
export default {
  name: "CloseButton",
}
</script>

<style lang="scss" scoped>
@import "../../style/variables";

.close {
  padding: 5px 3px;
  border-left: 1px solid $dark_grey;

  @media (max-width: 992px) {
    display: none;
  }

  span {
    display: block;
    cursor: pointer;
    width: 18px;
    height: 7px;
    background: $light_grey;
  }
}
</style>