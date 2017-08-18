import axios from 'axios'

var keyApi = 'AIzaSyBhmfYqx0u4NWnSavh7CM3o0JtTJE-PP7U'

export function getPlaceImage (photoReference, maxWidth, maxHeight) {
  return 'https://maps.googleapis.com/maps/api/place/photo?maxheight=' + maxHeight + '&maxwidth=' + maxWidth + '&photoreference=' + photoReference + '&key=AIzaSyBhmfYqx0u4NWnSavh7CM3o0JtTJE-PP7U'
}

export function autoComplete (value) {
  return axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=geocode&key=${keyApi}`)
}

export function getPlaceDetail (placeId, callback) {
  // return Vue.jsonp(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyBhmfYqx0u4NWnSavh7CM3o0JtTJE-PP7U`)
  // return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyBhmfYqx0u4NWnSavh7CM3o0JtTJE-PP7U`)
  var map = new google.maps.Map(document.getElementById('otherMap'), {
    zoom: 17
  });

  var request = {
    placeId: placeId
  };
  var service = new google.maps.places.PlacesService(map)
  service.getDetails(request, callback)
}

export function searchPlace (q) {
  return axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${q}&key=AIzaSyBhmfYqx0u4NWnSavh7CM3o0JtTJE-PP7U`)
}

export function nearbyPlace (position, callback) {
  var map = new google.maps.Map(document.getElementById('otherMap'), {
    zoom: 17
  });

  var pyrmont = new google.maps.LatLng(position[1].position.lat,position[1].position.lng);

  var request = {
    location: pyrmont,
    radius: '10000',
    type: ['cafe']
  };

  var service = new google.maps.places.PlacesService(map)
  service.nearbySearch(request, callback)
}

