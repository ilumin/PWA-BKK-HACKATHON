<template>
    <div class="location-auto-complete">
        <Autocomplete :items="items" v-model="item" :get-label="getLabel" :component-item='template' @update-items="updateItems">
        </Autocomplete><a class="clear-input" @click="clearInput" v-if="value">x</a>
    </div>
</template>

<script>
  import Autocomplete from 'v-autocomplete'
  // You need a specific loader for CSS files like https://github.com/webpack/css-loader
  import 'v-autocomplete/dist/v-autocomplete.css'

  import {autoComplete} from './ApiUtil'
  import ItemAutoComplete from './ItemAutoComplete'

  export default {
    components: {
      Autocomplete
    },
    name: 'locationAutoComplete',
    data () {
      return {
        value: '',
        item: {},
        items: [],
        template: ItemAutoComplete,
      }
    },
    methods: {
      getLabel (item) {
        this.value = item.description
        this.$emit('item', item)
        return item.description
      },
      updateItems (text) {
        var vm = this
        autoComplete(text).then(function (response) {
          if(response.data.predictions) {
            vm.items = response.data.predictions
          }
        })
      },
      clearInput () {
        this.value = ''
        this.item = {}
        this.items = []
      }
    }
  }
</script>

<style>
    .v-autocomplete .v-autocomplete-input-group .v-autocomplete-input {
        box-shadow: none;
        border: 1px solid #157977;
        /*width: calc(100% - 32px);*/
        outline: none;
        background-color: #eee;
    }

    .v-autocomplete .v-autocomplete-input-group.v-autocomplete-selected .v-autocomplete-input {
        color: #008000;
        background-color: #f2fff2;
    }

    .v-autocomplete .v-autocomplete-list {
        width: 100%;
        text-align: left;
        border: none;
        border-top: none;
        max-height: 400px;
        overflow-y: auto;
        border-bottom: 1px solid #157977;
    }

    .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item {
        cursor: pointer;
        background-color: #fff;
        padding: 5px ;
        border-bottom: 1px solid #157977;
        border-left: 1px solid #157977;
        border-right: 1px solid #157977;
    }

    .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:last-child {
        border-bottom: none;
    }

    .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item:hover {
        background-color: #eee;
    }

    .v-autocomplete .v-autocomplete-list .v-autocomplete-list-item abbr {
        opacity: 0.8;
        font-size: 0.8em;
        display: block;
        font-family: sans-serif;
    }
    .v-autocomplete {
        display: inline;
        float:left;
    }
    .clear-input{
        padding: 0 5px;
        cursor: pointer;
    }
</style>
