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

      searchPlace(vm.startAt).then(function (response) {
        if (response.data.results) {
//
//
//
//          vm.$firebaseRefs.trips.push(
//            data
//          ).then(() => {
//
//          })
        }
      })
    },
    getStartAt: function (val) {
      this.startAt = val
    },
    getDestination: function (val) {
      this.destination = val
    }
  }
}
</script>

<style>

</style>
