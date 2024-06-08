<template>
  <div class="about">
    <div class="about__main">
      <div class="tab-content">
        <template v-if="$route.name === 'about-me'">
          <section class="about__info info">
            <div class="info__lines">
              <div class="line" v-for="idx in amountOfStrokes" :key="idx">{{ idx }}</div>
            </div>
            <div class="info__text" @click="strokes">
              <div>
                /
                <svg width="9" height="9" viewBox="0 0 2.3812499 2.3812501">
                  <g transform="translate(0,-294.61873)">
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830" width="0.47607383" height="0.90203464" x="0.9563238" y="294.74072" ry="0"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-4" width="0.47607383" height="0.90203464" x="286.69781" y="70.902054" ry="0" transform="rotate(75.683724)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-4-8" width="0.47607383" height="0.90203464" x="286.10568" y="73.222321" ry="0" transform="matrix(-0.24727427,0.96894553,0.96894553,0.24727427,0,0)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-0" width="0.47607383" height="0.90203464" x="172.18759" y="-241.47386" ry="0" transform="rotate(144.11617)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-5" width="0.47607383" height="0.90203464" x="-183.13893" y="-233.60748" ry="0" transform="rotate(-142.04349)"
                    />
                    <path style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:0.05010993;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M 3.8803763,3.2702869 C 3.6286599,3.3120783 3.424065,3.5216585 3.3782466,3.7712412 3.2961512,4.1026751 3.2021246,4.4319366 3.136193,4.7669071 3.1041133,4.9995554 3.222514,5.233211 3.4127914,5.365564 3.674905,5.5706496 3.9302369,5.7863934 4.2083288,5.9696727 4.4278742,6.0996344 4.7186863,6.069256 4.9152061,5.9098529 5.187995,5.710767 5.467429,5.5193338 5.7297274,5.3067518 5.908736,5.1431395 5.963974,4.8770394 5.8927631,4.6489221 5.8123143,4.3232073 5.7347084,3.9961422 5.6417467,3.6739542 5.5575331,3.4157287 5.2848528,3.2483919 5.0170823,3.2671466 4.6549744,3.2683945 4.292385,3.2569978 3.9305798,3.2661907 c -0.016734,0.00137 -0.033469,0.00273 -0.050203,0.0041 z" transform="matrix(0.26458333,0,0,0.26458333,0,294.61873)"/>
                  </g>
                </svg>
                <svg width="9" height="9" viewBox="0 0 2.3812499 2.3812501">
                  <g transform="translate(0,-294.61873)">
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830" width="0.47607383" height="0.90203464" x="0.9563238" y="294.74072" ry="0"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-4" width="0.47607383" height="0.90203464" x="286.69781" y="70.902054" ry="0" transform="rotate(75.683724)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-4-8" width="0.47607383" height="0.90203464" x="286.10568" y="73.222321" ry="0" transform="matrix(-0.24727427,0.96894553,0.96894553,0.24727427,0,0)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-0" width="0.47607383" height="0.90203464" x="172.18759" y="-241.47386" ry="0" transform="rotate(144.11617)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-5" width="0.47607383" height="0.90203464" x="-183.13893" y="-233.60748" ry="0" transform="rotate(-142.04349)"/>
                    <path style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:0.05010993;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M 3.8803763,3.2702869 C 3.6286599,3.3120783 3.424065,3.5216585 3.3782466,3.7712412 3.2961512,4.1026751 3.2021246,4.4319366 3.136193,4.7669071 3.1041133,4.9995554 3.222514,5.233211 3.4127914,5.365564 3.674905,5.5706496 3.9302369,5.7863934 4.2083288,5.9696727 4.4278742,6.0996344 4.7186863,6.069256 4.9152061,5.9098529 5.187995,5.710767 5.467429,5.5193338 5.7297274,5.3067518 5.908736,5.1431395 5.963974,4.8770394 5.8927631,4.6489221 5.8123143,4.3232073 5.7347084,3.9961422 5.6417467,3.6739542 5.5575331,3.4157287 5.2848528,3.2483919 5.0170823,3.2671466 4.6549744,3.2683945 4.292385,3.2569978 3.9305798,3.2661907 c -0.016734,0.00137 -0.033469,0.00273 -0.050203,0.0041 z" transform="matrix(0.26458333,0,0,0.26458333,0,294.61873)"/>
                  </g>
                </svg>
              </div>
              <div class="stars">
                <div v-for="idx in amountOfStars" :key="idx">
                  <svg width="9" height="9" viewBox="0 0 2.3812499 2.3812501">
                    <g transform="translate(0,-294.61873)">
                      <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830" width="0.47607383" height="0.90203464" x="0.9563238" y="294.74072" ry="0"/>
                      <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-4" width="0.47607383" height="0.90203464" x="286.69781" y="70.902054" ry="0" transform="rotate(75.683724)"/>
                      <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-4-8" width="0.47607383" height="0.90203464" x="286.10568" y="73.222321" ry="0" transform="matrix(-0.24727427,0.96894553,0.96894553,0.24727427,0,0)"/>
                      <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-0" width="0.47607383" height="0.90203464" x="172.18759" y="-241.47386" ry="0" transform="rotate(144.11617)"/>
                      <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-5" width="0.47607383" height="0.90203464" x="-183.13893" y="-233.60748" ry="0" transform="rotate(-142.04349)"/>
                      <path style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:0.05010993;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M 3.8803763,3.2702869 C 3.6286599,3.3120783 3.424065,3.5216585 3.3782466,3.7712412 3.2961512,4.1026751 3.2021246,4.4319366 3.136193,4.7669071 3.1041133,4.9995554 3.222514,5.233211 3.4127914,5.365564 3.674905,5.5706496 3.9302369,5.7863934 4.2083288,5.9696727 4.4278742,6.0996344 4.7186863,6.069256 4.9152061,5.9098529 5.187995,5.710767 5.467429,5.5193338 5.7297274,5.3067518 5.908736,5.1431395 5.963974,4.8770394 5.8927631,4.6489221 5.8123143,4.3232073 5.7347084,3.9961422 5.6417467,3.6739542 5.5575331,3.4157287 5.2848528,3.2483919 5.0170823,3.2671466 4.6549744,3.2683945 4.292385,3.2569978 3.9305798,3.2661907 c -0.016734,0.00137 -0.033469,0.00273 -0.050203,0.0041 z" transform="matrix(0.26458333,0,0,0.26458333,0,294.61873)"/>
                    </g>
                  </svg>
                </div>
              </div>
              <div class="text animate__animated animate__bounceInLeft">
                <div>About me</div>
                <div>
                  Hi there! My name is Maks.
                  <br>
                  With an impressive 2+ years of
                  hands-on experience in front-end development, I
                  have successfully navigated the intricate
                  landscape of this field, contributing to a spectrum
                  of projects ranging from sophisticated CRM
                  systems, high-tech admin panels, e-commerce,
                  thriving marketplaces, captivating landing pages,
                  to meticulously crafted corporate websites.
                  Throughout my professional journey, I have
                  demonstrated a tenacious commitment to
                  excellence, particularly in instances where I
                  spearheaded projects from inception, showcasing
                  my proficiency in turning conceptual ideas into fully
                  functional and visually appealing digital solutions. I
                  take pride in my adaptability, having seamlessly
                  integrated myself into existing projects where the
                  absence of documentation necessitated a deep
                  dive into understanding the intricacies of the
                  codebase.
                  <br>
                  Driven by an insatiable curiosity and a passion for
                  innovation, I am now actively seeking a new
                  opportunity to contribute my skills and expertise to
                  a team that values creativity and embraces
                  challenges.
                </div>
              </div>
              <div>
                /
                <svg width="9" height="9" viewBox="0 0 2.3812499 2.3812501">
                  <g transform="translate(0,-294.61873)">
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830" width="0.47607383" height="0.90203464" x="0.9563238" y="294.74072" ry="0"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-4" width="0.47607383" height="0.90203464" x="286.69781" y="70.902054" ry="0" transform="rotate(75.683724)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-4-8" width="0.47607383" height="0.90203464" x="286.10568" y="73.222321" ry="0" transform="matrix(-0.24727427,0.96894553,0.96894553,0.24727427,0,0)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-0" width="0.47607383" height="0.90203464" x="172.18759" y="-241.47386" ry="0" transform="rotate(144.11617)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-5" width="0.47607383" height="0.90203464" x="-183.13893" y="-233.60748" ry="0" transform="rotate(-142.04349)"/>
                    <path style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:0.05010993;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M 3.8803763,3.2702869 C 3.6286599,3.3120783 3.424065,3.5216585 3.3782466,3.7712412 3.2961512,4.1026751 3.2021246,4.4319366 3.136193,4.7669071 3.1041133,4.9995554 3.222514,5.233211 3.4127914,5.365564 3.674905,5.5706496 3.9302369,5.7863934 4.2083288,5.9696727 4.4278742,6.0996344 4.7186863,6.069256 4.9152061,5.9098529 5.187995,5.710767 5.467429,5.5193338 5.7297274,5.3067518 5.908736,5.1431395 5.963974,4.8770394 5.8927631,4.6489221 5.8123143,4.3232073 5.7347084,3.9961422 5.6417467,3.6739542 5.5575331,3.4157287 5.2848528,3.2483919 5.0170823,3.2671466 4.6549744,3.2683945 4.292385,3.2569978 3.9305798,3.2661907 c -0.016734,0.00137 -0.033469,0.00273 -0.050203,0.0041 z" transform="matrix(0.26458333,0,0,0.26458333,0,294.61873)"/>
                  </g>
                </svg>
                <svg width="9" height="9" viewBox="0 0 2.3812499 2.3812501">
                  <g transform="translate(0,-294.61873)">
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830" width="0.47607383" height="0.90203464" x="0.9563238" y="294.74072" ry="0"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-4" width="0.47607383" height="0.90203464" x="286.69781" y="70.902054" ry="0" transform="rotate(75.683724)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-4-8" width="0.47607383" height="0.90203464" x="286.10568" y="73.222321" ry="0" transform="matrix(-0.24727427,0.96894553,0.96894553,0.24727427,0,0)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-0" width="0.47607383" height="0.90203464" x="172.18759" y="-241.47386" ry="0" transform="rotate(144.11617)"/>
                    <rect style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:1.20000005;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="rect830-5" width="0.47607383" height="0.90203464" x="-183.13893" y="-233.60748" ry="0" transform="rotate(-142.04349)"/>
                    <path style="opacity:1;fill:#5f7c98;fill-opacity:1;stroke:none;stroke-width:0.05010993;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" d="M 3.8803763,3.2702869 C 3.6286599,3.3120783 3.424065,3.5216585 3.3782466,3.7712412 3.2961512,4.1026751 3.2021246,4.4319366 3.136193,4.7669071 3.1041133,4.9995554 3.222514,5.233211 3.4127914,5.365564 3.674905,5.5706496 3.9302369,5.7863934 4.2083288,5.9696727 4.4278742,6.0996344 4.7186863,6.069256 4.9152061,5.9098529 5.187995,5.710767 5.467429,5.5193338 5.7297274,5.3067518 5.908736,5.1431395 5.963974,4.8770394 5.8927631,4.6489221 5.8123143,4.3232073 5.7347084,3.9961422 5.6417467,3.6739542 5.5575331,3.4157287 5.2848528,3.2483919 5.0170823,3.2671466 4.6549744,3.2683945 4.292385,3.2569978 3.9305798,3.2661907 c -0.016734,0.00137 -0.033469,0.00273 -0.050203,0.0041 z" transform="matrix(0.26458333,0,0,0.26458333,0,294.61873)"/>
                  </g>
                </svg>
              </div>
            </div>
          </section>
        </template>
        <router-view v-else/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "About",
  data() {
    return {
      amountOfStrokes: 0,
    }
  },
  computed: {
    amountOfStars() {
      let amountOfStars = this.amountOfStrokes

      if (amountOfStars) amountOfStars -= 2

      return amountOfStars
    },
  },
  mounted() {
    if (this.$route.name === "about-me") {
      const infoBlock = document.querySelector(".info__text")
      let amountOfStrokes = infoBlock.clientHeight / 24
      Math.ceil(amountOfStrokes)

      this.amountOfStrokes = amountOfStrokes
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../style/variables";

.about {
  height: 100%;
  display: flex;

  &__main {
    flex: 1 1;
  }

  &__info {
    display: flex;
    gap: 15px;
  }

  .info {
    &__text {
      padding-left: 40px;

      .text {
        max-width: 600px;
        padding-left: 30px;
      }

      .stars {
        position: absolute;
        margin-left: 9px;
      }
    }

    &__lines {
      position: absolute;
    }

    .line {
      display: flex;
      justify-content: end;
    }
  }

  .tab-content {
    padding: 1.125rem;
    line-height: 150%;

    p {
      padding-left: 1.2rem;
      position: relative;

      &:before {
        position: absolute;
        content: ' ';
        height: 100%;
        width: 20px;
        left: 0;
      }
    }
  }
}
</style>