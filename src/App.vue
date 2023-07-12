<template>
  <v-app>
    <v-app-bar app color="#131200" dense dark>
      <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

        <!-- <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" /> -->
        <v-toolbar-title>Page title</v-toolbar-title>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="scrollable" v-resize="onResize">
      <router-view />
    </v-main>

    <v-footer padless color="#131200" dark app elevation="24">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>James A Vanetta III</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    onResize() {
      //64px is v-app-bar height in your case
      document.querySelector(".scrollable").style.height = (window.innerHeight - 64) + 'px';
    }
  }

});
</script>

<style lang="scss">
.v-main__wrap {
  background-color: #637081;
  color: #F0EFF4;
}

html {
  overflow-y: hidden;
}

.v-main__wrap {
  overflow-y: scroll;
  height: 100vh;
}

v-main {
  height: 100%;
}
</style>
