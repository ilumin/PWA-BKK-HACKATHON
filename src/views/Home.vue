<template>
  <div>
    <div>
      <form>
        <input type="text" value="Start">
        <input type="text" value="Destination">
        <button @click.prevent="getFormValues()">SUBMIT</button>
      </form>  
    </div>
    <div>
      <my-button route="/1234"></my-button>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue'

export default {
  name: 'home',
  components: {
    MyButton
  }
}
</script>

<style>

</style>
