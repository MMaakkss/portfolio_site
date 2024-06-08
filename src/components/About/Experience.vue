<template>
  <div class="wrapper">
    <section class="section animate__animated animate__bounceInLeft">
      <h3 class="title">
        Comserve <span class="title__date">March 2022 - November 2022</span>
      </h3>
      <div class="description">
        <ul>
          <li>
            Project Management System: I collaborated with the team to develop a robust project management
            system, which streamlined workflow processes, enhanced team collaboration, and facilitated
            efficient project tracking and monitoring.
          </li>
          <li>
            Website Builder Templates: I leveraged my design and development skills to create visually
            appealing and functional templates for a website builder platform. These templates aimed to
            empower users with the ability to quickly and easily create professional-looking websites without the
            need for extensive coding knowledge.
          </li>
        </ul>
        <b>Technology stack:</b> vue 2(options api), express.js, mongoDB
      </div>
    </section>
    <section class="section animate__animated animate__bounceInLeft">
      <h3 class="title">
        Bondioli & Pavesi <span class="title__date">November 2022 - October 2023</span>
      </h3>
      <div class="description">
        In this role, I spearheaded the development initiatives aimed at enhancing the digital presence of the
        company. Key accomplishments include:
        <ul>
          <li>
            Designing and deploying a dynamic company website, featuring an integrated marketplace to
            facilitate transactions.
          </li>
          <li>
            Overhauling the existing admin panel, implementing enhancements to streamline administrative
            tasks and improve user experience.
          </li>
          <li>
            Creating a bespoke mini-shop tailored specifically for the company's advertising campaigns,
            bolstering its promotional endeavors.
          </li>
          <li>
            Leveraging the completed web platform as a foundation to craft progressive web applications
            (PWAs) for both iOS and Android platforms, ensuring seamless accessibility across diverse devices
            and operating systems.
          </li>
          <li>
            Throughout these endeavors, I employed a diverse set of technologies and methodologies,
          </li>
        </ul>
        <b>Technology stack:</b> Vue 3, Capasitor, Git
      </div>
    </section>
    <section class="section animate__animated animate__bounceInLeft">
      <h3 class="title">
        Woki one <span class="title__date">October 2023 - January 2024</span>
      </h3>
      <div class="description">
        <p>
          In this position, my responsibilities encompassed the enhancement and maintenance of the incumbent
          CRM system. This entailed debugging existing functionalities, incorporating new features, and refining
          application performance for optimal speed. Notably, I assumed the task of project onboarding,
          necessitating the assimilation of the codebase devoid of comprehensive documentation. Subsequently,
          extensive refactoring and code optimization were undertaken to streamline operations. Additionally, a
          substantial portion of the codebase was transitioned into TypeScript to enhance type safety and
          maintainability
        </p>
        <b>Technology stack:</b> Vue 3, Vuetify, TypeScript, Git, Jira
      </div>
    </section>
    <section class="section animate__animated animate__bounceInLeft">
      <h3 class="title">
        CloudPrinter <span class="title__date">April 2024 - Present</span>
      </h3>
    </section>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import "../../style/variables";

.wrapper {
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 18.8px;
    height: calc(100% - 105px);
    width: 2px;
    background-color: $light_grey;

    @media (max-width: 1120px) {
      top: calc(50% + 10px);
    }

    @media (max-width: 435px) {
      left: -1px;
      height: calc(100% - 70px);
    }
  }
}

.section {
  padding: 40px;

  &:first-child {
    animation-duration: 1s;
  }

  &:nth-child(2) {
    animation-duration: 1.5s;
  }

  &:last-child {
    animation-duration: 2s;
  }

  @media (max-width: 880px) {
    padding: 40px 20px 40px 40px;
  }

  @media (max-width: 435px) {
    padding: 20px;
  }

  .title {
    color: $white;
    font-size: 1.8rem;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: -25px;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 100%;
      border: 2px solid $light_grey;
      background-color: $light_dark;
    }

    &__date {
      font-size: 1.6rem;
      color: $orange;
    }

    @media (max-width: 1120px) {
      display: flex;
      flex-direction: column;

      &__date {
        margin-left: 50px;
        margin-top: 5px;
      }
    }

    @media (max-width: 570px) {
      font-size: 1.6rem;

      &__date {
        font-size: 1.4rem;
      }
    }

    @media (max-width: 515px) {
      font-size: 1.5rem;

      &__date {
        font-size: 1.2rem;
        margin-left: 20px;
      }
    }

    @media (max-width: 435px) {
      &__date {
        margin-left: 0;
      }
    }

    @media (max-width: 380px) {
      &__date {
        font-size: 1rem;
      }
    }

    @media (max-width: 325px) {
      font-size: 1.4rem;

      &__date {
        font-size: 0.9rem;
      }
    }
  }

  .description {
    font-size: 1.2rem;
    margin-top: 20px;

    p {
      padding: 10px 0;
    }

    ul {
      padding: 10px 0 10px 25px;
    }

    li {
      list-style: unset;
    }

    @media (max-width: 515px) {
      font-size: 1rem;
      margin-top: 10px;
    }

    @media (max-width: 325px) {
      font-size: 0.9rem;
    }
  }
}
</style>