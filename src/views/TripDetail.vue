<template>
  <div>
    <h1>Trip Detail page {{ trip_id }}</h1>
    <template v-if="loaded">
      <GMap :direction="direction"></GMap>
    </template>
    <template v-if="loaded">
      <LocationList :locations="locations"></LocationList>
    </template>
    <pre>{{ trip.locations }}</pre>
  </div>
</template>

<script>
import {getUser, db} from '@/utils/FirebaseApp'
import Map from '@/components/Map'
import LocationList from '@/components/LocationList'

export default {
  name: 'TripDetail',
  props: ['trip_id'],
  components: {
    "GMap": Map,
    LocationList
  },
  data: () => ({
    trip: {},
    direction: [],
    locations: {},
    loaded: false
  }),
  firebase () {
    return {
      trip: {
        source: db.ref('trips/' + getUser().uid + '/' + this.trip_id),
        asObject: true,
        readyCallback: () => {
          this.loaded = true
          this.direction = Object.keys(this.trip.locations)
            .map(key => this.trip.locations[key])
        }
      }
    }
  }
}
</script>

<style>
</style>
