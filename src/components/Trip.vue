<template>
  <div class="trip" @click="redirectTo(trip.id)">
    <div class="trip_img"><img :src="trip.img" /> </div>
    <div class="trip_location_name">{{ trip.name }}</div>
    <div class="trip_date">{{ trip.date }}</div>
  </div>
</template>

<script>
  export default {
    name: 'Trip',
    props: ['trip'],
    methods: {
      redirectTo: function (tripId) {
        this.$router.push(`/trips/${tripId}`)
      }
    }
  }
</script>
