import Vue from 'vue'
import { play } from 'vue-play'
import ErrorMessage from './../src/components/ErrorMessage.vue'

Vue.component('error-message', ErrorMessage)

play('ErrorMessage')
  .add('show', {
    template: `<error-message show="true">✔︎ display</error-message>`
  })
  .add('hide', {
    template: `<error-message show="false">✖️ display</error-message>`
  })
