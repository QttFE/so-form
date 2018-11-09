import Vue from 'vue'
import Element from 'element-ui'
import qform from '../../src/install'
import Vuecode from 'viewcode/dist/vuecode.common.js'
import Box from './components/theme/box.vue'

import 'element-ui/lib/theme-chalk/index.css'
import 'viewcode/dist/vuecode.css'
import './styles/reset.css'

Vue.config.productionTip = false

export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Element)
  Vue.use(qform, {
    source: Element,
    components: {
      customComponent: custom
    }
  })
  Vue.use(Vuecode,{
    theme:'flat'
  })
  Vue.component('Box',Box)
}


function custom (h) {
  return (
  <div>
    <div>这块区域是全局组件</div>
    <input type="text"/>
    <span>custom global component</span>
  </div>)
}
