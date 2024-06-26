<template>
  <div class="wrapper">
    <Header/>
    <template v-if="this.$route.name === 'hello'">
      <Hello class="hello-content"/>
    </template>
    <template v-else>
      <div class="content">
        <div class="mobile-tab">_ {{ this.$route.name }}</div>
        <div v-if="this.$route.name === 'projects'" class="content__accordion">
          <Accordion
            :data="accordionContent"
            :check-list="true"
            @project-list="getList"
          />
        </div>

        <div v-else class="content__accordion">
          <Accordion
            v-for="(item, idx) in accordionContent"
            :key="idx"
            :data="item"
          />
        </div>

        <div class="content__main">
          <Tabs class="content__tab"/>

          <div class="content__main__section">
            <router-view style="flex: 1" :list="list"/>
            <CloseButton/>
          </div>
        </div>
      </div>
    </template>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Accordion from "../components/Accordion/Accordion.vue"
import Tabs from "../components/Helpers/Tabs.vue"
import CloseButton from "../components/Helpers/CloseButton.vue"
import Hello from "./Hello.vue"

import { mapActions, mapState } from "vuex"

export default {
  components: {
    Footer,
    Header,
    Accordion,
    Tabs,
    CloseButton,
    Hello,
  },
  data() {
    return {
      aboutItems: [
        {
          title: "personal-info",
          icon: "",
          inner: [
            {
              title: "bio",
              icon: "custom-folder",
              iconColor: "#E99287",
              inner: [],
            },
            {
              title: "interests",
              icon: "custom-folder",
              iconColor: "#43D9AD",
              inner: [
                {
                  title: "school",
                  icon: "custom-education",
                  link: "school",
                },
              ],
            },
            {
              title: "education",
              icon: "custom-folder",
              iconColor: "#3A49A4",
              inner: [],
            },
          ],
        },
        {
          title: "contacts",
          icon: "",
          inner: [
            {
              title: "maks_minakov@icloud.com",
              icon: "custom-mail",
            },
            {
              title: "+38094583772",
              icon: "custom-tel",
            },
          ],
        },
      ],
      list: [],
    }
  },
  computed: {
    ...mapState({
      reposList: "projectList",
      techList: "techList",
    }),
    accordionContent() {
      if (this.$route.matched.some(route => route.path === "/about")) {
        return [
          {
            title: "personal-info",
            icon: "",
            inner: [
              {
                title: "education",
                icon: "custom-folder",
                iconColor: "#E99287",
                inner: [
                  {
                    title: "about education",
                    icon: "custom-education",
                    link: "education",
                  },
                ],
              },
              {
                title: "experience",
                icon: "custom-folder",
                iconColor: "#43D9AD",
                inner: [
                  {
                    title: "about experience",
                    icon: "custom-education",
                    link: "experience",
                  },
                ],
              },
            ],
          },
          {
            title: "contacts",
            icon: "",
            inner: [
              {
                title: "maks_minakov@icloud.com",
                icon: "custom-mail",
              },
              {
                title: "+38094583772",
                icon: "custom-tel",
              },
            ],
          },
        ]
      } else if (this.$route.name === "contact") {
        return [
          {
            title: "contacts",
            icon: "",
            inner: [
              {
                title: "maks_minakov@icloud.com",
                icon: "custom-mail",
              },
              {
                title: "+38094583772",
                icon: "custom-tel",
              },
            ],
          },
          {
            title: "find-me-also-in",
            icon: "",
            inner: [
              {
                title: "Telegram",
                icon: "custom-link",
                link: "https://t.me/windstom",
              },
            ],
          },
        ]
      } else if (this.$route.name === "projects") {
        const tech = this.techList

        return {
          title: "projects",
          inner: tech,
        }
      }
    },
  },
  methods: {
    ...mapActions({
      getGitHubRepos: "getRepos",
    }),
    getList(data) {
      this.list = data
    },
  },
  created() {
    this.getGitHubRepos("MMaakkss")
  },
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;

  .content {
    flex: 1 0 auto;
    display: flex;
    width: 100%;

    @media (max-width: 992px) {
      margin-top: 52px;
    }

    @media (max-width: 820px) {
      display: block;
    }

    &__tab {
      @media (max-width: 820px) {
        display: none;
      }
    }

    .mobile-tab {
      display: none;
      color: $white;
      margin: 20px 0 30px;
      padding-left: 30px;

      @media (max-width: 820px) {
        display: block;
      }

      @media (max-width: 475px) {
        padding-left: 20px;
      }

      @media (max-width: 320px) {
        padding-left: 10px;
      }
    }

    &__accordion {
      border-right: 1px solid $dark_grey;
    }

    &__main {
      flex: 1;

      &__section {
        display: flex;
        height: 100%;
      }
    }
  }

  .footer {
    flex: 0 0 auto;
  }
}
</style>
