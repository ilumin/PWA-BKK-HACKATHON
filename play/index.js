import Vue from 'vue'
import { play } from 'vue-play'
import MyButton from './../src/components/MyButton.vue'

Vue.component('my-button', MyButton)

play('CustomButton')
  .add('with text', {
    template: `<my-button @click="$log('123')" label="hello">Hello</my-button>`
  })
