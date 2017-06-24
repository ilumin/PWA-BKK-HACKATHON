<template>
  <div class="location-list">
        <location v-for="location in locations" 
            :location=location
            :key=location.location_name></location>
  </div>
</template>

<script>
import Location from '@/components/Location';
export default {
    name: 'locationList',
    props: ['locations'],
    components: {
        Location
    }
}
</script>

<style>

</style>
