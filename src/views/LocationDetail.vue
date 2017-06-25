<template>
  <div>
    <div>
      <h1>Location Detail</h1>
    </div>
    <div class="card">
      <div>
        <img class="card-img" :src=image_url />
      </div>
      <b-card :header=name
        class="mb-2"
        show-footer
      >
        <div>
          Address: <span class="text-muted">{{ address }}</span>
        </div>
        <!--<div>
          Rating: <span class="text-muted">{{ rating }}</span>
        </div>-->
        <div>
          Telephone: <span class="text-muted">{{ adtelephonedress }}</span>
        </div>

        <small slot="footer" class="text-muted">
          Rating: {{ rating }}
        </small>
      </b-card>
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
</style>
