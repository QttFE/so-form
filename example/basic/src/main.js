import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import qform from 'q-form'
import qform from '../../../src/install'

Vue.use(Element)
Vue.use(qform, {
  source: Element
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
