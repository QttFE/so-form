## iFormItem

iFormItem简单来说就是将组件库的form-item 与 具体渲染组件 组合起来的复合组件，所以q-form就会一些组件传参的约定

<box>
  <vuecode md>
    <div slot="demo">
      <demos-form-item-config></demos-form-item-config>
    </div>
    <div slot="code">

```html
<template>
  <div id="app">
    <iForm label-width="100px" :model="model">
      <iFormItem v-for="(col, index) in columns" v-bind="col" :key="index"></iFormItem>
    </iForm>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    when: true,
    model: {
      job: '',
      job1: '',
      msg: '',
      nickname: '',
      isNickMsg: 1,
      isNickMsg1: [],
      land: 1,
    }
  }),
  computed: {
    columns (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input', top: (h) => (<span>'top'</span>), suffix: 'suffix'},
        { label: '任务名称', name: 'textarea', type: 'textarea' },
        { label: 'tree', name: 'tree', type: 'tree', props: {data: []} },
        { label: 'datepicker', name: 'job1', type: 'InputNumber'},
        { label: '短信内容', name: 'msg', type: 'textarea', on: {}},
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是', border: true, on: {change: (e) => {
          this.ttt()
        }}}]},
        { label: '是否昵称短信', name: 'isNickMsg1', type: 'checkbox', options: [{value: 1, name: 'a'}, {value: 2, name:'b'}] , on: {}},
        { label: '昵称短信内容', name: 'nickname', type: 'input', on: {}, props: {
            type: 'textarea'
        }},
        // label 自定义 render
        { name: 'land', type: 'select', options: [{value: 1, name: '否'}, {value: 2, name:'是'}], slots: { label: (h) => (<span style="color: gray">落地页个性化 by render</span>) }},
        // custom 表单
        { label: 'cu', name: 'custom', type: 'custom', render (h) {
          return (
            <span>自定义内容</span>
          )
        }}
      ]
    }
  }
}
</script>
```

  </div>
  </vuecode>
</box>

### iFormItem 配置
| Name                 | Type       | Default      | Description               |   example                           |
|----------------------|------------|--------------|---------------------------|-------------------------------------|
| label                | string   | '' | 表单标签名称 | `姓名` |
| name                 | string   |   | 会去`<iForm>`的model对象里找到值进行双向绑定（支持多级路径，如'obj.a.b'或'obj.0.b'） | 'name' 或 'obj.name'  |
| type                 | string   | '' | 具体渲染的表单类型, 目前支持element常用的全部组件，若不支持可在企业微信找`王瑞`（ps: 全小写） |  'input'    |
| options              | array   |  | 若type是`select`跟`radio`那么具体的选型就由options参数来实现 |  options: [{value: 1, name: '否'}, {value: 2, name:'是'}]  |
| render               | function |  | 若`type`的类型为 `custom`, (组件中涉及到的`render`全为`jsx`写法) | `(h) => <span>这个一个测试render</span>` |
| props                | Object   | {} |  传递实际功能组件的参数列表    |     |
| formItemProps        | Object   | {} |  传递给 element form-item 组件的参数列表    |  {}   |
| slots                | Object   | {} |  传给 `element form-item` 的slot（ps：参数 h 必填）    |  `{ label: (h) =>  (<span>text label</spa>) }`  |
| when                | `boolean` or `function`   | {} |  控制form-item是否渲染    |  `true` or  `() => true` |
| top        | string 或 function   | '' 或 (h) => {}  |  设置formItem上面的插槽（如下图）   | 'top' 或者 `(h) => <span>top</span>`   |
| prefix        | string 或 function   | '' 或 (h) => {}  |  设置formItem左边的插槽（如下图）   | 'prefix' 或者 `(h) => <span>prefix</span>`   |
| suffix        | string 或 function   | '' 或 (h) => {}  |  设置formItem右边的插槽（如下图）   | 'suffix' 或者 `(h) => <span>suffix</span>`   |
| bottom        | string 或 function   | '' 或 (h) => {}  |  设置formItem下面的插槽（如下图）   | 'bottom' 或者 `(h) => <span>bottom</span>`   |


::: tip
比如 vue 事件 或者 指令 的使用参数 [详见 vue jsx 写法](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5-data-%E5%AF%B9%E8%B1%A1)，写法一致, 比如`@change`事件， 会变成参数 `on: { change: () => {}`，诸如此类 }

正常组件的props，通过props参数来传递

正常的 HTML 特性 比如 input的 `maxLength`,需要通过attrs来传递

ps: 这是vue jsx 的一个比较不好的特性，目前没有太好的方式解决
:::
