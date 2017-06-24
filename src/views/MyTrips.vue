<template>
  <div>My Trips page
    <TripList :trips="trips"></TripList>
  </div>
</template>

<script>
  import {getUser, db} from '@/utils/FirebaseApp'
  import TripList from '@/components/TripList'

  export default {
    name: 'myTrips',
    components: {
      TripList
    },
    methods: {
      fetchTrips: function () {
        console.log('fetchTrips')
      }
    },
    firebase: {
      trips: {
        source: db.ref('trips/' + getUser().uid)
      }
    },
    data: () => ({
      trips: []
    })
  }
</script>

<style>
</style>
