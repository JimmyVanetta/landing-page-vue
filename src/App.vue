<template>
  <v-app>
    <v-app-bar app dense dark elevation="0">
      <div class="d-flex align-center">
        <v-toolbar-title>Jimmy Vanetta</v-toolbar-title>
      </div>
      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab to="/home">Home</v-tab>
          <v-tab to="/games">Games</v-tab>
          <v-tab to="/contact">Contact Me</v-tab>
        </v-tabs>
      </template>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-slide-x-transition>
        <router-view />
      </v-slide-x-transition>
    </v-main>

    <v-footer padless dark app elevation="0">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>James A Vanetta III</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
  }

});
</script>

<style lang="scss">
::-webkit-scrollbar {
  width: 0px;
}

.container {
    max-height: 100%;
    height: 100%;
    max-width: 100%;
    width: 100%;
    padding: 0;
}
</style>
