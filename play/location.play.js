import Vue from 'vue'
import { play } from 'vue-play'
import Location from './../src/components/Location.vue'

Vue.component('location', Location)

play('Location')
  .add('with photo_reference', {
    template: `<location rating=3 location_name="location name tee mee ngoo" photo_reference="CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU"></location>`
  })
