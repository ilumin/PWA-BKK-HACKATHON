<template>
    <div>
        <div id="location-photo">
            <img :src="getImageUrl(photo_reference, maxwidth, maxheight)"></img>
        </div>
        <div id="location-name">
            <p>{{ location_name }}</p>
        </div>
    </div>
</template>

<script>
import { getPlaceImage } from '../utils/ApiUtil';
export default {
    props: {
        location_name: String, 
        photo_reference: String, 
        type: String, 
        maxwidth: { type: Number, default: 100 }, 
        maxheight: { type: Number, default: 100 }
    },
    data() {
        return {
        }
    },
    methods: {
        getImageUrl: function(photo_reference, maxwidth, maxheight) {
            console.log('width=' + maxwidth)
            console.log('height=' + maxheight)
            return  getPlaceImage(photo_reference, maxwidth, maxheight);
        }
    }
}
</script>

<style>

</style>
