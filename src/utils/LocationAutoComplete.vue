<template>
    <div class="location-auto-complete" @keyup.enter="autoComplete(message)">
        <input v-model="message">
        <div v-for="prediction in predictions" key="$index">{{ prediction.description }}</div>
    </div>
</template>

<script>
  var predictions
  export default {
    name: 'locationAutoComplete',
    props: ['message'],
    methods: {
      autoComplete: function (message) {
        this.axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.message}&types=geocode&key=AIzaSyDGvRoeZwvvbOmrQShZaAaQSjrtbwTLCWA`).then((response) => {
          predictions = response.body
          console.log(predictions)
        })
      }
    }
  }
</script>
