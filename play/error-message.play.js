import Vue from 'vue'
import { play } from 'vue-play'
import ErrorMessage from './../src/components/ErrorMessage.vue'

Vue.component('error-message', ErrorMessage)

play('ErrorMessage')
  .add('with text', {
    template: `<error-message message="error tee mee ngoo"></error-message>`
  })
  .add('without text', {
    template: `<error-message></error-message>`
  })
