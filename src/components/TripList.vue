<template>
  <div class="trip-list">
    <Trip v-for="trip in trips" :trip="trip" :key="trip.id"></Trip>
  </div>
</template>

<script>
  import Trip from '@/components/Trip.vue'

  export default {
    name: 'TripList',
    props: ['trips'],
    components: {
      Trip
    }
  }
</script>
