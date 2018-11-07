import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import wrapperElement from './formm/wrapper/element'
// import qform from 'q-form'
import qform from '../../../src/install'
import custom from './custom'

Vue.use(Element)
Vue.use(qform, {
  source: Element,
  components: {
    test: custom
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
