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
    getFormValues: function () {
      var vm = this
      console.log(vm.startAt + ' - ' + vm.destination)
      if (vm.startAt.length === 0 || vm.destination.length === 0) {
        alert('Please Input StartAt and Destination')
        return
      }
      var userData = getUser()
      var locations = {}
      searchPlace(vm.startAt).then(function (response) {
        if (response.data.results) {
          locations[response.data.results[0].place_id] = {
            name: response.data.results[0].name,
            order: 0,
            rating: (response.data.results[0].rating) ? response.data.results[0].rating : 0,
            thumbnail: (response.data.results[0].photos[0].photo_reference) ? response.data.results[0].photos[0].photo_reference : ''
          }
        }
      }).then(function (rrr) {
        searchPlace(vm.destination).then(function (response) {
          if (response.data.results) {
            locations[response.data.results[0].place_id] = {
              name: response.data.results[0].name,
              order: 0,
              rating: (response.data.results[0].rating) ? response.data.results[0].rating : 0,
              thumbnail: (response.data.results[0].photos[0].photo_reference) ? response.data.results[0].photos[0].photo_reference : ''
            }
          }
        })
      }).then(function () {
        console.log(locations, '<<<<<<<<< locations')
        var data = {
          name: vm.startAt + ' - ' + vm.destination,
          date: '2017-06-24 11:00:00',
          locations: locations
        }
        db.ref('/trips/' + userData.uid).push(
          data
        ).then(function () {
          console.log('thennnn')
        })
      })

//      searchPlace(vm.destination).then(function (response) {
//        if (response.data.results) {
//
//        }
//      })
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
