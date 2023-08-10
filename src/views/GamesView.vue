<template>
    <v-container>
        <v-row justify="center">
            <h1>Fighting Game</h1>
            <v-col cols="12">
                <canvas></canvas>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'GamesView',

    mounted() {
        // set up canvas
        var canvas = document.querySelector('canvas')
        var c = canvas.getContext("2d");

        c.fillStyle = "black";
        c.fillRect(0, 0, canvas.width, canvas.height);
    }
})
</script>
  
<style lang="scss">
    canvas {
        width: 100%;
        height: 100%;
    }
</style>
  