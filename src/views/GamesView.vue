<template>
    <GamesComponent />
</template>
  
<script>
import Vue from 'vue'
import GamesComponent from '@/components/GamesComponent.vue';

export default Vue.extend({
    name: 'GamesView',

    components: {
        GamesComponent
    }
})
</script>
  
<style lang="scss">

</style>
  