import axios from 'axios'

export function getPlaceImage(photo_reference, max_width, max_height) {
    // TODO: call google place image API
    return 'https://maps.googleapis.com/maps/api/place/photo?maxheight='+ max_height +'&maxwidth='+ max_width +'&photoreference='+ photo_reference +'&key=AIzaSyDGvRoeZwvvbOmrQShZaAaQSjrtbwTLCWA';
}

export function autoComplete(value) {
  return axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=geocode&key=AIzaSyAMJ1pWSfYUWu7_Jj7lUy6QY3pwdBONXwk`)
}