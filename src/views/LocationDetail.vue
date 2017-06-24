<template>
  <div>
    <div>
      <h1>Location Detail page</h1>
    </div>
    <div>
      <img :src=image_url></img>
    </div>
    <div>
      <h2>Name: {{ name }}</h2>
    </div>
    <div>
      <h2>Address: {{ address }}</h2>
    </div>
    <div>
      <h2>Rating: {{ rating }}</h2>
    </div>
    <div>
      <h2>Telephone: {{ telephone }}</h2>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import { getPlaceDetail, getPlaceImage } from '../utils/ApiUtil'
export default {
  name: 'locationDetail',
  props: ['place_id'],
  components: [
    StarRating
  ],
  watch: {
    place_id: function (placeId) {
      var vm = this
      getPlaceDetail(placeId).then(function (response) {
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
      telephone: ''
    }
  }
}
</script>

<style>

</style>
