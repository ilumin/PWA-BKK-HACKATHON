import Vue from 'vue'
import { play } from 'vue-play'
import Location from './../src/components/Location.vue'

Vue.component('location', Location)

play('Location')
  .add('with photo_reference', {
    template: `<location :location="location"></location>`,
    data () {
      return {
        location: {
          id: '1',
          photo_reference: 'CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU',
          max_width: 100,
          max_height: 100,
          location_name: 'location name 1',
          rating: 3
        }
      }
    }
})
