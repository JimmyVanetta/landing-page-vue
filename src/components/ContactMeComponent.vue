<template>
    <v-container>
        <v-row class="text-center top">
            <v-col cols="12" md="8" sm="6">
                <h1 class="display-2 font-weight-bold">Drop me a line!</h1>
                <p class="mt-10">
                    Be nice, you never know where this could end up :)
                </p>
            </v-col>
        </v-row>
        <v-row class="text-center bottom mb-5">
            <v-col cols="6" md="4" sm="4">
                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-text-field type="email" name="_replyto" v-model="name" label="Your name..." dense outlined clearable
                        :rules="nameRules" />
                    <v-text-field type="email" name="_replyto" v-model="email" label="Your email..." dense outlined
                        clearable :rules="emailRules" />
                    <v-textarea name="message" v-model="message" label="Your message..." dense outlined clearable
                        :rules="messageRules"></v-textarea>
                </v-form>
                <v-btn @click="postNow" :disabled="!valid" color="primary">Send</v-btn>
            </v-col>
        </v-row>
        <v-snackbar v-model="snackbar">
            {{ text }}
            <template v-slot:action="{ attrs }">
                <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                    Close
                </v-btn>
            </template>
        </v-snackbar>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'redaxios'

export default Vue.extend({
    name: 'ContactMe',

    data: () => ({
        snackbar: false,
        valid: true,
        name: '',
        email: '',
        message: '',
        text: '',
        emailRules: [
            (v: string) => !!v || 'E-mail is required',
            (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        messageRules: [
            (v: string) => !!v || 'Message is required'
        ],
        nameRules: [
            (v: string) => !!v || 'Name is required',
        ],
    }),
    methods: {
        async postNow() {
            if (this.email && this.message && this.name) {
                const link = "https://formspree.io/f/mleyelee"
                var data = new FormData();
                data.append('_replyto', this.email)
                data.append('name', this.name)
                data.append('message', this.message)

                axios.post(link, data, {
                    headers: {
                        'Accept': 'application/json',
                    },
                }).then((response) => {
                    this.$refs.form.reset();
                }).catch((error) => {
                    console.log(error)
                });
            } else {
                this.snackbar = true;
                this.text = 'You must enter a name, a valid email and a message!'
            }
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

.top {
    max-height: 500px;
    height: 100%;
    background-color: #19E68C;
    align-items: center;
    justify-content: center;
}

.bottom {
    max-height: 450px;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 0;
}
</style>