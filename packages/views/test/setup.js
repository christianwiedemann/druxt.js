import '@testing-library/jest-dom'
import { config as vtuConfig } from '@vue/test-utils'
import Vue from 'vue'
import * as VTU from '@vue/test-utils'
import { installCompat as installVTUCompat, fullCompatConfig } from 'vue-test-utils-compat'

const useVue2 = 'USE_VUE2' in process.env
if (!useVue2) {
  Vue.configureCompat({
    MODE: 2
  })

  const compatH = new Vue({}).$createElement
  installVTUCompat(VTU, fullCompatConfig, compatH)
}

// Don't stub `<transition>` and `<transition-group>` components
vtuConfig.stubs.transition = false
vtuConfig.stubs['transition-group'] = false
VTU.config.stubs.transition = false
VTU.config.stubs['transition-group'] = false
