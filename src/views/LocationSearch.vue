<template>
  <div>
    Location Search page
    <input v-model="q"></input>
    <button @click="searchPlace()">Search</button>
    <location-list :locations="locations"></location-list>
  </div>
</template>

<script>
import LocationList from '@/components/LocationList.vue'
import { searchPlace } from '../utils/ApiUtil'
export default {
  name: 'locationSearch',
  components: {
    LocationList
  },
  data () {
    return {
      q: '',
      locations: []
    }
  },
  methods: {
    searchPlace: function () {
      var vm = this
      searchPlace(vm.q).then(function (response) {
        console.log(JSON.stringify(response.data.results))
        vm.locations = []
        if (response.data.results.length === 0 || response.data.results.length === undefined) {
          return
        }
        response.data.results.splice(0, 5).forEach(function (place) {
          var location = {
            id: 'place.place_id',
            location_name: String(place.name),
            rating: place.rating,
            type: 'add',
            photo_reference: 'place.photos[0].photo_reference',
            max_width: 100,
            max_height: 100
          }
          vm.locations.push(location)
        }, this)
      })
    }
  }
}
</script>

<style>

</style>
