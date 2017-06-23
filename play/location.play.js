import Vue from 'vue'
import { play } from 'vue-play'
import Location from './../src/components/Location.vue'

Vue.component('location', Location)

play('Location')
  .add('with photo_reference', {
    template: `<location photo_reference="xxx"></location>`
  })
