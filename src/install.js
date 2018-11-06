import wrapperElement from './wrapper/element.jsx'
import iFormItem from './component/FormItem.vue'
import iForm from './component/Form.vue'
import iFormRows from './component/FormRows.vue'

const install = function(Vue, opts = {}) {
  let wrappedComponent = wrapperElement(opts.source)
  Vue.prototype.$formmWrapped = {
    ...wrappedComponent,
    ...(opts.component || {})
  }

  Vue.component('iForm', iForm)
  Vue.component('iFormItem', iFormItem)
  Vue.component('iFormRows', iFormRows)
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

export const FormItem = FormItem
export const Form = iForm
