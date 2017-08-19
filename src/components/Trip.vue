<template>
  <div class="card trip">
    <div class="trip-photos">
      <img v-if="tripPhoto" :src="tripPhoto" class="trip-photo" />
    </div>
    <div v-if="type == 'remove'" class="icon-remove remove-btn" @click="removeTrip(trip['.key'])"  name="remove-btn">
      <icon name="round_close_fill"></icon>
    </div>
    <div class="trip-info" @click="redirectTo(trip['.key'])">
      <h4 class="card-title">
        {{ trip.name }}
        <small class="card-date">{{ trip.date }}</small>
      </h4>
    </div>
  </div>
</template>

<script>
  import Icon from 'vue-icon'
  import {getUser, db} from '@/utils/FirebaseApp'

  export default {
    name: 'Trip',
    props: ['trip','type'],
    components: {
      Icon
    },
    methods: {
      redirectTo: function (tripId) {
        this.$router.push(`/trips/${tripId}`)
      },
      removeTrip: function (tripId) {
        console.log(getUser().uid, '<===== getUser().uid')
        console.log(tripId, '<===== tripId')

        var r = confirm("Are you sure for delete ?")
        if (r === true) {
          db.ref('/trips/' + getUser().uid)
            .child(tripId)
            .remove()
            .then(function () {
              console.log('remove...')
            }, this)
        }

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
    padding-right: 1%;
    padding-top: 1%;
    cursor: pointer;
    width: 10%;
    float: right;
    font-weight:bold;
    position: absolute; right: 0;
    z-index: 3;
  }
  .remove-btn{
    z-index: 9999;
  }
</style>
