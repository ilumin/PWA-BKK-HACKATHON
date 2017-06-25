// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import App from '@/App'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import * as VueGoogleMaps from 'vue2-google-maps'

import router from '@/router'

// import { initFirebase } from '@/utils/FirebaseApp'
// import firebase from 'firebase'
// import { config } from '@/firebase.config'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'firebaseui/dist/firebaseui.css'

Vue.use(VueFire)
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCbWJ-1eUpVhivVuixtkkWdMFvSX4tfKvA',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  created () {
    console.log('App created')
    // firebase.initializeApp(config)
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (!user) {
    //     this.$router.push('/')
    //   }
    // })
  },
  components: { App }
})
