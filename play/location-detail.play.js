import Vue from 'vue'
import { play } from 'vue-play'
import LocationDetail from './../src/views/LocationDetail.vue'

Vue.component('location-detail', LocationDetail)

play('LocationDetail')
  .add('with photo_reference', {
    template: `<div><location-detail :place_id=placeId></location-detail>
    <button @click=testClick() >test changed place ID</button></div>`,
    data () {
      return {
        placeId: 'ssss'
      }
    },
    methods: {
      testClick: function() {
        this.placeId = 'ChIJN1t_tDeuEmsRUsoyG83frY4'
        console.log('clicked')
      }
    }
  })
