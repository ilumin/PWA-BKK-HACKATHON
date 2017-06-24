<template>
  <div>
    <h1>Trip Detail page {{ trip_id }}</h1>
    <pre>{{ trip }}</pre>
  </div>
</template>

<script>
import {getUser, db} from '@/utils/FirebaseApp';

export default {
  name: 'TripDetail',
  props: ['trip_id'],
  data: () => ({
    trip: {}
  }),
  firebase () {
    return {
      trip: {
        source: db.ref('trips/' + getUser().uid + '/' + this.trip_id),
        asObject: true,
      }
    }
  }
}
</script>

<style>
</style>
