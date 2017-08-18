<template>
  <div class="card location" >
    <img v-if="location.thumbnail" :src="location.thumbnail" class="card-img" @click="gotoPlaceDetail(location.id)">
    <div v-if="type == 'add'" class="icon-add" @click="addLocationToTrip(trip_id, location.id)" id="add-btn" name="add-btn">
        <icon name="add"></icon>
    </div>
    <div class="card-block location-info">
      <h3 class="card-title">
        {{ location.locationName }}
      </h3>
      <star-rating
        :rating="location.rating"
        :read-only="true"
        :star-size="15"
        :increment="0.5">
      </star-rating>

    </div>
  </div>
</template>

<script>
import { getPlaceImage, getPlaceDetail } from '../utils/ApiUtil'
import StarRating from 'vue-star-rating'
import Icon from 'vue-icon'
import {getUser, db} from '@/utils/FirebaseApp'

export default {
  firebase: () => ({
    trip: {
      source: db.ref('trips/' + getUser().uid)
    }
  }),
  components: {
    StarRating,
    Icon
  },
  props: ['location', 'type', 'trip_id'],
  data () {
    return {
      isAdd: false,
      isDelete: false,
      tripId: null
    }
  },
  methods: {
    gotoPlaceDetail (place_id) {
      this.$router.push('/location-detail/' + place_id)
    },
    getImage: function (photoReference, maxWidth, maxHeight) {
      return getPlaceImage(photoReference, maxWidth, maxHeight)
    },
    deleteLocation: function (id) {
      this.$emit('deleteId', this.id)
    },
    addId: function (locationId) {
      this.addLocationToTrip('-KnPoQLob13rmyEg7m_a', locationId)
      // this.addLocationToTrip(tripId, locationId)
    },
    addLocationToTrip: function (tripId, locationId) {
      // TODO get user uid
      // TODO get location by ID
       this.tripId = tripId

      console.log(locationId, '<====== locationId')
      getPlaceDetail(locationId, this.saveDetail)
    },
    saveDetail: function (response, status) {
        console.log(response, '<===== response')
        // TODO add this locationId to trip [FIREBASE]
        const uid = getUser().uid

        console.log('location:', location)

        var vm = this

        var tripObj = db.ref('/trips/' + uid + '/' + vm.tripId)

        var count = 0
        tripObj.child('locations').on('value', function (snapshot) {
          count = snapshot.numChildren()
        })

        db.ref('/trips/' + uid + '/' + vm.tripId + '/locations/' + response.place_id).set({
          name: response.name,
          order: count,
          rating: response.rating ? response.rating: 0,
          thumbnail: response.photos[0].getUrl({
            maxWidth: 300
          }),
          position: {
            lat: response.geometry.location.lat(),
            lng: response.geometry.location.lng()
          }
        }).then(function () {
          console.log('donee')
        })

        window.location.reload()
    }
  }
}
</script>

<style>
.location-photo {
  float: left;
  padding: 5px;
  position: relative;
}
.add {
  float: left;
  display: none;
}
.addActive {
  display: block;
}
.delete {
  position: inherit;
  display: none;
}
.deleteActive {
  display: block;
}
.location-name {}
.star-rating {}

.location:hover {
  background-color: #f4f6f6;
}

.icon-add{
  background-color: greenyellow;
  cursor: pointer;
  width: 30%;
  float: right;
  font-weight:bold;
  position: absolute; right: 0;

}

.card { position: relative; margin-bottom: 10px; border: 0; box-shadow: 0 0 .5em rgba(0,0,0,.3); min-height: 190px; background-color: rgba(0,0,0,.5) }
.rating-text { display: none; }
.card-img { width: 100%; height: auto; display: block }
.location-info { position: absolute; left: 0; bottom: 0; right: 0; padding: 10px; }
</style>
