<template>
  <v-container>
    <v-row class="text-center picture">
      <v-col cols="12" md="8" sm="6" class="main-green picture-column">
        <v-img :src="require('../assets/tributeimg_opt.png')" contain height="200" id="rounded" />
      </v-col>
    </v-row>
    <v-row class="text-center name">
      <v-col cols="12" md="8" sm="6">
        <div class="mx-auto">
          <h1 class="display-2 font-weight-bold">Jimmy Vanetta</h1>
          <h2>Full-Stack Developer</h2>
          <v-carousel continuous :cycle="cycle" :show-arrows="false" hide-delimiter-background hide-delimiters
            delimiter-icon="mdi-minus" height="100" class="mx-auto my-auto carousel">
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="slideColors[i]" height="175" tile>
                <v-row class="fill-height" align="center" justify="center">
                  <v-col cols="12" class="text-p">
                    <v-icon>{{ slideIcons[i] }}</v-icon> {{ slide }}
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center about">
      <v-col cols="12" md="8" sm="6">
        <h2 class="display-1 font-weight-bold">I love computers and technology!</h2>
        <p>I have an insatiable thirst for knowledge and an unwavering passion for computers and technology.
          As I navigate through the ever-evolving world, I find myself constantly seeking to understand its intricate
          workings.
          My career aspiration as a Software Developer is driven by my desire to be part of a vibrant team that thrives
          on innovation and embraces new techniques and technologies.
          With an inherent curiosity and a commitment to lifelong learning,
          I eagerly anticipate the opportunity to contribute to an environment that fosters continuous growth and
          development. Visit the contact me section to drop me a line!</p>
      </v-col>
    </v-row>
    <v-row class="skills">
        <v-col cols="12" md="8" sm="6">
          <h2 class="display-1 font-weight-bold">Modern Frameworks for Modern Solutions</h2>
          <p>
            Mordern SPA Frameworks are the way to go. I like to couple these with Entity Framework and .NET Framework for fast and seamless solutions.
          </p>
        </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">

      </v-col>
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
  max-width: 100%;
  width: 100%;
  padding: 0;
  background-color: #19E68C;
}

.carousel {
  max-width: 100%;
  width: 100%;
}

.picture {
  background-color: #19E68C;
  max-height: 250px;
  height: 100%;
  align-items: center;
  justify-content: center;

  .picture-column {
    margin-top: 2rem
  }
}

.name {
  margin-top: 0;
  background-color: #19E68C;
  max-height: 250px;
  height: 100%;
  align-items: center;
  justify-content: center;
}

.about {
  max-height: 375px;
  height: 100%;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
}

.skills {
  max-height: 500px;
  height: 500px;
  background-color: #272727;
  color: #FFFFFF;
  align-items: center;
  justify-content: center;
}
</style>
