## 快速开始

> so-form 初衷就是通过对第三方组件进行二次封装，减轻写form的痛苦

**使用so-form插件**
全局注册 `iForm` `iFormRows` `iFormItem` 组件

element-ui的安装方式

```js
import soform from 'so-form'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(soform, {
  source: Element,
  type: 'element'   // type 枚举 ['element', 'iview']
})

```

iview的安装方式

```js
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import soform from 'so-form'

Vue.use(iView)
Vue.use(qform, {
  type: 'iview',
  source: iView
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
computed: {
  rows (h) {
    return [
      { label: '任务名称', name: 'job', type: 'input' },
      { label: '嵌套任务', name: 'inner.job', type: 'input' },
      { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}]},
      { label: '选择套餐', name: 'package', type: 'checkbox', options: [{value: 1, name: 'a'}, {value: 2, name:'b'}] },
    ]
  }
}
```


<box>
  <vuecode md>
    <div slot="demo">
      <demos-basic></demos-basic>
    </div>
    <div slot="code">

```html
<template>
  <iForm label-width="100px" :model="model">
    <iFormRows :rows="rows"></iFormRows>
  </iForm>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    model: {
      job: '',
      inner: {
        job: ''
      },
      isNickMsg: 1,
      package: []
    }
  }),
  computed: {
    rows (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input' },
        { label: '嵌套任务', name: 'inner.job', type: 'input' },
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}]},
        { label: '选择套餐', name: 'package', type: 'checkbox', options: [{value: 1, name: 'a'}, {value: 2, name:'b'}] },
      ]
    }
  }
}
</script>

```

  </div>
  </vuecode>
</box>

