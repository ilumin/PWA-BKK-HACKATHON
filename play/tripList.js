import Vue from 'vue'
import { play } from 'vue-play'
import TripList from './../src/components/TripList.vue'

Vue.component('trip-list', TripList)

play('TripList')
  .add('show trips', {
    template: `<trip-list :trips="tripsVar"></trip-list>`,
    data () {
      return {
        tripsVar: [{
          id: '1',
          img: 'http://cdn.www.ministry-to-children.com/wp-content/uploads/2015/07/family-road-trip.jpg',
          name: 'trip1',
          date: '02 aug 2017'
        },
        {
          id: '2',
          img: 'http://cdn.www.ministry-to-children.com/wp-content/uploads/2015/07/family-road-trip.jpg',
          name: 'trip2',
          date: '03 aug 2017'
        }
        ]
      }
    }
  })

