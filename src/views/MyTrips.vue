<template>
  <div class="view my-trips">
    <h3 class="page-header">My Trip</h3>
    <TripList :trips="trips"></TripList>
    <b-button
      class="btn-lg btn-block btn-info"
      @click="gotoHome()">
      Home
    </b-button>
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
    }),
    methods: {
      gotoHome () {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
.my-trips {
  padding-bottom: 10px;
}
</style>
