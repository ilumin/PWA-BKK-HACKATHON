<template>
  <div class="view my-trips">
    <h3 class="page-header">My Trip</h3>
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
