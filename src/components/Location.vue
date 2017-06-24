<template>
    <div>
        <div id="location-photo" class="location-photo">
            <img :src="getImage(location.photo_reference, location.max_width, location.max_height)"></img>
        </div>
        <div id="location-info" class="location-info">
            <div id="location-name" class="location-name">
                <p>{{ location.location_name }}</p>
            </div>
            <div id="star-rating">
                <star-rating :rating=location.rating :read-only=true :star-size="15" :increment="0.5"></star-rating>
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
    props: ['location'],
    data() {
        return {
        }
    },
    methods: {
        getImage: function(photo_reference, max_width, max_height) {
            return  getPlaceImage(photo_reference, max_width, max_height);
        }
    }
}
</script>

<style>
.location-photo {
    float: left;
    padding: 5px;
    position: relative;
}
.location-info {
    padding: 5px;
    position: relative;
}
.location-name {}
.star-rating {}
</style>
