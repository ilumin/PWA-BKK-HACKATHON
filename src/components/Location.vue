<template>
  <li class="list-group-item location">
    <div class="location-info">
      <div id="location-photo" class="location-photo" @click="routeImage(location.id)">
        <img :src="getImage(location.photoReference, location.maxWidth, location.maxHeight)"></img>
      </div>
      <div class="location-name">
        <p>{{ location.locationName }}</p>
      </div>
      <div id="star-rating">
        <star-rating :rating=location.rating :read-only=true :star-size="15" :increment="0.5"></star-rating>
      </div>
    </div>
    <div id="action">
      <div id="add" v-bind:class="{addActive:isAdd}" class="add" @click=addLocation(location.id)>
        <icon name="add" width=20 height=20></icon>
      </div>
      <div id="delete" v-bind:class="{deleteActive:isDelete}" class="delete" @click=deleteLocation(location.id)>
        <icon name="close" width=20 height=20></icon>
      </div>
    </div>
  </li>
</template>

<script>
import { getPlaceImage } from '../utils/ApiUtil'
import StarRating from 'vue-star-rating'
import Icon from 'vue-icon'

export default {
  components: {
    StarRating,
    Icon
  },
  props: ['location'],
  data () {
    return {
      isAdd: false,
      isDelete: false
    }
  },
  methods: {
    routeImage: function (place_id) {
      console.log('routeImage')
      var vm = this
      console.log('place_id = ' + place_id)
      vm.$router.push('/location-detail/' + place_id)
    },
    getImage: function (photoReference, maxWidth, maxHeight) {
      return getPlaceImage(photoReference, maxWidth, maxHeight)
    },
    addLocation: function (id) {
      this.$emit('addId', this.id)
    },
    deleteLocation: function (id) {
      this.$emit('deleteId', this.id)
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
.location-info {
  margin: 5px;
  position: relative;
  height: 100px;
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
</style>
