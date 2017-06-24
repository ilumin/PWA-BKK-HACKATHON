import axios from 'axios'

export function getPlaceImage (photoReference, maxWidth, maxHeight) {
  return 'https://maps.googleapis.com/maps/api/place/photo?maxheight=' + maxHeight + '&maxwidth=' + maxWidth + '&photoreference=' + photoReference + '&key=AIzaSyDGvRoeZwvvbOmrQShZaAaQSjrtbwTLCWA'
}

export function autoComplete (value) {
  return axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&types=geocode&key=AIzaSyAMJ1pWSfYUWu7_Jj7lUy6QY3pwdBONXwk`)
}

export function getPlaceDetail (placeId) {
  return axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=AIzaSyAMJ1pWSfYUWu7_Jj7lUy6QY3pwdBONXwk`)
}

export function searchPlace (q) {
  return axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${q}&key=AIzaSyAMJ1pWSfYUWu7_Jj7lUy6QY3pwdBONXwk`)
}
