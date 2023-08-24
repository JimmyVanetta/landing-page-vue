<template>
  <v-container>
    <v-row class="text-center picture">
      <v-col cols="12" md="8" sm="6" class="picture-column">
        <v-img :src="require('../assets/tributeimg_opt.png')" contain height="200" id="rounded" />
      </v-col>
    </v-row>
    <v-row class="text-center name">
      <v-col cols="12" md="8" sm="6">
        <div class="mx-auto">
          <h1 class="display-2 font-weight-bold">Jimmy Vanetta</h1>
          <h2>Full-Stack Developer</h2>
          <v-carousel continuous :cycle="cycle" :show-arrows="false" hide-delimiter-background hide-delimiters
            height="100" class="carousel">
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
        <p>I'm always thirsty for knowledge and totally obsessed with computers and tech! As I navigate through this ever-changing world, I'm constantly geeking out over its intricate workings. 
          Being a Software Developer is my dream job because I want to be part of a kick-ass team that's all about innovation and embracing the latest techniques and technologies. 
          With my insatiable curiosity and a commitment to lifelong learning, I'm stoked to contribute to an environment that's all about growth and development. Hit up the contact me section and let's chat!</p>
      </v-col>
    </v-row>
    <v-row class="skills text-center">
      <v-col cols="12" md="8" sm="6">
        <h2 class="display-1 font-weight-bold">Modern Frameworks for Modern Solutions</h2>
        <p>
          Modern SPA frameworks have become the preferred choice for developing web applications. Their versatility and capabilities make them highly sought after by developers. 
          When combined with other powerful tools like Entity Framework and .NET Framework, these frameworks can deliver fast and seamless solutions. 
          Entity Framework simplifies data access and provides an object-relational mapping (ORM) solution, making it easier to work with databases. 
          On the other hand, .NET Framework offers a robust and comprehensive development platform, allowing developers to build efficient and scalable applications. 
          By leveraging the strengths of these frameworks together, developers can create compelling and high-performing web applications with ease.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomeComponent',

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
  })
})
</script>

<style lang="scss" scoped>
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
}

.name {
  margin-top: 0;
  background-color: #19E68C;
  max-height: 262px;
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
  max-height: 550px;
  height: 550px;
  background-color: #272727;
  color: #FFFFFF;
  align-items: center;
  justify-content: center;
}
</style>
