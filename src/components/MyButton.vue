<template>
    <div>
        <button type="button" class="mybutton"> {{ label }} </button>
    </div>  
</template>

<script>
export default {
  name: 'myButton',
  props: [ 'label' ]
}
</script>

<style>
.mybutton {
    background-color: blue;
}
</style>


