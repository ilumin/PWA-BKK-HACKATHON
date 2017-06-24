import Vue from 'vue'
import { play } from 'vue-play'
import Home from './../src/views/Home.vue'

Vue.component('home', Home)

play('Home')
  .add('show Home', {
    template: `<home></home>`
  })

