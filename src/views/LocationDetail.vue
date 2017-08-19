<template>
  <div>
    <NavBar></NavBar>
    <div>
      <h5>Location Detail</h5>
    </div>
    <div class="card my-card">
      <!--<div>
        <img class="card-img" :src=image_url />
      </div>-->
      <b-card :header=name
        :img=image_url
        class="mb-2"
        show-footer
      >
        <div class="card-body">
          <div>
            <small>
              Address: <span class="text-muted">{{ address }}</span>
            </small>
          </div>
          <!--<div>
            Rating: <span class="text-muted">{{ rating }}</span>
          </div>-->
          <div>
            <small>
              Telephone: <span class="text-muted">{{ telephone }}</span>
            </small>
          </div>
        </div>
        <small slot="footer" class="text-muted">
          Rating:
          <star-rating
                  :rating="rating"
                  :read-only="true"
                  :star-size="15"
                  :increment="0.5">
          </star-rating>
        </small>
      </b-card>
    </div>
    <div id="otherMap"></div>

    <b-button
      class="btn-lg btn-block btn-info"
      @click="gotoMyTrip()">
      Back
    </b-button>
  </div>

</template>

<script>
import StarRating from 'vue-star-rating'
import Icon from 'vue-icon'
import { getPlaceDetail, getPlaceImage } from '../utils/ApiUtil'
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'locationDetail',
  props: ['router_place_id'],
  components: {
    StarRating,
    Icon,
    NavBar
  },

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
    gotoMyTrip: function () {
        this.$router.go(window.history.back())
    },
    getDetail: function (response, status) {
      console.log(response, '<========= response')
      var vm = this
      // vm.place_id = placeId
      vm.rating = response.rating
      vm.address = response.formatted_address
      vm.telephone = response.formatted_phone_number
      vm.name = response.name
      vm.image_url = response.photos[0].getUrl({
        maxWidth: 1000
      })
    }
  }
}
</script>

<style scoped>
  .card {
    background-color: #fff;
  }

  .my-card {
    margin-top: 48px;
  }
  .card-img{
    border-radius: calc(0.25rem - 1px);
    margin: 0 auto;
    width: 100%;
  }
  .card-block{
    background-color: #555
  }
</style>
