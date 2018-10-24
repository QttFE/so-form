import wrapperElement from './wrapper/element'
import iFormItem from './component/FormItem.vue'
import iForm from './component/Form.vue'

const install = function(Vue, opts = {}) {
  let wrappedComponent = wrapperElement(opts.source)
  Vue.prototype.$formmWrapped = {...wrappedComponent, ...(opts.component || {})};

  Vue.component('iForm', iForm);
  Vue.component('iFormItem', iFormItem);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
