<template>
    <div id="suggest-location">
        <div>
            <Location v-if="suggestLocationList.length > 0"
                      v-for="location in suggestLocationList"
                      :location="location"
                      :key="location.id">
            </Location>
            <div id="otherMap"></div>
        </div>
    </div>
</template>

<script>
  import Location from '@/components/Location'
  import {nearbyPlace} from '@/utils/ApiUtil'
  export default {
    components: {
      Location
    },
    props: ['locations'],
    name: 'SuggestLocation',
    data: () => ({
        propsLocation: null,
        suggestLocationList:[]
    }),
    watch: {
      locations: function (locations) {
        console.log(locations, "<====== SSSuggest locations")

        nearbyPlace(locations, this.getNearbyLocation)
        return null
      }
    },
    methods: {
      getNearbyLocation: function (results, status) {
        console.log(results, '<===== result')

        this.suggestLocationList = Object.keys(results)
          .map(key => {

            if(results[key]){
              const item = results[key]

              let photo = null
              if(item.photos){
                photo= item.photos[0].getUrl({
                  maxWidth: 100
                })
              }

              return {
                id: item.id,
                locationName: String(item.name),
                rating: item.rating,
                type: 'simple',
                thumbnail: photo,
                maxWidth: 100,
                maxHeight: 100
              }
            }

          })
        console.log(this.suggestLocationList, '<===== this.suggestLocationList')
      }
    }
    /*
    * id: place.place_id,
     locationName: String(place.name),
     rating: place.rating,
     type: 'add',
     photoReference: place.photos[0].photo_reference,
     maxWidth: 100,
     maxHeight: 100
    * */
  }
</script>