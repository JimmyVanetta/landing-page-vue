import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueCompositionAPI from '@vue/composition-api'
import store from './store'
import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(VueCompositionAPI)

Vue.config.productionTip = false
new Vue({
  router,
  vuetify,
  store,
  render: h => h(App),
  mounted() {
    setTimeout(() => {
      AOS.init({
        once: true,
        anchorPlacement: 'top-bottom'
      })
    }, 2000);
  },
}).$mount('#app')
