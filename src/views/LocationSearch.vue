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
import { getUser, db } from '@/utils/FirebaseApp'

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
  firebase () {
    return {
      trip: {
        source: db.ref('trips/KnPoQLob13rmyEg7m_a')
      }
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
      this.addLocationToTrip('-KnPoQLob13rmyEg7m_a', locationId)
      // this.addLocationToTrip(tripId, locationId)
    },
    addLocationToTrip: function (tripId, locationId) {
      // TODO get user uid
      // TODO get location by ID
      var _tripId = tripId
      let vm = this
      getPlaceDetail(locationId).then(location => {
        // TODO add this locationId to trip [FIREBASE]
        var result = location
        const uid = getUser().uid

        console.log('location:', location)

        // var tripObj = db.ref('/trips/' + uid + '/' + _tripId + '/locations/')
        var tripObj = vm.trip
        console.log('tripObj = ' + tripObj)

        var tripArr = Object.keys(tripArr).map(key => tripObj[key])
        console.log('tripArr = ' + tripArr)
        var ref = db.ref('/trips/' + uid + '/' + _tripId + '/locations/' + locationId).set({
          name: result.name,
          order: 0,
          rating: result.rating,
          thumbnail: result.photos[0].photo_reference,
          lat: result.geometry.location.lat,
          lng: result.geometry.location.lng
        }, this).then(function () {
          console.log('donee')
        }, this)
        console.log(ref)
      })
    }
  }
}
</script>

<style>

</style>
