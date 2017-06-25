<template lang="html">
  <div ref="gmap" class="components gmap">
  </div>
</template>

<script>
import Vue from 'vue'

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
      mapObject: null,
      mapMarkers: []
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

    // set markers
    if (this.markers) {
      for (let point of this.markers) {
        this.mapMarkers.push(new google.maps.Marker({
          position: point.position,
          map: this.mapObject
        }))
      }

      this.mapObject.setCenter(this.mapMarkers[0].getPosition())
    }

    // Pass the directions request to the directions service.
    console.log('this.direction:', this.direction)
    if (this.direction) {
      let waypoints = []
      for (let point of this.direction) {
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
