<template>
  <div class="main-layout">
    <div>
      <form>
        <LocationSearch
          placeholder="Enter starting point"
          @update:location="location => startAt = location">
        </LocationSearch>
        <LocationSearch
          placeholder="Enter destination point"
          @update:location="location => destination = location">
        </LocationSearch>
        <b-button variant="primary" @click.prevent="createTrip()">Create Trip</b-button>
      </form>
    </div>
    <hr>
    <div>
      <my-button label="My Trips" route="/my-trip"></my-button>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue'
import LocationSearch from '@/components/LocationSearch.vue'
import AutoComplete from '@/utils/LocationAutoComplete.vue'
import {searchPlace} from '@/utils/ApiUtil'
import {getUser, db} from '@/utils/FirebaseApp'

export default {
  name: 'home',
  components: {
    MyButton,
    LocationSearch,
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
    createTrip () {
      this.startAt.order = 0
      this.destination.order = 1

      let locations = {}
      locations[this.startAt.id] = this.startAt
      locations[this.destination.id] = this.destination

      const trip_id = db.ref('/trips/' + getUser().uid).push({
        name: this.startAt.name + ' - ' + this.destination.name,
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
.main-layout {
  display: block;
  width: 50%;
  margin: auto;
  text-align: center;
}
.my-button {
  width: 100px;
  background-color: #138d75;
  color: white;
  font-weight: bold;
}
.my-button:hover {
  background-color: #1abc9c;
  color: white;
  font-weight: bold;
}
</style>
