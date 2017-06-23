import Vue from 'vue'
import { play } from 'vue-play'
import MyButton from './../src/components/MyButton.vue'

Vue.component('my-button', MyButton)

play('CustomButton')
  .add('with text', {
    template: `<my-button color="green" route="/123" label="Hi"></my-button>`
  })
