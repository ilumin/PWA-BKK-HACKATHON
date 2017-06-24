import Vue from 'vue'
import { play } from 'vue-play'
import MyTrips from './../src/views/MyTrips.vue'

Vue.component('my-trips', MyTrips)

play('MyTrips')
  .add('show Trips View', {
    template: `<my-trips></my-trips>`
  })

