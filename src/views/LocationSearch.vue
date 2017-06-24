<template>
  <div>
    Location Search page
    <input v-model="q"></input>
    <button @click="searchPlace()">Search</button>
    <location-list :locations="locations" @addId="addId"></location-list>
  </div>
</template>

<script>
import LocationList from '@/components/LocationList.vue'
import { searchPlace, getPlaceDetail } from '../utils/ApiUtil'
// import { getUser, db } from '@/utils/FirebaseApp'
import { db } from '@/utils/FirebaseApp'
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
        vm.locations = []
        if (response.data.results.length === 0 || response.data.results.length === undefined) {
          return
        }
        response.data.results.splice(0, 5).forEach(function (place) {
          console.log('place = ' + JSON.stringify(place))
          var location = {
            id: place.place_id,
            locationName: String(place.name),
            rating: place.rating,
            type: 'add',
            photoReference: place.photos[0].photo_reference,
            maxWidth: 100,
            maxHeight: 100
          }
          vm.locations.push(location)
        }, this)
      })
    },
    addId: function (locationId) {
      console.log('id = ' + locationId)
      this.addLocationToTrip('-KnP_N7P-q_gR8IECIcq', locationId)
      // this.addLocationToTrip(tripId, locationId)
    },
    addLocationToTrip: function (tripId, locationId) {
      // TODO get user uid
      // TODO get location by ID
      getPlaceDetail(locationId).then(function (location) {
        // TODO add this locationId to trip [FIREBASE]
        // const uid = getUser().uid
        var trip = db.ref('trips/T2ixGYRVFIWCoKRmsZdF5wq2h6g1' + '/' + tripId + '/locations').set({
          name: '12345'
        }).then(function () {
          console.log('success')
        })
        console.log('trip = ' + trip)
      })
    }
  }
}
</script>

<style>

</style>
