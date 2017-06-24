<template>
    <div>
        <div id="location-photo" class="location-photo">
            <img :src="getImage(photo_reference, maxwidth, maxheight)"></img>
        </div>
        <div id="location-name" class="location-name">
            <p>{{ location_name }}</p>
        </div>
        <div>
            <p>
                {{ rating }}
            </p>
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
        rating: Number,
        maxwidth: { type: Number, default: 100 }, 
        maxheight: { type: Number, default: 100 }
    },
    data() {
        return {
        }
    },
    methods: {
        getImage: function(photo_reference, maxwidth, maxheight) {
            return  getPlaceImage(photo_reference, maxwidth, maxheight);
        }
    }
}
</script>

<style>
.location-photo {
    float: left;
}
.location-name {
    float: right;
}
</style>
