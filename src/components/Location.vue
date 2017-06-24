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
        <div id="action">
            <div id="add" v-bind:class="{addActive:isAdd}" class="add" @click=addLocation(location.id)>
                <icon name="add" width=20 height=20></icon>
            </div>
            <div id="delete" v-bind:class="{deleteActive:isDelete}" class="delete" @click=deleteLocation(location.id)>
                <icon name="close" width=20 height=20></icon>
            </div>
        </div>
    </div>
</template>

<script>
import { getPlaceImage } from '../utils/ApiUtil';
import StarRating from 'vue-star-rating';
import Icon from 'vue-icon';

export default {
    components: {
        StarRating,
        Icon
    },
    props: ['location'],
    data() {
        return {
            isAdd: true,
            isDelete: true
        }
    },
    methods: {
        getImage: function(photo_reference, max_width, max_height) {
            return  getPlaceImage(photo_reference, max_width, max_height);
        },
        addLocation: function(id) {
            this.$emit('addId', this.id);
        },
        deleteLocation: function(id) {
            this.$emit('deleteId', this.id);
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
.add {
    float: left;
    display: none;
}
.addActive {
    display: block;
}
.delete {
    position: inherit;
    display: none;
}
.deleteActive {
    display: block;
}
.location-name {}
.star-rating {}
</style>
