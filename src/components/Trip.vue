<template>
  <div class="card trip" @click="redirectTo(trip['.key'])">
    <div class="trip-photos">
      <div v-for="photo in tripPhotos" class="trip-photo">
        <img :src="photo" />
      </div>
    </div>
    <div class="trip-info">
      <h4 class="card-title">
        {{ trip.name }}
        <small class="card-date">{{ trip.date }}</small>
      </h4>
    </div>
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
    },
    computed: {
      tripPhotos () {
        return Object.keys(this.trip.locations)
          .map(key => this.trip.locations[key].thumbnail)
      }
    }
  }
</script>

<style>
  .trip {
    position: relative;
  }
  .trip-photos {
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    width: 100%;
    z-index: 1;
  }
  .trip-photos .trip-photo {
    position: absolute;
    top: 0; bottom: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
  .trip-photos .trip-photo img {
    display: block;
    width: auto;
    height: 100%;
  }
  .trip-photos .trip-photo:first-child {
    left: 0;
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
  .trip-photos .trip-photo:last-child {
    right: 0;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }
  .trip-info {
    position: relative;
    height: 200px;
    z-index: 2;
  }
  .trip-info .card-title {
    position: absolute;
    bottom: 0; left: 0;
    padding: 10px;
    margin: 0;
  }
  .trip-info .card-title small {
    display: block;
    color: #EAEAEA;
    font-size: .7em
  }
</style>
