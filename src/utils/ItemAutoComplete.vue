<template>
    <div>
        <abbr>{{item.description}}</abbr>
    </div>
</template>

<script>
  export default {
    props: { item: { required: true } }
  }
</script>

<style>
.v-autocomplete-input {
  box-shadow: 10px 10px 5px black;
  width: 200px;
}
</style>
