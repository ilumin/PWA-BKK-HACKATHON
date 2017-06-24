// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

import firebase from 'firebase'
import { config } from './firebase.config'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'firebaseui/dist/firebaseui.css'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  created () {
    console.log('created')
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      this.$router.push(user ? '/profile' : '/')
    })
  },
  components: { App }
})
