<template>
    <v-container>
        <v-row class="text-center mx-auto my-auto top">
            <v-col cols="12" md="8" sm="6" class="p-0">
                <h1 class="display-2 font-weight-bold">Drop me a line!</h1>
                <p class="mt-10">
                    Be nice, you never know where this could end up :)
                </p>
            </v-col>
        </v-row>
        <v-row class="text-center bottom">
            <v-col cols="6" md="4" sm="4">
                <v-form @submit.prevent="postNow">
                    <v-text-field type="email" name="_replyto" v-model="email" label="Your email..." dense outlined />
                    <v-textarea name="message" v-model="message" label="Your message..." dense outlined></v-textarea>
                    <v-btn @click="postNow" :disabled="!email && !message">Send</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'ContactMe',

    data: () => ({
        email: '',
        message: ''
    }),

    methods: {
        postNow() {
            const link = "https://formspree.io/jimmy.vanetta@gmail.com"
            var data = new FormData();
            data.append('_replyto', this.email)
            data.append('message', this.message)

            this.axios.post(link, data, {
                headers: {
                    'Accept': 'application/json',
                },
                // body: data,
            }).then((res) => {
                console.log("response ===", res)
                this.email = ""; this.message = ""; //don't forget to create your data
            }).catch((err) => {
                console.log(err)
            });
        }
    }
})
</script>

<style lang="scss" scoped>
.container {
    max-height: 100%;
    height: 100%;
    max-width: 100%;
    width: 100%;
    padding: 0;
}

.v-row {
    align-items: center;
}

.top {
    max-height: 500px;
    height: 100%;
    background-color: #19E68C;
    align-items: center;
    justify-content: center;
    padding: 0;
}

.bottom {
    max-height: 300px;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 0;
}
</style>