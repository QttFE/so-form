import { setConfig } from './adaptation/config'

let iForm, iFormItem, iFormRows

/* vue plugin install function */
const install = function(Vue, opts = {}) {
  let config = setConfig(opts.type)
  let wrappedComponent = config.wrapper(opts.source)

  Vue.prototype.$formmWrapped = {
    ...wrappedComponent,
    ...(opts.components || {})
  }

  iForm = require('./component/Form.vue').default
  iFormItem = require('./component/FormItem.vue').default
  iFormRows = require('./component/FormRows.vue').default

  Vue.component('iForm', iForm)
  Vue.component('iFormItem', iFormItem)
  Vue.component('iFormRows', iFormRows)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
