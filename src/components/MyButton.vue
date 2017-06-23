<template>
    <div>
        <button type="button" v-bind:class="color" class="mybutton"> {{ label }} </button>
    </div>  
</template>

<script>
export default {
  name: 'myButton',
  props: [ 'label', 'color' ]
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


