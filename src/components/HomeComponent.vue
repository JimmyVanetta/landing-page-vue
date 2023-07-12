<template>
  <v-container>
    <v-row class="text-center mt-2 mx-auto">
      <v-col cols="8">
        <div class="mx-auto">
          <h1 class="display-3 font-weight-bold mt-5">Jimmy Vanetta</h1>
          <v-divider></v-divider>
          <h2 class="display-1">Full-Stack Developer</h2>
          <v-carousel continuous :cycle="cycle" :show-arrows="false" hide-delimiter-background hide-delimiters
            delimiter-icon="mdi-minus" height="100" class="mx-auto carousel">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="slideColors[i]" height="50" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <div class="text-h5 slide-text">
                    <v-icon>{{ slideIcons[i] }}</v-icon> {{ slide }}
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="mx-auto">
          <v-img :src="require('../assets/tributeimg_opt.png')" class="my-3" contain height="200" id="rounded" />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <div class="about-me text-center">
        <v-col cols="12">
          <h2 class="display-2 about-title">About Me</h2>
          <p>I have an insatiable thirst for knowledge and an unwavering passion for computers and technology.
            As I navigate through the ever-evolving world, I find myself constantly seeking to understand its intricate
            workings.
            My career aspiration as a Software Developer is driven by my desire to be part of a vibrant team that thrives
            on innovation and embraces new techniques and technologies.
            With an inherent curiosity and a commitment to lifelong learning,
            I eagerly anticipate the opportunity to contribute to an environment that fosters continuous growth and
            development.</p>
        </v-col>
      </div>
    </v-row>
    <v-row>
      <div class="skills">
        <v-col cols="12">
          <div class="skills-title-container">
            <h2 class="display-2 skills-title">Skills</h2>
          </div>
          <v-divider></v-divider>
          <div class="skills-subtitle-container">
            <h3 class="skills-subtitle">.NET</h3>
          </div>
          <p class="skills-p">
            My main area of expertise is within the .NET Framework with C# as my main programming language.
            I have been acredited as a full-stack developer by Tech Elevator, an intense 14-week development bootcamp.
            All of my back-end work is done in .NET.
          </p>
        </v-col>
      </div>
    </v-row>
    <v-row>
      test
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HelloWorld',

  data: () => ({
    slideColors: [
      'primary',
      'primary',
      'primary',
      'primary',
    ],
    slideIcons: [
      "mdi-microsoft",
      "mdi-database",
      "mdi-angular",
      "mdi-vuejs"
    ],
    slides: [
      '.NET',
      'Entity Framework',
      'Angular',
      'Vue',
    ],
    cycle: true,
  }),
})
</script>

<style lang="scss" scoped>
.container {
  max-height: 100%;
  height: 100%;
  max-width: 75%;
  background-color: #78BC61;
}

.carousel {
  max-width: 100%;
  width: 100%;
}

.slide-text {
  color: #F0EFF4;
}

.about-title {
  margin-left: 2rem;
}

.about-me {
  margin-left: 2rem;
  margin-right: 2rem;
}

.skills {
  margin-left: 2rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
}

.skills-title {
  float: right;
  margin-right: 2rem;
  display: block;
  position: relative;
}

.skills-title-container {
  display: flex;
  justify-content: flex-end;
}

.skills-subtitle-container {
  display: flex;
  justify-content: flex-start;
}

.row:nth-child(even) {
   background-color: #131200;
}
</style>
