<template>
    <v-container>
        <v-row justify="center">
            <h1>Fighting Game</h1>
            <h3>Under Construction</h3>
                <!-- <canvas></canvas> -->
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
        canvas.width = 1024
        canvas.height = 576

        c.fillStyle = "black";
        c.fillRect(0, 0, canvas.width, canvas.height);

        class Sprite {
            constructor(position) {
                this.position = position
            }

            draw() {
                c.fillStyle = 'red'
                c.fillRect(this.position.x, this.position.y, 50, 150)
            }
        }

        const player = new Sprite({
            x: 0,
            y: 0
        })

        console.log(player)
        player.draw()
    }
})
</script>
  
<style lang="scss">
    canvas {
        width: 100%;
        height: 100%;
    }
</style>
  