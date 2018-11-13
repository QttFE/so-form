import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import wrapperElement from './formm/wrapper/element'
// import so-form from 'so-form'
import soform from '../../../src/install'
import custom from './custom'

Vue.use(Element)
Vue.use(soform, {
  source: Element,
  components: {
    test: custom
  },
  rename: {
    form: 'mform'
  }
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
