<template>
  <div class="main-layout">
    <NavBar></NavBar>
    <form class="form-box">
      <LocationSearch
        placeholder="Enter starting point"
        @update:location="location => startAt = location">
      </LocationSearch>
      <LocationSearch
        placeholder="Enter destination point"
        @update:location="location => destination = location">
      </LocationSearch>
      <b-button
        variant="primary"
        class="btn-lg btn-block"
        @click.prevent="createTrip()">
        Create Trip
      </b-button>
      <b-button
        variant="secondary"
        class="btn-lg btn-block"
        @click="gotoMyTrip()">
        MyTrip
      </b-button>
    </form>
  </div>
</template>

<script>
import LocationSearch from '@/components/LocationSearch.vue'
import AutoComplete from '@/utils/LocationAutoComplete.vue'
import NavBar from '@/components/NavBar.vue'
import {searchPlace} from '@/utils/ApiUtil'
import {getUser, db} from '@/utils/FirebaseApp'

export default {
  name: 'home',
  components: {
    LocationSearch,
    AutoComplete,
    NavBar
  },
  data () {
    return {
      startAt: null,
      destination: null,
      dataSubmit: {}
    }
  },
  methods: {
    gotoMyTrip () {
      this.$router.push('/my-trip')
    },
    createTrip () {
      if (!this.startAt || !this.destination) {
        return alert('Please enter starting point and destination')
      }

      this.startAt.order = 0
      this.destination.order = 999

      let locations = {}
      locations[this.startAt.id] = this.startAt
      locations[this.destination.id] = this.destination

      const trip_id = db.ref('/trips/' + getUser().uid).push({
        name: this.destination.name,
        date: new Date().toLocaleString(),
        locations
      }).key

      this.$router.push('/trips/' + trip_id)
    }
  },

  mounted () {
    console.log('mounted')
  }
}
</script>

<style>
.form-box {
  padding: 50% 0;
  position: relative;
  z-index: 2;
}
</style>
