<template>
    <div class="trip-list">
        <trip v-for="trip in trips" :trip="trip" :key="$index"></trip>
    </div>
</template>

<script>
  import Trip from '@/components/Trip'

  export default {
    component: {
      Trip
    },
    name: 'tripList',
    props: ['trips']
  }
</script>
