<template>
  <div>
    <h1>Manage Trip page</h1>
    <template v-if="loaded">
      {{ trip }}
    </template>
  </div>
</template>

<script>
import {getUser, db} from '@/utils/FirebaseApp'

export default {
  name: 'ManageTrip',
  props: ['trip_id'],
  data: () => ({
    trip: {},
    direction: [],
    locations: {},
    loaded: false
  }),
  firebase: () => ({
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
  })
}
</script>

<style>
</style>
