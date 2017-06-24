<template>
  <div>
    <div>
      <form>
        <AutoComplete @value="getStartAt"></AutoComplete>
        <AutoComplete @value="getDestination"></AutoComplete>

        <button @click.prevent="getFormValues()">SUBMIT</button>
      </form>  
    </div>
    <div>
      <my-button label="My Trips" route="/my-trip"></my-button>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue'
import AutoComplete from '@/utils/LocationAutoComplete.vue'

export default {
  name: 'home',
  components: {
    MyButton,
    AutoComplete
  },
  data () {
    return {
      startAt: '',
      destination: ''
    }
  },
  methods: {
    getFormValues: function () {
      console.log(this.startAt + ' - ' + this.destination)
      if(this.startAt.length === 0 || this.destination.length === 0){
        alert('errrorrrrrrr')
      }
    },
    getStartAt: function (val) {
      this.startAt = val
    },
    getDestination: function (val) {
      this.destination = val
    }
  }
}
</script>

<style>

</style>
