<template>
  <div class="location-list">
        <location @locationId="locationId(location.id)" v-for="location in locations" 
            :location=location
            :key=location.id></location>
  </div>
</template>

<script>
import Location from '@/components/Location';
export default {
    name: 'locationList',
    props: ['locations'],
    components: {
        Location
    },
    methods: {
        locationId: function(id) {
            var vm = this;
            for (var i = 0; i < vm.locations.length; i++) {
                if (vm.locations[i].id == String(id)) {
                    console.log(vm.locations[i]);
                    vm.locations.splice(i, 1);
                    break;
                }
            }
            console.log('id = '+ id)
            //console.log(JSON.stringify(vm.locations))
        }
    }
}
</script>

<style>

</style>
