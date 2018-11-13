## 重命名全局组件

默认全局注册 `iForm` `iFormRows` `iFormItem` 组件，如果有冲突，可以通过如下方式进行重命名

```js
import soform from 'so-form'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(soform, {
  source: Element,
  type: 'element',
  rename: {
    form: 'm-form',
    formRows: 'm-form-rows',
    formItem: 'm-form-item'
  }
})
```

使用的时候

```html
<m-form :model="model">
  <m-form-rows :rows="columns"></m-form-rows>
</m-form>
```