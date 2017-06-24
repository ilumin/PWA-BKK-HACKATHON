<template lang="html">
  <div ref="gmap" class="components gmap">
  </div>
</template>

<script>
import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCbWJ-1eUpVhivVuixtkkWdMFvSX4tfKvA'
  }
})

export default {
  name: 'Map',
  props: ['markers', 'direction'],
  methods: {
    renderMap () {
      console.log('init map')
    }
  },
  data () {
    return {
      mapObject: null
    }
  },
  mounted () {
    const element = this.$refs['gmap']

    var chicago = {lat: 41.85, lng: -87.65};
    var indianapolis = {lat: 39.79, lng: -86.14};

    this.mapObject = new google.maps.Map(element, {
      center: {lat: 1.85, lng: 13.65},
      scrollwheel: false,
      zoom: 7
    });

    // Pass the directions request to the directions service.
    if (this.direction) {
      let waypoints = []
      for (let point of this.direction) {
        console.log('point:', point)
        waypoints.push({
          location: new google.maps.LatLng(point.position),
          stopover: true
        })
      }

      let request = {
        origin: waypoints.shift().location,
        destination: waypoints.pop().location,
        waypoints: waypoints,
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      }

      let directionsService = new google.maps.DirectionsService()
      let directionsDisplay = new google.maps.DirectionsRenderer()
      directionsDisplay.setMap(this.mapObject)

      directionsService.route(request, function(response, status) {
        if (status == 'OK') {
          // Display the route on the map.
          directionsDisplay.setDirections(response);
        } else {
          console.error('Directions request failed due to ', status)
        }
      });
    }
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
