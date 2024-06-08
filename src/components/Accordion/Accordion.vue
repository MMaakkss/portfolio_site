<template>
  <div class="accordion">
    <div
      class="accordion__item"
      :style="{maxHeight: height + 'px'}"
      :class="{active: isActive}"
    >
      <router-link v-if="data.link" :to="data.link">
				<span class="accordion__item-title" @click="toggleAccordion">
					<font-awesome-icon class="icon-top" icon="custom-arrow"/>
					{{ data.title }}
				</span>
      </router-link>

      <span v-else class="accordion__item-title" @click="toggleAccordion">
				<font-awesome-icon class="icon icon-top" icon="custom-arrow"/>
				{{ data.title }}
			</span>

      <div v-if="data.inner && !checkList" class="accordion__item-content">
        <AccordionItem
          v-for="item in data.inner"
          :key="item.title"
          :item="item"
          :height="height"
          @inner-height-plus="innerHeight"
          @inner-height-minus="innerHeightM"
        />
      </div>

      <div v-if="checkList" class="check-list">
        <FormKit
          type="checkbox"
          :options="data.inner"
          v-model="formValue"
        >
          <template #label="context">
            <font-awesome-icon class="icon" :icon="`custom-${context.option.value.toLowerCase()}`"/>
            <span>{{ context.option.label }}</span>
          </template>
        </FormKit>
      </div>
    </div>
  </div>
</template>

<script>
import AccordionItem from "./AccordionItem.vue"

import { library } from "@fortawesome/fontawesome-svg-core"
import { customArrow, customMail, customTel, customLink, customHtml, customTs, customCss } from "@/assets/icons.js"

library.add(customArrow, customMail, customTel, customLink, customHtml, customTs, customCss)

export default {
  name: "Accordion",
  components: {
    AccordionItem,
  },
  props: {
    data: {
      type: Object,
      default: {},
    },
    checkList: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
      height: 40,
      contentHeight: 0,
      formValue: {},
    }
  },
  computed: {
    itemHeight() {
      const paddings = 36
      let itemHeight = 0
      let marginHeight = 0

      if (!this.checkList) {
        itemHeight = 16 * this.data.inner.length
        marginHeight = 13 * (this.data.inner.length - 1)
      } else {
        let innerLength = Object.keys(this.data.inner).length
        itemHeight = 16 * innerLength
        marginHeight = 13 * (innerLength - 1)
      }

      let contentHeight = itemHeight + paddings + marginHeight + this.contentHeight

      return contentHeight + 40
    },
  },
  methods: {
    toggleAccordion() {
      this.isActive = !this.isActive

      if (!this.data.inner) return

      if (this.isActive) {
        this.height = this.itemHeight
      } else {
        this.height = 40
      }
    },
    innerHeight(height) {
      this.contentHeight += height
      this.height += height
    },
    innerHeightM(height) {
      this.contentHeight -= height
      this.height -= height
    },
  },
  watch: {
    formValue() {
      this.$emit("project-list", JSON.parse(JSON.stringify(this.formValue)))
    },
    $route() {
      this.height = 40
      this.isActive = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../style/variables";

.accordion {
  width: 309px;

  @media (max-width: 992px) {
    width: 270px;
  }

  @media (max-width: 820px) {
    width: 100%;
  }

  &__item {
    border-bottom: 1px solid $dark_grey;
    max-height: 40px;
    overflow: hidden;
    transition: 0.5s ease;

    @media (max-width: 820px) {
      border: none;
    }

    &.active {
      .icon-top {
        transform: translate(-5px, 0) rotate(0deg);
      }
    }

    &.active &-inner .icon {
      margin: 0;
    }

    &.active &-title {
      color: $white;
    }

    &-title {
      padding-left: 1.7rem;
      height: 2.5rem;
      border-bottom: 1px solid $dark_grey;
      cursor: pointer;
      transition: 0.25s ease;
      display: flex;
      align-items: center;

      @media (max-width: 820px) {
        color: $white;
        background: $dark_grey;
        padding: 0px 47px;
      }

      @media (max-width: 475px) {
        padding: 0px 37px;
      }

      @media (max-width: 320px) {
        padding: 0px 27px;
      }

      .icon {
        position: relative;
        left: -10px;
        top: 4px;
        transform: rotate(-90deg);
      }

      &:hover {
        color: $white;
      }
    }

    &-content {
      padding: 1.125rem 0;
    }

    &-inner {
      padding: 1.125rem 0;

      p {
        margin-bottom: 0.8125rem;
        padding-left: 0.85rem;
        display: flex;
        align-items: center;

        &:last-child {
          margin: 0;
        }

        a {
          padding-left: 0.6rem;
          transition: 0.25s ease;

          &:hover {
            color: $white;
          }
        }

        span {
          padding-left: 0.55rem;
        }
      }
    }

    .icon {
      font-size: 0.7rem;
      transition: transform 0.25s ease;
    }
  }

  .check-list {
    padding: 18px 0 0 12px;

    @media (max-width: 820px) {
      padding: 18px 30px 0;
    }

    @media (max-width: 475px) {
      padding: 18px 20px 0;
    }

    @media (max-width: 320px) {
      padding: 18px 10px 0;
    }

    span {
      text-transform: capitalize;
    }

    .icon {
      font-size: unset;
      width: 20px;
      margin-right: 12px;
    }

    :deep {
      .formkit-option {
        margin-bottom: 13px;
      }

      .formkit-outer {
        .formkit-wrapper {
          display: flex;
        }

        .formkit-wrapper, .formkit-input {
          cursor: pointer !important;
        }

        .formkit-decorator {
          display: inline-block;
          width: 18px;
          height: 18px;
          border: 1px solid $light_grey;
          border-radius: 2px;
          display: flex;
          place-content: center;
          transition: 0.2s ease;
          margin-right: 20px;

          &::before {
            transition: 0.3s ease;
            display: inline-block;
            content: '\2713';
            transform: scale(1.3);
            color: $white;
            opacity: 0;
          }
        }

        .formkit-input {
          display: none;
        }

        .formkit-input:checked + .formkit-decorator {
          background-color: $light_grey;

          &::before {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>