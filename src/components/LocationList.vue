<template>
  <div class="location-list">
    <location v-if="locations.length > 0"
      @addId="addId(location.id)"
      @deleteId="deleteId(location.id)"
      v-for="(location, index) in waypoints"
      :location="location"
      :key="location.id"
      :trip_id="trip_id"
      type="remove"
    >
    </location>
  </div>
</template>

<script>
import Location from '@/components/Location'
import {nearbyPlace} from '@/utils/ApiUtil'
export default {
  name: 'locationList',
  props: ['locations', 'trip_id'],
  components: {
    Location
  },
  computed: {
    waypoints () {
      let vm = this

      return vm.locations.sort((a, b) => a.order > b.order)
    }
  },
  methods: {
    addId: function (id) {
      this.$emit('addId', id)
    },
    deleteId: function (id) {
      var vm = this
      for (var i = 0; i < vm.locations.length; i++) {
        if (vm.locations[i].id === String(id)) {
          vm.locations.splice(i, 1)
          break
        }
      }
    }
  }
}
</script>

<style>
.location-list {
  margin: 10px 0;
}
</style>
