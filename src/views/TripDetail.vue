<template>
  <div class="trip-detail-style">
    <nav-bar></nav-bar>
    <div class="view trip-detail">
      <div v-show="this.showAddLocation === false">
        <div class="map-content" >
          <template v-if="loaded">
            <GMap :direction="direction" v-on:waypointOrder="handleWaypointOrder"></GMap>
          </template>
        </div>
        <div class="map-content-space">
        </div>
        <div class="trip-content">
          <h3 class="page-header">{{ trip.name }}</h3>
          <template v-if="loaded">
            <LocationList :locations="locations" :trip_id="trip_id"></LocationList>
          </template>
          <b-button
            class="btn-lg btn-block btn-info"
            @click="gotoMyTrip()">
            Go to My Trip
          </b-button>

          <b-button
            class="btn-lg btn-block btn-info"
            @click="addLocation()">
            Add Suggesting Location
          </b-button>
        </div>
      </div>
      <div class="location" v-show="this.showAddLocation === true">
        <SuggestLocation :locations="locations" :trip_id="trip_id"></SuggestLocation>
        <b-button
          class="btn-lg btn-block btn-info"
          @click="addLocation()">
          Back to main
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import {getUser, db} from '@/utils/FirebaseApp'
import NavBar from '@/components/NavBar.vue'
import Map from '@/components/Map'
import MyButton from '@/components/MyButton'
import LocationList from '@/components/LocationList'
import SuggestLocation from '@/components/SuggestLocation'

export default {
  name: 'TripDetail',
  props: ['trip_id'],
  components: {
    "GMap": Map,
    MyButton,
    LocationList,
    SuggestLocation,
    NavBar
  },
  data: () => ({
    trip: {},
    direction: [],
    locations: {},
    loaded: false,
    showAddLocation: false
  }),
  methods: {
    gotoMyTrip () {
      this.$router.push('/my-trip')
    },
    addLocation () {
      console.log(this.showAddLocation, 'this.showAddLocation')
      this.showAddLocation = !this.showAddLocation
    },
    handleWaypointOrder: function (wpOrder) {
      let i = 1;
      for(let wp of wpOrder) {
        this.locations[wp+1].order = i++
      }
      this.locations.sort((a, b) => a.order > b.order)
    }
  },
  firebase () {
    return {
      trip: {
        source: db.ref('trips/' + getUser().uid + '/' + this.trip_id),
        asObject: true,
        readyCallback: () => {
          this.loaded = true
          this.direction = Object.keys(this.trip.locations)
            .map(key => this.trip.locations[key])

          this.locations = Object.keys(this.trip.locations)
            .map(key => {
              const item = this.trip.locations[key]
              const place_id = key
              return {
                id: place_id,
                locationName: String(item.name),
                rating: item.rating,
                order: item.order,
                type: 'simple',
                photoReference: item.thumbnail,
                thumbnail: item.thumbnail,
                maxWidth: 1000,
                maxHeight: 1000,
                position: item.position
              }
            })

          this.locations.sort((a, b) => a.order > b.order)
          this.direction.sort((a, b) => a.order > b.order)
        }
      }
    }
  }
}
</script>

<style>
.trip-detail {
  height: 100%;
}
.trip-detail-style {
  padding-top: 60px;
  padding-bottom: 20px;
}
.trip-content {
  padding-bottom: 10px;
}
.map-content {
  height: 80%;
  z-index: 2
}
.map-content-space {
  position: relative;
  width: auto;
  height: 80%;
  z-index: 1
}
</style>
