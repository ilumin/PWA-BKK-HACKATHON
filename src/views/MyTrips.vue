<template>
  <div>My Trips page
    <TripList :trips="tripsVar"></TripList>
  </div>
</template>

<script>
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
    data () {
      return {
        tripsVar: [{
          id: '1',
          img: 'http://cdn.www.ministry-to-children.com/wp-content/uploads/2015/07/family-road-trip.jpg',
          name: 'trip1',
          date: '02 aug 2017'
        },
        {
          id: '2',
          img: 'http://cdn.www.ministry-to-children.com/wp-content/uploads/2015/07/family-road-trip.jpg',
          name: 'trip2',
          date: '03 aug 2017'
        }
        ]
      }
    }
  }
</script>

<style>

</style>
