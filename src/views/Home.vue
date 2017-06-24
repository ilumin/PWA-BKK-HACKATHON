<template>
  <div>
    <div>
      <form>
        <AutoComplete @value="getStartAt"></AutoComplete>
        <br>
        <br>
        <AutoComplete @value="getDestination"></AutoComplete>

        <button @click.prevent="getFormValues()">SUBMIT</button>
      </form>
    </div>
    <div>
      <my-button label="My Trips" route="/my-trip"></my-button>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue'
import AutoComplete from '@/utils/LocationAutoComplete.vue'
import {searchPlace} from '@/utils/ApiUtil'
import {getUser, db} from '@/utils/FirebaseApp'

export default {
  name: 'home',
  components: {
    MyButton,
    AutoComplete
  },
  data () {
    return {
      startAt: '',
      destination: '',
      dataSubmit: {}
    }
  },
  methods: {
    prepareLocation: function (locations, loc, order) {
      locations[loc.place_id] = {
        name: loc.name,
        order: order,
        rating: (loc.rating) ? loc.rating : 0,
        thumbnail: (loc.photos) ? loc.photos[0].photo_reference : '',
        position: {
          lat: loc.geometry.location.lat,
          lng: loc.geometry.location.lng
        }
      }
      return locations
    },
    addTrip: function (locations) {
      var vm = this
      var userData = getUser()
      var data = {
        name: vm.startAt + ' - ' + vm.destination,
        date: '2017-06-24 11:00:00',
        locations: locations
      }
      return db.ref('/trips/' + userData.uid).push(data).key
    },
    getFormValues: function () {
      var vm = this
      if (typeof vm.startAt === 'undefined' || typeof vm.destination === 'undefined' || vm.startAt.length === 0 || vm.destination.length === 0) {
        alert('Please input origin and destination location')
        return
      }
      var locations = {}
      searchPlace(vm.startAt).then(function (response) {
        if (response.data.results.length > 0) {
          locations = vm.prepareLocation(locations, response.data.results[0], 0)
          searchPlace(vm.destination).then(function (response) {
            if (response.data.results.length > 0) {
              locations = vm.prepareLocation(locations, response.data.results[0], 9999)
              let tripId = vm.addTrip(locations)
              vm.$router.push('/trip-detail/' + tripId)
            } else {
              alert('Sorry, we cannot find your destination location.')
              return
            }
          })
        } else {
          alert('Sorry, we cannot find your origin location.')
          return
        }
      })
    },
    getStartAt: function (val) {
      this.startAt = val
    },
    getDestination: function (val) {
      this.destination = val
    },
    firebase: function () {
      return {
        trips: db.ref('trips')
      }
    }
  }
}
</script>

<style>

</style>
