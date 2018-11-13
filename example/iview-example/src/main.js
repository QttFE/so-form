import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import wrapperElement from './formm/wrapper/element'
// import qform from 'so-form'
import qform from '../../../src/install'
import custom from './custom'

Vue.use(iView)
Vue.use(qform, {
  type: 'iview',
  source: iView
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
