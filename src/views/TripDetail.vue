<template>
  <div>
    <h1>Trip Detail page {{ trip_id }}</h1>
    <template v-if="showMap">
      <GMap :direction="direction"></GMap>
    </template>
    <pre>{{ trip.locations }}</pre>
  </div>
</template>

<script>
import {getUser, db} from '@/utils/FirebaseApp'
import Map from '@/components/Map'

export default {
  name: 'TripDetail',
  props: ['trip_id'],
  components: {
    "GMap": Map
  },
  data: () => ({
    trip: {},
    direction: false,
    showMap: false
  }),
  firebase () {
    return {
      trip: {
        source: db.ref('trips/' + getUser().uid + '/' + this.trip_id),
        asObject: true,
        readyCallback: () => {
          this.showMap = true
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
