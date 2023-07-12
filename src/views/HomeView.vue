<template>
  <Home />
</template>

<script lang="ts">
  import Vue from 'vue'
  import Home from '../components/HomeComponent.vue'

  export default Vue.extend({
    name: 'HomeView',

    components: {
      Home,
    },
  })
</script>

<style lang="scss">

</style>
