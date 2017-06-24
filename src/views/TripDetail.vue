<template>
  <div>
    <h1>Trip Detail page {{ trip_id }}</h1>
    <template v-if="loaded">
      <GMap :direction="direction"></GMap>
    </template>
    <template v-if="loaded">
      <LocationList :locations="locations"></LocationList>
    </template>
    <MyButton label="Edit Trip" :route="'/trips/' + trip_id + '/edit'"></MyButton>
  </div>
</template>

<script>
import {getUser, db} from '@/utils/FirebaseApp'
import Map from '@/components/Map'
import MyButton from '@/components/MyButton'
import LocationList from '@/components/LocationList'

export default {
  name: 'TripDetail',
  props: ['trip_id'],
  components: {
    "GMap": Map,
    MyButton,
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
          this.locations = Object.keys(this.trip.locations)
            .map(key => {
              const item = this.trip.locations[key]
              return {
                id: item.id,
                locationName: String(item.name),
                rating: item.rating,
                type: 'simple',
                photoReference: item.thumbnail,
                maxWidth: 100,
                maxHeight: 100
              }
            })
        }
      }
    }
  }
}
</script>

<style>
</style>
