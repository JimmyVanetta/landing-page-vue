<template>
    <v-container>
        <v-row class="text-center top">
            <v-col cols="12" md="8" sm="6">
                <h1 class="display-2 font-weight-bold">Javascript Games!</h1>
                <p class="mt-10">
                    Check out these cool projects I have been working on.
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="js">
import Vue from 'vue'
    export default Vue.extend({
        name: 'GamesComponent'
    })
</script>

<style lang="scss" scoped>
.top {
    max-height: 500px;
    height: 100%;
    background-color: #19E68C;
    align-items: center;
    justify-content: center;
}
</style>