<template lang="html">
  <div class="components map">
    <gmap-map
      class="gmap"
      :center="{lat:1.38, lng:103.8}"
      :zoom="7"
    >
      <gmap-marker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="false"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCbWJ-1eUpVhivVuixtkkWdMFvSX4tfKvA',
    libraries: 'places'
  }
})

export default {
  name: 'Map',
  props: ['markers', 'direction'],
  mounted () {
    console.log('markers:', this.markers)
    console.log('direction:', this.direction)
    console.log('VueGoogleMaps:', VueGoogleMaps)
  }
}
</script>

<style lang="css">
.gmap {
  width: 100%;
  height: 100%;
  min-height: 500px;
}
</style>
