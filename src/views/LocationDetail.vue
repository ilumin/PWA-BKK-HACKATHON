<template>
  <div>
    <div>
      <h1>Location Detail page</h1>
    </div>
    <div class="card">
      <img class="card-img" :src=image_url></img>
      <div class="card-block location-info">
        <h3 class="card-title">
          Name: {{ name }}
        </h3>
        <h3 class="card-title">
          Address: {{ address }}
        </h3>
        <h3 class="card-title">
          Rating: {{ rating }}
        </h3>
        <h2 class="card-title">
          Telephone: {{ telephone }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import { getPlaceDetail, getPlaceImage } from '../utils/ApiUtil'
export default {
  name: 'locationDetail',
  props: ['router_place_id'],
  components: [
    StarRating
  ],
  
  watch: {
    place_id: function (placeId) {
      var vm = this
      getPlaceDetail(placeId).then(function (response) {
        vm.place_id = placeId
        vm.rating = response.data.result.rating
        vm.address = response.data.result.formatted_address
        vm.telephone = response.data.result.formatted_phone_number
        vm.name = response.data.result.name
        vm.image_url = getPlaceImage(response.data.result.photos[0].photo_reference, 300, 300)
      })
    }
  },
  data () {
    return {
      image_url: '',
      name: '',
      address: '',
      type: '',
      rating: 0,
      telephone: '',
      place_id: ''
    }
  }, 
  mounted () {
    this.place_id = this.router_place_id
  }
}
</script>

<style>

</style>
