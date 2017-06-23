<template>
    <div class="trip">
        <div class="trip_img"><img :src="trip.img" /> </div>
        <div class="trip_location_name">{{ trip.name }}</div>
        <div class="trip_rating">{{ trip.rating }}</div>
    </div>
</template>

<script>
  export default {
    name: 'trip',
    props: ['trip']
  }
</script>
