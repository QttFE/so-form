# q-form 📰

> 渐进式通用vue表单

ps: 组件涉及`jsx`操作， 可以[点击这里学习](https://cn.vuejs.org/v2/guide/render-function.html)

---

## feature
- json-schema to form
- 自动双向数据绑定
- 表单支持自定义render（[jsx写法](https://cn.vuejs.org/v2/guide/render-function.html#JSX)）
- 支持拓展components
- ~~各种方便插槽~~(todo)
- ~~全局切换`edit`/`preview`状态~~(todo)

## example

[基础用法](./example/basic/src/App.vue)

---

例如下图，通过左边的简单配置，就可以生成右边表单。

![example](./static/basic.gif)

## install

```shell
  # vue支持 jsx写法
  npm i babel-plugin-syntax-jsx babel-plugin-transform-vue-jsx --dev

  # 在.babelrc文件中加入
    "plugins": ["transform-vue-jsx"]

  # 引入
  npm i @qtt/q-form --dev

```

## usage
```
  import qform from '@qtt/q-form'

  Vue.use(Element)
  Vue.use(qform, {
    source: Element,
  })

```


```html
  <!-- model 为表单数据中心，iFormItem 通用的vue表单会自动数据绑定 -->
  <iForm :model="model">
    <iFormItem v-for="(col, index) in columns" v-bind="col" :key="index"></iFormItem>
  </iForm>

```

```js
  // 注意，需要把columns写在computed内部（若卸载data后续会有context问题）
  computed: {
    columns (h) {
      return [
        { label: '任务名称', name: 'job', type: 'input'},
        { label: '短信内容', name: 'msg', type: 'input', on: {}, props: {
            type: 'textarea'
        }},
        { label: '是否昵称短信', name: 'isNickMsg', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}] , on: {}},
        { label: '昵称短信内容', name: 'nickname', type: 'input', on: {}, props: {
            type: 'textarea'
        }},
        { label: '落地页个性化', name: 'land', type: 'radio', options: [{value: 1, name: '否'}, {value: 2, name:'是'}] , on: {}},
        { label: 'cu', name: 'custom', type: 'custom', render (h) {
          return (
            <span>自定义内容</span>
          )
        }}
      ]
    }
  },
```

## Api
### iForm props

| Name                 | Type      | Default      | Description                   | example                             |
|----------------------|-----------|--------------|-------------------------------|-------------------------------------|
| model            | Object  | {} | 表单数据对象，form-item的数据来源         |  `{ name: '123', age: 18 }` |
|其他参数详见[`element form组件`](http://element-cn.eleme.io/#/zh-CN/component/form#form-attributes)，使用方式一致 |


### iFormItem props
| Name                 | Type       | Default      | Description               |   example                           |
|----------------------|------------|--------------|---------------------------|-------------------------------------|
| label                | string   | '' | 表单标签名称 | `姓名` |
| name                 | string   |   | 会去`<iForm>`的model对象里找到值进行双向绑定（支持多级路径，如'obj.a.b'或'obj.0.b'） | 'name' 或 'obj.name'  |
| type                 | string   | '' | 具体渲染的表单类型, 目前支持element常用的全部组件，若不支持可在企业微信找`王瑞`（ps: 全小写） |  'input'    |
| render               | function |  | 若`type`的类型为 `custom`, (组件中涉及到的`render`全为`jsx`写法) | `(h) => <span>这个一个测试render</span>` |
| props                | Object   | {} |  传递实际功能组件的参数列表    |     |
| formItemProps        | Object   | {} |  传递给 element form-item 组件的参数列表    |  {}   |
| slots                | Object   | {} |  传给 `element form-item` 的slot（ps：参数 h 必填）    |  `{ label: (h) =>  (<span>text label</spa>) }`  |
| | | |  比如 vue 事件 或者 指令 的使用参数 [详见 vue jsx 写法](https://cn.vuejs.org/v2/guide/render-function.html#%E6%B7%B1%E5%85%A5-data-%E5%AF%B9%E8%B1%A1)，写法一致, 比如`@change`事件， 会变成参数 `on: { change: () => {}`，诸如此类 }  |


## 联动

这部分，主要在组件的回调，比如 `on: { click: () => this.model.testName = '测试' }`，联动修改其他model层数据

## 校验

用法，参数位置，参数都跟 `ELEMENT` 一致

## todo

- [x] label可render
- [ ] `<if>`逻辑组件
- [ ] `<FormColumns>` 组件
- [ ] `option`组件支持传参
- [ ] 全局切换`edit`/`preview`状态
- [ ] `formItem` 支持 `prefix` 等插槽
- [ ] `when`/`hide` 参数 可以控制`<formitem>`渲染
- [ ] 过滤不需要的`props`
- [ ] 优化状态联动
- [ ] 支持iview
- [ ] 完善错误提示


## issue 🤔

> 如果存在`bug`或者有好的一些改善意见建议，💡

- 可在`km`上评论，[传送门](http://km.qutoutiao.net/display/MD/q-form)
- 也可在npm中直接写issue， [传送门](https://git.qutoutiao.net/npm/q-form/issues)
