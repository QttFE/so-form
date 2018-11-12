## 快速开始

> q-form 初衷就是通过对第三方组件进行二次封装，减轻写form的痛苦

**使用q-form插件**
全局注册 `iForm` `iFormRows` `iFormItem` 组件
```js
import qform from '@qtt/q-form'

Vue.use(Element)
Vue.use(qform, {
  source: Element,
})

```

**组件内使用**
```html
<!-- model 为表单数据中心，iFormItem 通用的vue表单会自动数据绑定 -->
<iForm :model="model">
  <iFormRows :rows="rows"/>
</iForm>

```

```js
// 注意，需要把columns写在computed内部（若写在data后续会有context问题）
export default {
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input'},
        { label: '短信内容', name: 'msg', type: 'textarea'},
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}] , on: {}},
        { label: '落地页个性化', name: 'land', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}] },
      ]
    }
  }
}
```

### todo

[x] 支持iview
