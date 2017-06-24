<template lang="html">
  <div class="components map">
    display map
    <pre>{{ markers }}</pre>
    <pre>{{ direction }}</pre>
  </div>
</template>

<script>
export default {
  name: 'Map',
  props: ['markers', 'direction'],
  mounted () {
    console.log('markers:', this.markers)
    console.log('direction:', this.direction)
  }
}
</script>

<style lang="css">
</style>
