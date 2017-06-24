import Vue from 'vue'
import { play } from 'vue-play'
import LocationList from './../src/components/LocationList.vue'

Vue.component('location-list', LocationList)

play('LocationList')
  .add('with photo_reference', {
    template: `<location-list :locations="locations"></location-list>`,
    data () {
      return {
        locations: [{
          id: '1',
          photo_reference: 'CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU',
          max_width: 100,
          max_height: 100,
          location_name: 'location name 1',
          rating: 3
        },
        {
          id: '2',
          photo_reference: 'CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU',
          max_width: 100,
          max_height: 100,
          location_name: 'location name 2',
          rating: 3.5,
          type: 'add'
        },
        {
          id: '3',
          photo_reference: 'CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU',
          max_width: 100,
          max_height: 100,
          location_name: 'location name 3',
          rating: 3.5,
          type: 'delete'
        }]
      }
    }
  })
