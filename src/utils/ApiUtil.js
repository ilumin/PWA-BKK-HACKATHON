export function getPlaceImage(photo_reference, max_width, max_height) {
    // TODO: call google place image API
    return 'https://maps.googleapis.com/maps/api/place/photo?maxheight='+ max_height +'&maxwidth='+ max_width +'&photoreference='+ photo_reference +'&key=AIzaSyDGvRoeZwvvbOmrQShZaAaQSjrtbwTLCWA';
}