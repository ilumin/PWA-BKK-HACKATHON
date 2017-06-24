<template>
  <div class="trip-list">
    <Trip v-for="trip in trips" :trip="trip" key=".key"></Trip>
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
