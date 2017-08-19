<template>
  <div class="card trip" @click="redirectTo(trip['.key'])">
    <div class="trip-photos">
      <img v-if="tripPhoto" :src="tripPhoto" class="trip-photo" />
    </div>
    <div v-if="type == 'remove'" class="icon-remove" @click="removeTrip(trip_id, location.id)" id="remove-btn" name="remove-btn">
      <icon name="delete"></icon>
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
  import Icon from 'vue-icon'

  export default {
    name: 'Trip',
    props: ['trip','type'],
    components: {
      Icon
    },
    methods: {
      redirectTo: function (tripId) {
        this.$router.push(`/trips/${tripId}`)
      }
    },
    computed: {
      tripPhoto () {
        if(this.trip.locations){
          return Object.keys(this.trip.locations)
            .map(key => this.trip.locations[key])
            .sort((a, b) => a.order > b.order)
            .pop().thumbnail
        }
        else {
          return null
        }
      }
    }
  }
</script>

<style>
  .trip {
    position: relative;
    margin-bottom: 10px;
    border: 0;
  }
  .trip-photos {
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    width: 100%;
    z-index: 1;
    overflow: hidden;
    border-radius: 0.25rem;
  }
  .trip-photos .trip-photo {
    position: absolute;
    top: 0; bottom: 0;
    width: 100%;
    min-height: 100%;
    height: auto;
    background-color: rgba(0,0,0,.5)
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
  .icon-remove{
    margin-right: 1%;
    margin-bottom: 1%;
    cursor: pointer;
    max-width: 30px;
    min-width: 20px;
    width: 10%;
    float: right;
    fill: white;
    font-weight:bold;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 3;
  }
</style>
