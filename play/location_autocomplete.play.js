import Vue from 'vue'
import { play } from 'vue-play'
import './../src/App.vue'
import LocationAutoComplete from './../src/utils/LocationAutoComplete.vue'

Vue.component('locationAutoComplete', LocationAutoComplete)

play('Location autocomplete')
  .add('with autocomplete d', {
    template: `<locationAutoComplete></locationAutoComplete>`
  })
