<template>
    <div>
        <div id="location-photo" class="location-photo">
            <img :src="getImage(photo_reference, maxwidth, maxheight)"></img>
        </div>
        <div id="location-info" class="location-info">
            <div id="location-name" class="location-name">
                <p>{{ location_name }}</p>
            </div>
            <div id="star-rating">
                <star-rating :rating=rating :read-only=true :star-size="15" :increment="0.5"></star-rating>
            </div>
        </div>
    </div>
</template>

<script>
import { getPlaceImage } from '../utils/ApiUtil';
import StarRating from 'vue-star-rating';

export default {
    components: {
        StarRating
    },
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
    padding: 5px;
}
.location-info {
    padding: 5px;
    position: inherit
}
.location-name {}
.star-rating {}
</style>
