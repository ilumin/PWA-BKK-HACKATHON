<template>
    <div>
        <b-button type="button" v-bind:class="color" class="mybutton" @click="routeTo(route)" > {{ label }} </b-button>
    </div>
</template>

<script>
export default {
  name: 'myButton',
  props: [ 'label', 'color', 'route' ],
  methods: {
    routeTo: function (route) {
      if (route !== undefined) {
        this.$router.push(route)
      }
    }
  }
}
</script>

<style>
.mybutton {
  width: 100px;
}
.blue {
  background-color: blue;
}
.green {
  background-color: green;
}
</style>
