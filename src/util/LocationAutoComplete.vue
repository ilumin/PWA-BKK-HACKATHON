<template>
    <div class="location-auto-complete" @keyup.enter="autoComplete(message)">
        <input v-model="message">
        <div v-for="prediction in predictions" key="$index">{{ prediction.description }}</div>
    </div>
</template>

<script>
  var predictions =
  export default {
    name: 'locationAutoComplete',
    props: ['message'],
    methods: {
      autoComplete: function (message) {
        console.log(message, '<=== msg')
      }
    }
  }
</script>
