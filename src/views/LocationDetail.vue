<template>
  <div>
    <div>
      <h1>Location Detail</h1>
    </div>
    <div class="card">
      <div>
        <img class="card-img" :src=image_url />
      </div>
      <div class="card-block">
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
    <div id="otherMap"></div>
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
      getPlaceDetail(placeId, vm.getDetail)
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
  },
  methods: {
    getDetail: function (response, status) {
      console.log(response, '<========= response')
      var vm = this
      // vm.place_id = placeId
      vm.rating = response.rating
      vm.address = response.formatted_address
      vm.telephone = response.formatted_phone_number
      vm.name = response.name
      vm.image_url = response.photos[0].getUrl({
        maxWidth: 300
      })
    }
  }
}
</script>

<style scoped>
  .card-img{
    border-radius: calc(0.25rem - 1px);
    margin: 0 auto;
    width: 100%;
  }
  .card-block{
    background-color: #555
  }
</style>
