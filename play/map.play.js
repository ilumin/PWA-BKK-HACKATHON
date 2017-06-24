import Vue from 'vue'
import { play } from 'vue-play'
import Map from './../src/components/Map.vue'

Vue.component('Map', Map)

// AIzaSyCbWJ-1eUpVhivVuixtkkWdMFvSX4tfKvA

const markers = {
  '01': {lat: 1.38, lng: 103.8},
  '02': {lat: 1.39, lng: 103.9},
  '03': {lat: 1.37, lng: 103.7},
};

const direction = {
  '1': {lat: 1.37, lng: 103.7},
  '2': {lat: 1.38, lng: 103.8},
  '3': {lat: 1.39, lng: 103.9},
}

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
