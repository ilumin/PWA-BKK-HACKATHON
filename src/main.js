// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from '@/App'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from '@/router'

// import { initFirebase } from '@/utils/FirebaseApp'
import firebase from 'firebase'
import { config } from '@/firebase.config'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'firebaseui/dist/firebaseui.css'

Vue.use(VueFire)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  created () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      this.$router.push(user ? '/' : '/login')
    })
  },
  components: { App }
})
