import Vue from 'vue'
import { play } from 'vue-play'
import Trip from './../src/components/Trip.vue'

Vue.component('trip', Trip)

play('Trip')
  .add('show trip', {
    template: `<trip :trip="tripVar"></trip>`,
    data () {
      return {
        tripVar: {
          id: '1',
          img: 'http://cdn.www.ministry-to-children.com/wp-content/uploads/2015/07/family-road-trip.jpg',
          name: 'trip1',
          date: '03 aug 2017'
        }
      }
    }
  })

