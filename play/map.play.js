import Vue from 'vue'
import { play } from 'vue-play'
import Map from './../src/components/Map.vue'

Vue.component('Map', Map)

const markers = [
  { position: {lat: 1.385, lng: 103.82} },
  { position: {lat: 1.381, lng: 103.91} },
  { position: {lat: 1.382, lng: 103.86} },
];

const direction = [
  { position: {lat: 1.38, lng: 103.8} },
  { position: {lat: 1.39, lng: 103.9} },
  { position: {lat: 1.35, lng: 103.5} },
]

play('Map')
  .add('set marker', {
    template: `<Map :markers="markers"></Map>`,
    data () {
      return {
        markers: markers
      }
    }
  })
  .add('set direction', {
    template: `<Map :direction="direction"></Map>`,
    data () {
      return {
        direction: direction
      }
    }
  })
  .add('set both', {
    template: `<Map :markers="markers" :direction="direction"></Map>`,
    data () {
      return {
        markers: markers,
        direction: direction
      }
    }
  })
