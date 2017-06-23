import { play } from 'vue-play'

const load = requireContext => {
  return requireContext.keys().map(requireContext)
}

load(require.context('./', true, /.play.js$/))
